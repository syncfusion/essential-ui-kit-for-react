'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent, ChipDirective, ChipListComponent, ChipsDirective, RadioButtonComponent, SwitchComponent } from "@syncfusion/ej2-react-buttons";
import { RatingComponent } from "@syncfusion/ej2-react-inputs";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import styles from "./page.module.css";

export default function FilterPanel7() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState("320px");
    const sidebarRef = useRef<SidebarComponent | null>(null);

    const updateSelectedChips = (event: any): void => {
        const chipElement = event.element;
        if (chipElement.classList.contains('e-active')) {
            chipElement.classList.add('e-primary');
        } else {
            chipElement.classList.remove('e-primary');
        }
    }

    const setSidebarWidth = (): void => {
        setWidth(window.innerWidth < 400 ? '100%' : '320px')
    }

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'filter-panel-7' && blockData.theme) {
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
        /* SB Code - End */
        window.addEventListener('resize', setSidebarWidth);

        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', setSidebarWidth);
        }
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-900">
                        <div id={styles["filter-7"]} style={{ height: "960px", width: width, float: "right" }}>
                            <SidebarComponent ref={sidebarRef} key={"filter-7-tw"} className="flex flex-col bg-white dark:bg-gray-800" position="Right" type="Push" width={width} isOpen={true} closeOnDocumentClick={false} showBackdrop={true} style={{ display: "block" }}>
                                <div>
                                    <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-600">
                                        <div>
                                            <h2 className="text-base font-semibold text-gray-900 dark:text-white">Job Filters</h2>
                                            <p className="text-xs mt-0.5 text-gray-500 dark:text-gray-300">Refine job listings</p>
                                        </div>
                                        <ButtonComponent className="e-flat text-base" iconCss="e-icons e-close" content=" " type="button" onClick={() => sidebarRef.current?.toggle()}></ButtonComponent>
                                    </div>
                                    <div className="p-4 border-b border-gray-200 dark:border-gray-600" >
                                        <ChipListComponent selection="Multiple" click={updateSelectedChips}>
                                            <ChipsDirective>
                                                <ChipDirective cssClass="e-active e-primary !rounded-2xl" text="Remote"></ChipDirective>
                                                <ChipDirective cssClass="e-active e-primary !rounded-2xl" text="Immediate start"></ChipDirective>
                                                <ChipDirective cssClass="e-active e-primary !rounded-2xl" text="Full-Time"></ChipDirective>
                                            </ChipsDirective>
                                        </ChipListComponent>
                                    </div>
                                    <div className="p-4">
                                        <p className="font-medium text-sm text-gray-900 dark:text-white mb-3">Required Skills</p>
                                        <ChipListComponent selection="Multiple" click={updateSelectedChips}>
                                            <ChipsDirective>
                                                <ChipDirective cssClass="e-active e-primary !rounded" text="React"></ChipDirective>
                                                <ChipDirective cssClass="e-active e-primary !rounded" text="TypeScript" ></ChipDirective>
                                                <ChipDirective cssClass="!rounded" text="Node.js" ></ChipDirective>
                                                <ChipDirective cssClass="!rounded" text="Python" ></ChipDirective>
                                                <ChipDirective cssClass="!rounded" text="AWS" ></ChipDirective>
                                            </ChipsDirective>
                                        </ChipListComponent>
                                        <hr className="border-gray-200 dark:border-gray-600 my-4" />
                                        <p className="font-medium text-sm text-gray-900 dark:text-white mb-5">Experience Level</p>
                                        <div className="flex flex-col gap-5 px-3 mb-6">
                                            <RadioButtonComponent label="Entry level" name="skills" value="Entry level" checked={true}></RadioButtonComponent>
                                            <RadioButtonComponent label="Mid level" name="skills" value="Mid level" ></RadioButtonComponent>
                                            <RadioButtonComponent label="Senior" name="skills" value="Senior"></RadioButtonComponent>
                                            <RadioButtonComponent label="Lead" name="skills" value="Lead"></RadioButtonComponent>
                                        </div>
                                        <hr className="border-gray-200 dark:border-gray-600 mb-4" />
                                        <p className="font-medium text-sm text-gray-900 dark:text-white mb-5">Salary Range</p>
                                        <div className="flex flex-col gap-5 px-3 mb-6">
                                            <RadioButtonComponent label="$0 - $50k" name="salary-range" value="$0 - $50k" checked={true}></RadioButtonComponent>
                                            <RadioButtonComponent label="$50k - $100k" name="salary-range" value="$50k - $100k"></RadioButtonComponent>
                                            <RadioButtonComponent label="$100k - $150K" name="salary-range" value="$100k - $150K" ></RadioButtonComponent>
                                            <RadioButtonComponent label="$150k+" name="salary-range" value="$150k+"></RadioButtonComponent>
                                        </div>
                                        <hr className="border-gray-200 dark:border-gray-600 mb-4" />
                                        <p className="font-medium text-sm text-gray-900 dark:text-white mb-5">Location</p>
                                        <div className="flex justify-between">
                                            <p className="font-medium text-sm text-gray-800 dark:text-gray-100">Remote</p>
                                            <SwitchComponent checked={true}></SwitchComponent>
                                        </div>
                                        <hr className="border-gray-200 dark:border-gray-600 my-4" />
                                        <p className="font-medium text-sm text-gray-900 dark:text-white mb-5">Company Rating</p>
                                        <div className="space-x-3 flex items-center mb-2">
                                            <RatingComponent cssClass="e-small" value={4} precision="Exact" readOnly={true}></RatingComponent>
                                            <span className="text-gray-900 dark:text-white text-sm">4+ stars</span>
                                        </div>
                                    </div>
                                    <hr className="border-gray-200 dark:border-gray-600" />
                                    <div className="p-4 flex justify-end gap-3">
                                        <ButtonComponent cssClass="e-outline text-sm" content="Clear" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-primary text-sm" content="Show jobs" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 absolute top-0 right-0">
                            <ButtonComponent cssClass="e-large e-round" iconCss="e-icons e-chevron-left" type="button" onClick={() => sidebarRef.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div id={styles["filter-7"]} style={{ height: "960px", width: width, float: "right" }}>
                            <SidebarComponent ref={sidebarRef} key={"filter-7-bs"} className="d-flex flex-column bg-body" position="Right" type="Push" width={width} isOpen={true} closeOnDocumentClick={false} showBackdrop={true} style={{ display: "block" }}>
                                <div>
                                    <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
                                        <div>
                                            <h2 className="fs-6 fw-bold text-body lh-sm mb-0">Job Filters</h2>
                                            <p className="mt-1 text-body-secondary mb-0">Refine job listings</p>
                                        </div>
                                        <ButtonComponent cssClass="e-flat fs-6" iconCss="e-icons e-close" content=" " type="button" onClick={() => sidebarRef.current?.toggle()}></ButtonComponent>
                                    </div>
                                    <div className="p-3 border-bottom">
                                        <ChipListComponent id="chip-filter" selection="Multiple" click={updateSelectedChips}>
                                            <ChipsDirective>
                                                <ChipDirective cssClass="e-active e-primary rounded-pill" text="Remote"></ChipDirective>
                                                <ChipDirective cssClass="e-active e-primary rounded-pill" text="Immediate start"></ChipDirective>
                                                <ChipDirective cssClass="e-active e-primary rounded-pill" text="Full-Time"></ChipDirective>
                                            </ChipsDirective>
                                        </ChipListComponent>
                                    </div>
                                    <div className="p-3">
                                        <p className="fw-medium text-body fs-6">Required Skills</p>
                                        <ChipListComponent id="chip-filter" selection="Multiple" click={updateSelectedChips}>
                                            <ChipsDirective>
                                                <ChipDirective cssClass="e-active e-primary rounded" text="React"></ChipDirective>
                                                <ChipDirective cssClass="e-active e-primary rounded" text="TypeScript"></ChipDirective>
                                                <ChipDirective cssClass="rounded" text="Node.js"></ChipDirective>
                                                <ChipDirective cssClass="rounded" text="Python"></ChipDirective>
                                                <ChipDirective cssClass="rounded" text="AWS" ></ChipDirective>
                                            </ChipsDirective>
                                        </ChipListComponent>
                                        <hr className="border-top opacity-100" />
                                        <p className="fw-medium text-body fs-6">Experience Level</p>
                                        <div className="d-flex flex-column gap-3 px-3 mb-4">
                                            <RadioButtonComponent label="Entry level" name="skills" value="Entry level" checked={true}></RadioButtonComponent>
                                            <RadioButtonComponent label="Mid level" name="skills" value="Mid level"></RadioButtonComponent>
                                            <RadioButtonComponent label="Senior" name="skills" value="Senior"></RadioButtonComponent>
                                            <RadioButtonComponent label="Lead" name="skills" value="Lead"></RadioButtonComponent>
                                        </div>
                                        <hr className="mt-0 border-top opacity-100" />
                                        <p className="fw-medium text-body fs-6">Salary Range</p>
                                        <div className="d-flex flex-column gap-3 px-3 mb-4">
                                            <RadioButtonComponent label="$0 - $50k" name="salary-range" value="$0 - $50k" checked={true}></RadioButtonComponent>
                                            <RadioButtonComponent label="$50k - $100k" name="salary-range" value="$50k - $100k"></RadioButtonComponent>
                                            <RadioButtonComponent label="$100k - $150K" name="salary-range" value="$100k - $150K"></RadioButtonComponent>
                                            <RadioButtonComponent label="$150k+" name="salary-range" value="$150k+"></RadioButtonComponent>
                                        </div>
                                        <hr className="mt-0 border-top opacity-100" />
                                        <p className="fw-medium text-body fs-6">Location</p>
                                        <div className="d-flex justify-content-between">
                                            <p className="fw-medium fs-6 text-body-secondary mb-0">Remote</p>
                                            <SwitchComponent checked={true}></SwitchComponent>
                                        </div>
                                        <hr className="border-top opacity-100" />
                                        <p className="fw-medium text-body fs-6">Company Rating</p>
                                        <div className="d-flex align-items-center gap-2 mb-2">
                                            <RatingComponent cssClass="e-small" value={4} precision="Exact" readOnly={true}></RatingComponent>
                                            <span className="text-body fs-6">4+ stars</span>
                                        </div>
                                    </div>
                                    <hr className="my-0 border-top opacity-100" />
                                    <div className="p-3 d-flex justify-content-end gap-2">
                                    <ButtonComponent cssClass="e-outline" content="Clear" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-primary" content="Show jobs" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 position-absolute top-0 end-0">
                            <ButtonComponent cssClass="e-large e-round" iconCss="e-icons e-chevron-left " type="button" onClick={() => sidebarRef.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        };
    };

    return getContent();
}