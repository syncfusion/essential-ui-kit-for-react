'use client';

import { useEffect, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

export default function AICard1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-card-1' && blockData.theme) {
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
                        <div className="w-full lg:max-w-4xl px-4 sm:px-12 lg:px-28 lg:w-11/12 mx-auto py-20" style={{ minHeight: '36rem' }}>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="e-card rounded-lg border-0 justify-start shadow-md">
                                    <div className="e-card-header !px-4 !pt-4">
                                        <div className="flex items-center">
                                            <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: 'url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-5.jpg)' }}></span>
                                        </div>
                                        <div className="e-card-header-caption !pl-3">
                                            <div className="e-card-header-title">
                                                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Bob Johnson</p>
                                            </div>
                                            <div className="e-card-sub-title">
                                                <p className="text-xs text-gray-700 dark:text-gray-300 truncate">bobjohnson&#64;example.com</p>
                                            </div>
                                        </div>
                                        <span className="e-badge e-badge-success e-bigger">Free</span>
                                    </div>
                                    <div className="e-card-actions !px-4 !pt-3 !pb-4">
                                        <ButtonComponent className="w-full" content="Upgrade to Pro" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="e-card rounded-lg border-0 justify-start shadow-md">
                                    <div className="e-card-header !px-4 !pt-4">
                                        <div className="flex items-center">
                                            <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: 'url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-5.jpg)' }}></span>
                                        </div>
                                        <div className="e-card-header-caption !pl-3">
                                            <div className="e-card-header-title">
                                                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Bob Johnson</p>
                                            </div>
                                            <div className="e-card-sub-title">
                                                <p className="text-xs text-gray-700 dark:text-gray-300 truncate">bobjohnson&#64;example.com</p>
                                            </div>
                                        </div>
                                        <span className="e-badge e-badge-primary e-bigger">Starter</span>
                                    </div>
                                    <div className="e-card-actions !px-4 !pt-3 !pb-4">
                                        <ButtonComponent className="w-full" content="Upgrade to Pro" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div className="w-100 mx-auto px-3 px-sm-5 py-5" style={{ maxWidth: '50rem', minHeight: '36rem' }}>
                            <div className="d-flex flex-column flex-sm-row gap-4">
                                <div className="e-card shadow-lg rounded-3 border-0">
                                    <div className="e-card-header px-4 pt-4">
                                        <div className="d-flex align-items-center">
                                            <span className="e-avatar e-avatar-circle" style={{ backgroundImage: 'url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-5.jpg)' }}></span>
                                        </div>
                                        <div className="e-card-header-caption ps-2">
                                            <div className="e-card-header-title">
                                                <p className="small fw-medium text-body text-truncate mb-0">Bob Johnson</p>
                                            </div>
                                            <div className="e-card-sub-title">
                                                <p className="small text-body-secondary text-truncate mb-0">bobjohnson&#64;example.com</p>
                                            </div>
                                        </div>
                                        <span className="e-badge e-badge-success">Free</span>
                                    </div>
                                    <div className="e-card-actions px-4 py-4">
                                        <ButtonComponent className="w-100" cssClass="e-outline" type="button" content="Upgrade to Pro"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="e-card shadow-lg rounded-3 border-0">
                                    <div className="e-card-header px-4 pt-4">
                                        <div className="d-flex align-items-center">
                                            <span className="e-avatar e-avatar-circle" style={{ backgroundImage: 'url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-5.jpg)' }}></span>
                                        </div>
                                        <div className="e-card-header-caption ps-2">
                                            <div className="e-card-header-title">
                                                <p className="small fw-medium text-body text-truncate mb-0">Bob Johnson</p>
                                            </div>
                                            <div className="e-card-sub-title">
                                                <p className="small text-body-secondary text-truncate mb-0">bobjohnson@example.com</p>
                                            </div>
                                        </div>
                                        <span className="e-badge e-badge-primary">Starter</span>
                                    </div>
                                    <div className="e-card-actions px-4 py-4">
                                        <ButtonComponent className="w-100" cssClass="e-outline" type="button" content="Upgrade to Pro"></ButtonComponent>
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
