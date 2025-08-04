'use client';

import { useEffect, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { PagerComponent } from "@syncfusion/ej2-react-grids";

export default function Pagination1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'pagination-1' && blockData.theme) {
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
                            <PagerComponent key={"pagination-1-tw"} className="border-0 bg-transparent" template={() => (
                                <div className="!flex gap-5 xl:gap-3">
                                    <ButtonComponent className="sm:hidden" iconCss="e-icons e-chevron-left" type="button"></ButtonComponent>
                                    <ButtonComponent className="hidden sm:inline-block" iconCss="e-icons e-chevron-left" content="PREVIOUS" type="button"></ButtonComponent>
                                    <span className="e-btn-group">
                                        <ButtonComponent content="1" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-secondary e-active" content="2" type="button"></ButtonComponent>
                                        <ButtonComponent className="hidden sm:inline-block" content="3" type="button"></ButtonComponent>
                                        <ButtonComponent content="..." type="button"></ButtonComponent>
                                        <ButtonComponent className="hidden sm:inline-block" content="79" type="button"></ButtonComponent>
                                        <ButtonComponent content="80" type="button"></ButtonComponent>
                                    </span>
                                    <ButtonComponent className="hidden sm:inline-block" iconCss="e-icons e-chevron-right" iconPosition="Right" content="NEXT" type="button"></ButtonComponent>
                                    <ButtonComponent className="sm:hidden" iconCss="e-icons e-chevron-right" iconPosition="Right" type="button"></ButtonComponent>
                                </div>)}
                            ></PagerComponent>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="px-4">
                            <PagerComponent key={"pagination-1-bs"} className="border-0 px-0" template={() => (
                                <div className="d-flex gap-2">
                                    <ButtonComponent className="e-outline d-sm-none" iconCss="e-icons e-chevron-left" type="button"></ButtonComponent>
                                    <ButtonComponent className="e-outline d-none d-sm-inline-block" iconCss="e-icons e-chevron-left" content="PREVIOUS" type="button"></ButtonComponent>
                                    <span className="e-btn-group shadow-none mx-1">
                                        <ButtonComponent className="e-flat" content="1" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-secondary" content="2" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-flat d-none d-sm-inline-block" content="3" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-flat" content="..." type="button"></ButtonComponent>
                                        <ButtonComponent className="e-flat d-none d-sm-inline-block" content="79" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-flat" content="80" type="button"></ButtonComponent>
                                    </span>
                                    <ButtonComponent className="e-outline d-none d-sm-inline-block" iconCss="e-icons e-chevron-right" iconPosition="Right" content="NEXT" type="button"></ButtonComponent>
                                    <ButtonComponent className="e-outline d-sm-none" iconCss="e-icons e-chevron-right" iconPosition="Right" type="button"></ButtonComponent>
                                </div>)}
                            ></PagerComponent>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
