'use client';

import { useEffect, useState, useRef } from 'react';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { ButtonComponent, CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import styles from './page.module.css';

export default function Modals7() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const dialog = useRef<DialogComponent>(null);

    const checkWindowSize = (): void => {
        const isMobile = window.innerWidth <= 640;
        if (dialog) {
            dialog.current?.show(isMobile);
        }
    };

    const created = (args: number, icons: string): void => {
        const hiddenSelectElements = document.getElementsByClassName("e-ddl-hidden");
        if (hiddenSelectElements.length > 1) {
            const hiddenSelectElement = hiddenSelectElements[args];
            const iconElement = document.createElement("span");
            iconElement.style.cssText = "display: flex; align-items: center; margin-left: 10px;";
            iconElement.className = `e-icons e-medium ${icons} text-gray-500 dark:text-gray-300`;
            if (hiddenSelectElement.parentNode) {
                hiddenSelectElement.parentNode.insertBefore(iconElement, hiddenSelectElement);
            }
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'modals-7' && blockData.theme) {
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
                    <section>
                        <div id="dialog-container" className="relative" style={{ minHeight: "724px" }}>
                            <DialogComponent ref={dialog} key={"modal-7-tw"} id={styles["dialog"]} className="rounded-none sm:rounded-lg sm:m-4 overflow-hidden" width="515px" isModal={true} target="#dialog-container" showCloseIcon={true} beforeOpen={(event) => { event.maxHeight = '100%'; }} open={(e) => { e.preventFocus = true; }}
                                header={() => <div className="font-semibold leading-normal">Track New Feature</div>} 
                                footerTemplate={() => (
                                    <div className="flex flex-row justify-end gap-2 sm:gap-1 mt-1 sm:mt-0 mb-2">
                                        <ButtonComponent className="w-1/2 sm:w-fit !ml-0" content="Cancel" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-primary w-1/2 sm:w-fit" content="Save Feature" type="button"></ButtonComponent>
                                    </div>
                                )}
                            >
                                <form action="#" className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                                    <div className="flex flex-col gap-4 sm:gap-3">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                                            <label className="w-44 text-sm font-medium shrink-0">Feature Name</label>
                                            <TextBoxComponent className="w-full" type="text" placeholder="Enter the feature name"></TextBoxComponent>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                                            <label className="flex items-center gap-1 w-44 text-sm font-medium shrink-0">No Views<span className="e-icons e-circle-info text-gray-500 dark:text-gray-300"></span></label>
                                            <DropDownListComponent className="w-full grow" placeholder="Select the number of views" created={() => { created(0, 'e-grid-view'); }}></DropDownListComponent>
                                        </div>
                                    </div>
                                    <p className="text-sm font-semibold px-2 py-1.5 bg-gray-100 rounded-md dark:bg-gray-700">Tracking Criteria</p>
                                    <div className="flex flex-col gap-4 sm:gap-3">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                                            <label className="flex items-center gap-1 w-44 text-sm font-medium shrink-0">Source<span className="e-icons e-circle-info text-gray-500 dark:text-gray-300"></span></label>
                                            <div className="border rounded shadow-sm flex grow border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-800">
                                                <span className="flex items-center border-r border-gray-300 dark:border-gray-500 pl-3 pr-1.5">
                                                    <CheckBoxComponent label="Event" labelPosition="Before" checked={true}></CheckBoxComponent>
                                                </span>
                                                <TextBoxComponent className="grow" cssClass="!border-0" type="text" placeholder="Company attributes"></TextBoxComponent>
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                                            <label className="w-44 text-sm font-medium shrink-0">Event Name</label>
                                            <TextBoxComponent className="w-full" type="text" placeholder="Enter the event name"></TextBoxComponent>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                                            <label className="w-44 text-sm font-medium shrink-0">Target Segment</label>
                                            <DropDownListComponent className="w-full" placeholder="Select the target audience"></DropDownListComponent>
                                        </div>
                                        <div className="flex flex-row items-center justify-between sm:justify-normal gap-1">
                                            <label className="w-44 text-sm font-medium shrink-0">Event Attributes</label>
                                            <ButtonComponent cssClass="e-primary e-outline" content="Add filter" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                    <p className="text-sm font-semibold px-2 py-1.5 bg-gray-100 rounded-md dark:bg-gray-700">Workflow</p>
                                    <div className="flex flex-col gap-4 sm:gap-3">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                                            <label className="flex items-center gap-1 w-44 text-sm font-medium shrink-0">Status<span className="e-icons e-circle-info text-gray-500 dark:text-gray-300"></span></label>
                                            <DropDownListComponent className="w-full grow" placeholder="Evaluating" created={() => { created(2, 'e-contrast'); }}></DropDownListComponent>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                                            <label className="w-44 text-sm font-medium shrink-0">Evaluation Period</label>
                                            <DropDownListComponent className="w-full grow" placeholder="Select the evaluation timeframe"></DropDownListComponent>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                                            <label className="w-44 text-sm font-medium shrink-0">Release Date</label>
                                            <DatePickerComponent className="w-full grow" placeholder="MM/DD/YYYY"></DatePickerComponent>
                                        </div>
                                    </div>
                                </form>
                            </DialogComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="top-0 left-0 absolute w-full flex">
                            <ButtonComponent className="my-5 mx-auto" content="Track New Feature" type="button" onClick={() => dialog.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section>
                        <div id="dialog-container" className="position-relative" style={{ minHeight: "724px" }}>
                            <DialogComponent ref={dialog} key={"modal-7-bs"} id={styles["dialog"]} className="rounded-3 m-sm-2" target="#dialog-container" isModal={true} showCloseIcon={true} width="515px" open={(e) => { e.preventFocus = true; }} beforeOpen={(e) => { e.maxHeight = "100%"; }}
                                header={() => (
                                    <p className="fw-bold mb-0 text-body">Track New Feature</p>
                                )}
                                footerTemplate={() => (
                                    <div className="d-flex justify-content-end gap-2 gap-sm-1 py-1">
                                        <ButtonComponent cssClass="col col-sm-auto ms-0" content="Cancel" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-primary col col-sm-auto" content="Save Feature" type="button"></ButtonComponent>
                                    </div>
                                )}
                            >
                                <form action="#" className="d-flex flex-column gap-3 pt-1 text-body" onSubmit={(e) => e.preventDefault()}>
                                    <div className="row gap-3 gap-sm-2 gy-sm-1">
                                        <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-1 mt-0">
                                            <label className="fw-medium flex-shrink-0" style={{ width: "175px" }}>Feature Name</label>
                                            <TextBoxComponent className="w-100" type="text" placeholder="Enter the feature name"></TextBoxComponent>
                                        </div>
                                        <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-1">
                                            <label className="d-flex align-items-center gap-1 fw-medium flex-shrink-0" style={{ width: "175px" }}>No Views
                                                <span className="e-icons e-circle-info text-body-secondary"></span>
                                            </label>
                                            <DropDownListComponent className="w-100 flex-grow-1" placeholder="Select the number of views" created={() =>created(0, "e-grid-view")}></DropDownListComponent>
                                        </div>
                                    </div>
                                    <p className="fw-bold px-2 py-1 bg-body-secondary rounded mb-0">Tracking Criteria</p>
                                    <div className="row gap-3 gap-sm-2 gy-sm-1 mt-0">
                                        <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-1">
                                            <label className="d-flex align-items-center gap-1 fw-medium flex-shrink-0" style={{ width: "175px" }}>Source<span className="e-icons e-circle-info text-body-secondary"></span></label>
                                            <div className="d-flex border rounded-1 flex-grow-1">
                                                <span className="d-flex align-items-center border-end px-2">
                                                    <CheckBoxComponent label="Event" labelPosition="Before" checked={true}></CheckBoxComponent>
                                                </span>
                                                <TextBoxComponent className="flex-grow-1" cssClass="border-0" type="text" placeholder="Company attributes"></TextBoxComponent>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-1">
                                            <label className="fw-medium flex-shrink-0" style={{ width: "175px" }}>Event Name</label>
                                            <TextBoxComponent className="w-100" type="text" placeholder="Enter the event name"></TextBoxComponent>
                                        </div>
                                        <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-1">
                                            <label className="fw-medium flex-shrink-0" style={{ width: "175px" }}>Target Segment</label>
                                            <DropDownListComponent className="w-100" placeholder="Select the target audience"></DropDownListComponent>
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-between justify-content-sm-start gap-1">
                                            <label className="fw-medium flex-shrink-0" style={{ width: "175px" }}>Event Attributes</label>
                                            <ButtonComponent cssClass="e-primary e-outline" content="Add filter" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                    <p className="fw-bold px-2 py-1 bg-body-secondary rounded mb-0">Workflow</p>
                                    <div className="row gap-3 gap-sm-2 gy-sm-1 mt-0">
                                        <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-1">
                                            <label className="d-flex align-items-center gap-1 fw-medium flex-shrink-0" style={{ width: "175px" }}>Status
                                                <span className="e-icons e-circle-info text-body-secondary"></span>
                                            </label>
                                            <DropDownListComponent className="w-100 flex-grow-1" placeholder="Evaluating" created={() => created(2, "e-contrast")}></DropDownListComponent>
                                        </div>
                                        <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-1">
                                            <label className="fw-medium flex-shrink-0" style={{ width: "175px" }}>Evaluation Period</label>
                                            <DropDownListComponent className="w-100 flex-grow-1" placeholder="Select the evaluation timeframe"></DropDownListComponent>
                                        </div>
                                        <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-1">
                                            <label className="fw-medium flex-shrink-0" style={{ width: "175px" }}>Release Date</label>
                                            <DatePickerComponent className="w-100 flex-grow-1" placeholder="MM/DD/YYYY"></DatePickerComponent>
                                        </div>
                                    </div>
                                </form>
                            </DialogComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="position-absolute top-0 start-0 d-flex w-100">
                            <ButtonComponent className="mx-auto my-3 e-outline" content="Track New Feature" type="button" onClick={() => dialog.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        };
    };

    return getContent();
}