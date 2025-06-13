'use client';

import { useEffect, useState } from "react";
import { RatingComponent } from "@syncfusion/ej2-react-inputs";

export default function Rating2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'rating-2' && blockData.theme) {
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
                            <div className="mt-4 p-4 mx-auto max-w-sm border-0 sm:!rounded-lg sm:!border rounded-none border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-800 flex flex-col justify-center items-center">
                                <img className="h-10 w-9" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" alt="logo" />
                                <div className="flex justify-center items-center ml-2" style={{ minHeight: "54px" }}>
                                    <RatingComponent value={4} showLabel={true} enableAnimation={false}
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
                        <div className="pt-4" style={{ minHeight: "36rem" }}>
                            <div className="p-3 mx-auto rounded-3 border d-flex flex-column justify-content-center align-items-center bg-body" style={{maxWidth: '384px' }} >
                                <img src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg"alt="logo" style={{ height: '40px', width: '36px' }} />
                                <div className="mt-1" style={{ minHeight: "49px" }}>
                                    <RatingComponent value={4} showLabel={true} enableAnimation={false}
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
                                <p className="small text-body-secondary mb-0">based on 135 ratings</p>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
