'use client';

import { useEffect, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import styles from "./page.module.css";

export default function Card15() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'cards-15' && blockData.theme) {
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
                    <section className="bg-gray-50 dark:bg-gray-950">
                        <div id={styles["card-icon"]} className="px-4 sm:px-6 py-20" style={{ minHeight: "36rem" }}>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                                <div className="e-card e-bigger rounded-lg justify-start">
                                    <div className="e-card-header !pb-3">
                                        <h1 className="text-xl font-semibold text-gray-950 dark:text-gray-50 w-full truncate">Effective Study</h1>
                                    </div>
                                    <div className="e-card-content grow">
                                        <p className="text-base">Enhance your study sessions with proven strategies to improve focus and retention. Learn time management techniques to active learning methods.</p>
                                    </div>
                                    <div className="e-card-actions leading-9">
                                        <ButtonComponent cssClass="e-primary e-fill mt-1" iconCss="e-icons e-chevron-right-double" iconPosition="Right" content="View More" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="e-card e-bigger rounded-lg justify-start">
                                    <div className="e-card-header !pb-3">
                                        <h1 className="text-xl font-semibold text-gray-950 dark:text-gray-50 w-full truncate">Quick Recipes</h1>
                                    </div>
                                    <div className="e-card-content grow">
                                        <p className="text-base">Whip up tasty meals with minimal effort using our quick and easy recipes. Ideal for busy weeknights or last-minute dinners, these recipes feature simple ingredients.</p>
                                    </div>
                                    <div className="e-card-actions leading-9">
                                        <ButtonComponent cssClass="e-primary e-fill mt-1" iconCss="e-icons e-chevron-right-double" iconPosition="Right" content="View More" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="e-card e-bigger rounded-lg justify-start">
                                    <div className="e-card-header !pb-3">
                                        <h1 className="text-xl font-semibold text-gray-950 dark:text-gray-50 w-full truncate">Local Gems</h1>
                                    </div>
                                    <div className="e-card-content grow">
                                        <p className="text-base">Uncover the best-kept secrets in your area with our guide to local hotspots. Whether it's a cozy cafe, a charming bookstore, or a hidden park, find new places to explore.</p>
                                    </div>
                                    <div className="e-card-actions leading-9">
                                        <ButtonComponent cssClass="e-primary e-fill mt-1" iconCss="e-icons e-chevron-right-double" iconPosition="Right" content="View More" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-dark-subtle">
                        <div id={styles["card-icon"]} className="px-3 px-sm-4 py-5" style={{ minHeight: "36rem" }}>
                            <div className="row g-xl-5 g-4">
                                <div className="col-sm-6 col-lg-4">
                                    <div className="e-card shadow e-bigger p-2 h-100 justify-content-start">
                                        <div className="e-card-stacked flex-grow-1">
                                            <div className="e-card-header">
                                                <h1 className="fs-5 fw-bolder text-truncate m-0 w-100 lh-base">Effective Study</h1>
                                            </div>
                                            <div className="e-card-content pt-2 flex-grow-1">
                                                <p className="fs-6 m-0">Enhance your study sessions with proven strategies to improve focus and retention. Learn time management techniques to active learning methods.</p>
                                            </div>
                                        </div>
                                        <div className="e-card-actions lh-lg">
                                            <ButtonComponent cssClass="e-primary e-fill" iconCss="e-icons e-chevron-right-double fs-6 ms-1" iconPosition="Right" content="View More" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4">
                                    <div className="e-card shadow e-bigger p-2 h-100 justify-content-start">
                                        <div className="e-card-stacked flex-grow-1">
                                            <div className="e-card-header">
                                                <h1 className="fs-5 fw-bolder text-truncate m-0 w-100 lh-base">Quick Recipes</h1>
                                            </div>
                                            <div className="e-card-content pt-2 flex-grow-1">
                                                <p className="fs-6 m-0">Whip up tasty meals with minimal effort using our quick and easy recipes. Ideal for busy weeknights or last-minute dinners, these recipes feature simple ingredients.</p>
                                            </div>
                                        </div>
                                        <div className="e-card-actions lh-lg">
                                            <ButtonComponent cssClass="e-primary e-fill" iconCss="e-icons e-chevron-right-double fs-6 ms-1" iconPosition="Right" content="View More" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4">
                                    <div className="e-card shadow e-bigger p-2 h-100 justify-content-start">
                                        <div className="e-card-stacked flex-grow-1">
                                            <div className="e-card-header">
                                                <h1 className="fs-5 fw-bolder text-truncate m-0 w-100 lh-base">Local Gems</h1>
                                            </div>
                                            <div className="e-card-content pt-2 flex-grow-1">
                                                <p className="fs-6 m-0">Uncover the best-kept secrets in your area with our guide to local hotspots. Whether it's a cozy cafe, a charming bookstore, or a hidden park, find new places to explore.</p>
                                            </div>
                                        </div>
                                        <div className="e-card-actions lh-lg">
                                            <ButtonComponent cssClass="e-primary e-fill" iconCss="e-icons e-chevron-right-double fs-6 ms-1" iconPosition="Right" content="View More" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
