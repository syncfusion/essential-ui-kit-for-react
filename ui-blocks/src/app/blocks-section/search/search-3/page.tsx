'use client';

import { useRef, useEffect, useState } from 'react';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';

export default function Search3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState<{ maxWidth: string } | { width: string }>({ maxWidth: '480px'});
    const search = useRef<AutoCompleteComponent | null>(null);

    const data: any[] = [
        { id: 1, name: "Johnson" },
        { id: 2, name: "White" },
        { id: 3, name: "Harris" },
        { id: 4, name: "Jane Smith", initial: "JS", emailId: "jane.smith@example.com" },
        { id: 5, name: "Mark Johnson", initial: "MJ", emailId: "markjohnson@example.com" },
        { id: 6, name: "Tom Harris", initial: "TH", emailId: "tomharris@example.com" }
    ];
    const fields = { value: "name" };

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
                if (blockData.name === 'search-3' && blockData.theme) {
                    setTheme(blockData.theme);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
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
                                    key={"search-3-tw"}
                                    dataSource={data}
                                    fields={fields}
                                    popupHeight="750px"
                                    placeholder="Search"
                                    focus={() => search.current?.showPopup()}
                                    created={openPopup}
                                   
                                    headerTemplate={() => (<div className="mt-4 mx-5 mb-3 text-sm font-medium text-gray-600 dark:text-gray-300">Recent</div>)}
                                    itemTemplate={(data: any) => (
                                        <div className="flex items-center justify-center px-5 py-2">
                                            {data.initial && (
                                                <span className="e-avatar e-avatar-small e-avatar-circle indent-0 shrink-0 bg-green-100 dark:bg-green-800 dark:text-green-300 text-green-700">{data.initial}</span>
                                            )}
                                            {!data.initial && (
                                                <span className="mx-1 text-center indent-0 e-icons e-large sf-icon-clock-fast-backward text-gray-500 dark:text-gray-100"></span>
                                            )}
                                            <div className="w-full indent-0 !ml-3">
                                                <div className="text-sm !font-medium flex items-center !text-wrap text-gray-900 dark:text-white">{data.name}</div>
                                                {data.emailId && (
                                                    <div className="font-normal flex items-center !text-wrap text-gray-600 dark:text-gray-300 text-sm">{data.emailId}</div>
                                                )}
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
                                        ref={search}
                                        dataSource={data}
                                        fields={fields}
                                        popupHeight="750px"
                                        placeholder="Search"
                                        focus={() => search.current?.showPopup()}
                                        created={openPopup}
                                       
                                        headerTemplate={() => (<p className="mt-2 mx-3 mb-2 fw-medium fs-6 lh-1 text-body-secondary">Recent</p>)}
                                        itemTemplate={(data: any) => (
                                            <div className="d-flex align-items-center justify-content-center px-3 py-2" style={{ textIndent: '0' }}>
                                                {data.initial && (
                                                    <span className="e-avatar flex-shrink-0 e-avatar-circle text-success bg-success-subtle">{data.initial}</span>
                                                )}
                                                {!data.initial && (
                                                    <span className="text-center e-icons e-large sf-icon-clock-fast-backward text-body-secondary p-2"></span>
                                                )}
                                                <div className="flex-grow-1 mx-2">
                                                    <div className="lh-base fw-medium fs-6 lh-base text-body">{data.name}</div>
                                                    {data.emailId && (
                                                        <div className="text-wrap lh-base fw-normal fs-6 lh-base text-body-secondary">{data.emailId}</div>
                                                    )}
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
