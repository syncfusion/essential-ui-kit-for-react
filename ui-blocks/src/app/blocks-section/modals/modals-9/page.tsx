"use client";

import { useEffect, useState, useRef } from "react";
import { DialogComponent, OpenEventArgs } from "@syncfusion/ej2-react-popups";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { RichTextEditorComponent, Inject, HtmlEditor, Toolbar, Link, Image, Table, Count } from "@syncfusion/ej2-react-richtexteditor";
import { TextBoxComponent, UploaderComponent } from "@syncfusion/ej2-react-inputs";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import styles from "./page.module.css";

export default function Modals9() {
    /* SB Code - Start */
    const [theme, setTheme] = useState("tailwind");
    /* SB Code - End */
    const dialog = useRef<DialogComponent | null>(null);
    const upload = useRef<UploaderComponent | null>(null);
    const rte = useRef<RichTextEditorComponent>(null);

    const checkWindowSize = () => {
        const isMobile = window.innerWidth <= 640;
        if (dialog) {
            dialog.current?.show(isMobile);
        }
    };

    const onCreated = () => {
          const hiddenSelectElements = document.getElementsByClassName("e-ddl-hidden");
          if (hiddenSelectElements.length > 1) {
              const hiddenSelectElement = hiddenSelectElements[1];
              const iconElement = document.createElement("span");
              iconElement.style.cssText = "display: flex; align-items: center; margin-left: 10px;";
              iconElement.className = "e-icons e-medium e-user text-gray-500 dark:text-gray-300";
              if (hiddenSelectElement.parentNode) {
                  hiddenSelectElement.parentNode.insertBefore(iconElement, hiddenSelectElement);
              }
          }
    };

    const onDialogOpen = (args: OpenEventArgs) => {
        args.preventFocus = true;
        setTimeout(() => {
            rte.current?.refresh();
        }, 150);
    };

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
                if (blockData.name === "modals-9" && blockData.theme) {
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
                        <div id="dialog-container" className="relative flex justify-center" style={{ minHeight: "866px" }}>
                            <ButtonComponent className="h-fit my-5" type="button" onClick={() => dialog.current?.show()}>Create Ticket</ButtonComponent>
                            <DialogComponent id={styles["dialogs"]} key={"modal-2-tw"} className="rounded-none sm:rounded-lg sm:m-4" width="492px" ref={dialog} isModal={true} showCloseIcon={true} beforeOpen={(event) => { event.maxHeight = '100%'; }} open={onDialogOpen} 
                                header={() => <p className="font-semibold leading-normal">Create Ticket</p>}
                                footerTemplate={() => (
                                    <div className="flex flex-row justify-end gap-2 sm:gap-1 mt-1 mb-2">
                                        <ButtonComponent cssClass="w-1/2 sm:w-fit !ml-0" type="button">Cancel</ButtonComponent>
                                        <ButtonComponent cssClass="e-primary w-1/2 sm:w-fit" type="button">Create Ticket</ButtonComponent>
                                    </div>
                                )}
                            >
                                <form action="#" className="flex flex-col gap-4 sm:gap-3 text-xs font-medium leading-normal text-gray-700 dark:text-gray-200" onSubmit={(e) => e.preventDefault()}>
                                    <div className="flex flex-col gap-1">
                                        <label>Reported By <span className="text-red-600 font-normal dark:text-red-400">*</span></label>
                                        <DropDownListComponent placeholder="Select a reporter name"></DropDownListComponent>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label>Assign to</label>
                                        <DropDownListComponent created={onCreated} placeholder="Select a team or individual responsible for this ticket"></DropDownListComponent>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label>Subject <span className="text-red-600 font-normal dark:text-red-400">*</span></label>
                                        <TextBoxComponent type="text" placeholder="Enter a title here"></TextBoxComponent>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label>Description <span className="text-red-600 font-normal dark:text-red-400">*</span></label>
                                        <RichTextEditorComponent id={styles["rte"]} ref={rte} toolbarSettings={{items: ['Bold', 'Italic', 'Underline', '|', 'FontName', '|', 'Alignments', 'OrderedList', 'UnorderedList']}} showCharCount={true} maxLength={500} height="160">
                                            <p></p>
                                            <Inject services={[Toolbar, HtmlEditor, Link, Image, Table,Count]} />
                                        </RichTextEditorComponent>
                                    </div>
                                    <div id={styles["upload-template"]} className="flex flex-col border border-dashed border-gray-300 dark:border-gray-500 rounded-md bg-gray-50 dark:bg-gray-700 drop-area">
                                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mx-auto py-4 my-0.5">
                                            <span className="hidden sm:inline">Drag and drop (PDF, JPG, PNG) files here, or </span>
                                            <a href="#" className="font-medium underline text-primary-600 dark:text-primary-400" onClick={() => upload.current?.element.click()}>Browse <span className="sm:hidden">Files</span></a>
                                            <span className="sm:hidden"> (PDF, JPG, PNG)</span>
                                        </p>
                                        <UploaderComponent ref={upload} dropArea=".drop-area"></UploaderComponent>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label>Priority <span className="text-red-600 font-normal dark:text-red-400">*</span></label>
                                        <DropDownListComponent dataSource={[{ Id: "value1", Priority: "Normal" }]} value="value1" fields={{ text: "Priority", value: "Id" }}></DropDownListComponent>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label>Due Date <span className="text-red-600 font-normal dark:text-red-400">*</span></label>
                                        <DatePickerComponent placeholder="MM/DD/YYYY"></DatePickerComponent>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label>Tags</label>
                                        <DropDownListComponent placeholder="Select the relevant tags"></DropDownListComponent>
                                    </div>
                                </form>
                            </DialogComponent>
                        </div>
                    </section>
                );
            case "bootstrap5":
                return (
                    <section>
                        <div id="dialog-container" className="position-relative d-flex align-items-start" style={{ minHeight: "866px" }}>
                            <ButtonComponent className="mx-auto my-3 e-outline" onClick={() => dialog.current?.show()} type="button">Create Ticket</ButtonComponent>
                            <DialogComponent id={styles["dialogs"]} key={"modal-2-bs"} className="rounded-3 m-sm-2" ref={dialog} target="#dialog-container" isModal={true} showCloseIcon={true} width="492px" open={onDialogOpen} beforeOpen={(event) => (event.maxHeight = "100%")}
                                header={() =>
                                    <div className="fw-bold mb-0 text-body">Create Ticket</div>
                                }
                                footerTemplate={() => (
                                    <div className="d-flex justify-content-end gap-2 gap-sm-1 py-1">
                                        <ButtonComponent cssClass="col col-sm-auto ms-0" type="button">Cancel</ButtonComponent>
                                        <ButtonComponent cssClass="e-primary col col-sm-auto" type="button">Create Ticket</ButtonComponent>
                                    </div>
                                )}
                            >
                                <form action="#" className="row gap-3 gap-sm-2 gy-sm-1 text-body-secondary" onSubmit={(e) => e.preventDefault()}>
                                    <div className="d-flex flex-column gap-1 small mt-0">
                                        <label>Reported By <span className="text-danger">*</span></label>
                                        <DropDownListComponent placeholder="Select a reporter name"></DropDownListComponent>
                                    </div>
                                    <div className="d-flex flex-column gap-1 small">
                                        <label>Assign to</label>
                                        <DropDownListComponent created={onCreated} placeholder="Select a team or individual responsible for this ticket"></DropDownListComponent>
                                    </div>
                                    <div className="d-flex flex-column gap-1 small">
                                        <label>Subject <span className="text-danger">*</span></label>
                                        <TextBoxComponent type="text" placeholder="Enter a title here"></TextBoxComponent>
                                    </div>
                                    <div className="d-flex flex-column gap-1 small">
                                        <label>Description <span className="text-danger">*</span></label>
                                        <RichTextEditorComponent id={styles["rte"]} ref={rte} toolbarSettings={{ items: ['Bold', 'Italic', 'Underline', '|', 'FontName', '|', 'Alignments', 'OrderedList', 'UnorderedList'] }} showCharCount={true} maxLength={500} height="170">
                                            <p></p>
                                            <Inject services={[Toolbar, HtmlEditor, Link, Image, Table, Count]} />
                                        </RichTextEditorComponent>
                                    </div>
                                    <div>
                                        <div id={styles["upload-template"]} className="d-flex flex-column border-1 rounded bg-body-tertiary border-opacity-50 border-secondary drop-area" style={{ borderStyle: "dashed" }}>
                                            <p className="fw-medium text-body text-opacity-50 mx-auto py-3 mb-0">
                                                <span className="d-none d-sm-inline">Drag and drop (PDF, JPG, PNG) files here, or </span>
                                                <a href="#" className="text-primary" onClick={() => upload.current?.element.click()}>Browse <span className="d-sm-none">Files</span></a>
                                                <span className="d-sm-none"> (PDF, JPG, PNG)</span>
                                            </p>
                                            <UploaderComponent ref={upload} dropArea=".drop-area"></UploaderComponent>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column gap-1 small">
                                        <label>Priority <span className="text-danger">*</span></label>
                                        <DropDownListComponent dataSource={[{ Id: "value1", Priority: "Normal" }]} value="value1" fields={{ text: "Priority", value: "Id" }}></DropDownListComponent>
                                    </div>
                                    <div className="d-flex flex-column gap-1 small">
                                        <label>Due Date <span className="text-danger">*</span></label>
                                        <DatePickerComponent placeholder="MM/DD/YYYY"></DatePickerComponent>
                                    </div>
                                    <div className="d-flex flex-column gap-1 small">
                                        <label>Tags</label>
                                        <DropDownListComponent placeholder="Select the relevant tags"></DropDownListComponent>
                                    </div>
                                </form>
                            </DialogComponent>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
