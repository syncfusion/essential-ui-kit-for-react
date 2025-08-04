'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { Inject, ChartComponent, SeriesCollectionDirective, SeriesDirective, MultiColoredLineSeries, Category, DateTime, Tooltip } from "@syncfusion/ej2-react-charts";

export default function LineChart2() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [labelRotation, setLabelRotation] = useState(0);
    const [chartData, setChartData] = useState<object[]>([]);
    const chartRef = useRef<ChartComponent | null>(null);
    const metricDropdownRef = useRef<DropDownButtonComponent | null>(null);

    const rainFallData: number[] = [
        6.279319488350383, 6.44063341316797, 6.2369215935932125, 5.502712120699334, 8.36727387645628,
        6.8763936909119145, 7.539107641248687, 7.168106790298325, 5.088973211088473, 7.3611443626521975,
        6.262482500009694, 7.066946128264099, 7.919136663279815, 6.048770230229623, 6.635693738128687,
        6.914314060997675, 7.3558393638632245, 7.446799394011705, 6.573065012367965, 7.199248800046284,
        7.2478392502172255, 5.841749916549048, 6.2875032915742555, 7.780344597533645, 7.476252964940152,
        7.31130789349302, 6.9795490749342735, 5.25771395445122, 5.209178065323029, 7.253001207479784,
        7.735630771065614, 7.867579691619466, 6.498505124379967, 7.520182796274494, 6.8849552121955355,
        8.409548532300903, 7.280962677695648, 5.90472258083289, 5.493050947663577, 8.049930030095826,
        7.312239096474201, 6.648881892334176, 8.20778156490454, 7.760450642162979, 7.16896788902378,
        6.464002823190773, 6.744274412468741, 7.608063016119123, 8.28437415597541, 6.0686292110951,
        6.903464462707268, 6.21583898264024, 6.593313193313992, 8.173631463364867, 6.2071625059658535,
        6.418795393716696, 6.564866596674945, 7.762970761208759, 6.69332473846462, 6.1351463701281865,
        7.022493415476658, 5.6249468419041895, 7.874458629000931, 5.990122152134347, 6.813180297026457,
        6.193695064120531, 5.296018389402549, 5.17260081829393, 8.408367813193978, 5.021357760833318,
        5.459118447495531, 8.323738731410392, 5.260751854138992, 7.7013503613788545, 7.161869425083509,
        6.4418768926289145, 5.7231475724513015, 5.364349621131238, 6.773111815759874, 8.306374671332607,
        6.165757722561587, 8.011545688002819, 5.701686949133615, 5.811580507651204, 7.948649630117358,
        8.048489436166571, 6.786435040503838, 7.1266629301054945, 7.091275551544603, 8.413378363384973,
        7.589335230735911, 5.5681611987571165, 5.176557932530318, 6.890754293090578, 7.924184435766012,
        7.671728565183779, 6.534081554237517, 6.078696508169291, 6.722649936820086, 8.13565939847763,
        5.322671901142255, 5.876995219513782, 6.5405777428501555, 8.127136324134698, 6.843787638022269,
        8.214383813349539, 7.091099148563872, 5.573444163129094, 6.1157593307379905, 5.363258884106331
    ];

    const palettes: string[] = ['#91BD34', '#FFB900', '#DE4383', '#01A8B5', '#91BD34', '#DE4383', '#267DDA', '#01A8B5', '#D83B01', '#9CA3AF'];

    const primaryXAxis: object = {
        valueType: 'DateTime',
        labelFormat: 'y',
        intervalType: 'Years',
        edgeLabelPlacement: 'Shift',
        labelIntersectAction: 'None',
        majorGridLines: { width: 0 },
        labelStyle: { fontWeight: '500' },
        labelRotation: labelRotation,
        interval: 1
    };

    const primaryYAxis: object = {
        minimum: 10,
        maximum: 30,
        interval: 5,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelStyle: { fontWeight: '500' }
    };

    const tooltip: object = {
        enable: true,
        shared: true,
        format: '<b>${point.x} : ${point.y} in</b>',
        header: '<b>Rainfall</b>'
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
        handleResize();
    };

    const handleResize = (): void => {
        const newRotation = window.innerWidth <= 640 ? -90 : 0;
        setLabelRotation(newRotation);
        if (metricDropdownRef.current?.element?.classList.contains("e-active")) {
            metricDropdownRef.current.toggle();
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'line-chart-2' && blockData.theme) {
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
        const newChartData = rainFallData.map((value: number, index: number) => ({
            xAxis: new Date(2024, -index, 1),
            yAxis: parseFloat((value * 3).toFixed(1)),
            color: palettes[Math.floor(index / 11)]
        }));
        setChartData(newChartData);

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
                        <div key={"linechart-2-tw"} className="h-screen flex justify-center p-4 sm:p-6">
                            <div className="w-full" style={{ maxWidth: '640px' }}>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h1 className="text-base font-medium text-gray-900 dark:text-white mb-2">Rainfall History</h1>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Location: <span className="font-medium">California, US</span></p>
                                    </div>
                                    <ButtonComponent cssClass="e-outline hidden sm:block" content="Download Report" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-outline sm:hidden" iconCss="e-icons e-download" type="button"></ButtonComponent>
                                </div>
                                <div className="flex items-center gap-4 mt-2">
                                    <h1 className="text-sm font-medium text-gray-700 dark:text-gray-300">Measuring Units:</h1>
                                    <DropDownButtonComponent ref={metricDropdownRef} className="e-outline" content="Inch" items={[{ text: 'Millimeter' }, { text: 'Centimeter' }, { text: 'Meter' }, { text: 'Inch' }]} type="button"></DropDownButtonComponent>
                                </div>
                                <div className="mt-4">
                                    <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" height="250px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                        <Inject services={[MultiColoredLineSeries, DateTime, Tooltip, Category]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} xName="xAxis" yName="yAxis" type="MultiColoredLine" width={1} pointColorMapping="color"></SeriesDirective>
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
                        <div key={"linechart-2-bs"} className="vh-100 d-flex justify-content-center p-3 p-sm-4">
                            <div className="w-100" style={{ maxWidth: '640px' }}>
                                <div className="d-flex justify-content-between align-items-start">
                                    <div>
                                        <h1 className="h6 fw-medium text-body mb-2">Rainfall History</h1>
                                        <p className="text-body-secondary small">Location: <span className="fw-medium">California, US</span></p>
                                    </div>
                                    <ButtonComponent cssClass="e-outline d-none d-sm-block" content="Download Report" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-outline d-sm-none" iconCss="e-icons e-download" type="button"></ButtonComponent>
                                </div>
                                <div className="d-flex align-items-center gap-3 mt-2">
                                    <h1 className="h6 fw-medium text-body-secondary">Measuring Units:</h1>
                                    <DropDownButtonComponent ref={metricDropdownRef} className="e-outline" content="Inch" items={[{ text: 'Millimeter' }, { text: 'Centimeter' }, { text: 'Meter' }, { text: 'Inch' }]} type="button"></DropDownButtonComponent>
                                </div>
                                <div className="mt-3">
                                    <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" height="250px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                        <Inject services={[MultiColoredLineSeries, DateTime, Tooltip, Category]} />
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} xName="xAxis" yName="yAxis" type="MultiColoredLine" width={1} pointColorMapping="color"></SeriesDirective>
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
