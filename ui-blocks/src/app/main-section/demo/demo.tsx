'use client';

import { useRef, useEffect, useState } from "react";
import styles from './demo.module.css';
import IframeComponent from "./iframe";

declare let hljs: any;

interface DemoProps {
    blockName: string;
    componentUrl: string;
}

enum Mode {
    Desktop = "desktop",
    Tablet = "tablet",
    Mobile = "mobile"
}

export default function Demo({ blockName, componentUrl }: DemoProps) {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const themeModeButtonRef = useRef<HTMLDivElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const previewCodeContainerRef = useRef<HTMLDivElement | null>(null);
    const copyButtonRef = useRef<HTMLDivElement | null>(null);
    const copyClipboardTooltipRef = useRef<HTMLDivElement | null>(null);
    const deviceButtonRef = useRef<HTMLDivElement | null>(null);
    const themeDropdownContentRef = useRef<HTMLDivElement | null>(null);
    const themeDropdownRef = useRef<HTMLDivElement | null>(null);
    const [currentView, setCurrentView] = useState(Mode.Desktop);
    const [theme, setTheme] = useState('tailwind');
    const [themeIndex, setThemeIndex] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [tabs, setTabs] = useState(['tsx']);
    const [currentTab, setCurrentTab] = useState('tsx');
    const [isPreviewMode, setIsPreviewMode] = useState(true);
    const [tsxContent, setTsxContent] = useState('');
    const [cssContent, setCssContent] = useState('');

    const widths: { [key: string]: string } = {
        desktop: '100%',
        tablet: '48rem',
        mobile: '22.5rem'
    };
    const iframeURL = blockName + '/' + componentUrl;

    useEffect(() => {
        const iframeDocument = iframeRef.current?.contentDocument || iframeRef.current?.contentWindow?.document;
        if (theme === 'tailwind') {
            iframeDocument?.documentElement?.classList.add(isDarkMode ? 'dark' : 'light');
        } else {
            iframeDocument?.documentElement?.setAttribute('data-bs-theme', isDarkMode ? 'dark' : 'light');
        }

    }, [theme, isDarkMode]);

    useEffect(() => {
        if (!document.querySelector('link[href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/github.min.css"]')) {
            const hlLinkElement = document.createElement('link');
            hlLinkElement.rel = 'stylesheet';
            hlLinkElement.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/github.min.css';
            document.head.appendChild(hlLinkElement);
        }

        if (!document.querySelector('script[src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js"]')) {
            const hlScriptElement = document.createElement('script');
            hlScriptElement.async = true;
            hlScriptElement.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js';
            document.head.appendChild(hlScriptElement);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            const iframeDoc = iframeRef.current?.contentDocument || iframeRef.current?.contentWindow?.document;
            iframeDoc?.removeEventListener("click", handleLinkClick);
        };
    }, []);

    
    const handleLinkClick = (event) => {
        const target = event.target.closest("a");
        if (target && target.getAttribute("href") === "#") {
            event.preventDefault();
        }
    };

    const handleLoad = () => {
        const iframeDoc = iframeRef.current?.contentDocument || iframeRef.current?.contentWindow?.document;    
        iframeDoc?.addEventListener("click", handleLinkClick);

        addStylesheetsToIframe(theme);
    }

    const handleResize = () => {
        if (currentView === Mode.Tablet && window.innerWidth <= 996 && iframeRef.current) {
            iframeRef.current.style.minWidth = '100%';
        }
        setTimeout(updateIframeHeight, 200);
    };

    const showTab = (tabId: string) => {
        setCurrentTab(tabId);
    };

    const togglePreviewCode = (event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>) => {
        const targetElement = event.target as HTMLElement;
        const isPreview = targetElement.getAttribute('tab-text') === 'Preview';
        setIsPreviewMode(isPreview);
        if (isPreview) {
            showPreview();
        }
        else {
            showSourceCode();
        }
    };

    const showPreview = () => {
        const elementsToUpdate = [
            { ref: iframeRef.current?.parentElement, display: '' },
            { ref: deviceButtonRef.current, display: 'flex' },
            { ref: themeDropdownRef.current, display: 'block' },
            { ref: themeModeButtonRef.current, display: 'block' },
            { ref: previewCodeContainerRef.current, display: 'none' }
        ];

        elementsToUpdate.forEach(({ ref, display }) => {
            if (ref) {
                ref.style.display = display;
            }
        });
    };

    const showSourceCode = () => {
        const tsxCodeBlock = document.getElementById(`${componentUrl}_tsx-code`);
        const cssCodeBlock = document.getElementById(`${componentUrl}_css-code`);
        fetch(`/react/essential-ui-kit/blocks/assets/code-snippet/${componentUrl}/page.tsx`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network error: Unable to fetch data. Please try again.');
                }
                return response.text();
            })
            .then((text) => {
                const code = extractHTMLSectionContent(text);
                setTsxContent(code);
                if (tsxCodeBlock) {
                    tsxCodeBlock.textContent = code;
                    hljs.highlightElement(tsxCodeBlock);
                }
            })
            .catch((error) => {
                setTsxContent('');
                console.error('Error fetching TSX content: ', error);
                if (tsxCodeBlock) {
                    tsxCodeBlock.textContent = 'No content available.';
                }
            });
        fetch(`/react/essential-ui-kit/blocks/assets/code-snippet/${componentUrl}/page.module.css`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network error: Unable to fetch data. Please try again.');
                }
                return response.text();
            })
            .then((text) => {
                if (text.trim() !== '') {
                    setTabs(['tsx', 'css']);
                    setCssContent(text);
                    if (cssCodeBlock) {
                        cssCodeBlock.textContent = text;
                        hljs.highlightElement(cssCodeBlock);
                    }
                }
            })
            .catch((error) => {
                setCssContent('');
                console.error('Error fetching CSS content: ', error);
                if (cssCodeBlock) {
                    cssCodeBlock.textContent = 'No content available.';
                }
            });
        if (iframeRef.current?.parentElement) {
            iframeRef.current.parentElement.style.display = 'none';
        }
        previewCodeContainerRef.current!.style.display = 'block';
        [deviceButtonRef, themeDropdownRef, themeModeButtonRef].forEach(ref => {
            if (ref.current) {
                ref.current.style.display = 'none';
            }
        });
    };

    const extractHTMLSectionContent = (code: string): string => {
        const getContentMatch = code.match(/const getContent = \(\) => {([\s\S]*?)return getContent\(\);/);

        if (!getContentMatch)
            return code;

        const getContentBody = getContentMatch[0];
        const sectionContents = getContentBody.match(/<section[\s\S]*?<\/section>/g) || [];
        let extractedContent = sectionContents[theme === 'tailwind' ? 0 : 1]?.trim() || '';
        extractedContent = formatHTML(extractedContent);
        return code.replace(/const getContent = \(\) => {[\s\S]*?return getContent\(\);/, `\n    return (\n        ${extractedContent}\n    );`).trim();
    };

    const formatHTML = (html: string): string => {
        const lines = html.split('\n');
        const leadingSpaces = lines[1].search(/\S|$/) - 12;

        const formattedLines = lines.map(line => {
            return line.startsWith(' '.repeat(leadingSpaces))
                ? line.slice(leadingSpaces)
                : line;
        });

        return formattedLines.join('\n');
    };

    const switchMode = (mode: Mode) => {
        setCurrentView(mode);
        if (iframeRef.current) {
            const minWidth = mode !== Mode.Tablet ? widths[mode] : (window.innerWidth > 996 ? widths[mode] : '100%');
            iframeRef.current.style.minWidth = minWidth;
        }
        setTimeout(updateIframeHeight, 200);
    };

    const updateIframeHeight = () => {
        const iframeDocument = iframeRef.current?.contentDocument || iframeRef.current?.contentWindow?.document;

        if (!iframeDocument)
            return;

        if (iframeRef && iframeRef.current) {
            const contentHeight = iframeDocument?.body.scrollHeight !== 0 ? iframeDocument?.body.scrollHeight : iframeDocument?.documentElement.scrollHeight;
            iframeRef.current.style.height = `${(contentHeight ? contentHeight : 0) + 1}px`;
            onHandleOverlayVisibility('hide');
        }
    };

    const toggleDropdown = (args?: string) => {
        const dropdownContent = themeDropdownContentRef.current;
        if (dropdownContent) {
            dropdownContent.style.display = args === 'hide' ? 'none' : dropdownContent.style.display === 'block' ? 'none' : 'block';
            setIsDropdownOpen(dropdownContent.style.display === 'block' ? true : false);
        }
    };

    const onThemeChange = (selectedTheme: string) => {
        toggleDropdown('hide');
        if (theme !== selectedTheme) {
            onHandleOverlayVisibility('show');
            if (selectedTheme === 'tailwind') {
                setThemeIndex(0);
            }
            else {
                setThemeIndex(1);
            }
            setTheme(selectedTheme);
            const message = JSON.stringify({
                name: componentUrl,
                theme: selectedTheme,
            });
            iframeRef.current?.contentWindow?.postMessage(message, '*');
            addStylesheetsToIframe(selectedTheme);
        }
    };

    const addStylesheetsToIframe = (selectedTheme: string, mode?: boolean) => {
        mode = mode !== undefined ? mode : isDarkMode;
        const iframeDocument = iframeRef.current?.contentDocument || iframeRef.current?.contentWindow?.document;

        if (!iframeDocument)
            return;

        const themeName = mode ? `${selectedTheme}dark` : `${selectedTheme}light`;
        const stylesheetLinks = iframeDocument.head.getElementsByTagName('link');

        Array.from(stylesheetLinks).forEach((linkElement: HTMLLinkElement) => {
            if (linkElement.rel === 'stylesheet' && ['syncfusion-style', 'font-icon-style', 'framework-style', 'framework-support-style'].includes(linkElement.id)) {
                iframeDocument.head.removeChild(linkElement);
            }
        });

        iframeDocument.documentElement.removeAttribute('data-bs-theme');
        iframeDocument.documentElement.classList.remove('dark', 'light');

        const stylesheets: { [key: string]: { [key: string]: string } } = {
            tailwindlight: {
                'syncfusion-style': 'https://cdn.syncfusion.com/ej2/29.1.38/tailwind.css',
                'font-icon-style': '/react/essential-ui-kit/blocks/assets/font-icons/tailwind/tailwind-icons.css',
                'framework-style': '/react/essential-ui-kit/blocks/assets/themes/tailwind/tailwind_v2.css',
                'framework-support-style': '/react/essential-ui-kit/blocks/assets/themes/tailwind/indigo.css',
            },
            tailwinddark: {
                'syncfusion-style': 'https://cdn.syncfusion.com/ej2/29.1.38/tailwind-dark.css',
                'font-icon-style': '/react/essential-ui-kit/blocks/assets/font-icons/tailwind/tailwind-icons.css',
                'framework-style': '/react/essential-ui-kit/blocks/assets/themes/tailwind/tailwind_v2.css',
                'framework-support-style': '/react/essential-ui-kit/blocks/assets/themes/tailwind/cyan.css',
            },
            bootstrap5light: {
                'syncfusion-style': 'https://cdn.syncfusion.com/ej2/29.1.38/bootstrap5.3.css',
                'font-icon-style': '/react/essential-ui-kit/blocks/assets/font-icons/bootstrap5_3/bootstrap5_3-icons.css',
                'framework-style': 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
            },
            bootstrap5dark: {
                'syncfusion-style': 'https://cdn.syncfusion.com/ej2/29.1.38/bootstrap5.3-dark.css',
                'font-icon-style': '/react/essential-ui-kit/blocks/assets/font-icons/bootstrap5_3/bootstrap5_3-icons.css',
                'framework-style': 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
            },
        };

        const styles = stylesheets[themeName] || {};

        const loadPromises = Object.entries(styles).map(([key, href]) => {
            const linkElement = iframeDocument.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.id = key;
            linkElement.href = href;
            iframeDocument.head.appendChild(linkElement);

            return new Promise<void>((resolve, reject) => {
                linkElement.addEventListener('load', () => resolve(), { once: true });
                linkElement.addEventListener('error', () => reject(new Error(`Failed to load stylesheet: ${href}`)), { once: true });
            });
        });

        Promise.all(loadPromises)
            .then(() => {
                setTimeout(updateIframeHeight, 200);
            })
            .catch((error) => console.error('Error loading stylesheets:', error));

    };

    const toggleLightDarkModes = () => {
        onHandleOverlayVisibility('show');
        setIsDarkMode(!isDarkMode);
        const message = JSON.stringify({
            mode: isDarkMode ? 'light' : 'dark',
        });
        iframeRef.current?.contentWindow?.postMessage(message, '*');
        addStylesheetsToIframe(theme, !isDarkMode);
    };

    const onHandleOverlayVisibility = (action: 'show' | 'hide') => {
        if (overlayRef.current) {
            const method = action === 'show' ? 'remove' : 'add';
            overlayRef.current.classList[method](styles['remove-overlay']);
        }
    };

    const copyCode = () => {
        const codeElement = document.createElement('textarea');
        codeElement.value = currentTab === 'tsx' ? tsxContent : cssContent;
        document.body.appendChild(codeElement);
        codeElement.select();

        navigator.clipboard.writeText(codeElement.value)
            .then(() => {
                showTooltip();
            })
            .catch((error) => {
                console.error('Error copying text: ', error);
            })
            .finally(() => {
                document.body.removeChild(codeElement);
            });
    };

    const showTooltip = () => {
        const tooltipElement = copyClipboardTooltipRef.current;
        const buttonRect = copyButtonRef.current?.getBoundingClientRect();
        if (tooltipElement && buttonRect) {
            tooltipElement.style.top = `${buttonRect.bottom + window.scrollY + 5}px`;
            tooltipElement.style.left = `${buttonRect.left + window.scrollX - 40}px`;
            tooltipElement.classList.add(styles['show']);
            setTimeout(() => {
                tooltipElement.classList.remove(styles['show']);
            }, 2000);
        }
    };

    return (
        <>
            <div className={styles['main-container']}>
                <div className={styles['header-container']}>
                    <ul className={styles['main-tab']} role="tablist">
                        <li
                            className={`${styles['tab-item']} ${isPreviewMode ? styles['active'] : ''}`}
                            role="tab"
                            tab-text='Preview'
                            aria-selected={isPreviewMode}
                            tabIndex={0}
                            onClick={togglePreviewCode}
                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && togglePreviewCode(e)}>
                            <img src="/react/essential-ui-kit/blocks/assets/images/sample-browser/preview.svg" tab-text='Preview' alt="Preview Tab" width={24} height={24} />
                            <div className={styles['tab-text']} tab-text='Preview'>Preview</div>
                        </li>
                        <li
                            className={`${styles['tab-item']} ${!isPreviewMode ? styles['active'] : ''}`}
                            role="tab"
                            tab-text='Code'
                            aria-selected={!isPreviewMode}
                            tabIndex={0}
                            onClick={togglePreviewCode}
                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && togglePreviewCode(e)}>
                            <img src="/react/essential-ui-kit/blocks/assets/images/sample-browser/code.svg" tab-text='Code' alt="Code Tab" width={24} height={24} />
                            <div className={styles['tab-text']} tab-text='Code'>Code</div>
                        </li>
                    </ul>
                    <div ref={deviceButtonRef} className={styles['device-buttons']}>
                        <div
                            className={`${styles['device']} ${styles['desktop']} ${currentView === Mode.Desktop ? styles['active'] : ''}`}
                            onClick={() => switchMode(Mode.Desktop)}
                            title="Desktop"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && switchMode(Mode.Desktop)}>
                            <img src="/react/essential-ui-kit/blocks/assets/images/sample-browser/monitor.svg" alt="Desktop View" width={20} height={20} />
                        </div>
                        <div
                            className={`${styles['device']} ${'tablet'} ${currentView === Mode.Tablet ? styles['active'] : ''}`}
                            onClick={() => switchMode(Mode.Tablet)}
                            title="Tablet"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && switchMode(Mode.Tablet)}>
                            <img src="/react/essential-ui-kit/blocks/assets/images/sample-browser/tablet.svg" alt="Tablet View" width={20} height={20} />
                        </div>
                        <div
                            className={`${styles['device']} ${'mobile'} ${currentView === Mode.Mobile ? styles['active'] : ''}`}
                            onClick={() => switchMode(Mode.Mobile)}
                            title="Mobile"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && switchMode(Mode.Mobile)}>
                            <img src="/react/essential-ui-kit/blocks/assets/images/sample-browser/smartphone.svg" alt="Mobile View" width={20} height={20} />
                        </div>
                    </div>
                    <div ref={themeDropdownRef} className={styles['custom-dropdown']}>
                        <button
                            className={styles['dropdown-button']}
                            aria-haspopup="true"
                            aria-expanded={isDropdownOpen}
                            onClick={() => toggleDropdown()}
                            tabIndex={0}>
                            <div className={styles['theme-icon']}>
                                <img src="/react/essential-ui-kit/blocks/assets/images/sample-browser/theme.svg" alt="Choose Theme" width={16} height={16} />
                            </div>
                            <div className={styles['dropdown-text']}>Choose theme</div>
                            <div className={styles['down-icon']}>
                                <img src="/react/essential-ui-kit/blocks/assets/images/sample-browser/chevron-down.svg" alt="Show/Hide Dropdown" width={16} height={16} />
                            </div>
                        </button>
                        <div ref={themeDropdownContentRef} className={styles['dropdown-content']} role="menu">
                            <div
                                className={styles['dropdown-item']}
                                data-value="tailwind"
                                onClick={() => onThemeChange('tailwind')}
                                role="menuitem"
                                tabIndex={0}
                                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onThemeChange('tailwind')}>
                                <span className={styles['select-icon']}>
                                    {themeIndex === 0 && <img src="/react/essential-ui-kit/blocks/assets/images/sample-browser/tick.svg" alt="Selected Theme" width={24} height={24} />}
                                </span>
                                Tailwind
                            </div>
                            <div
                                className={styles['dropdown-item']}
                                data-value="bootstrap5.3"
                                onClick={() => onThemeChange('bootstrap5')}
                                role="menuitem"
                                tabIndex={0}
                                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onThemeChange('bootstrap5')}>
                                <span className={styles['select-icon']}>
                                    {themeIndex === 1 && <img src="/react/essential-ui-kit/blocks/assets/images/sample-browser/tick.svg" alt="Selected Theme" width={24} height={24} />}
                                </span>
                                Bootstrap 5.3
                            </div>
                        </div>
                    </div>
                    <div
                        ref={themeModeButtonRef}
                        className={styles['lightDarkButton']}
                        onClick={toggleLightDarkModes}
                        title={isDarkMode ? 'Light' : 'Dark'}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                toggleLightDarkModes();
                                e.preventDefault();
                            }
                        }}>
                        <img width={20} height={20}
                            src={isDarkMode ? '/react/essential-ui-kit/blocks/assets/images/sample-browser/sun.svg' : '/react/essential-ui-kit/blocks/assets/images/sample-browser/moon.svg'}
                            alt="Toggle between Light and Dark Mode" />
                    </div>
                </div>
                <div className={styles['iframe-container']}>
                    <IframeComponent
                        ref={iframeRef}
                        src={iframeURL}
                        className={styles['preview-container']}
                        title="Preview Content"
                        handleLoad={handleLoad}>
                    </IframeComponent>
                    <div ref={overlayRef} className={styles['iframe-overlay']}>
                        <img src="https://placehold.co/100x50?text=Loading..." alt="Loading Indicator" className={styles['overlay-image']} />
                    </div>
                </div>
                <div ref={previewCodeContainerRef} className={styles['preview-code-container']} style={{ display: 'none' }}>
                    <div className={styles['tab-container']}>
                        <div className={styles['tabs']} role="tablist">
                            <div className={styles['tab-buttons']}>
                                {tabs.map(tab => (
                                    <div
                                        key={tab}
                                        className={`${styles['tab']} ${styles[tab + '-tab']} ${tabs.length === 1 ? styles['single-tab'] : currentTab === tab ? styles['active'] : ''}`}
                                        onClick={() => showTab(tab)}
                                        role="tab"
                                        aria-controls={tab}
                                        aria-selected={currentTab === tab}
                                        tabIndex={0}
                                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && showTab(tab)}>
                                        {tab.toUpperCase()}
                                    </div>
                                ))}
                            </div>
                            <div
                                className={styles['copy-button']}
                                ref={copyButtonRef}
                                onClick={copyCode}
                                title="Copy to clipboard"
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && copyCode()}>
                                <img src="/react/essential-ui-kit/blocks/assets/images/sample-browser/copy.svg" alt="Copy Code to Clipboard" width={20} height={20} />
                            </div>
                        </div>
                        {['tsx', 'css'].map(tab => (
                            <div
                                key={tab}
                                id={tab}
                                className={`${styles['tab-content']} ${currentTab === tab ? styles['active'] : ''}`}
                                role="tabpanel">
                                <pre><code id={`${componentUrl}_${tab}-code`} className={`language-${tab}`}></code></pre>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div ref={copyClipboardTooltipRef} className={styles['tooltip']} role="tooltip">
                <div className={styles['tooltip-arrow']}></div>
                Code copied!
            </div>
        </>
    );
}