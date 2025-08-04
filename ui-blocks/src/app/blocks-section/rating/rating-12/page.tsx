'use client';

import { useEffect, useState, useRef } from "react";
import { RatingComponent } from "@syncfusion/ej2-react-inputs";
import { ProgressBarComponent } from "@syncfusion/ej2-react-progressbar";

export default function Rating12() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [progressWidth, setProgressWidth] = useState('306px');
    const progressBars = useRef<(ProgressBarComponent | null)[]>([]);

    const customerRating: any[] = [
        { id: 1, label: 'Features', value: 92, ratingValue: 4.6 },
        { id: 2, label: 'Value for money', value: 90, ratingValue: 4.2 },
        { id: 3, label: 'Ease of use', value: 54, ratingValue: 2.7 },
        { id: 4, label: 'Customer support', value: 98, ratingValue: 4.9 }
    ];

    const handleResize = (): void => {
        setProgressWidth( window.innerWidth < 640 ? '100%' : '306px');
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
                if (blockData.name === 'rating-12' && blockData.theme) {
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
                        <div key={"rating-12-tw"} className="pt-4" style={{ minHeight: "36rem" }}>
                            <div className="flex flex-col sm:flex-row gap-8 justify-between px-4 sm:px-12 py-8 mx-auto bg-white dark:bg-gray-800 border-0 sm:!rounded-lg sm:!border border-gray-300 dark:border-gray-500" style={{ maxWidth: "606px" }}>
                                <div className="flex flex-col justify-center items-center mt-1 mb-1">
                                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white text-center">Overall score</h2>
                                    <div style={{ minHeight: "120px" }}>
                                        <RatingComponent value={4.1} showLabel={true} labelPosition="Top" enableAnimation={false} precision="exact"
                                            emptyTemplate={() => (
                                                <span className="sf-icon-star-filled-01 !text-2xl text-gray-300 dark:text-gray-500"></span>
                                            )}
                                            fullTemplate={() => (
                                                <span className="sf-icon-star-filled-01 !text-2xl text-amber-300"></span>
                                            )}
                                            labelTemplate={(value: any) => (
                                                <h2 className="text-3xl font-semibold pt-2 text-gray-900 dark:text-white">{value?.value.toFixed(1)}<span className="text-lg font-normal"> /5</span></h2>
                                            )}
                                        ></RatingComponent>
                                    </div>
                                    <span className="e-badge e-bigger e-badge-pill mt-1 bg-gray-100 dark:bg-gray-700 !font-medium">Based on 121 reviews</span>
                                </div>
                                <div className="flex flex-col">
                                    {customerRating.map((rating, index) => (
                                        <div key={rating.id} className="mb-2 text-left">
                                            <div className="flex justify-between text-sm font-medium text-gray-700">
                                                <span className="text-gray-700 dark:text-gray-100">{rating.label}</span>
                                                <span className="text-gray-900 dark:text-white">{rating.ratingValue}</span>
                                            </div>
                                            <div className="flex grow sm:grow-0">
                                                <ProgressBarComponent ref={(progressBar: any) => { progressBars.current[index] = progressBar; }} id={rating.id} className="grow sm:grow-0" margin={{ left: 1, right: 1 }} value={rating.value} width={progressWidth} progressThickness={8} trackThickness={8} progressColor="#FFB900" cornerRadius={"Round"}></ProgressBarComponent>
                                            </div>
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
                        <div key={"rating-12-tw"} className="pt-4" style={{ minHeight: "36rem" }}>
                            <div className="d-flex flex-column flex-sm-row gap-4 justify-content-between px-4 px-sm-5 py-4 mx-auto bg-body rounded border" style={{ maxWidth: "606px" }}>
                                <div className="d-flex flex-column justify-content-center align-items-center mt-1 mb-1">
                                    <h2 className="fs-5 fw-medium text-body text-center mb-0">Overall score</h2>
                                    <div style={{ minHeight: "120px" }}>
                                        <RatingComponent value={4.1} showLabel={true} labelPosition="Top" enableAnimation={false} precision="exact"
                                            emptyTemplate={() => (
                                                <span className="sf-icon-star-02 fs-4 text-body-secondary"></span>
                                            )}
                                            fullTemplate={() => (
                                                <span className="sf-icon-star-filled-01 fs-4 text-warning"></span>
                                            )}
                                            labelTemplate={(value: any) => (
                                                <h2 className="fw-bold pt-2 text-body mb-0">{value?.value.toFixed(1)} <span className="h6 fw-medium">/5</span></h2>
                                            )}
                                        ></RatingComponent>
                                    </div>
                                    <span className="e-badge rounded-pill bg-body-secondary text-body-secondary fw-medium">Based on 121 reviews</span>
                                </div>
                                <div className="d-flex flex-column">
                                    {customerRating.map((rating, index) => (
                                        <div key={rating.id} className="mb-2 text-start">
                                            <div className="d-flex justify-content-between small fw-medium text-body-secondary">
                                                <span>{rating.label}</span>
                                                <span className="text-body small">{rating.ratingValue}</span>
                                            </div>
                                            <div className="d-flex flex-grow-1">
                                                <ProgressBarComponent ref={(progressBar: any) => { progressBars.current[index] = progressBar; }} id={rating.id} className="flex-grow-1" margin={{ left: 1, right: 1 }} value={rating.value} width={progressWidth} progressThickness={8} trackThickness={8} progressColor="#FFB900" cornerRadius={"Round"}></ProgressBarComponent>
                                            </div>
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
