import dynamic from 'next/dynamic';
import format from 'date-fns/format';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type AreaChartProps = {
  values: number[];
  categories: string[];
};

export default function AreaChart({ categories, values }: AreaChartProps) {
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      background: 'transparent',
      fontFamily: 'inherit',
      foreColor: '#4D5760',
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
      colors: ['#FF5403'],
    },
    stroke: {
      curve: 'straight',
      width: 2,
      colors: ['#FF5403'],
    },
    tooltip: {
      style: {
        fontFamily: 'inherit',
        fontSize: '14px',
      },
      marker: {
        fillColors: ['#FF5403'],
      },
    },
    xaxis: {
      categories:
        categories.length > 0
          ? categories.map((date) => format(new Date(date), 'dd MMM'))
          : [],
      labels: {
        show: true,
        style: {
          fontFamily: 'inherit',
          fontSize: '14px',
          colors: ['#4D5760'],
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: 'inherit',
          fontSize: '14px',
          colors: ['#4D5760'],
        },
      },
    },
    grid: {
      borderColor: '#DBDEE5',
      strokeDashArray: 4,
    },
    noData: {
      text: 'No data available',
      style: {
        color: '#131316',
        fontSize: '16px',
        fontFamily: 'inherit',
      },
    },
  };

  const series: ApexOptions['series'] = [
    {
      name: 'Views',
      data: values,
    },
  ];

  return <Chart options={options} series={series} type="area" height={400} />;
}
