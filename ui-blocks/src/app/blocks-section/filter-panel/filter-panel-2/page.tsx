'use client';

import { useEffect, useRef, useState } from "react";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { QueryBuilderComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-querybuilder";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import styles from "./page.module.css";

export default function FilterPanel2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [recordLength, setRecordLength] = useState(0);
    const [recordData, setRecordData] = useState(0);
    const dialogRef = useRef<DialogComponent | null>(null);
    const queryBuilder1Ref = useRef<QueryBuilderComponent | null>(null);
    const queryBuilder2Ref = useRef<QueryBuilderComponent | null>(null);
    const filterOperators: any[] = [
        { value: 'in', key: 'In' },
        { value: 'notin', key: 'Not In' },
        { value: 'is', key: 'Is' },
        { value: 'isnot', key: 'Is not' }
    ];

    const ruleUpdate = (): void => {
        setRecordLength(queryBuilder1Ref.current?.getRules()?.rules?.length ?? 1);
    };

    const ruleAdd = (): void => {
        setRecordData(queryBuilder2Ref.current?.getRules()?.rules?.length ?? 1);
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'filter-panel-2' && blockData.theme) {
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
        window.addEventListener('message', handleMessageEvent);
        
        return () => {
            window.removeEventListener('message', handleMessageEvent);
        }
        /* SB Code - End */
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-800">
                        <div id={styles['dialog']} className="relative dialog-target" style={{ minHeight: "800px" }}>
                            <DialogComponent ref={dialogRef} className="absolute border-b-0 border-t-0" target=".dialog-target" position={{ X: "right" }} showCloseIcon={true} isModal={true} width="810px" minHeight="800px" created={() => dialogRef.current?.show()} open={(e) => (e.preventFocus = true)}
                                header={() => (
                                    <div>
                                        <p className="mb-2 font-semibold text-base">Advanced Filters</p>
                                        <a href="#" className="text-primary-600 dark:text-primary-400 text-sm font-semibold">Switch to basic filter</a>
                                    </div>
                                )}
                                footerTemplate={() => (
                                    <>
                                        <hr className="border-gray-200 dark:border-gray-700" />
                                        <div className="flex flex-col-reverse sm:flex-row justify-between items-center w-full sm:pt-4 sm:pb-2">
                                            <a href="#" className="text-primary-600 dark:text-primary-400 pt-4 mb-3 sm:mb-0 sm:pt-0 text-sm hover:underline">Learn more</a>
                                            <div className="flex flex-col sm:flex-row w-full sm:w-auto !ml-0 sm:ml-auto gap-3 mt-4 sm:mt-0">
                                                <ButtonComponent cssClass="e-outline e-primary border-0 w-full !ml-0 sm:!ml-auto sm:w-auto" content="Save filter" type="button"></ButtonComponent>
                                                <ButtonComponent cssClass="e-primary w-full sm:w-auto !ml-0 sm:!ml-auto mt-1 sm:mt-0" content="Apply" type="button"></ButtonComponent>
                                            </div>
                                        </div>
                                    </>
                                )}
                            >
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 pb-4">
                                        Apply this rule to the tickets that meet <span className="text-gray-900 dark:text-white font-medium">All</span> of these conditions
                                    </p>
                                    <div className={`border border-gray-200 dark:border-gray-600 rounded-lg ${recordLength !== 0 ? "pt-1" : ""}`}>
                                        <QueryBuilderComponent ref={queryBuilder1Ref} change={ruleUpdate} fieldModel={{ width: '200px' }} operatorModel={{ width: '200px' }}>
                                            <ColumnsDirective>
                                                <ColumnDirective field="Tickets" label="Tickets" type="string"></ColumnDirective>
                                                <ColumnDirective field="Agent Reply Count" label="Agent Reply Count" type="string" operators={filterOperators}></ColumnDirective>
                                                <ColumnDirective field="CCs" label="CCs" type="string" operators={filterOperators}></ColumnDirective>
                                                <ColumnDirective field="Watchers" label="Watchers" type="string" operators={filterOperators}></ColumnDirective>
                                                <ColumnDirective field="Status Category" label="Status Category" type="string" operators={filterOperators}></ColumnDirective>
                                            </ColumnsDirective>
                                        </QueryBuilderComponent>
                                        <div className={`py-3 px-5 border-gray-200 dark:border-gray-600 rounded-b-lg ${recordLength !== 0 ? "border-t" : ""}`}>
                                            <ButtonComponent cssClass="e-primary e-flat" iconCss="e-icons e-plus" content="Add New" type="button" onClick={() => queryBuilder1Ref.current?.addRules([{}], "group0")}></ButtonComponent>
                                        </div>
                                    </div>
                                    <div className="flex items-center my-4">
                                        <div className="border-t border-gray-200 dark:border-gray-600 w-full"></div>
                                        <p className="text-gray-700 dark:text-white border border-gray-200 dark:border-gray-600 rounded px-3 py-1">AND</p>
                                        <div className="border-t border-gray-200 dark:border-gray-600 w-full"></div>
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 pb-4">
                                        Apply this rule to the tickets that meet <span className="text-gray-900 dark:text-white font-medium">Any</span> of these conditions
                                    </p>
                                    <div className={`border border-gray-200 dark:border-gray-600 rounded-lg ${recordData !== 0 ? "pt-1" : ""}`}>
                                        <QueryBuilderComponent ref={queryBuilder2Ref} change={ruleAdd} fieldModel={{ width: '200px' }} operatorModel={{ width: '200px' }}>
                                            <ColumnsDirective>
                                                <ColumnDirective field="Ticket" label="Tickets" type="string"></ColumnDirective>
                                                <ColumnDirective field="Agent" label="Agent" type="string"></ColumnDirective>
                                                <ColumnDirective field="Group" label="Group" type="string"></ColumnDirective>
                                                <ColumnDirective field="Status" label="Status" type="string"></ColumnDirective>
                                                <ColumnDirective field="Priority" label="Priority" type="string"></ColumnDirective>
                                            </ColumnsDirective>
                                        </QueryBuilderComponent>
                                        <div className={`py-3 px-5 border-gray-200 dark:border-gray-600 rounded-b-lg ${recordData !== 0 ? "border-t" : ""}`}>
                                            <ButtonComponent cssClass="e-primary e-flat" iconCss="e-icons e-plus" content="Add New" type="button" onClick={() => queryBuilder2Ref.current?.addRules([{}], "group0")}></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                            </DialogComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 absolute top-0 right-0">
                            <ButtonComponent cssClass="e-round e-large e-icons e-chevron-left" type="button" onClick={() => dialogRef.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div id={styles['dialog']} className="position-relative dialog-target" style={{ minHeight: "800px" }}>
                            <DialogComponent ref={dialogRef} className="border-0" target=".dialog-target" position={{ X: "right" }} showCloseIcon={true} isModal={true} width="810px" minHeight="800px" created={() => dialogRef.current?.show()} open={(event) => event.preventFocus = true}
                                header={() => (
                                    <div className="px-1">
                                        <p className="mb-2 fw-bold fs-6 text-body lh-sm">Advanced Filters</p>
                                        <a href="#" className="text-primary fw-bold small text-decoration-none lh-sm">Switch to basic filter</a>
                                    </div>
                                )}
                                footerTemplate={() => (
                                    <div className="d-flex justify-content-between align-items-sm-center flex-column-reverse flex-sm-row py-1 px-1">
                                        <a href="#" className="text-primary fs-6 text-center pt-3 pt-sm-0 text-decoration-none">Learn more</a>
                                        <div className="d-flex flex-column flex-sm-row gap-2">
                                            <ButtonComponent cssClass="e-outline e-primary border-0 ms-0 flex-grow-1 flex-sm-grow-0" content="Save filter" type="button"></ButtonComponent>
                                            <ButtonComponent cssClass="e-primary ms-0 flex-grow-1 flex-sm-grow-0 mt-2 mt-sm-0" content="Apply" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                )}
                            >
                                <div className="dialog-content px-1">
                                    <p className="text-body-secondary fs-6">Apply this rule to the tickets that meet
                                        <span className="fw-medium"> All</span> of these conditions
                                    </p>
                                    <div className={`border rounded-3 ${recordLength !== 0 ? "pt-1" : ""}`}>
                                        <QueryBuilderComponent ref={queryBuilder1Ref} change={ruleUpdate} fieldModel={{ width: '200px' }} operatorModel={{ width: '200px' }}>
                                            <ColumnsDirective>
                                                <ColumnDirective field="Tickets" label="Tickets" type="string"></ColumnDirective>
                                                <ColumnDirective field="Agent Reply Count" label="Agent Reply Count" type="string" operators={filterOperators}></ColumnDirective>
                                                <ColumnDirective field="CCs" label="CCs" type="string" operators={filterOperators}></ColumnDirective>
                                                <ColumnDirective field="Watchers" label="Watchers" type="string" operators={filterOperators}></ColumnDirective>
                                                <ColumnDirective field="Status Category" label="Status Category" type="string" operators={filterOperators}></ColumnDirective>
                                            </ColumnsDirective>
                                        </QueryBuilderComponent>
                                        <div className={`p-3 rounded-bottom-3 ${recordLength !== 0 ? "border-top" : ""}`}>
                                            <ButtonComponent cssClass="e-primary e-flat" iconCss="e-icons e-plus" type="button" content="Add New" onClick={() => queryBuilder1Ref.current?.addRules([{}], "group0")}></ButtonComponent>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center my-3">
                                        <div className="border-top w-100"></div>
                                        <p className="text-secondary border border-secondary rounded-1 px-2 py-1 mb-0">AND</p>
                                        <div className="border-top w-100"></div>
                                    </div>
                                    <p className="fs-6 text-body text-opacity-50">
                                        Apply this rule to the tickets that meet
                                        <span className="fw-medium text-body-secondary"> Any </span> of these conditions
                                    </p>
                                    <div className={`border rounded-3 ${recordData !== 0 ? "pt-1" : ""}`}>
                                        <QueryBuilderComponent ref={queryBuilder2Ref} change={ruleAdd} fieldModel={{ width: '200px' }} operatorModel={{ width: '200px' }}>
                                            <ColumnsDirective>
                                                <ColumnDirective field="Ticket" label="Tickets" type="string"></ColumnDirective>
                                                <ColumnDirective field="Agent" label="Agent" type="string"></ColumnDirective>
                                                <ColumnDirective field="Group" label="Group" type="string"></ColumnDirective>
                                                <ColumnDirective field="Status" label="Status" type="string"></ColumnDirective>
                                                <ColumnDirective field="Priority" label="Priority" type="string"></ColumnDirective>
                                            </ColumnsDirective>
                                        </QueryBuilderComponent>
                                        <div className={`p-3 rounded-bottom-3 ${recordData !== 0 ? "border-top" : ""}`}>
                                            <ButtonComponent cssClass="e-primary e-flat" iconCss="e-icons e-plus" content="Add New" type="button" onClick={() => queryBuilder2Ref.current?.addRules([{}], "group0")}></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                            </DialogComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 position-absolute top-0 end-0">
                            <ButtonComponent cssClass="e-round e-large e-icons e-chevron-left" type="button" onClick={() => dialogRef.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        };
    };

    return getContent();
}