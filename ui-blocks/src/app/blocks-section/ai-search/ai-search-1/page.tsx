'use client';

import { useEffect, useState, useRef } from 'react';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import styles from './page.module.css';

export default function AISearch1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState<{ maxWidth: string } | { width: string }>({ maxWidth: '400px'});
    const searchKeyword = useRef("Documentation");
    const search = useRef<AutoCompleteComponent | null>(null);

    const openPopup = (): void => {
        setTimeout(() => {
            if (search.current) {
                search.current?.showPopup();
                const inputContainer = search.current['inputWrapper'].container;
                const searchIcon = document.createElement('span');
                searchIcon.className = 'e-icons e-search';
                inputContainer?.insertAdjacentElement('afterbegin', searchIcon);
            }
        }, 250);
    };

    const searchResult = (event: any): void => {
        searchKeyword.current = event.text?.trim() ? event.text : "Documentation";
    };

    const handleResize = (): void => {
        setWidth(window.innerWidth > 767 ? { maxWidth: "400px" } : { width: "100%" });
        search.current?.hidePopup();
        const searchInterval = setInterval(() => {
            search.current?.showPopup();
        }, 250);
        setTimeout(() => clearInterval(searchInterval), 1000);
    }

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-search-1' && blockData.theme) {
                    setTheme(blockData.theme);
                }
            } catch (error) {
                console.log('Error parsing message data: ', error);
            }
        }
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
                        <div className="w-full pt-5 pb-4 h-screen">
                            <div id={styles["search-list"]} className="px-4 mx-auto lg:px-0" style={width}>
                                <AutoCompleteComponent
                                    key={"search-1-tw"}
                                    ref={search}
                                    cssClass="e-bigger"
                                    placeholder="Search"
                                    popupHeight="530px"
                                    focus={() => search.current?.showPopup()}
                                    filtering={searchResult}
                                    created={openPopup}
                                    noRecordsTemplate={() => (
                                        <div className="text-center p-6 m-auto">
                                            <div className="mb-3">
                                                <span className="border border-gray-200 p-2 rounded text-xl e-icons e-folder-open dark:border-gray-600 dark:text-gray-100"></span>
                                            </div>
                                            <div>
                                                <div className="mb-4">
                                                    <div className="mb-1 text-sm font-medium text-gray-900 dark:text-white">No search results found</div>
                                                    <div className="text-sm text-gray-900 dark:text-white">"{searchKeyword.current}" did not match any chat history. Please try again or <a href="#" className="font-normal underline p-0">create a new chat</a>.</div>
                                                </div>
                                                <div>
                                                    <ButtonComponent className="e-outline px-4 !text-base" content="Clear search" type="button"></ButtonComponent>
                                                </div>
                                            </div>
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
                        <div className="w-100 pt-3 pb-3 h-100">
                            <div id={styles["search-list"]} className="px-3 mx-auto px-lg-0" style={width}>
                                <AutoCompleteComponent
                                    key={"search-1-bs"}
                                    ref={search}
                                    cssClass="e-bigger"
                                    placeholder="Search"
                                    popupHeight="530px"
                                    focus={() => search.current?.showPopup()}
                                    filtering={searchResult}
                                    created={openPopup}
                                    noRecordsTemplate={() => (
                                        <div className="text-center fs-6 py-4 px-sm-4 mx-auto">
                                            <div className="mb-3">
                                                <span className="border p-2 rounded fs-4 e-icons e-folder-open"></span>
                                            </div>
                                            <div>
                                                <div className="mb-4">
                                                    <div className="mb-1 fs-6 fw-medium text-body">No search results found</div>
                                                    <div className="small text-body">"{searchKeyword.current}" did not match any chat history. Please try again or <a href="#" className="font-normal underline p-0">create a new chat</a>.</div>
                                                </div>
                                                <div>
                                                    <ButtonComponent className="e-outline px-4 !text-base" content="Clear search" type="button"></ButtonComponent>
                                                </div>
                                            </div>
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
