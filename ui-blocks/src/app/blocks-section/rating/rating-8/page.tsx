'use client';

import { useEffect, useState } from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { RatingComponent } from '@syncfusion/ej2-react-inputs';

export default function Rating8() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'rating-8' && blockData.theme) {
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
                            <div className="w-full max-w-sm mx-auto mt-4 p-4 rounded-lg border bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-500 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="relative w-12 h-12">
                                            <span className="e-avatar e-avatar-circle e-avatar-large">
                                                <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-11.jpg" alt="olivia adams" />
                                            </span>
                                            <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800 bg-green-500 text-white text-xs">
                                                <span className="e-icons e-check"></span>
                                            </span>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-gray-900 dark:text-white font-medium pl-2">Olivia Adams
                                                <span className="font-medium text-base text-gray-500 dark:text-gray-400 ml-1"><span>&#64;</span>oliviaadams</span>
                                            </p>
                                            <div className="flex items-center text-sm font-medium mt-1" style={{ minHeight:'50px',width:'238px' }}>
                                                <RatingComponent value={4.5} showLabel={true} enableAnimation={false} 
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
                                        </div>
                                    </div>
                                    <ButtonComponent cssClass="e-flat" iconCss="e-icons e-bookmark" type="button"></ButtonComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div className="pt-4" style={{ minHeight: "36rem" }}>
                            <div className="mx-auto mt-4 p-3 border rounded-3 bg-body" style={{ maxWidth: "364px" }}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="position-relative" style={{ width: "48px", height: "48px" }}>
                                            <span className="e-avatar e-avatar-circle e-avatar-large">
                                                <img src="/react/essential-ui-kit/blocks//assets/images/common/avatar/avatar-11.jpg" alt="olivia adams" />
                                            </span>
                                            <span className="position-absolute bottom-0 end-0 border border-white bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '16px', height: '16px', fontSize: '10px' }}>
                                                <span className="e-icons e-check"></span>
                                            </span>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <p className="mb-1 fw-medium text-body ms-2 small">Olivia Adams
                                                <span className="fw-normal text-body-secondary ms-1">
                                                    <span>&#64;</span>oliviaadams
                                                </span>
                                            </p>
                                            <div className="d-flex align-items-center small fw-medium" style={{minHeight:'50px',width:'238px'}}>
                                                <RatingComponent value={4.5} showLabel={true} enableAnimation={false} 
                                                    emptyTemplate={
                                                        () => <span className="sf-icon-star-02 fs-5 text-body-secondary"></span>
                                                    } 
                                                    fullTemplate={
                                                        () => <span className="sf-icon-star-filled-01 fs-5 text-warning"></span>
                                                    }
                                                    labelTemplate={
                                                        (value: any)=><p className="text-body mb-1 fw-medium">{value?.value} / 5</p>
                                                    }
                                                ></RatingComponent>
                                            </div>
                                        </div>
                                    </div>
                                    <ButtonComponent cssClass="e-flat e-large" iconCss="e-icons e-bookmark" type="button" />
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
