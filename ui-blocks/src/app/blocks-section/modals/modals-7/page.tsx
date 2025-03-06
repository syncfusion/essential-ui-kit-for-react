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
    const [containerHeight, setContainerHeight] = useState("724px");
    const dialog = useRef<DialogComponent>(null);

    const checkWindowSize = () => {
        const isMobile = window.innerWidth <= 640;
        setContainerHeight(isMobile ? "624px" : "724px");
        if (dialog) {
            dialog.current?.show(isMobile);
        }
    };

    const onCreated = (args: number, icons: string): void => {
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

    const focusIn = (event: React.FocusEvent<HTMLInputElement>) => {
        event.target.parentElement?.classList.add("e-input-focus");
    };
    
    const focusOut = (event: React.FocusEvent<HTMLInputElement>) => {
        event.target.parentElement?.classList.remove("e-input-focus");
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
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
                        <div id="dialog-container" className="relative flex justify-center" style={{ minHeight: containerHeight }}>
                            <ButtonComponent className="h-fit my-5" type="button" onClick={() => dialog.current?.show()}>Track New Feature</ButtonComponent>
                            <DialogComponent id={styles["dialog"]} className="rounded-none sm:rounded-lg sm:m-4" ref={dialog} key={"modal-8-tw"} width="515px" isModal={true} target="#dialog-container" showCloseIcon={true} beforeOpen={(event) => { event.maxHeight = '624px'; }} open={(e) => { e.preventFocus = true; }}
                                header={() => <div className="font-semibold leading-normal">Track New Feature</div>} 
                                footerTemplate={() => (
                                    <div className="flex flex-row justify-end gap-2 sm:gap-1 mt-1 sm:mt-0 mb-2">
                                        <ButtonComponent className="grow sm:grow-0 !ml-0" type="button">Cancel</ButtonComponent>
                                        <ButtonComponent className="e-primary grow sm:grow-0" type="button">Save Feature</ButtonComponent>
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
                                            <DropDownListComponent className="w-full grow" placeholder="Select the number of views" created={() => { onCreated(0, 'e-grid-view'); }}></DropDownListComponent>
                                        </div>
                                    </div>
                                    <p className="text-sm font-semibold px-2 py-1.5 bg-gray-100 rounded-md dark:bg-gray-700">Tracking Criteria</p>
                                    <div className="flex flex-col gap-4 sm:gap-3">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                                            <label className="flex items-center gap-1 w-44 text-sm font-medium shrink-0">Source<span className="e-icons e-circle-info text-gray-500 dark:text-gray-300"></span></label>
                                            <div className="e-input-group">
                                                <span className="flex items-center border-r border-inherit px-1">
                                                    <CheckBoxComponent label="Event" labelPosition="Before" checked={true}></CheckBoxComponent>
                                                </span>
                                                <input className="e-input" type="text" onFocus={focusIn} onBlur={focusOut} placeholder="Company attributes" />
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
                                            <ButtonComponent cssClass="e-primary e-outline" type="button">Add filter</ButtonComponent>
                                        </div>
                                    </div>
                                    <p className="text-sm font-semibold px-2 py-1.5 bg-gray-100 rounded-md dark:bg-gray-700">Workflow</p>
                                    <div className="flex flex-col gap-4 sm:gap-3">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                                            <label className="flex items-center gap-1 w-44 text-sm font-medium shrink-0">Status<span className="e-icons e-circle-info text-gray-500 dark:text-gray-300"></span></label>
                                            <DropDownListComponent className="w-full grow" placeholder="Evaluating" created={() => { onCreated(2, 'e-contrast'); }}></DropDownListComponent>
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
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section>
                        <div id="dialog-container" className="position-relative d-flex align-items-start" style={{ minHeight: containerHeight }}>
                            <ButtonComponent className="mx-auto my-3 e-outline" type="button" onClick={() => dialog.current?.show()}>Track New Feature</ButtonComponent>
                            <DialogComponent id={styles["dialog"]} ref={dialog} key={"modal-8-bs"} className="rounded-3 m-sm-2" target="#dialog-container" isModal={true} showCloseIcon={true} width="515px" open={(e) => { e.preventFocus = true; }} beforeOpen={(e) => { e.maxHeight = "630px"; }}
                                header={() => (
                                    <p className="fw-bold mb-0 text-body">Track New Feature</p>
                                )}
                                footerTemplate={() => (
                                    <div className="d-flex justify-content-end gap-2 gap-sm-1 py-1">
                                        <ButtonComponent cssClass="flex-grow-1 flex-sm-grow-0 ms-0" type="button">Cancel</ButtonComponent>
                                        <ButtonComponent cssClass="e-primary flex-grow-1 flex-sm-grow-0" type="button">Save Feature</ButtonComponent>
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
                                                <span className="e-icons e-circle-info text-secondary"></span>
                                            </label>
                                            <DropDownListComponent className="w-100 flex-grow-1" placeholder="Select the number of views" created={() =>onCreated(0, "e-grid-view")}></DropDownListComponent>
                                        </div>
                                    </div>
                                    <p className="fw-bold px-2 py-1 bg-body-secondary rounded mb-0">Tracking Criteria</p>
                                    <div className="row gap-3 gap-sm-2 gy-sm-1 mt-0">
                                        <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-1">
                                            <label className="d-flex align-items-center gap-1 fw-medium flex-shrink-0" style={{ width: "175px" }}>Source<span className="e-icons e-circle-info text-secondary"></span></label>
                                            <div className="e-input-group">
                                                <span className="d-flex align-items-center border-end px-1">
                                                    <CheckBoxComponent label="Event" labelPosition="Before" checked={true}></CheckBoxComponent>
                                                </span>
                                                <input className="e-input" type="text" placeholder="Company attributes" onFocus={focusIn} onBlur={focusOut} />
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
                                            <ButtonComponent cssClass="e-primary e-outline" type="button">Add filter</ButtonComponent>
                                        </div>
                                    </div>
                                    <p className="fw-bold px-2 py-1 bg-body-secondary rounded mb-0">Workflow</p>
                                    <div className="row gap-3 gap-sm-2 gy-sm-1 mt-0">
                                        <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-1">
                                            <label className="d-flex align-items-center gap-1 fw-medium flex-shrink-0" style={{ width: "175px" }}>Status
                                                <span className="e-icons e-circle-info text-secondary"></span>
                                            </label>
                                            <DropDownListComponent className="w-100 flex-grow-1" placeholder="Evaluating" created={() => onCreated(2, "e-contrast")}></DropDownListComponent>
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
                    </section>
                );
        };
    };

    return getContent();
}