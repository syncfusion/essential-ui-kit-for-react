'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { Inject, ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, RangeAreaSeries, DateTime } from "@syncfusion/ej2-react-charts";

export default function AreaChart8() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const [labelRotation, setLabelRotation] = useState(0);
    const chartRef = useRef<ChartComponent | null>(null);
    const rangeDropdownRef = useRef<DropDownButtonComponent | null>(null);
    const countryDropdownRef = useRef<DropDownButtonComponent | null>(null);

    const chartData: object[] = [
        { date: new Date(2025, 0, 1), high: 20, low: -10 },
        { date: new Date(2025, 0, 5), high: 18, low: -12 },
        { date: new Date(2025, 0, 10), high: 17, low: -11 },
        { date: new Date(2025, 0, 15), high: 19, low: -10 },
        { date: new Date(2025, 0, 20), high: 21, low: -12 },
        { date: new Date(2025, 1, 0), high: 23, low: -9 },
        { date: new Date(2025, 1, 5), high: 21, low: -10 },
        { date: new Date(2025, 1, 10), high: 20, low: -7 },
        { date: new Date(2025, 1, 15), high: 18, low: -6 },
        { date: new Date(2025, 1, 20), high: 19, low: -5 },
        { date: new Date(2025, 2, 0), high: 21, low: -4 },
        { date: new Date(2025, 2, 5), high: 20, low: -4 },
        { date: new Date(2025, 2, 10), high: 18, low: -5 },
        { date: new Date(2025, 2, 15), high: 17, low: -4 },
        { date: new Date(2025, 2, 20), high: 16, low: -2 },
        { date: new Date(2025, 3, 0), high: 32, low: 0 },
        { date: new Date(2025, 3, 5), high: 34, low: 2 },
        { date: new Date(2025, 3, 10), high: 30, low: 5 },
        { date: new Date(2025, 3, 15), high: 31, low: 6 },
        { date: new Date(2025, 3, 20), high: 34, low: 7 },
        { date: new Date(2025, 4, 0), high: 32, low: 4 },
        { date: new Date(2025, 4, 5), high: 30, low: 5 },
        { date: new Date(2025, 4, 10), high: 31, low: 6 },
        { date: new Date(2025, 4, 15), high: 32, low: 7 },
        { date: new Date(2025, 4, 20), high: 29, low: 10 },
        { date: new Date(2025, 5, 0), high: 31, low: 10 },
        { date: new Date(2025, 5, 5), high: 29, low: 12 },
        { date: new Date(2025, 5, 10), high: 27, low: 13 },
        { date: new Date(2025, 5, 15), high: 30, low: 15 },
        { date: new Date(2025, 5, 20), high: 32, low: 16 },
        { date: new Date(2025, 6, 0), high: 34, low: 12 },
        { date: new Date(2025, 6, 5), high: 33, low: 14 },
        { date: new Date(2025, 6, 10), high: 33, low: 16 },
        { date: new Date(2025, 6, 15), high: 34, low: 17 },
        { date: new Date(2025, 6, 20), high: 35, low: 19 },
        { date: new Date(2025, 7, 0), high: 34, low: 15 },
        { date: new Date(2025, 7, 5), high: 32, low: 17 },
        { date: new Date(2025, 7, 10), high: 31, low: 18 },
        { date: new Date(2025, 7, 15), high: 30, low: 19 },
        { date: new Date(2025, 7, 20), high: 32, low: 21 },
        { date: new Date(2025, 8, 0), high: 39, low: 18 },
        { date: new Date(2025, 8, 5), high: 37, low: 17 },
        { date: new Date(2025, 8, 10), high: 33, low: 16 },
        { date: new Date(2025, 8, 15), high: 34, low: 17 },
        { date: new Date(2025, 8, 20), high: 34, low: 18 },
        { date: new Date(2025, 9, 0), high: 32, low: 17 },
        { date: new Date(2025, 9, 5), high: 31, low: 18 },
        { date: new Date(2025, 9, 10), high: 29, low: 20 },
        { date: new Date(2025, 9, 15), high: 30, low: 19 },
        { date: new Date(2025, 9, 20), high: 31, low: 18 },
        { date: new Date(2025, 10, 0), high: 34, low: 18 },
        { date: new Date(2025, 10, 5), high: 32, low: 19 },
        { date: new Date(2025, 10, 10), high: 31, low: 17 },
        { date: new Date(2025, 10, 15), high: 33, low: 18 },
        { date: new Date(2025, 10, 20), high: 30, low: 16 },
        { date: new Date(2025, 11, 0), high: 26, low: 13 },
        { date: new Date(2025, 11, 5), high: 24, low: 14 },
        { date: new Date(2025, 11, 10), high: 23, low: 15 },
        { date: new Date(2025, 11, 15), high: 20, low: 13 },
        { date: new Date(2025, 11, 20), high: 21, low: 14 }
    ];

    const primaryXAxis: object = {
        valueType: 'DateTime',
        labelFormat: 'MMM',
        intervalType: 'Months',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        labelStyle: { fontWeight: '500' },
        labelIntersectAction: 'None',
        labelRotation: labelRotation,
        interval: 1
    };

    const primaryYAxis: object = {
        minimum: -30,
        maximum: 40,
        interval: 10,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        labelStyle: { fontWeight: '500' }
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
        handleResize();
    };

    const handleResize = (): void => {
        const isMobile = window.innerWidth <= 640;
        setIsMobileView(isMobile);
        setLabelRotation(isMobile ? -90 : 0);
        closeDropdown(rangeDropdownRef.current);
        closeDropdown(countryDropdownRef.current);
    };

    const closeDropdown = (dropdown: DropDownButtonComponent | null): void => {
        if (dropdown?.element?.classList.contains("e-active")) {
            dropdown.toggle();
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'area-chart-8' && blockData.theme) {
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
                        <div key={"areachart-8-tw"} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{ maxWidth: '1020px' }}>
                                <div className="flex flex-col gap-3 sm:gap-4">
                                    <div className="flex grow justify-between items-start gap-2">
                                        <div>
                                            <h1 className="text-base font-medium text-gray-900 dark:text-white">Temperature Analysis</h1>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-2">Temperature variations by month in &deg;C</p>
                                        </div>
                                        <ButtonComponent className="e-outline hidden sm:block" content="View Report" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-outline block sm:hidden" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                    </div>
                                    <div className="flex justify-between gap-3">
                                        <DropDownButtonComponent ref={countryDropdownRef} className="e-outline" iconCss="e-icons e-location" content={isMobileView ? '' : 'Texas, USA'} items={[{ text: 'Los Angeles, California' }, { text: 'Phoenix, Arizona' }, { text: 'San Jose, California' }, { text: 'Santa Fe, New Mexico' }, { text: 'Texas, USA' }]} type="button"></DropDownButtonComponent>
                                        <div className="flex gap-3">
                                            <ButtonComponent className="e-outline" iconCss="e-icons e-refresh" type="button"></ButtonComponent>
                                            <DropDownButtonComponent ref={rangeDropdownRef} className="e-outline" content="2024" items={[{ text: '2024' }, { text: '2023' }, { text: '2022' }, { text: '2021' }, { text: '2020' }]} type="button"></DropDownButtonComponent>
                                            <ButtonComponent className="e-outline" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 sm:mt-5">
                                    <ChartComponent ref={chartRef} height="335px" chartArea={{ border: { width: 0 } }} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                        <Inject services={[DateTime, RangeAreaSeries, LineSeries]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} border={{ width: 2, color: isDarkMode ? '#9CA3AF' : '#1F2937' }} fill={isDarkMode ? '#4B5563' : '#D1D5DB'} type="RangeArea" xName="date" high="high" low="low"></SeriesDirective>
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
                        <div key={"areachart-8-bs"} className="vh-100 d-flex justify-content-center p-3 p-sm-4">
                            <div className="w-100" style={{ maxWidth: '1020px' }}>
                                <div className="d-flex flex-column gap-2 gap-sm-3">
                                    <div className="d-flex flex-grow-1 justify-content-between align-items-start gap-2">
                                        <div>
                                            <h1 className="fs-6 fw-medium text-body">Temperature Analysis</h1>
                                            <p className="small text-body-secondary mt-2 mb-0">Temperature variations by month in &deg;C</p>
                                        </div>
                                        <ButtonComponent className="e-outline d-none d-sm-block" content="View Report" type="button"></ButtonComponent>
                                        <ButtonComponent className="e-outline d-block d-sm-none" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                    </div>
                                    <div className="d-flex justify-content-between gap-3 mt-1 mt-sm-0">
                                        <DropDownButtonComponent ref={countryDropdownRef} className="e-outline" iconCss="e-icons e-location fs-6" content={isMobileView ? '' : 'Texas, USA'} items={[{ text: 'Los Angeles, California' }, { text: 'Phoenix, Arizona' }, { text: 'San Jose, California' }, { text: 'Santa Fe, New Mexico' }, { text: 'Texas, USA' }]} type="button"></DropDownButtonComponent>
                                        <div className="d-flex gap-2">
                                            <ButtonComponent className="e-outline" iconCss="e-icons e-refresh" type="button"></ButtonComponent>
                                            <DropDownButtonComponent ref={rangeDropdownRef} className="e-outline mx-1" content="2024" items={[{ text: '2024' }, { text: '2023' }, { text: '2022' }, { text: '2021' }, { text: '2020' }]} type="button"></DropDownButtonComponent>
                                            <ButtonComponent className="e-outline" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <ChartComponent ref={chartRef} height="335px" chartArea={{ border: { width: 0 } }} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                        <Inject services={[DateTime, RangeAreaSeries, LineSeries]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} border={{ width: 2, color: isDarkMode ? '#ADB5BD' : '#343A40' }} fill={isDarkMode ? '#495057' : '#DEE2E6'} type="RangeArea" xName="date" high="high" low="low"></SeriesDirective>
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
