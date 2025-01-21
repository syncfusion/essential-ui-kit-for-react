'use client';

import { useEffect, useState } from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent, UploaderComponent } from '@syncfusion/ej2-react-inputs';
import { RichTextEditorComponent, Inject, HtmlEditor, Toolbar, ToolbarType, Link, Image, Table } from '@syncfusion/ej2-react-richtexteditor';
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';

export default function Email1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    const path = {
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'email-1' && blockData.theme) {
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
                        <div className="lg:flex lg:justify-center lg:items-center">
                            <div className="py-10 px-3 md:px-6 md:py-14 xl:px-11 xl:py-6 w-full">
                                <form action="#" onSubmit={(event) => event.preventDefault()}>
                                    <div className="mb-3 flex items-center ml-4">
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mr-3">From:</label>
                                        <TextBoxComponent cssClass='e-bigger w-full' type="text" value='Peterson (peterson@example.com)' placeholder="Email" floatLabelType="Never"></TextBoxComponent>
                                    </div>
                                    <div className="mb-3 flex items-center ml-8 relative">
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mr-3">To:</label>
                                        <MultiSelectComponent cssClass='e-bigger w-full pl-1' dataSource={[{ text: 'Thomas' }, { text: 'Henry' }]} fields={{ text: "text" }} value={["Thomas"]} placeholder="Select recipients" mode="Box"></MultiSelectComponent>
                                        <div className="absolute right-12" style={{ bottom:'8px' }}>
                                            <a href="javascript:void(0);" className="mr-4 text-sm font-medium text-gray-700 dark:text-white">Cc</a>
                                            <a href="javascript:void(0);" className="text-sm font-medium text-gray-700 dark:text-white">Bcc</a>
                                        </div>
                                    </div>
                                    <div className="mb-4 flex items-center">
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mr-3">Subject:</label>
                                        <TextBoxComponent cssClass='e-bigger w-full' type="text" value='Issue with Online Banking App - Transactions Not Completing' placeholder="Enter the subject" floatLabelType="Never"></TextBoxComponent>
                                    </div>
                                    <div className="mb-4">
                                        <RichTextEditorComponent key={"RTE-1-tw"} toolbarSettings={{
                                            items: ['Bold', 'Italic', 'Underline', 'StrikeThrough', '|', 'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|', 'Alignments', 'OrderedList', 'UnorderedList', 'Blockquote', '|', 'CreateLink', 'Image', 'CreateTable'], type: 'MultiRow' as ToolbarType }} style={{ maxHeight: "540px", overflowY: 'auto' }}>
                                            <p>Dear Support Team,</p>
                                            <p className="!mb-0">I am having trouble completing transactions in the Online Banking App. The app freezes at the confirmation screen every time I attempt to transfer money.</p>
                                            <ul className="list-disc ml-6">
                                                <li className="!mb-0">Error Message: None, the app freezes.</li>
                                                <li className="!mb-0">Occurrence: Since September 28, 2024, 3:00 PM.</li>
                                                <li className="!mb-0">Account Number: 123456789.</li>
                                            </ul>
                                            <p>Please assist with resolving this issue as soon as possible. Let me know if you need any further details.</p>
                                            <p className="!mb-0">Best regards,</p>
                                            <p className="font-bold !mb-0">Peterson</p>
                                            <p className="!mb-0"><a href="javascript:void(0);">peterson&#64;email.com</a></p>
                                            <Inject services={[Toolbar, HtmlEditor, Link, Image, Table]} />
                                        </RichTextEditorComponent>
                                    </div>
                                    <div className="mb-6">
                                        <UploaderComponent id='fileUpload' type='file' multiple={true} asyncSettings={path}></UploaderComponent>
                                    </div>
                                    <div className="flex justify-end space-x-4">
                                        <ButtonComponent cssClass="e-outline" type="button" content="Discard"></ButtonComponent>
                                        <ButtonComponent cssClass="e-primary" type="submit" content="Send"></ButtonComponent>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="d-lg-flex justify-content-lg-center align-items-lg-center p-0 w-100">
                            <div className="px-3 px-md-4 py-5 w-100">
                                <form action="#" onSubmit={(event) => event.preventDefault()}>
                                    <div className="mb-3 d-flex align-items-center ms-3">
                                        <label className="form-label small me-3 text-body-secondary mb-0">From:</label>
                                        <TextBoxComponent cssClass="w-100 e-bigger" type="email" value='Peterson (peterson@example.com)' placeholder="Email" floatLabelType="Never"></TextBoxComponent>
                                    </div>
                                    <div className="mb-3 d-flex align-items-center ms-4 ps-1 position-relative">
                                        <label className="form-label small text-body-secondary ps-1 pe-3 mb-0">To:</label>
                                        <MultiSelectComponent cssClass="e-bigger ps-1" dataSource={[{ text: "Thomas" }, { text: "Henry" }]} fields={{ text: "text" }} value={["Thomas"]} mode="Box" placeholder="Select recipients"></MultiSelectComponent>
                                        <div className="position-absolute d-flex align-items-center end-0 me-4 pe-2" style={{ bottom:'8px' }}>
                                            <a href="javascript:void(0);" className="me-3 small text-body-secondary text-decoration-none fw-medium">Cc</a>
                                            <a href="javascript:void(0);" className="small text-body-secondary text-decoration-none fw-medium">Bcc</a>
                                        </div>
                                    </div>
                                    <div className="mb-3 d-flex align-items-center">
                                        <label className="form-label small text-body-secondary me-3 mb-0">Subject:</label>
                                        <TextBoxComponent cssClass="e-bigger w-100" type="text" value='Issue with Online Banking App - Transactions Not Completing' placeholder="Enter the subject" floatLabelType="Never"></TextBoxComponent>
                                    </div>
                                    <div className="mb-3">
                                        <RichTextEditorComponent key={"RTE-1-bs"} toolbarSettings={{
                                            items: ['Bold', 'Italic', 'Underline', 'StrikeThrough', '|', 'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|', 'Alignments', 'OrderedList', 'UnorderedList', 'Blockquote', '|', 'CreateLink', 'Image', 'CreateTable'], type: 'MultiRow' as ToolbarType }} style={{ maxHeight: "540px", overflowY: "auto" }}>
                                            <p>Dear Support Team,</p>
                                            <p className="mb-0">I am having trouble completing transactions in the Online Banking App. The app freezes at the confirmation screen every time I attempt to transfer money.</p>
                                            <ul className="list-disc ms-6 mb-0">
                                                <li className="mb-0">Error Message: None, the app freezes.</li>
                                                <li className="mb-0">Occurrence: Since September 28, 2024, 3:00 PM.</li>
                                                <li className="mb-0">Account Number: 123456789.</li>
                                            </ul>
                                            <p>Please assist with resolving this issue as soon as possible. Let me know if you need any further details.</p>
                                            <p className="mb-0">Best regards,</p>
                                            <p className="fw-bold mb-0">Peterson</p>
                                            <p className="mb-0"><a href="javascript:void(0);">peterson&#64;email.com</a></p>
                                            <Inject services={[Toolbar, HtmlEditor, Link, Image, Table]} />
                                        </RichTextEditorComponent>
                                    </div>
                                    <div className="mb-4">
                                        <UploaderComponent id='fileUpload' type='file' multiple={true} asyncSettings={path}></UploaderComponent>
                                    </div>
                                    <div className="d-flex justify-content-end gap-3">
                                        <ButtonComponent cssClass="e-outline" type="button" content="Discard"></ButtonComponent>
                                        <ButtonComponent cssClass="e-primary" type="submit" content="Send"></ButtonComponent>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
