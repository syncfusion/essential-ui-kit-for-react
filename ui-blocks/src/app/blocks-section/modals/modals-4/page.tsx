'use client';

import { useEffect, useState, useRef } from 'react';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { ButtonComponent, CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import styles from './page.module.css';

export default function Modals4() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const dialog = useRef<DialogComponent>(null);
    const listView = useRef<ListViewComponent>(null);

    const data: any[] = [
        { id: 1, name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Active', role: 'Admin' },
        { id: 2, name: 'Mark Johnson', email: 'mark.johnson@example.com', status: 'Active', role: 'Editor' },
        { id: 3, name: 'Emily White', email: 'emily.white@example.com', status: 'Pending', role: 'Viewer' },
        { id: 4, name: 'Tom Harris', email: 'tom.harris@example.com', status: 'Active', role: 'Editor' },
        { id: 5, name: 'Lisa Green', email: 'lisa.green@example.com', status: 'Active', role: 'Viewer' }
    ];

    const checkWindowSize = () => {
        const isMobile = window.innerWidth <= 640;
        dialog.current?.show(isMobile)
    }

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'modals-4' && blockData.theme) {
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
                        <div id="dialog-container" className="relative flex justify-center" style={{ minHeight: "660px" }}>
                            <ButtonComponent className="h-fit my-5" type="button" onClick={() => dialog.current?.show()}>Manage Access</ButtonComponent>
                            <DialogComponent id={styles["dialog"]} ref={dialog} className="rounded-none sm:rounded-lg sm:m-4" target="#dialog-container" beforeOpen={(event) => { event.maxHeight = '660px'; }} open={(e) => { e.preventFocus = true; }} showCloseIcon={true} width="540px" isModal={true}
                                header={() => (
                                    <div>
                                        <h3 className="font-semibold leading-normal mb-0.5">Manage Access</h3>
                                        <p className="text-xs leading-normal text-gray-500 dark:text-gray-400">Update team member permissions.</p>
                                    </div>
                                )}
                                footerTemplate={() =>
                                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 sm:gap-1 py-2">
                                        <p className="text-left text-sm text-gray-500 dark:text-gray-400">Changes will be logged for audit purposes</p>
                                        <div className="flex gap-2 sm:gap-1">
                                            <ButtonComponent cssClass="w-1/2 sm:w-fit !ml-0" type="button">Cancel</ButtonComponent>
                                            <ButtonComponent cssClass="e-primary w-1/2 sm:w-fit" type="button">Apply Changes</ButtonComponent>
                                        </div>
                                    </div>
                                }
                            >
                                <div>
                                    <div>
                                        <div className="e-input-group mb-6">
                                            <input className="e-input" type="text" placeholder="Search by name or email address"/>
                                            <span className="e-input-group-icon e-icons e-search border-0"></span>
                                        </div>
                                        <CheckBoxComponent cssClass="mb-2.5" label="Select all" change={(args) => listView.current && (args.checked ? listView.current.checkAllItems() : listView.current.uncheckAllItems())}></CheckBoxComponent>
                                    </div>
                                    <ListViewComponent id={styles["checkboxs"]} ref={listView} className="!border-0" cssClass="e-list-template" showCheckBox={true} dataSource={data} template={(data: any) => (
                                        <div className="e-list-wrapper grow e-list-multi-line flex flex-wrap gap-x-1 gap-y-4 items-center !px-0 !py-5 sm:!py-3">
                                            <div className="e-list-content !flex items-center justify-between grow gap-4">
                                                <div className="text-sm">
                                                    <div className="e-list-item-header">{data.name}</div>
                                                    <div>{data.email}</div>
                                                </div>
                                                <span className={`e-badge e-badge-pill sm:mr-3 ${data.status === "Active" ? "e-badge-success" : "e-badge-warning"}`}>{data.status}</span>
                                            </div>
                                            <DropDownButtonComponent className="mr-1 e-outline" type="button" content={data.role} beforeOpen={(e) => (e.cancel = true)} style={{ width: "100px" }}></DropDownButtonComponent>
                                        </div>
                                    )}
                                    ></ListViewComponent>
                                </div>
                            </DialogComponent>
                        </div>
                    </section>
                ); 
            case 'bootstrap5':
                return (
                    <section>
                        <div id="dialog-container" className="position-relative d-flex align-items-start" style={{ minHeight: "660px" }}>
                            <ButtonComponent className="mx-auto my-3 e-outline" type="button" onClick={() => dialog.current?.show()}>Manage Access</ButtonComponent>
                            <DialogComponent id={styles["dialog"]} ref={dialog} className="rounded-3 m-sm-2" target="#dialog-container" beforeOpen={(event) => { event.maxHeight = '660px'; }} open={(e) => { e.preventFocus = true; }} showCloseIcon={true} width="540px" isModal={true}
                                header={() => (
                                    <div>
                                        <h3 className="fw-bold mb-0 text-body">Manage Access</h3>
                                        <p className="small fw-normal text-body text-opacity-50 mb-0">Update team member permissions.</p>
                                    </div>
                                )}
                                footerTemplate={() =>
                                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 py-1">
                                        <p className="text-body text-opacity-50 text-start mb-0">Changes will be logged for audit purposes</p>
                                        <div className="d-flex justify-content-end gap-2 gap-sm-1">
                                            <ButtonComponent cssClass="col col-sm-auto ms-0" type="button">Cancel</ButtonComponent>
                                            <ButtonComponent cssClass="e-primary col col-sm-auto" type="button">Apply Changes</ButtonComponent>
                                        </div>
                                    </div>
                                }
                            >
                                <div>
                                    <div>
                                        <div className="e-input-group mb-4">
                                            <input className="e-input" type="text" placeholder="Search by name or email address" />
                                            <span className="e-input-group-icon e-icons e-search border-0"></span>
                                        </div>
                                        <CheckBoxComponent cssClass="mb-3" label="Select all" change={(args) => listView.current && (args.checked ? listView.current.checkAllItems() : listView.current.uncheckAllItems())}></CheckBoxComponent>
                                    </div>
                                    <ListViewComponent id={styles["checkboxs"]} ref={listView} className="border-0" cssClass="e-list-template" showCheckBox={true} dataSource={data} template={(data: any) => (
                                        <div className="e-list-wrapper e-list-multi-line d-flex flex-wrap flex-grow-1 row-gap-3 align-items-center px-0 py-3 py-sm-2 mb-2 mb-sm-1">
                                            <div className="e-list-content d-flex align-items-center justify-content-between flex-grow-1 gap-2">
                                                <div>
                                                    <div className="e-list-item-header text-body fw-medium">{data.name}</div>
                                                    <div className="text-body text-opacity-50">{data.email}</div>
                                                </div>
                                                <span className={`e-badge e-badge-pill me-2 me-sm-3 ${data.status === "Active" ? "e-badge-success" : "e-badge-warning"}`}>{data.status}</span>
                                            </div>
                                            <DropDownButtonComponent className="me-1 e-outline" content={data.role} type="button" beforeOpen={(event) => (event.cancel = true)} style={{ width: "100px" }} />
                                        </div>
                                    )}
                                    ></ListViewComponent>
                                </div>
                            </DialogComponent>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}