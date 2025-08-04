'use client';

import { useEffect, useState, useRef } from "react";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { TextAreaComponent, TextBoxComponent, UploaderComponent } from "@syncfusion/ej2-react-inputs";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import styles from "./page.module.css";

export default function AIFloatingWidget3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const dialogRef = useRef<DialogComponent | null>(null);
    const uploaderRef = useRef<UploaderComponent | null>(null);
    const isToggleRef = useRef(false);

    const toggleDialog = (): void => {
        if (dialogRef.current) {
            isToggleRef.current = !isToggleRef.current;
            if (isToggleRef.current) {
                dialogRef.current.hide();
            } else {
                dialogRef.current.show();
            }
        }
    };
 
    const checkWindowSize = (): void => {
        if (dialogRef.current) {
            dialogRef.current.show(window.innerWidth <= 640);
            dialogRef.current.position = { X: 'right', Y: 'center' };
            dialogRef.current.refreshPosition();
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-floating-widget-3' && blockData.theme) {
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
        window.addEventListener("message", handleMessageEvent);
        /* SB Code - End */
        checkWindowSize();
        window.addEventListener("resize", checkWindowSize);
        
        return () => {
            /* SB Code - Start */
            window.removeEventListener("message", handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener("resize", checkWindowSize);
        };
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-800 pr-6">
                        <div id="dialog-container" style={{ minHeight: '900px' }}>
                            <DialogComponent ref={dialogRef} key={"floating-3-tw"} id={styles["setting-panel"]} className="sm:rounded-lg rounded-none overflow-hidden border-0" target="#dialog-container" visible={true} width="380px" height="880px" open={(e) => (e.preventFocus = true)} beforeOpen={(e) => (e.maxHeight = '100%')}
                                header={() => (
                                    <div className="flex justify-between items-center pt-1.5">
                                        <div className="flex items-center gap-2">
                                            <span className="e-avatar bg-gray-100 dark:bg-gray-700">
                                                <span className="e-avatar e-avatar-small bg-white dark:bg-gray-800">
                                                    <span className="e-icons e-chart text-lg text-orange-700 dark:text-orange-500"></span>
                                                </span>
                                            </span>
                                            <span className="text-sm font-semibold">Integration settings</span>
                                        </div>
                                        <ButtonComponent className="m-1" cssClass="e-flat e-small e-round" iconCss="e-icons e-close" type="button" onClick={toggleDialog}></ButtonComponent>
                                    </div>
                                )}
                                footerTemplate={() => (
                                    <div className="flex flex-col justify-between lg:items-center lg:flex-row gap-4 py-2">
                                        <ButtonComponent className="w-100 lg:w-fit !ml-0" iconCss="e-icons e-user" content="Support" type="button"></ButtonComponent>
                                        <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-3">
                                            <ButtonComponent className="w-100 lg:w-fit !ml-0" content="Cancel" type="button"></ButtonComponent>
                                            <ButtonComponent className="w-100 lg:w-fit !ml-0" cssClass="e-primary" content="Save changes" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                )}
                            >
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-sm font-semibold text-gray-900 dark:text-white">Google analytics</span>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                Create a property in your <a href="#" className="underline">Google analytics account</a>. You can find your measurement ID <a href="#" className="underline">here</a>.
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label className="flex justify-between items-center text-xs font-medium text-gray-900 dark:text-white"> Measurement ID*
                                                <span className="flex gap-1 items-center text-green-700 dark:text-green-500">
                                                    <span className="e-icons e-circle-info text-sm"></span>
                                                    <span className="text-xs">Verified</span>
                                                </span>
                                            </label>
                                            <TextBoxComponent type="text" value="G-QPD2NX5E3C"></TextBoxComponent>
                                        </div>
                                    </div>
                                    <div className="border border-dashed border-gray-200 dark:border-gray-600"></div>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-sm font-semibold text-gray-900 dark:text-white">Google optimize</span>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                Create a new container in your <a href="#" className="underline">Google optimize</a> account then paste the container ID <a href="#" className="underline">here</a>.
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label className="text-xs font-medium text-gray-900 dark:text-white">Container ID</label>
                                            <TextBoxComponent type="text" placeholder="e.g. G-QPD2NX5E3C"></TextBoxComponent>
                                        </div>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">
                                            Start running A/B, multivariate, and more tests on your pages with Google optimize. You'll need to have Google analytics enabled.
                                        </span>
                                    </div>
                                    <div className="border border-dashed border-gray-200 dark:border-gray-600"></div>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-sm font-semibold text-gray-900 dark:text-white">Private key (JSON)</span>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Create a private key under service accounts in Google Cloud console and upload.</p>
                                        </div>
                                        <div id="upload-template" className="flex flex-col items-center border border-dashed border-gray-200 dark:border-gray-600 rounded-md pt-4">
                                            <span className="e-icons e-align-top mt-1 text-gray-500 dark:text-gray-200"></span>
                                            <p className="text-xs font-normal text-gray-500 dark:text-gray-400 my-4">
                                                <a href="#" className="font-medium underline text-gray-900 dark:text-white" onClick={() => uploaderRef.current?.element.click()}>Click to upload</a>{' '}or drag and drop
                                            </p>
                                            <UploaderComponent ref={uploaderRef} className="w-full" dropArea="#upload-template"></UploaderComponent>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="border border-gray-200 dark:border-gray-600 w-full border-dashed"></div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 px-2">OR</p>
                                            <div className="border border-gray-200 dark:border-gray-600 w-full border-dashed"></div>
                                        </div>
                                        <TextAreaComponent resizeMode="None" style={{ height: '86px' }}></TextAreaComponent>
                                    </div>
                                </div>
                            </DialogComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-6 top-0 right-4 mr-2 absolute">
                            <ButtonComponent cssClass="e-outline" content="Setting Panel" type="button" onClick={toggleDialog}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body pe-3">
                        <div id="dialog-container" style={{ minHeight: '940px' }}>
                            <DialogComponent ref={dialogRef} key={"floating-3-bs"} id={styles["setting-panel"]} className="rounded-3 shadow" target="#dialog-container" visible={true} position={{ X: 'right', Y: '12' }} width="380px" height="920px" open={(e) => (e.preventFocus = true)} beforeOpen={(e) => (e.maxHeight = '100%')}
                                header={() => (
                                    <div className="d-flex justify-content-between align-items-center pt-1 ms-1">
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="e-avatar rounded-1 bg-body-tertiary">
                                                <span className="e-avatar e-avatar-small rounded-1 bg-body">
                                                    <span className="e-icons e-chart fs-5 text-warning"></span>
                                                </span>
                                            </span>
                                            <span className="fw-bold small">Integration settings</span>
                                        </div>
                                        <ButtonComponent className="m-1" cssClass="e-flat e-small e-round e-inherit" iconCss="e-icons e-close" type="button" onClick={toggleDialog}></ButtonComponent>
                                    </div>
                                )}
                                footerTemplate={() => (
                                    <div className="d-flex flex-column justify-content-between align-items-lg-center flex-lg-row gap-3 p-1">
                                        <ButtonComponent className="flex-grow-1 flex-sm-grow-0 ms-0" cssClass="e-outline" iconCss="e-icons e-user" content="Support" type="button"></ButtonComponent>
                                        <div className="d-flex flex-column flex-lg-row gap-3">
                                            <ButtonComponent className="flex-grow-1 flex-sm-grow-0 ms-0" cssClass="e-outline" content="Cancel" type="button"></ButtonComponent>
                                            <ButtonComponent className="flex-grow-1 flex-sm-grow-0 ms-0" cssClass="e-primary" content="Save changes" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                )}
                            >
                                <div className="d-flex flex-column gap-4 fs-6 px-1">
                                    <div className="d-flex flex-column gap-3 small">
                                        <div className="d-flex flex-column gap-2">
                                            <span className="fw-bold text-body">Google analytics</span>
                                            <p className="small text-body-secondary mb-0">Create a property in your <a href="#" className="text-body-secondary">Google analytics account</a>. You can find your measurement ID <a href="#" className="text-body-secondary">here</a>.</p>
                                        </div>
                                        <div className="d-flex flex-column gap-1">
                                            <label className="d-flex justify-content-between fw-medium small text-body">
                                                Measurement ID*
                                                <span className="d-flex gap-1 align-items-center text-success">
                                                    <span className="e-icons e-circle-info"></span>Verified
                                                </span>
                                            </label>
                                            <TextBoxComponent type="text" value="G-QPD2NX5E3C"></TextBoxComponent>
                                        </div>
                                    </div>
                                    <div className="border-light-subtle m-0" style={{ border: '1px dashed' }}></div>
                                    <div className="d-flex flex-column gap-3 small">
                                        <div className="d-flex flex-column gap-2">
                                            <span className="fw-bold text-body">Google optimize</span>
                                            <p className="small text-body-secondary mb-0">
                                                Create a new container in your <a href="#" className="text-body-secondary">Google optimize</a> account then paste the container ID <a href="#" className="text-body-secondary">here</a>.
                                            </p>
                                        </div>
                                        <div className="d-flex flex-column gap-1">
                                            <label className="fw-medium small text-body">Container ID</label>
                                            <TextBoxComponent type="text" placeholder="e.g. G-QPD2NX5E3C"></TextBoxComponent>
                                        </div>
                                        <span className="small text-body-secondary">
                                            Start running A/B, multivariate, and more tests on your pages with Google optimize. You'll need to have Google analytics enabled.
                                        </span>
                                    </div>
                                    <div className="border-light-subtle m-0" style={{ border: '1px dashed' }}></div>
                                    <div className="d-flex flex-column gap-3 small">
                                        <div className="d-flex flex-column gap-2">
                                            <span className="fw-bold text-body">Private key (JSON)</span>
                                            <p className="small text-body-secondary mb-0">Create a private key under service accounts in Google Cloud console and upload.</p>
                                        </div>
                                        <div id="upload-template" className="d-flex flex-column align-items-center rounded pt-3 border-light-subtle" style={{ border: '1px dashed' }}>
                                            <span className="e-icons e-align-top mt-1 fs-6 text-body-secondary"></span>
                                            <p className="small fw-normal text-body-tertiary my-3">
                                                <a href="#" className="fw-medium text-decoration-underline text-body" onClick={() => uploaderRef.current?.element.click()}>Click to upload</a> or drag and drop
                                            </p>
                                            <UploaderComponent ref={uploaderRef} className="w-100" dropArea="#upload-template"></UploaderComponent>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="border-light-subtle w-100" style={{ border: '1px dashed' }}></div>
                                            <p className="small text-body-secondary px-2 mb-0">OR</p>
                                            <div className="border-light-subtle w-100" style={{ border: '1px dashed' }}></div>
                                        </div>
                                        <TextAreaComponent resizeMode="None" style={{ height: '86px' }}></TextAreaComponent>
                                    </div>
                                </div>
                            </DialogComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 position-absolute top-0 end-0 me-4">
                            <ButtonComponent cssClass="e-outline" content="Setting Panel" type="button" onClick={toggleDialog}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        }
    };

    return getContent();
}
