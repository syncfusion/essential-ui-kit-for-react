'use client';

import { useEffect, useRef, useState } from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { Inject, ChartComponent, SeriesCollectionDirective, SeriesDirective, Category, LineSeries, DateTime, Tooltip } from '@syncfusion/ej2-react-charts';

export default function LineChart7() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
	const chartRef = useRef<ChartComponent | null>(null);
	const rangeDropdownRef = useRef<DropDownButtonComponent | null>(null);
	const chartDropdownRef = useRef<DropDownButtonComponent | null>(null);

    const chartData: any = [
        { date: new Date('2023-01-18'), low: 275.33, open: 275.10, high: 275.83, close: 275.81, volume: 30741 },
        { date: new Date('2023-01-19'), low: 275.33, open: 275.31, high: 275.83, close: 275.77, volume: 46879 },
        { date: new Date('2023-01-20'), low: 275.33, open: 275.32, high: 275.83, close: 275.72, volume: 20833 },
        { date: new Date('2023-01-21'), low: 275.34, open: 275.97, high: 275.83, close: 275.89, volume: 11141 },
        { date: new Date('2023-01-22'), low: 275.34, open: 275.93, high: 275.84, close: 275.84, volume: 40384 },
        { date: new Date('2023-01-23'), low: 275.34, open: 275.63, high: 275.84, close: 275.63, volume: 45120 },
        { date: new Date('2023-01-24'), low: 275.35, open: 275.47, high: 275.84, close: 275.93, volume: 39202 },
        { date: new Date('2023-01-25'), low: 275.34, open: 275.48, high: 275.84, close: 275.92, volume: 49759 },
        { date: new Date('2023-01-26'), low: 275.34, open: 275.40, high: 275.84, close: 275.92, volume: 10490 },
        { date: new Date('2023-01-27'), low: 275.34, open: 275.32, high: 275.84, close: 275.67, volume: 34241 },
        { date: new Date('2023-01-28'), low: 275.34, open: 275.35, high: 275.84, close: 275.64, volume: 10482 },
        { date: new Date('2023-02-01'), low: 275.34, open: 275.20, high: 275.83, close: 275.41, volume: 31460 },
        { date: new Date('2023-02-02'), low: 275.34, open: 275.70, high: 275.84, close: 275.34, volume: 25901 },
        { date: new Date('2023-02-03'), low: 275.34, open: 275.85, high: 275.83, close: 274.71, volume: 46065 },
        { date: new Date('2023-02-04'), low: 275.34, open: 275.84, high: 275.83, close: 274.71, volume: 12459 },
        { date: new Date('2023-02-05'), low: 275.34, open: 275.02, high: 275.84, close: 274.74, volume: 13484 },
        { date: new Date('2023-02-06'), low: 275.34, open: 275.99, high: 275.83, close: 274.85, volume: 20799 },
        { date: new Date('2023-02-07'), low: 275.35, open: 275.38, high: 275.84, close: 275.07, volume: 28706 },
        { date: new Date('2023-02-08'), low: 275.35, open: 275.24, high: 275.84, close: 274.96, volume: 42325 },
        { date: new Date('2023-02-09'), low: 275.35, open: 275.41, high: 275.84, close: 275.01, volume: 46607 },
        { date: new Date('2023-02-10'), low: 275.34, open: 275.00, high: 275.83, close: 275.01, volume: 24645 },
        { date: new Date('2023-02-11'), low: 275.34, open: 275.99, high: 275.83, close: 274.96, volume: 25885 },
        { date: new Date('2023-02-12'), low: 275.34, open: 275.98, high: 275.83, close: 275.01, volume: 14780 },
        { date: new Date('2023-02-13'), low: 275.34, open: 275.12, high: 275.83, close: 275.42, volume: 48208 },
        { date: new Date('2023-02-14'), low: 275.34, open: 275.40, high: 275.83, close: 275.30, volume: 35457 },
        { date: new Date('2023-02-15'), low: 275.35, open: 275.94, high: 275.84, close: 275.71, volume: 38966 },
        { date: new Date('2023-02-16'), low: 275.34, open: 275.38, high: 275.84, close: 275.64, volume: 36798 },
        { date: new Date('2023-02-17'), low: 275.34, open: 275.84, high: 275.83, close: 275.53, volume: 19840 },
        { date: new Date('2023-02-18'), low: 275.34, open: 275.85, high: 275.82, close: 275.53, volume: 27074 },
        { date: new Date('2023-02-19'), low: 275.34, open: 275.29, high: 275.83, close: 275.54, volume: 36860 },
        { date: new Date('2023-02-20'), low: 275.33, open: 275.40, high: 275.83, close: 275.52, volume: 20279 },
        { date: new Date('2023-02-21'), low: 275.33, open: 275.36, high: 275.82, close: 275.66, volume: 21891 },
        { date: new Date('2023-02-22'), low: 275.32, open: 275.18, high: 275.82, close: 275.52, volume: 36595 },
        { date: new Date('2023-02-23'), low: 275.32, open: 275.80, high: 275.82, close: 275.25, volume: 16506 },
        { date: new Date('2023-02-24'), low: 275.33, open: 275.75, high: 275.82, close: 275.34, volume: 16431 },
        { date: new Date('2023-02-25'), low: 275.33, open: 275.75, high: 275.82, close: 275.34, volume: 16903 },
        { date: new Date('2023-02-26'), low: 275.33, open: 275.79, high: 275.82, close: 275.34, volume: 16537 },
        { date: new Date('2023-02-27'), low: 275.33, open: 275.48, high: 275.82, close: 275.24, volume: 45484 },
        { date: new Date('2023-02-28'), low: 275.32, open: 275.85, high: 275.82, close: 275.16, volume: 29762 },
        { date: new Date('2023-03-01'), low: 275.33, open: 275.77, high: 275.82, close: 275.18, volume: 48674 },
        { date: new Date('2023-03-02'), low: 275.33, open: 275.26, high: 275.82, close: 275.20, volume: 24469 },
        { date: new Date('2023-03-03'), low: 275.32, open: 275.34, high: 275.81, close: 275.14, volume: 15025 },
        { date: new Date('2023-03-04'), low: 275.32, open: 275.68, high: 275.81, close: 275.13, volume: 11960 },
        { date: new Date('2023-03-05'), low: 275.32, open: 275.12, high: 275.81, close: 274.96, volume: 41237 },
        { date: new Date('2023-03-06'), low: 275.33, open: 275.84, high: 275.81, close: 274.82, volume: 33241 },
        { date: new Date('2023-03-07'), low: 275.33, open: 275.15, high: 275.80, close: 274.87, volume: 49667 },
        { date: new Date('2023-03-08'), low: 275.32, open: 275.15, high: 275.80, close: 274.84, volume: 19022 },
        { date: new Date('2023-03-09'), low: 275.32, open: 275.15, high: 275.80, close: 274.84, volume: 15162 },
        { date: new Date('2023-03-10'), low: 275.33, open: 275.54, high: 275.82, close: 274.97, volume: 48516 },
        { date: new Date('2023-03-11'), low: 275.33, open: 275.62, high: 275.81, close: 275.07, volume: 19327 },
        { date: new Date('2023-03-12'), low: 275.32, open: 275.07, high: 275.80, close: 274.95, volume: 23474 },
        { date: new Date('2023-03-13'), low: 275.32, open: 275.59, high: 275.80, close: 274.69, volume: 49687 },
        { date: new Date('2023-03-14'), low: 275.33, open: 275.83, high: 275.80, close: 274.85, volume: 36322 },
        { date: new Date('2023-03-15'), low: 275.33, open: 275.81, high: 275.80, close: 274.84, volume: 14343 },
        { date: new Date('2023-03-16'), low: 275.33, open: 275.91, high: 275.81, close: 274.85, volume: 11980 },
        { date: new Date('2023-03-17'), low: 275.33, open: 275.46, high: 275.81, close: 275.00, volume: 21441 },
        { date: new Date('2023-03-18'), low: 275.33, open: 275.05, high: 275.81, close: 275.10, volume: 31703 },
        { date: new Date('2023-03-19'), low: 275.33, open: 275.73, high: 275.81, close: 275.33, volume: 37935 },
        { date: new Date('2023-03-20'), low: 275.33, open: 275.18, high: 275.81, close: 275.15, volume: 15153 },
        { date: new Date('2023-03-21'), low: 275.33, open: 275.16, high: 275.80, close: 275.04, volume: 27191 },
        { date: new Date('2023-03-22'), low: 275.33, open: 275.16, high: 275.80, close: 275.04, volume: 35402 },
        { date: new Date('2023-03-23'), low: 275.33, open: 275.09, high: 275.80, close: 275.03, volume: 15238 },
        { date: new Date('2023-03-24'), low: 275.33, open: 275.12, high: 275.80, close: 274.85, volume: 40675 },
        { date: new Date('2023-03-25'), low: 275.33, open: 275.72, high: 275.81, close: 274.97, volume: 14130 },
        { date: new Date('2023-03-26'), low: 275.33, open: 275.58, high: 275.80, close: 274.74, volume: 28575 },
        { date: new Date('2023-03-27'), low: 275.33, open: 275.90, high: 275.80, close: 274.71, volume: 32886 },
        { date: new Date('2023-03-28'), low: 275.33, open: 275.31, high: 275.81, close: 274.74, volume: 22233 },
        { date: new Date('2023-03-29'), low: 275.33, open: 275.32, high: 275.81, close: 274.74, volume: 41203 },
        { date: new Date('2023-03-30'), low: 275.33, open: 275.24, high: 275.81, close: 274.76, volume: 33356 },
        { date: new Date('2023-04-01'), low: 275.33, open: 275.45, high: 275.81, close: 274.78, volume: 49517 },
        { date: new Date('2023-04-02'), low: 275.33, open: 275.52, high: 275.81, close: 274.77, volume: 13498 },
        { date: new Date('2023-04-03'), low: 275.33, open: 275.61, high: 275.81, close: 274.80, volume: 20274 },
        { date: new Date('2023-04-04'), low: 275.32, open: 275.29, high: 275.81, close: 274.69, volume: 17438 },
        { date: new Date('2023-04-05'), low: 275.32, open: 275.84, high: 275.81, close: 274.73, volume: 32034 },
        { date: new Date('2023-04-06'), low: 275.32, open: 275.83, high: 275.81, close: 274.73, volume: 46531 },
        { date: new Date('2023-04-07'), low: 275.32, open: 275.04, high: 275.80, close: 274.72, volume: 45832 },
        { date: new Date('2023-04-08'), low: 275.32, open: 275.01, high: 275.80, close: 274.78, volume: 12374 },
        { date: new Date('2023-04-09'), low: 275.32, open: 275.20, high: 275.81, close: 275.10, volume: 40808 },
        { date: new Date('2023-04-10'), low: 275.32, open: 275.20, high: 275.81, close: 274.91, volume: 17982 },
        { date: new Date('2023-04-11'), low: 275.33, open: 275.52, high: 275.81, close: 275.09, volume: 49175 },
        { date: new Date('2023-04-12'), low: 275.33, open: 275.75, high: 275.81, close: 275.25, volume: 27041 },
        { date: new Date('2023-04-13'), low: 275.33, open: 275.73, high: 275.81, close: 275.19, volume: 24036 },
        { date: new Date('2023-04-14'), low: 275.33, open: 275.78, high: 275.82, close: 275.22, volume: 31023 },
        { date: new Date('2023-04-15'), low: 275.33, open: 275.02, high: 275.81, close: 275.27, volume: 18062 },
        { date: new Date('2023-04-16'), low: 275.34, open: 275.39, high: 275.82, close: 275.29, volume: 15390 },
        { date: new Date('2023-04-17'), low: 275.34, open: 275.59, high: 275.82, close: 275.45, volume: 29951 },
        { date: new Date('2023-04-18'), low: 275.34, open: 275.65, high: 275.82, close: 275.72, volume: 18436 },
        { date: new Date('2023-04-19'), low: 275.34, open: 275.97, high: 275.82, close: 275.84, volume: 14916 },
        { date: new Date('2023-04-20'), low: 275.34, open: 275.97, high: 275.82, close: 275.84, volume: 19245 },
        { date: new Date('2023-04-21'), low: 275.34, open: 275.66, high: 275.82, close: 275.88, volume: 40550 },
        { date: new Date('2023-04-22'), low: 275.34, open: 275.57, high: 275.82, close: 275.82, volume: 36940 },
        { date: new Date('2023-04-23'), low: 275.34, open: 275.53, high: 275.82, close: 275.89, volume: 27476 },
        { date: new Date('2023-04-24'), low: 275.34, open: 275.22, high: 275.82, close: 275.70, volume: 21195 },
        { date: new Date('2023-04-25'), low: 275.35, open: 275.94, high: 275.83, close: 275.73, volume: 10546 },
        { date: new Date('2023-04-26'), low: 275.35, open: 275.66, high: 275.83, close: 275.56, volume: 27942 },
        { date: new Date('2023-04-27'), low: 275.35, open: 275.66, high: 275.83, close: 275.56, volume: 41330 },
        { date: new Date('2023-04-28'), low: 275.35, open: 275.78, high: 275.83, close: 275.56, volume: 47065 },
        { date: new Date('2023-04-29'), low: 275.35, open: 275.49, high: 275.83, close: 275.58, volume: 39847 },
        { date: new Date('2023-04-30'), low: 275.35, open: 275.76, high: 275.83, close: 275.68, volume: 47693 },
        { date: new Date('2023-05-01'), low: 275.34, open: 275.77, high: 275.82, close: 275.28, volume: 19808 },
        { date: new Date('2023-05-02'), low: 275.35, open: 275.95, high: 275.83, close: 275.40, volume: 49959 },
        { date: new Date('2023-05-03'), low: 275.35, open: 275.96, high: 275.83, close: 275.40, volume: 47409 },
        { date: new Date('2023-05-04'), low: 275.35, open: 275.06, high: 275.83, close: 275.40, volume: 32494 },
        { date: new Date('2023-05-05'), low: 275.34, open: 275.46, high: 275.83, close: 275.50, volume: 43152 },
        { date: new Date('2023-05-06'), low: 275.34, open: 275.61, high: 275.83, close: 275.52, volume: 19889 },
        { date: new Date('2023-05-07'), low: 275.34, open: 275.03, high: 275.83, close: 275.62, volume: 29138 },
        { date: new Date('2023-05-08'), low: 275.34, open: 275.90, high: 275.82, close: 275.48, volume: 47768 },
        { date: new Date('2023-05-09'), low: 275.34, open: 275.40, high: 275.83, close: 275.42, volume: 31394 },
        { date: new Date('2023-05-10'), low: 275.34, open: 275.39, high: 275.82, close: 275.42, volume: 35510 },
        { date: new Date('2023-05-11'), low: 275.34, open: 275.43, high: 275.83, close: 275.43, volume: 35281 },
        { date: new Date('2023-05-12'), low: 275.34, open: 275.56, high: 275.82, close: 275.32, volume: 36620 },
        { date: new Date('2023-05-13'), low: 275.34, open: 275.14, high: 275.82, close: 275.29, volume: 28713 },
        { date: new Date('2023-05-14'), low: 275.34, open: 275.06, high: 275.82, close: 275.04, volume: 46038 },
        { date: new Date('2023-05-15'), low: 275.33, open: 275.18, high: 275.81, close: 274.91, volume: 10683 },
        { date: new Date('2023-05-16'), low: 275.34, open: 275.83, high: 275.81, close: 274.90, volume: 27852 },
        { date: new Date('2023-05-17'), low: 275.34, open: 275.83, high: 275.81, close: 274.90, volume: 48763 },
        { date: new Date('2023-05-18'), low: 275.33, open: 275.89, high: 275.81, close: 274.91, volume: 47953 },
        { date: new Date('2023-05-19'), low: 275.34, open: 275.92, high: 275.81, close: 274.98, volume: 11303 },
        { date: new Date('2023-05-20'), low: 275.34, open: 275.36, high: 275.81, close: 274.99, volume: 13657 },
        { date: new Date('2023-05-21'), low: 275.34, open: 275.72, high: 275.81, close: 274.94, volume: 41692 },
        { date: new Date('2023-05-22'), low: 275.34, open: 275.06, high: 275.81, close: 274.90, volume: 27070 },
        { date: new Date('2023-05-23'), low: 275.35, open: 275.72, high: 275.81, close: 274.97, volume: 42111 },
        { date: new Date('2023-05-24'), low: 275.35, open: 275.69, high: 275.81, close: 274.98, volume: 10972 },
        { date: new Date('2023-05-25'), low: 275.35, open: 275.46, high: 275.81, close: 274.96, volume: 20666 },
        { date: new Date('2023-05-26'), low: 275.35, open: 275.43, high: 275.81, close: 275.00, volume: 30277 },
        { date: new Date('2023-05-27'), low: 275.34, open: 275.97, high: 275.81, close: 275.00, volume: 12143 },
        { date: new Date('2023-05-28'), low: 275.35, open: 275.35, high: 275.81, close: 275.02, volume: 26277 },
        { date: new Date('2023-05-29'), low: 275.35, open: 275.77, high: 275.82, close: 275.07, volume: 33451 },
        { date: new Date('2023-05-30'), low: 275.35, open: 275.31, high: 275.81, close: 275.09, volume: 11001 },
        { date: new Date('2023-05-31'), low: 275.35, open: 275.18, high: 275.81, close: 275.06, volume: 43511 },
        { date: new Date('2023-06-01'), low: 275.35, open: 275.34, high: 275.81, close: 275.09, volume: 19770 },
        { date: new Date('2023-06-02'), low: 275.35, open: 275.33, high: 275.81, close: 275.09, volume: 47184 },
        { date: new Date('2023-06-03'), low: 275.35, open: 275.67, high: 275.81, close: 274.96, volume: 27080 },
        { date: new Date('2023-06-04'), low: 275.34, open: 275.46, high: 275.81, close: 275.00, volume: 49628 },
        { date: new Date('2023-06-05'), low: 275.35, open: 275.54, high: 275.82, close: 275.39, volume: 40620 },
        { date: new Date('2023-06-06'), low: 275.35, open: 275.05, high: 275.81, close: 275.77, volume: 21661 },
        { date: new Date('2023-06-07'), low: 275.35, open: 275.09, high: 275.81, close: 275.65, volume: 35499 },
        { date: new Date('2023-06-08'), low: 275.34, open: 275.11, high: 275.81, close: 275.64, volume: 39051 },
        { date: new Date('2023-06-09'), low: 275.34, open: 275.18, high: 275.81, close: 275.62, volume: 41517 },
        { date: new Date('2023-06-10'), low: 275.34, open: 275.31, high: 275.80, close: 275.53, volume: 10218 },
        { date: new Date('2023-06-11'), low: 275.34, open: 275.22, high: 275.80, close: 275.38, volume: 11291 },
        { date: new Date('2023-06-12'), low: 275.33, open: 275.38, high: 275.81, close: 274.97, volume: 34724 },
        { date: new Date('2023-06-13'), low: 275.32, open: 275.22, high: 275.81, close: 275.03, volume: 27170 },
        { date: new Date('2023-06-14'), low: 275.32, open: 275.69, high: 275.81, close: 275.13, volume: 26901 },
        { date: new Date('2023-06-15'), low: 275.32, open: 275.69, high: 275.81, close: 275.11, volume: 22757 },
        { date: new Date('2023-06-16'), low: 275.32, open: 275.76, high: 275.81, close: 275.07, volume: 41677 },
        { date: new Date('2023-06-17'), low: 275.32, open: 275.71, high: 275.81, close: 275.05, volume: 33741 },
        { date: new Date('2023-06-18'), low: 275.32, open: 275.94, high: 275.81, close: 275.07, volume: 35768 },
        { date: new Date('2023-06-19'), low: 275.32, open: 275.62, high: 275.81, close: 275.06, volume: 11646 },
        { date: new Date('2023-06-20'), low: 275.32, open: 275.98, high: 275.81, close: 275.08, volume: 33972 },
        { date: new Date('2023-06-21'), low: 275.33, open: 275.78, high: 275.81, close: 275.00, volume: 43149 },
        { date: new Date('2023-06-22'), low: 275.33, open: 275.78, high: 275.81, close: 275.00, volume: 18141 },
        { date: new Date('2023-06-23'), low: 275.33, open: 275.75, high: 275.81, close: 275.00, volume: 15363 },
        { date: new Date('2023-06-24'), low: 275.33, open: 275.51, high: 275.80, close: 274.81, volume: 19602 },
        { date: new Date('2023-06-25'), low: 275.32, open: 275.92, high: 275.80, close: 274.95, volume: 33355 },
        { date: new Date('2023-06-26'), low: 275.32, open: 275.41, high: 275.80, close: 274.97, volume: 41722 },
        { date: new Date('2023-06-27'), low: 275.33, open: 275.18, high: 275.81, close: 275.37, volume: 47205 },
        { date: new Date('2023-06-28'), low: 275.33, open: 275.15, high: 275.80, close: 275.26, volume: 15032 },
        { date: new Date('2023-06-29'), low: 275.33, open: 275.15, high: 275.80, close: 275.26, volume: 41561 },
        { date: new Date('2023-06-30'), low: 275.33, open: 275.93, high: 275.80, close: 275.26, volume: 15001 }
    ];

    const primaryXAxis: object = {
        majorGridLines: { width: 0 },
        minorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelStyle: { size: '0px' },
		lineStyle: { width: 0 }
	};

    const primaryYAxis: object = {
		lineStyle: { width: 0 },
		majorTickLines: { width: 0 },
		labelStyle: { size: '0px' },
        minorTickLines: { width: 0 },
        majorGridLines: { 
            width: 1,
            dashArray: '5,5'
         },
        minorGridLines: { width: 0 },
        maximum: 276,
        interval: 0.5,
        minimum: 274
	};

	const tooltip: object = {
		enable: true,
		enableMarker: false	
	};

	const tooltipRender = (args: any): void => {
        args.text = `Date : ${chartData[args.data.pointIndex].date.toLocaleDateString()}<br>Close : $${chartData[args.data.pointIndex].close}<br>Open : $${chartData[args.data.pointIndex].open}<br>High : $${chartData[args.data.pointIndex].high}<br>Low : $${chartData[args.data.pointIndex].low}<br>Volume : $${chartData[args.data.pointIndex].volume.toLocaleString()}`;
	};

	const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
		args.chart.theme = isDarkMode ? darkTheme : lightTheme;
	};

	const handleResize = (): void => {
		if (rangeDropdownRef.current?.element?.classList.contains('e-active')) {
			rangeDropdownRef.current.toggle();
		}
		if (chartDropdownRef.current?.element?.classList.contains('e-active')) {
			chartDropdownRef.current.toggle();
		}
	};

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'line-chart-7' && blockData.theme) {
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
                        <div key={'linechart-7-tw'} className="h-screen flex justify-center py-4 sm:py-6">
                            <div className="w-full" style={{maxWidth: '560px'}}>
                                <div className="flex flex-col gap-2.5 px-4 sm:px-6">
                                    <div className="flex justify-between">
                                        <h2 className="text-base font-medium text-gray-900 dark:text-white">AAPL - Apple Inc.</h2>
                                        <ButtonComponent cssClass="e-outline" className="hidden sm:block" content="View Report" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-outline" className="sm:hidden" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold text-gray-900 dark:text-white">$248.13</p>
                                        <p className="text-xs text-green-700 dark:text-green-500 font-medium mt-1 flex items-center gap-1"><span className="e-icons e-arrow-up"></span> 0.17 (+0.07%) Today</p>
                                    </div>
                                </div>
                                <div className="flex justify-between gap-2 my-5 px-4 sm:px-6">
                                    <div className="e-btn-group hidden sm:block">
                                        <input type="radio" id="day" name="align" value="Day" />
                                        <label className="e-btn" htmlFor="day">Day</label>
                                        <input type="radio" id="week" name="align" value="Week" defaultChecked />
                                        <label className="e-btn" htmlFor="week">Week</label>
                                        <input type="radio" id="month" name="align" value="Month" />
                                        <label className="e-btn" htmlFor="month">Month</label>
                                        <input type="radio" id="year" name="align" value="Year" />
                                        <label className="e-btn" htmlFor="year">Year</label>
                                        <input type="radio" id="custom" name="align" value="Custom" />
                                        <label className="e-btn" htmlFor="custom">Custom</label>
                                    </div>
                                    <DropDownButtonComponent ref={rangeDropdownRef} cssClass="e-outline" className="block sm:hidden" content='Week' items={[{ text: 'Day' },{ text: 'Week' },{ text: 'Month' },{ text: 'Year' },{ text: 'Custom' }]} type="button"></DropDownButtonComponent>
                                    <DropDownButtonComponent ref={chartDropdownRef} cssClass="e-outline" content='Line Chart' items={[{ text: 'Line Chart' },{ text: 'Bar Chart' },{ text: 'Area Chart' },{ text: 'Scatter Chart' },{ text: 'Pie Chart' }]} type="button"></DropDownButtonComponent>
                                </div>
                                <div className="pe-4">
                                    <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" height="300px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip} tooltipRender={tooltipRender} load={(args) =>chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                        <Inject services={[LineSeries, DateTime, Tooltip, Category]}/>
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} xName="date" yName="close" type="Line" width={2} fill="#91BD34"></SeriesDirective>
                                        </SeriesCollectionDirective>
                                    </ChartComponent>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-2 px-4 sm:px-6">
                                    <ButtonComponent cssClass="e-outline" className="!w-full" content="Sell" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-primary" className="!w-full" content="Buy" type="button"></ButtonComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={'linechart-7-bs'} className="vh-100 d-flex justify-content-center py-3 py-sm-4">
                            <div className="w-100" style={{maxWidth: '560px'}}>
                                <div className="d-flex flex-column gap-2 px-3 px-sm-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h2 className="h6 fw-medium text-body">AAPL - Apple Inc.</h2>
                                        <ButtonComponent cssClass="e-outline" className="d-none d-sm-block" content="View Report" type="button"></ButtonComponent>
                                        <ButtonComponent cssClass="e-outline" className="d-sm-none" iconCss="e-icons e-description" type="button"></ButtonComponent>
                                    </div>
                                    <div>
                                        <p className="h5 fw-semibold text-body mb-1">$248.13</p>
                                        <p className="small text-success fw-medium d-flex align-items-center gap-1 mb-0"><span className="e-icons e-arrow-up"></span> 0.17 (+0.07%) Today</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between gap-2 my-4 px-3 px-sm-4">
                                    <div className="e-btn-group d-none d-sm-block">
                                        <input type="radio" id="day" name="align" value="Day" />
                                        <label className="e-btn" htmlFor="day">Day</label>
                                        <input type="radio" id="week" name="align" value="Week" defaultChecked />
                                        <label className="e-btn" htmlFor="week">Week</label>
                                        <input type="radio" id="month" name="align" value="Month" />
                                        <label className="e-btn" htmlFor="month">Month</label>
                                        <input type="radio" id="year" name="align" value="Year" />
                                        <label className="e-btn" htmlFor="year">Year</label>
                                        <input type="radio" id="custom" name="align" value="Custom" />
                                        <label className="e-btn" htmlFor="custom">Custom</label>
                                    </div>
                                    <DropDownButtonComponent ref={rangeDropdownRef} cssClass="e-outline" className="d-inline-block d-sm-none" content='Week' items={[{ text: 'Day' },{ text: 'Week' },{ text: 'Month' },{ text: 'Year' },{ text: 'Custom' }]} type="button"></DropDownButtonComponent>
                                    <DropDownButtonComponent ref={chartDropdownRef} cssClass="e-outline" content='Line Chart' items={[{ text: 'Line Chart' },{ text: 'Bar Chart' },{ text: 'Area Chart' },{ text: 'Scatter Chart' },{ text: 'Pie Chart' }]} type="button"></DropDownButtonComponent>
                                </div>
                                <div className="pe-3">
                                    <ChartComponent ref={chartRef} chartArea={{ border: { width: 0 } }} width="100%" height="300px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip} tooltipRender={tooltipRender} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                        <Inject services={[LineSeries, DateTime, Tooltip, Category]}/>
                                        <SeriesCollectionDirective>
                                            <SeriesDirective dataSource={chartData} xName="date" yName="close" type="Line" width={2} fill="#0EAB44"></SeriesDirective>
                                        </SeriesCollectionDirective>
                                    </ChartComponent>
                                </div>
                                <div className="d-flex flex-column flex-sm-row justify-content-between gap-3 gap-sm-2 px-3 px-sm-4">
                                    <ButtonComponent cssClass="e-outline" className="w-100" content="Sell" type="button"></ButtonComponent>
                                    <ButtonComponent cssClass="e-primary" className="w-100" content="Buy" type="button"></ButtonComponent>
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
