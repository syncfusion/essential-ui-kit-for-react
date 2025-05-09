'use client';

import { useRef, useEffect, useState } from 'react';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';

export default function Search4() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState<{ maxWidth: string } | { width: string }>({ maxWidth: '480px'});
    const search = useRef<AutoCompleteComponent | null>(null);

    const data: any[] = [
        {
            id: 1,
            name: 'Mark Johnson',
            initial: 'MJ',
            emailId: 'mark.johnson@example.com',
            colorTheme: 'Orange'
        },
        {
            id: 2,
            name: 'Emily White',
            initial: 'EW',
            emailId: 'emily.white@example.com',
            colorTheme: 'Blue'
        },
        {
            id: 3,
            name: 'Tom Harris',
            initial: 'TH',
            emailId: 'tom.harris@example.com',
            colorTheme: 'Blue'
        },
        {
            id: 4,
            name: 'Lisa Green',
            initial: 'LG',
            emailId: 'lisa.green@example.com',
            colorTheme: 'Orange'
        },
        {
            id: 5,
            name: 'David Clark',
            initial: 'DC',
            emailId: 'david.clark@example.com',
            colorTheme: 'Red'
        },
        {
            id: 6,
            name: 'Rachel Lee',
            initial: 'RL',
            emailId: 'rachel.lee@example.com',
            colorTheme: 'Blue'
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

    const avatarColorClass = (colorTheme: any) => {
        switch (colorTheme) {
          case "Orange":
            return "bg-orange-100 dark:bg-orange-800 dark:text-orange-300 text-orange-700";
          case "Blue":
            return "bg-cyan-100 dark:bg-cyan-800 dark:text-cyan-200 text-cyan-700";
          case "Red":
            return "bg-red-100 dark:bg-red-800 dark:text-red-300 text-red-600";
          default:
            return "";
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'search-4' && blockData.theme) {
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
                            <div className="px-4 mx-auto lg:px-0" style={width}>
                                <AutoCompleteComponent
                                    cssClass="e-bigger"
                                    ref={search}
                                    dataSource={data}
                                    fields={{ value: "name" }}
                                    popupHeight="750px"
                                    placeholder="Search"
                                    focus={() => search.current?.showPopup()}
                                    created={openPopup}
                                    itemTemplate={(data: any) => (
                                        <div className="flex items-center px-5 py-2">
                                            <span className={`indent-0 e-avatar e-avatar-medium e-avatar-circle text-sm shrink-0 ${avatarColorClass(data.colorTheme)}`}>{data.initial}</span>
                                            <div className="w-full">
                                                <div className="text-sm !font-medium flex items-center !text-wrap text-gray-900 dark:text-white mb-0.5">{data.name}</div>
                                                <div className="text-gray-600 font-normal flex items-center !text-wrap dark:text-gray-300 text-sm">{data.emailId}</div>
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
                        <div className="w-100 pt-4 pb-3">
                            <div className="px-3 px-lg-0 mx-auto" style={width}>
                                <AutoCompleteComponent
                                    cssClass="e-bigger"
                                    ref={search}
                                    dataSource={data}
                                    fields={{ value: 'name' }}
                                    popupHeight="750px"
                                    placeholder="Search"
                                    focus={() => search.current?.showPopup()}
                                    created={openPopup}
                                    itemTemplate={(data: any) => (
                                        <div className="d-flex align-items-center px-3 p-2" style={{ textIndent: 0 }}>
                                            <span className={`e-avatar e-avatar-medium e-avatar-circle shrink-0 ${data.colorTheme === 'Orange' ? 'text-warning-emphasis bg-warning-subtle' : data.colorTheme === 'Blue' ? 'text-info-emphasis bg-info-subtle' : 'text-danger-emphasis bg-danger-subtle'}`}>
                                                {data.initial}
                                            </span>
                                            <div className="flex-grow-1 mx-2">
                                                <div className="text-wrap lh-base fw-medium fs-6">{data.name}</div>
                                                <div className="text-body-secondary text-wrap lh-base fw-normal fs-6">{data.emailId}</div>
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
