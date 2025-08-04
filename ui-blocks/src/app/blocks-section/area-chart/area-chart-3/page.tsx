'use client';

import { useEffect, useState, useRef } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { Inject, ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, Crosshair, Category, Legend, Tooltip } from "@syncfusion/ej2-react-charts";
export default function AreaChart3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [labelRotation, setLabelRotation] = useState(0);
    const chartRef = useRef<ChartComponent | null>(null);

    const areaChartData: object = [
        { XAxis: 'Jan', YAxis1: 13000, YAxis2: 8000, YAxis3: 6000 },
        { XAxis: 'Feb', YAxis1: 14000, YAxis2: 9000, YAxis3: 5000 },
        { XAxis: 'Mar', YAxis1: 15000, YAxis2: 10000, YAxis3: 2000 },
        { XAxis: 'Apr', YAxis1: 12000, YAxis2: 7000, YAxis3: 5000 },
        { XAxis: 'May', YAxis1: 16000, YAxis2: 11000, YAxis3: 5000 },
        { XAxis: 'Jun', YAxis1: 16000, YAxis2: 11000, YAxis3: 13000 },
        { XAxis: 'Jul', YAxis1: 19000, YAxis2: 14000, YAxis3: 13000 },
        { XAxis: 'Aug', YAxis1: 19000, YAxis2: 14000, YAxis3: 7000 },
        { XAxis: 'Sep', YAxis1: 12000, YAxis2: 7000, YAxis3: 7000 },
        { XAxis: 'Oct', YAxis1: 10000, YAxis2: 7000, YAxis3: 5000 },
        { XAxis: 'Nov', YAxis1: 12000, YAxis2: 5000, YAxis3: 7000 },
        { XAxis: 'Dec', YAxis1: 12500, YAxis2: 7500, YAxis3: 6500 }
    ];

    const primaryXAxis: object = {
        valueType: 'Category',
        interval: 1,
        labelIntersectAction: 'None',
        labelRotation: labelRotation,
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelStyle: { fontWeight: '500' }
    };

    const primaryYAxis: object = {
        minimum: 0,
        maximum: 30000,
        interval: 5000,
        labelFormat: '{value}',
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelStyle: { fontWeight: '500' }
    };

    const tooltip: object = {
        enable: true,
        shared: true,
        header: '',
        showHeaderLine: false
    }

    const crosshair: object = {
        enable: true,
        lineType: 'Vertical',
        snapToData: true,
        dashArray: '5,5',
        verticalLineColor: '#D1D5DB'
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
        handleResize();
    };

    const handleResize = (): void => {
        const newRotation = window.innerWidth <= 640 ? -90 : 0;
        setLabelRotation(newRotation);
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'area-chart-3' && blockData.theme) {
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
                        <div key={"areachart-3-tw"} className="h-screen flex justify-center p-4 sm:p-6 w-full">
                            <div className="w-full max-w-2xl">
                                <div className="flex flex-col gap-2 mb-4 w-full">
                                    <div className="flex justify-between gap-4">
                                        <div className="flex flex-col">
                                            <h2 className="text-base text-gray-900 font-medium dark:text-white">Saving Growth Statistics</h2>
                                            <p className="mb-0 text-sm text-gray-500">Revealing risk and growth in investments.</p>
                                        </div>
                                        <ButtonComponent cssClass="e-outline block sm:hidden h-8" iconCss="e-icons e-more-vertical-1" type="button"></ButtonComponent>
                                        <div className="hidden sm:block">
                                            <div className="e-btn-group">
                                                <input type="radio" id="all" name="align" value="All" />
                                                <label className="e-btn" htmlFor="all">All</label>
                                                <input type="radio" id="money" name="align" value="Money Market" />
                                                <label className="e-btn" htmlFor="money">Money Market</label>
                                                <input type="radio" id="stock" name="align" value="Stocks" />
                                                <label className="e-btn" htmlFor="stock">Stocks</label>
                                                <input type="radio" id="bonds" name="align" value="Bonds" defaultChecked />
                                                <label className="e-btn" htmlFor="bonds">Bonds</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ChartComponent ref={chartRef} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip} crosshair={crosshair} width="'100%'" height="'350px'" legendSettings={{ visible: false }} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                    <Inject services={[LineSeries, Category, Tooltip, Legend, Crosshair]} />
                                    <SeriesCollectionDirective>
                                        <SeriesDirective dataSource={areaChartData} type="Line" xName="XAxis" yName="YAxis1" name="MoneyMarketData" width={2} fill="#91BD34"></SeriesDirective>
                                        <SeriesDirective dataSource={areaChartData} type="Line" xName="XAxis" yName="YAxis2" name="StocksData" width={2} fill="#D83B01"></SeriesDirective>
                                        <SeriesDirective dataSource={areaChartData} type="Line" xName="XAxis" yName="YAxis3" name="BondsData" width={2} fill="#267DDA"></SeriesDirective>
                                    </SeriesCollectionDirective>
                                </ChartComponent>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={"areachart-3-bs"} className="vh-100 d-flex justify-content-center p-4 p-sm-5 w-100">
                            <div className="w-100" style={{ maxWidth: '680px' }}>
                                <div className="d-flex flex-column gap-2 mb-4">
                                    <div className="d-flex justify-content-between gap-3">
                                        <div className="d-flex flex-column">
                                            <h1 className="text-body fs-5">Saving Growth Statistics</h1>
                                            <p className="mb-0 small text-body-secondary">Revealing risk and growth in investments.</p>
                                        </div>
                                        <ButtonComponent cssClass="e-outline d-block d-sm-none" iconCss="e-icons e-more-vertical-1" type="button" style={{ height: '38px' }}></ButtonComponent>
                                        <div className="d-none d-sm-block">
                                            <div className="e-btn-group">
                                                <input type="radio" id="all" name="align" value="All" />
                                                <label className="e-btn" htmlFor="all">All</label>
                                                <input type="radio" id="money" name="align" value="Money Market" />
                                                <label className="e-btn" htmlFor="money">Money Market</label>
                                                <input type="radio" id="stock" name="align" value="Stocks" />
                                                <label className="e-btn" htmlFor="stock">Stocks</label>
                                                <input type="radio" id="bonds" name="align" value="Bonds" defaultChecked />
                                                <label className="e-btn" htmlFor="bonds">Bonds</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ChartComponent ref={chartRef} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip} crosshair={crosshair} width="'100%'" height="'350px'" legendSettings={{ visible: false }} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                    <Inject services={[LineSeries, Category, Tooltip, Legend, Crosshair]} />
                                    <SeriesCollectionDirective>
                                        <SeriesDirective dataSource={areaChartData} type="Line" xName="XAxis" yName="YAxis1" name="MoneyMarketData" width={2} fill="#91BD34"></SeriesDirective>
                                        <SeriesDirective dataSource={areaChartData} type="Line" xName="XAxis" yName="YAxis2" name="StocksData" width={2} fill="#D83B01"></SeriesDirective>
                                        <SeriesDirective dataSource={areaChartData} type="Line" xName="XAxis" yName="YAxis3" name="BondsData" width={2} fill="#267DDA"></SeriesDirective>
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
