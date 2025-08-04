'use client';

import { useEffect, useState, useRef } from "react";
import { RatingComponent } from "@syncfusion/ej2-react-inputs";
import { ProgressBarComponent } from "@syncfusion/ej2-react-progressbar";

export default function Rating9() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [progressWidth, setProgressWidth] = useState('214px');
    const progressBars = useRef<(ProgressBarComponent | null)[]>([]);

    const customerRating: any[] = [
        { id: 1, label: 5, value: 96 },
        { id: 2, label: 4, value: 18 },
        { id: 3, label: 3, value: 11 },
        { id: 4, label: 2, value: 4 },
        { id: 5, label: 1, value: 6 }
    ];

    const handleResize = (): void => {
        setProgressWidth( window.innerWidth < 640 ? '100%' : '246px');
        /* SB Code - Start */
        refreshProgressBar(300);
        /* SB Code - End */
    };

    /* SB Code - Start */
    const refreshProgressBar = (timeout: number): void => {
        setTimeout(() => {
            progressBars.current.forEach((progressbar) => {
                if (progressbar) {
                    progressbar.refresh();
                }
            });
        }, timeout);
    };

    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'rating-9' && blockData.theme) {
                    setTheme(blockData.theme);
                    refreshProgressBar(300);
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
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-gray-50 dark:bg-gray-800">
                        <div key={"rating-9-tw"} className="pt-4" style={{ minHeight: "36rem" }}>
                            <div className="py-6 mx-auto flex flex-col justify-center items-center bg-white dark:bg-gray-800 border-0 sm:!rounded-lg sm:!border border-gray-300 dark:border-gray-500 text-gray-900 dark:text-white" style={{ maxWidth: "360px" }}>
                                <h2 className="text-base font-semibold">Customer reviews</h2>
                                <div className="flex justify-center items-center py-1" style={{ minHeight: "60px" }}>
                                    <RatingComponent value={4.0} showLabel={true} enableAnimation={false} precision="exact"
                                        emptyTemplate={() => (
                                            <span className="sf-icon-star-filled-01 !text-2xl text-gray-300 dark:text-gray-500"></span>
                                        )}
                                        fullTemplate={() => (
                                            <span className="sf-icon-star-filled-01 !text-2xl text-amber-300"></span>
                                        )}
                                        labelTemplate={(value: any) => (
                                            <p className="!text-gray-900 dark:!text-white text-sm font-medium">{value?.value.toFixed(1)} / 5</p>
                                        )}
                                    ></RatingComponent>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">based on 135 ratings</p>
                                <div className="pt-6 flex flex-col gap-1 px-4 sm:px-6 w-full">
                                    {customerRating.map((rating, index) => (
                                        <div key={index} className="flex justify-center items-center">
                                            <span className="text-gray-700 dark:text-gray-100 text-sm shrink-0" style={{ minWidth: "38px" }}>{rating.label} star</span>
                                            <div className="grow sm:grow-0 shrink-1 mx-2">
                                                <ProgressBarComponent ref={(progressBar: any) => { progressBars.current[index] = progressBar; }} id={rating.id} margin={{ left: 1, right: 1 }} width={progressWidth} value={rating.value} progressThickness={12} trackThickness={12} progressColor="#FFB900" cornerRadius="Round"></ProgressBarComponent>
                                            </div>
                                            <span className="text-gray-900 dark:text-white text-xs font-medium" style={{ minWidth: "18px" }}>{rating.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div key={"rating-9-tw"} className="pt-4" style={{ minHeight: "36rem" }}>
                            <div className="py-4 mx-auto d-flex flex-column justify-content-center align-items-center bg-body rounded border text-body" style={{ maxWidth: "360px" }}>
                                <h2 className="fs-6 fw-bold text-body">Customer reviews</h2>
                                <div className="d-flex justify-content-center align-items-center py-1" style={{ minHeight: "60px" }}>
                                    <RatingComponent value={4.0} showLabel={true} enableAnimation={false} precision="exact"
                                        emptyTemplate={() => (
                                            <span className="sf-icon-star-02 fs-4 text-body-secondary"></span>
                                        )}
                                        fullTemplate={() => (
                                            <span className="sf-icon-star-filled-01 fs-4 text-warning"></span>
                                        )}
                                        labelTemplate={(value: any) => (
                                            <span className="fs-6"><p className="text-body small mb-0">{value?.value.toFixed(1)} / 5</p></span>
                                        )}
                                    ></RatingComponent>
                                </div>
                                <p className="small text-body-secondary mb-0">based on 135 ratings</p>
                                <div className="pt-4 d-flex flex-column gap-2 px-3 px-sm-4 w-100">
                                    {customerRating.map((rating, index) => (
                                        <div key={index} className="d-flex justify-content-center align-items-center">
                                            <span className="text-body-secondary small me-2 flex-shrink-0" style={{ minWidth: "35px" }}>{rating.label} star</span>
                                            <div className="flex-grow-1 flex-shrink-1 flex-sm-shrink-0">
                                                <ProgressBarComponent ref={(progressBar: any) => { progressBars.current[index] = progressBar; }} id={rating.id} margin={{ left: 1, right: 1 }} width={progressWidth} value={rating.value} progressThickness={12} trackThickness={12} progressColor="#FFB900" cornerRadius="Round"></ProgressBarComponent>
                                            </div>
                                            <span className="small"><p className="text-body small fw-medium ms-2 mb-0" style={{ minWidth: "18px" }}>{rating.value}</p></span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
