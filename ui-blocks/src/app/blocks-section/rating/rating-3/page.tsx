'use client';

import { useEffect, useState } from 'react';
import { RatingComponent } from '@syncfusion/ej2-react-inputs';
import { ChipListComponent, ChipsDirective, ChipDirective } from '@syncfusion/ej2-react-buttons';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export default function Rating3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'rating-3' && blockData.theme) {
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
                            <div className="mx-auto w-full p-6 mt-4 sm:!rounded-lg sm:!border rounded-none max-w-xl border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-800 text-center">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2 items-center">
                                        <span className="e-avatar e-avatar-circle shrink-0">
                                            <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg" alt="profile picture" />
                                        </span>
                                        <div className="text-start">
                                            <div className="font-medium xl:text-sm text-base text-gray-900 dark:text-white">Frank Moore</div>
                                            <div className="text-xs text-gray-700 dark:text-gray-100">Joined on October 2001</div>
                                        </div>
                                    </div>
                                    <ChipListComponent key={"rating-3-tw"}>
                                        <ChipsDirective>
                                            <ChipDirective text="Best for small teams" cssClass='e-info !rounded-xl !text-[10px]'></ChipDirective>
                                        </ChipsDirective>
                                    </ChipListComponent>
                                </div>
                                <div className="flex flex-col items-start gap-0 sm:gap-2 sm:flex-row sm:items-center mt-1 sm:mt-2">
                                        <div style={{width:'168px', minHeight:'53px'}}>
                                            <RatingComponent value={4}
                                                emptyTemplate={
                                                    () => <span className="sf-icon-star-filled-01 text-2xl text-gray-300 dark:text-gray-500"></span>
                                                }
                                                fullTemplate={
                                                    () => <span className="sf-icon-star-filled-01 text-2xl text-amber-300"></span>
                                                }
                                            ></RatingComponent>
                                        </div>
                                    <p className="text-base font-medium sm:!mt-0 text-gray-900 dark:text-white flex-start">Highly efficient and user-friendly!</p>
                                </div>
                                <div className="text-start">
                                    <p className="text-sm mt-3 sm:mt-0 text-gray-500 dark:text-gray-400">Reviewed on Jul 1, 2024</p>
                                    <p className="text-sm mt-4 sm:mt-6 text-gray-700 dark:text-gray-100">This SaaS platform has completely streamlined our workflow. The setup was quick, and the interface is incredibly user-friendly. Within hours, we had everything integrated, and automation was running smoothly across our team.</p>
                                    <p className="text-sm mt-6 mb-3 text-gray-700 dark:text-gray-100">Would highly recommend it for small to mid-sized teams looking for a scalable solution!</p>
                                    <a href="#" className="text-primary-600 dark:text-primary-400 font-medium text-sm">Read more</a>
                                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-4">19 people found this helpful</p>
                                    <div className="flex gap-4 items-center mt-4">
                                        <ButtonComponent cssClass="e-outline" type="button">Helpful</ButtonComponent>
                                        <ButtonComponent cssClass="e-primary e-flat" type="button">Report</ButtonComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div className="pt-3" style={{ minHeight: "36.7rem" }}>
                            <div className="mx-auto w-100 p-4 border text-center rounded-3 bg-body" style={{ maxWidth: "576px"}}>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-2">
                                    <span className="e-avatar e-avatar-circle flex-shrink-0">
                                        <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg" alt="profile picture" />
                                    </span>
                                    <div className="text-start">
                                        <div className="fw-medium fs-6 text-body">Frank Moore</div>
                                        <div className="text-body-secondary small">Joined on October 2001</div>
                                    </div>
                                </div>
                                <ChipListComponent key={"rating-3-bs"}>
                                    <ChipsDirective>
                                        <ChipDirective cssClass="e-info rounded-pill" text="Best for small teams"></ChipDirective>
                                    </ChipsDirective>
                                </ChipListComponent>
                            </div>
                            <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-0 gap-sm-2 mt-1 mt-sm-2">
                                   <div style={{width:'168px', minHeight:'53px'}}>
                                         <RatingComponent value={4}
                                            emptyTemplate={
                                                () => <span className="sf-icon-star-02 fs-4 text-body-secondary"></span>
                                            } 
                                            fullTemplate={
                                                () => <span className="sf-icon-star-filled-01 fs-4 text-warning"></span>
                                            }
                                        ></RatingComponent>
                                   </div>
                                    <p className="fw-medium mb-1">Highly efficient and user-friendly!</p>
                            </div>
                            <div className="text-start">
                                <p className="text-body-secondary small mt-sm-0 mt-2 mb-0">Reviewed on Jul 1, 2024</p>
                                <p className="small text-body-secondary mt-4 mb-0">This SaaS platform has completely streamlined our workflow. The setup was quick, and the interface is incredibly user-friendly. Within hours, we had everything integrated, and automation was running smoothly across our team.</p>
                                <p className="small text-body-secondary mt-4">Would highly recommend it for small to mid-sized teams looking for a scalable solution!</p>
                                <a href="#" className="text-primary fw-medium small text-decoration-none mt-2">Read more</a>
                                <p className="text-body-secondary small mt-3">19 people found this helpful</p>
                                <div className="d-flex align-items-center gap-3 mt-3">
                                    <ButtonComponent cssClass="e-outline" type="button">Helpful</ButtonComponent>
                                    <ButtonComponent cssClass="e-primary e-flat" type="button">Report</ButtonComponent>
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
