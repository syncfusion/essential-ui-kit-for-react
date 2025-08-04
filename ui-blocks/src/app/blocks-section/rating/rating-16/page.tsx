'use client';

import { useEffect, useState, useRef } from "react";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { RatingComponent, TextAreaComponent } from "@syncfusion/ej2-react-inputs";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import styles from "./page.module.css";

export default function Rating16() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    const [isMobile, setIsMobile] = useState(false);
    /* SB Code - End */
    const [experienceLevel, setExperienceLevel] = useState('smile');
    const dialog = useRef<DialogComponent | null>(null);

    const handleResize = (): void => {
        const isMobile = window.innerWidth <= 640;
        setIsMobile(isMobile)
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
                if (blockData.name === 'rating-16' && blockData.theme) {
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
                    <section>
                        <div id="dialog-container" className="pt-4 relative" style={{ minHeight: '576px' }}>
                            <DialogComponent ref={dialog} id={styles["dialog"]} className="rounded-none sm:rounded-lg pt-3.5 sm:px-1.5 overflow-hidden shadow-sm" target="#dialog-container" isModal={true} height="380px" width="400px" showCloseIcon={true} visible={true} beforeOpen={(event) => event.maxHeight = '100%'} open={(event) => event.preventFocus = true} style={{ maxWidth: '400px' }}
                                header={() => (
                                    <div className="flex flex-col">
                                        <h4 className="text-base mb-0 font-semibold text-gray-900 dark:text-white">Share your feedback</h4>
                                    </div>
                                )}
                                footerTemplate={() => (
                                    <div className="pb-4 flex gap-4">
                                        <ButtonComponent cssClass="e-outline e-block !ml-0" content="Cancel" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-primary e-block !ml-0" content="Submit" type="button"></ButtonComponent>
                                    </div>
                                )}
                            >
                                <p className="text-sm font-normal text-gray-700 dark:text-gray-100">How was working with our platform today?</p>
                                <div style={{ minHeight: "92px" }}>
                                    <RatingComponent itemsCount={5} enableAnimation={false} enableSingleSelection={true} style={{ minHeight: "92.4px" }}
                                    emptyTemplate={(data: any) => {
                                        let content: any = null;
                                        switch (data.index) {
                                            case 0:
                                                content = (
                                                    <span onClick={() => setExperienceLevel('love')}>
                                                        <span className={`sf-icon-emoji-love text-2xl rounded-full p-3 ${experienceLevel === 'love' ? 'text-orange-700 dark:text-orange-500 dark:bg-orange-800 bg-orange-100' : 'text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-700'}`}></span>
                                                    </span>
                                                );
                                                break;
                                            case 1:
                                                content = (
                                                    <span onClick={() => setExperienceLevel('smile')}>
                                                        <span className={`sf-icon-emoji-smile text-2xl rounded-full p-3 ${experienceLevel === 'smile' ? 'text-orange-700 dark:text-orange-500 dark:bg-orange-800 bg-orange-100' : 'text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-700'}`}></span>
                                                    </span>
                                                );
                                                break;
                                            case 2:
                                                content = (
                                                    <span onClick={() => setExperienceLevel('emoji')}>
                                                        <span className={`e-icons e-emoji text-2xl rounded-full p-3 ${experienceLevel === 'emoji' ? 'text-orange-700 dark:text-orange-500 dark:bg-orange-800 bg-orange-100' : 'text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-700'}`}></span>
                                                    </span>
                                                );
                                                break;
                                            case 3:
                                                content = (
                                                    <span onClick={() => setExperienceLevel('neutral')}>
                                                        <span className={`sf-icon-emoji-neutral text-2xl rounded-full p-3 ${experienceLevel === 'neutral' ? 'text-orange-700 dark:text-orange-500 dark:bg-orange-800 bg-orange-100' : 'text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-700'}`}></span>
                                                    </span>
                                                );
                                                break;
                                            case 4:
                                                content = (
                                                    <span onClick={() => setExperienceLevel('sad')}>
                                                        <span className={`sf-icon-emoji-sad text-2xl rounded-full p-3 ${experienceLevel === 'sad' ? 'text-orange-700 dark:text-orange-500 dark:bg-orange-800 bg-orange-100' : 'text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-700'}`}></span>
                                                    </span>
                                                );
                                                break;
                                            default:
                                                content = null;
                                        }
                                        return (
                                            <div className="pr-2 sm:pr-4 py-5">{content}</div>
                                        );
                                    }}
                                    tooltipTemplate={(item: any) => {
                                        switch (item.value) {
                                            case 1: return 'Love';
                                            case 2: return 'Smile';
                                            case 3: return 'Happy';
                                            case 4: return 'Neutral';
                                            case 5: return 'Sad';
                                            default: return '';
                                        }
                                    }}
                                ></RatingComponent>
                                </div>
                                <div className="flex flex-col gap-1 grow text-sm">
                                    <label className="font-medium text-xs text-gray-700 dark:text-gray-100">Can you tell us more?</label>
                                    <TextAreaComponent placeholder="Tell us like what could be improved..." resizeMode="None" rows={ isMobile ? 14 : 6 } style={{ height: isMobile ? '100%' : '95px' }} ></TextAreaComponent>
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
                        <div key={"rating-16-bs"} id="dialog-container" className="pt-4 position-relative" style={{ minHeight: '576px' }}>
                            <DialogComponent ref={dialog} id={styles["dialog"]} className="pt-sm-3 px-sm-2 overflow-hidden shadow-sm" target="#dialog-container" isModal={true} height="370px" width="400px" showCloseIcon={true} visible={true} beforeOpen={(event) => event.maxHeight = '100%'} open={(event) => event.preventFocus = true} style={{ maxWidth: '400px' }}
                                header={() => (
                                    <div className="d-flex flex-column">
                                        <h4 className="mb-0 mt-1 fs-6 fw-bold text-body">Share your feedback</h4>
                                    </div>
                                )}
                                footerTemplate={() => (
                                    <div className="d-flex gap-3 pb-1 mb-2 mt-1 flex-grow">
                                        <ButtonComponent cssClass="e-outline w-100 ms-0" content="Cancel" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-primary w-100 ms-0" content="Submit" type="button"></ButtonComponent>
                                    </div>
                                )}
                            >
                                <p className="fw-normal text-body-secondary mb-0">How was working with our platform today?</p>
                                <div style={{ minHeight: "85px" }}>
                                    <RatingComponent itemsCount={5} enableAnimation={false} enableSingleSelection={true}
                                    emptyTemplate={(data: any) => {
                                        let content: any = null;
                                        switch (data.index) {
                                            case 0:
                                                content = (
                                                    <span onClick={() => setExperienceLevel('love')}>
                                                        <span className={`sf-icon-emoji-love fs-4 rounded-circle p-2 ${experienceLevel === 'love' ? 'text-warning bg-warning-subtle' : 'text-body-secondary bg-body-secondary'}`}></span>
                                                    </span>
                                                );
                                                break;
                                            case 1:
                                                content = (
                                                    <span onClick={() => setExperienceLevel('smile')}>
                                                        <span className={`sf-icon-emoji-smile fs-4 rounded-circle p-2 ${experienceLevel === 'smile' ? 'text-warning bg-warning-subtle' : 'text-body-secondary bg-body-secondary'}`}></span>
                                                    </span>
                                                );
                                                break;
                                            case 2:
                                                content = (
                                                    <span onClick={() => setExperienceLevel('emoji')}>
                                                        <span className={`e-icons e-emoji fs-4 rounded-circle p-2 ${experienceLevel === 'emoji' ? 'text-warning bg-warning-subtle' : 'text-body-secondary bg-body-secondary'}`}></span>
                                                    </span>
                                                );
                                                break;
                                            case 3:
                                                content = (
                                                    <span onClick={() => setExperienceLevel('neutral')}>
                                                        <span className={`sf-icon-emoji-neutral fs-4 rounded-circle p-2 ${experienceLevel === 'neutral' ? 'text-warning bg-warning-subtle' : 'text-body-secondary bg-body-secondary'}`}></span>
                                                    </span>
                                                );
                                                break;
                                            case 4:
                                                content = (
                                                    <span onClick={() => setExperienceLevel('sad')}>
                                                        <span className={`sf-icon-emoji-sad fs-4 rounded-circle p-2 ${experienceLevel === 'sad' ? 'text-warning bg-warning-subtle' : 'text-body-secondary bg-body-secondary'}`}></span>
                                                    </span>
                                                );
                                                break;
                                            default:
                                                content = null;
                                        }
                                        return (
                                            <div className="pe-4 py-3">{content}</div>
                                        );
                                    }}
                                    tooltipTemplate={(item: any) => {
                                        switch (item.value) {
                                            case 1: return 'Love';
                                            case 2: return 'Smile';
                                            case 3: return 'Happy';
                                            case 4: return 'Neutral';
                                            case 5: return 'Sad';
                                            default: return '';
                                        }
                                    }}
                                ></RatingComponent>
                                </div>
                                <div className="d-flex flex-column gap-1 flex-grow-1 small">
                                    <label className="fw-normal text-body-secondary">Can you tell us more?</label>
                                    <TextAreaComponent placeholder="Tell us like what could be improved..." resizeMode="None" rows={ isMobile ? 14 : 6 } style={{ height: isMobile ? '100%' : '95px' }}></TextAreaComponent>
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
