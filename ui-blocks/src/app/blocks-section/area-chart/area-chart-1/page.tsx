'use client';

import { useEffect, useState, useRef } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { Inject, ChartComponent, SeriesCollectionDirective, SeriesDirective, StackingAreaSeries, Category, Tooltip } from "@syncfusion/ej2-react-charts";

export default function AreaChart1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const chartRef = useRef<ChartComponent | null>(null);
    const rangeDropdownRef = useRef<DropDownButtonComponent | null>(null);

    const financialData: object[] = [
        { Day: 'Mon', Revenue: 8000, Expense: 6000 },
        { Day: 'Tue', Revenue: 12000, Expense: 10000 },
        { Day: 'Wed', Revenue: 12000, Expense: 22000 },
        { Day: 'Thu', Revenue: 18000, Expense: 20000 },
        { Day: 'Fri', Revenue: 20000, Expense: 20000 },
        { Day: 'Sat', Revenue: 26000, Expense: 12000 },
        { Day: 'Sun', Revenue: 25000, Expense: 14000 }
    ];

    const primaryXAxis: object = {
        valueType: 'Category',
        labelPlacement: 'OnTicks',
        labelStyle: { fontWeight: '500' }
    };

    const primaryYAxis: object = {
        labelFormat: '${value}',
        minimum: 5000,
        maximum: 40000,
        interval: 5000,
        labelStyle: { fontWeight: '500' }
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
    };

    const handleResize = (): void => {
        if (rangeDropdownRef.current?.element?.classList.contains("e-active")) {
            rangeDropdownRef.current.toggle();
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'area-chart-1' && blockData.theme) {
                    setTheme(blockData.theme);
                }
                else if (blockData.mode) {
                    setIsDarkMode(blockData.mode == 'dark');
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
        window.addEventListener('resize', handleResize);
        if (chartRef.current) {
            chartRef.current.refresh();
        }
        return () => {
            /* SB Code - Start */
            window.removeEventListener('message', handleMessageEvent);
            /* SB Code - End */
            window.removeEventListener('resize', handleResize);
        };

    }, [isDarkMode]);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-950">
                        <div key={"areachart-1-tw"} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full">
                                <div className="flex justify-between">
                                    <h1 className="font-medium dark:text-white">Expenditure Analysis</h1>
                                    <ButtonComponent cssClass="e-outline sm:hidden e-icons e-description" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-outline hidden sm:block" content="View Report" type="button"></ButtonComponent>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:!justify-between mt-3 gap-2 items-start">
                                    <DropDownButtonComponent ref={rangeDropdownRef} className="e-outline inline-block sm:hidden" content="Year" items={[{ text: 'Day' }, { text: 'Week' }, { text: 'Month' }, { text: 'Year' }, { text: 'Custom' }]}></DropDownButtonComponent>
                                    <div className="flex flex-wrap sm:justify-between items-center mt-3">
                                        <span className="text-xl font-semibold text-gray-900 dark:text-white">$53.9K</span>
                                        <span className="text-sm justify-end e-icons e-arrow-up text-green-700 ml-2"></span>
                                        <span className="text-xs text-green-700">2.2% of Last Month</span>
                                    </div>
                                    <div className="e-btn-group hidden sm:block">
                                        <input type="radio" id="day" name="align" value="D" />
                                        <label className="e-btn" htmlFor="day">D</label>
                                        <input type="radio" id="week" name="align" value="W" />
                                        <label className="e-btn" htmlFor="week">W</label>
                                        <input type="radio" id="month" name="align" value="M" />
                                        <label className="e-btn" htmlFor="month">M</label>
                                        <input type="radio" id="year" name="align" value="Y" defaultChecked />
                                        <label className="e-btn" htmlFor="year">Y</label>
                                        <input type="radio" id="custom" name="align" value="Custom" />
                                        <label className="e-btn" htmlFor="custom">Custom</label>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row items-start gap-2 mt-3 mb-4">
                                    <span className="e-badge e-badge-success e-bigger">Income: $88,840</span>
                                    <span className="e-badge e-badge-danger e-bigger">Expenses: $34,112</span>
                                </div>
                                <ChartComponent ref={chartRef} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} width="'100%'" tooltip={{enable:true}} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                    <Inject services={[StackingAreaSeries, Category, Tooltip]} />
                                    <SeriesCollectionDirective>
                                        <SeriesDirective dataSource={financialData} type="StackingArea" xName="Day" yName="Revenue" fill="#D83B01" width={2} opacity={0.2} marker={{ visible: true, shape: 'Circle', isFilled: true }} border={{ color: '#D83B01', width: 2 }}></SeriesDirective>
                                        <SeriesDirective dataSource={financialData} type="StackingArea" xName="Day" yName="Expense" fill="#91BD34" width={2} opacity={0.2} marker={{ visible: true, shape: 'Circle', isFilled: true }} border={{ color: '#91BD34', width: 2 }}></SeriesDirective>
                                    </SeriesCollectionDirective>
                                </ChartComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"areachart-1-bs"} className="vh-100 d-flex justify-content-center p-3 p-sm-4">
                            <div className="w-100">
                                <div className="d-flex justify-content-between">
                                    <h1 className="text-body fs-5">Expenditure Analysis</h1>
                                    <ButtonComponent cssClass="e-outline d-sm-none e-icons e-description" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-outline d-none d-sm-block" content="View Report" type="button"></ButtonComponent>
                                </div>
                                <div className="d-flex flex-column flex-sm-row justify-content-sm-between mt-3 gap-2 align-items-start">
                                    <DropDownButtonComponent ref={rangeDropdownRef} className="e-outline d-block d-sm-none" content="Year" items={[{ text: 'Day' }, { text: 'Week' }, { text: 'Month' }, { text: 'Year' }, { text: 'Custom' }]}></DropDownButtonComponent>
                                    <div className="d-flex flex-wrap justify-content-sm-between align-items-center">
                                        <span className="fs-5 fw-semibold text-body">$53.9K</span>
                                        <span className="text-success e-icons e-arrow-up ms-1 small"></span>
                                        <span className="text-success small">2.2% of Last Month</span>
                                    </div>
                                    <div className="e-btn-group d-none d-sm-block" role="group">
                                        <input type="radio" id="day" name="align" value="D" />
                                        <label className="e-btn" htmlFor="day">D</label>
                                        <input type="radio" id="week" name="align" value="W" />
                                        <label className="e-btn" htmlFor="week">W</label>
                                        <input type="radio" id="month" name="align" value="M" />
                                        <label className="e-btn" htmlFor="month">M</label>
                                        <input type="radio" id="year" name="align" value="Y" defaultChecked />
                                        <label className="e-btn" htmlFor="year">Y</label>
                                        <input type="radio" id="custom" name="align" value="Custom" />
                                        <label className="e-btn" htmlFor="custom">Custom</label>
                                    </div>
                                </div>
                                <div className="d-flex flex-column flex-sm-row align-items-start gap-2 mt-2 mb-4">
                                    <span className="e-badge e-badge-success">Income: $88,840</span>
                                    <span className="e-badge e-badge-warning">Expenses: $34,112</span>
                                </div>
                                <ChartComponent ref={chartRef} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} width="'100%'" tooltip={{enable:true}} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                    <Inject services={[StackingAreaSeries, Category, Tooltip]} />
                                    <SeriesCollectionDirective>
                                        <SeriesDirective dataSource={financialData} type="StackingArea" xName="Day" yName="Revenue" fill="#D83B01" width={2} opacity={0.2} marker={{ visible: true, shape: 'Circle', isFilled: true }} border={{ color: '#D83B01', width: 2 }}></SeriesDirective>
                                        <SeriesDirective dataSource={financialData} type="StackingArea" xName="Day" yName="Expense" fill="#91BD34" width={2} opacity={0.2} marker={{ visible: true, shape: 'Circle', isFilled: true }} border={{ color: '#91BD34', width: 2 }}></SeriesDirective>
                                    </SeriesCollectionDirective>
                                </ChartComponent>
                            </div>
                        </div>
                    </section>
                );
            }
        };
    return getContent();
}