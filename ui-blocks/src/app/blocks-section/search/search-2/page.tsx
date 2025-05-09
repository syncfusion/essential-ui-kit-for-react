'use client';

import { useRef, useEffect, useState } from 'react';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export default function Search2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const search = useRef<AutoCompleteComponent | null>(null);
    const [width, setWidth] = useState<{ maxWidth: string } | { width: string }>({ maxWidth: '400px'});

    const data: any[] = [
        {
            id: 1,
            text: 'Active Employees in HR',
            status: ''
        },
        {
            id: 2,
            text: 'Open Positions in Sales',
            status: ''
        },
        {
            id: 3,
            text: 'Employees with High Performance Ratings',
            status: ''
        },
        {
            id: 4,
            text: 'Training Programs Available',
            status: ''
        },
        {
            id: 5,
            text: 'Darlene Robertson',
            status: 'Offline'
        }
    ];

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
        setWidth(window.innerWidth > 767 ? { maxWidth: "400px" } : { width: "100%" })
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
                if (blockData.name === 'search-2' && blockData.theme) {
                    setTheme(blockData.theme);
                }
            } catch (error) {
                console.log('Error parsing message data: ', error);
            }
        }
    }
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
                            <div className="px-4 mx-auto lg:px-0" style={width}>
                                <AutoCompleteComponent
                                    cssClass="e-bigger"
                                    ref={search}
                                    dataSource={data}
                                    placeholder="Search"
                                    popupHeight="530px"
                                    focus={() => search.current?.showPopup()}
                                    created={openPopup}
                                    itemTemplate={(data: any) => (
                                        <div slot="itemTemplate" className="text-sm font-medium text-wrap flex justify-between">
                                            <div className="text-gray-900 dark:text-white indent-0 px-4 py-2">{data.text}</div>
                                            <span className="text-gray-600 dark:text-gray-300 flex items-center">{data.status}</span>
                                        </div>
                                    )}
                                    noRecordsTemplate={() => (
                                        <div slot="noRecordsTemplate" className="text-center py-6 w-2/3 m-auto">
                                            <div className="mb-3">
                                                <span className="border border-gray-200 p-2 rounded text-xl e-icons e-search dark:border-gray-600 dark:text-gray-100"></span>
                                            </div>
                                            <div>
                                                <div className="mb-4">
                                                    <div className="mb-1 text-lg text-gray-900 font-medium dark:text-white">No results found</div>
                                                    <div className="text-sm text-gray-600 font-medium dark:text-gray-300">"Webflow" did not match any projects or commands. Please try again.</div>
                                                </div>
                                                <div>
                                                    <ButtonComponent cssClass="e-btn e-outline px-4 text-gray-700 !text-base !dark:text-white" content="Clear Search" type="button"></ButtonComponent>
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
                        <div className="container-fluid pt-4 pb-3">
                            <div className="row justify-content-center">
                                <div className="px-3 px-lg-0 mx-auto" style={width}>
                                    <AutoCompleteComponent
                                        cssClass="e-bigger"
                                        dataSource={data}
                                        ref={search}
                                        popupHeight="530px"
                                        placeholder="Search"
                                        focus={() => search.current?.showPopup()}
                                        created={openPopup}
                                        itemTemplate={(data: any) => (
                                            <div className="d-flex justify-content-between text-wrap fs-6 lh-base fw-medium px-3 pt-2 pb-2" style={{ textIndent: 0 }}>
                                                <div className="text-body lh-base">{data.text}</div>
                                                <span className="text-body-secondary lh-base">{data.status}</span>
                                            </div>
                                        )}
                                        noRecordsTemplate={() => (
                                            <div className="text-center py-5 w-75 m-auto">
                                                <div className="mb-3">
                                                    <span className="border border-light-subtle p-2 rounded text-xl e-icons e-search"></span>
                                                </div>
                                                <div>
                                                    <div className="mb-3">
                                                        <div className="mb-1 fw-medium lh-lg h6 text-body">No results found</div>
                                                        <div className="fw-medium text-body-tertiary">"Webflow" did not match any projects or commands. Please try again.</div>
                                                    </div>
                                                    <div>
                                                        <ButtonComponent cssClass="e-outline px-4 fw-medium" content="Clear Search"></ButtonComponent>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    ></AutoCompleteComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
