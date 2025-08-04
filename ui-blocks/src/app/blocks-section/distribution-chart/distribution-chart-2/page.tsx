'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { Inject, AccumulationChartComponent, AccumulationDataLabel, AccumulationLegend, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries } from "@syncfusion/ej2-react-charts";

export default function DistributionChart2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMobileview, setIsMobileView] = useState(false);
    const [legendSettings, setLegendSettings] = useState<object>(
        {
            visible: true,
            layout: 'Auto',
            position: 'Right',
            width: '200px',
            itemPadding: 14,
            margin: { top: 16 },
            textStyle: {
                size: '14px',
                fontWeight: '400'
            }
        }
    );
    const chartRef = useRef<AccumulationChartComponent | null>(null);
    const rangeDropdownRef = useRef<DropDownButtonComponent | null>(null);

    const chartData: object[] = [
        { id: 1, xAxis: 'Product', yAxis: 30 },
        { id: 2, xAxis: 'Restaurant and Bars', yAxis: 23 },
        { id: 3, xAxis: 'Internet and Media', yAxis: 18 },
        { id: 4, xAxis: 'Pay for workspace', yAxis: 17 },
        { id: 5, xAxis: 'Other', yAxis: 12 }
    ];

    const dataLabel: object = { visible: true, position: 'Inside', name: 'y', format: '{value}%' };

    const getBorder = (borderColor: string): object => {
        return {
            color: isDarkMode ? borderColor : '#FFFFFF',
            width: 3
        };
    };

    const textRender = (args: any): void => {
        args.font.color = ['#FFFFFF', '#000000', '#000000', '#FFFFFF', '#000000'][args.point.index];
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
    };

    const handleResize = (): void => {
        const isMobile = window.innerWidth <= 640;
        setIsMobileView(isMobile);
        const legendposition = isMobile ? { position: 'Bottom', width: '100%' } : { position: 'Right', width: '200px' };
        setLegendSettings({ ...legendSettings, ...legendposition });
        if (rangeDropdownRef.current?.element?.classList.contains("e-active")) {
            rangeDropdownRef.current.toggle();
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'distribution-chart-2' && blockData.theme) {
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
                        <div key={"distributionchart-2-tw"} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{ maxWidth: '530px' }}>
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-base font-medium text-gray-900 dark:text-white">Transfer History</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Keep track of your spending</p>
                                    </div>
                                    <ButtonComponent cssClass="e-outline hidden sm:block" content="Download Report" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-outline sm:hidden" iconCss="e-icons e-download" type="button"></ButtonComponent>
                                </div>
                                <div className="w-fit py-5 mx-auto hidden sm:block">
                                    <div className="e-btn-group">
                                        <input type="radio" id="week" name="align" value="Week" defaultChecked />
                                        <label className="e-btn" htmlFor="week">Week</label>
                                        <input type="radio" id="month" name="align" value="Month" />
                                        <label className="e-btn" htmlFor="month">Month</label>
                                        <input type="radio" id="year" name="align" value="Year" />
                                        <label className="e-btn" htmlFor="year">Year</label>
                                        <input type="radio" id="custom" name="align" value="Custom" />
                                        <label className="e-btn" htmlFor="custom">Custom</label>
                                    </div>
                                </div>
                                <DropDownButtonComponent ref={rangeDropdownRef} className="e-outline sm:hidden my-4" content="Week" items={[{ text: 'Week' }, { text: 'Month' }, { text: 'Year' }, { text: 'Custom' }]} type="button"></DropDownButtonComponent>
                                <div className="mt-2">
                                    <AccumulationChartComponent ref={chartRef} width="100%" height={isMobileview ? '360px' : '240px'} legendSettings={legendSettings} enableBorderOnMouseMove={false} textRender={textRender} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                        <Inject services={[AccumulationLegend, AccumulationDataLabel, PieSeries]} />
                                        <AccumulationSeriesCollectionDirective>
                                            <AccumulationSeriesDirective dataSource={chartData} xName="xAxis" yName="yAxis" innerRadius="55%" radius="100%" dataLabel={dataLabel} palettes={["#5A61F6", "#91BD34", "#FFB900", "#DE4383", "#01A8B5"]} legendShape="Circle" border={getBorder('#000000')} borderRadius={6}></AccumulationSeriesDirective>
                                        </AccumulationSeriesCollectionDirective>
                                    </AccumulationChartComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"distributionchart-2-bs"} className="vh-100 d-flex justify-content-center p-3 p-sm-4">
                            <div className="w-100" style={{ maxWidth: '530px' }}>
                                <div className="d-flex justify-content-between align-items-start">
                                    <div className="d-flex flex-column gap-1">
                                        <p className="fs-6 fw-medium text-body mb-0">Transfer History</p>
                                        <p className="text-body-secondary small mb-0">Keep track of your spending</p>
                                    </div>
                                    <ButtonComponent cssClass="e-outline d-none d-sm-block" content="Download Report" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-outline d-sm-none" iconCss="e-icons e-download" type="button"></ButtonComponent>
                                </div>
                                <div className="mt-4 mb-3 mx-auto d-none d-sm-block" style={{ width: 'fit-content' }}>
                                    <div className="e-btn-group">
                                        <input type="radio" id="week" name="align" value="Week" defaultChecked />
                                        <label className="e-btn" htmlFor="week">Week</label>
                                        <input type="radio" id="month" name="align" value="Month" />
                                        <label className="e-btn" htmlFor="month">Month</label>
                                        <input type="radio" id="year" name="align" value="Year" />
                                        <label className="e-btn" htmlFor="year">Year</label>
                                        <input type="radio" id="custom" name="align" value="Custom" />
                                        <label className="e-btn" htmlFor="custom">Custom</label>
                                    </div>
                                </div>
                                <DropDownButtonComponent ref={rangeDropdownRef} className="e-outline d-sm-none my-3" content="Week" items={[{ text: 'Week' }, { text: 'Month' }, { text: 'Year' }, { text: 'Custom' }]} type="button"></DropDownButtonComponent>
                                <div className="mt-2">
                                    <AccumulationChartComponent ref={chartRef} width="100%" height={isMobileview ? '360px' : '240px'} legendSettings={legendSettings} enableBorderOnMouseMove={false} textRender={textRender} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                        <Inject services={[AccumulationLegend, AccumulationDataLabel, PieSeries]} />
                                        <AccumulationSeriesCollectionDirective>
                                            <AccumulationSeriesDirective dataSource={chartData} xName="xAxis" yName="yAxis" innerRadius="55%" radius="100%" dataLabel={dataLabel} palettes={["#006EEF", "#0EAB44", "#FF9900", "#EF00AC", "#00EFA7"]} legendShape="Circle" border={getBorder('#212529')} borderRadius={6}></AccumulationSeriesDirective>
                                        </AccumulationSeriesCollectionDirective>
                                    </AccumulationChartComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
