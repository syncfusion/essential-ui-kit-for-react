'use client';

import { useEffect, useState } from "react";

export default function Footer1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'footer-1' && blockData.theme) {
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
                        <footer className="p-4 flex flex-col gap-6 sm:flex-row flex-wrap justify-between sm:items-center sm:px-6 xl:px-10">
                            <div className="flex items-center gap-2.5 pt-2 sm:pb-2 text-gray-900 dark:text-gray-50">
                                <img src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/png/shopnezt.png" width={28} height={28} alt="company logo" />
                                <span className="text-xl font-semibold">ShopNezt</span>
                            </div>
                            <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-3">
                                <a href="#" className="text-base lg:text-sm font-medium py-1 text-primary-600 hover:underline dark:text-primary-400">Privacy Policy</a>
                                <div className="border self-stretch my-1 hidden dark:border-gray-600 sm:block"></div>
                                <a href="#" className="text-base lg:text-sm font-medium py-1 text-primary-600 hover:underline dark:text-primary-400">Cookie Policy</a>
                                <div className="border self-stretch my-1 hidden dark:border-gray-600 sm:block"></div>
                                <a href="#" className="text-base lg:text-sm font-medium py-1 text-primary-600 hover:underline dark:text-primary-400">Terms of Service</a>
                            </div>
                            <div className="text-gray-500 dark:text-gray-400">© 2024 ShopNezt. All rights reserved.</div>
                        </footer>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <footer className="p-3 px-sm-4 px-lg-5 d-flex flex-column gap-3 gap-sm-4 flex-sm-row flex-wrap justify-content-between align-items-sm-center">
                            <div className="d-flex align-items-center gap-2">
                                <img src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/png/shopnezt.png" width={30} height={30} alt="company logo" />
                                <h5 className="mb-0 text-body">ShopNezt</h5>
                            </div>
                            <div className="d-flex flex-column align-items-start justify-content-center gap-3 gap-sm-2 flex-sm-row">
                                <a href="#" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small px-sm-2">Privacy Policy</a>
                                <div className="border align-self-stretch border-light-subtle d-none d-sm-block"></div>
                                <a href="#" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small">Cookie Policy</a>
                                <div className="border align-self-stretch border-light-subtle d-none d-sm-block"></div>
                                <a href="#" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small px-sm-2">Terms of Service</a>
                            </div>
                            <p className="text-body-secondary mt-2 mt-sm-0 mb-0">© 2024 ShopNezt. All rights reserved.</p>
                        </footer>
                    </section>
                );
        }
    };

    return getContent();
}
