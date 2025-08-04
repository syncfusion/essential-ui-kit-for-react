"use client";

import { useEffect, useState, useRef } from "react";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { TextBoxComponent, UploaderComponent } from "@syncfusion/ej2-react-inputs";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { ButtonComponent, CheckBoxComponent } from "@syncfusion/ej2-react-buttons";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import styles from "./page.module.css";

export default function Modals1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState("tailwind");
    /* SB Code - End */
    const dialog = useRef<DialogComponent>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const checkWindowSize = (): void => {
        const isMobile = window.innerWidth <= 640;
        if (containerRef.current) {
            containerRef.current.style.minHeight = isMobile ? "726px" : "826px";
        }
        if (dialog) {
            dialog.current?.show(isMobile);
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === "modals-1" && blockData.theme) {
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
                        <div ref={containerRef} id="dialog-container" className="relative">
                            <DialogComponent ref={dialog} key={"modal-1-tw"} className="rounded-none sm:rounded-lg sm:m-4" target="#dialog-container" beforeOpen={(event) => { event.maxHeight = '100%'; }} open={(e) => { e.preventFocus = true; }} showCloseIcon={true} width="548px" isModal={true}
                                header={() =>
                                    <div>
                                        <div className="font-semibold leading-normal mb-0.5">Contact Information</div>
                                        <div className="text-xs leading-normal text-gray-500 dark:text-gray-400">Add or update contact information</div>
                                    </div>
                                }
                                footerTemplate={() => (
                                    <div className="flex justify-end gap-2 sm:gap-1 mt-1 mb-2">
                                        <ButtonComponent className="w-1/2 sm:w-fit !ml-0" content="Cancel" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-primary w-1/2 sm:w-fit" content="Save Contact" type="button"></ButtonComponent>
                                    </div>
                                )}
                            >
                                <div>
                                    <div className="mb-5">
                                        <p className="text-sm font-medium mb-3">Profile Photo</p>
                                        <div className="flex items-center gap-4">
                                            <span className="e-avatar e-avatar-circle size-20 shrink-0">
                                                <i className="e-icons e-user text-4xl text-gray-500 dark:text-gray-300"></i>
                                            </span>
                                            <div id={styles["upload-template"]}>
                                                <UploaderComponent multiple={false} allowedExtensions="image/*" maxFileSize={2000000} buttons={{ browse: "Upload Photo" }} selected={(e) => (e.cancel = true)}></UploaderComponent>
                                                <p className="text-xs font-medium text-wrap line-clamp-1 text-gray-500 dark:text-gray-400 mt-2">SVG, JPG, PNG or GIF (Maximum: 2 MB)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <form action="#" className="grid grid-cols-1 gap-4 text-xs font-medium leading-normal text-gray-700 dark:text-gray-200" onSubmit={(e) => e.preventDefault()}>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-y-3">
                                            <div className="flex flex-col gap-1">
                                                <label>Full Name</label>
                                                <TextBoxComponent type="text" placeholder="Enter your full name"></TextBoxComponent>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label>Email Address <span className="text-red-600 dark:text-red-400 font-normal">*</span></label>
                                                <TextBoxComponent type="email" placeholder="Enter a valid email address"></TextBoxComponent>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label>Company Name</label>
                                                <TextBoxComponent type="text" placeholder="Enter the company name"></TextBoxComponent>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label>Job Profile</label>
                                                <DropDownListComponent placeholder="Select a job title"></DropDownListComponent>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label>Location</label>
                                                <DropDownListComponent placeholder="Select a city or state"></DropDownListComponent>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-sm text-gray-900 dark:text-white">Communication Preferences</label>
                                            <div className="flex gap-5 sm:gap-8 mt-2">
                                                <CheckBoxComponent label="Email" checked={true}></CheckBoxComponent>
                                                <CheckBoxComponent label="Phone" checked={true}></CheckBoxComponent>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-y-3">
                                            <div className="flex flex-col gap-1">
                                                <label>Lead Source <span className="text-red-600 dark:text-red-400 font-normal">*</span></label>
                                                <TextBoxComponent type="text" placeholder="Enter the lead source"></TextBoxComponent>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label>Status</label>
                                                <DropDownListComponent placeholder="Active"></DropDownListComponent>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label>Date Added</label>
                                                <DatePickerComponent placeholder="MM/DD/YYYY"></DatePickerComponent >
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label>Tags/Labels</label>
                                                <DropDownListComponent placeholder="Select keywords or tags"></DropDownListComponent>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label>Time Zone</label>
                                                <DropDownListComponent placeholder="Select your time zone"></DropDownListComponent>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </DialogComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="top-0 left-0 absolute w-full flex">
                            <ButtonComponent className="my-5 mx-auto" content="Contact Information" type="button" onClick={() => dialog.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case "bootstrap5":
                return (
                    <section>
                        <div ref={containerRef} id="dialog-container" className="position-relative">
                            <DialogComponent ref={dialog} key={"modal-1-bs"} className="rounded-3 m-sm-2" target="#dialog-container" beforeOpen={(event) => { event.maxHeight = '100%'; }} open={(e) => { e.preventFocus = true; }} showCloseIcon={true} width="548px" isModal={true}
                                header={() =>
                                    <div>
                                        <div className="fw-bold text-body">Contact Information</div>
                                        <div className="small text-body text-opacity-50">Add or update contact information</div>
                                    </div>
                                }
                                footerTemplate={() => (
                                    <div className="d-flex justify-content-end gap-2 gap-sm-1 py-1">
                                        <ButtonComponent className="col col-sm-auto ms-0" content="Cancel" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-primary col col-sm-auto" content="Save Contact" type="button"></ButtonComponent>
                                    </div>
                                )}
                            >
                                <div>
                                    <div className="mb-3 px-1">
                                        <p className="fw-medium mb-2 text-body">Profile Photo</p>
                                        <div className="d-flex align-items-center gap-3 pt-1">
                                            <span className="e-avatar e-avatar-circle" style={{ width: "80px", height: "80px" }}>
                                                <i className="e-icons e-user fs-2"></i>
                                            </span>
                                            <div id={styles["upload-template"]}>
                                                <UploaderComponent multiple={false} allowedExtensions="image/*" maxFileSize={2000000} buttons={{ browse: "Upload Photo" }} selected={(e) => (e.cancel = true)}></UploaderComponent>
                                                <p className="small fw-medium text-wrap text-body text-opacity-50 mt-2 mb-0" style={{ display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical", overflow: "hidden" }}>SVG, JPG, PNG or GIF (Maximum: 2 MB)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <form action="#" className="d-flex flex-column gap-3 text-body-secondary small" onSubmit={(e) => e.preventDefault()}>
                                        <div className="row gx-3 gy-sm-1 row-gap-3 row-gap-sm-2">
                                            <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                <label>Full Name</label>
                                                <TextBoxComponent type="text" placeholder="Enter your full name"></TextBoxComponent>
                                            </div>
                                            <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                <label>Email Address <span className="text-danger">*</span></label>
                                                <TextBoxComponent type="email" placeholder="Enter a valid email address"></TextBoxComponent>
                                            </div>
                                            <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                <label>Company Name</label>
                                                <TextBoxComponent type="text" placeholder="Enter the company name"></TextBoxComponent>
                                            </div>
                                            <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                <label>Job Profile</label>
                                                <DropDownListComponent placeholder="Select a job title"></DropDownListComponent>
                                            </div>
                                            <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                <label>Location</label>
                                                <DropDownListComponent placeholder="Select a city or state"></DropDownListComponent>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="fs-6 fw-medium text-body">Communication Preferences</label>
                                            <div className="d-flex gap-4 mt-2">
                                                <CheckBoxComponent cssClass="me-md-2" label="Email" checked={true}></CheckBoxComponent>
                                                <CheckBoxComponent label="Phone" checked={true}></CheckBoxComponent>
                                            </div>
                                        </div>
                                        <div className="row gx-3 gy-sm-1 row-gap-3 row-gap-sm-2">
                                            <div className="col-12 col-sm-6 d-flex flex-column gap-1 mt-0">
                                                <label>Lead Source <span className="text-danger">*</span></label>
                                                <TextBoxComponent type="text" placeholder="Enter the lead source"></TextBoxComponent>
                                            </div>
                                            <div className="col-12 col-sm-6 d-flex flex-column gap-1 mt-0">
                                                <label>Status</label>
                                                <DropDownListComponent placeholder="Active"></DropDownListComponent>
                                            </div>
                                            <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                <label>Date Added</label>
                                                <DatePickerComponent placeholder="MM/DD/YYYY"></DatePickerComponent>
                                            </div>
                                            <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                <label>Tags/Labels</label>
                                                <DropDownListComponent placeholder="Select keywords or tags"></DropDownListComponent>
                                            </div>
                                            <div className="col-12 col-sm-6 d-flex flex-column gap-1">
                                                <label>Time Zone</label>
                                                <DropDownListComponent placeholder="Select your time zone"></DropDownListComponent>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </DialogComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="position-absolute top-0 start-0 d-flex w-100">
                            <ButtonComponent className="mx-auto my-3 e-outline" content="Contact Information" type="button" onClick={() => dialog.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        }
    };

    return getContent();
}
