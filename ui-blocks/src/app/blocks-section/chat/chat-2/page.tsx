'use client';

import { useEffect, useRef, useState } from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import styles from './page.module.css';

export default function Chat2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const textboxRef = useRef<TextBoxComponent | null>(null);

    const data: any[] = [
        {
            id: '1',
            name: 'John',
            time: '8:57 AM',
            avatar: '',
            text: 'Hi, I’m having trouble accessing the company VPN.',
            chat: 'sender',
            open: false
        },
        {
            id: '2',
            name: 'Mark Davis',
            time: '9:00 AM',
            avatar: 'avatar-3.jpg',
            text: 'Hello! I can help with that. Are you seeing any error messages?',
            chat: 'receiver'
        },
        {
            id: '1',
            name: 'John',
            time: '9:05 AM',
            avatar: '',
            text: 'Yes, it says "VPN connection failed. Authentication error."',
            chat: 'sender',
            open: false
        },
        {
            id: '2',
            name: 'Mark Davis',
            time: '10:00 AM',
            avatar: 'avatar-3.jpg',
            text: 'Thanks for the details. Can you confirm if you’ve recently changed your network password?',
            chat: 'receiver'
        },
        {
            id: '1',
            name: 'John',
            time: '10:32 AM',
            avatar: '',
            text: 'Yes, I changed it yesterday.',
            chat: 'sender',
            open: true
        },
        {
            id: '2',
            name: 'Mark Davis',
            time: '10:35 AM',
            avatar: 'avatar-3.jpg',
            text: 'That’s likely the issue. The VPN might still be using the old password. Try updating your VPN credentials with the new password.',
            chat: 'receiver'
        }
    ];

    const dataTranslate: any[] = [
        {
            id: '1',
            name: 'Olivia Martinez',
            time: '8:57 AM',
            avatar: 'avatar-10.jpg',
            text: 'Hola, tengo problemas para acceder a la VPN de la empresa.',
            chat: 'sender'
        },
        {
            id: '2',
            name: 'Mark Davis',
            time: '9:00 AM',
            avatar: 'avatar-3.jpg',
            text: '¡Hola! Puedo ayudar con eso. ¿Estás viendo algún mensaje de error?',
            chat: 'receiver'
        },
        {
            id: '1',
            name: 'Olivia Martinez',
            time: '9:05 AM',
            avatar: 'avatar-10.jpg',
            text: 'Sí, dice "Error en la conexión VPN. Error de autenticación."',
            chat: 'sender'
        },
        {
            id: '2',
            name: 'Mark Davis',
            time: '10:00 AM',
            avatar: 'avatar-3.jpg',
            text: 'Gracias por los detalles. ¿Puedes confirmar si has cambiado recientemente tu contraseña de red?',
            chat: 'receiver'
        },
        {
            id: '1',
            name: 'Olivia Martinez',
            time: '10:32 AM',
            avatar: 'avatar-10.jpg',
            text: 'Sí, lo cambié ayer.',
            chat: 'sender'
        },
        {
            id: '2',
            name: 'Mark Davis',
            time: '10:35 AM',
            avatar: 'avatar-3.jpg',
            text: 'Probablemente ese sea el problema. Es posible que la VPN todavía esté usando la contraseña anterior. Intente actualizar sus credenciales de VPN con la nueva contraseña.',
            chat: 'receiver'
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'chat-2' && blockData.theme) {
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
        }
        /* SB Code - End */
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section>
                        <div id={styles["chat-sidepanel"]} className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl overflow-hidden" style={{ maxHeight: "1406px" }}>
                            <div className="w-full p-2">
                                <div className="flex items-center justify-between py-1 pl-2 sm:pl-4 pr-2">
                                    <div className="flex items-center">
                                        <span className="flex items-center gap-3">
                                            <div className="relative h-8">
                                                <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: "url(/assets/images/common/avatar/avatar-3.jpg)" }}></span>
                                                <div className="w-3 h-3 rounded-full bg-green-700 dark:bg-green-500 absolute border border-white dark:border-black" style={{ bottom: "-2px", right: "-2px" }}></div>
                                            </div>
                                            <span className="text-base font-semibold text-gray-900 dark:text-white">Mark Davis</span>
                                        </span>
                                    </div>
                                    <div className="e-appbar-spacer"></div>
                                    <div className="flex items-center gap-3">
                                        <ButtonComponent cssClass="e-flat sf-icon-phone-01 leading-3 text-base sm:block hidden" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-flat e-icons e-video sm:block hidden" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-flat e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                        <div className="border-l h-6 border-gray-200 dark:border-gray-600 sm:block hidden"></div>
                                        <ButtonComponent cssClass="e-flat e-icons e-show-hide-panel text-base leading-3 sm:block hidden" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap border-t border-gray-200 dark:border-gray-800">
                                <div className="w-full sm:w-4/6 pb-6">
                                    <div className="flex items-center flex-col pt-7 bg-white dark:bg-gray-900">
                                        <span className="e-badge e-badge-pill e-badge-secondary border border-gray-200 e-small">Wednesday, Sep 18th</span>
                                        <ListViewComponent cssClass="!border-0 px-2 sm:px-4 sm:pr-7 py-4" dataSource={data} width="100%" height="100%"
                                            template={(data: any) => {
                                                const senderTemplate = (
                                                    <div className="flex justify-end ml-auto sm:mr-3 gap-3 items-start w-4/5 sm:w-9/12 lg:w-11/12">
                                                        <div className="flex flex-col gap-1 items-end">
                                                            <div className="py-2 px-3 rounded-lg rounded-se-none bg-indigo-100 dark:bg-cyan-800">
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
                                                    <div className="flex justify-start gap-3 items-start sm:w-11/12">
                                                        {data.avatar && (
                                                            <div>
                                                                <span className="e-avatar e-avatar-circle e-avatar-small shrink-0" style={{ backgroundImage: `url(/assets/images/common/avatar/${data.avatar})` }}></span>
                                                            </div>
                                                        )}
                                                        <div className="flex flex-col gap-1">
                                                            <div className="py-2 px-3 rounded-lg rounded-ss-none bg-gray-100 dark:bg-gray-800">
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
                                    <div className="e-bigger w-full text-base px-4 px-4 sm:pl-6 sm:pr-12">
                                        <TextBoxComponent type="text" placeholder="Enter a message" ref={textboxRef} created={() => textboxRef.current?.addIcon("append", "sf-icon-navigation-right-up border-0")}></TextBoxComponent>
                                    </div>
                                </div>
                                <div className="w-full sm:w-2/6 sm:border-s border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                                    <div className="flex justify-between items-center px-3 py-2 mx-4 sm:mx-0 border-b border-gray-200 dark:border-gray-800">
                                        <p className="text-base font-semibold text-gray-900 dark:text-gray-50">Translation</p>
                                        <DropDownButtonComponent cssClass="e-flat" content="Spanish" type="button" beforeOpen={(event: any) => (event.cancel = true)}></DropDownButtonComponent>
                                    </div>
                                    <ListViewComponent cssClass="!border-0 px-1 pt-1" dataSource={dataTranslate} width="100%" height="100%"
                                        template={(data: any) => {
                                            const senderTemplate = (
                                                <div className="flex justify-start gap-2 items-start">
                                                    {data.avatar && (
                                                        <div>
                                                            <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: `url(/assets/images/common/avatar/${data.avatar})` }}></span>
                                                        </div>
                                                    )}
                                                    <div className="flex flex-col gap-1">
                                                        <p className="text-xs text-gray-500 dark:text-gray-400">{data.name} <span className="ms-1.5">{data.time}</span></p>
                                                        <div className="rounded-lg">
                                                            <div className="text-gray-900 dark:text-gray-50">{data.text}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                
                                            const receiverTemplate = (
                                                <div className="flex justify-start gap-2 items-start">
                                                    {data.avatar && (
                                                        <div>
                                                            <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: `url(/assets/images/common/avatar/${data.avatar})` }}></span>
                                                        </div>
                                                    )}
                                                    <div className="flex flex-col gap-1">
                                                        <p className="text-xs text-gray-500 dark:text-gray-400">{data.name} <span className="ms-1.5">{data.time}</span></p>
                                                        <div className="rounded-lg">
                                                            <div className="text-gray-900 dark:text-gray-50">{data.text}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                
                                            return <div>{data.chat !== "receiver" ? senderTemplate : receiverTemplate}</div>;
                                        }}
                                    ></ListViewComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );                
            case 'bootstrap5':
                return (
                    <section>
                        <div id={styles["chat-sidepanel"]} className="container overflow-hidden p-0 bg-body rounded-4" style={{ maxWidth: "900px" }}>
                            <div className="w-100 p-2">
                                <div className="d-flex align-items-center justify-content-between py-1 ps-2 ps-sm-3 pe-2">
                                    <div className="d-flex align-items-center">
                                        <span className="d-flex align-items-center gap-3">
                                            <div className="position-relative" style={{ height: "32px" }}>
                                                <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: "url(/assets/images/common/avatar/avatar-3.jpg)" }}></span>
                                                <div className="position-absolute bg-success border border-light rounded-circle p-1" style={{ bottom: "-1px", right: "-1px" }}></div>
                                            </div>
                                            <span className="h6 mb-0 text-body">Mark Davis</span>
                                        </span>
                                    </div>
                                    <div className="d-flex align-items-center gap-3">
                                        <ButtonComponent cssClass="e-flat sf-icon-phone-01 fs-6 d-none d-sm-block" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-flat e-icons e-video d-none d-sm-block" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-flat e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                        <div className="border-start border-secondary-subtle d-none d-sm-block" style={{ height: "24px" }}></div>
                                        <ButtonComponent cssClass="e-flat e-icons e-show-hide-panel d-none d-sm-block" type="button"></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap border-top bg-body">
                                <div className="col-12 col-sm-8 pb-4">
                                    <div className="d-flex flex-column align-items-center pt-4 bg-body">
                                        <span className="e-badge e-badge-pill border px-2">Wednesday, Sep 18th</span>
                                        <ListViewComponent cssClass="border-0 px-2 px-sm-3 pe-md-4 pe-sm-3 pb-4 pt-3 bg-body" dataSource={data} width="100%" height="100%"
                                            template={(data: any) => {
                                                const senderTemplate = (
                                                    <div className="d-flex justify-content-end pe-sm-3 ms-auto align-items-start w-75">
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
                                                                <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: `url(/assets/images/common/avatar/${data.avatar})` }}></span>
                                                            </div>
                                                        )}
                                                        <div className="d-flex flex-column gap-1">
                                                            <div className="py-2 px-3 bg-body-tertiary" style={{ borderRadius: "0px 6px 6px 6px" }}>
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
                                    <div className="e-bigger ms-sm-4 ms-3 me-md-5 me-3">
                                        <TextBoxComponent type="text" placeholder="Enter a message" ref={textboxRef} created={() => textboxRef.current?.addIcon("append", "sf-icon-navigation-right-up border-0")}></TextBoxComponent>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-4 bg-body d-flex">
                                    <div className="h-100 border-start d-none d-sm-block"></div>
                                    <div className="h-100">
                                        <div className="d-flex justify-content-between align-items-center p-2 mx-3 mx-sm-0 border-bottom">
                                            <p className="h6 mb-0 text-body">Translation</p>
                                            <DropDownButtonComponent cssClass="e-flat" content="Spanish" type="button" beforeOpen={(event: any) => (event.cancel = true)}></DropDownButtonComponent>
                                        </div>
                                        <ListViewComponent cssClass="border-0 p-2 pe-4 overflow-auto" dataSource={dataTranslate} width="100%" height="100%"
                                            template={(data: any) => {
                                                const senderTemplate = (
                                                    <div className="d-flex justify-content-start gap-2 align-items-start">
                                                        {data.avatar && (
                                                            <div>
                                                                <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: `url(/assets/images/common/avatar/${data.avatar})` }}></span>
                                                            </div>
                                                        )}
                                                        <div className="d-flex flex-column gap-1">
                                                            <p className="small text-body-secondary m-0">{data.name} <span className="ms-1">{data.time}</span></p>
                                                            <div className="rounded">
                                                                <div className="text-body">{data.text}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                
                                                const receiverTemplate = (
                                                    <div className="d-flex justify-content-start gap-2 align-items-start">
                                                        {data.avatar && (
                                                            <div>
                                                                <span className="e-avatar e-avatar-circle e-avatar-small" style={{ backgroundImage: `url(/assets/images/common/avatar/${data.avatar})` }}></span>
                                                            </div>
                                                        )}
                                                        <div className="d-flex flex-column gap-1">
                                                            <p className="small text-body-secondary m-0">{data.name} <span className="ms-1">{data.time}</span></p>
                                                            <div className="rounded">
                                                                <div className="text-body">{data.text}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                
                                                return <div>{data.chat !== "receiver" ? senderTemplate : receiverTemplate}</div>;
                                            }}
                                        ></ListViewComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ); 
        };
    };

    return getContent();
}