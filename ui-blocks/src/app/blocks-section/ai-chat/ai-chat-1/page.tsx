'use client';

import { useEffect, useState } from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import styles from './page.module.css';

export default function AIChat1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const promptData: any[] = [
        {
            id: "1",
            text: "Suggest 3 websites about ethical hacking",
            category: "sender"
        },
        {
            id: "2",
            category: "reply",
            isList: true,
            resources: [
                {
                    type: "header",
                    text: "Here are four websites where you can improve your ethical hacking skills:"
                },
                {
                    type: "resource",
                    text: "Cybrary (cybrary.it):",
                    description: " Cybrary offers a wide range of free and paid courses on cybersecurity, including ethical hacking. There are beginner to advanced level courses that cover various aspects of cybersecurity, including penetration testing and threat intelligence."
                },
                {
                    type: "resource",
                    text: "Hack The Box (hackthebox.eu): ",
                    description: " Hack The Box is an online platform that allows you to practice penetration testing and improve your hacking skills through challenges and labs. It's a great way to learn by doing, and you can interact with a large community of ethical hackers."
                },
                {
                    type: "resource",
                    text: "Offensive Security (offensive-security.com): ",
                    description: " Known for their OSCP (Offensive Security Certified Professional) certification, Offensive Security provides high-quality training for ethical hackers. Their courses are comprehensive and widely recognized in the industry."
                }
            ]
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-chat-1' && blockData.theme) {
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
                    <section>
                        <div id={styles["chat-header"]} className="flex flex-col items-center max-w-4xl mx-auto pb-6 rounded-xl overflow-hidden bg-white dark:bg-gray-900" style={{ maxHeight: '850px', minHeight: '36rem', maxWidth: '850px' }}>
                            <div className="flex items-center w-full flex-col px-1 sm:px-4 py-2">
                                <ListViewComponent className="!border-0 py-4" dataSource={promptData} width="100%" height="100%"
                                    template={(data: any) =>
                                        data.category !== 'reply' ? (
                                            <div className="flex justify-end ml-auto sm:mr-3 gap-3 items-start w-full sm:w-3/4">
                                                <div className="flex flex-col gap-1 items-end">
                                                    <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-800">
                                                        <div className="text-sm text-gray-900 dark:text-white">{data.text}</div>
                                                        <div className="flex gap-1">
                                                            <span className="e-avatar e-avatar-circle e-avatar-small e-icons e-edit !text-base !text-gray-700 dark:!text-white bg-transparent"></span>
                                                            <span className="e-avatar e-avatar-circle e-avatar-small e-icons e-copy !text-base !text-gray-700 dark:!text-white bg-transparent"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex justify-start gap-3 items-start w-full pr-3" style={{ maxWidth: '700px' }}>
                                                <div>
                                                    <span className="e-avatar e-avatar-circle e-avatar-small !text-xl !text-white dark:!text-black e-icons e-ai-chat bg-primary-600 dark:bg-primary-400"></span>
                                                </div>
                                                <div className="flex flex-col gap-1 pt-1 pb-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                                                    {data.isList && (
                                                        <div>
                                                            <ListViewComponent className="!border-0 pl-1 pr-2" dataSource={data.resources} fields={{ text: 'text' }} showIcon={false}
                                                                template={(resource: any) =>
                                                                    resource.type === 'header' ? (
                                                                        <p className="text-sm text-gray-900 dark:text-white mb-2">{resource.text}</p>
                                                                    ) : (
                                                                        <div>
                                                                            <div className="text-sm inline-flex font-medium text-gray-900 dark:text-white">{resource.text}</div>
                                                                            <div className="text-sm contents text-gray-900 dark:text-white">{resource.description}</div>
                                                                        </div>
                                                                    )
                                                                }
                                                            ></ListViewComponent>
                                                            <div className="flex justify-between px-3">
                                                                <div className="flex gap-1 sm:pr-0">
                                                                    <ButtonComponent className="e-flat text-base !text-gray-500 dark:!text-gray-200" iconCss="e-icons e-thumbs-up" content=" " type="button"></ButtonComponent>
                                                                    <ButtonComponent className="e-flat text-base !text-gray-500 dark:!text-gray-200" iconCss="e-icons e-thumbs-down" content=" " type="button"></ButtonComponent>
                                                                    <ButtonComponent className="e-flat text-base !text-gray-500 dark:!text-gray-200" iconCss="e-icons e-edit" content=" " type="button"></ButtonComponent>
                                                                </div>
                                                                <div className="flex gap-1">
                                                                    <ButtonComponent className="e-flat text-base !text-gray-500 dark:!text-gray-200" iconCss="e-icons e-copy" content=" " type="button"></ButtonComponent>
                                                                    <ButtonComponent className="e-flat text-base !text-gray-500 dark:!text-gray-200" iconCss="e-icons sf-icon-share-arrow-02" content=" " type="button"></ButtonComponent>
                                                                    <ButtonComponent className="e-flat text-base !text-gray-500 dark:!text-gray-200" iconCss="e-icons e-align-bottom" content=" " type="button"></ButtonComponent>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    }
                                ></ListViewComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section>
                        <div id={styles["chat-header"]} className="d-flex flex-column align-items-center mx-auto pb-4 rounded overflow-hidden bg-body" style={{ maxHeight: '850px', minHeight: '36rem', maxWidth: '850px' }}>
                            <div className="d-flex align-items-center w-100 flex-column px-1 px-sm-3 py-2">
                                <ListViewComponent className="border-0 py-4" dataSource={promptData} width="100%" height="100%" template={(data: any)=>
                                    data.category !== 'reply' ? (
                                    <div className="d-flex justify-content-end ms-auto me-sm-3 gap-3 align-items-start w-100 w-sm-75">
                                        <div className="d-flex flex-column gap-1 align-items-end">
                                            <div className="p-3 rounded bg-primary-subtle">
                                                <div className="fs-6 text-body pb-2">{data.text}</div>
                                                <div className="d-flex gap-1">
                                                    <span className="e-avatar e-avatar-circle e-avatar-small e-icons e-edit fs-6 text-secondary bg-transparent"></span>
                                                    <span className="e-avatar e-avatar-circle e-avatar-small e-icons e-copy fs-6 text-secondary bg-transparent"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ) : (
                                    <div className="d-flex justify-content-start gap-3 align-items-start w-100 pe-3" style={{ maxWidth: '700px' }}>
                                        <div>
                                            <span className="e-avatar e-avatar-circle e-avatar-small fs-5 text-white e-icons e-ai-chat bg-primary"></span>
                                        </div>
                                        <div className="d-flex flex-column gap-1 pt-2 pb-3 rounded bg-light-subtle">
                                            {data.isList && (
                                            <div>
                                                <ListViewComponent className="border-0 px-2" dataSource={data.resources} fields={{ text: 'text' }} showIcon={false} 
                                                    template={(resource: any)=>
                                                        resource.type === 'header' ? (
                                                        <p className="fs-6 text-body mb-2">{resource.text}</p>
                                                        ) : (
                                                        <div>
                                                            <div className="fs-6 d-inline-flex fw-medium text-body">{resource.text}</div>
                                                            <div className="fs-6 d-inline text-body">{resource.description}</div>
                                                        </div>
                                                        )
                                                    }
                                                ></ListViewComponent>
                                                <div className="d-flex justify-content-between px-3">
                                                    <div className="d-flex gap-1 pe-sm-0">
                                                        <ButtonComponent className="e-flat fs-6" iconCss="e-icons e-thumbs-up" content=" " type="button"></ButtonComponent>
                                                        <ButtonComponent className="e-flat fs-6" iconCss="e-icons e-thumbs-down" content=" " type="button"></ButtonComponent>
                                                        <ButtonComponent className="e-flat fs-6" iconCss="e-icons e-edit" content=" " type="button"></ButtonComponent>
                                                    </div>
                                                    <div className="d-flex gap-1">
                                                        <ButtonComponent className="e-flat fs-6" iconCss="e-icons e-copy" content=" " type="button"></ButtonComponent>
                                                        <ButtonComponent className="e-flat fs-6" iconCss="e-icons sf-icon-share-arrow-02" content=" " type="button"></ButtonComponent>
                                                        <ButtonComponent className="e-flat fs-6" iconCss="e-icons e-align-bottom" content=" " type="button"></ButtonComponent>
                                                    </div>
                                                </div>
                                            </div>
                                            )}
                                        </div>
                                    </div>
                                    )}
                                ></ListViewComponent>
                            </div>
                        </div>
                    </section>
                );
        };
    };

    return getContent();
}
