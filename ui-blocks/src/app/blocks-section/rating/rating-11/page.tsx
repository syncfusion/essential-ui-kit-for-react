'use client';

import { useEffect, useState, useRef } from "react";
import { ProgressBarComponent } from "@syncfusion/ej2-react-progressbar";

export default function Rating11() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [progressWidth, setProgressWidth] = useState('214px');
    const progressBars = useRef<(ProgressBarComponent | null)[]>([]);

    const customerRating: any[] = [
        { id: 1, label: 'Customer support', value: 88, ratingValue: 4.4 },
        { id: 2, label: 'Ease of use', value: 90, ratingValue: 4.5 },
        { id: 3, label: 'Reliability', value: 54, ratingValue: 2.7 },
        { id: 4, label: 'Integration', value: 90, ratingValue: 4.4 },
        { id: 5, label: 'Features', value: 88, ratingValue: 4.4 },
        { id: 6, label: 'Pricing & Value', value: 70, ratingValue: 3.5 }
    ];

    const handleResize = (): void => {
        setProgressWidth( window.innerWidth < 640 ? '100%' : '214px');
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
                if (blockData.name === 'rating-11' && blockData.theme) {
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
                        <div key={"rating-11-tw"} className="pt-4" style={{ minHeight: "36rem" }}>
                            <div className="py-6 px-6 mx-auto items-center bg-white dark:bg-gray-800 border-0 sm:!rounded-lg sm:!border border-gray-300 dark:border-gray-500" style={{ maxWidth: "584px" }}>
                                <div className="sm:flex flex-col sm:flex-row sm:!justify-between items-center">
                                    <div className="flex items-center gap-3 pb-4 sm:pb-0">
                                        <span className="e-avatar e-avatar-small rounded-md font-bold bg-primary-100 dark:bg-primary-600 text-primary-600 dark:text-primary-400">3.9</span>
                                        <p className="text-gray-900 dark:text-white text-lg font-medium">Good</p>
                                        <span className="e-badge flex bg-transparent">
                                            <div className="w-2 h-2 rounded-full bg-gray-700 dark:bg-gray-100"></div>
                                        </span>
                                        <p className="text-gray-700 dark:text-gray-100 text-sm">376 reviews</p>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 dark:text-primary-400">Read all reviews</a>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-6 gap-sm-8">
                                    <div className="space-y-2">
                                        {customerRating.slice(0, 4).map((rating) => (
                                            <div key={rating.id}>
                                                <p className="text-sm font-medium text-gray-700 dark:text-gray-100">{rating.label}</p>
                                                <div className="flex items-center">
                                                    <div className="grow sm:grow-0">
                                                        <ProgressBarComponent ref={(progressBar: any) => { progressBars.current.push(progressBar); }} id={rating.id} className="grow sm:grow-0" margin={{ left: 1, right: 1 }} value={rating.value} width={progressWidth} progressThickness={12} trackThickness={12} progressColor="#FFB900" cornerRadius={"Round"}></ProgressBarComponent>
                                                    </div>
                                                    <p className="text-xs font-medium text-gray-900 dark:text-white ml-2">{rating.ratingValue}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="space-y-2">
                                        {customerRating.slice(4, 6).map((rating) => (
                                            <div key={rating.id}>
                                                <p className="text-sm font-medium text-gray-700 dark:text-gray-100">{rating.label}</p>
                                                <div className="flex items-center">
                                                    <div className="grow sm:grow-0">
                                                        <ProgressBarComponent ref={(progressBar: any) => { progressBars.current.push(progressBar); }} id={rating.id} className="grow sm:grow-0" margin={{ left: 1, right: 1 }} value={rating.value} width={progressWidth} progressThickness={12} trackThickness={12} progressColor="#FFB900" cornerRadius={"Round"}></ProgressBarComponent>
                                                    </div>
                                                    <span className="text-xs font-medium text-gray-900 dark:text-white ml-2">{rating.ratingValue}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div key={"rating-11-bs"} className="pt-4" style={{ minHeight: "36rem" }}>
                            <div className="py-4 px-4 mx-auto bg-body rounded-3 border" style={{ maxWidth: "584px" }}>
                                <div className="d-flex flex-column flex-sm-row justify-content-between align-item-sm-center">
                                    <div className="d-flex align-items-center gap-2 pb-3 pb-sm-0">
                                        <span className="e-avatar e-avatar-small rounded-2 bg-primary-subtle text-primary">3.9</span>
                                        <p className="text-body h6 fw-medium mb-0">Good</p>
                                        <span className="e-badge bg-transparent d-flex align-items-center">
                                            <div className="rounded-circle bg-secondary" style={{ width: "6px", height: "6px", backgroundColor: "#6c757d" }}></div>
                                        </span>
                                        <p className="text-body-secondary small mb-0">376 reviews</p>
                                    </div>
                                    <a href="#" className="text-primary fs-6 text-decoration-none mt-1">Read all reviews</a>
                                </div>
                                <div className="row row-cols-1 row-cols-sm-2 g-4 pt-4">
                                    <div className="d-flex flex-column gap-1 pe-sm-4">
                                        {customerRating.slice(0, 4).map((rating) => (
                                            <div key={rating.id}>
                                                <p className="small fw-medium text-body-secondary mb-0">{rating.label}</p>
                                                <div className="d-flex pt-1 align-items-center">
                                                    <div className="flex-grow-1">
                                                        <ProgressBarComponent ref={(progressBar: any) => { progressBars.current.push(progressBar); }} id={rating.id} className="grow sm:grow-0" margin={{ left: 1, right: 1 }} value={rating.value} width={progressWidth} progressThickness={12} trackThickness={12} progressColor="#FFB900" cornerRadius={"Round"}></ProgressBarComponent>
                                                    </div>
                                                    <p className="text-body small fw-medium mb-0 ms-2">{rating.ratingValue}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="d-flex flex-column gap-1 mt-0 mt-sm-4 ps-sm-4">
                                        {customerRating.slice(4, 6).map((rating) => (
                                            <div key={rating.id}>
                                                <p className="small fw-medium text-body-secondary mb-0">{rating.label}</p>
                                                <div className="d-flex pt-1 align-items-center">
                                                    <div className="flex-grow-1">
                                                        <ProgressBarComponent ref={(progressBar: any) => { progressBars.current.push(progressBar); }} id={rating.id} className="grow sm:grow-0" margin={{ left: 1, right: 1 }} value={rating.value} width={progressWidth} progressThickness={12} trackThickness={12} progressColor="#FFB900" cornerRadius={"Round"}></ProgressBarComponent>
                                                    </div>
                                                    <span className="text-body small fw-medium ms-2">{rating.ratingValue}</span>
                                                </div>
                                            </div>
                                        ))}
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
