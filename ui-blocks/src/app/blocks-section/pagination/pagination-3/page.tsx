'use client';

import { useEffect, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { PagerComponent } from "@syncfusion/ej2-react-grids";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";

export default function Pagination3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'pagination-3' && blockData.theme) {
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
        };
        /* SB Code - End */
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-900">
                        <div className="px-6">
                            <PagerComponent key={"pagination-3-tw"} className="border-t-0 border-x-0 px-0 py-2 bg-transparent" template={() => (
                                <div className="!flex items-center text-lg gap-2 sm:gap-4 font-medium text-gray-700 dark:text-gray-300">
                                    <ButtonComponent className="e-flat lg:hidden" iconCss="e-icons e-chevron-left" type="button" disabled={true}></ButtonComponent>
                                    <ButtonComponent className="e-flat hidden lg:inline-block" iconCss="e-icons e-chevron-left" content="Previous" type="button" disabled={true}></ButtonComponent>
                                    <span>
                                        <ButtonComponent className="e-round e-primary" content="1" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-flat e-round" content="2" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-flat e-round" content="3" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-flat e-round hidden xl:inline-block" content="4" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-flat e-round hidden xl:inline-block" content="5" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-flat e-round hidden xl:inline-block" content="6" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-flat e-round hidden xl:inline-block" content="7" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-flat e-round hidden xl:inline-block" content="8" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-flat e-round" content="..." type="button"></ButtonComponent>
                                    </span>
                                    <ButtonComponent className="e-flat hidden lg:inline-block" iconCss="e-icons e-chevron-right" iconPosition="Right" content="Next" type="button"></ButtonComponent>
                                    <ButtonComponent className="e-flat lg:hidden" iconCss="e-icons e-chevron-right" iconPosition="Right" type="button"></ButtonComponent>
                                    <DropDownButtonComponent className="e-outline" content="20" type="button" beforeOpen={(event: any) => (event.cancel = true)}></DropDownButtonComponent>
                                    <span className="md:flex justify-content grow hidden px-2 text-sm">
                                        <p className="grow">Items per page</p>
                                        <p>1 of 70 pages <span className="hidden lg:inline">(830 items)</span></p>
                                    </span>
                                </div>)}
                            ></PagerComponent>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="px-4">
                            <PagerComponent key={"pagination-3-bs"} className="border-top-0 border-start-0 border-end-0 py-2 px-0" template={() => (
                                <div className="d-flex align-items-center gap-2 fs-6 text-body">
                                    <ButtonComponent className="e-flat d-lg-none" iconCss="e-icons e-chevron-left" type="button" disabled={true}></ButtonComponent>
                                    <ButtonComponent className="e-flat d-none d-lg-inline-block" iconCss="e-icons e-chevron-left" content="Previous" type="button" disabled={true}></ButtonComponent>
                                    <span className="mx-1">
                                        <ButtonComponent className="e-round e-primary" content="1" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-flat e-round" content="2" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-flat e-round" content="3" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-flat e-round d-none d-xl-inline-block" content="4" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-flat e-round d-none d-xl-inline-block" content="5" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-flat e-round d-none d-xl-inline-block" content="6" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-flat e-round d-none d-xl-inline-block" content="7" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-flat e-round d-none d-xl-inline-block" content="8" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-flat e-round" content="..." type="button"></ButtonComponent>
                                    </span>
                                    <ButtonComponent className="e-flat d-none d-lg-inline-block" iconCss="e-icons e-chevron-right" iconPosition="Right" content="Next" type="button"></ButtonComponent>
                                    <ButtonComponent className="e-flat d-lg-none" iconCss="e-icons e-chevron-right" iconPosition="Right" type="button"></ButtonComponent>
                                    <DropDownButtonComponent className="e-outline ms-2" content="20" type="button" beforeOpen={(event: any) => (event.cancel = true)}></DropDownButtonComponent>
                                    <span className="d-none d-md-flex justify-content-between flex-grow-1 ms-1">
                                        <p className="flex-grow-1 mb-0">Items per page</p>
                                        <p className="mb-0">1 of 70 pages <span className="d-none d-lg-inline">(830 items)</span></p>
                                    </span>
                                </div>)}
                            ></PagerComponent>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
