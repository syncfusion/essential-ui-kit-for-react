'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent, FabComponent } from "@syncfusion/ej2-react-buttons";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import styles from "./page.module.css";

export default function FloatingMenu1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isToggleState, setIsToggleState] = useState(true);
    const [isMobileView, setIsMobileView] = useState(false);
    const dialogRef = useRef<DialogComponent | null>(null);
    const fabRef = useRef<FabComponent | null>(null);

    const data: any[] = [
        {
            question: "How do I reset my password?",
            answer: "Detailed steps on resetting a forgotten password or changing an existing one."
        },
        {
            question: "How can I contact customer support?",
            answer: "Guidance on reaching out to customer service via chat, email, or phone."
        },
        {
            question: "How do I update my account information?",
            answer: "Instructions for editing personal details such as email address, phone number, or payment..."
        },
        {
            question: "What should I do if I can't log in?",
            answer: "Troubleshooting steps for login issues, including account lockouts or forgotten credentials."
        },
        {
            question: "How do I track my order?",
            answer: "Steps to track the status of an order, including shipping updates and expected delivery times."
        }
    ];

    const toggleDialog = (): void => {
        setIsToggleState(!isToggleState);
    };

    const setDialogPosition = (event: any): void => {
        if (fabRef.current && dialogRef.current) {
            const position = fabRef.current.element.getBoundingClientRect();
            const dialogBounds = dialogRef.current.element.getBoundingClientRect();
            setIsMobileView(position.width === 0);
            dialogRef.current.position = position.width === 0
                ? { X: 0, Y: 0 }
                : {
                    X: position.x - (dialogBounds.width - 52),
                    Y: position.y - (dialogBounds.height + 18)
                };
        }
        event.preventFocus = true;
    };
        
    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'floating-menu-1' && blockData.theme) {
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
        window.addEventListener('resize', setDialogPosition);
        if (dialogRef.current) {
            if (isToggleState) {
                dialogRef.current.show();
            } else {
                dialogRef.current.hide();
            }
        }

        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', setDialogPosition);
        }
    }, [isToggleState]);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-gray-50 dark:bg-gray-950">
                        <div id="target" className="w-full" style={{ height: isMobileView ? "591px" : "720px" }}>
                            <div className="flex items-center justify-center pt-4 block sm:hidden">
                                <ButtonComponent cssClass="e-primary e-round e-bigger" iconCss="sf-icon-help-circle !text-xl" type="button" onClick={toggleDialog}></ButtonComponent>
                            </div>
                            <DialogComponent ref={dialogRef} id={styles["floating-article"]} className="sm:!rounded-t !rounded-none overflow-hidden !border-0" width="400px" minHeight="591px" open={setDialogPosition} created={() => dialogRef.current?.show()}
                                header={() => {
                                    return (
                                        <div className="flex flex-col justify-between items-center bg-primary-600 dark:bg-primary-400 p-3">
                                            <div className="w-full text-center">
                                                <p className="text-lg font-semibold text-white dark:text-gray-900">Help</p>
                                                <div className="e-input-group e-bigger mt-3">
                                                    <input className="e-input" type="text" placeholder="Search for help" />
                                                    <span className="e-input-group-icon e-icons e-search !text-lg !leading-4"></span>
                                                </div>
                                            </div>
                                            <div className="flex justify-end block sm:hidden px-4 absolute right-0">
                                                <ButtonComponent cssClass="e-primary e-round" iconCss="e-icons e-close text-white dark:text-black !leading-5 !text-base" type="button" onClick={toggleDialog}></ButtonComponent>
                                            </div>
                                        </div>
                                    );
                                }}
                            >
                                <ListViewComponent className="border-0 bg-white dark:bg-gray-900" dataSource={data} width="100%" height="486px"
                                    template={(data: any) => {
                                        return (
                                            <div className="e-list-wrapper px-3 pt-4 border-b border-solid border-gray-200 dark:border-gray-600">
                                                <div className="flex items-center pb-4 justify-between">
                                                    <div>
                                                        <p className="text-sm font-medium truncate">{data.question}</p>
                                                        <p className="text-sm sm:w-80 line-clamp-2 mt-1">{data.answer}</p>
                                                    </div>
                                                    <ButtonComponent className="e-flat e-round shrink-0" iconCss="e-icons e-chevron-right !text-lg" type="button"></ButtonComponent>
                                                </div>
                                            </div>
                                        );
                                    }}
                                ></ListViewComponent>
                            </DialogComponent>
                            <FabComponent ref={fabRef} cssClass="e-primary e-round e-bigger !hidden sm:!block" iconCss={!isToggleState ? "sf-icon-help-circle !text-2xl" : "e-icons e-close !text-2xl"} target="#target" position="BottomRight" type="button" onClick={toggleDialog}></FabComponent>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div id="target" className="w-100" style={{ height: isMobileView ? "591px" : "720px" }}>
                            <div className="d-flex align-items-center justify-content-center pt-4 d-block d-sm-none">
                                <ButtonComponent cssClass="e-primary e-round e-bigger" iconCss="sf-icon-help-circle fs-5 lh-base" type="button" onClick={toggleDialog}></ButtonComponent>
                            </div>
                            <DialogComponent ref={dialogRef} id={styles["floating-article"]} className="rounded-1 overflow-hidden border-0" width="400px" minHeight="592px" open={setDialogPosition} created={() => dialogRef.current?.show()}
                                header={() => {
                                    return (
                                        <div className="d-flex flex-column justify-content-between align-items-center bg-primary text-white p-3">
                                            <div className="w-100 text-center">
                                                <p className="fs-6 fw-semibold m-0 lh-sm text-white">Help</p>
                                                <div className="e-input-group e-bigger mt-3">
                                                    <input className="e-input form-control" type="text" placeholder="Search for help" />
                                                    <span className="e-input-group-icon e-icons e-search border-start-0 text-secondary"></span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end d-block d-sm-none px-3 top-0 pt-2 position-absolute end-0">
                                                <ButtonComponent className="e-primary e-round" iconCss="e-icons e-close text-white" type="button" onClick={toggleDialog}></ButtonComponent>
                                            </div>
                                        </div>
                                    );
                                }}
                            >
                                <ListViewComponent className="border-0 rounded-0" dataSource={data} width="100%" height="486px"
                                    template={(data: any) => {
                                        return (
                                            <div className="e-list-wrapper px-3 pt-3">
                                                <div className="e-list-content d-flex align-items-center pb-3 justify-content-between" style={{ lineHeight: "20px" }}>
                                                    <div>
                                                        <p className="fw-medium m-0 mb-1 text-truncate">{data.question}</p>
                                                        <p className="m-0" style={{ maxWidth: "320px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{data.answer}</p>
                                                    </div>
                                                    <ButtonComponent className="e-flat e-round e-inherit flex-shrink-0" iconCss="e-icons e-chevron-right" type="button"></ButtonComponent>
                                                </div>
                                            </div>
                                        );
                                    }}
                                ></ListViewComponent>
                            </DialogComponent>
                            <FabComponent ref={fabRef} cssClass="e-primary e-round e-bigger d-none d-sm-block" target="#target" iconCss={!isToggleState ? "sf-icon-help-circle fs-4" : "e-icons e-close fs-5"} position="BottomRight" type="button" onClick={toggleDialog}></FabComponent>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}