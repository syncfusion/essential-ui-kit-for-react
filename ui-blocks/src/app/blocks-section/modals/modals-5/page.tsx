"use client";

import { useEffect, useState, useRef } from "react";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { TextBoxComponent, TextAreaComponent } from "@syncfusion/ej2-react-inputs";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { ButtonComponent, CheckBoxComponent } from "@syncfusion/ej2-react-buttons";
import styles from "./page.module.css";

export default function Modals5() {
    /* SB Code - Start */
    const [theme, setTheme] = useState("tailwind");
    /* SB Code - End */
    const dialog = useRef<DialogComponent | null>(null);
    const textbox2 = useRef<TextBoxComponent | null>(null);
    const textbox1 = useRef<TextBoxComponent | null>(null);

    const checkWindowSize = (): void => {
        const isMobile = window.innerWidth <= 640;
        if (dialog) {
            dialog.current?.show(isMobile);
        }
    };

    const addIcon = (textbox: React.RefObject<TextBoxComponent | null> , icons: string): void => {
        if (textbox.current) {
            textbox.current?.addIcon("prepend", `e-icons ${icons}`);
        }
    };
    
    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === "modals-5" && blockData.theme) {
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
            case "tailwind":
                return (
                    <section>
                        <div id="dialog-container" className="relative" style={{ minHeight: "700px" }}>
                            <DialogComponent ref={dialog} key={"modal-5-tw"} id={styles["dialog"]} className="rounded-none sm:rounded-lg sm:m-4 overflow-hidden" target="#dialog-container" beforeOpen={(event) => { event.maxHeight = '100%'; }} open={(e) => { e.preventFocus = true; }} showCloseIcon={true} width="548px" isModal={true}
                                header={() => (
                                    <div className="flex gap-3">
                                        <span className="e-avatar shrink-0 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                            <span className="e-icons e-flags text-xl text-gray-500 dark:text-gray-300"></span>
                                        </span>
                                        <div>
                                            <p className="font-semibold leading-normal mb-0.5">Add Experience</p>
                                            <p className="text-xs leading-normal text-gray-500 dark:text-gray-400 text-wrap">Share where you've worked on your profile.</p>
                                        </div>
                                    </div>
                                )}
                                footerTemplate={() => (
                                    <div className="flex justify-end gap-2 sm:gap-1 py-2">
                                        <ButtonComponent cssClass="w-1/2 sm:w-fit !ml-0" content="Discard" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-primary w-1/2 sm:w-fit" content="Save" type="button"></ButtonComponent>
                                    </div>
                                )}
                            >
                                <div>
                                    <form action="#" className="grid grid-cols-1 gap-4 sm:gap-3 text-xs font-medium leading-normal text-gray-700 dark:text-gray-200" onSubmit={(event) => event.preventDefault()}>
                                        <div className="flex flex-col gap-1">
                                            <label>Designation <span className="text-red-600 dark:text-red-400 font-normal">*</span></label>
                                            <TextBoxComponent type="text" placeholder="Enter the job title"></TextBoxComponent>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="flex flex-col gap-1 order-1 sm:order-none">
                                                <label>Company <span className="text-red-600 dark:text-red-400 font-normal">*</span></label>
                                                <TextBoxComponent ref={textbox1} type="text" placeholder="Enter the company name" created={()=>{addIcon(textbox1, "e-search !pr-0")}}></TextBoxComponent>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label>Website</label>
                                                <TextBoxComponent type="url" placeholder="https://www.example.com"></TextBoxComponent>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="flex flex-col gap-1 order-1 sm:order-none">
                                                <label>Location <span className="text-red-600 dark:text-red-400 font-normal">*</span></label>
                                                <TextBoxComponent ref={textbox2} className="ml-0" type="text" placeholder="Enter the city or state" created={()=>{addIcon(textbox2, "e-location !pr-0")}}></TextBoxComponent>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label>Employment type <span className="text-red-600 dark:text-red-400 font-normal">*</span></label>
                                                <DropDownListComponent placeholder="Select the employment type"></DropDownListComponent>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label>Description</label>
                                            <TextAreaComponent rows={5} resizeMode="None" placeholder="Provide a brief overview of your role"></TextAreaComponent>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="flex flex-col gap-1">
                                                <label>Start Date</label>
                                                <DatePickerComponent placeholder="MM/DD/YYYY"></DatePickerComponent>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label>End Date</label>
                                                <DatePickerComponent placeholder="MM/DD/YYYY"></DatePickerComponent>
                                            </div>
                                        </div>
                                        <CheckBoxComponent label="I currently work here"></CheckBoxComponent>
                                    </form>
                                </div>
                            </DialogComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="top-0 left-0 absolute w-full flex">
                            <ButtonComponent className="my-5 mx-auto" content="Add Experience" type="button" onClick={() => dialog.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case "bootstrap5":
                return (
                    <section>
                        <div id="dialog-container" className="position-relative" style={{ minHeight: "700px" }}>
                            <DialogComponent ref={dialog} key={"modal-5-bs"} className="rounded-3 m-sm-2"  target="#dialog-container" isModal={true} showCloseIcon={true} width="548px" open={(event) => (event.preventFocus = true)} beforeOpen={(event) => (event.maxHeight = "100%")}
                                header={() =>
                                    <div className="d-flex gap-2">
                                        <span className="e-avatar flex-shrink-0 rounded-3 bg-body-secondary">
                                            <span className="e-icons e-flags fs-5 text-body-secondary"></span>
                                        </span>
                                        <div className="ms-1">
                                            <p className="fw-bold mb-0 text-body">Add Experience</p>
                                            <p className="small fw-normal text-wrap text-body text-opacity-50 mb-0">Share where you've worked on your profile.</p>
                                        </div>
                                    </div>
                                }
                                footerTemplate={() => 
                                   <div className="d-flex justify-content-end gap-2 gap-sm-1 py-1">
                                        <ButtonComponent cssClass="col col-sm-auto ms-0" content="Discard" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-primary col col-sm-auto" content="Save" type="button"></ButtonComponent>
                                    </div>
                                }
                            >
                                <form action="#" className="d-flex flex-column gap-3 gap-sm-2 text-body-secondary small" onSubmit={(e) => e.preventDefault()}>
                                    <div className="d-flex flex-column gap-1">
                                        <label>Designation <span className="text-danger">*</span></label>
                                        <TextBoxComponent type="text" placeholder="Enter the job title"></TextBoxComponent>
                                    </div>
                                    <div className="row flex-column-reverse flex-sm-row gap-3 gap-sm-0 gx-3 mt-sm-1">
                                        <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                            <label>Company <span className="text-danger">*</span></label>
                                            <TextBoxComponent ref={textbox1} type="text" placeholder="Enter the company name" created={()=>{addIcon(textbox1, "e-search")}}></TextBoxComponent>
                                        </div>
                                        <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                            <label>Website</label>
                                            <TextBoxComponent type="url" placeholder="https://www.example.com"></TextBoxComponent>
                                        </div>
                                    </div>
                                    <div className="row flex-column-reverse flex-sm-row gap-3 gap-sm-0 gx-3 mt-sm-1">
                                        <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                            <label>Location <span className="text-danger">*</span></label>
                                            <TextBoxComponent ref={textbox2} type="text" placeholder="Enter the city or state" created={()=>{addIcon(textbox2, "e-location fs-6")}}></TextBoxComponent>
                                        </div>
                                        <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                            <label>Employment type <span className="text-danger">*</span></label>
                                            <DropDownListComponent placeholder="Select the employment type"></DropDownListComponent>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column gap-1 mt-sm-1">
                                        <label>Description</label>
                                        <TextAreaComponent placeholder="Provide a brief overview of your role" resizeMode="None" rows={5}></TextAreaComponent>
                                    </div>
                                    <div className="row gap-3 gap-sm-0 gx-3 mt-sm-1">
                                        <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                            <label>Start Date</label>
                                            <DatePickerComponent placeholder="MM/DD/YYYY"></DatePickerComponent>
                                        </div>
                                        <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                            <label>End Date</label>
                                            <DatePickerComponent placeholder="MM/DD/YYYY"></DatePickerComponent>
                                        </div>
                                    </div>
                                    <CheckBoxComponent cssClass="mt-sm-2" label="I currently work here"></CheckBoxComponent>
                                </form>
                            </DialogComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="position-absolute top-0 start-0 d-flex w-100">
                            <ButtonComponent className="mx-auto my-3 e-outline" content="Add Experience" type="button" onClick={() => dialog.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        };
    };

    return getContent();
}
