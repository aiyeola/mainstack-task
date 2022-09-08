import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

import Flex from '@components/MuiComposed/Flex';
import Text from '@components/MuiComposed/Text';
import Chip from '@components/Chip';
import DataCard from '@components/DataCard';
import FilterEnums from 'types/filterEnums';
import InfoIcon from '@assets/InfoIcon';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Analytics() {
  const [selected, setSelected] = useState<FilterEnums>(FilterEnums.ALL_TIME);

  const handleClick = (value: FilterEnums) => setSelected(value);

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
      //   type: 'datetime',
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
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

  const series = [
    {
      name: 'Views',
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  //   series: [
  //     {
  //       data: [
  //         { x: '05/06/2014', y: 54 },
  //         { x: '05/08/2014', y: 17 },
  //         { x: '05/28/2014', y: 26 },
  //       ],
  //     },
  //   ];

  return (
    <Flex flexDirection="column">
      <Flex columnGap="12px" rowGap="12px" flexWrap="wrap">
        {React.Children.toArray(
          Object.values(FilterEnums).map((filter) => {
            if (filter === selected) {
              return <Chip selected value={filter} handleClick={handleClick} />;
            } else {
              return <Chip value={filter} handleClick={handleClick} />;
            }
          }),
        )}
      </Flex>
      <Flex
        flexDirection="column"
        pt="32px"
        pb="22px"
        px="24px"
        mt="24px"
        sx={{
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'brand.border_grey',
          borderRadius: '12px',
        }}
      >
        <Flex alignItems="flex-start" justifyContent="space-between">
          <Flex flexDirection="column">
            <Text
              fontSize="18px"
              fontWeight={800}
              mb="8px"
              sx={{
                letterSpacing: '-0.015em',
              }}
            >
              Page Views
            </Text>
            <Text color="brand.grey_secondary" variant="subtitle2">
              {selected}
            </Text>
          </Flex>

          <InfoIcon />
        </Flex>
        <Text
          variant="h3"
          fontWeight={800}
          mt="24px"
          mb="32px"
          sx={{
            letterSpacing: '-0.015em',
          }}
        >
          500
        </Text>
        <Chart options={options} series={series} type="area" height={400} />

        <Flex
          mt="24px"
          columnGap="16px"
          flexWrap="wrap"
          rowGap="16px"
        >
          <DataCard />
          <DataCard />
        </Flex>
      </Flex>
    </Flex>
  );
}
