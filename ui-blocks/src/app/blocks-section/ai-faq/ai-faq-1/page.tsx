'use client';

import { useEffect, useRef, useState } from "react";
import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective } from "@syncfusion/ej2-react-navigations";
import styles from "./page.module.css";

export default function AIFAQ1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const accordion = useRef<AccordionComponent | null>(null);

    const FAQData: any[] = [
        {
            id: 1,
            question: 'What do we do?',
            answer: 'We are designed to assist you with [specific tasks or functions], provide information, and enhance your overall experience by offering support through conversational interactions.'
        },
        {
            id: 2,
            question: 'How do I get started with Fusion AI?',
            answer: 'To get started with Fusion AI, sign up for an account on our website. Once registered, follow the onboarding guide to set up your workspace, connect your tools, and explore the dashboard.'
        },
        {
            id: 3,
            question: 'How do I install Fusion AI?',
            answer: 'Fusion AI is a cloud-based platform, so no installation is required. Simply log in through your browser. For integrations, follow the setup instructions in the "Integrations" tab.'
        },
        {
            id: 4,
            question: 'What is the messenger in Fusion AI?',
            answer: 'The messenger is a real-time communication tool that allows you to chat with customers, team members, or support agents directly within the platform.'
        },
        {
            id: 5,
            question: 'What is the next-gen inbox?',
            answer: 'The next-gen inbox consolidates all your messages, tickets, and notifications into a single, streamlined interface, making it easier to manage conversations and tasks.'
        },
        {
            id: 6,
            question: 'How do tickets work?',
            answer: 'Tickets are used to track customer issues or internal tasks. You can create, assign, prioritize, and resolve tickets through the support dashboard.'
        },
        {
            id: 7,
            question: 'How does support work?',
            answer: 'Fusion AI offers 24/7 support through live chat, email, and a comprehensive help center. You can also submit tickets for more complex issues.'
        },
        {
            id: 8,
            question: 'How does billing work?',
            answer: 'Billing is handled monthly or annually based on your subscription plan. You can view invoices, update payment methods, and manage your plan in the billing section.'
        },
        {
            id: 9,
            question: 'How do I cancel my subscription?',
            answer: 'To cancel your subscription, go to the billing settings and click on "Cancel Plan." Your access will remain active until the end of the billing cycle.'
        },
        {
            id: 10,
            question: 'How do I integrate this with other tools?',
            answer: 'Fusion AI supports integrations with popular tools like Slack, Zapier, and CRMs. Visit the "Integrations" page to connect and configure them.'
        },
        {
            id: 11,
            question: 'What are the pricing plans for the Fusion AI?',
            answer: 'We offer flexible pricing plans including Free, Pro, and Enterprise tiers. Each plan comes with different features and usage limits. Visit our pricing page for full details.'
        }
    ];

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-faq-1' && blockData.theme) {
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
        setTimeout(() => {
            accordion.current?.refresh();
        }, 1000);

        return () => {
            window.removeEventListener('message', handleMessageEvent);
        };
        /* SB Code - End */
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-950">
                        <div key={'faq-tw'} id={styles.FAQ} className="w-full px-4 sm:px-0 py-7 sm:py-12 mx-auto h-full" style={{ maxWidth: '615px', minHeight: '940px' }}>
                            <AccordionComponent ref={accordion} className="bg-transparent !border-0 !my-1" expandMode="Single">
                                <AccordionItemsDirective>
                                    {
                                        FAQData.map((data) => (
                                            <AccordionItemDirective key={data.id} cssClass="!border-0 !rounded-xl mb-2" expanded={data.id == 1}
                                                header={() => <div className="w-full font-normal pl-1 sm:p-0 pr-12">{data.question}</div>}
                                                content={() => <div className="px-4 sm:px-3 py-3 bg-gray-50 dark:bg-gray-700">{data.answer}</div>}
                                            >
                                            </AccordionItemDirective>
                                        ))
                                    }
                                </AccordionItemsDirective>
                            </AccordionComponent>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={'faq-bs'} id={styles.FAQ} className="w-100 px-3 py-4 py-sm-5 mx-auto h-100" style={{ maxWidth: '615px', minHeight: '820px' }}>
                            <AccordionComponent ref={accordion} className="bg-transparent border-0 my-1" expandMode="Single">
                                <AccordionItemsDirective>
                                    {
                                        FAQData.map((data) => (
                                            <AccordionItemDirective key={data.id} expanded={data.id == 1}
                                                header={() => <div className="w-100 ps-1 py-1 p-sm-0 pe-5">{data.question}</div>}
                                                content={() => <div className="p-3 bg-body-tertiary text-body">{data.answer}</div>}
                                            >
                                            </AccordionItemDirective>
                                        ))
                                    }
                                </AccordionItemsDirective>
                            </AccordionComponent>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
