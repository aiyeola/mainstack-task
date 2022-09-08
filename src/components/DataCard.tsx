import React from 'react';
import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';

import Flex from '@components/MuiComposed/Flex';
import Text from '@components/MuiComposed/Text';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function DataCard() {
  const options = {
    series: [44, 55, 13, 33],
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    colors: ['#599EEA', '#844FF6', '#0FB77A', '#FAB70A', '#F09468'],
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
        },
      },
    },
  };

  const data = [
    {
      country: 'Nigeria',
      code: 'ng',
      percent: 50,
    },
    {
      country: 'Nigeria',
      code: 'ng',
      percent: 50,
    },
    {
      country: 'Nigeria',
      code: 'ng',
      percent: 50,
    },
    {
      country: 'Nigeria',
      code: 'ng',
      percent: 50,
    },
  ];

  return (
    <Flex
      pt="24px"
      pb="45px"
      px="24px"
      flexDirection="column"
      sx={{
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'brand.border_grey',
        borderRadius: '12px',
        maxWidth: '500px',
        width: '100%',
      }}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="18px" fontWeight={600}>
          Top Locations
        </Text>
        <Text variant="body2" color="brand.secondary">
          View full reports
        </Text>
      </Flex>
      <Flex mt="42px" justifyContent="space-between" alignItems="center">
        <Flex flexDirection="column" rowGap="19px" width="40%">
          {React.Children.toArray(
            data.map((item) => (
              <Flex alignItems="center">
                <span className={`fi fi-${item.code}`} />
                <Text ml="8px" mr="12px">
                  {item.country}
                  <Text component="span" fontWeight={600} ml="5px">
                    {item.percent}%
                  </Text>
                </Text>
                <Box
                  sx={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: 'brand.secondary',
                    borderRadius: '50%',
                  }}
                />
              </Flex>
            )),
          )}
        </Flex>
        <Flex width="60%">
          <Chart
            options={options}
            series={options.series}
            type="donut"
            height={220}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
