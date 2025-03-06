'use client';

import { useRef, useEffect, useState } from 'react';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';

export default function Search1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState<{ maxWidth: string } | { width: string }>({ maxWidth: '520px'});
    const search = useRef<AutoCompleteComponent | null>(null);

    const data: any[] = [
        {
            id: 1,
            category: 'Frequently used',
            title: 'Linear',
            text: 'Fix login bug',
            avatar: ['avatar-1.jpg', 'avatar-2.jpg', 'avatar-3.jpg', 'avatar-4.jpg'],
            image: 'linear.svg'
        },
        {
            id: 2,
            category: 'Frequently used',
            title: 'Zoom',
            text: 'Team meeting on project planning',
            avatar: ['avatar-1.jpg', 'avatar-2.jpg', 'avatar-3.jpg'],
            image: 'zoom.svg'
        },
        {
            id: 3,
            category: 'Frequently used',
            title: 'GitHub',
            text: 'Code review for development',
            avatar: ['avatar-1.jpg', 'avatar-2.jpg'],
            image: 'github.svg'
        },
        {
            id: 4,
            category: 'Utilities',
            title: 'Automations',
            text: 'Set up automations and shortcuts',
            tag: 'Automation'
        },
        {
            id: 5,
            category: 'Utilities',
            title: 'Log History',
            text: 'Search and monitor logs and achieved logs',
            tag: 'Logging'
        },
        {
            id: 6,
            category: 'Utilities',
            title: 'Import Integration',
            text: 'Add a new integration to your organization',
            tag: 'Integration'
        }
    ];
    const fields = { groupBy: 'category', value: 'title' };
    
    const openPopup = (): void => {
        setTimeout(() => {
            if (search.current) {
                search.current?.showPopup();
                const inputContainer = search.current['inputWrapper'].container;
                const searchIcon = document.createElement('span');
                searchIcon.className = 'e-icons e-search';
                searchIcon.style.cssText = 'display: flex; align-items: center; margin-left: 10px;';
                inputContainer?.insertAdjacentElement('afterbegin', searchIcon);
            }
        }, 250);
    };

    const handleResize = (): void => {
        setWidth(window.innerWidth > 767 ? { maxWidth: "520px" } : { width: "100%" })
        search.current?.refresh();
        const searchInterval = setInterval(() => {
            search.current?.showPopup();
        }, 250);
        setTimeout(() => clearInterval(searchInterval), 1000);
    }

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'search-1' && blockData.theme) {
                    setTheme(blockData.theme);
                }
            } catch (error) {
                console.log('Error parsing message data: ', error);
            }
        }
        setTimeout(() => {
            search.current?.showPopup();
        },210)
    };
    /* SB Code - End */

    useEffect(() => {
        /* SB Code - Start */
        window.addEventListener('message', handleMessageEvent);
        /* SB Code - End */
        window.addEventListener('resize', handleResize);

        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    
    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-900 h-full">
                        <div className="w-full pt-5 pb-4" style={{ height: "600px" }}>
                            <div className="px-4 mx-auto lg:px-0" style={width}>
                                <AutoCompleteComponent
                                    cssClass="e-bigger"
                                    ref={search}
                                    dataSource={data}
                                    fields={fields}
                                    popupHeight="530px"
                                    placeholder="Search"
                                    focus={() => search.current?.showPopup()}
                                    created={openPopup}
                                   
                                    itemTemplate={(data: any) => (
                                        <div className="flex justify-between pl-6 pr-2 py-3">
                                            <div className="flex items-center">
                                                <div className="indent-0 shrink-0">
                                                    {data.image && (
                                                        <img className="rounded-xl" src={`/react/essential-ui-kit/blocks/assets/images/search/${data.image}`} alt={`${data.title.toLowerCase()} logo`} />
                                                    )}
                                                    {data.tag && (
                                                        <span className={`e-avatar indent-0 e-avatar-large ${data.tag === "Automation" ? "text-green-600 bg-green-200 dark:bg-green-800 dark:text-green-200" : data.tag === "Logging" ? "text-cyan-600 bg-cyan-100 dark:bg-cyan-800 dark:text-cyan-200" : data.tag === "Integration" ? "text-orange-600 bg-orange-100 dark:bg-orange-800 dark:text-orange-200" : ""}`}>
                                                            <span className={`e-icons text-2xl ${data.tag === "Automation" ? "e-settings" : data.tag === "Logging" ? "sf-icon-clock-fast-backward" : data.tag === "Integration" ? "e-import-1" : ""}`}></span>
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="text-sm indent-0 ml-2">
                                                    <p className="font-medium text-gray-900 dark:text-white">{data.title}</p>
                                                    <p className="text-gray-600 dark:text-gray-300 !text-wrap">{data.text}</p>
                                                </div>
                                            </div>
                                            {data.avatar && data.avatar.length > 0 && (
                                                <div className="w-2/5">
                                                    <div className="flex h-full items-center relative">
                                                        {data.avatar.map((img: string, index: number) => (
                                                            <span key={index} className="absolute e-avatar e-avatar-circle overflow-hidden" style={{ width: "32px", height: "32px", right: `${index * 22}px`, }}>
                                                                <img src={`/react/essential-ui-kit/blocks/assets/images/common/avatar/${img}`} className="w-100 h-100 object-cover" alt="logo" />
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                ></AutoCompleteComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body h-100">
                        <div className="w-100 pt-4 pb-3" style={{ height: '600px' }}>
                            <div className="px-3 px-lg-0 mx-auto" style={width}>
                                <AutoCompleteComponent
                                    cssClass="e-bigger"
                                    ref={search}
                                    dataSource={data}
                                    fields={fields}
                                    popupHeight="510px"
                                    placeholder="Search"
                                    focus={() => search.current?.showPopup()}
                                    created={openPopup}
                                   
                                    itemTemplate={(data: any) => (
                                        <div className="d-flex justify-content-between ps-4 py-2 pe-2" style={{ textIndent: 0 }}>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    {data.image && (
                                                        <img className="rounded-3" src={`/react/essential-ui-kit/blocks/assets/images/search/${data.image}`} alt={`${data.title.toLowerCase()} logo`} />
                                                    )}
                                                    {data.tag && (
                                                        <span className={`e-avatar ms-0 e-avatar-large ${data.tag === 'Automation' ? 'text-success-emphasis bg-success-subtle' : data.tag === 'Logging' ? 'text-info-emphasis bg-info-subtle' : 'text-warning-emphasis bg-warning-subtle'}`}>
                                                            <span className={`e-icons fs-2 ${data.tag === 'Automation' ? 'e-settings' : data.tag === 'Logging' ? 'sf-icon-clock-fast-backward' : 'e-import-1'}`}></span>
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="mx-2">
                                                    <div className="fw-medium text-body m-0 lh-base small">{data.title}</div>
                                                    <p className="text-body-secondary text-wrap m-0 lh-base small fw-normal">{data.text}</p>
                                                </div>
                                            </div>
                                            {data.avatar && data.avatar.length > 0 && (
                                                <div style={{ width: data.avatar.length > 0 ? '40%' : 'auto' }}>
                                                    <div className="d-flex position-relative align-items-center h-100">
                                                        {data.avatar.map((img: string, index: number) => (
                                                            <span key={index} className="position-absolute e-avatar e-avatar-circle overflow-hidden" style={{ width: '32px', height: '32px', right: `${index * 22}px` }}>
                                                                <img src={`/react/essential-ui-kit/blocks/assets/images/common/avatar/${img}`} className="w-100 h-100 object-cover" alt="avatar" />
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                ></AutoCompleteComponent>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
  }
