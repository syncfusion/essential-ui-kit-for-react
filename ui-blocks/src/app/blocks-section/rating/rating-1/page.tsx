'use client';

import { useEffect, useState } from "react";
import { RatingComponent } from "@syncfusion/ej2-react-inputs";

export default function Rating1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'rating-1' && blockData.theme) {
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
                    <section className="bg-gray-50 dark:bg-gray-800">
                        <div className="pt-4" style={{ minHeight: "36rem" }}>
                            <div className="mx-auto max-w-sm p-4 sm:!rounded-lg sm:!border rounded-none border-0 border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-800 text-center">
                                <h3 className="text-base font-semibold text-gray-900 dark:text-white">Customer reviews</h3>
                                <div className="group hover:shadow-md" style={{ minHeight: "54px" }}>
                                    <RatingComponent value={4} showLabel={true}
                                        emptyTemplate={
                                            () => <span className="sf-icon-star-filled-01 text-2xl text-gray-300 dark:text-gray-500"></span>
                                        }
                                        fullTemplate={
                                            () => <span className="sf-icon-star-filled-01 text-2xl text-amber-300"></span>
                                        }
                                        labelTemplate={
                                            (value: any)=><p className="!text-gray-900 dark:!text-white text-sm font-medium">{value?.value} / 5</p>
                                        }
                                    ></RatingComponent>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">based on 135 ratings</p>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div className="pt-3" style={{ minHeight: "36rem" }}>
                            <div className="container">
                                <div className="mx-auto py-3 rounded-3 text-center border bg-body" style={{ maxWidth: "384px" }}>
                                    <h3 className="fs-6 fw-semibold text-body">Customer reviews</h3>
                                        <div style={{minHeight:"49px"}}>
                                            <RatingComponent value={4} showLabel={true}
                                                emptyTemplate={
                                                    () => <span className="sf-icon-star-02 fs-4 text-body-secondary"></span>
                                                }
                                                fullTemplate={
                                                    () => <span className="sf-icon-star-filled-01 fs-4 text-warning"></span>
                                                }
                                                labelTemplate={
                                                    (value: any)=><p className="text-body mb-1 fw-medium">{value?.value} / 5</p>
                                                }
                                            ></RatingComponent>
                                        </div>
                                    <p className="text-body-secondary small mb-0">based on 135 ratings</p>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
