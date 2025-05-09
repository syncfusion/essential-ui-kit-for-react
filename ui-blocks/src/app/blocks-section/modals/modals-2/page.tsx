"use client";

import { useEffect, useState, useRef } from "react";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default function Modals2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState("tailwind");
    /* SB Code - End */
    const dialog = useRef<DialogComponent>(null);

    const checkWindowSize = () => {
        const isMobile = window.innerWidth <= 640;
        dialog.current?.show(isMobile)
    }

    /* SB Code - Start */
    const refreshDialog = (timeout: number) => {
        setTimeout(() => {
            dialog.current?.show(window.innerWidth <= 640);
        }, timeout);
    };

    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === "modals-2" && blockData.theme) {
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
                        <div id="dialog-container" className="relative flex justify-center" style={{ minHeight: "580px" }}>
                            <ButtonComponent className="h-fit my-5" type="button" onClick={() => dialog.current?.show()}>Personal Information</ButtonComponent>
                            <DialogComponent ref={dialog} className="rounded-none sm:rounded-lg sm:m-4" target="#dialog-container" width="400px" isModal={true} showCloseIcon={true} open={(e) => { e.preventFocus = true; }}
                                header={() => <div className="font-semibold leading-normal">Personal Information</div>}
                                footerTemplate={() => (
                                    <div className="flex flex-row justify-end gap-2 sm:gap-1 mt-1 mb-2">
                                        <ButtonComponent className="w-1/2 sm:w-fit !ml-0" type="button">Cancel</ButtonComponent>
                                        <ButtonComponent className="e-primary w-1/2 sm:w-fit" type="submit">Submit</ButtonComponent>
                                    </div>
                                )}
                            >
                                <form action="#" className="space-y-4 text-xs font-medium leading-normal text-gray-700 dark:text-gray-200 sm:space-y-3" onSubmit={(e) => e.preventDefault()}>
                                    <div className="flex flex-col gap-1">
                                        <label>Full Name <span className="text-red-600 font-normal dark:text-red-400">*</span></label>
                                        <TextBoxComponent type="text" placeholder="Enter your full name"></TextBoxComponent>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label>Email Address <span className="text-red-600 font-normal dark:text-red-400">*</span></label>
                                        <TextBoxComponent type="email" placeholder="Enter a valid email address"></TextBoxComponent>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label>Phone Number (Optional)</label>
                                        <TextBoxComponent type="tel" placeholder="Enter your phone number"></TextBoxComponent>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label>Job Title</label>
                                        <DropDownListComponent placeholder="Select your job title"></DropDownListComponent>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label>Department (Optional)</label>
                                        <TextBoxComponent type="text" placeholder="Enter the department"></TextBoxComponent>
                                    </div>
                                </form>
                            </DialogComponent>
                        </div>
                    </section>
                );
            case "bootstrap5":
                return (
                    <section>
                        <div id="dialog-container" className="position-relative d-flex align-items-start" style={{ minHeight: "580px" }}>
                            <ButtonComponent className="mx-auto my-3 e-outline" type="button" onClick={() => dialog.current?.show()}>Personal Information</ButtonComponent>
                            <DialogComponent ref={dialog} className="rounded-3 m-sm-2" target="#dialog-container" width="400px" isModal={true} showCloseIcon={true} open={(e) => { e.preventFocus = true; }}
                                header={() => <div className="fw-bold mb-0 text-body">Personal Information</div>}
                                footerTemplate={() => (
                                    <div className="d-flex justify-content-end gap-2 gap-sm-1 py-1">
                                        <ButtonComponent className="col col-sm-auto ms-0" type="button">Cancel</ButtonComponent>
                                        <ButtonComponent className="e-primary col col-sm-auto" type="submit">Submit</ButtonComponent>
                                    </div>
                                )}
                            >
                                <form action="#" className="row gap-3 gap-sm-2 gy-sm-1 text-body-secondary fw-normal small" onSubmit={(e) => e.preventDefault()}>
                                    <div className="d-flex flex-column gap-1 mt-0">
                                        <label>Full Name <span className="text-danger">*</span></label>
                                        <TextBoxComponent type="text" placeholder="Enter your full name"></TextBoxComponent>
                                    </div>
                                    <div className="d-flex flex-column gap-1">
                                        <label>Email Address <span className="text-danger">*</span></label>
                                        <TextBoxComponent type="email" placeholder="Enter a valid email address"></TextBoxComponent>
                                    </div>
                                    <div className="d-flex flex-column gap-1">
                                        <label>Phone Number (Optional)</label>
                                        <TextBoxComponent type="tel" placeholder="Enter your phone number"></TextBoxComponent>
                                    </div>
                                    <div className="d-flex flex-column gap-1">
                                        <label>Job Title</label>
                                        <DropDownListComponent placeholder="Select your job title"></DropDownListComponent>
                                    </div>
                                    <div className="d-flex flex-column gap-1">
                                        <label>Department (Optional)</label>
                                        <TextBoxComponent type="text" placeholder="Enter the department"></TextBoxComponent>
                                    </div>
                                </form>
                            </DialogComponent>
                        </div>
                    </section>
                )
        }
    };

    return getContent();
}
