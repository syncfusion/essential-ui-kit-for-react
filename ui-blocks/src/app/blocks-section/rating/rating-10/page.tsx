'use client';

import { useEffect, useState } from "react";
import { RatingComponent } from "@syncfusion/ej2-react-inputs";
import styles from "./page.module.css";

export default function Rating10() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const customerRating: any[] = [
        { rating: "User experience", value: 4.0 },
        { rating: "Pricing", value: 3.5 },
        { rating: "Features", value: 4.0 },
        { rating: "Performance", value: 5.0 },
        { rating: "Support", value: 4.0 }
    ];

    const reviewData: any[] = [
        {
            title: "Great SaaS platform for businesses!",
            rating: 4,
            review: "This SaaS application provides an intuitive interface, making it easy to manage tasks and automate workflows. The overall performance is smooth, and the features are well-structured for different use cases."
        },
        {
            title: "Highly scalable and reliable!",
            rating: 4,
            review: "We've been using this platform for months, and it has helped streamline our operations significantly. The uptime is excellent, and the integrations with third-party tools are seamless."
        },
        {
            title: "Affordable and feature-packed solution!",
            rating: 4,
            review: "This tool offers a lot more than we expected at this price point. From project tracking to team collaboration, it covers all the essentials. Would love to see more advanced analytics in future updates."
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'rating-10' && blockData.theme) {
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
                        <div id={styles["rating"]} className="py-4" style={{ minHeight: "50rem" }}>
                            <div className="my-4 py-2 px-6 mx-auto sm:!rounded-lg sm:!border rounded-none border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-800 flex flex-col justify-center items-center" style={{ maxWidth: "488px" }}>
                                {customerRating.map((item, index) => (
                                    <div key={index} className="flex w-full items-center justify-between" style={{ minHeight: "53px" }}>
                                        <p className="text-base font-medium truncate text-gray-900 dark:text-white">{item.rating}</p>
                                        <RatingComponent value={item.value} showLabel={true} enableAnimation={false} precision="Exact"
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
                                ))}
                                {reviewData.map((data, index) => (
                                    <div key={index}>
                                        <hr className="my-2 w-full border-gray-300 dark:border-gray-600" />
                                        <div className="flex justify-between items-center w-full" style={{ minHeight: "53px" }}>
                                            <p className="text-sm font-medium line-clamp-1 text-gray-900 dark:text-white">{data.title}</p>
                                            <RatingComponent value={4}
                                                emptyTemplate={() => (
                                                    <span className="sf-icon-star-filled-01 !text-2xl text-gray-300 dark:text-gray-500"></span>
                                                )}
                                                fullTemplate={() => (
                                                    <span className="sf-icon-star-filled-01 !text-2xl text-amber-300"></span>
                                                )}
                                            ></RatingComponent>
                                        </div>
                                        <p className="text-sm mb-4 text-gray-700 dark:text-gray-100">{data.review}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div id={styles["rating"]} className="py-4" style={{ minHeight: "36rem" }}>
                            <div className="mt-3 py-3 px-4 mx-auto bg-body border rounded-3 text-body" style={{ maxWidth: "488px" }}>
                                {customerRating.map((item, index) => (
                                    <div key={index} className="d-flex w-100 align-items-center justify-content-between mb-1" style={{ minHeight: "53px" }}>
                                        <p className="mb-0 fw-medium text-truncate text-body">{item.rating}</p>
                                        <RatingComponent value={item.value} showLabel={true} enableAnimation={false} precision="Exact"
                                            emptyTemplate={() => (
                                                <span className="sf-icon-star-02 fs-4 text-body-secondary"></span>
                                            )}
                                            fullTemplate={() => (
                                                <span className="sf-icon-star-filled-01 fs-4 text-warning"></span>
                                            )}
                                            labelTemplate={(value: any) => (
                                                <span className="fs-6"><p className="text-body fw-normal mb-1 small">{value?.value.toFixed(1)} / 5</p></span>
                                            )}
                                        ></RatingComponent>
                                    </div>
                                ))}
                                {reviewData.map((data, index) => (
                                    <div key={index}>
                                        <hr className="w-100 my-2 border-bottom" />
                                        <div className="d-flex justify-content-between align-items-center w-100" style={{ minHeight: "53px" }}>
                                            <p className="mb-0 fw-medium text-truncate text-body fs-6">{data.title}</p>
                                            <RatingComponent value={4}
                                                emptyTemplate={() => (
                                                    <span className="sf-icon-star-02 fs-4 text-body-secondary"></span>
                                                )}
                                                fullTemplate={() => (
                                                    <span className="sf-icon-star-filled-01 fs-4 text-warning"></span>
                                                )}
                                            ></RatingComponent>
                                        </div>
                                        <p className="mb-3 text-body-secondary small">{data.review}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
