'use client';

import { useEffect, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { PagerComponent } from "@syncfusion/ej2-react-grids";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";

export default function Pagination6() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'pagination-6' && blockData.theme) {
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
                            <PagerComponent key={"pagination-6-tw"} className="border-t-0 border-x-0 px-0 py-2 bg-transparent" template={() => (
                                <div className="!flex justify-end gap-3 sm:gap-4">
                                    <ButtonComponent className="e-flat rounded-none" iconCss="e-icons e-chevron-left" type="button"></ButtonComponent>
                                    <DropDownButtonComponent className="e-outline" content="20" type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                    <ButtonComponent className="e-flat rounded-none" iconCss="e-icons e-chevron-right" type="button"></ButtonComponent>
                                    <div className="border-s border-gray-200 dark:border-gray-600 leading-6"></div>
                                    <div>
                                        <DropDownButtonComponent className="e-outline" iconCss="e-icons e-properties-2" type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                        <ButtonComponent className="e-outline ml-2" iconCss="e-icons e-filter" type="button"></ButtonComponent>
                                    </div>
                                </div>)}
                            ></PagerComponent>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="px-4">
                            <PagerComponent key={"pagination-6-bs"} className="border-top-0 border-start-0 border-end-0 py-2 px-0" template={() => (
                                <div className="d-flex justify-content-end gap-2">
                                    <ButtonComponent className="e-flat rounded-0" iconCss="e-icons e-chevron-left" type="button"></ButtonComponent>
                                    <DropDownButtonComponent className="e-outline mx-1" content="20" type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                    <ButtonComponent className="e-flat rounded-0" iconCss="e-icons e-chevron-right" type="button"></ButtonComponent>
                                    <div className="border-start border-secondary lh-lg mx-1 mx-sm-2"></div>
                                    <DropDownButtonComponent className="e-outline" iconCss="e-icons e-properties-2" type="button" beforeOpen={(event) => (event.cancel = true)}></DropDownButtonComponent>
                                    <ButtonComponent className="e-outline ms-1 ms-sm-2" iconCss="e-icons e-filter" type="button"></ButtonComponent>
                                </div>)}
                            ></PagerComponent>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
