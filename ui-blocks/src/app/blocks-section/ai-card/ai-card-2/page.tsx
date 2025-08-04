'use client';

import { useEffect, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default function AICard2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-card-2' && blockData.theme) {
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
                    <section className="bg-gray-50 dark:bg-gray-900">
                        <div className="px-4 sm:px-6 lg:px-36 py-20" style={{ minHeight: '36rem' }}>
                            <div className="grid sm:grid-cols-2 gap-6 xl:grid-cols-4 grow">
                                <div className="e-card border-0 rounded-lg gap-4 shadow-md">
                                    <div className="e-card-image">
                                        <img className="h-56 w-full object-cover rounded-lg" src="/react/essential-ui-kit/blocks/assets/images/ai/card/visual-profile-card/michigan-avenue.jpg" alt="michigan avenue" />
                                    </div>
                                    <div className="e-card-stacked !flex !justify-between !flex-row px-4">
                                        <div className="pb-4">
                                            <div className="e-card-header !px-0 !pt-0 !pb-2">
                                                <div className="e-card-header-caption">
                                                    <h2 className="text-base font-medium text-gray-900 dark:text-white line-clamp-1">Michigan Avenue</h2>
                                                </div>
                                            </div>
                                            <div className="e-card-content !px-0 !pb-0">
                                                <p className="text-sm text-gray-700 dark:text-gray-300">Chicago</p>
                                            </div>
                                        </div>
                                        <div className="e-card-actions !px-0 !pt-0 !flex items-center">
                                            <ButtonComponent cssClass="e-flat" iconCss="e-icons e-more-vertical-1 !text-base" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                                <div className="e-card border-0 rounded-lg gap-4 shadow-md">
                                    <div className="e-card-image">
                                        <img className="h-56 w-full object-cover rounded-lg" src="/react/essential-ui-kit/blocks/assets/images/ai/card/visual-profile-card/burj-khalifa.jpg" alt="burj khalifa" />
                                    </div>
                                    <div className="e-card-stacked !flex !justify-between !flex-row px-4">
                                        <div className="pb-4">
                                            <div className="e-card-header !px-0 !pt-0 !pb-2">
                                                <div className="e-card-header-caption">
                                                    <h2 className="text-base font-medium text-gray-900 dark:text-white line-clamp-1">Burj Khalifa</h2>
                                                </div>
                                            </div>
                                            <div className="e-card-content !px-0 !pb-0">
                                                <p className="text-sm text-gray-700 dark:text-gray-300">Dubai</p>
                                            </div>
                                        </div>
                                        <div className="e-card-actions !px-0 !pt-0 !flex items-center">
                                            <ButtonComponent cssClass="e-flat" iconCss="e-icons e-more-vertical-1 !text-base" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                                <div className="e-card border-0 rounded-lg gap-4 shadow-md">
                                    <div className="e-card-image">
                                        <img className="h-56 w-full object-cover rounded-lg" src="/react/essential-ui-kit/blocks/assets/images/ai/card/visual-profile-card/gooderham.jpg" alt="gooderham" />
                                    </div>
                                    <div className="e-card-stacked !flex !justify-between !flex-row px-4">
                                        <div className="pb-4">
                                            <div className="e-card-header !px-0 !pt-0 !pb-2">
                                                <div className="e-card-header-caption">
                                                    <h2 className="text-base font-medium text-gray-900 dark:text-white line-clamp-1">Gooderham</h2>
                                                </div>
                                            </div>
                                            <div className="e-card-content !px-0 !pb-0">
                                                <p className="text-sm text-gray-700 dark:text-gray-300">Toronto</p>
                                            </div>
                                        </div>
                                        <div className="e-card-actions !px-0 !pt-0 !flex items-center">
                                            <ButtonComponent cssClass="e-flat" iconCss="e-icons e-more-vertical-1 !text-base" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                                <div className="e-card border-0 rounded-lg gap-4 shadow-md">
                                    <div className="e-card-image">
                                        <img className="h-56 w-full object-cover rounded-lg" src="/react/essential-ui-kit/blocks/assets/images/ai/card/visual-profile-card/dubai-marina.jpg" alt="dubai marina" />
                                    </div>
                                    <div className="e-card-stacked !flex !justify-between !flex-row px-4">
                                        <div className="pb-4">
                                            <div className="e-card-header !px-0 !pt-0 !pb-2">
                                                <div className="e-card-header-caption">
                                                    <h2 className="text-base font-medium text-gray-900 dark:text-white line-clamp-1">Dubai Marina</h2>
                                                </div>
                                            </div>
                                            <div className="e-card-content !px-0 !pb-0">
                                                <p className="text-sm text-gray-700 dark:text-gray-300">Dubai</p>
                                            </div>
                                        </div>
                                        <div className="e-card-actions !px-0 !pt-0 !flex items-center">
                                            <ButtonComponent cssClass="e-flat" iconCss="e-icons e-more-vertical-1 !text-base" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div className="mx-auto px-3 px-sm-4 py-5" style={{ minHeight: '36rem', maxWidth: '70rem' }}>
                            <div className="row g-4 mx-lg-2">
                                <div className="col-12 col-sm-6 col-xl-3">
                                    <div className="e-card border-0 rounded-4 shadow d-flex flex-column gap-3">
                                        <div className="e-card-image">
                                            <img className="w-100 rounded-4" src="/react/essential-ui-kit/blocks/assets/images/ai/card/visual-profile-card/michigan-avenue.jpg" alt="michigan avenue" style={{ height: '14rem', objectFit: 'cover' }} />
                                        </div>
                                        <div className="e-card-stacked d-flex justify-content-between flex-row px-3">
                                            <div className="pb-3">
                                                <div className="e-card-header px-0 pt-0">
                                                    <div className="e-card-header-caption">
                                                        <h2 className="h6 fw-medium text-body mb-0" style={{ display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" }}>Michigan Avenue</h2>
                                                    </div>
                                                </div>
                                                <div className="e-card-content pb-0 px-0 pt-2">
                                                    <p className="text-body-secondary mb-0">Chicago</p>
                                                </div>
                                            </div>
                                            <div className="e-card-actions px-0 pt-0 d-flex align-items-center">
                                                <ButtonComponent className="py-2" cssClass="e-flat" iconCss="e-icons e-more-vertical-1 fs-6" type="button"></ButtonComponent>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-xl-3">
                                    <div className="e-card border-0 rounded-4 shadow d-flex flex-column gap-3">
                                        <div className="e-card-image">
                                            <img className="w-100 rounded-4" src="/react/essential-ui-kit/blocks/assets/images/ai/card/visual-profile-card/burj-khalifa.jpg" alt="burj khalifa" style={{ height: '14rem', objectFit: 'cover' }} />
                                        </div>
                                        <div className="e-card-stacked d-flex justify-content-between flex-row px-3">
                                            <div className="pb-3">
                                                <div className="e-card-header px-0 pt-0">
                                                    <div className="e-card-header-caption">
                                                        <h2 className="h6 fw-medium text-body mb-0" style={{ display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" }}>Burj Khalifa</h2>
                                                    </div>
                                                </div>
                                                <div className="e-card-content pb-0 px-0 pt-2">
                                                    <p className="text-body-secondary mb-0">Dubai</p>
                                                </div>
                                            </div>
                                            <div className="e-card-actions px-0 pt-0 d-flex align-items-center">
                                                <ButtonComponent className="py-2" cssClass="e-flat" iconCss="e-icons e-more-vertical-1 fs-6" type="button"></ButtonComponent>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-xl-3">
                                    <div className="e-card border-0 rounded-4 shadow d-flex flex-column gap-3">
                                        <div className="e-card-image">
                                            <img className="w-100 rounded-4" src="/react/essential-ui-kit/blocks/assets/images/ai/card/visual-profile-card/gooderham.jpg" alt="gooderham" style={{ height: '14rem', objectFit: 'cover' }} />
                                        </div>
                                        <div className="e-card-stacked d-flex justify-content-between flex-row px-3">
                                            <div className="pb-3">
                                                <div className="e-card-header px-0 pt-0">
                                                    <div className="e-card-header-caption">
                                                        <h2 className="h6 fw-medium text-body mb-0" style={{ display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" }}>Gooderham</h2>
                                                    </div>
                                                </div>
                                                <div className="e-card-content pb-0 px-0 pt-2">
                                                    <p className="text-body-secondary mb-0">Toronto</p>
                                                </div>
                                            </div>
                                            <div className="e-card-actions px-0 pt-0 d-flex align-items-center">
                                                <ButtonComponent className="py-2" cssClass="e-flat" iconCss="e-icons e-more-vertical-1 fs-6" type="button"></ButtonComponent>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-xl-3">
                                    <div className="e-card border-0 rounded-4 shadow d-flex flex-column gap-3">
                                        <div className="e-card-image">
                                            <img className="w-100 rounded-4" src="/react/essential-ui-kit/blocks/assets/images/ai/card/visual-profile-card/dubai-marina.jpg" alt="dubai marina" style={{ height: '14rem', objectFit: 'cover' }} />
                                        </div>
                                        <div className="e-card-stacked d-flex justify-content-between flex-row px-3">
                                            <div className="pb-3">
                                                <div className="e-card-header px-0 pt-0">
                                                    <div className="e-card-header-caption">
                                                        <h2 className="h6 fw-medium text-body mb-0" style={{ display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" }}>Dubai Marina</h2>
                                                    </div>
                                                </div>
                                                <div className="e-card-content pb-0 px-0 pt-2">
                                                    <p className="text-body-secondary mb-0">Dubai</p>
                                                </div>
                                            </div>
                                            <div className="e-card-actions px-0 pt-0 d-flex align-items-center">
                                                <ButtonComponent className="py-2" cssClass="e-flat" iconCss="e-icons e-more-vertical-1 fs-6" type="button"></ButtonComponent>
                                            </div>
                                        </div>
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
