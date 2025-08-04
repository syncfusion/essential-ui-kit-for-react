'use client';

import { useEffect, useRef, useState } from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { BreadcrumbComponent, BreadcrumbItemsDirective, BreadcrumbItemDirective, BreadcrumbOverflowMode } from '@syncfusion/ej2-react-navigations';
import styles from './page.module.css';

export default function List11() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState({});
    const [maxItems, setMaxItems] = useState<number>(4);
    const [overflowMode, setOverflowMode] = useState<BreadcrumbOverflowMode>(BreadcrumbOverflowMode.None);
    const listview = useRef<ListViewComponent | null>(null);

    const files: any[] = [
        { id: 1, fileName: "Project_Presentation_2024_V1.pptx", data1: "Documents", data2: "Presentations", data3: "Project Presentations", data4: "2024", image: "ppt.png" },
        { id: 2, fileName: "Inventory_Tracking_Sheet_August.xlsx", data1: "Documents", data2: "Finance", data3: "Quarterly Reports", data4: "Q3 2024", image: "excel.png" },
        { id: 3, fileName: "Brainstorming_Session_Notes_2024.txt", data1: "Documents", data2: "Notes", data3: "Brainstorming Sessions", data4: "September", image: "notes.png" },
        { id: 4, fileName: "Feedback_Form_Event_September_2024", data1: "Drive", data2: "Forms", data3: "Event Feedback", data4: "2024", image: "icon.png" },
        { id: 5, fileName: "Team_Policies_and_Procedures.docx", data1: "Documents", data2: "Policies", data3: "Team UX", data4: "2024", image: "docx.png" }
    ];

    const handleResize = (): void => {
        checkWindowSize(window.innerWidth);
        updateBreadcrumbItems();
    };

    const checkWindowSize = (width: number): void => {
        setWidth(width < 1024 ? { width: '100%' } : { maxWidth: '610px' });
    };

    const updateBreadcrumbItems = (): void => {
        if (listview.current) {
            const width = listview.current.element.getBoundingClientRect().width;
            if (width <= 360) {
                setMaxItems(1);
            } else if (width <= 520) {
                setMaxItems(2);
            } else if (width <= 550) {
                setMaxItems(3);
            } else {
                setMaxItems(4);
            }
            setOverflowMode(maxItems <= 2 ? BreadcrumbOverflowMode.Menu : BreadcrumbOverflowMode.None);
        }
    };

    const actionComplete = (): void => {
        setTimeout(() => {
            updateBreadcrumbItems();
        }, 200);
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'list-11' && blockData.theme) {
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
        checkWindowSize(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-900">
                        <div id="my-file-list" className="flex items-center justify-center min-h-screen">
                            <div className="max-w-none lg:max-w-2xl w-full m-auto p-2 md:py-8 lg:px-14">
                                <ListViewComponent ref={listview} id={styles["my-file-list"]} className="!border-0" cssClass="e-list-template" dataSource={files} actionComplete={actionComplete} template={(data: any) => (
                                    <div className="e-list-wrapper e-list-multi-line border-b border-gray-200 dark:border-gray-600 !py-4 !px-1 sm:!px-3">
                                        <div className="flex justify-between">
                                            <div className="flex items-center">
                                                <span className="shrink-0">
                                                    <img src={`/react/essential-ui-kit/blocks/assets/images/listview/my-files/${data.image}`} width={40} height={40} alt="document image" />
                                                </span>
                                                <span>
                                                    <div className="flex mb-1">
                                                        <span className="e-list-item-header !text-sm !font-medium flex items-center !ml-4 !truncate w-72">{data.fileName}</span>
                                                    </div>
                                                    <div className="!text-gray-700 dark:!text-gray-200 !ml-4 w-60 sm:w-full">
                                                        <BreadcrumbComponent className="w-100" enableNavigation={false} separatorTemplate={() => (<span className="!text-base e-icons e-chevron-right"></span>)} overflowMode={overflowMode} maxItems={maxItems}>
                                                            <BreadcrumbItemsDirective>
                                                                <BreadcrumbItemDirective text={data.data1} />
                                                                <BreadcrumbItemDirective text={data.data2} />
                                                                <BreadcrumbItemDirective text={data.data3} />
                                                                <BreadcrumbItemDirective text={data.data4} />
                                                            </BreadcrumbItemsDirective>
                                                        </BreadcrumbComponent>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>)}
                                ></ListViewComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="d-flex align-items-center justify-content-center min-vh-100">
                            <div className="container-lg w-100 m-auto p-3 p-md-4" style={width}>
                                <ListViewComponent ref={listview} className="border-0" cssClass="e-list-template" dataSource={files} actionComplete={actionComplete} template={(data: any) => (
                                    <div className="e-list-wrapper e-list-multi-line py-3 px-1 px-sm-3">
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <span className="flex-shrink-0">
                                                    <img src={`/react/essential-ui-kit/blocks/assets/images/listview/my-files/${data.image}`} width={40} height={40} alt="document image" />
                                                </span>
                                                <span>
                                                    <div className="d-flex">
                                                        <span className="e-list-item-header small fw-medium d-flex align-items-center ms-3">{data.fileName}</span>
                                                    </div>
                                                    <div className="ms-3 mt-1 col-6 col-sm-12" style={{ minWidth: "250px", maxWidth: "500px" }}>
                                                        <BreadcrumbComponent className="w-100" enableNavigation={false} separatorTemplate={() => (<span className="fs-6 pt-1 e-icons e-chevron-right"></span>)} itemTemplate={(props: any) => (<span className="fs-6"><a href="#" className="text-body small px-2 px-sm-0 text-decoration-none">{props.text}</a></span>)} overflowMode={overflowMode} maxItems={maxItems}>
                                                            <BreadcrumbItemsDirective>
                                                                <BreadcrumbItemDirective text={data.data1} />
                                                                <BreadcrumbItemDirective text={data.data2} />
                                                                <BreadcrumbItemDirective text={data.data3} />
                                                                <BreadcrumbItemDirective text={data.data4} />
                                                            </BreadcrumbItemsDirective>
                                                        </BreadcrumbComponent>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>)}
                                ></ListViewComponent>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}