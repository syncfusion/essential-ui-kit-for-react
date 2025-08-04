'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { AccumulationChartComponent, AccumulationDataLabel, AccumulationLegend, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Category, ChartComponent, Inject, Legend, PieSeries, SeriesCollectionDirective, SeriesDirective, StackingColumnSeries } from "@syncfusion/ej2-react-charts";

export default function BarChart2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const barchartRef = useRef<ChartComponent | null>(null);
    const piechartRef = useRef<AccumulationChartComponent | null>(null);

    const barchartData: object[] = [
        { Date: "21", Food: 20, Grocery: 15, Shopping: 10, Transport: 40 },
        { Date: "22", Food: 15, Grocery: 10, Shopping: 10, Transport: 20 },
        { Date: "23", Food: 35, Grocery: 20, Shopping: 10, Transport: 20 },
        { Date: "24", Food: 23, Grocery: 10, Shopping: 10, Transport: 30 },
        { Date: "25", Food: 25, Grocery: 15, Shopping: 10, Transport: 25 },
        { Date: "26", Food: 23, Grocery: 20, Shopping: 10, Transport: 20 },
        { Date: "27", Food: 20, Grocery: 16, Shopping: 10, Transport: 10 }
    ];

    const piechartData: object[] = [
        { xAxis: 'Food', yAxis: 30 },
        { xAxis: 'Grocery', yAxis: 15 },
        { xAxis: 'Shopping', yAxis: 35 },
        { xAxis: 'Transport', yAxis: 20 }
    ];

    const primaryXAxis: object = {
        majorGridLines: { width: 0 },
        minorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        interval: 1,
        lineStyle: { width: 0 },
        labelIntersectAction: 'Rotate45',
        valueType: 'Category',
        labelStyle: { fontWeight: '500' }
    };

    const primaryYAxis: object = {
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        majorGridLines: { width: 1 },
        minorGridLines: { width: 1 },
        minorTickLines: { width: 0 },
        labelStyle: { size: '0px' },
        minimum: 0,
        maximum: 100,
        interval: 25
    };

    const dataLabel: object = {
        visible: true,
        position: 'Outside',
        format: '{value}%',
        font: {
            fontWeight: '400',
            size: '14px'
        },
        connectorStyle: {
            width: 0
        }
    };

    const pieLegend: object = {
        visible: true,
        position: 'Bottom',
        alignment: 'Center',
        textStyle: { size: '12px' },
        shapeWidth: 8,
        shapeHeight: 8
    };

    const centerLabel: object = {
        text: 'Today',
        textStyle: {
            fontWeight: '600',
            size: '16px'
        }
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'bar-chart-2' && blockData.theme) {
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
        if (barchartRef.current && piechartRef.current) {
            barchartRef.current.refresh();
            piechartRef.current.refresh();
        }
        /* SB Code - Start */
        window.addEventListener('message', handleMessageEvent);

        return () => {
            window.removeEventListener('message', handleMessageEvent);
        };
        /* SB Code - End */
    }, [isDarkMode]);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-950">
                        <div key={"barchart-2-tw"} className="h-screen flex justify-center p-4 sm:p-6" style={{ minHeight: '674px' }}>
                            <div className="w-full" style={{ maxWidth: '800px' }}>
                                <div className="flex justify-between items-start mb-5">
                                    <div>
                                        <h1 className="text-base font-medium text-gray-900 dark:text-white mb-2">Daily Expense</h1>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Data from 21-27 Dec, 2024</p>
                                    </div>
                                    <ButtonComponent cssClass="e-outline hidden sm:block" content="View Report" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-outline sm:hidden" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                </div>
                                <div className="flex flex-wrap items-center">
                                    <div className="w-full sm:w-7/12">
                                        <ChartComponent ref={barchartRef} width="100%" height="220px" chartArea={{ border: { width: 0 } }} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} legendSettings={{ visible: false }} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                            <Inject services={[StackingColumnSeries, Category, Legend]} />
                                            <SeriesCollectionDirective>
                                                <SeriesDirective dataSource={barchartData} type='StackingColumn' xName='Date' yName='Food' name='Food & Drink' width={2} columnWidth={0.6} legendShape='Rectangle' fill='#0D72DE'></SeriesDirective>
                                                <SeriesDirective dataSource={barchartData} type='StackingColumn' xName='Date' yName='Grocery' name='Grocery' width={2} columnWidth={0.6} legendShape='Rectangle' fill='#03B4B4'></SeriesDirective>
                                                <SeriesDirective dataSource={barchartData} type='StackingColumn' xName='Date' yName='Shopping' name='Shopping' width={2} columnWidth={0.6} legendShape='Rectangle' fill='#78B008'></SeriesDirective>
                                                <SeriesDirective dataSource={barchartData} type='StackingColumn' xName='Date' yName='Transport' name='Transport' width={2} columnWidth={0.6} legendShape='Rectangle' fill='#F39C12'></SeriesDirective>
                                            </SeriesCollectionDirective>
                                        </ChartComponent>
                                    </div>
                                    <div className="w-full sm:w-5/12">
                                        <AccumulationChartComponent ref={piechartRef} width="100%" height="300px" centerLabel={centerLabel} legendSettings={pieLegend} enableBorderOnMouseMove={false} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                            <Inject services={[AccumulationDataLabel, PieSeries, AccumulationLegend]} />
                                            <AccumulationSeriesCollectionDirective>
                                                <AccumulationSeriesDirective name='Expense data' dataSource={piechartData} xName='xAxis' yName='yAxis' border={{ width: 1 }} startAngle={0} innerRadius='65%' radius='70%' dataLabel={dataLabel} palettes={['#03B4B4', '#78B008', '#F39C12', '#0D72DE']} legendShape='Rectangle'></AccumulationSeriesDirective>
                                            </AccumulationSeriesCollectionDirective>
                                        </AccumulationChartComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"barchart-2-bs"} className="vh-100 d-flex justify-content-center p-3 p-sm-4" style={{ minHeight: '674px' }}>
                            <div className="w-100" style={{ maxWidth: '800px' }}>
                                <div className="d-flex justify-content-between align-items-start mb-3 pb-1">
                                    <div>
                                        <h1 className="text-body fs-6 fw-medium mb-2">Daily Expense</h1>
                                        <p className="text-body-secondary small m-0">Data from 21-27 Dec, 2024</p>
                                    </div>
                                    <ButtonComponent cssClass="e-outline d-none d-sm-block" content="View Report" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-outline d-sm-none" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                </div>
                                <div className="d-flex flex-wrap align-items-center">
                                    <div className="col-12 col-sm-7">
                                        <ChartComponent ref={barchartRef} width="100%" height="220px" chartArea={{ border: { width: 0 } }} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} legendSettings={{ visible: false }} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                            <Inject services={[StackingColumnSeries, Category, Legend]} />
                                            <SeriesCollectionDirective>
                                                <SeriesDirective dataSource={barchartData} type='StackingColumn' xName='Date' yName='Food' name='Food & Drink' width={2} columnWidth={0.6} legendShape='Rectangle' fill='#006EEF'></SeriesDirective>
                                                <SeriesDirective dataSource={barchartData} type='StackingColumn' xName='Date' yName='Grocery' name='Grocery' width={2} columnWidth={0.6} legendShape='Rectangle' fill='#EF6400'></SeriesDirective>
                                                <SeriesDirective dataSource={barchartData} type='StackingColumn' xName='Date' yName='Shopping' name='Shopping' width={2} columnWidth={0.6} legendShape='Rectangle' fill='#0EAB44'></SeriesDirective>
                                                <SeriesDirective dataSource={barchartData} type='StackingColumn' xName='Date' yName='Transport' name='Transport' width={2} columnWidth={0.6} legendShape='Rectangle' fill='#FDDA02'></SeriesDirective>
                                            </SeriesCollectionDirective>
                                        </ChartComponent>
                                    </div>
                                    <div className="col-12 col-sm-5">
                                        <AccumulationChartComponent ref={piechartRef} width="100%" height="300px" centerLabel={centerLabel} legendSettings={pieLegend} enableBorderOnMouseMove={false} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                            <Inject services={[AccumulationDataLabel, PieSeries, AccumulationLegend]} />
                                            <AccumulationSeriesCollectionDirective>
                                                <AccumulationSeriesDirective name='Expense data' dataSource={piechartData} xName='xAxis' yName='yAxis' border={{ width: 1 }} startAngle={0} innerRadius='65%' radius='70%' dataLabel={dataLabel} palettes={["#EF6400", "#0EAB44", "#FDDA02", "#006EEF"]} legendShape='Rectangle'></AccumulationSeriesDirective>
                                            </AccumulationSeriesCollectionDirective>
                                        </AccumulationChartComponent>
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
