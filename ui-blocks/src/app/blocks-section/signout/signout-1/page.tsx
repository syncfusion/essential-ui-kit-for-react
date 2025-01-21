'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function SignOut1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');

    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'signout-1' && blockData.theme) {
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
                    <section className="bg-gray-50 dark:bg-gray-950">
                        <div className="min-h-screen py-12">
                            <div className="flex items-center justify-center">
                                <Image className="mr-2" src="/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                <h2 className="text-center text-xl font-semibold text-gray-900 dark:text-white">Company Name</h2>
                            </div>
                            <div className="flex items-center justify-center pt-20">
                                <div className="w-full max-w-md bg-content-white rounded-lg p-6">
                                    <div>
                                        <h2 className="text-2xl font-semibold text-center mb-2 text-gray-900 dark:text-white">You have signed out!</h2>
                                        <p className="text-md text-center text-gray-700 dark:text-gray-300">Redirecting in 5 seconds</p>
                                    </div>
                                    <span className="flex items-center justify-center gap-2 mt-7">
                                        <p className="text-center text-base text-gray-900 dark:text-white">Go to</p>
                                        <a href="javascript:void(0);" className="text-primary-600 dark:text-primary-400 font-medium text-base p-0">Sign in</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="d-flex justify-content-center bg-body min-vh-100">
                        <div className="max-w-md bg-body rounded-lg p-4 py-5">
                            <div className="d-flex justify-content-center align-items-center mb-5">
                                <Image className="me-2" src="/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                <h2 className="text-center text-body fs-5 fw-bold mb-0">Company Name</h2>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center pt-5">
                                <h2 className="text-center fs-4 text-body fw-bold mb-2">You have signed out!</h2>
                                <p className="text-center text-light-emphasis m-0">Redirecting in 5 seconds</p>
                                <div className="d-flex align-items-center justify-content-center gap-1 mt-4">
                                    <p className="text-body mb-0">Go to</p>
                                    <a href="javascript:void(0);" className="text-primary fs-6 p-0 text-decoration-none fw-medium">Sign in</a>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
