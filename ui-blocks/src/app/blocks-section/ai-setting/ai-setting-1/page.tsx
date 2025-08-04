'use client';

import { useEffect, useRef, useState } from "react";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { ButtonComponent, SwitchComponent } from "@syncfusion/ej2-react-buttons";
import styles from "./page.module.css";

export default function AISetting1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isMobileView, setIsMobileView] = useState(false);
    const [isPreventSidebarClose, setIsPreventSidebarClose] = useState(true);
    const sidebar = useRef<SidebarComponent | null>(null);
    const themeDropdown = useRef<DropDownButtonComponent | null>(null);
    const languageDropdown = useRef<DropDownButtonComponent | null>(null);

    const navigationMenu: any[] = [
        { id: 1, field: 'General', fontIcon: 'e-settings' },
        { id: 2, field: 'Account', fontIcon: 'e-user' },
        { id: 3, field: 'Data controls', fontIcon: 'e-increase-indent' },
        { id: 4, field: 'Chat settings', fontIcon: 'e-comment-show' }
    ];

    const checkWindowSize = (): void => {
        const isMobile = window.innerWidth <= 680;

        if (sidebar.current) {
            sidebar.current.hide();
            setIsMobileView(isMobile);
            sidebar.current.type = isMobile ? 'Over' : 'Push';
            setIsPreventSidebarClose(!isMobile);
            sidebar.current.show();

            if (!isMobile) {
                const element = document.querySelector('.e-sidebar-overlay');
                if (element) {
                    element.remove();
                }
            }
        }
        /* SB Code - Start */
        closeDropdown(themeDropdown.current);
        closeDropdown(languageDropdown.current);
        /* SB Code - End */
    };

    /* SB Code - Start */
    const closeDropdown = (dropDown: DropDownButtonComponent | null): void => {
        if (dropDown?.element?.classList.contains("e-active")) {
            dropDown.toggle();
        }
    };
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-setting-1' && blockData.theme) {
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
        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);

        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', checkWindowSize);
        };
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-800">
                        <div className="h-screen flex">
                            <div className="hidden sm:block h-full w-16 lg:w-60 border-r border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"></div>
                            <div className="flex flex-col grow">
                                <div className="flex items-center gap-4 p-4 border-b border-gray-200 dark:border-gray-600">
                                    {isMobileView && (
                                        <ButtonComponent cssClass="e-flat" iconCss="e-icons e-menu" onClick={() => sidebar.current?.toggle()} type="button"></ButtonComponent>
                                    )}
                                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">Settings</h3>
                                </div>
                                <div id="settings-page" className="lg:max-w-3xl flex h-full text-gray-700 dark:text-gray-300">
                                    <SidebarComponent ref={sidebar} key={"setting-1-tw"} className="p-3 !border-r !border-gray-200 dark:!border-gray-600 bg-white dark:bg-gray-800" target="#settings-page" showBackdrop={isMobileView} type="Push" width="248px" isOpen={true} close={(event) => (event.cancel = isPreventSidebarClose)}>
                                        <ListViewComponent id={styles["navigation-list"]} className="border-0" cssClass="e-list-template" dataSource={navigationMenu} template={(data: any) => (
                                            <div className="e-list-wrapper !p-3 flex items-center gap-3 rounded-lg">
                                                <span className={`e-icons ${data.fontIcon} text-base dark:!text-gray-200`}></span>
                                                <span className="text-sm font-medium">{data.field}</span>
                                            </div>)}
                                        ></ListViewComponent>
                                    </SidebarComponent>
                                    <div className="py-5 sm:py-6 px-4 flex flex-col gap-6 grow text-sm font-medium text-gray-900 dark:text-white">
                                        <div className="flex gap-2 items-center justify-between sm:gap-8">
                                            <label className="w-52 sm:grow">Theme</label>
                                            <DropDownButtonComponent ref={themeDropdown} items={[{ text: 'Light' }, { text: 'Dark' }]} content="Light" type="button"></DropDownButtonComponent>
                                        </div>
                                        <div className="flex gap-2 items-center justify-between sm:gap-8">
                                            <label className="w-52 sm:grow">Language</label>
                                            <DropDownButtonComponent ref={languageDropdown} items={[{ text: 'English' }, { text: 'Español' }, { text: 'Français' }, { text: 'Deutsch' }, { text: '日本語' }]} content="English" type="button"></DropDownButtonComponent>
                                        </div>
                                        <div className="flex gap-2 justify-between sm:gap-8">
                                            <label className="w-52 sm:grow">Render user messages as markdown</label>
                                            <SwitchComponent checked={true}></SwitchComponent>
                                        </div>
                                        <div className="flex gap-2 justify-between sm:gap-8">
                                            <label className="w-52 sm:grow">Auto-scroll to latest message on chat open</label>
                                            <SwitchComponent></SwitchComponent>
                                        </div>
                                        <div className="flex gap-2 justify-between sm:gap-8">
                                            <label className="w-52 sm:grow">Hide right-most side panel</label>
                                            <SwitchComponent></SwitchComponent>
                                        </div>
                                        <div className="flex gap-2 items-center justify-between sm:gap-8">
                                            <label className="w-52 sm:grow">Manage side panel settings</label>
                                            <ButtonComponent content="Manage" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="row vh-100 d-flex g-0">
                            <div className="d-none d-sm-block h-100 border-end border-light-subtle bg-body-tertiary col-1 col-lg-3" style={{ minWidth: '62px', maxWidth: '248px' }}></div>
                            <div className="d-flex flex-column flex-grow-1 col">
                                <div className="d-flex align-items-center gap-3 p-3 border-bottom border-light-subtle">
                                    {isMobileView && (
                                        <ButtonComponent cssClass="e-flat" iconCss="e-icons e-menu" onClick={() => sidebar.current?.toggle()} type="button"></ButtonComponent>
                                    )}
                                    <h3 className="fs-6 fw-bold text-body mb-0">Settings</h3>
                                </div>
                                <div id="settings-page" className="d-flex h-100" style={{ maxWidth: '768px' }}>
                                    <SidebarComponent ref={sidebar} key={"setting-1-bs"} className="p-3 border-end bg-body border-light-subtle" target="#settings-page" showBackdrop={isMobileView} type="Push" width="248px" isOpen={true} close={(event) => (event.cancel = isPreventSidebarClose)}>
                                        <ListViewComponent id={styles["navigation-list"]} className="border-0" cssClass="e-list-template" dataSource={navigationMenu} template={(data: any) => (
                                            <div className="e-list-wrapper p-2 d-flex align-items-center gap-2 rounded">
                                                <span className={`e-icons ${data.fontIcon} fs-6 ms-1 my-1`}></span>
                                                <span className="fw-medium m-1">{data.field}</span>
                                            </div>)}
                                        ></ListViewComponent>
                                    </SidebarComponent>
                                    <div className="p-3 d-flex flex-column gap-4 flex-grow-1 small fw-medium text-body">
                                        <div className="d-flex gap-2 align-items-center justify-content-between">
                                            <label className="flex-sm-grow-1" style={{ width: '13rem' }}>Theme</label>
                                            <DropDownButtonComponent ref={themeDropdown} cssClass="e-outline" items={[{ text: 'Light' }, { text: 'Dark' }]} content="Light" type="button"></DropDownButtonComponent>
                                        </div>
                                        <div className="d-flex gap-2 align-items-center justify-content-between">
                                            <label className="flex-sm-grow-1" style={{ width: '13rem' }}>Language</label>
                                            <DropDownButtonComponent ref={languageDropdown} cssClass="e-outline" items={[{ text: 'English' }, { text: 'Español' }, { text: 'Français' }, { text: 'Deutsch' }, { text: '日本語' }]} content="English" type="button"></DropDownButtonComponent>
                                        </div>
                                        <div className="d-flex gap-2 justify-content-between">
                                            <label className="flex-sm-grow-1" style={{ width: '13rem' }}>Render user messages as markdown</label>
                                            <SwitchComponent cssClass="e-small" checked={true}></SwitchComponent>
                                        </div>
                                        <div className="d-flex gap-2 justify-content-between">
                                            <label className="flex-sm-grow-1" style={{ width: '13rem' }}>Auto-scroll to latest message on chat open</label>
                                            <SwitchComponent cssClass="e-small"></SwitchComponent>
                                        </div>
                                        <div className="d-flex gap-2 justify-content-between">
                                            <label className="flex-sm-grow-1" style={{ width: '13rem' }}>Hide right-most side panel</label>
                                            <SwitchComponent cssClass="e-small"></SwitchComponent>
                                        </div>
                                        <div className="d-flex gap-2 align-items-center justify-content-between">
                                            <label className="flex-sm-grow-1" style={{ width: '13rem' }}>Manage side panel settings</label>
                                            <ButtonComponent cssClass="e-outline" content="Manage" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
