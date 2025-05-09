'use client';

import { useEffect, useState } from 'react';
import { ListBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import styles from './page.module.css';

export default function List6() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState({});

    const fieldData: any[] = [
        {
            id: 1,
            field: 'Full Name',
            fontIcon: 'e-icons e-user'
        },
        {
            id: 2,
            field: 'Email Address',
            fontIcon: 'sf-icon-mail-02'
        },
        {
            id: 3,
            field: 'Phone Number',
            fontIcon: 'sf-icon-phone-01'
        },
        {
            id: 4,
            field: 'Date of Birth',
            fontIcon: 'e-icons e-day'
        },
        {
            id: 5,
            field: 'Address',
            fontIcon: 'e-icons e-location'
        }
    ];

    const handleResize = (): void => {
        checkWindowSize(window.innerWidth);
    }; 

    const checkWindowSize = (width: number): void => {
        setWidth(width < 1024 ? { width: '100%' } : { maxWidth: '452px' });
    }; 
    
    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'list-6' && blockData.theme) {
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
        /* SB Code - End */
        checkWindowSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        
        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-900">
                        <div id={styles["custom-field-list"]} className="lg:max-w-md w-full mx-auto px-4 pt-8 pb-4 min-h-screen">
                            <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">Increase the amount of data that you collect re-order the fields.</p>
                            <ListBoxComponent key={"list-6-tw"} className="e-bigger" dataSource={fieldData} allowDragAndDrop={true} fields={{ text: 'field', iconCss: 'fontIcon' }} itemTemplate={(data: any) => (
                                <div className="list-wrapper flex items-center space-x-3 p-2">
                                    <span className="sf-icon-drag-dot-vertical text-base text-gray-500 dark:text-gray-300"></span>
                                    <span className={`text-base text-gray-500 dark:text-gray-300 ${data.fontIcon}`}></span>
                                    <span className="e-list-item-header text-sm font-medium text-gray-900 dark:text-white">{data.field}</span>
                                </div>)}
                            ></ListBoxComponent>
                            <ButtonComponent iconCss="e-icons e-plus" cssClass="e-flat e-primary mt-2" type="button" content="Add a field"></ButtonComponent>
                        </div>
                    </section>
                );           
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div id={styles["custom-field-list"]} className="container-lg w-100 mx-auto px-3 py-5 min-vh-100" style={width}>
                            <p className="small">Increase the amount of data that you collect re-order the fields.</p>
                            <ListBoxComponent key={"list-6-bs"} className="e-bigger" dataSource={fieldData} allowDragAndDrop={true} fields={{ text: 'field', iconCss: 'fontIcon' }} itemTemplate={(data: any) => (
                                <div className="list-wrapper d-flex align-items-center gap-2 p-2">
                                    <span className="e-icons sf-icon-drag-dot-vertical fs-6 pe-1"></span>
                                    <span className={`pe-1 fs-6 ${data.fontIcon}`}></span>
                                    <span className="e-list-item-header fw-medium">{data.field}</span>
                                </div>)}
                            ></ListBoxComponent>
                            <ButtonComponent iconCss="e-icons e-plus" cssClass="e-flat e-primary mt-2" type="button" content="Add a field"></ButtonComponent>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
