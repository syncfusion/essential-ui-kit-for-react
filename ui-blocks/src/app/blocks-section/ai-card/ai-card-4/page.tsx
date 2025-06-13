'use client';

import { useEffect, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default function AICard4() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-card-4' && blockData.theme) {
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
                            <div className="grid sm:grid-cols-2 gap-6 lg:gap-5 xl:grid-cols-4">
                                <div className="e-card rounded-lg py-3 shadow-md">
                                    <div className="e-card-image px-3 overflow-hidden !min-h-0">
                                        <img className="w-full object-cover h-44 lg:h-28 rounded-lg" src="/react/essential-ui-kit/blocks/assets/images/ai/card/information-display-card/3d-animation.jpg" alt="3D animation guidelines" />
                                    </div>
                                    <div className="e-card-stacked">
                                        <div className="e-card-header !pt-3 !pb-1 !px-3">
                                            <div className="e-card-header-caption">
                                                <h2 className="text-xs font-medium text-gray-900 dark:text-white">3D animation guidelines</h2>
                                            </div>
                                        </div>
                                        <div className="e-card-content !px-3 !pb-2">
                                            <p className="text-xs text-gray-700 dark:text-gray-300 !line-clamp-3">Animation should be direct and purposeful, meaning they only last as long as necessary to convey the intended message or interaction. Overuse or unnecessary complexity can distract users and reduce clarity.</p>
                                        </div>
                                        <div className="e-card-actions !flex !justify-between !px-3 !pb-1">
                                            <div className="flex items-center">
                                                <div className="flex items-center -space-x-3 mr-1">
                                                    <span className="e-avatar e-avatar-xsmall e-avatar-circle z-20" style={{ backgroundImage: 'url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-11.jpg)' }}></span>
                                                    <span className="e-avatar e-avatar-xsmall e-avatar-circle z-30" style={{ backgroundImage: 'url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg)' }}></span>
                                                </div>
                                                <p className="text-xs font-medium text-gray-700 dark:text-gray-300">Edited 24 hrs ago</p>
                                            </div>
                                            <ButtonComponent cssClass="e-flat e-round" iconCss="e-icons e-bookmark" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                                <div className="e-card rounded-lg py-3 shadow-md">
                                    <div className="e-card-image px-3 overflow-hidden !min-h-0">
                                        <img className="w-full object-cover h-44 lg:h-28 rounded-lg" src="/react/essential-ui-kit/blocks/assets/images/ai/card/information-display-card/brand-guidelines.jpg" alt="brand guidelines" />
                                    </div>
                                    <div className="e-card-stacked">
                                        <div className="e-card-header !pt-3 !pb-1 !px-3">
                                            <div className="e-card-header-caption">
                                                <h2 className="text-xs font-medium text-gray-900 dark:text-white">Brand guidelines</h2>
                                            </div>
                                        </div>
                                        <div className="e-card-content !px-3 !pb-2">
                                            <p className="text-xs text-gray-700 dark:text-gray-300 !line-clamp-3">Brand guidelines for animation are a set of rules and standards designed to ensure consistency and coherence in how animations are used across all brand-related content. These guidelines help maintain a unified visual identity.</p>
                                        </div>
                                        <div className="e-card-actions !flex !justify-between !px-3 !pb-1">
                                            <div className="flex items-center">
                                                <div className="flex items-center -space-x-3 mr-1">
                                                    <span className="e-avatar e-avatar-xsmall e-avatar-circle z-20" style={{ backgroundImage: 'url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-11.jpg)' }}></span>
                                                    <span className="e-avatar e-avatar-xsmall e-avatar-circle z-30" style={{ backgroundImage: 'url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg)' }}></span>
                                                </div>
                                                <p className="text-xs font-medium text-gray-700 dark:text-gray-300">Edited 24 hrs ago</p>
                                            </div>
                                            <ButtonComponent cssClass="e-flat e-round" iconCss="e-icons e-bookmark" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                                <div className="e-card rounded-lg py-3 shadow-md">
                                    <div className="e-card-image px-3 overflow-hidden !min-h-0">
                                        <img className="w-full object-cover h-44 lg:h-28 rounded-lg" src="/react/essential-ui-kit/blocks/assets/images/ai/card/information-display-card/designers-hiring.jpg" alt="designers hiring" />
                                    </div>
                                    <div className="e-card-stacked">
                                        <div className="e-card-header !pt-3 !pb-1 !px-3">
                                            <div className="e-card-header-caption">
                                                <h2 className="text-xs font-medium text-gray-900 dark:text-white">Designers hiring posts</h2>
                                            </div>
                                        </div>
                                        <div className="e-card-content !px-3 !pb-2">
                                            <p className="text-xs text-gray-700 dark:text-gray-300 !line-clamp-3">Hiring posts for designers are announcements created by companies to attract talent by showcasing job roles, responsibilities, and company culture. These posts often include visuals and clear messaging to appeal to creative professionals.</p>
                                        </div>
                                        <div className="e-card-actions !flex !justify-between !px-3 !pb-1">
                                            <div className="flex items-center">
                                                <div className="flex items-center -space-x-3 mr-1">
                                                    <span className="e-avatar e-avatar-xsmall e-avatar-circle z-20" style={{ backgroundImage: 'url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-11.jpg)' }}></span>
                                                    <span className="e-avatar e-avatar-xsmall e-avatar-circle z-30" style={{ backgroundImage: 'url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg)' }}></span>
                                                </div>
                                                <p className="text-xs font-medium text-gray-700 dark:text-gray-300">Edited 24 hrs ago</p>
                                            </div>
                                            <ButtonComponent cssClass="e-flat e-round" iconCss="e-icons e-bookmark" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                                <div className="e-card rounded-lg py-3 shadow-md">
                                    <div className="e-card-image px-3 overflow-hidden !min-h-0">
                                        <img className="w-full object-cover h-44 lg:h-28 rounded-lg" src="/react/essential-ui-kit/blocks/assets/images/ai/card/information-display-card/motion-design.jpg" alt="motion design guidelines" />
                                    </div>
                                    <div className="e-card-stacked">
                                        <div className="e-card-header !pt-3 !pb-1 !px-3">
                                            <div className="e-card-header-caption">
                                                <h2 className="text-xs font-medium text-gray-900 dark:text-white">Motion design guidelines</h2>
                                            </div>
                                        </div>
                                        <div className="e-card-content !px-3 !pb-2">
                                            <p className="text-xs text-gray-700 dark:text-gray-300 !line-clamp-3">Motion design guidelines are a set of standards that outline the principles and practices for creating animations that enhance user experience, communicate effectively, and align with the brand's visual language.</p>
                                        </div>
                                        <div className="e-card-actions !flex !justify-between !px-3 !pb-1">
                                            <div className="flex items-center">
                                                <div className="flex items-center -space-x-3 mr-1">
                                                    <span className="e-avatar e-avatar-xsmall e-avatar-circle z-20" style={{ backgroundImage: 'url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-11.jpg)' }}></span>
                                                    <span className="e-avatar e-avatar-xsmall e-avatar-circle z-30" style={{ backgroundImage: 'url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg)' }}></span>
                                                </div>
                                                <p className="text-xs font-medium text-gray-700 dark:text-gray-300">Edited 24 hrs ago</p>
                                            </div>
                                            <ButtonComponent cssClass="e-flat e-round" iconCss="e-icons e-bookmark" type="button"></ButtonComponent>
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
                                    <div className="e-card shadow-lg rounded-3 py-3 d-flex justify-content-start flex-column">
                                        <div className="e-card-image px-3 overflow-hidden min-vh-0">
                                            <img className="w-100 object-fit-cover rounded-3" style={{ height: '130px' }} src="/react/essential-ui-kit/blocks/assets/images/ai/card/information-display-card/3d-animation.jpg" alt="3D animation guidelines" />
                                        </div>
                                        <div className="e-card-stacked">
                                            <div className="e-card-header px-3 pt-3">
                                                <div className="e-card-header-caption">
                                                    <h2 className="small fw-medium text-body mb-0">3D animation guidelines</h2>
                                                </div>
                                            </div>
                                            <div className="e-card-content px-3 pb-2 pt-1">
                                                <p className="small text-body-secondary mb-0" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>Animation should be direct and purposeful, meaning they only last as long as necessary to convey the intended message or interaction. Overuse or unnecessary complexity can distract users and reduce clarity.</p>
                                            </div>
                                            <div className="e-card-actions pb-0">
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex">
                                                        <div className="d-flex align-items-center position-relative">
                                                            <span className="e-avatar e-avatar-circle e-avatar-xsmall position-absolute" style={{ backgroundImage: 'url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-11.jpg)' }}></span>
                                                            <span className="e-avatar e-avatar-circle e-avatar-xsmall position-absolute ms-3" style={{ backgroundImage: 'url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg)' }}></span>
                                                        </div>
                                                        <p className="small fw-medium text-body mb-0 ms-5">Edited 24 hrs ago</p>
                                                    </div>
                                                    <ButtonComponent className="e-icons e-round e-bookmark" cssClass="e-flat" type="button"></ButtonComponent>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-xl-3">
                                    <div className="e-card shadow-lg rounded-3 py-3 d-flex justify-content-start flex-column">
                                        <div className="e-card-image px-3 overflow-hidden min-vh-0">
                                            <img className="w-100 object-fit-cover rounded-3" style={{ height: '130px' }} src="/react/essential-ui-kit/blocks/assets/images/ai/card/information-display-card/brand-guidelines.jpg" alt="brand guidelines" />
                                        </div>
                                        <div className="e-card-stacked">
                                            <div className="e-card-header px-3 pt-3">
                                                <div className="e-card-header-caption">
                                                    <h2 className="small fw-medium text-body mb-0">Brand guidelines</h2>
                                                </div>
                                            </div>
                                            <div className="e-card-content px-3 pb-2 pt-1">
                                                <p className="small text-body-secondary mb-0" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>Brand guidelines for animation are a set of rules and standards designed to ensure consistency and coherence in how animations are used across all brand-related content. These guidelines help maintain a unified visual identity.</p>
                                            </div>
                                            <div className="e-card-actions pb-0">
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex">
                                                        <div className="d-flex align-items-center position-relative">
                                                            <span className="e-avatar e-avatar-circle e-avatar-xsmall position-absolute" style={{ backgroundImage: 'url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-11.jpg)' }}></span>
                                                            <span className="e-avatar e-avatar-circle e-avatar-xsmall position-absolute ms-3" style={{ backgroundImage: 'url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg)' }}></span>
                                                        </div>
                                                        <p className="small fw-medium text-body mb-0 ms-5">Edited 24 hrs ago</p>
                                                    </div>
                                                    <ButtonComponent className="e-icons e-round e-bookmark" cssClass="e-flat" type="button"></ButtonComponent>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-xl-3">
                                    <div className="e-card shadow-lg rounded-3 py-3 d-flex justify-content-start flex-column">
                                        <div className="e-card-image px-3 overflow-hidden min-vh-0">
                                            <img className="w-100 object-fit-cover rounded-3" style={{ height: '130px' }} src="/react/essential-ui-kit/blocks/assets/images/ai/card/information-display-card/designers-hiring.jpg" alt="designers hiring" />
                                        </div>
                                        <div className="e-card-stacked">
                                            <div className="e-card-header px-3 pt-3">
                                                <div className="e-card-header-caption">
                                                    <h2 className="small fw-medium text-body mb-0">Designers hiring posts</h2>
                                                </div>
                                            </div>
                                            <div className="e-card-content px-3 pb-2 pt-1">
                                                <p className="small text-body-secondary mb-0" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>Hiring posts for designers are announcements created by companies to attract talent by showcasing job roles, responsibilities, and company culture. These posts often include visuals and clear messaging to appeal to creative professionals.</p>
                                            </div>
                                            <div className="e-card-actions pb-0">
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex">
                                                        <div className="d-flex align-items-center position-relative">
                                                            <span className="e-avatar e-avatar-circle e-avatar-xsmall position-absolute" style={{ backgroundImage: 'url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-11.jpg)' }}></span>
                                                            <span className="e-avatar e-avatar-circle e-avatar-xsmall position-absolute ms-3" style={{ backgroundImage: 'url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg)' }}></span>
                                                        </div>
                                                        <p className="small fw-medium text-body mb-0 ms-5">Edited 24 hrs ago</p>
                                                    </div>
                                                    <ButtonComponent className="e-icons e-round e-bookmark" cssClass="e-flat" type="button"></ButtonComponent>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-xl-3">
                                    <div className="e-card shadow-lg rounded-3 py-3 d-flex justify-content-start flex-column">
                                        <div className="e-card-image px-3 overflow-hidden min-vh-0">
                                            <img className="w-100 object-fit-cover rounded-3" style={{ height: '130px' }} src="/react/essential-ui-kit/blocks/assets/images/ai/card/information-display-card/motion-design.jpg" alt="motion design guidelines" />
                                        </div>
                                        <div className="e-card-stacked">
                                            <div className="e-card-header px-3 pt-3">
                                                <div className="e-card-header-caption">
                                                    <h2 className="small fw-medium text-body mb-0">Motion design guidelines</h2>
                                                </div>
                                            </div>
                                            <div className="e-card-content px-3 pb-2 pt-1">
                                                <p className="small text-body-secondary mb-0" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                                                    Motion design guidelines are a set of standards that outline the principles and practices for creating animations that enhance user experience, communicate effectively, and align with the brand's visual language.
                                                </p>
                                            </div>
                                            <div className="e-card-actions pb-0">
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex">
                                                        <div className="d-flex align-items-center position-relative">
                                                            <span className="e-avatar e-avatar-circle e-avatar-xsmall position-absolute" style={{ backgroundImage: 'url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-11.jpg)' }}></span>
                                                            <span className="e-avatar e-avatar-circle e-avatar-xsmall position-absolute ms-3" style={{ backgroundImage: 'url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-2.jpg)' }}></span>
                                                        </div>
                                                        <p className="small fw-medium text-body mb-0 ms-5">Edited 24 hrs ago</p>
                                                    </div>
                                                    <ButtonComponent className="e-icons e-round e-bookmark" cssClass="e-flat" type="button"></ButtonComponent>
                                                </div>
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
