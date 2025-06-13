'use client';

import { useEffect, useState } from 'react';
import { RatingComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export default function Rating5() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'rating-5' && blockData.theme) {
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
                            <div className="w-full sm:max-w-sm mx-auto p-6 border-0 sm:!rounded-lg sm:!border rounded-none bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-500">
                                <div className="flex items-center gap-3">
                                    <div className="bg-indigo-100 dark:bg-sky-600 h-8 w-8 rounded-full flex items-center justify-center"><span className="e-icons e-star-filled text-primary-600 dark:text-primary-400"></span></div>
                                    <div className="text-lg font-semibold text-gray-900 dark:text-white">How was your experience?</div>
                                </div>
                                    <p className="text-sm mt-4 text-gray-700 dark:text-gray-100">Let us know how our platform is working for you.Your feedback helps us enhance features, improve performance and provide a better experience!</p>
                                    <div className="flex justify-center mt-2" style={{minHeight:'58px'}}>
                                        <RatingComponent enableAnimation={false} showTooltip={true}
                                            emptyTemplate={(props: { index: any; }) => (
                                                <div className="mx-2">
                                                {(() => {
                                                    const index = props.index;
                                                    switch (index) {
                                                    case 0:
                                                        return (
                                                        <span className="e-avatar e-avatar-circle text-sm bg-red-100 text-gray-800 dark:bg-red-800 dark:text-white">1</span>
                                                        );
                                                    case 1:
                                                        return (
                                                        <span className="e-avatar e-avatar-circle text-sm bg-red-50 text-gray-800 dark:bg-red-900 dark:text-white">2</span>
                                                        );
                                                    case 2:
                                                        return (
                                                        <span className="e-avatar e-avatar-circle text-sm bg-orange-100 text-gray-800 dark:bg-orange-800 dark:text-white">3</span>
                                                        );
                                                    case 3:
                                                        return (
                                                        <span className="e-avatar e-avatar-circle text-sm bg-green-100 text-gray-800 dark:bg-green-800 dark:text-white">4</span>
                                                        );
                                                    case 4:
                                                        return (
                                                        <span className="e-avatar e-avatar-circle text-sm bg-green-300 text-gray-800 dark:bg-green-700 dark:text-white">5</span>
                                                        );
                                                    default:
                                                        return;
                                                    }
                                                })()}
                                                </div>
                                            )}
                                        ></RatingComponent>
                                    </div>
                                    <div className="mt-4">
                                        <ButtonComponent cssClass="e-primary e-block" type="submit">Submit</ButtonComponent>
                                    </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div className="pt-4" style={{minHeight: "36rem"}}>
                            <div className="mx-auto border p-4 rounded-3 bg-body" style={{ maxWidth: "384px" }}>
                                <div className="d-flex align-items-center">
                                    <div className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center" style={{width: '32px', height: '32px'}}>
                                        <span className="e-icons e-star-filled text-primary"></span>
                                    </div>
                                    <div className="fs-5 fw-semibold text-body ms-3">How was your experience?</div>
                                </div>
                                <p className="small text-body-secondary mt-3 mb-1">Let us know how our platform is working for you. Your feedback helps us enhance features, improve performance and provide a better experience!</p>
                                <div className="d-flex justify-content-center mt-2" style={{minHeight:'58px'}}>
                                    <RatingComponent enableAnimation={false} showTooltip={true}
                                        emptyTemplate={(props: { index: any }) => (
                                            <div className="mx-2">
                                                {(() => {
                                                    const index = props.index;
                                                    switch (index) {
                                                    case 0:
                                                        return (
                                                        <span className="e-avatar e-avatar-circle bg-danger-subtle text-danger-emphasis">1</span>
                                                        );
                                                    case 1:
                                                        return (
                                                        <span className="e-avatar e-avatar-circle bg-danger-subtle text-danger-emphasis">2</span>
                                                        );
                                                    case 2:
                                                        return (
                                                        <span className="e-avatar e-avatar-circle bg-warning-subtle text-warning-emphasis">3</span>
                                                        );
                                                    case 3:
                                                        return (
                                                        <span className="e-avatar e-avatar-circle bg-success-subtle text-success-emphasis">4</span>
                                                        );
                                                    case 4:
                                                        return (
                                                        <span className="e-avatar e-avatar-circle bg-success-subtle text-success-emphasis">5</span>
                                                        );
                                                    default:
                                                        return null;
                                                    }
                                                })()}
                                            </div>
                                        )}
                                    ></RatingComponent>
                                </div>
                                <div className="mt-3">
                                    <ButtonComponent cssClass="e-primary e-block" type="submit">Submit</ButtonComponent>
                                </div>
                            </div>
                        </div>
                   </section>
                );
        }
    };

    return getContent();
}
