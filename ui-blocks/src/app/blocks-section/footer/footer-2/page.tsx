'use client';

import { useEffect, useState } from "react";

export default function Footer2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'footer-2' && blockData.theme) {
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
                        <footer className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 xl:px-10 sm:px-6 px-4 py-6">
                            <p className="text-base text-gray-500 dark:text-gray-400">© 2024 ShopNezt. All rights reserved.</p>
                            <div className="flex gap-4">
                                <a href="javascript:void(0);" className="sf-icon-twitter text-2xl text-gray-500 dark:text-gray-400"></a>
                                <a href="javascript:void(0);" className="sf-icon-facebook text-2xl text-gray-500 dark:text-gray-400"></a>
                                <a href="javascript:void(0);" className="sf-icon-linkedin text-2xl text-gray-500 dark:text-gray-400"></a>
                            </div>
                        </footer>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <footer className="py-4 px-3 px-md-4 px-xl-5 d-flex flex-column-reverse flex-sm-row align-items-center justify-content-between gap-3">
                            <p className="text-body-secondary mb-0">© 2024 ShopNezt. All rights reserved.</p>
                            <div className="d-flex gap-3">
                                <a href="javascript:void(0);" className="sf-icon-twitter text-body-secondary fs-4 text-decoration-none"></a>
                                <a href="javascript:void(0);" className="sf-icon-facebook text-body-secondary fs-4 text-decoration-none"></a>
                                <a href="javascript:void(0);" className="sf-icon-linkedin text-body-secondary fs-4 text-decoration-none"></a>
                            </div>
                        </footer>
                    </section>
                );
        }
    };

    return getContent();
}
