'use client';

import { useEffect, useRef, useState } from "react";
import { TabComponent, TabItemDirective, TabItemsDirective, OverflowMode } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default function Header2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [overflowMode, setOverflowMode] = useState<OverflowMode>('Popup');
    const tab = useRef<TabComponent | null>(null);

    const updateTabItems = (): void => {
        if (window.innerWidth < 640) {
            setOverflowMode('Popup');
        } else {
            setOverflowMode('Extended');
        }
        tab.current?.refresh();
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'header-2' && blockData.theme) {
                    setTheme(blockData.theme);
                    setTimeout(() => {
                        tab.current?.refresh();
                    }, 250);
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
        tab.current?.refresh();
        tab.current?.refreshActiveTabBorder();
        /* SB Code - End */
        window.addEventListener('resize',updateTabItems);
        
        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', updateTabItems);
        }
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-800">
                        <div key={"header-2-tw"} className="pt-4 sm:pt-6" style={{ minHeight: "36rem" }}>
                            <div className="ms-4 sm:ms-6">
                                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">My Workspace</p>
                            </div>
                            <div className="flex justify-between mt-3 mb-3 sm:mb-2">
                                <div className="flex items-center">
                                    <h1 className="ms-4 sm:ms-6 text-lg font-semibold text-gray-900 dark:text-white">Documents</h1>
                                </div>
                                <div className="gap-4 hidden sm:flex me-6">
                                    <ButtonComponent content="New folder" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-primary" content="Upload" type="button"></ButtonComponent>
                                </div>
                                <div className="gap-4 flex sm:hidden me-4">
                                    <ButtonComponent iconCss="e-icons e-plus" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-primary" iconCss="e-icons e-upload-1" type="button"></ButtonComponent>
                                </div>
                            </div>
                            <div className="flex justify-between items-center px-4 sm:px-6 relative">
                                <div className="w-full">
                                    <TabComponent ref={tab} heightAdjustMode="Auto" width={"100%"} overflowMode={overflowMode}>
                                        <TabItemsDirective>
                                            <TabItemDirective headerTemplate={() => <div>All files</div>}></TabItemDirective>
                                            <TabItemDirective headerTemplate={() => <div>Starred</div>}></TabItemDirective>
                                            <TabItemDirective headerTemplate={() => <div>Recently Edited</div>}></TabItemDirective>
                                        </TabItemsDirective>
                                    </TabComponent>
                                </div>
                                <div className="relative pb-4">
                                    <span className="e-badge e-bigger hidden sm:flex items-center justify-center absolute top-0 end-0" style={{ width: "95px" }}>85 documents</span>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"header-2-bs"} className="pt-3 pt-sm-4" style={{ minHeight: "36rem" }}>
                            <div className="ms-3 ms-sm-4">
                                <p className="small fw-bold text-body-tertiary text-opacity-50 mb-1">My Workspace</p>
                            </div>
                            <div className="d-flex justify-content-between mt-2 mb-2 mb-sm-2">
                                <div className="d-flex align-items-center">
                                    <h1 className="ms-3 ms-sm-4 mb-0 fs-5 fw-bold text-body">Documents</h1>
                                </div>
                                <div className="gap-3 d-none d-sm-flex me-4">
                                    <ButtonComponent cssClass="e-outline" content="New folder" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-primary" content="Upload" type="button"></ButtonComponent>
                                </div>
                                <div className="gap-3 d-flex d-sm-none me-3">
                                    <ButtonComponent cssClass="e-outline" iconCss="e-icons e-plus" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-primary" iconCss="e-icons e-upload-1" type="button"></ButtonComponent>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center pt-1 px-3 px-sm-4 position-relative">
                                <div className="w-100">
                                    <TabComponent ref={tab} heightAdjustMode="Auto" width={"100%"} overflowMode={overflowMode}>
                                        <TabItemsDirective>
                                            <TabItemDirective headerTemplate={() => <div>All files</div>}></TabItemDirective>
                                            <TabItemDirective headerTemplate={() => <div>Starred</div>}></TabItemDirective>
                                            <TabItemDirective headerTemplate={() => <div>Recently Edited</div>}></TabItemDirective>
                                        </TabItemsDirective>
                                    </TabComponent>
                                </div>
                                <div className="position-relative">
                                    <span className="e-badge e-bigger d-none d-sm-flex align-items-center justify-content-center position-absolute top-0 end-0 translate-middle-y" style={{ width: "95px" }}>85 documents</span>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}