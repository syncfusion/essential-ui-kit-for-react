'use client';

import { useEffect, useRef, useState } from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import styles from './page.module.css';

export default function Chat1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const textboxRef = useRef<TextBoxComponent | null>(null);

    const data: any[] = [
        {
            id: 1,
            name: "John",
            time: "8:57 AM",
            avatar: "",
            text: "Hi, I'm having trouble accessing the company VPN.",
            chat: "sender",
            open: false
        },
        {
            id: 2,
            name: "Mark Davis",
            time: "9:00 AM",
            avatar: "avatar-3.jpg",
            text: "Hello! I can help with that. Are you seeing any error messages?",
            chat: "receiver"
        },
        {
            id: 1,
            name: "John",
            time: "9:05 AM",
            avatar: "",
            text: "Yes, it says 'VPN connection failed. Authentication error.'",
            chat: "sender",
            open: false
        },
        {
            id: 2,
            name: "Mark Davis",
            time: "10:00 AM",
            avatar: "avatar-3.jpg",
            text: "Thanks for the details. Can you confirm if you've recently changed your network password?",
            chat: "receiver"
        },
        {
            id: 1,
            name: "John",
            time: "10:32 AM",
            avatar: "",
            text: "Yes, I changed it yesterday.",
            chat: "sender",
            open: true
        },
        {
            id: 2,
            name: "Mark Davis",
            time: "10:35 AM",
            avatar: "avatar-3.jpg",
            text: "That's likely the issue. The VPN might still be using the old password. Try updating your VPN credentials with the new password.",
            chat: "receiver"
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'chat-1' && blockData.theme) {
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
        }
        /* SB Code - End */
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section>
                        <div id={styles["chat-header"]} className="flex flex-col items-center max-w-4xl mx-auto pb-6 bg-white dark:bg-gray-900 rounded-xl overflow-hidden" style={{ maxHeight: "800px" }}>
                            <div className="w-full p-2">
                                <div className="flex items-center justify-between py-1 pl-2 sm:pl-4 pr-2">
                                    <div className="flex items-center">
                                        <span className="flex items-center gap-3">
                                            <div className="relative h-8">
                                                <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-3.jpg)" }}></span>
                                                <div className="w-3 h-3 rounded-full bg-green-700 dark:bg-green-500 absolute border border-white dark:border-black" style={{ bottom: "-2px", right: "-2px" }}></div>
                                            </div>
                                            <span className="text-base font-semibold text-gray-900 dark:text-white">Mark Davis</span>
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ButtonComponent cssClass="e-flat text-base leading-3 sm:block hidden" iconCss="e-icons e-search" type="button"></ButtonComponent>
                                        <div className="border-l h-6 border-gray-200 dark:border-gray-600 sm:block hidden"></div>
                                        <ButtonComponent cssClass="e-flat text-base leading-3 sm:block hidden" iconCss="sf-icon-phone-01" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-flat sm:block hidden" iconCss="e-icons e-video" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-flat" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center flex-col pt-7 pb-2 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                                <span className="e-badge e-badge-pill e-badge-secondary border border-gray-200 dark:border-gray-600 e-small">Wednesday, Sep 18th</span>
                                <ListViewComponent cssClass="!border-0 px-2 sm:px-4 py-4" dataSource={data} width="100%" height="100%"
                                    template={(data: any) => {
                                        const senderTemplate = (
                                            <div className="flex justify-end ml-auto gap-3 items-start w-4/5">
                                                <div className="flex flex-col gap-1 items-end">
                                                    <div className="py-2 px-3 rounded-lg rounded-se-none bg-gray-100 dark:bg-gray-700">
                                                        <div className="text-gray-900 dark:text-gray-50">{data.text}</div>
                                                    </div>
                                                    <div className="flex">
                                                        <p className="text-xs text-gray-500">{data.time}</p>
                                                        {data.open && <div className="sf-icon-double-check-01 ml-0.5 sm:ml-1 leading-4 text-base text-primary-600 dark:text-primary-400"></div>}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                        const receiverTemplate = (
                                            <div className="flex justify-start gap-3 items-start sm:w-4/5">
                                                {data.avatar && (
                                                    <div>
                                                        <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: `url(/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.avatar})` }}></span>
                                                    </div>
                                                )}
                                                <div className="flex flex-col gap-1">
                                                    <div className="py-2 px-3 rounded-lg rounded-ss-none bg-gray-50 dark:bg-gray-800">
                                                        <div className="text-gray-900 dark:text-gray-50">{data.text}</div>
                                                    </div>
                                                    <p className="text-xs text-gray-500">{data.name} <span className="ms-1.5">{data.time}</span></p>
                                                </div>
                                            </div>
                                        );
                                        return <div>{data.chat !== "receiver" ? senderTemplate : receiverTemplate}</div>;
                                    }}
                                ></ListViewComponent>
                            </div>
                            <div className="e-bigger w-full text-base px-4 sm:px-6">
                                <TextBoxComponent ref={textboxRef} type="text" placeholder="Enter a message" created={() => textboxRef.current?.addIcon("append", "sf-icon-navigation-right-up border-0")}></TextBoxComponent>
                            </div>
                        </div>
                    </section>
                );                
            case 'bootstrap5':
                return (
                    <section>
                        <div id={styles["chat-header"]} className="container overflow-hidden p-0 pb-4 rounded-4 bg-body" style={{ maxHeight: "800px", maxWidth: "900px" }}>
                            <div className="w-100 p-2">
                                <div className="d-flex align-items-center justify-content-between py-1 ps-2 ps-sm-3 pe-2">
                                    <div className="d-flex align-items-center">
                                        <span className="d-flex align-items-center gap-3">
                                            <div className="position-relative" style={{ height: "32px" }}>
                                                <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: "url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-3.jpg)" }}></span>
                                                <div className="position-absolute bg-success border border-light rounded-circle p-1" style={{ bottom: "-1px", right: "-1px" }}></div>
                                            </div>
                                            <span className="h6 mb-0 text-body">Mark Davis</span>
                                        </span>
                                    </div>
                                    <div className="d-flex align-items-center gap-3">
                                        <ButtonComponent cssClass="e-flat d-none d-sm-block" iconCss="e-icons e-search" type="button"></ButtonComponent>
                                        <div className="border-start border-secondary-subtle d-none d-sm-block" style={{ height: "24px" }}></div>
                                        <ButtonComponent cssClass="e-flat fs-6 d-none d-sm-block" iconCss="sf-icon-phone-01" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-flat d-none d-sm-block" iconCss="e-icons e-video" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-flat" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                
                            <div className="d-flex flex-column align-items-center pt-4 border-top bg-body">
                                <span className="e-badge e-badge-pill border px-2">Wednesday, Sep 18th</span>
                                <ListViewComponent cssClass="border-0 px-2 px-sm-3 pb-4 pt-3" dataSource={data} width="100%" height="100%"
                                    template={(data: any) => {
                                        const senderTemplate = (
                                            <div className="d-flex justify-content-end ms-auto align-items-start w-75">
                                                <div className="d-flex flex-column gap-1 align-items-end">
                                                    <div className="py-2 px-3 bg-body-secondary" style={{ borderRadius: "6px 0px 6px 6px" }}>
                                                        <div className="text-body">{data.text}</div>
                                                    </div>
                                                    <div className="d-flex">
                                                        <p className="text-body-secondary small m-0">{data.time}</p>
                                                        {data.open && <div className="sf-icon-double-check-01 text-primary fs-6 ms-1"></div>}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                        const receiverTemplate = (
                                            <div className="d-flex justify-content-start gap-2 align-items-start me-sm-3">
                                                {data.avatar && (
                                                    <div>
                                                        <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: `url(/react/essential-ui-kit/blocks/assets/images/common/avatar/${data.avatar})` }}></span>
                                                    </div>
                                                )}
                                                <div className="d-flex flex-column gap-1">
                                                    <div className="py-2 px-3 rounded bg-body-tertiary" style={{ borderRadius: "0px 6px 6px 6px" }}>
                                                        <div className="text-body">{data.text}</div>
                                                    </div>
                                                    <p className="small text-body-secondary m-0">{data.name} <span className="ms-1">{data.time}</span></p>
                                                </div>
                                            </div>
                                        );
                                        return <div>{data.chat !== "receiver" ? senderTemplate : receiverTemplate}</div>;
                                    }}
                                ></ListViewComponent>
                            </div>
                            <div className="e-bigger mx-3 mx-sm-4">
                                <TextBoxComponent ref={textboxRef} type="text" placeholder="Enter a message" created={() => textboxRef.current?.addIcon("append", "sf-icon-navigation-right-up border-0")}></TextBoxComponent>
                            </div>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}