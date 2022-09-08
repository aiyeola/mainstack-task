import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
import { ApexOptions } from 'apexcharts';

import Flex from '@components/MuiComposed/Flex';
import Text from '@components/MuiComposed/Text';
import GoogleIcon from '@assets/GoogleIcon';
import FacebookIcon from '@assets/FacebookIcon';
import InstagramIcon from '@assets/InstagramIcon';
import LinkedInIcon from '@assets/LinkedInIcon';
import capitalizeFirstLetter from '@utils/capitalizeFirstLetter';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function DataCard({ title, chartData }) {
  const [data, setData] = useState([]);

  const colors = ['#599EEA', '#844FF6', '#0FB77A', '#FAB70A', '#F09468'];

  useEffect(() => {
    if (chartData.length > 0) {
      const data = chartData.map((item, index) => ({
        label: item[Object.keys(item)[0]],
        count: item.count,
        percent: item.percent,
        color: colors[index],
      }));
      setData(data);
    }
  }, [chartData]);

  const flag = {
    Nigeria: 'ng',
    Ghana: 'gh',
    Germany: 'de',
    Finland: 'fi',
    'United Kingdom': 'gb',
  };

  const icon = {
    google: <GoogleIcon />,
    facebook: <FacebookIcon />,
    instagram: <InstagramIcon />,
    linkedin: <LinkedInIcon />,
  };

  const options: ApexOptions = {
    series: data.length > 0 ? data.map((item) => item.percent) : [],
    labels: data.length > 0 ? data.map((item) => item.label) : [],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    colors,
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
        },
      },
    },
    tooltip: {
      style: {
        fontFamily: 'inherit',
        fontSize: '14px',
      },
    },
  };

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
        flex: 1,
        minWidth: '500px',
      }}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="18px" fontWeight={600}>
          {title}
        </Text>
        <Text variant="body2" color="brand.secondary">
          View full reports
        </Text>
      </Flex>
      <Flex mt="42px" justifyContent="space-between" alignItems="center">
        <Flex flexDirection="column" rowGap="19px">
          {React.Children.toArray(
            data.map((item) => (
              <Flex alignItems="center">
                {title.includes('Location') ? (
                  <span className={`fi fi-${flag[item.label]}`} />
                ) : (
                  icon[item.label]
                )}
                <Text ml="8px" mr="12px">
                  {capitalizeFirstLetter(item.label)}
                  <Text component="span" fontWeight={600} ml="5px">
                    {item.percent}%
                  </Text>
                </Text>
                <Box
                  sx={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: item.color,
                    borderRadius: '50%',
                  }}
                />
              </Flex>
            )),
          )}
        </Flex>
        <Flex>
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
