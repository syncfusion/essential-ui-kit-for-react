'use client';

import { useEffect, useState, useRef } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { ButtonComponent, CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import styles from './page.module.css';

export default function Sidebar13() {
    /* SB Code - Start */ 
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */ 
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);
    const [checkbox3, setCheckbox3] = useState(false);
    const [checkbox4, setCheckbox4] = useState(true);
    const [backDrop, setBackDrop] = useState(false);
    const toast = useRef<ToastComponent | null>(null);
    const sidebar = useRef<SidebarComponent | null>(null);
    
    const data: any[] = [
        {
            id: 1,
            fontIcon: 'e-home'
        },
        {
            id: 2,
            fontIcon: 'e-user'
        },
        {
            id: 3,
            fontIcon: 'e-bookmark'
        },
        {
            id: 4,
            fontIcon: 'e-chart'
        },
        {
            id: 5,
            fontIcon: 'e-clock'
        }
    ];
    
    const handleResize = (): void => {
        setBackDrop(window.innerWidth <= 640);
    };
    
    /* SB Code - Start */ 
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'sidebar-13' && blockData.theme) {
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
        handleResize();
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
                    <section className="bg-white dark:bg-gray-950">
                        <div id={styles["tasked-overview-sidebar"]} style={{ height: '600px' }}>
                            <SidebarComponent key={"sidebar-13-tw"} ref={sidebar} className="bg-gray-50 dark:bg-gray-900 !border-l !border-gray-200 dark:!border-gray-700" width="328px" isOpen={true} showBackdrop={backDrop} position="Right" style={{ display: 'block' }}>
                                <div className="flex h-screen">
                                    <div className="py-6" style={{ width: '72px' }}>
                                        <div className="flex justify-center items-center px-3 mb-2">
                                            <img src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                        </div>
                                        <ListViewComponent cssClass="border-0 e-bigger" dataSource={data} template={(data: any) => (
                                            <div className="e-list-wrapper flex justify-center items-center">
                                                <span className={`e-icons e-large ${data.fontIcon}`}></span>
                                            </div>
                                        )}
                                        ></ListViewComponent>
                                    </div>
                                    <div className="pt-6 border-l h-full px-4 border-gray-200 dark:border-gray-700" style={{ width: '256px' }}>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <span className="e-avatar e-avatar-circle e-avatar-small">
                                                    <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg" width={32} height={32} alt="profile picture" />
                                                </span>
                                                <div className="ml-2">
                                                    <div className="text-base font-medium leading-normal text-gray-900 dark:text-white">John Wick</div>
                                                    <a className="text-gray-900 dark:text-white" href="mailto:johnwick@company.com">johnwick&#64;company.com</a>
                                                </div>
                                            </div>
                                            <ButtonComponent cssClass="e-icons e-chevron-down-double e-flat e-large px-1" type="button"></ButtonComponent>
                                        </div>
                                        <div className="mt-4">
                                            <div className="flex justify-between">
                                                <ButtonComponent iconCss="e-icons e-plus e-medium" cssClass="e-flat e-primary" content="Add Task" type="button"></ButtonComponent>
                                                <ButtonComponent cssClass="e-medium e-icons e-more-horizontal-1 e-flat" type="button"></ButtonComponent>
                                            </div>
                                            <div className="mt-4 flex">
                                                <span className="pt-0.5">
                                                    <CheckBoxComponent checked={checkbox1} cssClass="e-bigger" change={(e: any) => setCheckbox1(e.checked)}></CheckBoxComponent>
                                                </span>
                                                <p className={`text-base text-gray-900 dark:text-white ml-2 ${checkbox1 ? 'line-through' : ''}`}>Effortlessly resolve 70% of customer inquiries with our all-in-one platform.</p>
                                            </div>
                                            <div className="mt-4 flex">
                                                <span className="pt-0.5">
                                                    <CheckBoxComponent checked={checkbox2} cssClass="e-bigger" change={(e: any) => setCheckbox2(e.checked)}></CheckBoxComponent>
                                                </span>
                                                <p className={`text-base text-gray-900 dark:text-white ml-2 ${checkbox2 ? 'line-through' : ''}`}>Online customer service tool used to operations.</p>
                                            </div>
                                            <div className="mt-4 flex">
                                                <span className="pt-0.5">
                                                    <CheckBoxComponent checked={checkbox3} cssClass="e-bigger" change={(e: any) => setCheckbox3(e.checked)}></CheckBoxComponent>
                                                </span>
                                                <p className={`text-base text-gray-900 dark:text-white ml-2 ${checkbox3 ? 'line-through' : ''}`}>Managing and tracking client support.</p>
                                            </div>
                                        </div>
                                        <hr className="my-4 border-gray-200 dark:border-gray-700" />
                                        <div className="flex justify-between items-center">
                                            <span className="text-base text-gray-900 dark:text-white">Completed</span>
                                            <ButtonComponent cssClass="e-medium e-icons e-more-horizontal-1 e-flat" type="button"></ButtonComponent>
                                        </div>
                                        <div className="mt-4 flex">
                                            <span className="pt-0.5">
                                                <CheckBoxComponent checked={checkbox4} cssClass="e-bigger" change={(e: any) => setCheckbox4(e.checked)}></CheckBoxComponent>
                                            </span>
                                            <p className={`text-base text-gray-900 dark:text-white ml-2 ${checkbox4 ? 'line-through' : ''}`}>Effortlessly resolve 70% of customer inquiries with our all-in-one platform.</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="toast" className="absolute bottom-0 right-0"></div>
                                <ToastComponent ref={toast} target="#toast" title="<div class='pr-2'>Adaptive Tiles Meeting</div>" position={{ X: 'Right', Y: 'Bottom' }} cssClass="e-toast-info" width={224} content={() => <div>There was a problem with your network connection</div>} showCloseButton={true} timeOut={0} newestOnTop={true} created={() => toast.current?.show()}></ToastComponent>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 absolute top-0 right-0">
                            <ButtonComponent cssClass="e-round e-large e-icons e-chevron-left" type="button" onClick={() => sidebar.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div id={styles["tasked-overview-sidebar"]} style={{ height: '600px' }}>
                            <SidebarComponent key={"sidebar-13-bs"} ref={sidebar} width="328px" position="Right" showBackdrop={backDrop} isOpen={true} style={{ display: 'block' }}>
                                <div className="d-flex vh-100">
                                    <div className="py-4 d-flex flex-column align-items-center" style={{ width: '72px' }}>
                                        <div className="d-flex justify-content-center align-items-center px-3 mb-2">
                                            <img src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                        </div>
                                        <ListViewComponent cssClass="border-0 e-bigger" dataSource={data} template={(data: any) => (
                                            <div className="e-list-wrapper d-flex justify-content-center align-items-center">
                                                <span className={`e-icons e-large ${data.fontIcon}`}></span>
                                            </div>
                                        )}
                                        ></ListViewComponent>
                                    </div>
                                    <div className="p-3 border-start border-light-subtle opacity-100" style={{ width: '256px' }}>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <span className="e-avatar e-avatar-circle e-avatar-small">
                                                    <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg" width={32} height={32} alt="profile picture" />
                                                </span>
                                                <div className="ms-3">
                                                    <div className="text-body fs-6 fw-medium">John Wick</div>
                                                    <a className="text-body-secondary text-decoration-none" href="mailto:johnwick@company.com">johnwick&#64;company.com</a>
                                                </div>
                                            </div>
                                            <ButtonComponent cssClass="e-icons e-chevron-down-double e-flat" type="button"></ButtonComponent>
                                        </div>
                                        <hr className="border-light-subtle opacity-100" />
                                        <div>
                                            <div className="d-flex justify-content-between">
                                                <ButtonComponent cssClass="e-flat e-primary" iconCss="e-icons e-plus e-medium" content="Add Task" type="button"></ButtonComponent>
                                                <ButtonComponent cssClass="e-medium e-icons e-more-horizontal-1 e-flat" type="button"></ButtonComponent>
                                            </div>
                                            <div className="mt-2 d-flex">
                                                <span className="pt-1">
                                                    <CheckBoxComponent checked={checkbox1} cssClass="e-bigger" change={(e: any) => setCheckbox1(e.checked)}></CheckBoxComponent>
                                                </span>
                                                <p className={`fs-6 text-body ms-2 ps-1 mb-0 ${checkbox1 ? 'text-decoration-line-through' : ''}`}>Effortlessly resolve 70% of customer inquiries with our all-in-one platform.</p>
                                            </div>
                                            <div className="mt-2 d-flex">
                                                <span className="pt-1">
                                                    <CheckBoxComponent checked={checkbox2} cssClass="e-bigger" change={(e: any) => setCheckbox2(e.checked)}></CheckBoxComponent>
                                                </span>
                                                <p className={`fs-6 text-body ms-2 ps-1 mb-0 ${checkbox2 ? 'text-decoration-line-through' : ''}`}>Online customer service tool used to operations.</p>
                                            </div>
                                            <div className="mt-2 d-flex">
                                                <span className="pt-1">
                                                    <CheckBoxComponent checked={checkbox3} cssClass="e-bigger" change={(e: any) => setCheckbox3(e.checked)}></CheckBoxComponent>
                                                </span>
                                                <p className={`fs-6 text-body ms-2 ps-1 mb-0 ${checkbox3 ? 'text-decoration-line-through' : ''}`}>Managing and tracking client support.</p>
                                            </div>
                                        </div>
                                        <hr className="border-light-subtle opacity-100" />
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="fs-6 text-body-secondary">Completed</span>
                                            <ButtonComponent cssClass="e-medium e-icons e-more-horizontal-1 e-flat" type="button"></ButtonComponent>
                                        </div>
                                        <div className="mt-3 d-flex">
                                            <span className="pt-1">
                                                <CheckBoxComponent checked={checkbox4} cssClass="e-bigger" change={(e: any) => setCheckbox4(e.checked)}></CheckBoxComponent>
                                            </span>
                                            <p className={`fs-6 text-body ms-2 ps-1 mb-0 ${checkbox4 ? 'text-decoration-line-through' : ''}`}>Effortlessly resolve 70% of customer inquiries with our all-in-one platform.</p>
                                        </div>
                                        <div id="toast" className="position-absolute bottom-0 end-0"></div>
                                        <ToastComponent ref={toast} target="#toast" title="<div>Adaptive Tiles Meeting</div>" position={{ X: 'Right', Y: 'Bottom' }} cssClass="e-toast-info" width={224} content={() => <div>There was a problem with your network connection</div>} showCloseButton={true} timeOut={0} newestOnTop={true} created={() => toast.current?.show()}></ToastComponent>
                                    </div>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="py-3 px-1 position-absolute top-0 end-0">
                            <ButtonComponent cssClass="e-round e-large e-icons e-chevron-left" type="button" onClick={() => sidebar.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        }
    };

    return getContent();
}
