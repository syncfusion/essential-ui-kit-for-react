'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { Category, ChartComponent, ColumnSeries, DataLabel, Inject, Legend, RangeColorSettingDirective, RangeColorSettingsDirective, SeriesCollectionDirective, SeriesDirective } from "@syncfusion/ej2-react-charts";

export default function BarChart7() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [columnWidth, setcolumnWidth] = useState(0.6);
    const [labelRotation, setLabelRotation] = useState(0);
    const chartRef = useRef<ChartComponent | null>(null);
    const countryDropdown = useRef<DropDownButtonComponent | null>(null);

    const chartData: object[] = [
        { x: "Jan", y: 6 },
        { x: "Feb", y: 8.9 },
        { x: "Mar", y: 12 },
        { x: "Apr", y: 17.5 },
        { x: "May", y: 22.1 },
        { x: "Jun", y: 25 },
        { x: "Jul", y: 29.4 },
        { x: "Aug", y: 29.6 },
        { x: "Sep", y: 25 },
        { x: "Oct", y: 21.1 },
        { x: "Nov", y: 15.5 },
        { x: "Dec", y: 9.9 }
    ];

    const primaryXAxis: object = {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelStyle: { fontWeight: '500', size: '12px' },
        labelRotation: labelRotation,
        interval: 1
    };

    const primaryYAxis: object = {
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelFormat: '{value}°C',
        labelStyle: { fontWeight: '500' }
    };

    const marker: object = {
        dataLabel: {
            visible: true,
            position: 'Outer',
            font: { color: '#6B7280' }
        }
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
    };

    const handleResize = (): void => {
        const isMobileview = window.innerWidth <= 640;
        setLabelRotation(isMobileview ? -90 : 0);
        setcolumnWidth(isMobileview ? 0.4 : 0.6);
        if (countryDropdown.current?.element?.classList.contains("e-active")) {
            countryDropdown.current.toggle();
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'bar-chart-7' && blockData.theme) {
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
                        <div key={'barchart-7-tw'} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{ maxWidth: '930px' }}>
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                                    <div className="flex justify-between">
                                        <h1 className="font-medium text-base text-gray-900 dark:text-white">Weather Trends</h1>
                                        <ButtonComponent cssClass="e-outline sm:hidden" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Location:</p>
                                        <DropDownButtonComponent ref={countryDropdown} className="e-outline" content="USA" items={[{ text: 'Canada' }, { text: 'United Kingdom' }, { text: 'Germany' }, { text: 'USA' }, { text: 'Australia' }]} type="button"></DropDownButtonComponent>
                                        <ButtonComponent cssClass="e-outline hidden sm:block ml-3" content="View Month" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" legendSettings={{ visible: true, mode: 'Range' }} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                        <Inject services={[ColumnSeries, Category, DataLabel, Legend]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} type="Column" xName="x" yName="y" name="season chart" cornerRadius={{ topLeft: 10, topRight: 10 }} legendShape="Rectangle" marker={marker} columnWidth={columnWidth}></SeriesDirective>
                                        </SeriesCollectionDirective>
                                        <RangeColorSettingsDirective>
                                            <RangeColorSettingDirective label="1°C to 10°C" start={1} end={10} colors={["#F9D422"]}></RangeColorSettingDirective>
                                            <RangeColorSettingDirective label="11°C to 20°C" start={11} end={20} colors={["#F28F3F"]}></RangeColorSettingDirective>
                                            <RangeColorSettingDirective label="21°C to 25°C" start={21} end={25} colors={["#E94F53"]}></RangeColorSettingDirective>
                                            <RangeColorSettingDirective label="26°C to 30°C" start={26} end={30} colors={["#D83B01"]}></RangeColorSettingDirective>
                                        </RangeColorSettingsDirective>
                                    </ChartComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={'barchart-7-bs'} className="vh-100 d-flex justify-content-center p-3 p-sm-4">
                            <div className="w-100" style={{ maxWidth: '930px' }}>
                                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-2">
                                    <div className="d-flex justify-content-between">
                                        <h1 className="fw-medium fs-6 text-body mb-0">Weather Trends</h1>
                                        <ButtonComponent cssClass="e-outline d-sm-none" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                    </div>
                                    <div className="d-flex gap-2 align-items-center mt-2 mt-sm-0">
                                        <p className="text-body-secondary mb-0 fs-6">Location:</p>
                                        <DropDownButtonComponent ref={countryDropdown} className="e-outline mx-1 flex-shrink-0" content="USA" items={[{ text: 'Canada' }, { text: 'United Kingdom' }, { text: 'Germany' }, { text: 'USA' }, { text: 'Australia' }]} type="button"></DropDownButtonComponent>
                                        <ButtonComponent cssClass="e-outline d-none d-sm-inline-block" content="View Month" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" legendSettings={{ visible: true, mode: 'Range' }} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                        <Inject services={[ColumnSeries, Category, DataLabel, Legend]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} type="Column" xName="x" yName="y" name="season chart" cornerRadius={{ topLeft: 10, topRight: 10 }} legendShape="Rectangle" marker={marker} columnWidth={columnWidth}></SeriesDirective>
                                        </SeriesCollectionDirective>
                                        <RangeColorSettingsDirective>
                                            <RangeColorSettingDirective label="1°C to 10°C" start={1} end={10} colors={["#F9D422"]}></RangeColorSettingDirective>
                                            <RangeColorSettingDirective label="11°C to 20°C" start={11} end={20} colors={["#F28F3F"]}></RangeColorSettingDirective>
                                            <RangeColorSettingDirective label="21°C to 25°C" start={21} end={25} colors={["#E94F53"]}></RangeColorSettingDirective>
                                            <RangeColorSettingDirective label="26°C to 30°C" start={26} end={30} colors={["#D83B01"]}></RangeColorSettingDirective>
                                        </RangeColorSettingsDirective>
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
