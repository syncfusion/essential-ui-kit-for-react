'use client';

import { useEffect, useState } from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { MessageComponent } from '@syncfusion/ej2-react-notifications';

export default function Notification10() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'notification-10' && blockData.theme) {
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
                    <section className="bg-gray-50 dark:bg-gray-950">
                        <div key={"notification-10-tw"} className="mx-auto px-4 pt-4 sm:px-0 h-screen" style={{ maxWidth: '500px' }}>
                            <MessageComponent cssClass="!w-full !block p-6 !border-0 shadow-lg" severity="Warning" showIcon={false}>
                                <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-start sm:items-center">
                                    <div>
                                        <h1 className="text-lg font-semibold mb-1.5">Something went wrong !!!</h1>
                                        <p className="text-base">There was a problem with your request.</p>
                                    </div>
                                    <ButtonComponent className="e-outline" content="Try again" type="button"></ButtonComponent>
                                </div>
                            </MessageComponent>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"notification-10-bs"} className="mx-auto px-3 pt-3 px-sm-0 vh-100" style={{ maxWidth: '502px' }}>
                            <MessageComponent cssClass="w-100 d-block p-0 border-0 shadow" severity="Warning" showIcon={false}>
                                <div className="w-100 d-flex flex-column flex-sm-row gap-3 gap-sm-0 justify-content-between align-items-start align-items-sm-center p-4">
                                    <div>
                                        <h1 className="fs-6 fw-bold mb-1">Something went wrong !!!</h1>
                                        <p className="fs-6 m-0">There was a problem with your request.</p>
                                    </div>
                                    <ButtonComponent className="e-outline" content="Try again" type="button"></ButtonComponent>
                                </div>
                            </MessageComponent>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
