'use client';

import { useEffect, useRef, useState } from "react";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { ButtonComponent, CheckBoxComponent, SwitchComponent } from "@syncfusion/ej2-react-buttons";

export default function AISetting2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const usernameTextbox = useRef<TextBoxComponent | null>(null);
    const emailTextbox = useRef<TextBoxComponent | null>(null);
    const locationTextbox = useRef<TextBoxComponent | null>(null);
    const bioTextbox = useRef<TextBoxComponent | null>(null);

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-setting-2' && blockData.theme) {
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
                    <section className="bg-white dark:bg-gray-800">
                        <div className="h-screen flex">
                            <div className="hidden sm:block h-full w-16 lg:w-60 border-r border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"></div>
                            <div className="flex flex-col grow">
                                <div className="p-4 border-b border-gray-200 dark:border-gray-600">
                                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">Settings</h3>
                                </div>
                                <div key={"setting-2-tw"} className="p-4 flex flex-col gap-6 text-gray-700 dark:text-gray-300 lg:max-w-3xl">
                                    <div className="flex flex-col gap-8">
                                        <div className="flex items-center justify-between gap-1 sm:justify-normal">
                                            <div className="flex flex-col gap-1 sm:w-72">
                                                <p className="text-sm font-medium text-gray-900 dark:text-white">Your photo</p>
                                                <p className="text-xs font-normal">This will be displayed on your profile.</p>
                                            </div>
                                            <div className="relative flex">
                                                <span className="e-avatar e-avatar-large e-avatar-circle">
                                                    <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-1.jpg" alt="profile picture" />
                                                </span>
                                                <span className="e-badge e-badge-circle absolute bottom-0 right-0 bg-gray-100 dark:bg-gray-700"><i className="e-icons e-edit text-gray-500 dark:text-gray-200"></i></span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-6 sm:gap-4 text-sm font-medium text-gray-900 dark:text-white">
                                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-1">
                                                <label className="sm:w-72 shrink-0">Username</label>
                                                <TextBoxComponent ref={usernameTextbox} className="w-full" value="Bob Johnson" type="text" created={() => usernameTextbox.current?.addIcon('prepend', 'e-icons e-user !pr-0')}></TextBoxComponent>
                                            </div>
                                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-1">
                                                <label className="sm:w-72 shrink-0">Email</label>
                                                <TextBoxComponent ref={emailTextbox} className="w-full" value="bobjohnson@example.com" type="email" created={() => emailTextbox.current?.addIcon('prepend', 'e-icons e-edit !pr-0')}></TextBoxComponent>
                                            </div>
                                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-1">
                                                <label className="sm:w-72 shrink-0">Location</label>
                                                <TextBoxComponent ref={locationTextbox} className="w-full" value="Sai Gon, Vietnam" type="text" created={() => locationTextbox.current?.addIcon('prepend', 'e-icons e-location !pr-0')}></TextBoxComponent>
                                            </div>
                                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-1">
                                                <label className="sm:w-72 shrink-0">Bio</label>
                                                <TextBoxComponent ref={bioTextbox} className="w-full" placeholder="Short bio" type="text" created={() => bioTextbox.current?.addIcon('prepend', 'e-icons e-rename !pr-0')}></TextBoxComponent>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 dark:border-gray-600"></div>
                                    <div className="flex flex-col sm:flex-row gap-6 text-xs font-normal sm:gap-1">
                                        <div className="flex flex-col gap-1 sm:w-72">
                                            <p className="flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white">Editor view options <span className="e-icons e-circle-info text-xs text-gray-500 dark:text-gray-200"></span></p>
                                            <p className="sm:w-56">Manage visibility and error detection in the editor.</p>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex flex-col gap-1 w-11/12 sm:auto">
                                                <CheckBoxComponent checked={true} label="Truncate long transactions in the editor"></CheckBoxComponent>
                                                <p className="ml-7">Shorten lengthy records for better readability.</p>
                                            </div>
                                            <div className="flex flex-col gap-1 w-11/12 sm:w-auto">
                                                <CheckBoxComponent checked={true} label="Show spelling and grammar errors in the editor"></CheckBoxComponent>
                                                <p className="ml-7">Detect and highlight mistakes automatically.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 dark:border-gray-600"></div>
                                    <div className="flex flex-col gap-12 sm:gap-8">
                                        <div className="flex justify-between gap-1 sm:justify-normal">
                                            <p className="text-sm font-medium sm:w-72 shrink-0 text-gray-900 dark:text-white">Translation view options</p>
                                            <SwitchComponent checked={true}></SwitchComponent>
                                        </div>
                                        <div className="flex gap-3 self-end">
                                            <ButtonComponent type="button" disabled={true}>Cancel</ButtonComponent>
                                            <ButtonComponent cssClass="e-primary" type="button">Save changes</ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="row vh-100 d-flex g-0">
                            <div className="d-none d-sm-block h-100 border-end border-light-subtle bg-body-tertiary col-1 col-lg-3" style={{ minWidth: '62px', maxWidth: '248px' }}></div>
                            <div className="d-flex flex-column flex-grow-1 col">
                                <div className="p-3 border-bottom border-light-subtle">
                                    <h3 className="fs-6 fw-bold text-body mb-0">Settings</h3>
                                </div>
                                <div key={"setting-2-bs"} className="p-3 d-flex flex-column gap-4 text-body-secondary" style={{ maxWidth: '768px' }}>
                                    <div className="d-flex flex-column gap-4">
                                        <div className="d-flex align-items-center justify-content-between gap-1 justify-content-sm-start">
                                            <div className="d-flex flex-column gap-1 small" style={{ width: '18rem' }}>
                                                <p className="mb-0 fw-medium text-body">Your photo</p>
                                                <p className="mb-0 small">This will be displayed on your profile.</p>
                                            </div>
                                            <div className="position-relative d-flex">
                                                <span className="e-avatar e-avatar-large e-avatar-circle">
                                                    <img src="/react/essential-ui-kit/blocks/assets/images/common/avatar/avatar-1.jpg" alt="profile picture" />
                                                </span>
                                                <span className="e-badge e-badge-circle position-absolute bottom-0 end-0 bg-body-secondary"><i className="e-icons e-edit small text-body-secondary"></i></span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column gap-3 fs-6 fw-medium text-body mt-2">
                                            <div className="small d-flex flex-column flex-sm-row gap-2 gap-sm-1">
                                                <label className="flex-shrink-0" style={{ width: '18rem' }}>Username</label>
                                                <TextBoxComponent ref={usernameTextbox} className="w-100" value="Bob Johnson" type="text" created={() => usernameTextbox.current?.addIcon('prepend', 'e-icons e-user border-0')}></TextBoxComponent>
                                            </div>
                                            <div className="small d-flex flex-column flex-sm-row gap-2 gap-sm-1">
                                                <label className="flex-shrink-0" style={{ width: '18rem' }}>Email</label>
                                                <TextBoxComponent ref={emailTextbox} className="w-100" value="bobjohnson@example.com" type="email" created={() => emailTextbox.current?.addIcon('prepend', 'e-icons e-edit border-0')}></TextBoxComponent>
                                            </div>
                                            <div className="small d-flex flex-column flex-sm-row gap-2 gap-sm-1">
                                                <label className="flex-shrink-0" style={{ width: '18rem' }}>Location</label>
                                                <TextBoxComponent ref={locationTextbox} className="w-100" value="Sai Gon, Vietnam" type="text" created={() => locationTextbox.current?.addIcon('prepend', 'e-icons e-location border-0')}></TextBoxComponent>
                                            </div>
                                            <div className="small d-flex flex-column flex-sm-row gap-2 gap-sm-1">
                                                <label className="flex-shrink-0" style={{ width: '18rem' }}>Bio</label>
                                                <TextBoxComponent ref={bioTextbox} className="w-100" placeholder="Short bio" type="text" created={() => bioTextbox.current?.addIcon('prepend', 'e-icons e-rename border-0')}></TextBoxComponent>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-top border-light-subtle"></div>
                                    <div className="d-flex flex-column flex-sm-row gap-4 gap-sm-1 fw-normal">
                                        <div className="d-flex flex-column gap-1 small" style={{ width: '18rem' }}>
                                            <p className="d-flex align-items-center gap-1 fw-medium text-body mb-0">Editor view options <span className="e-icons e-circle-info text-body-secondary small"></span></p>
                                            <p className="mb-0 small col col-sm-9">Manage visibility and error detection in the editor.</p>
                                        </div>
                                        <div className="d-flex flex-column gap-3">
                                            <div className="small d-flex flex-column gap-1 w-100">
                                                <CheckBoxComponent checked={true} label="Truncate long transactions in the editor"></CheckBoxComponent>
                                                <p className="small ms-4 mb-0">Shorten lengthy records for better readability.</p>
                                            </div>
                                            <div className="small d-flex flex-column gap-1 w-100">
                                                <CheckBoxComponent checked={true} label="Show spelling and grammar errors in the editor"></CheckBoxComponent>
                                                <p className="small ms-4 mb-0">Detect and highlight mistakes automatically.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-top border-light-subtle"></div>
                                    <div className="d-flex flex-column gap-5 gap-sm-4">
                                        <div className="d-flex justify-content-between gap-1 justify-content-sm-start align-items-center">
                                            <p className="small fw-medium flex-shrink-1 text-body mb-0" style={{ width: '18rem' }}>Translation view options</p>
                                            <SwitchComponent cssClass="e-small" checked={true}></SwitchComponent>
                                        </div>
                                        <div className="d-flex gap-3 align-self-end">
                                            <ButtonComponent cssClass="e-outline" type="button" disabled={true}>Cancel</ButtonComponent>
                                            <ButtonComponent cssClass="e-primary" type="button">Save changes</ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
