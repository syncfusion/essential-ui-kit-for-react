'use client';

import { useEffect, useState } from 'react';
import { RatingComponent } from '@syncfusion/ej2-react-inputs';

export default function Rating6() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [experienceLevel, setExperienceLevel] = useState("");

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'rating-6' && blockData.theme) {
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
                            <div className="mx-auto w-full sm:max-w-xs border-0 mt-3 pt-6 sm:!rounded-lg sm:!border rounded-none border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-800 text-center">
                                <h3 className="font-semibold text-base text-gray-900 dark:text-white">Rate your experience</h3>
                                <p className="text-sm mt-3 px-8 sm:px-6 text-gray-700 dark:text-gray-100 mb-0">We'd love to hear from you! How is your experience with our platform?</p>
                                <div className="flex mt-1 mb-3 items-center justify-center pb-3 sm:pb-0" style={{minHeight:'84px'}}>
                                    <RatingComponent itemsCount={3} enableAnimation={false} enableSingleSelection={true}
                                        emptyTemplate={(props: any) => (
                                            <div className='flex mt-1 mb-2'>
                                                {props.index === 0 && ( <span className={`rounded-xl p-2 ${experienceLevel === "unhappy" ? "bg-green-50 dark:bg-green-900 shadow-lg" : ""}`} onClick={() => setExperienceLevel("unhappy")}>
                                                        <img className="h-10 w-10" src="/react/essential-ui-kit/blocks/assets/images/rating/experience-rating/unhappy.png" alt="unhappy" />
                                                    </span>
                                                )}
                                                {props.index === 1 && (
                                                    <span className={`rounded-xl p-2 text-xl ${experienceLevel === "neutral" ? "!bg-cyan-50 dark:!bg-cyan-900 shadow-lg" : ""}`} onClick={() => setExperienceLevel("neutral")}>
                                                        <img className="h-10 w-10" src="/react/essential-ui-kit/blocks/assets/images/rating/experience-rating/neutral.png" alt="neutral" />
                                                    </span>
                                                )}
                                                {props.index === 2 && (
                                                    <span className={`rounded-xl p-2 ${experienceLevel === "happy" ? "bg-orange-50 dark:bg-orange-900 shadow-lg" : ""}`} onClick={() => setExperienceLevel("happy")}>
                                                        <img className="h-10 w-10" src="/react/essential-ui-kit/blocks/assets/images/rating/experience-rating/happy.png" alt="happy" />
                                                    </span>
                                                )}
                                            </div>
 
                                        )}
                                        tooltipTemplate={(props: { value: number }) => (
                                            <>
                                                {
                                                    props.value === 1 ? <p className="m-0">UnHappy</p> :
                                                        props.value === 2 ? <p className="m-0">Neutral</p> :
                                                            props.value === 3 ? <p className="m-0">Happy</p> :
                                                                null
                                                }
                                            </>
                                        )}
                                    ></RatingComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div className="pt-4" style={{ minHeight: "36rem" }}>
                            <div className="mx-auto w-100 mt-3 border rounded-3 text-center bg-body" style={{ maxWidth: "360px" }}>
                                <h3 className="fw-semibold fs-6 text-body mt-4">Rate your experience</h3>
                                <p className="small mt-3 mb-0 text-body-secondary" style={{ width: "316px" }}>We'd love to hear from you! How is your experience with our platform?</p>
                                <div className="d-flex justify-content-center align-items-center mb-3 mt-1" style={{minHeight:'84px'}}>
                                     <RatingComponent itemsCount={3} enableAnimation={false} enableSingleSelection={true}
                                        emptyTemplate={(props:any) => (
                                            <div className="d-flex">
                                                {props.index === 0 && (
                                                    <span className={`rounded-3 p-2 ${experienceLevel === 'unhappy' ? 'bg-success-subtle shadow' : ''}`} onClick={() => setExperienceLevel('unhappy')}>
                                                        <img style={{ height: '40px', width: '40px' }} src="/react/essential-ui-kit/blocks/assets/images/rating/experience-rating/unhappy.png" alt="unhappy" />
                                                    </span>
                                                )}
                                                {props.index === 1 && (
                                                    <span className={`rounded-3 p-2 ${experienceLevel === 'neutral' ? 'bg-info-subtle shadow' : ''}`} onClick={() => setExperienceLevel('neutral')}>
                                                        <img style={{ height: '40px', width: '40px' }} src="/react/essential-ui-kit/blocks/assets/images/rating/experience-rating/neutral.png" alt="neutral" />
                                                    </span>
                                                )}
                                                {props.index === 2 && (
                                                    <span className={`rounded-3 p-2 ${experienceLevel === 'happy' ? 'bg-warning-subtle shadow' : ''}`} onClick={() => setExperienceLevel('happy')}>
                                                        <img style={{ height: '40px', width: '40px' }} src="/react/essential-ui-kit/blocks/assets/images/rating/experience-rating/happy.png" alt="happy" />
                                                    </span>
                                                )}
                                            </div>
                                            )}
                                        tooltipTemplate={(props: { value: number }) => (
                                            <>
                                               {
                                                    props.value === 1 ? <p className="m-0">UnHappy</p> :
                                                        props.value === 2 ? <p className="m-0">Neutral</p> :
                                                            props.value === 3 ? <p className="m-0">Happy</p> :
                                                                null
                                                }
                                            </>
                                        )}
                                    ></RatingComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
