'use client';

import { useEffect, useState } from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import styles from './page.module.css';

export default function AIChat2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const promptData: any[] = [
        {
            id: 1,
            name: 'You',
            time: '20m',
            text: 'Make a description about this picture',
            category: 'sender'
        },
        {
            id: 2,
            category: 'reply',
            isList: true,
            resources: [
                {
                    text: 'Visual AI Chat Interface',
                    description: 'The image shows a person using a virtual reality viewer made of cardboard, possibly Google Cardboard, while standing indoors. They are facing a framed poster on the wall, which features a minimalist illustration of what appears to be a coffee-making process. The persons hair and sweater are visible, and they are positioned near a window, suggesting natural light in the room.'
                }
            ]
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-chat-2' && blockData.theme) {
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
                        <div id={styles["chat-layout"]} className="flex flex-col items-center max-w-4xl mx-auto pb-6 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-700" style={{ maxHeight: '800px', minHeight: '36rem', maxWidth: '680px' }}>
                            <div className="flex items-center flex-col py-5">
                                <ListViewComponent className="!border-0 px-2 py-4" dataSource={promptData} width="100%" height="100%" 
                                    template={(data: any)=> (
                                        data.category !== 'reply' ? (
                                            <div className="flex justify-start gap-3 items-start w-full">
                                                <div className="flex justify-between w-full py-1 rounded-lg">
                                                    <div className="flex flex-1">
                                                        <div>
                                                            <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: 'url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-3.jpg)' }}></span>
                                                        </div>
                                                        <div className="pl-3">
                                                            <p className="text-sm text-gray-900 mb-1 dark:text-white">{data.name}
                                                                <span className="pl-1 text-xs text-gray-500 dark:text-gray-400">{data.time}</span>
                                                            </p>
                                                            <div className="text-sm text-gray-900 dark:text-white">{data.text}</div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-center">
                                                        <ButtonComponent className="e-outline hidden sm:inline !text-gray-500 dark:!text-gray-200" iconCss="e-icons e-edit" type="button"></ButtonComponent>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col justify-start gap-3 items-start w-full">
                                                <div className="p-2 px-3 rounded-lg bg-white dark:bg-gray-800 shadow w-full">
                                                    <div className="flex items-center justify-between py-1">
                                                        <div className="flex items-center">
                                                            <div>
                                                                <span className="e-avatar e-avatar-circle e-avatar-small !text-xl !text-black dark:!text-white e-icons e-ai-chat bg-gray-100 dark:bg-gray-700"></span>
                                                            </div>
                                                            <div className="pl-3">
                                                                <p className="text-sm font-medium text-gray-900 dark:text-white">AI chat
                                                                    <span className="pl-1 text-xs text-gray-500 dark:text-gray-400">15m</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="inline-flex items-center border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                                                            <span className="e-icons e-thumbs-up px-2 py-1 text-base !text-gray-500 dark:!text-gray-200 cursor-pointer"></span>
                                                            <span className="border border-gray-200 dark:border-gray-600 h-5 m-1"></span>
                                                            <span className="e-icons e-thumbs-down px-2 py-1 text-base !text-gray-500 dark:!text-gray-200 cursor-pointer"></span>
                                                        </div>
                                                    </div>
                                                    {data.isList && (
                                                        <ListViewComponent className="!border-0 pl-8" dataSource={data.resources} fields={{ text: 'text' }} showIcon={false}
                                                            template={(resource: any)=> (
                                                                <div className="pt-0">
                                                                    <div className="pb-3">
                                                                        <img className="rounded-lg" src="/react/essential-ui-kit/blocks/assets/images/ai/chat/visual-ai-chat/chat-interface.jpg" alt={resource.text} />
                                                                    </div>
                                                                    <div className="text-sm text-gray-900 dark:text-white">{resource.description}</div>
                                                                </div>
                                                            )}
                                                        ></ListViewComponent>
                                                    )}
                                                </div>
                                                <div className="flex justify-between w-full gap-3">
                                                    <div>
                                                        <ButtonComponent className="e-outline sm:hidden inline" iconCss="e-icons e-edit" type="button"></ButtonComponent>
                                                    </div>
                                                    <div className="flex justify-between gap-3">
                                                        <ButtonComponent className="e-outline sm:hidden !bg-white dark:!bg-gray-800" iconCss="e-icons e-download" type="button"></ButtonComponent>
                                                        <ButtonComponent className="e-outline sm:hidden !bg-white dark:!bg-gray-800" iconCss="e-icons e-repeat" type="button"></ButtonComponent>
                                                        <ButtonComponent className="e-outline hidden sm:inline !bg-white dark:!bg-gray-800" iconCss="e-icons e-download" content="Download chat" type="button"></ButtonComponent>
                                                        <ButtonComponent className="e-outline hidden sm:inline !bg-white dark:!bg-gray-800" iconCss="e-icons e-repeat" content="Regenerate" type="button"></ButtonComponent>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    )}
                                ></ListViewComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section>
                        <div id={styles["chat-layout"]} className="d-flex flex-column align-items-center mx-auto pb-3 rounded overflow-hidden bg-body-tertiary" style={{ maxHeight: '800px', minHeight: '36rem', maxWidth: '680px' }}>
                            <div className="d-flex flex-column align-items-center py-4">
                                <ListViewComponent className="border-0 px-2 py-3" dataSource={promptData} width="100%" height="100%" 
                                    template={(data: any)=> (
                                        data.category !== 'reply' ? (
                                            <div className="d-flex justify-content-start gap-3 align-items-start w-100">
                                                <div className="d-flex justify-content-between w-100 py-1 rounded">
                                                    <div className="d-flex flex-grow-1">
                                                        <div>
                                                            <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: 'url(/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-3.jpg)'}}></span>
                                                        </div>
                                                        <div className="ps-3">
                                                            <p className="fs-6 mb-1 text-body">{data.name}
                                                                <span className="ps-1 small text-muted">{data.time}</span>
                                                            </p>
                                                            <div className="fs-6 text-body">{data.text}</div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <ButtonComponent className="e-outline d-none d-sm-inline" iconCss="e-icons e-edit" type="button"></ButtonComponent>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="d-flex flex-column justify-content-start gap-3 align-items-start w-100">
                                                <div className="p-2 px-3 rounded bg-body">
                                                    <div className="d-flex align-items-center justify-content-between py-2">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <span className="e-avatar e-avatar-circle e-avatar-small fs-5 text-secondary e-icons e-ai-chat bg-body-secondary"></span>
                                                            </div>
                                                            <div className="ps-3">
                                                                <p className="fs-6 mb-0 fw-medium text-body">AI chat
                                                                    <span className="ps-1 small text-muted">15m</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="p-1 d-inline-flex align-items-center border border-secondary rounded overflow-hidden">
                                                            <span className="e-icons e-thumbs-up px-2 py-1 fs-6 text-muted cursor-pointer"></span>
                                                            <span className="border border-light-subtle" style={{ height: '16px' }}></span>
                                                            <span className="e-icons e-thumbs-down px-2 py-1 fs-6 text-muted cursor-pointer"></span>
                                                        </div>
                                                    </div>
                                                    {data.isList && (
                                                        <ListViewComponent className="border-0 ps-4" dataSource={data.resources} fields={{ text: 'text' }} showIcon={false} 
                                                            template={(resource: any)=> (
                                                                <div className="pt-0 ps-3">
                                                                    <div className="pb-3">
                                                                        <img className="rounded" src="/react/essential-ui-kit/blocks/assets/images/ai/chat/visual-ai-chat/chat-interface.jpg" alt={resource.text} />
                                                                    </div>
                                                                    <div className="fs-6 text-body">{resource.description}</div>
                                                                </div>
                                                            )}
                                                        ></ListViewComponent>
                                                    )}
                                                </div>
                                                <div className="d-flex justify-content-between w-100 gap-3">
                                                    <div>
                                                        <ButtonComponent className="e-outline d-sm-none d-inline" iconCss="e-icons e-edit" type="button"></ButtonComponent>
                                                    </div>
                                                    <div className="d-flex justify-content-between gap-3">
                                                        <ButtonComponent className="e-outline d-sm-none" iconCss="e-icons e-download" type="button"></ButtonComponent>
                                                        <ButtonComponent className="e-outline d-sm-none" iconCss="e-icons e-repeat" type="button"></ButtonComponent>
                                                        <ButtonComponent className="e-outline d-none d-sm-inline" iconCss="e-icons e-download" content="Download chat" type="button"></ButtonComponent>
                                                        <ButtonComponent className="e-outline d-none d-sm-inline" iconCss="e-icons e-repeat" content="Regenerate" type="button"></ButtonComponent>
                                                    </div>
                                                </div>
                                            </div>
                                            )
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
