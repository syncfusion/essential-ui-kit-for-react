'use client';

import { useEffect, useState } from "react";
import { RatingComponent } from "@syncfusion/ej2-react-inputs";

export default function Rating13() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'rating-13' && blockData.theme) {
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
                            <div className="mt-4 p-6 w-full mx-auto sm:!rounded-lg sm:!border rounded-none border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-800 flex flex-col justify-center items-center text-center" style={{ maxWidth: "360px" }}>
                                <h4 className="font-semibold text-base text-gray-900 dark:text-white">How would you like to rate our app experience?</h4>
                                <div className="mt-2" style={{ minHeight: "53px" }}>
                                    <RatingComponent value={4} enableAnimation={false}
                                        emptyTemplate={() => (
                                            <span className="sf-icon-star-filled-01 !text-2xl text-gray-300 dark:text-gray-500 px-2"></span>
                                        )}
                                        fullTemplate={() => (
                                            <span className="sf-icon-star-filled-01 !text-2xl text-amber-300 px-2"></span>
                                        )}
                                    ></RatingComponent>
                                </div>
                                <div className="flex justify-between w-full px-8 mx-8 text-xs font-medium text-gray-500 dark:text-gray-400">
                                    <p>Unhappy</p>
                                    <p>Neutral</p>
                                    <p>Satisfied</p>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div className="pt-4" style={{ minHeight: "36rem" }}>
                            <div className="mt-3 p-4 w-100 mx-auto text-center border rounded bg-body text-body" style={{ maxWidth: "360px" }}>
                                <h4 className="fw-bold text-body fs-6 text-body">How would you like to rate our app experience?</h4>
                                <div className="mt-2" style={{ minHeight: "53px" }}>
                                    <RatingComponent value={4} enableAnimation={false}
                                        emptyTemplate={() => (
                                            <span className="sf-icon-star-02 fs-4 text-body-secondary px-2"></span>
                                        )}
                                        fullTemplate={() => (
                                            <span className="sf-icon-star-filled-01 fs-4 text-warning px-2"></span>
                                        )}
                                    ></RatingComponent>
                                </div>
                                <div className="d-flex justify-content-between px-3 mx-3 small">
                                    <p className="mb-0 small text-body-secondary fw-medium">Unhappy</p>
                                    <p className="mb-0 small text-body-secondary fw-medium">Neutral</p>
                                    <p className="mb-0 small text-body-secondary fw-medium">Satisfied</p>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
