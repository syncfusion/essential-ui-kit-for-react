'use client';

import { useEffect, useState } from "react";

export default function AIPromptCard4() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-prompt-card-4' && blockData.theme) {
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
                    <section className="bg-gray-50 dark:bg-gray-900">
                        <div className="py-20 w-full px-4 lg:max-w-4xl mx-auto sm:px-6" style={{ minHeight:"48rem" }}>
                            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:gap-10">
                                <div className="flex flex-col items-center">
                                    <div>
                                        <img className="rounded-lg" src="/react/essential-ui-kit/blocks/assets/images/ai/prompt-card/visual-prompt-card/mid-journey.jpg" alt="mid journey" />
                                    </div>
                                    <div className="e-card rounded-lg border-none justify-center w-10/12" style={{ bottom: "10%" }}>
                                        <div className="e-card-header !w-full !px-4 !pb-2 !pt-4">
                                            <h2 className="text-sm font-medium text-gray-900 dark:text-white">Midjourney</h2>
                                        </div>
                                        <div className="e-card-content !px-4 !pb-4">
                                            <p className="text-xs truncate">Enraged warrior, monsterlike armor, living armor, chaotic energy, glowing eyes, cinematic lighting, ultra-detailed, concept art style.</p>
                                        </div>
                                    </div>
                                </div>
                            <div className="flex flex-col items-center">
                                    <div >
                                        <img className="rounded-lg" src="/react/essential-ui-kit/blocks/assets/images/ai/prompt-card/visual-prompt-card/alien-fish.jpg" alt="alien fish" />
                                    </div>
                                    <div className="e-card rounded-lg border-none justify-center w-10/12" style={{ bottom: "10%" }}>
                                        <div className="e-card-header !w-full !px-4 !pb-2 !pt-4">
                                            <h2 className="text-sm font-medium text-gray-900 dark:text-white">DALL-E</h2>
                                        </div>
                                        <div className="e-card-content !px-4 !pb-4">
                                            <p className="text-xs truncate">Photo of an extremely cute alien fish swimming in shallow water, with a soft pink body, starfish-like limbs, and a curious expression.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body-tertiary">
                        <div className="py-5 w-100 px-3 mx-auto" style={{ minHeight:"49rem", maxWidth: "826px" }}>
                            <div className="row g-3 g-lg-5">
                                <div className="col-sm-6 d-flex flex-column align-items-center">
                                    <div>
                                        <img className="rounded object-fit-cover w-100 h-100" src="/react/essential-ui-kit/blocks/assets/images/ai/prompt-card/visual-prompt-card/mid-journey.jpg" alt="mid journey" />
                                    </div>
                                    <div className="e-card border-0 shadow-lg rounded-3 bg-body d-flex justify-content-center position-relative" style={{ bottom: "10%", width: "90%" }}>
                                        <div className="e-card-header w-100 px-3 pt-3 pb-2 border-0 bg-transparent">
                                            <h2 className="small mb-0 fw-medium text-body">Midjourney</h2>
                                        </div>
                                        <div className="e-card-content px-3 pb-3 pt-0">
                                            <p className="text-body-secondary small text-truncate mb-0">Enraged warrior, monsterlike armor, living armor, chaotic energy, glowing eyes, cinematic lighting, ultra-detailed, concept art style.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 d-flex flex-column align-items-center">
                                    <div>
                                        <img className="rounded object-fit-cover w-100 h-100" src="/react/essential-ui-kit/blocks/assets/images/ai/prompt-card/visual-prompt-card/alien-fish.jpg" alt="alien fish" />
                                    </div>
                                    <div className="e-card border-0 shadow-lg rounded-3 bg-body d-flex justify-content-center position-relative" style={{ bottom: "10%", width: "90%" }}>
                                        <div className="e-card-header w-100 px-3 pt-3 pb-2 border-0 bg-transparent">
                                            <h2 className="small mb-0 fw-medium text-body">DALL-E</h2>
                                        </div>
                                        <div className="e-card-content px-3 pb-3 pt-0">
                                            <p className="text-body-secondary small text-truncate mb-0">Photo of an extremely cute alien fish swimming in shallow water, with a soft pink body, starfish-like limbs, and a curious expression.</p>
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
