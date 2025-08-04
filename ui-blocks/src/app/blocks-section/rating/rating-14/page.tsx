'use client';

import { useEffect, useState, useRef } from "react";
import { RatingComponent } from "@syncfusion/ej2-react-inputs";
import { ProgressBarComponent } from "@syncfusion/ej2-react-progressbar";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default function Rating14() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [hoveredRating, setHoveredRating] = useState<number>(4.2);
    const [progressWidth, setProgressWidth] = useState('246px');
    const progressBars = useRef<(ProgressBarComponent | null)[]>([]);

    const customerRating: any[] = [
        { id: 1, label: 'Features', value: 100, ratingValue: 5 },
        { id: 2, label: 'Value for money', value: 80, ratingValue: 4 },
        { id: 3, label: 'Ease of use', value: 60, ratingValue: 3 },
        { id: 4, label: 'Customer support', value: 40, ratingValue: 2 },
        { id: 5, label: 'Customer', value: 20, ratingValue: 1 }
    ];

    const handleResize = (): void => {
        setProgressWidth(window.innerWidth < 640 ? '100%' : '262px');
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
                if (blockData.name === 'rating-14' && blockData.theme) {
                    setTheme(blockData.theme);
                    refreshProgressBar(600);
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
                        <div key={"rating-14-tw"} className="pt-4" style={{ minHeight: "36rem" }}>
                            <div className="py-6 justify-between mx-auto w-full bg-white dark:bg-gray-800 border-0 sm:!rounded-lg sm:!border border-gray-300 dark:border-gray-500" style={{ maxWidth: "360px" }}>
                                <div className="px-6">
                                    <div className="flex gap-3">
                                        <div className="rounded-full flex items-center justify-center shrink-0 bg-transparent border border-gray-300 dark:border-gray-500" style={{ height: "38px", width: "38px" }}>
                                            <span className="e-icons e-star-filled text-gray-900 dark:text-white"></span>
                                        </div>
                                        <div>
                                            <h2 className="text-base font-semibold text-gray-900 dark:text-white">Rate our product</h2>
                                            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">Provide us with feedback for the product</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className="border-gray-300 dark:border-gray-600 my-4" />
                                <div className="flex items-center px-6">
                                    <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center" style={{ width: "50px" }}>{hoveredRating}</h2>
                                    <hr className="border border-gray-300 dark:border-gray-600 h-12 ms-3 me-2" />
                                    <div>
                                        <div style={{ minHeight: "60px" }}>
                                            <RatingComponent value={4.2} enableAnimation={false} precision="exact" valueChanged={(event) => setHoveredRating(event.value)}
                                                emptyTemplate={() => (
                                                    <span className="sf-icon-star-filled-01 !text-2xl text-gray-300 dark:text-gray-500"></span>
                                                )}
                                                fullTemplate={() => (
                                                    <span className="sf-icon-star-filled-01 !text-2xl text-amber-300"></span>
                                                )}
                                            ></RatingComponent>
                                        </div>
                                        <p className="text-sm text-gray-900 dark:text-white ps-3">{hoveredRating}
                                            <span className="px-2">17.4K Ratings</span>
                                            <span className="text-gray-500 dark:text-gray-400 underline">567 reviews</span>
                                        </p>
                                    </div>
                                </div>
                                <hr className="border-gray-300 dark:border-gray-600 mt-6 mb-6" />
                                <div className="flex flex-col px-6">
                                    {customerRating.map((rating, index) => (
                                        <div key={rating.id} className="mb-2 text-left">
                                            <div className="flex items-center gap-1">
                                                <ProgressBarComponent ref={(progressBar: any) => { progressBars.current[index] = progressBar; }} id={rating.id} className="grow sm:grow-0" margin={{ left: 1, right: 1 }} value={rating.value} width={progressWidth} progressThickness={12} trackThickness={12} progressColor="#FFB900" cornerRadius={"Round"}></ProgressBarComponent>
                                                <span className="text-gray-900 dark:text-white text-xs font-medium ms-1">{rating.ratingValue.toFixed(1)}</span>
                                                <span className="sf-icon-star-filled-01 text-lg text-amber-300"></span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <hr className="border-gray-300 dark:border-gray-600" />
                                <div className="px-6 pt-5 w-full">
                                    <ButtonComponent cssClass="e-outline e-block" iconCss="e-icons e-edit" content="Write a review" type="button"></ButtonComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div key={"rating-14-bs"} className="pt-4" style={{ minHeight: "36rem" }}>
                            <div className="pt-4 pb-3 d-flex flex-column justify-content-center mx-auto w-100 bg-body rounded-3 border" style={{ maxWidth: "360px" }}>
                                <div className="px-4">
                                    <div className="d-flex gap-3">
                                        <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 bg-transparent border" style={{ height: "38px", width: "38px" }}>
                                            <span className="e-icons e-star-filled text-body"></span>
                                        </div>
                                        <div className="small">
                                            <h2 className="fs-6 fw-bold text-body mb-1">Rate our product</h2>
                                            <p className="small fw-medium text-secondary mt-1 mb-0">Provide us with feedback for the product</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className="mt-3 mb-2 border-light-subtle opacity-100" />
                                <div className="d-flex align-items-center px-4">
                                    <h2 className="fs-3 fw-bold text-body text-center mb-0" style={{ width: "50px" }}>{hoveredRating}</h2>
                                    <hr className="mx-3 border-end border-light-subtle opacity-100" style={{ height: "3rem" }} />
                                    <div>
                                        <div style={{ minHeight: "50px" }}>
                                            <RatingComponent value={4.2} enableAnimation={false} precision="exact" valueChanged={(event) => setHoveredRating(event.value)}
                                                emptyTemplate={() => (
                                                    <span className="sf-icon-star-02 fs-4 text-body-secondary"></span>
                                                )}
                                                fullTemplate={() => (
                                                    <span className="sf-icon-star-filled-01 fs-4 text-warning"></span>
                                                )}
                                            ></RatingComponent>
                                        </div>
                                        <p className="small text-body ps-2 mb-0">{hoveredRating}<span className="px-2">17.4K Ratings</span><span className="text-body-secondary text-decoration-underline">567 reviews</span></p>
                                    </div>
                                </div>
                                <hr className="mb-4 border-light-subtle opacity-100" />
                                <div className="d-flex flex-column px-4">
                                    {customerRating.map((rating, index) => (
                                        <div key={rating.id} className="mb-2 text-start">
                                            <div className="d-flex align-items-center gap-1 small">
                                                <ProgressBarComponent ref={(progressBar: any) => { progressBars.current[index] = progressBar; }} id={rating.id} className="flex-grow-1" margin={{ left: 1, right: 1 }} value={rating.value} width={progressWidth} progressThickness={12} trackThickness={12} progressColor="#FFB900" cornerRadius={"Round"}></ProgressBarComponent>
                                                <span className="text-body small fw-medium ms-1">{rating.ratingValue.toFixed(1)}</span>
                                                <span className="sf-icon-star-filled-01 text-warning fs-5"></span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <hr className="border-light-subtle opacity-100" />
                                <div className="px-4 my-1 w-100">
                                    <ButtonComponent cssClass="e-outline e-block" iconCss="e-icons e-edit" content="Write a review" type="button"></ButtonComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
