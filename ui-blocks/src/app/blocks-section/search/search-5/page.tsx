'use client';

import { useRef, useEffect, useState } from 'react';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import { ChipListComponent, ChipsDirective, ChipDirective } from '@syncfusion/ej2-react-buttons';

export default function Search5() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState<{ maxWidth: string } | { width: string }>({ maxWidth: '480px'});
    const search = useRef<AutoCompleteComponent | null>(null);
    
    const data: any[] = [
        {
            id: '#23568',
            ticket: 'Unable to Log In to the Application',
            createdDate: 'October 5, 2024',
            fontIcon: 'e-icons e-circle-info',
            colorTheme: 'Green'
        },
        {
            id: '#23562',
            ticket: 'Software Update Error',
            createdDate: 'October 1, 2024',
            fontIcon: 'e-icons e-reset',
            colorTheme: 'Orange'
        },
        {
            id: '#23556',
            ticket: 'Feature Request: Dark Mode',
            createdDate: 'September 28, 2024',
            fontIcon: 'e-icons e-objects',
            colorTheme: 'Blue'
        },
        {
            id: '#23554',
            ticket: 'API Documentation Missing',
            createdDate: 'September 25, 2024',
            fontIcon: 'e-icons e-file-new',
            colorTheme: 'Red'
        },
        {
            id: '#23548',
            ticket: 'Unable to Generate Reports',
            createdDate: 'September 21, 2024',
            fontIcon: 'e-icons e-circle-info',
            colorTheme: 'Indigo'
        },
        {
            id: '#23547',
            ticket: 'Multi-Language Support',
            createdDate: 'September 19, 2024',
            fontIcon: 'e-icons e-paragraph',
            colorTheme: 'Green'
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
        setWidth(window.innerWidth > 767 ? { maxWidth: "480px" } : { width: "100%" })
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
                if (blockData.name === 'search-5' && blockData.theme) {
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
        window.addEventListener('resize', handleResize );

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
                        <div className="w-full pt-5 pb-4" style={{ height: '750px' }}>
                            <div className="px-4 mx-auto lg:px-0" style={width}>
                                <AutoCompleteComponent
                                    key={"search-5-tw"}
                                    cssClass="e-bigger"
                                    ref={search}
                                    dataSource={data}
                                    fields={{ value: 'ticket' }}
                                    popupHeight="650px"
                                    placeholder="Search"
                                    focus={() => search.current?.showPopup()}
                                    created={openPopup}
                                    headerTemplate={() => (
                                        <div>
                                            <div className="p-5 border-b border-gray-200 dark:border-gray-600 mb-2">
                                                <ChipListComponent id="chip-filter" cssClass="!border-gray-200 !dark:border-gray-600">
                                                    <ChipsDirective>
                                                        <ChipDirective cssClass="e-outline !text-sm !font-medium !px-3 !py-1 !rounded-2xl !h-8 !ml-0" text="Ticket ID"></ChipDirective>
                                                        <ChipDirective cssClass="e-outline !text-sm !font-medium !px-3 !py-1 !rounded-2xl !h-8 !ml-0" text="Status"></ChipDirective>
                                                        <ChipDirective cssClass="e-outline !text-sm !font-medium !px-3 !py-1 !rounded-2xl !h-8 !ml-0" text="Priority"></ChipDirective>
                                                        <ChipDirective cssClass="e-outline !text-sm !font-medium !px-3 !py-1 !rounded-2xl !h-8 !ml-0" text="Created by"></ChipDirective>
                                                    </ChipsDirective>
                                                </ChipListComponent>
                                            </div>
                                            <p className="my-2 mx-5 text-gray-600 font-semibold text-base dark:text-gray-300">Ticket</p>
                                        </div>
                                    )}
                                    itemTemplate={(data: any) => (
                                        <div slot="itemTemplate" className="flex items-center gap-4 pl-5 py-2">
                                            {data.fontIcon && (
                                                <span className={`indent-0 e-avatar e-avatar-medium shrink-0 text-sm ${data.colorTheme === 'Green' ? 'bg-green-100 text-green-600 dark:bg-green-800 dark:text-green-300' : data.colorTheme === 'Orange' ? 'bg-orange-50 text-orange-500 dark:bg-orange-800 dark:text-orange-300' : data.colorTheme === 'Blue' ? 'bg-cyan-50 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-300' : data.colorTheme === 'Red' ? 'bg-red-50 text-red-500 dark:bg-red-800 dark:text-red-300' : data.colorTheme === 'Indigo' ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-800 dark:text-indigo-300' : ''}`}>
                                                    <span className={`text-2xl ${data.fontIcon}`}></span>
                                                </span>
                                            )}
                                            <div className="w-full indent-0">
                                                <div className="text-sm !font-medium flex items-center !text-wrap text-gray-900 dark:text-white mb-0.5">{data.ticket}</div>
                                                <div className="text-gray-600 font-normal flex items-center !text-wrap dark:text-gray-300 text-sm">
                                                    {data.id}, Created on: {data.createdDate}
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
                        <div className="w-100 pt-4 pb-3" style={{ height: '800px' }}>
                            <div className="px-3 px-lg-0 mx-auto" style={width}>
                                <AutoCompleteComponent
                                    cssClass="e-bigger"
                                    ref={search}
                                    dataSource={data}
                                    fields={{ value: 'ticket' }}
                                    popupHeight="730px"
                                    placeholder="Search"
                                    focus={() => search.current?.showPopup()}
                                    created={openPopup}
                                    headerTemplate={() => (
                                        <div>
                                            <div className="p-3 border-bottom border-light-subtle mb-2">
                                                <ChipListComponent id="chip-filter" cssClass="p-3">
                                                    <ChipsDirective>
                                                        <ChipDirective cssClass="fs-6 lh-base fw-medium px-3 py-1 e-outline border border-light-subtle" text="Ticket ID"></ChipDirective>
                                                        <ChipDirective cssClass="fs-6 lh-base fw-medium px-3 py-1 e-outline border border-light-subtle" text="Status"></ChipDirective>
                                                        <ChipDirective cssClass="fs-6 lh-base fw-medium px-3 py-1 e-outline border border-light-subtle" text="Priority"></ChipDirective>
                                                        <ChipDirective cssClass="fs-6 lh-base fw-medium px-3 py-1 e-outline border border-light-subtle" text="Created by"></ChipDirective>
                                                    </ChipsDirective>
                                                </ChipListComponent>
                                            </div>
                                            <p className="my-2 mx-4 fw-semibold fs-5 text-body-secondary">Ticket</p>
                                        </div>
                                    )}
                                    itemTemplate={(data: any) => (
                                        <div className="d-flex align-items-center ps-4 py-2" style={{ textIndent: 0 }}>
                                            {data.fontIcon && (
                                                <span className={`e-avatar e-avatar-medium flex-shrink-0 rounded ${data.colorTheme === 'Green' ? 'bg-success-subtle text-success' : data.colorTheme === 'Orange' ? 'bg-warning-subtle text-warning-emphasis' : data.colorTheme === 'Blue' ? 'bg-info-subtle text-info-emphasis' : data.colorTheme === 'Red' ? 'bg-danger-subtle text-danger-emphasis' : 'bg-primary-subtle text-primary'}`}>
                                                    <span className={`fs-5 ${data.fontIcon}`}></span>
                                                </span>
                                            )}
                                            <div className="flex-grow-1 ms-3">
                                                <div className="text-wrap lh-base fw-medium fs-6 text-body">{data.ticket}</div>
                                                <div className="text-body-secondary text-wrap lh-base fw-normal fs-6">
                                                    {data.id}, <span>Created on: {data.createdDate}</span>
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
