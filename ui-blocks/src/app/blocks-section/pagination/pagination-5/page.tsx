'use client';

import { useEffect, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { PagerComponent } from "@syncfusion/ej2-react-grids";

export default function Pagination5() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'pagination-5' && blockData.theme) {
                    setTheme(blockData.theme);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
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
                            <PagerComponent key={"pagination-5-tw"} className="border-0 bg-transparent" template={() => (
                                <div className="!flex w-fit shadow text-gray-700 rounded sm:gap-3 gap-2 text-sm font-medium px-2 sm:px-3 py-1 dark:text-gray-300 bg-gray-50 dark:bg-gray-800">
                                    <ButtonComponent className="e-flat rounded-none" iconCss="e-icons e-chevron-left-double" type="button"></ButtonComponent>
                                    <div className="border-s border-gray-200 my-1 dark:border-gray-600 leading-6"></div>
                                    <ButtonComponent className="e-flat rounded-none" iconCss="e-icons e-chevron-left" type="button"></ButtonComponent>
                                    <div className="border-s border-gray-200 my-1 dark:border-gray-600 leading-6"></div>
                                    <span className="flex items-center my-1 px-2">1 of 999</span>
                                    <div className="border-s border-gray-200 my-1 dark:border-gray-600 leading-6"></div>
                                    <ButtonComponent className="e-flat rounded-none" iconCss="e-icons e-chevron-right" type="button"></ButtonComponent>
                                    <div className="border-s border-gray-200 my-1 dark:border-gray-600 leading-6"></div>
                                    <ButtonComponent className="e-flat rounded-none" iconCss="e-icons e-chevron-right-double" type="button"></ButtonComponent>
                                </div>)}
                            ></PagerComponent>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="px-4">
                            <PagerComponent key={"pagination-5-bs"} className="border-0" template={() => (
                                <div className="d-flex shadow rounded gap-2 fs-6 p-1 text-body bg-body-tertiary" style={{ width: "fit-content" }}>
                                    <ButtonComponent className="e-flat rounded-0" iconCss="e-icons e-chevron-left-double" type="button"></ButtonComponent>
                                    <div className="mx-0 mx-sm-1 my-2 border border-light-subtle"></div>
                                    <ButtonComponent className="e-flat rounded-0" iconCss="e-icons e-chevron-left" type="button"></ButtonComponent>
                                    <div className="mx-0 mx-sm-1 my-2 border border-light-subtle"></div>
                                    <span className="d-flex align-items-center px-2">1 of 999</span>
                                    <div className="mx-0 mx-sm-1 my-2 border border-light-subtle"></div>
                                    <ButtonComponent className="e-flat rounded-0" iconCss="e-icons e-chevron-right" type="button"></ButtonComponent>
                                    <div className="mx-0 mx-sm-1 my-2 border border-light-subtle"></div>
                                    <ButtonComponent className="e-flat rounded-0" iconCss="e-icons e-chevron-right-double" type="button"></ButtonComponent>
                                </div>)}
                            ></PagerComponent>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
