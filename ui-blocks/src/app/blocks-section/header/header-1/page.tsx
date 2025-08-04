'use client';

import { useEffect, useRef, useState } from "react";
import { TabComponent, TabItemDirective, TabItemsDirective, OverflowMode } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default function Header1() {
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
                if (blockData.name === 'header-1' && blockData.theme) {
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
                        <div key={"header-1-tw"} className="pt-4 sm:pt-6" style={{ minHeight: "36rem" }}>
                            <div className="flex justify-between">
                                <div className="flex items-center">
                                    <h1 className="text-lg font-semibold text-gray-900 dark:text-white ms-4 sm:ms-6">Notification</h1>
                                </div>
                                <div className="flex items-center me-4 sm:me-6">
                                    <ButtonComponent cssClass="e-flat" iconCss="e-icons e-settings !text-base" type="button"></ButtonComponent>
                                </div>
                            </div>
                            <div className="flex mt-3 px-4 sm:px-6 w-full justify-between items-center">
                                <TabComponent ref={tab} heightAdjustMode="Auto" width={"100%"} overflowMode={overflowMode}>
                                    <TabItemsDirective>
                                        <TabItemDirective headerTemplate={() => <div>Overview</div>}></TabItemDirective>
                                        <TabItemDirective headerTemplate={() => <div>Shared</div>}></TabItemDirective>
                                        <TabItemDirective headerTemplate={() => <div>Comments</div>}></TabItemDirective>
                                    </TabItemsDirective>
                                </TabComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"header-1-bs"} className="pt-3 pt-sm-4" style={{ minHeight: "36rem" }}>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <h1 className="fs-6 fw-bold text-body ms-3 ms-sm-4 mb-0">Notification</h1>
                                </div>
                                <div className="d-flex align-items-center me-3 me-sm-4">
                                    <ButtonComponent cssClass="e-flat" iconCss="e-icons e-settings" type="button"></ButtonComponent>
                                </div>
                            </div>
                            <div className="d-flex mt-3 px-3 px-sm-4 w-100 justify-content-between align-items-center">
                                <TabComponent ref={tab} heightAdjustMode="Auto" width={"100%"} overflowMode={overflowMode}>
                                    <TabItemsDirective>
                                        <TabItemDirective headerTemplate={() => <div>Overview</div>}></TabItemDirective>
                                        <TabItemDirective headerTemplate={() => <div>Shared</div>}></TabItemDirective>
                                        <TabItemDirective headerTemplate={() => <div>Comments</div>}></TabItemDirective>
                                    </TabItemsDirective>
                                </TabComponent>
                            </div>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}