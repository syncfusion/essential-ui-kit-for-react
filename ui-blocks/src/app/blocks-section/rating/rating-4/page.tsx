'use client';

import { useEffect, useState } from 'react';
import { RatingComponent } from '@syncfusion/ej2-react-inputs';

export default function Rating4() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'rating-4' && blockData.theme) {
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
                            <div className="p-6 max-w-sm text-center mt-3 mx-auto border-0 sm:!rounded-lg sm:!border rounded-none border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-800">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Please rate your experience</h3>
                                <p className="text-sm mt-3 text-gray-700 dark:text-gray-100">to help us serve you better</p>
                                <div style={{minHeight:'54px'}}>
                                    <RatingComponent value={4}
                                        emptyTemplate={
                                            () => <span className="sf-icon-star-filled-01 text-2xl text-gray-300 dark:text-gray-500"></span>
                                        } 
                                        fullTemplate={
                                            () => <span className="sf-icon-star-filled-01 text-2xl text-amber-300"></span>
                                        } 
                                    ></RatingComponent>
                                </div>
                                <div className="flex gap-6 items-center justify-center pt-3 mx-2 border-t border-gray-200 dark:border-gray-600">
                                    <a href="#">
                                        <img className="w-5 h-5" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/png/facebook.png" alt="facebook" />
                                    </a>
                                    <a href="#">
                                        <img className="w-5 h-5" src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/png/google.png" alt="google" />
                                    </a>
                                    <a href="#" className="text-gray-900 dark:text-white">
                                        <svg className="svg-icon" width="20" height="20" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 0.617188L5.81975 8.93442L0.302812 15.3829H2.26965L6.70223 10.1918L10.3302 15.3829H16L9.81975 6.53788L14.8724 0.617188H12.9373L8.94593 5.28337L5.68709 0.617188H0ZM2.75415 2.07645H4.94881L13.2632 13.9236H11.0541L2.75415 2.07645Z" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div className="pt-4" style={{ minHeight: "36rem" }}>
                            <div className="p-4 mt-3 mx-auto text-center border rounded-3 bg-body" style={{ maxWidth: "384px" }}>
                                <h3 className="fs-5 fw-semibold mb-0 text-body">Please rate your experience</h3>
                                <p className="text-body-secondary small mb-0 mt-3">to help us serve you better</p>
                                <div style={{minHeight:'54px'}}>
                                    <RatingComponent value={4} 
                                        emptyTemplate={
                                            () => <span className="sf-icon-star-02 fs-4 text-body-secondary"></span>
                                        } 
                                        fullTemplate={
                                            () => <span className="sf-icon-star-filled-01 fs-4 text-warning"></span>
                                        } 
                                    ></RatingComponent>
                                </div>
                                <div className="d-flex justify-content-center align-items-center gap-4 border-top pt-3 mx-1">
                                    <a href="#">
                                        <img src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/png/facebook.png" alt="facebook" style={{ width: '20px', height: '20px' }} />
                                    </a>
                                    <a href="#">
                                        <img src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/png/google.png" alt="google" style={{ width: '20px', height: '20px' }} />
                                    </a>
                                    <a href="#" className="text-body">
                                        <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0.617188L5.81975 8.93442L0.302812 15.3829H2.26965L6.70223 10.1918L10.3302 15.3829H16L9.81975 6.53788L14.8724 0.617188H12.9373L8.94593 5.28337L5.68709 0.617188H0ZM2.75415 2.07645H4.94881L13.2632 13.9236H11.0541L2.75415 2.07645Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
