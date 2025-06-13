'use client';

import { useEffect, useRef, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { Category, ChartComponent, DateTime, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective } from "@syncfusion/ej2-react-charts";

export default function LineChart3() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    /* SB Code - End */
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [labelRotation, setLabelRotation] = useState(0);
    const chartRef1 = useRef<ChartComponent | null>(null);
    const chartRef2 = useRef<ChartComponent | null>(null);
    const chartRef3 = useRef<ChartComponent | null>(null);
    const chartRef4 = useRef<ChartComponent | null>(null);
    const rangeDropdownRef = useRef<DropDownButtonComponent | null>(null);

    const chartData: object[] = [
        { Date: new Date('2023-01-18'), EUR: 0.83316, JPY: 149.10, SGD: 1.3370, INR: 82.814 },
        { Date: new Date('2023-01-19'), EUR: 0.83591, JPY: 149.31, SGD: 1.3371, INR: 82.773 },
        { Date: new Date('2023-01-20'), EUR: 0.83604, JPY: 149.32, SGD: 1.3359, INR: 82.721 },
        { Date: new Date('2023-01-21'), EUR: 0.83881, JPY: 149.97, SGD: 1.3402, INR: 82.899 },
        { Date: new Date('2023-01-22'), EUR: 0.84289, JPY: 149.93, SGD: 1.3408, INR: 82.843 },
        { Date: new Date('2023-01-23'), EUR: 0.84358, JPY: 149.63, SGD: 1.3428, INR: 82.636 },
        { Date: new Date('2023-01-24'), EUR: 0.84473, JPY: 151.47, SGD: 1.3500, INR: 82.933 },
        { Date: new Date('2023-01-25'), EUR: 0.84584, JPY: 151.48, SGD: 1.3499, INR: 82.929 },
        { Date: new Date('2023-01-26'), EUR: 0.84745, JPY: 151.40, SGD: 1.3498, INR: 82.928 },
        { Date: new Date('2023-01-27'), EUR: 0.84262, JPY: 151.32, SGD: 1.3469, INR: 82.673 },
        { Date: new Date('2023-01-28'), EUR: 0.84548, JPY: 151.35, SGD: 1.3484, INR: 82.641 },
        { Date: new Date('2023-02-01'), EUR: 0.83722, JPY: 151.20, SGD: 1.3420, INR: 82.418 },
        { Date: new Date('2023-02-02'), EUR: 0.84344, JPY: 151.70, SGD: 1.3473, INR: 82.349 },
        { Date: new Date('2023-02-03'), EUR: 0.83901, JPY: 150.85, SGD: 1.3452, INR: 81.712 },
        { Date: new Date('2023-02-04'), EUR: 0.83968, JPY: 150.84, SGD: 1.3452, INR: 81.713 },
        { Date: new Date('2023-02-05'), EUR: 0.84106, JPY: 151.02, SGD: 1.3455, INR: 81.742 },
        { Date: new Date('2023-02-06'), EUR: 0.83573, JPY: 150.99, SGD: 1.3451, INR: 81.858 },
        { Date: new Date('2023-02-07'), EUR: 0.84792, JPY: 152.38, SGD: 1.3544, INR: 82.072 },
        { Date: new Date('2023-02-08'), EUR: 0.84793, JPY: 152.24, SGD: 1.3533, INR: 81.960 },
        { Date: new Date('2023-02-09'), EUR: 0.84480, JPY: 149.41, SGD: 1.3532, INR: 82.011 },
        { Date: new Date('2023-02-10'), EUR: 0.83842, JPY: 149.00, SGD: 1.3488, INR: 82.018 },
        { Date: new Date('2023-02-11'), EUR: 0.83926, JPY: 150.99, SGD: 1.3489, INR: 81.966 },
        { Date: new Date('2023-02-12'), EUR: 0.83600, JPY: 149.98, SGD: 1.3475, INR: 82.019 },
        { Date: new Date('2023-02-13'), EUR: 0.83246, JPY: 148.12, SGD: 1.3474, INR: 82.422 },
        { Date: new Date('2023-02-14'), EUR: 0.83219, JPY: 148.40, SGD: 1.3452, INR: 82.309 },
        { Date: new Date('2023-02-15'), EUR: 0.84490, JPY: 150.94, SGD: 1.3512, INR: 82.713 },
        { Date: new Date('2023-02-16'), EUR: 0.84220, JPY: 149.38, SGD: 1.3461, INR: 82.642 },
        { Date: new Date('2023-02-17'), EUR: 0.83006, JPY: 148.84, SGD: 1.3416, INR: 82.531 },
        { Date: new Date('2023-02-18'), EUR: 0.82806, JPY: 148.85, SGD: 1.3415, INR: 82.536 },
        { Date: new Date('2023-02-19'), EUR: 0.83648, JPY: 148.29, SGD: 1.3406, INR: 82.544 },
        { Date: new Date('2023-02-20'), EUR: 0.83295, JPY: 148.40, SGD: 1.3377, INR: 82.520 },
        { Date: new Date('2023-02-21'), EUR: 0.82817, JPY: 148.36, SGD: 1.3370, INR: 82.663 },
        { Date: new Date('2023-02-22'), EUR: 0.82003, JPY: 148.18, SGD: 1.3297, INR: 82.520 },
        { Date: new Date('2023-02-23'), EUR: 0.82290, JPY: 148.80, SGD: 1.3278, INR: 82.253 },
        { Date: new Date('2023-02-24'), EUR: 0.82795, JPY: 148.75, SGD: 1.3329, INR: 82.347 },
        { Date: new Date('2023-02-25'), EUR: 0.82795, JPY: 149.75, SGD: 1.3329, INR: 82.347 },
        { Date: new Date('2023-02-26'), EUR: 0.82789, JPY: 149.79, SGD: 1.3316, INR: 82.348 },
        { Date: new Date('2023-02-27'), EUR: 0.82601, JPY: 149.48, SGD: 1.3312, INR: 82.240 },
        { Date: new Date('2023-02-28'), EUR: 0.82242, JPY: 149.85, SGD: 1.3277, INR: 82.164 },
        { Date: new Date('2023-03-01'), EUR: 0.82021, JPY: 149.77, SGD: 1.3308, INR: 82.181 },
        { Date: new Date('2023-03-02'), EUR: 0.82422, JPY: 149.26, SGD: 1.3328, INR: 82.201 },
        { Date: new Date('2023-03-03'), EUR: 0.81706, JPY: 149.34, SGD: 1.3269, INR: 82.147 },
        { Date: new Date('2023-03-04'), EUR: 0.81257, JPY: 149.68, SGD: 1.3255, INR: 82.138 },
        { Date: new Date('2023-03-05'), EUR: 0.81665, JPY: 149.12, SGD: 1.3281, INR: 81.960 },
        { Date: new Date('2023-03-06'), EUR: 0.81605, JPY: 149.84, SGD: 1.3306, INR: 81.825 },
        { Date: new Date('2023-03-07'), EUR: 0.80949, JPY: 149.15, SGD: 1.3321, INR: 81.875 },
        { Date: new Date('2023-03-08'), EUR: 0.80951, JPY: 150.15, SGD: 1.3298, INR: 81.841 },
        { Date: new Date('2023-03-09'), EUR: 0.80951, JPY: 150.15, SGD: 1.3298, INR: 81.841 },
        { Date: new Date('2023-03-10'), EUR: 0.82040, JPY: 150.54, SGD: 1.3324, INR: 81.977 },
        { Date: new Date('2023-03-11'), EUR: 0.81601, JPY: 150.62, SGD: 1.3324, INR: 82.079 },
        { Date: new Date('2023-03-12'), EUR: 0.80951, JPY: 150.07, SGD: 1.3279, INR: 81.951 },
        { Date: new Date('2023-03-13'), EUR: 0.80513, JPY: 150.59, SGD: 1.3222, INR: 81.691 },
        { Date: new Date('2023-03-14'), EUR: 0.80199, JPY: 150.83, SGD: 1.3303, INR: 81.852 },
        { Date: new Date('2023-03-15'), EUR: 0.80167, JPY: 150.81, SGD: 1.3304, INR: 81.842 },
        { Date: new Date('2023-03-16'), EUR: 0.81013, JPY: 151.91, SGD: 1.3311, INR: 81.857 },
        { Date: new Date('2023-03-17'), EUR: 0.81539, JPY: 151.46, SGD: 1.3342, INR: 82.004 },
        { Date: new Date('2023-03-18'), EUR: 0.81132, JPY: 151.05, SGD: 1.3325, INR: 82.107 },
        { Date: new Date('2023-03-19'), EUR: 0.81297, JPY: 151.73, SGD: 1.3349, INR: 82.334 },
        { Date: new Date('2023-03-20'), EUR: 0.81182, JPY: 151.18, SGD: 1.3326, INR: 82.153 },
        { Date: new Date('2023-03-21'), EUR: 0.80117, JPY: 151.16, SGD: 1.3351, INR: 82.041 },
        { Date: new Date('2023-03-22'), EUR: 0.80117, JPY: 151.16, SGD: 1.3351, INR: 82.041 },
        { Date: new Date('2023-03-23'), EUR: 0.80977, JPY: 151.09, SGD: 1.3341, INR: 82.036 },
        { Date: new Date('2023-03-24'), EUR: 0.80489, JPY: 151.12, SGD: 1.3334, INR: 81.855 },
        { Date: new Date('2023-03-25'), EUR: 0.81085, JPY: 151.72, SGD: 1.3380, INR: 81.978 },
        { Date: new Date('2023-03-26'), EUR: 0.80584, JPY: 151.58, SGD: 1.3354, INR: 81.748 },
        { Date: new Date('2023-03-27'), EUR: 0.80684, JPY: 151.90, SGD: 1.3351, INR: 81.716 },
        { Date: new Date('2023-03-28'), EUR: 0.81872, JPY: 152.31, SGD: 1.3355, INR: 81.745 },
        { Date: new Date('2023-03-29'), EUR: 0.81861, JPY: 152.32, SGD: 1.3353, INR: 81.742 },
        { Date: new Date('2023-03-30'), EUR: 0.81810, JPY: 152.24, SGD: 1.3349, INR: 81.764 },
        { Date: new Date('2023-04-01'), EUR: 0.81123, JPY: 152.45, SGD: 1.3363, INR: 81.780 },
        { Date: new Date('2023-04-02'), EUR: 0.81859, JPY: 152.52, SGD: 1.3346, INR: 81.770 },
        { Date: new Date('2023-04-03'), EUR: 0.81346, JPY: 152.61, SGD: 1.3303, INR: 81.804 },
        { Date: new Date('2023-04-04'), EUR: 0.81740, JPY: 152.29, SGD: 1.3277, INR: 81.698 },
        { Date: new Date('2023-04-05'), EUR: 0.81849, JPY: 152.84, SGD: 1.3261, INR: 81.730 },
        { Date: new Date('2023-04-06'), EUR: 0.81200, JPY: 152.83, SGD: 1.3261, INR: 81.730 },
        { Date: new Date('2023-04-07'), EUR: 0.80768, JPY: 152.04, SGD: 1.3257, INR: 81.720 },
        { Date: new Date('2023-04-08'), EUR: 0.80893, JPY: 152.01, SGD: 1.3251, INR: 81.787 },
        { Date: new Date('2023-04-09'), EUR: 0.81193, JPY: 151.20, SGD: 1.3271, INR: 82.102 },
        { Date: new Date('2023-04-10'), EUR: 0.81019, JPY: 151.20, SGD: 1.3247, INR: 81.913 },
        { Date: new Date('2023-04-11'), EUR: 0.81601, JPY: 151.52, SGD: 1.3315, INR: 82.094 },
        { Date: new Date('2023-04-12'), EUR: 0.81412, JPY: 151.75, SGD: 1.3388, INR: 82.256 },
        { Date: new Date('2023-04-13'), EUR: 0.81429, JPY: 151.73, SGD: 1.3384, INR: 82.197 },
        { Date: new Date('2023-04-14'), EUR: 0.82153, JPY: 151.78, SGD: 1.3385, INR: 82.228 },
        { Date: new Date('2023-04-15'), EUR: 0.81939, JPY: 151.02, SGD: 1.3362, INR: 82.270 },
        { Date: new Date('2023-04-16'), EUR: 0.82062, JPY: 151.39, SGD: 1.3404, INR: 82.295 },
        { Date: new Date('2023-04-17'), EUR: 0.82249, JPY: 151.59, SGD: 1.3421, INR: 82.458 },
        { Date: new Date('2023-04-18'), EUR: 0.82798, JPY: 151.65, SGD: 1.3478, INR: 82.726 },
        { Date: new Date('2023-04-19'), EUR: 0.82391, JPY: 151.97, SGD: 1.3444, INR: 82.842 },
        { Date: new Date('2023-04-20'), EUR: 0.82447, JPY: 151.97, SGD: 1.3444, INR: 82.843 },
        { Date: new Date('2023-04-21'), EUR: 0.82428, JPY: 151.66, SGD: 1.3451, INR: 82.883 },
        { Date: new Date('2023-04-22'), EUR: 0.82482, JPY: 151.57, SGD: 1.3464, INR: 82.822 },
        { Date: new Date('2023-04-23'), EUR: 0.82833, JPY: 151.53, SGD: 1.3469, INR: 82.897 },
        { Date: new Date('2023-04-24'), EUR: 0.82982, JPY: 150.22, SGD: 1.3490, INR: 82.705 },
        { Date: new Date('2023-04-25'), EUR: 0.83225, JPY: 150.94, SGD: 1.3544, INR: 82.734 },
        { Date: new Date('2023-04-26'), EUR: 0.83188, JPY: 150.66, SGD: 1.3502, INR: 82.565 },
        { Date: new Date('2023-04-27'), EUR: 0.83188, JPY: 150.66, SGD: 1.3502, INR: 82.565 },
        { Date: new Date('2023-04-28'), EUR: 0.83286, JPY: 150.78, SGD: 1.3530, INR: 82.569 },
        { Date: new Date('2023-04-29'), EUR: 0.83372, JPY: 150.49, SGD: 1.3538, INR: 82.580 },
        { Date: new Date('2023-04-30'), EUR: 0.83174, JPY: 149.76, SGD: 1.3506, INR: 82.682 },
        { Date: new Date('2023-05-01'), EUR: 0.82911, JPY: 148.77, SGD: 1.3473, INR: 82.280 },
        { Date: new Date('2023-05-02'), EUR: 0.83342, JPY: 149.95, SGD: 1.3505, INR: 82.402 },
        { Date: new Date('2023-05-03'), EUR: 0.83341, JPY: 149.96, SGD: 1.3504, INR: 82.402 },
        { Date: new Date('2023-05-04'), EUR: 0.83425, JPY: 150.06, SGD: 1.3504, INR: 82.403 },
        { Date: new Date('2023-05-05'), EUR: 0.83341, JPY: 149.46, SGD: 1.3493, INR: 82.506 },
        { Date: new Date('2023-05-06'), EUR: 0.83505, JPY: 149.61, SGD: 1.3483, INR: 82.520 },
        { Date: new Date('2023-05-07'), EUR: 0.83464, JPY: 150.03, SGD: 1.3487, INR: 82.625 },
        { Date: new Date('2023-05-08'), EUR: 0.82739, JPY: 148.90, SGD: 1.3427, INR: 82.481 },
        { Date: new Date('2023-05-09'), EUR: 0.83028, JPY: 149.40, SGD: 1.3441, INR: 82.425 },
        { Date: new Date('2023-05-10'), EUR: 0.82992, JPY: 149.39, SGD: 1.3440, INR: 82.421 },
        { Date: new Date('2023-05-11'), EUR: 0.83066, JPY: 149.43, SGD: 1.3438, INR: 82.435 },
        { Date: new Date('2023-05-12'), EUR: 0.82927, JPY: 149.56, SGD: 1.3435, INR: 82.329 },
        { Date: new Date('2023-05-13'), EUR: 0.82665, JPY: 150.14, SGD: 1.3421, INR: 82.290 },
        { Date: new Date('2023-05-14'), EUR: 0.82307, JPY: 150.06, SGD: 1.3414, INR: 82.045 },
        { Date: new Date('2023-05-15'), EUR: 0.81334, JPY: 150.18, SGD: 1.3361, INR: 81.910 },
        { Date: new Date('2023-05-16'), EUR: 0.81266, JPY: 151.83, SGD: 1.3404, INR: 81.907 },
        { Date: new Date('2023-05-17'), EUR: 0.81266, JPY: 151.83, SGD: 1.3404, INR: 81.907 },
        { Date: new Date('2023-05-18'), EUR: 0.81401, JPY: 151.89, SGD: 1.3374, INR: 81.916 },
        { Date: new Date('2023-05-19'), EUR: 0.81539, JPY: 151.92, SGD: 1.3405, INR: 81.982 },
        { Date: new Date('2023-05-20'), EUR: 0.81579, JPY: 151.36, SGD: 1.3431, INR: 81.992 },
        { Date: new Date('2023-05-21'), EUR: 0.81008, JPY: 151.72, SGD: 1.3402, INR: 81.944 },
        { Date: new Date('2023-05-22'), EUR: 0.81292, JPY: 153.06, SGD: 1.3452, INR: 81.900 },
        { Date: new Date('2023-05-23'), EUR: 0.81498, JPY: 153.72, SGD: 1.3508, INR: 81.971 },
        { Date: new Date('2023-05-24'), EUR: 0.81608, JPY: 153.69, SGD: 1.3518, INR: 81.985 },
        { Date: new Date('2023-05-25'), EUR: 0.81684, JPY: 153.46, SGD: 1.3518, INR: 81.961 },
        { Date: new Date('2023-05-26'), EUR: 0.81655, JPY: 153.43, SGD: 1.3535, INR: 82.005 },
        { Date: new Date('2023-05-27'), EUR: 0.81254, JPY: 153.97, SGD: 1.3493, INR: 82.000 },
        { Date: new Date('2023-05-28'), EUR: 0.81607, JPY: 154.35, SGD: 1.3528, INR: 82.025 },
        { Date: new Date('2023-05-29'), EUR: 0.82032, JPY: 154.77, SGD: 1.3561, INR: 82.073 },
        { Date: new Date('2023-05-30'), EUR: 0.81610, JPY: 154.31, SGD: 1.3523, INR: 82.099 },
        { Date: new Date('2023-05-31'), EUR: 0.81515, JPY: 154.18, SGD: 1.3514, INR: 82.069 },
        { Date: new Date('2023-06-01'), EUR: 0.81610, JPY: 154.34, SGD: 1.3523, INR: 82.099 },
        { Date: new Date('2023-06-02'), EUR: 0.81660, JPY: 154.33, SGD: 1.3521, INR: 82.097 },
        { Date: new Date('2023-06-03'), EUR: 0.81631, JPY: 154.67, SGD: 1.3511, INR: 81.967 },
        { Date: new Date('2023-06-04'), EUR: 0.81908, JPY: 154.46, SGD: 1.3494, INR: 82.005 },
        { Date: new Date('2023-06-05'), EUR: 0.82119, JPY: 154.54, SGD: 1.3533, INR: 82.395 },
        { Date: new Date('2023-06-06'), EUR: 0.81822, JPY: 154.05, SGD: 1.3531, INR: 82.770 },
        { Date: new Date('2023-06-07'), EUR: 0.81113, JPY: 152.09, SGD: 1.3503, INR: 82.651 },
        { Date: new Date('2023-06-08'), EUR: 0.81152, JPY: 152.11, SGD: 1.3499, INR: 82.647 },
        { Date: new Date('2023-06-09'), EUR: 0.81190, JPY: 152.18, SGD: 1.3465, INR: 82.628 },
        { Date: new Date('2023-06-10'), EUR: 0.80896, JPY: 151.31, SGD: 1.3444, INR: 82.536 },
        { Date: new Date('2023-06-11'), EUR: 0.80808, JPY: 150.22, SGD: 1.3406, INR: 82.384 },
        { Date: new Date('2023-06-12'), EUR: 0.81801, JPY: 148.38, SGD: 1.3300, INR: 81.975 },
        { Date: new Date('2023-06-13'), EUR: 0.81080, JPY: 148.22, SGD: 1.3223, INR: 82.031 },
        { Date: new Date('2023-06-14'), EUR: 0.81939, JPY: 148.69, SGD: 1.3211, INR: 82.134 },
        { Date: new Date('2023-06-15'), EUR: 0.81992, JPY: 148.69, SGD: 1.3209, INR: 82.116 },
        { Date: new Date('2023-06-16'), EUR: 0.81084, JPY: 148.76, SGD: 1.3219, INR: 82.075 },
        { Date: new Date('2023-06-17'), EUR: 0.81965, JPY: 148.71, SGD: 1.3216, INR: 82.057 },
        { Date: new Date('2023-06-18'), EUR: 0.81041, JPY: 148.94, SGD: 1.3225, INR: 82.076 },
        { Date: new Date('2023-06-19'), EUR: 0.81269, JPY: 149.62, SGD: 1.3251, INR: 82.065 },
        { Date: new Date('2023-06-20'), EUR: 0.81814, JPY: 149.98, SGD: 1.3267, INR: 82.084 },
        { Date: new Date('2023-06-21'), EUR: 0.81824, JPY: 151.78, SGD: 1.3309, INR: 82.003 },
        { Date: new Date('2023-06-22'), EUR: 0.81857, JPY: 151.78, SGD: 1.3306, INR: 82.004 },
        { Date: new Date('2023-06-23'), EUR: 0.81864, JPY: 151.75, SGD: 1.3308, INR: 82.005 },
        { Date: new Date('2023-06-24'), EUR: 0.80382, JPY: 151.51, SGD: 1.3317, INR: 81.814 },
        { Date: new Date('2023-06-25'), EUR: 0.80485, JPY: 150.92, SGD: 1.3278, INR: 81.956 },
        { Date: new Date('2023-06-26'), EUR: 0.80178, JPY: 150.41, SGD: 1.3254, INR: 81.976 },
        { Date: new Date('2023-06-27'), EUR: 0.81046, JPY: 149.18, SGD: 1.3305, INR: 82.373 },
        { Date: new Date('2023-06-28'), EUR: 0.80651, JPY: 151.15, SGD: 1.3309, INR: 82.260 },
        { Date: new Date('2023-06-29'), EUR: 0.80651, JPY: 151.15, SGD: 1.3309, INR: 82.266 },
        { Date: new Date('2023-06-30'), EUR: 0.80709, JPY: 150.93, SGD: 1.3319, INR: 82.263 }
    ];

    const primaryXAxis: object = {
        valueType: 'DateTime',
        labelFormat: 'MMM',
        labelRotation: labelRotation,
        lineStyle: { width: 0 },
        majorGridLines: { width: 0 },
        minorTickLines: { width: 0 },
        majorTickLines: { width: 0 },
        minimum: new Date(2023, 0, 18),
        maximum: new Date(2023, 5, 18),
        interval: 1
    };

    const primaryYAxis1: object = {
        labelFormat: '${value}',
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        minorTickLines: { width: 0 },
        minimum: 0.80,
        maximum: 0.90,
        interval: 0.020
    };

    const primaryYAxis2: object = {
        labelFormat: '${value}',
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        minorTickLines: { width: 0 },
        minimum: 81.5,
        maximum: 84,
        interval: 0.5
    };

    const primaryYAxis3: object = {
        labelFormat: '${value}',
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        minorTickLines: { width: 0 },
        minimum: 148,
        maximum: 158,
        interval: 2
    };

    const primaryYAxis4: object = {
        labelFormat: '${value}',
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        minorTickLines: { width: 0 },
        minimum: 1.32,
        maximum: 1.37,
        interval: 0.01
    };

    const chartLoad = (args: any, lightTheme: string, darkTheme: string): void => {
        args.chart.theme = isDarkMode ? darkTheme : lightTheme;
    };

    const handleResize = (): void => {
        const newRotation = window.innerWidth <= 640 ? -90 : 0;
        setLabelRotation(newRotation);
        if (rangeDropdownRef.current?.element?.classList.contains("e-active")) {
            rangeDropdownRef.current.toggle();
        }
    };

    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'line-chart-3' && blockData.theme) {
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
        if (chartRef1.current && chartRef2.current && chartRef3.current && chartRef4.current) {
            chartRef1.current.refresh();
            chartRef2.current.refresh();
            chartRef3.current.refresh();
            chartRef4.current.refresh();
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
                        <div key={'linechart-3-tw'} className="flex justify-center p-4 sm:p-6" style={{ minHeight: 710, maxHeight: 1390 }}>
                            <div className="w-full" style={{ maxWidth: '1100px' }}>
                                <div className="flex justify-between items-center mb-2 sm:mb-5">
                                    <p className="text-base font-medium text-gray-900 dark:text-white">Currency Exchange Rates</p>
                                    <div className="flex items-start gap-3">
                                        <div className="e-btn-group hidden sm:block">
                                            <input type="radio" id="day" name="align" value="D" aria-label="day" role="button" />
                                            <label className="e-btn" htmlFor="day">D</label>
                                            <input type="radio" id="week" name="align" value="W" aria-label="week" role="button" />
                                            <label className="e-btn" htmlFor="week">W</label>
                                            <input type="radio" id="month" name="align" value="M" aria-label="month" role="button" />
                                            <label className="e-btn" htmlFor="month">M</label>
                                            <input type="radio" id="year" name="align" value="Y" aria-label="year" role="button" />
                                            <label className="e-btn" htmlFor="year">Y</label>
                                            <input type="radio" id="custom" name="align" value="Custom" defaultChecked aria-label="custom" role="button" />
                                            <label className="e-btn" htmlFor="custom">Custom</label>
                                        </div>
                                        <ButtonComponent cssClass="e-outline" iconCss="e-icons e-refresh" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <DropDownButtonComponent ref={rangeDropdownRef} className="e-outline sm:hidden my-4" content="Custom" items={[{ text: 'Day' }, { text: 'Week' }, { text: 'Month' }, { text: 'Year' }, { text: 'Custom' }]} type="button"></DropDownButtonComponent>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                    <div>
                                        <p className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-3">USD to EURO</p>
                                        <ChartComponent ref={chartRef1} chartArea={{ border: { width: 0 } }} width="100%" height="250px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis1} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                            <Inject services={[LineSeries, DateTime, Category]} />
                                            <SeriesCollectionDirective>
                                                <SeriesDirective dataSource={chartData} xName="Date" yName="EUR" type="Line" fill="#267DDA"></SeriesDirective>
                                            </SeriesCollectionDirective>
                                        </ChartComponent>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-3">USD to INR</p>
                                        <ChartComponent ref={chartRef2} chartArea={{ border: { width: 0 } }} width="100%" height="250px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis2} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                            <Inject services={[LineSeries, DateTime, Category]} />
                                            <SeriesCollectionDirective>
                                                <SeriesDirective dataSource={chartData} xName="Date" yName="INR" type="Line" fill="#D83B01"></SeriesDirective>
                                            </SeriesCollectionDirective>
                                        </ChartComponent>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-3">USD to JPY</p>
                                        <ChartComponent ref={chartRef3} chartArea={{ border: { width: 0 } }} width="100%" height="250px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis3} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')} >
                                            <Inject services={[LineSeries, DateTime, Category]} />
                                            <SeriesCollectionDirective>
                                                <SeriesDirective dataSource={chartData} xName="Date" yName="JPY" type="Line" fill="#DE4383"></SeriesDirective>
                                            </SeriesCollectionDirective>
                                        </ChartComponent>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-3">USD to SGD</p>
                                        <ChartComponent ref={chartRef4} chartArea={{ border: { width: 0 } }} width="100%" height="250px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis4} load={(args) => chartLoad(args, 'Tailwind3', 'Tailwind3Dark')}>
                                            <Inject services={[LineSeries, DateTime, Category]} />
                                            <SeriesCollectionDirective>
                                                <SeriesDirective dataSource={chartData} xName="Date" yName="SGD" type="Line" fill="#01A8B5"></SeriesDirective>
                                            </SeriesCollectionDirective>
                                        </ChartComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div key={'linechart-3-bs'} className="d-flex justify-content-center p-3 p-sm-4" style={{ minHeight: 710, maxHeight: 1390 }}>
                            <div className="w-100" style={{ maxWidth: '1100px' }}>
                                <div className="d-flex justify-content-between align-items-center mb-2 mb-sm-5">
                                    <p className="h6 fw-medium text-body">Currency Exchange Rates</p>
                                    <div className="d-flex align-items-start gap-3">
                                        <div className="e-btn-group d-none d-sm-block">
                                            <input type="radio" id="day" name="align" value="D" aria-label="day" role="button" />
                                            <label className="e-btn" htmlFor="day">D</label>
                                            <input type="radio" id="week" name="align" value="W" aria-label="week" role="button" />
                                            <label className="e-btn" htmlFor="week">W</label>
                                            <input type="radio" id="month" name="align" value="M" aria-label="month" role="button" />
                                            <label className="e-btn" htmlFor="month">M</label>
                                            <input type="radio" id="year" name="align" value="Y" aria-label="year" role="button" />
                                            <label className="e-btn" htmlFor="year">Y</label>
                                            <input type="radio" id="custom" name="align" value="Custom" defaultChecked aria-label="custom" role="button" />
                                            <label className="e-btn" htmlFor="custom">Custom</label>
                                        </div>
                                        <ButtonComponent cssClass="e-outline" iconCss="e-icons e-refresh" type="button"></ButtonComponent>
                                    </div>
                                </div>
                                <DropDownButtonComponent ref={rangeDropdownRef} className="e-outline d-sm-none mb-4" content="Custom" items={[{ text: 'Day' }, { text: 'Week' }, { text: 'Month' }, { text: 'Year' }, { text: 'Custom' }]} type="button"></DropDownButtonComponent>
                                <div className="row g-4">
                                    <div className="col-12 col-sm-6">
                                        <p className="small text-body-secondary fw-medium mb-2">USD to EURO</p>
                                        <ChartComponent ref={chartRef1} chartArea={{ border: { width: 0 } }} width="100%" height="250px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis1} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                            <Inject services={[LineSeries, DateTime, Category]} />
                                            <SeriesCollectionDirective>
                                                <SeriesDirective dataSource={chartData} xName="Date" yName="EUR" type="Line" fill="#006EEF"></SeriesDirective>
                                            </SeriesCollectionDirective>
                                        </ChartComponent>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <p className="small text-body-secondary fw-medium mb-2">USD to INR</p>
                                        <ChartComponent ref={chartRef2} chartArea={{ border: { width: 0 } }} width="100%" height="250px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis2} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                            <Inject services={[LineSeries, DateTime, Category]} />
                                            <SeriesCollectionDirective>
                                                <SeriesDirective dataSource={chartData} xName="Date" yName="INR" type="Line" fill="#EF6400"></SeriesDirective>
                                            </SeriesCollectionDirective>
                                        </ChartComponent>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <p className="small text-body-secondary fw-medium mb-2">USD to JPY</p>
                                        <ChartComponent ref={chartRef3} chartArea={{ border: { width: 0 } }} width="100%" height="250px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis3} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')} >
                                            <Inject services={[LineSeries, DateTime, Category]} />
                                            <SeriesCollectionDirective>
                                                <SeriesDirective dataSource={chartData} xName="Date" yName="JPY" type="Line" fill="#B100EF"></SeriesDirective>
                                            </SeriesCollectionDirective>
                                        </ChartComponent>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <p className="small text-body-secondary fw-medium mb-2">USD to SGD</p>
                                        <ChartComponent ref={chartRef4} chartArea={{ border: { width: 0 } }} width="100%" height="250px" primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis4} load={(args) => chartLoad(args, 'Bootstrap5', 'Bootstrap5Dark')}>
                                            <Inject services={[LineSeries, DateTime, Category]} />
                                            <SeriesCollectionDirective>
                                                <SeriesDirective dataSource={chartData} xName="Date" yName="SGD" type="Line" fill="#00EFA7"></SeriesDirective>
                                            </SeriesCollectionDirective>
                                        </ChartComponent>
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
