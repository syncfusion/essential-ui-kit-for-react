'use client';

import { useEffect, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { PagerComponent } from "@syncfusion/ej2-react-grids";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";

export default function Pagination4() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'pagination-4' && blockData.theme) {
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
                            <PagerComponent key={"pagination-4-tw"} className="border-t-0 border-x-0 px-0 py-2 bg-transparent" template={() => (
                                <div className="!flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                    <ButtonComponent className="e-flat" iconCss="e-icons e-chevron-left" type="button"></ButtonComponent>
                                    <span className="px-4">Page</span>
                                    <TextBoxComponent className="e-outline" value="2" width="68"></TextBoxComponent>
                                    <span className="px-2">of 218</span>
                                    <ButtonComponent className="e-flat" iconCss="e-icons e-chevron-right" type="button"></ButtonComponent>
                                    <div className="sm:!flex !hidden items-center ml-auto space-x-4">
                                        <span>Items per page</span>
                                        <DropDownButtonComponent className="e-outline leading-6" content="2" type="button" beforeOpen={(event: any) => (event.cancel = true)}></DropDownButtonComponent>
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
                            <PagerComponent key={"pagination-4-bs"} className="border-top-0 border-start-0 border-end-0 py-2 px-0" template={() => (
                                <div className="d-flex align-items-center gap-2 fs-6 text-body">
                                    <ButtonComponent className="e-flat" iconCss="e-icons e-chevron-left" type="button"></ButtonComponent>
                                    <span className="ms-1">Page</span>
                                    <TextBoxComponent value="2" width="68"></TextBoxComponent>
                                    <span className="me-1">of 218</span>
                                    <ButtonComponent className="e-flat" iconCss="e-icons e-chevron-right" type="button"></ButtonComponent>
                                    <div className="d-none d-sm-flex align-items-center ms-auto gap-2">
                                        <span>Items per page</span>
                                        <DropDownButtonComponent className="e-outline" content="2" type="button" beforeOpen={(event: any) => (event.cancel = true)}></DropDownButtonComponent>
                                    </div>
                                </div>)}
                            ></PagerComponent>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
