'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Footer5() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'footer-5' && blockData.theme) {
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
                        <footer className="px-4 py-6 space-y-6 sm:px-6 xl:px-10">
                            <div className="flex flex-col justify-between gap-8 pb-4 xl:flex-row">
                                <div className="space-y-2 text-sm text-gray-900 dark:text-gray-50 xl:w-72">
                                    <div className="flex items-center gap-2.5 py-2">
                                        <Image src="/assets/images/common/brand-logos/png/shopnezt.png" width={28} height={28} alt="company logo" />
                                        <h2 className="font-semibold text-xl">ShopNezt</h2>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300">Our fashion portal offers styles that make you look good and feel great.</p>
                                </div>
                                <div className="grow grid grid-cols-2 gap-y-8 gap-x-1 sm:gap-x-8 sm:grid-cols-3 lg:grid-cols-5">
                                    <div>
                                        <h3 className="text-gray-500 dark:text-gray-400 font-semibold text-sm">Home</h3>
                                        <ul className="mt-3 space-y-2 sm:text-nowrap">
                                            <li><a href="javascript:void(0);" className="text-base py-1 font-medium text-primary-600 hover:underline dark:text-primary-400">About</a></li>
                                            <li><a href="javascript:void(0);" className="text-base py-1 font-medium text-primary-600 hover:underline dark:text-primary-400">Careers</a></li>
                                            <li><a href="javascript:void(0);" className="text-base py-1 font-medium text-primary-600 hover:underline dark:text-primary-400">Blogs</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-gray-500 dark:text-gray-400 font-semibold text-sm">Solutions</h3>
                                        <ul className="mt-3 space-y-2 sm:text-nowrap">
                                            <li><a href="javascript:void(0);" className="text-base py-1 font-medium text-primary-600 hover:underline dark:text-primary-400">Online store builder</a></li>
                                            <li><a href="javascript:void(0);" className="text-base py-1 font-medium text-primary-600 hover:underline dark:text-primary-400">Website builder</a></li>
                                            <li><a href="javascript:void(0);" className="text-base py-1 font-medium text-primary-600 hover:underline dark:text-primary-400">E-commerce website</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-gray-500 dark:text-gray-400 font-semibold text-sm">Support</h3>
                                        <ul className="mt-3 space-y-2 sm:text-nowrap">
                                            <li><a href="javascript:void(0);" className="text-base py-1 font-medium text-primary-600 hover:underline dark:text-primary-400">Help center</a></li>
                                            <li><a href="javascript:void(0);" className="text-base py-1 font-medium text-primary-600 hover:underline dark:text-primary-400">Hire a partner</a></li>
                                            <li><a href="javascript:void(0);" className="text-base py-1 font-medium text-primary-600 hover:underline dark:text-primary-400">ShopNezt community</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-gray-500 dark:text-gray-400 font-semibold text-sm">Resources</h3>
                                        <ul className="mt-3 space-y-2 sm:text-nowrap">
                                            <li><a href="javascript:void(0);" className="text-base py-1 font-medium text-primary-600 hover:underline dark:text-primary-400">What's new</a></li>
                                            <li><a href="javascript:void(0);" className="text-base py-1 font-medium text-primary-600 hover:underline dark:text-primary-400">Resource library</a></li>
                                            <li><a href="javascript:void(0);" className="text-base py-1 font-medium text-primary-600 hover:underline dark:text-primary-400">Events</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-gray-500 dark:text-gray-400 font-semibold text-sm">Company</h3>
                                        <ul className="mt-3 space-y-2 sm:text-nowrap">
                                            <li><a href="javascript:void(0);" className="text-base py-1 font-medium text-primary-600 hover:underline dark:text-primary-400">ShopNezt</a></li>
                                            <li><a href="javascript:void(0);" className="text-base py-1 font-medium text-primary-600 hover:underline dark:text-primary-400">FoodNezt</a></li>
                                            <li><a href="javascript:void(0);" className="text-base py-1 font-medium text-primary-600 hover:underline dark:text-primary-400">TravelNezt</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between gap-6 sm:flex-row lg:gap-7">
                                <div className="text-sm font-medium shrink-0 text-gray-700 dark:text-gray-300 space-y-4 lg:w-72">
                                    <h3 className="font-semibold text-gray-900 dark:text-gray-50">Get in Touch</h3>
                                    <ul className="space-y-4 sm:space-y-6">
                                        <li className="flex items-center space-x-2">
                                            <i className="e-icons e-location text-gray-500 dark:text-gray-400 text-base"></i>
                                            <span>1 E 2nd St, New York, NY 10003, USA</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <i className="sf-icon-mail-02 text-gray-500 dark:text-gray-400 text-base"></i>
                                            <a href="javascript:void(0);">contact&#64;shopnezt.com</a>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <i className="sf-icon-phone-01 text-gray-500 dark:text-gray-400 text-base"></i>
                                            <a href="javascript:void(0);">(123) 456-7890</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="grow rounded relative overflow-hidden" style={{ height: "315px" }}>
                                    <Image src="/assets/images/footer/contact-footer/map.png" layout="fill" objectFit="cover" alt="location" />
                                </div>
                            </div>
                            <div className="border-t py-4 flex flex-col-reverse md:flex-row justify-between items-center text-gray-500 gap-4 dark:border-gray-600 md:space-y-0">
                                <p className="text-gray-500 dark:text-gray-400">© 2024 ShopNezt. All rights reserved.</p>
                                <div className="flex gap-4">
                                    <a href="javascript:void(0);" className="sf-icon-twitter text-2xl text-gray-500 dark:text-gray-400"></a>
                                    <a href="javascript:void(0);" className="sf-icon-facebook text-2xl text-gray-500 dark:text-gray-400"></a>
                                    <a href="javascript:void(0);" className="sf-icon-linkedin text-2xl text-gray-500 dark:text-gray-400"></a>
                                </div>
                            </div>
                        </footer>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <footer className="px-3 py-4 px-sm-4 px-xl-5">
                            <div className="d-flex flex-column flex-xl-row justify-content-between pb-3 gap-4">
                                <div className="text-body col col-xl-3 pe-xl-4">
                                    <div className="d-flex align-items-center gap-2 mb-2">
                                        <Image src="/assets/images/common/brand-logos/png/shopnezt.png" width={30} height={30} alt="company logo" />
                                        <h5 className="fw-medium mb-0">ShopNezt</h5>
                                    </div>
                                    <p className="small mb-2">Our fashion portal offers styles that make you look good and feel great.</p>
                                </div>
                                <div className="row justify-content-lg-between flex-grow-1 g-0 gy-sm-2 gy-xl-0 row-gap-4 text-body-secondary">
                                    <div className="col-6 col-sm-4 col-lg-2 px-0">
                                        <p className="small fw-bold mb-2 pb-1">Home</p>
                                        <ul className="d-flex flex-column gap-2 list-unstyled mb-0">
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small">About</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small">Careers</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small">Blogs</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-sm-4 col-lg-2 px-0">
                                        <p className="small fw-bold mb-2 pb-1">Solutions</p>
                                        <ul className="d-flex flex-column gap-2 list-unstyled mb-0">
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small">Online store builder</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small">Website builder</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small">E-commerce website</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-sm-4 col-lg-2 px-0">
                                        <p className="small fw-bold mb-2 pb-1">Support</p>
                                        <ul className="d-flex flex-column gap-2 list-unstyled mb-0">
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small">Help center</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small">Hire a partner</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small">ShopNezt community</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-sm-4 col-lg-2 px-0">
                                        <p className="small fw-bold mb-2 pb-1">Resources</p>
                                        <ul className="d-flex flex-column gap-2 list-unstyled mb-0">
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small">What's new</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small">Resource library</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small">Events</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-sm-4 col-lg-2 px-0">
                                        <p className="small fw-bold mb-2 pb-1">Company</p>
                                        <ul className="d-flex flex-column gap-2 list-unstyled mb-0">
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small">ShopNezt</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small">FoodNezt</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small">TravelNezt</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-md-row justify-content-between gap-4 mt-4">
                                <div className="col-md-5 col-lg-4 col-xl-3">
                                    <p className="small fw-bold text-body">Get in Touch</p>
                                    <ul className="d-flex flex-column mb-0 gap-3 list-unstyled small fw-medium text-body-secondary gap-sm-4">
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="e-icons e-location fs-6"></i>
                                            <span>1 E 2nd St, New York, NY 10003, USA</span>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="sf-icon-mail-02 fs-6"></i>
                                            <a className="text-decoration-none text-body-secondary" href="javascript:void(0);">contact&#64;shopnezt.com</a>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <i className="sf-icon-phone-01 fs-6"></i>
                                            <a className="text-decoration-none text-body-secondary" href="javascript:void(0);">(123) 456-7890</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex-grow-1 rounded-1 position-relative overflow-hidden" style={{ height: "315px" }}>
                                    <Image src="/assets/images/footer/contact-footer/map.png" layout="fill" objectFit="cover" alt="location" />
                                </div>
                            </div>
                            <div className="border-top border-light-subtle py-3 d-flex flex-column-reverse gap-3 flex-md-row justify-content-between align-items-center mt-4">
                                <p className="mb-0 text-body-secondary">© 2024 ShopNezt. All rights reserved.</p>
                                <div className="d-flex gap-3">
                                    <a href="javascript:void(0);" className="sf-icon-twitter text-body-secondary fs-4 text-decoration-none"></a>
                                    <a href="javascript:void(0);" className="sf-icon-facebook text-body-secondary fs-4 text-decoration-none"></a>
                                    <a href="javascript:void(0);" className="sf-icon-linkedin text-body-secondary fs-4 text-decoration-none"></a>
                                </div>
                            </div>
                        </footer>
                    </section>
                );
        }
    };

    return getContent();
}
