'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { Inject, ChartComponent, SeriesCollectionDirective, SeriesDirective, Category, StackingAreaSeries, Legend, Tooltip } from "@syncfusion/ej2-react-charts";

export default function AreaChart5() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [xAxisLabelRotation, setLabelRotation] = useState(0);
    const chart = useRef<ChartComponent | null>(null);
    const yearDropDown = useRef<DropDownButtonComponent | null>(null);

    const areaChartData: object[] = [
        { month: 'Jan', nike: 27, iPhone: 15, ps5: 6 },
        { month: 'Feb', nike: 30, iPhone: 20, ps5: 10 },
        { month: 'Mar', nike: 32, iPhone: 21, ps5: 9 },
        { month: 'Apr', nike: 39, iPhone: 14, ps5: 10 },
        { month: 'May', nike: 36, iPhone: 13, ps5: 9 },
        { month: 'Jun', nike: 33, iPhone: 14, ps5: 9 },
        { month: 'Jul', nike: 31, iPhone: 17, ps5: 4 },
        { month: 'Aug', nike: 32, iPhone: 17, ps5: 3 },
        { month: 'Sep', nike: 33, iPhone: 14, ps5: 4 },
        { month: 'Oct', nike: 30, iPhone: 13, ps5: 6 },
        { month: 'Nov', nike: 29, iPhone: 18, ps5: 4 },
        { month: 'Dec', nike: 35, iPhone: 20, ps5: 3 }
    ];

    const primaryXAxis: object = {
        valueType: 'Category',
        labelPlacement: 'OnTicks',
        edgeLabelPlacement: 'Shift',
        labelIntersectAction: 'None',
        labelRotation: xAxisLabelRotation,
        interval: 1,
        majorGridLines: { width: 0 },
        minorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { fontWeight: '500' }
    };

    const primaryYAxis: object = {
        minimum: 20,
        maximum: 70,
        interval: 10,
        labelFormat: '{value}k',
        labelStyle: { fontWeight: '500' },
        majorGridLines: { width: 1 },
        minorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        lineStyle: { width: 0 }
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
        handleResize();
    };

    const handleResize = (): void => {
        const newRotation = window.innerWidth < 767 ? -90 : 0;
        setLabelRotation(newRotation);
        if (yearDropDown.current?.element?.classList.contains("e-active")) {
            yearDropDown.current.toggle();
        }
    };
    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'area-chart-5' && blockData.theme) {
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
        if (chart.current) {
            chart.current.refresh();
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
                    <section className="bg-white dark:bg-gray-900">
                        <div key={"areachart-5-tw"} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{ maxWidth: "897px" }}>
                                <div className="flex justify-between flex-col sm:flex-row items-start">
                                    <div>
                                        <h1 className="text-base font-medium text-gray-900 dark:text-white">Product Sales Overview</h1>
                                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mt-2">Yearly sales data</p>
                                    </div>
                                    <div className="flex justify-between sm:justify-end w-full sm:w-auto sm:gap-3 mt-4 sm:mt-0">
                                        <DropDownButtonComponent ref={yearDropDown} content="2024" items={[{ text: "2024" }, { text: "2023" }, { text: "2022" }, { text: "2021" }, { text: "2020" }]} type="button"></DropDownButtonComponent>
                                        <div>
                                            <ButtonComponent cssClass="mr-2" iconCss="e-icons e-refresh" type="button"></ButtonComponent>
                                            <ButtonComponent iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <ChartComponent ref={chart} height="300px" chartArea={{ border: { width: 0 } }} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} legendSettings={{ visible: true, enableHighlight: true, padding: 14 }} tooltip={{ enable: true, showNearestTooltip: true }} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                        <Inject services={[StackingAreaSeries, Legend, Category, Tooltip]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={areaChartData} type="StackingArea" xName="month" yName="nike" name="Nike Air Max 270" legendShape="Rectangle" fill="#267DDA" opacity={1} width={2} ></SeriesDirective>
                                            <SeriesDirective dataSource={areaChartData} type="StackingArea" xName="month" yName="iPhone" name="Apple iPhone 15" legendShape="Rectangle" fill="#FFB900" opacity={1} width={2}></SeriesDirective>
                                            <SeriesDirective dataSource={areaChartData} type="StackingArea" xName="month" yName="ps5" name="Sony PlayStation 5" legendShape="Rectangle" fill="#01A8B5" opacity={1} width={2}></SeriesDirective>
                                        </SeriesCollectionDirective>
                                    </ChartComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"areachart-5-bs"} className="vh-100 d-flex justify-content-center p-3 p-sm-4">
                            <div className="w-100" style={{ maxWidth: "897px" }}>
                                <div className="d-flex justify-content-between flex-column flex-sm-row align-items-start">
                                    <div>
                                        <h1 className="fs-6 fw-medium text-body text-nowrap mb-1">Product Sales Overview</h1>
                                        <p className="small fw-normal text-body-secondary mb-1 mb-sm-0">Yearly sales data</p>
                                    </div>
                                    <div className="d-flex justify-content-between justify-content-sm-end w-100 gap-sm-1 mt-3 mt-sm-0">
                                        <DropDownButtonComponent ref={yearDropDown} cssClass="e-outline" content="2024" items={[{ text: "2024" }, { text: "2023" }, { text: "2022" }, { text: "2021" }, { text: "2020" }]} type="button"></DropDownButtonComponent>
                                        <div>
                                            <ButtonComponent cssClass="mx-2 e-outline" iconCss="e-icons e-refresh" type="button"></ButtonComponent>
                                            <ButtonComponent cssClass="e-outline" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 mt-sm-5">
                                    <ChartComponent ref={chart} height="300px" chartArea={{ border: { width: 0 } }} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} legendSettings={{ visible: true, enableHighlight: true, padding: 14 }} tooltip={{ enable: true, showNearestTooltip: true }} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                        <Inject services={[StackingAreaSeries, Legend, Category, Tooltip]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={areaChartData} type="StackingArea" xName="month" yName="nike" name="Nike Air Max 270" legendShape="Rectangle" fill="#006EEF" opacity={1} width={2} ></SeriesDirective>
                                            <SeriesDirective dataSource={areaChartData} type="StackingArea" xName="month" yName="iPhone" name="Apple iPhone 15" legendShape="Rectangle" fill="#FF9900" opacity={1} width={2}></SeriesDirective>
                                            <SeriesDirective dataSource={areaChartData} type="StackingArea" xName="month" yName="ps5" name="Sony PlayStation 5" legendShape="Rectangle" fill="#00EFA7" opacity={1} width={2}></SeriesDirective>
                                        </SeriesCollectionDirective>
                                    </ChartComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
