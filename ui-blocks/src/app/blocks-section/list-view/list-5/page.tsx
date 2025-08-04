'use client';

import { useEffect, useState } from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';

export default function List5() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState({});

    const countries: any[] = [
        {
            id: 1,
            country: 'Afghanistan',
            number: '+93',
            badge: 'AF',
            pic: 'afghanistan.png'
        },
        {
            id: 2,
            country: 'Albania',
            number: '+355',
            badge: 'AL',
            pic: 'albania.png'
        },
        {
            id: 3,
            country: 'Algeria',
            number: '+213',
            badge: 'DZ',
            pic: 'algeria.png'
        },
        {
            id: 4,
            country: 'Andorra',
            number: '+376',
            badge: 'AD',
            pic: 'andorra.png'
        },
        {
            id: 5,
            country: 'Angola',
            number: '+244',
            badge: 'AO',
            pic: 'angola.png'
        },
        {
            id: 6,
            country: 'Argentina',
            number: '+54',
            badge: 'AR',
            pic: 'argentina.png'
        },
        {
            id: 7,
            country: 'Armenia',
            number: '+374',
            badge: 'AM',
            pic: 'armenia.png'
        },
        {
            id: 8,
            country: 'Australia',
            number: '+61',
            badge: 'AU',
            pic: 'australia.png'
        }
    ];

    const handleResize = (): void => {
        checkWindowSize(window.innerWidth);
    }; 

    const checkWindowSize = (width: number): void => {
        setWidth(width < 1024 ? { width: '100%' } : { maxWidth: '448px' });
    };
    
    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'list-5' && blockData.theme) {
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
                        <div className="flex items-center justify-center min-h-screen">
                            <div className="lg:max-w-md w-full m-auto p-4 lg:p-8 md:p-6">
                                <div className="e-input-group">
                                    <span className="e-input-group-icon e-icons e-search !text-base"></span>
                                    <input className="e-input !pl-0 e-bigger" type="text" placeholder="Search country" />
                                </div>
                                <ListViewComponent className="!border-0 mt-2" cssClass="e-list-template" dataSource={countries} template={(data: any) => (
                                    <div className="e-list-wrapper flex items-center !px-1 sm:!px-3 border-b border-gray-200 dark:border-gray-600">
                                        <img className="rounded-full" src={`/react/essential-ui-kit/blocks/assets/images/listview/country-code/${data.pic}`} width={36} height={36} alt="flag image" />
                                        <div className="pl-4 w-full">
                                            <span className="flex items-center justify-between">
                                                <span className="e-list-item-header text-sm font-medium text-gray-900 dark:text-white">{data.country}</span>
                                                <span className="text-sm font-medium text-gray-900 dark:text-white flex-grow text-right">{data.number}</span>
                                            </span>
                                            <span className="e-badge e-badge-pill mt-0.5 inline-flex items-center border border-gray-200 dark:border-gray-600">{data.badge}</span>
                                        </div>
                                    </div>)}
                                ></ListViewComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="d-flex align-items-center justify-content-center min-vh-100">
                            <div className="container-lg w-100 m-auto p-3 p-md-4" style={width}>
                                <div className="e-input-group">
                                    <span className="e-input-group-icon e-icons e-search border-0 fs-6"></span>
                                    <input className="e-input e-bigger" type="text" placeholder="Search country" />
                                </div>
                                <ListViewComponent className="border-0 mt-2" cssClass="e-list-template" dataSource={countries} template={(data: any) => (
                                    <div className="e-list-wrapper d-flex align-items-center px-1 px-sm-3">
                                        <img className="rounded-circle" src={`/react/essential-ui-kit/blocks/assets/images/listview/country-code/${data.pic}`} width={36} height={36} alt="flag image" />
                                        <div className="ps-3 w-100">
                                            <span className="d-flex align-items-center justify-content-between">
                                                <span className="e-list-item-header fw-medium">{data.country}</span>
                                                <span className="fw-medium text-end">{data.number}</span>
                                            </span>
                                            <span className="e-badge e-badge-pill mt-1 d-inline-flex align-items-center border border-light-subtle px-2">{data.badge}</span>
                                        </div>
                                    </div>)}
                                ></ListViewComponent>
                            </div>
                        </div>
                    </section>
                );            
        }
    };

    return getContent();
}
