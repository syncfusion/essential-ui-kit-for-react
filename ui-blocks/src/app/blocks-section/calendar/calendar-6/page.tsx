'use client';

import { useRef, useEffect, useState } from 'react';
import { ButtonComponent, ChipListComponent } from '@syncfusion/ej2-react-buttons';
import { TimelineComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-layouts';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import styles from './page.module.css';

export default function Calendar6() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [width, setWidth] = useState("310px");
    const [selectedItem, setSelectedItem] = useState('Holiday');
    const [uniqueMonthsDescription, setUniqueMonthsDescription] = useState< string[] >([]);
    const [menuItems, setMenuItems] = useState([
        { text: 'Holiday', iconCss: 'e-icons e-check' },
        { text: 'My PTO', iconCss: '' }
    ]);
    const sidebar = useRef<SidebarComponent | null>(null);
    const timeline = useRef<TimelineComponent | null>(null);

    const templateContents: any[] = [
        { title: 'Labor Day', description: 'Mon, Sep 2' },
        { title: 'Patriot Day', description: 'Wed, Sep 11' },
        { title: 'Eid e Milad', description: 'Wed, Sep 16' },
        { title: 'Columbus Day', description: 'Mon, Oct 14' },
        { title: 'Halloween', description: 'Thu, Oct 31' },
        { title: 'Veterans Day', description: 'Mon, Nov 11' },
        { title: 'Thanksgiving Day', description: 'Thu, Nov 28' },
        { title: 'Black Friday', description: 'Fri, Nov 29' }
    ];
 
    const getUniqueMonths = (): void => {
        const months: string[] = [];
        const descriptions: string[] = [];
        templateContents.forEach((item) => {
            const month = item.description.split(", ")[1].split(" ")[0];
            if (!months.includes(month)) {
                months.push(month);
                descriptions.push(item.description);
            }
        });
        setUniqueMonthsDescription(descriptions);
    };

    const leaveOptions = (args: any): void => {
        const selectedText = args.item.text || 'Holiday';
        setSelectedItem(selectedText);
        const updatedItems = menuItems.map((item) => ({
            ...item,
            iconCss: item.text === selectedText ? 'e-icons e-check' : '',
        }));
        setMenuItems(updatedItems);
    };

    const getMonthAbbreviation = (date: any): string => {
        return date.split(", ")[1].split(" ")[0];
    };
  
    const handleResize = (): void => {
        setWidth(window.innerWidth < 540 ? '100%' : '310px');
        /* SB Code - Start */
        setTimeout(() => {
            timeline.current?.refresh();  
        }, 10);
        /* SB Code - End */
    };
    
    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'calendar-6' && blockData.theme) {
                    setTheme(blockData.theme);
                }
            } catch (error) {
                console.log('Error parsing message data: ', error);
            }
        }
    }
    /* SB Code - End */

    useEffect(() => {
        /* SB Code - Start */
        window.addEventListener('message', handleMessageEvent);
        /* SB Code - End */
        setTimeout(() => {
            timeline.current?.refresh();
        }, 250);
        window.addEventListener('resize', handleResize);
        getUniqueMonths();
        
        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    
    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-900">
                        <div id={styles["calendar-timeline"]} style={{ height: '912px', width: width, float: 'right' }}>
                            <SidebarComponent className="w-full bg-white dark:bg-gray-900" ref={sidebar} position="Right" type="Push" width={width} isOpen={true} showBackdrop={true} style={{ display: "block" }}>
                                <div>
                                    <div className="flex justify-between items-center px-4 py-3">
                                        <div className="w-32">
                                            <label className="text-sm text-gray-900 dark:text-white">CALENDAR</label>
                                            <DatePickerComponent start="Decade" depth="Decade" format="yyyy"></DatePickerComponent>
                                        </div>
                                        <ButtonComponent className="e-flat text-base" iconCss="e-icons e-close" onClick={() => sidebar.current?.hide()} type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="flex px-4 py-2 border-y border-gray-200 dark:border-gray-600 justify-between">
                                    <ButtonComponent className="e-primary e-outline" iconCss="e-icons e-plus" content="Request time off" type="button"></ButtonComponent>
                                    <div className="my-auto">
                                        <DropDownButtonComponent items={menuItems} cssClass="e-flat background-none !border-none e-caret-hide" iconCss="e-icons e-more-vertical-2" type="button" select={leaveOptions}></DropDownButtonComponent>
                                    </div>
                                </div>
                                <div className="p-4">
                                    {selectedItem === 'Holiday' ? (
                                        <div style={{ height: '756px' }}>
                                            <TimelineComponent ref={timeline}>
                                                <ItemsDirective>
                                                    {templateContents.map((item, index) => (
                                                        <ItemDirective key={index} content={() =>
                                                            <div className="content-container">
                                                                <div className="flex justify-between pb-1">
                                                                    <div className="text-body small font-medium">{item.title}</div>
                                                                    {uniqueMonthsDescription.includes(item.description) && (
                                                                        <ChipListComponent cssClass="!text-xs !m-0 !bg-cyan-100 !text-cyan-600 dark:!bg-cyan-900 dark:!text-cyan-300" text={getMonthAbbreviation(item.description).toUpperCase()}></ChipListComponent>
                                                                    )}
                                                                </div>
                                                                <span className="e-badge e-badge-pill border border-gray-200 dark:border-gray-600 e-bigger e-badge-secondary">{item.description}</span>
                                                            </div>}
                                                        ></ItemDirective>
                                                    ))}
                                                </ItemsDirective>
                                            </TimelineComponent>
                                        </div>
                                    ) : selectedItem === "My PTO" ? (
                                        <div className="grid gap-3">
                                            <div className="grid gap-2">
                                                <p className="m-0 text-gray-700 dark:text-gray-300">September 2024</p>
                                                <div className="e-card shadow-none pt-3 border-gray-200 dark:border-gray-600 flex-row justify-between">
                                                    <div className="e-card-stacked">
                                                        <div className="e-card-content">
                                                            <div className="font-normal text-xs text-gray-500 dark:text-gray-300 mb-0.5">3 day request</div>
                                                            <div className="text-xs font-semibold mb-2">24 Sep - 26 Sep</div>
                                                            <span className="e-badge e-badge-pill e-bigger e-badge-secondary border border-gray-200 dark:border-gray-600">Casual</span>
                                                        </div>
                                                    </div>
                                                    <span className="e-badge e-badge-pill mr-3 e-bigger e-badge-danger">Declined</span>
                                                </div>
                                                <div className="e-card shadow-none pt-3 border-gray-200 dark:border-gray-600 flex-row justify-between">
                                                    <div className="e-card-stacked">
                                                        <div className="e-card-content">
                                                            <div className="font-normal text-xs text-gray-500 dark:text-gray-300 mb-0.5">Half day request</div>
                                                            <div className="text-xs font-semibold mb-2">04 Sep</div>
                                                            <span className="e-badge e-badge-pill e-bigger e-badge-info">Sick</span>
                                                        </div>
                                                    </div>
                                                    <span className="e-badge e-badge-pill mr-3 e-bigger e-badge-warning">Awaiting</span>
                                                </div>
                                            </div>
                                            <div className="grid gap-2">
                                                <p className="m-0 text-gray-700 dark:text-gray-300">July 2024</p>
                                                <div className="e-card shadow-none pt-3 border-gray-200 dark:border-gray-600 flex-row justify-between">
                                                    <div className="e-card-stacked">
                                                        <div className="e-card-content">
                                                            <div className="font-normal text-xs text-gray-500 dark:text-gray-300 mb-0.5">2 day request</div>
                                                            <div className="text-xs font-semibold mb-2">23 Jul - 24 Jul</div>
                                                            <span className="e-badge e-badge-pill e-bigger e-badge-secondary border border-gray-200 dark:border-gray-600">Casual</span>
                                                        </div>
                                                    </div>
                                                    <span className="e-badge e-badge-pill mr-3 e-bigger e-badge-success">Approved</span>
                                                </div>
                                                <div className="e-card shadow-none pt-3 border-gray-200 dark:border-gray-600 flex-row justify-between">
                                                    <div className="e-card-stacked">
                                                        <div className="e-card-content">
                                                            <div className="font-normal text-xs text-gray-500 mb-0.5">Full day request</div>
                                                            <div className="text-xs font-semibold mb-2">03 Jul</div>
                                                            <span className="e-badge e-badge-pill e-bigger e-badge-info">Sick</span>
                                                        </div>
                                                    </div>
                                                    <span className="e-badge e-badge-pill mr-3 e-bigger e-badge-success">Approved</span>
                                                </div>
                                            </div>
                                            <div className="grid gap-2">
                                                <p className="m-0 text-gray-700 dark:text-gray-300">June 2024</p>
                                                <div className="e-card shadow-none pt-3 border-gray-200 dark:border-gray-600 flex-row justify-between">
                                                    <div className="e-card-stacked">
                                                        <div className="e-card-content">
                                                            <div className="font-normal text-xs text-gray-500 mb-0.5">5 days request</div>
                                                            <div className="text-xs font-semibold mb-2">11 Jun - 15 Jun</div>
                                                            <span className="e-badge e-badge-pill e-bigger e-badge-secondary border border-gray-200 dark:border-gray-600">Casual</span>
                                                        </div>
                                                    </div>
                                                    <span className="e-badge e-badge-pill e-bigger mr-3 e-badge-success">Approved</span>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 absolute top-0 right-0">
                            <ButtonComponent cssClass="e-round e-large e-icons e-chevron-left" type="button" onClick={() => sidebar.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-light">
                        <div id={styles["calendar-timeline"]} style={{ height: "940px", width: width, float: "right" }}>
                            <SidebarComponent className="bg-body" ref={sidebar} position="Right" type="Push" width={width} isOpen={true} showBackdrop={true} style={{ display: "block" }}>
                                <div>
                                    <div className="d-flex justify-content-between align-items-center p-3">
                                        <div className="w-50">
                                            <label className="fs-6 text-body-secondary">CALENDAR</label>
                                            <DatePickerComponent start="Decade" depth="Decade" format="yyyy"></DatePickerComponent>
                                        </div>
                                        <ButtonComponent className="e-flat fs-6" iconCss="e-icons e-close" type="button" onClick={() => sidebar.current?.hide()}></ButtonComponent>
                                    </div>
                                </div>
                                <div className="d-flex p-3 border-bottom border-top border-light-subtle justify-content-between">
                                    <ButtonComponent className="e-primary e-outline" iconCss="e-icons e-plus" content="Request time off" type="button"></ButtonComponent>
                                    <div className="my-auto">
                                        <DropDownButtonComponent items={menuItems} cssClass="e-flat border-0 e-caret-hide" iconCss="e-icons e-more-vertical-2" type="button" select={leaveOptions}></DropDownButtonComponent>
                                    </div>
                                </div>
                                {selectedItem === "Holiday" ? (
                                    <div className="p-4 bg-body" style={{ height: "730px" }}>
                                        <TimelineComponent ref={timeline}>
                                            <ItemsDirective>
                                                {templateContents.map((item, index) => (
                                                    <ItemDirective key={index} content={() =>
                                                        <div className="content-container">
                                                            <div className="d-flex justify-content-between pb-1">
                                                                <div className="text-body text-sm font-weight-medium">{item.title}</div>
                                                                {uniqueMonthsDescription?.includes(item.description) && (
                                                                    <ChipListComponent cssClass="e-info m-0 small" id="monthChip" text={getMonthAbbreviation(item.description).toUpperCase()}></ChipListComponent>
                                                                )}
                                                            </div>
                                                            <span className="e-badge e-badge-pill border border-light-subtle e-badge-secondary px-2 lh-sm fw-normal">{item.description}</span>
                                                        </div>}
                                                    ></ItemDirective>
                                                ))}
                                            </ItemsDirective>
                                        </TimelineComponent>
                                    </div>
                                ) : selectedItem === "My PTO" ? (
                                    <div className="p-4">
                                        <div>
                                            <p className="m-0 text-body-secondary">September 2024</p>
                                            <div className="e-card border border-light-subtle shadow-none my-2">
                                                <div className="e-card-content d-flex justify-content-between">
                                                    <div>
                                                        <div className="text-body-secondary fs-sm m-0">3 day request</div>
                                                        <div className="text-small fw-bold mt-1 m-0 mb-2">24 Sep - 26 Sep</div>
                                                        <span className="e-badge e-badge-pill e-badge-secondary border border-light-subtle lh-sm fw-normal">Casual</span>
                                                    </div>
                                                    <span className="e-badge e-badge-pill e-badge-danger">Declined</span>
                                                </div>
                                            </div>
                                            <div className="e-card border border-light-subtle shadow-none">
                                                <div className="e-card-content d-flex justify-content-between">
                                                    <div>
                                                        <div className="text-body-secondary fs-sm m-0">Half day request</div>
                                                        <div className="text-small fw-bold mt-1 m-0 mb-2">04 Aug</div>
                                                        <span className="e-badge e-badge-pill e-badge-info">Sick</span>
                                                    </div>
                                                    <span className="e-badge e-badge-pill e-badge-warning">Awaiting</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-3">
                                            <p className="m-0 text-body-secondary">July 2024</p>
                                            <div className="e-card border border-light-subtle shadow-none my-2">
                                                <div className="e-card-content d-flex justify-content-between">
                                                    <div>
                                                        <div className="text-body-secondary fs-sm m-0">2 day request</div>
                                                        <div className="text-small fw-bold mt-1 m-0 mb-2">23 Jul - 24 Jul</div>
                                                        <span className="e-badge e-badge-pill border e-badge-secondary border-light-subtle lh-sm fw-normal">Casual</span>
                                                    </div>
                                                    <span className="e-badge e-badge-pill e-badge-success">Approved</span>
                                                </div>
                                            </div>
                                            <div className="e-card border border-light-subtle shadow-none my-2">
                                                <div className="e-card-content d-flex justify-content-between">
                                                    <div>
                                                        <div className="text-body-secondary fs-sm m-0">Full day request</div>
                                                        <div className="text-small fw-bold mt-1 m-0 mb-2">03 Jul</div>
                                                        <span className="e-badge e-badge-pill e-badge-info">Sick</span>
                                                    </div>
                                                    <span className="e-badge e-badge-pill e-bigger e-badge-success">Approved</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="m-0 text-body-secondary">November 2024</p>
                                            <div className="e-card border border-light-subtle shadow-none mt-2">
                                                <div className="e-card-content d-flex justify-content-between">
                                                    <div>
                                                        <div className="text-body-secondary fs-sm m-0">5 days request</div>
                                                        <div className="text-small fw-bold mt-1 m-0 mb-2">11 Jun - 15 Jun</div>
                                                        <span className="e-badge e-badge-pill e-badge-secondary border border-light-subtle lh-sm fw-normal">Casual</span>
                                                    </div>
                                                    <span className="e-badge e-badge-pill e-badge-success">Approved</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : null}
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 position-absolute top-0 end-0">
                            <ButtonComponent cssClass="e-round e-large e-icons e-chevron-left" type="button" onClick={() => sidebar.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );
        };
    };

    return getContent();
}
