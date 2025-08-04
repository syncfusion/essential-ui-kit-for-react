'use client';

import { useEffect, useState } from "react";
import { RatingComponent, TextAreaComponent } from "@syncfusion/ej2-react-inputs";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default function Rating15() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'rating-15' && blockData.theme) {
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
                            <div className="mx-auto w-full p-6 mt-4 sm:!rounded-lg sm:!border rounded-none border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-800" style={{ maxWidth: "570px" }}>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Leave us a review</h4>
                                <p className="text-sm mt-3 text-gray-700 dark:text-gray-100">Would you mind taking a moment to rate your satisfaction with your service?</p>
                                <div className="py-5">
                                    <div style={{ minHeight: "100px" }}>
                                        <RatingComponent itemsCount={5} enableAnimation={false} enableSingleSelection={false} showTooltip={true}
                                            emptyTemplate={(props: { index: number }) => {
                                                let avatar: any = null;
                                                switch (props.index) {
                                                    case 0:
                                                        avatar = (
                                                            <div className="flex flex-col items-start text-sm gap-3 mr-1.5 sm:mr-11">
                                                                <img className="h-12 w-12 object-contain" src="/react/essential-ui-kit/blocks/assets/images/rating/customer-satisfaction/poor.png" alt="poor" />
                                                                <p className="sm:text-sm text-xs font-medium ml-2 text-gray-500 dark:text-gray-400">Poor</p>
                                                            </div>
                                                        );
                                                        break;
                                                    case 1:
                                                        avatar = (
                                                            <div className="flex flex-col items-center text-sm gap-3 mr-1.5 sm:mr-11">
                                                                <img className="h-12 w-12 object-contain" src="/react/essential-ui-kit/blocks/assets/images/rating/customer-satisfaction/unhappy.png" alt="unhappy" />
                                                                <p className="sm:text-sm text-xs font-medium text-gray-500 dark:text-gray-400">Unhappy</p>
                                                            </div>
                                                        );
                                                        break;
                                                    case 2:
                                                        avatar = (
                                                            <div className="flex flex-col items-center text-sm gap-3 mr-1.5 sm:mr-11">
                                                                <img className="h-12 w-12 object-contain" src="/react/essential-ui-kit/blocks/assets/images/rating/customer-satisfaction/average.png" alt="average" />
                                                                <p className="sm:text-sm text-xs font-medium text-gray-500 dark:text-gray-400">Average</p>
                                                            </div>
                                                        );
                                                        break;
                                                    case 3:
                                                        avatar = (
                                                            <div className="flex flex-col items-center text-sm gap-3 mr-1.5 sm:mr-11">
                                                                <img className="h-12 w-12 object-contain" src="/react/essential-ui-kit/blocks/assets/images/rating/customer-satisfaction/good.png" alt="good" />
                                                                <p className="sm:text-sm text-xs font-medium text-gray-500 dark:text-gray-400">Good</p>
                                                            </div>
                                                        );
                                                        break;
                                                    case 4:
                                                        avatar = (
                                                            <div className="flex flex-col items-center text-sm gap-3">
                                                                <img className="h-12 w-12 object-contain" src="/react/essential-ui-kit/blocks/assets/images/rating/customer-satisfaction/excellent.png" alt="excellent" />
                                                                <p className="sm:text-sm text-xs font-medium text-gray-500 dark:text-gray-400">Excellent</p>
                                                            </div>
                                                        );
                                                        break;
                                                }
                                                return <div className="w-full min-h-[80px]">{avatar}</div>;
                                            }}
                                            tooltipTemplate={(item: any) => {
                                                switch (item.value) {
                                                    case 1:
                                                        return <span>Poor</span>;
                                                    case 2:
                                                        return <span>Unhappy</span>;
                                                    case 3:
                                                        return <span>Average</span>;
                                                    case 4:
                                                        return <span>Good</span>;
                                                    case 5:
                                                        return <span>Excellent</span>;
                                                    default:
                                                        return null;
                                                }
                                            }}
                                        ></RatingComponent>

                                    </div>
                                    <TextAreaComponent placeholder="How did you feel using our service?" resizeMode="None" rows={6} style={{ height: '95px' }}></TextAreaComponent>
                                    <div className="flex justify-end mt-4">
                                        <ButtonComponent cssClass="e-primary" content="Share review" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div className="pt-4" style={{ minHeight: "36rem" }}>
                            <div className="mx-auto w-100 p-4 mt-3 border rounded-3 bg-body text-body" style={{ maxWidth: "570px" }}>
                                <h4 className="fw-bold text-body fs-6 mb-0">Leave us a review</h4>
                                <p className="small mb-0 text-body-secondary mt-2 pt-1">Would you mind taking a moment to rate your satisfaction with your service?</p>
                                <div className="py-4">
                                    <div style={{ minHeight: "100px" }}>
                                        <RatingComponent itemsCount={5} enableAnimation={false} enableSingleSelection={false} showTooltip={true}
                                            emptyTemplate={(props: { index: number }) => {
                                                let avatar: any = null;
                                                switch (props.index) {
                                                    case 0:
                                                        avatar = (
                                                            <div className="d-flex flex-column align-items-center fs-6 gap-2 me-sm-5">
                                                                <img className="img-fluid" src="/react/essential-ui-kit/blocks/assets/images/rating/customer-satisfaction/poor.png" alt="poor" style={{ height: '3rem', width: '3rem' }} />
                                                                <p className="small fw-medium text-body-secondary mb-0">Poor</p>
                                                            </div>
                                                        );
                                                        break;
                                                    case 1:
                                                        avatar = (
                                                            <div className="d-flex flex-column align-items-center fs-6 gap-2 me-sm-5">
                                                                <img className="img-fluid" src="/react/essential-ui-kit/blocks/assets/images/rating/customer-satisfaction/unhappy.png" alt="unhappy" style={{ height: '3rem', width: '3rem' }} />
                                                                <p className="small fw-medium text-body-secondary mb-0">Unhappy</p>
                                                            </div>
                                                        );
                                                        break;
                                                    case 2:
                                                        avatar = (
                                                            <div className="d-flex flex-column align-items-center fs-6 gap-2 me-sm-5">
                                                                <img className="img-fluid" src="/react/essential-ui-kit/blocks/assets/images/rating/customer-satisfaction/average.png" alt="average" style={{ height: '3rem', width: '3rem' }} />
                                                                <p className="small fw-medium text-body-secondary mb-0">Average</p>
                                                            </div>
                                                        );
                                                        break;
                                                    case 3:
                                                        avatar = (
                                                            <div className="d-flex flex-column align-items-center fs-6 gap-2 me-sm-5">
                                                                <img className="img-fluid" src="/react/essential-ui-kit/blocks/assets/images/rating/customer-satisfaction/good.png" alt="good" style={{ height: '3rem', width: '3rem' }} />
                                                                <p className="small fw-medium text-body-secondary mb-0">Good</p>
                                                            </div>
                                                        );
                                                        break;
                                                    case 4:
                                                        avatar = (
                                                            <div className="d-flex flex-column align-items-center fs-6 gap-2">
                                                                <img className="img-fluid" src="/react/essential-ui-kit/blocks/assets/images/rating/customer-satisfaction/excellent.png" alt="excellent" style={{ height: '3rem', width: '3rem' }} />
                                                                <p className="small fw-medium text-body-secondary mb-0">Excellent</p>
                                                            </div>
                                                        );
                                                        break;
                                                }
                                                return <div className="w-100" style={{ minHeight: '80px' }}>{avatar}</div>;
                                            }}
                                            tooltipTemplate={(item: any) => {
                                                switch (item.value) {
                                                    case 1:
                                                        return <span>Poor</span>;
                                                    case 2:
                                                        return <span>Unhappy</span>;
                                                    case 3:
                                                        return <span>Average</span>;
                                                    case 4:
                                                        return <span>Good</span>;
                                                    case 5:
                                                        return <span>Excellent</span>;
                                                    default:
                                                        return null;
                                                }
                                            }}
                                        ></RatingComponent>
                                    </div>
                                </div>
                                <TextAreaComponent placeholder="How did you feel using our service?" resizeMode="None" rows={6} style={{ height: '95px' }}></TextAreaComponent>
                                <div className="d-flex justify-content-end mt-3">
                                    <ButtonComponent cssClass="e-primary" content="Share review" type="button"></ButtonComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
