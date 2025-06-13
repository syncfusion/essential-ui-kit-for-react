'use client';

import { useEffect, useState, useRef } from 'react';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import { TabComponent, TabItemDirective, TabItemsDirective, OverflowMode } from '@syncfusion/ej2-react-navigations';
import styles from './page.module.css';

export default function AISearch2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    let overflowMode: OverflowMode = 'Popup';
    const [width, setWidth] = useState<{ maxWidth: string } | { width: string }>({ maxWidth: '520px'});
    const search = useRef<AutoCompleteComponent | null>(null);
    const tab = useRef<TabComponent | null>(null);
    const isTabSwitch = useRef(false);

    const data: any[] = [
       {
            id: 1,
            name: "Bob Johnson",
            status: "Last active 5 minutes ago",
            image: "avatar-1.jpg",
            category: "Team"
        },
        {
            id: 2,
            name: "Marketing site brief",
            status: "Added by Bob Johnson in Sisyphus",
            category: "Files"
        },
        {
            id: 3,
            name: "Site UX research notes",
            status: "Added by Bob Johnson in Sisyphus",
            category: "Files"
        },
        {
            id: 4,
            name: "Book ideas (Draft 01)",
            status: "Added by Bob Johnson in Untitled Labs",
            category: "Files"
        },
        {
            id: 5,
            name: "Sisyphus website redesign",
            status: "Project added by Bob Johnson February 20, 2023",
            category: "Project"
        },
        {
            id: 6,
            name: "Untitled Labs launch",
            status: "Project added by Bob Johnson February 20, 2023",
            category: "Project"
        }
    ];

    const updateTabItems = (): void => {
        if (window.innerWidth < 640) {
            overflowMode = 'Popup';
        } else {
            overflowMode = 'Extended';
        }
    };

    const select = (event: any): void => {
        isTabSwitch.current = true;
        const selectedItems = event.selectingItem?.querySelector('.e-tab-text')?.firstElementChild?.firstElementChild?.children?.[0]?.textContent;
        const newFiltered = data.filter((item) => selectedItems === "All results" || item.category === selectedItems);
        if(search.current) {
            search.current.dataSource = newFiltered;
            search.current?.dataBind();
            search.current?.showPopup();
        }
    }
   
    const close = (args: any): void => {
        if (isTabSwitch.current) {
            args.cancel = true;
        }
    };

    const searchSelect = (): void => {
        if (search.current) {
            isTabSwitch.current = false;
            search.current?.hidePopup();
        }
    };

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

    const updatePopup = () => {
        search.current?.showPopup();
        setTimeout(() => {
            tab.current?.refresh();
        }, 100);
    };
      
    const handleResize = (): void => {
        setWidth(window.innerWidth > 767 ? { maxWidth: "520px" } : { width: "100%" });
        updateTabItems();
        isTabSwitch.current = false;
        tab.current?.refresh();
        search.current?.hidePopup();
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
                if (blockData.name === 'ai-search-2' && blockData.theme) {
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
                        <div className="w-full pt-5 pb-4" style={{ height: "750px" }}>
                            <div id={styles.search_list} className="px-4 mx-auto sm:px-0" style={width}>
                                <AutoCompleteComponent
                                    key={"search-2-tw"}
                                    ref={search}
                                    cssClass="e-bigger"
                                    dataSource={data}
                                    fields={{ value: "name" }}
                                    popupHeight="650px"
                                    placeholder="Search"
                                    close={close}
                                    focus={updatePopup}
                                    created={openPopup}
                                    headerTemplate={() => (
                                        <div id={styles.search_tab}>
                                            <TabComponent ref={tab} selecting={select} overflowMode={overflowMode}>
                                                <TabItemsDirective>
                                                    <TabItemDirective
                                                        headerTemplate={() => (
                                                            <div className="space-x-2 flex items-center">
                                                                <span className="text-gray-500 dark:text-gray-400">All results</span>
                                                                <span className="e-badge e-badge-pill !px-2">6</span>
                                                            </div>
                                                        )}
                                                    ></TabItemDirective>
                                                    <TabItemDirective
                                                        headerTemplate={() => (
                                                            <div className="space-x-2 flex items-center">
                                                                <span className="text-gray-500 dark:text-gray-400">Team</span>
                                                                <span className="e-badge e-badge-pill !px-2">6</span>
                                                            </div>
                                                        )}
                                                    ></TabItemDirective>
                                                    <TabItemDirective
                                                        headerTemplate={() => (
                                                            <div className="space-x-2 flex items-center">
                                                                <span className="text-gray-500 dark:text-gray-400">Files</span>
                                                                <span className="e-badge e-badge-pill !px-2">6</span>
                                                            </div>
                                                        )}
                                                    ></TabItemDirective>
                                                    <TabItemDirective
                                                        headerTemplate={() => (
                                                            <div className="space-x-2 flex items-center">
                                                                <span className="text-gray-500 dark:text-gray-400">Project</span>
                                                                <span className="e-badge e-badge-pill !px-2">6</span>
                                                            </div>
                                                        )}
                                                    ></TabItemDirective>
                                                </TabItemsDirective>
                                            </TabComponent>
                                        </div>
                                    )}
                                    itemTemplate={(data: any) => (
                                        <div className="flex gap-3 px-5 py-2" onClick={searchSelect}>
                                            <span className="indent-0 e-avatar e-avatar-medium e-avatar-circle text-sm shrink-0">
                                                {data.image ? (
                                                    <img className="w-100 h-100 object-fit-cover" src={`/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.image}`} alt="logo" />
                                                ) : (
                                                    <span className="e-icons e-file-document text-lg"></span>
                                                )}
                                            </span>
                                            <div className="w-full indent-0">
                                                <div className="text-sm !font-medium flex items-center !text-wrap text-gray-900 dark:text-white mb-0.5">{data.name}</div>
                                                <div className="text-gray-700 font-normal flex items-center !text-wrap dark:text-gray-300 text-sm">{data.status}</div>
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
                        <div className="w-100 pt-3 pb-3 h-100" style={{ height: "750px" }}>
                            <div id={styles.search_list} className="px-3 mx-auto" style={width}>
                                <AutoCompleteComponent
                                    key={"search-2-bs"}
                                    id={styles.notification}
                                    cssClass="e-bigger"
                                    ref={search}
                                    dataSource={data}
                                    fields={{ value: "name" }}
                                    popupHeight="650px"
                                    placeholder="Search"
                                    close={close}
                                    focus={updatePopup}
                                    created={openPopup}
                                    headerTemplate={() => (
                                        <div id={styles.search_tab}>
                                            <TabComponent ref={tab} selecting={select} overflowMode={overflowMode}>
                                                <TabItemsDirective>
                                                    <TabItemDirective
                                                        headerTemplate={() => (
                                                            <div className="d-flex align-items-center gap-2space-x-2 flex items-center">
                                                                <span className="fs-6">All results</span>
                                                                <span className="e-badge e-badge-pill px-2">6</span>
                                                            </div>
                                                        )}
                                                    ></TabItemDirective>
                                                    <TabItemDirective
                                                        headerTemplate={() => (
                                                            <div className="d-flex align-items-center gap-2">
                                                                <span className="fs-6">Team</span>
                                                                <span className="e-badge e-badge-pill px-2">6</span>
                                                            </div>
                                                        )}
                                                    ></TabItemDirective>
                                                    <TabItemDirective
                                                        headerTemplate={() => (
                                                            <div className="d-flex align-items-center gap-2">
                                                                <span className="fs-6">Files</span>
                                                                <span className="e-badge e-badge-pill px-2">6</span>
                                                            </div>
                                                        )}
                                                    ></TabItemDirective>
                                                    <TabItemDirective
                                                        headerTemplate={() => (
                                                            <div className="d-flex align-items-center gap-2">
                                                                <span className="fs-6">Project</span>
                                                                <span className="e-badge e-badge-pill px-2">6</span>
                                                            </div>
                                                        )}
                                                    ></TabItemDirective>
                                                </TabItemsDirective>
                                            </TabComponent>
                                        </div>
                                    )}
                                    itemTemplate={(data: any) => (
                                        <div className="d-flex gap-3 px-3 py-2" onClick={searchSelect} style={{ textIndent: "0" }}>
                                            <span className="e-avatar e-avatar-medium e-avatar-circle text-sm flex-shrink-0">
                                                {data.image ? (
                                                    <img src={`/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.image}`} className="w-100 h-100 object-fit-cover" alt="logo" />
                                                ) : (
                                                    <span className="e-icons e-file-document fs-5"></span>
                                                )}
                                            </span>
                                            <div className="w-100 fs-6">
                                                <div className="small lh-base fw-medium d-flex align-items-center text-body mb-1">{data.name}</div>
                                                <div className="text-body-secondary lh-base fw-normal text-wrap d-flex align-items-center small">{data.status}</div>
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
