'use client';

import { useEffect, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import Image from "next/image";

export default function Footer3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'footer-3' && blockData.theme) {
                    setTheme(blockData.theme);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
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
                        <footer className="xl:px-10 sm:px-6 px-4 py-4">
                            <div className="flex lg:flex-row flex-col gap-6 justify-between pb-8 sm:pt-4">
                                <div>
                                    <p className="text-lg sm:text-2xl font-semibold text-gray-900 dark:text-gray-50">Join our newsletter</p>
                                    <p className="text-sm sm:text-base mt-2 text-gray-500 dark:text-gray-400">Never miss out on the latest trends, offers, and expert advice</p>
                                </div>
                                <div className="flex sm:flex-row flex-col items-center e-bigger gap-4 lg:w-96 md:w-4/5">
                                    <TextBoxComponent className="e-bigger w-full" type="text" placeholder="Enter your email" floatLabelType="Never"></TextBoxComponent>
                                    <ButtonComponent className="w-full sm:w-28 text-base e-primary" type="button" content="Subscribe"></ButtonComponent>
                                </div>
                            </div>
                            <div className="flex sm:flex-row flex-col gap-3 justify-between items-center pt-4 sm:py-7 border-t border-gray-200 dark:border-gray-600">
                                <div className="flex items-center gap-2.5">
                                    <Image src="/assets/images/common/brand-logos/png/shopnezt.png" width={28} height={28} alt="company logo" />
                                    <p className="font-semibold text-lg text-gray-900 dark:text-gray-50">ShopNezt</p>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400">© 2024 ShopNezt. All rights reserved.</p>
                            </div>
                        </footer>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <footer className="p-3 px-sm-4 px-xl-5 d-flex flex-column gap-4 gap-sm-3">
                            <div className="d-flex flex-lg-row flex-column gap-4 justify-content-between py-sm-3">
                                <div>
                                    <h4 className="mb-2 fw-bold text-body">Join our newsletter</h4>
                                    <p className="mb-0 text-body-secondary">Never miss out on the latest trends, offers, and expert advice</p>
                                </div>
                                <div className="e-bigger d-flex flex-column flex-sm-row align-items-lg-center gap-3 col-md-8 col-lg-4">
                                    <TextBoxComponent className="flex-grow-1" type="text" floatLabelType="Never" placeholder="Enter your email"></TextBoxComponent>
                                    <ButtonComponent className="flex-grow-1 flex-sm-grow-0 e-primary" content="Subscribe" type="button"></ButtonComponent>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2 border-top border-light-subtle pt-3 mt-2 mt-sm-0 pb-sm-3">
                                <div className="d-flex align-items-center gap-2 mb-1 mb-sm-0">
                                    <Image src="/assets/images/common/brand-logos/png/shopnezt.png" width={30} height={30} alt="company logo" />
                                    <h5 className="mb-0 text-body">ShopNezt</h5>
                                </div>
                                <p className="mb-0 text-body-secondary">© 2024 ShopNezt. All rights reserved.</p>
                            </div>
                        </footer>
                    </section>
                );
        }
    };

    return getContent();
}
