'use client';

import { useEffect, useState, useRef } from "react";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { RatingComponent, TextAreaComponent } from "@syncfusion/ej2-react-inputs";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { CheckBoxComponent, ButtonComponent } from "@syncfusion/ej2-react-buttons";
import styles from "./page.module.css";

export default function Rating17() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const dialog = useRef<DialogComponent | null>(null);

    const handleResize = (): void => {
        const isMobile = window.innerWidth <= 640;
        dialog.current?.show(isMobile);
    };

    /* SB Code - Start */
    const refreshDialog = (timeout: number): void => {
        setTimeout(() => {
            dialog.current?.show(window.innerWidth <= 640);
        }, timeout);
    };

    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'rating-17' && blockData.theme) {
                    setTheme(blockData.theme);
                    refreshDialog(200);
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
        window.addEventListener('resize', handleResize)

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
                    <section>
                        <div id="dialog-container" className="relative flex justify-center" style={{ minHeight: '580px' }}>
                            <DialogComponent ref={dialog} id={styles["dialog"]} className="rounded-none sm:rounded-lg shadow-sm sm:m-4 py-3.5" isModal={true} showCloseIcon={true} visible={true} width="400px" target="#dialog-container" open={(args) => (args.preventFocus = true)}
                                header={() => (
                                    <div className="flex flex-col pb-1.5">
                                        <div className="flex items-center gap-3">
                                            <div className="rounded-full flex items-center justify-center shrink-0 bg-primary-100 dark:bg-cyan-800" style={{ height: '38px', width: '38px' }}>
                                                <span className="e-icons e-star-filled text-primary-600 dark:text-primary-400"></span>
                                            </div>
                                            <div className="flex flex-col">
                                                <h4 className="text-base font-semibold text-gray-900 dark:text-white">Rate our platform</h4>
                                                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 pt-1">Provide us with feedback for the platform.</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                footerTemplate={() => (
                                    <div className="flex flex-row justify-end pt-4 pb-0.5 gap-4">
                                        <ButtonComponent className="!ml-0" cssClass="e-outline e-block" type="button">Cancel</ButtonComponent>
                                        <ButtonComponent className="!ml-0" cssClass="e-primary e-block" type="button">Submit</ButtonComponent>
                                    </div>
                                )}
                            >
                                <div>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white pt-1">Your rating</p>
                                    <div className="mt-2 flex gap-2" style={{ height: "60px" }}>
                                        <RatingComponent value={4}
                                            emptyTemplate={() => (
                                                <div className="border border-gray-300 dark:border-gray-500 rounded-md px-3 mx-1">
                                                    <span className="sf-icon-star-filled-01 text-2xl text-gray-300 dark:text-gray-500"></span>
                                                </div>
                                            )}
                                            fullTemplate={() => (
                                                <div className="border border-gray-300 dark:border-gray-500 rounded-md px-3 mx-1">
                                                    <span className="sf-icon-star-filled-01 text-2xl text-amber-300"></span>
                                                </div>
                                            )}
                                        >
                                        </RatingComponent>
                                    </div>
                                    <div className="mt-4 flex flex-col gap-1">
                                        <label className="text-xs font-medium text-gray-700 dark:text-gray-100">Feature/service name <span className="text-red-500">*</span></label>
                                        <DropDownListComponent placeholder="Analytics dashboard"></DropDownListComponent>
                                    </div>
                                    <div className="mt-4 flex flex-col gap-1 grow text-sm">
                                        <label className="font-medium text-xs text-gray-700 dark:text-gray-100">
                                            Product overview <span className="text-gray-500">(Optional)</span>
                                        </label>
                                        <TextAreaComponent rows={6} placeholder="Write your thoughts..." resizeMode="None" style={{ height: '95px' }}></TextAreaComponent>
                                    </div>
                                    <div className="mt-4">
                                        <CheckBoxComponent label="Remain anonymous"></CheckBoxComponent>
                                    </div>
                                </div>
                            </DialogComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="top-0 flex w-full absolute">
                            <ButtonComponent className="mx-auto my-5" content="Feedback Form" onClick={() => dialog.current?.show()} type="button"></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section>
                        <div key={"rating-17-bs"} id="dialog-container" className="position-relative d-flex justify-content-center" style={{ minHeight: '580px' }}>
                            <DialogComponent ref={dialog} className="rounded-0 rounded-3 shadow-sm m-sm-4 py-2 border-0" isModal={true} showCloseIcon={true} visible={true} width="400px" target="#dialog-container" open={(args) => (args.preventFocus = true)}
                                header={() => (
                                    <div className="d-flex flex-column py-1 ps-2 ms-1">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 bg-primary bg-opacity-25" style={{ height: '38px', width: '38px' }}>
                                                <span className="e-icons e-star-filled text-primary"></span>
                                            </div>
                                            <div className="d-flex flex-column small">
                                                <h4 className="fs-6 fw-bold text-body mb-0">Rate our platform</h4>
                                                <p className="fw-medium small text-body-secondary pt-1 mb-0">Provide us with feedback for the platform.</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                footerTemplate={() => (
                                    <div className="d-flex flex-row justify-content-end gap-3 pt-2 my-1 px-2 mx-1">
                                        <ButtonComponent className="ms-0" cssClass="e-outline e-block" type="button">Cancel</ButtonComponent>
                                        <ButtonComponent className="ms-0" cssClass="e-primary e-block" type="button">Submit</ButtonComponent>
                                    </div>
                                )}
                            >
                                <div className="px-2 mx-1">
                                    <p className="fw-medium text-body pt-1 mb-0">Your rating</p>
                                    <div className="mt-2 d-flex gap-2" style={{ height: "60px" }}>
                                        <RatingComponent value={4}
                                            emptyTemplate={() => (
                                                <div className="border border-light-subtle rounded px-3 me-1 ms-sm-1">
                                                    <span className="sf-icon-star-02 fs-5 text-body-secondary"></span>
                                                </div>
                                            )}
                                            fullTemplate={() => (
                                                <div className="border border-light-subtle rounded px-3 me-1 ms-sm-1">
                                                    <span className="sf-icon-star-filled-01 fs-5 text-warning"></span>
                                                </div>
                                            )}
                                        >
                                        </RatingComponent>
                                    </div>
                                    <div className="mt-2 d-flex flex-column gap-1">
                                        <label className="small text-body-secondary">Feature/service name <span className="text-danger">*</span></label>
                                        <DropDownListComponent placeholder='Analytics dashboard'></DropDownListComponent>
                                    </div>
                                    <div className="mt-3 d-flex flex-column gap-1 flex-grow-1">
                                        <label className="small text-body-secondary">Product overview <span className="text-body-secondary">(Optional)</span></label>
                                        <TextAreaComponent rows={6} placeholder="Write your thoughts..." resizeMode="None" style={{ height: '95px' }}></TextAreaComponent>
                                    </div>
                                    <div className="mt-3 mb-1">
                                        <CheckBoxComponent label="Remain anonymous" ></CheckBoxComponent>
                                    </div>
                                </div>
                            </DialogComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="top-0 d-flex w-100 position-absolute">
                            <ButtonComponent className="mx-auto my-4" cssClass="e-outline" content="Feedback Form" onClick={() => dialog.current?.show()} type="button"></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        }
    };

    return getContent();
}
