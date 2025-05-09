'use client';

import { useEffect, useRef, useState } from "react";
import { OverflowMode, TabComponent, TabItemDirective, TabItemsDirective } from "@syncfusion/ej2-react-navigations";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default function Header5() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const tab = useRef<TabComponent | null>(null);
    const responsivetab = useRef<TabComponent | null>(null);
    const [overflowMode, setOverflowMode] = useState<OverflowMode>('Popup');

    const updateTabItems = (): void => {
        if (window.innerWidth < 640) {
            setOverflowMode('Popup');
        } else {
            setOverflowMode('Extended');
        }
        tab.current?.refresh();
        responsivetab.current?.refresh();
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'header-5' && blockData.theme) {
                    setTheme(blockData.theme);
                    setTimeout(() => {
                        tab.current?.refresh();
                        responsivetab.current?.refresh();
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
        window.addEventListener('resize',updateTabItems);
        tab.current?.refresh();
        
        return () => {
            window.removeEventListener('message', handleMessageEvent);
            window.removeEventListener('resize', updateTabItems);
        }
        /* SB Code - End */
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-800">
                        <div key={"header-5-tw"} style={{ minHeight: "36rem" }}>
                            <div className="mx-4 sm:mx-6 py-2 sm:py-0 border-b sm:border-b-0 border-gray-200 dark:border-gray-600">
                                <div className="flex items-center">
                                    <div className="flex items-center flex-shrink-0 py-0 sm:py-2 pe-4 border-b-0 sm:border-b border-gray-200 dark:border-gray-600">
                                        <span className="e-avatar e-avatar-circle e-avatar-small flex-shrink-0 text-gray-700 dark:text-white">DM</span>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3 hidden sm:block">David Miller</h3>
                                    </div>
                                    <div className="pt-2.5 hidden sm:block w-full relative">
                                        <TabComponent ref={tab} heightAdjustMode="Auto">
                                            <TabItemsDirective>
                                                <TabItemDirective headerTemplate={() => <div>Messages</div>}></TabItemDirective>
                                                <TabItemDirective headerTemplate={() => <div>Project Files</div>}></TabItemDirective>
                                            </TabItemsDirective>
                                        </TabComponent>
                                    </div>
                                </div>
                                <div className="flex gap-3 py-2.5 sm:py-2 absolute top-0 end-0 me-6">
                                    <DropDownButtonComponent cssClass="e-outline hidden lg:block" iconCss="e-icons e-video !text-base" content="Meeting" type="button" beforeOpen={(e) => (e.cancel = true)}></DropDownButtonComponent>
                                    <DropDownButtonComponent cssClass="e-outline block lg:hidden" iconCss="e-icons e-video !text-base" type="button" beforeOpen={(e) => (e.cancel = true)}></DropDownButtonComponent>
                                    <div className="border-l border-gray-200 dark:border-gray-600 h-5 self-center"></div>
                                    <ButtonComponent cssClass="e-outline hidden sm:block" iconCss="sf-icon-share-arrow-02" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-outline hidden sm:block" iconCss="sf-icon-table-layout" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="block sm:hidden" iconCss="e-icons e-more-vertical-1" type="button" ></ButtonComponent>
                                </div>
                            </div>
                            <div className="mx-4 sm:mx-6 block sm:hidden">
                                <TabComponent ref={responsivetab} heightAdjustMode="Auto" width={"100%"} overflowMode={overflowMode}>
                                    <TabItemsDirective>
                                        <TabItemDirective headerTemplate={() => <div>Messages</div>}></TabItemDirective>
                                        <TabItemDirective headerTemplate={() => <div>Project Files</div>}></TabItemDirective>
                                    </TabItemsDirective>
                                </TabComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"header-5-bs"} style={{ minHeight: "36rem" }}>
                            <div className="px-3 px-sm-4 pt-2 pt-sm-0">
                                <div className="d-flex align-items-center">
                                    <div className="d-none d-sm-flex align-items-center flex-shrink-0 py-2 my-1 pe-4 border-bottom">
                                        <span className="e-avatar e-avatar-circle e-avatar-small flex-shrink-0 text-body">DM</span>
                                        <h3 className="fs-6 fw-bold text-body ms-3 mb-0 d-none d-sm-block">David Miller</h3>
                                    </div>
                                    <div className="d-block d-sm-none">
                                        <span className="e-avatar e-avatar-circle e-avatar-small flex-shrink-0 text-body">DM</span>
                                    </div>
                                    <div className="pt-3 d-none d-sm-block w-100 position-relative">
                                        <TabComponent ref={tab} heightAdjustMode="Auto">
                                            <TabItemsDirective>
                                                <TabItemDirective headerTemplate={() => <div>Messages</div>}></TabItemDirective>
                                                <TabItemDirective headerTemplate={() => <div>Project Files</div>}></TabItemDirective>
                                            </TabItemsDirective>
                                        </TabComponent>
                                    </div>
                                </div>
                                <div className="border-bottom d-block d-sm-none pt-2"></div>
                                <div className="position-absolute top-0 end-0 translate-middle-y d-flex align-items-center gap-3 mt-3 mt-sm-4 pt-3 pt-sm-2 pe-4">
                                    <DropDownButtonComponent className="d-none d-lg-block" cssClass="e-outline" iconCss="e-icons e-video fs-6" content="Meeting" type="button" beforeOpen={(e) => (e.cancel = true)}></DropDownButtonComponent>
                                    <DropDownButtonComponent className="d-block d-lg-none" cssClass="e-outline" iconCss="e-icons e-video fs-6" type="button" beforeOpen={(e) => (e.cancel = true)}></DropDownButtonComponent>
                                    <div className="border-start" style={{ height: "16px" }}></div>
                                    <ButtonComponent className="d-none d-sm-block" cssClass="e-outline" iconCss="sf-icon-share-arrow-02" type="button"></ButtonComponent>
                                    <ButtonComponent className="d-none d-sm-block" cssClass="e-outline" iconCss="sf-icon-table-layout" type="button"></ButtonComponent>
                                    <ButtonComponent className="d-block d-sm-none" cssClass="e-outline" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                </div>
                            </div>
                            <div className="px-3 px-sm-4 pt-3 d-block d-sm-none">
                                <TabComponent ref={responsivetab} heightAdjustMode="Auto" width={"100%"} overflowMode={overflowMode}>
                                    <TabItemsDirective>
                                        <TabItemDirective headerTemplate={() => <div>Messages</div>}></TabItemDirective>
                                        <TabItemDirective headerTemplate={() => <div>Project Files</div>}></TabItemDirective>
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