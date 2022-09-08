import React, { useState, useEffect } from 'react';
import format from 'date-fns/format';
import { DateRangePicker, DateRange } from 'mui-daterange-picker';
import Dialog from '@mui/material/Dialog';

import Flex from '@components/MuiComposed/Flex';
import Text from '@components/MuiComposed/Text';
import Chip from '@components/Chip';
import DataCard from '@components/DataCard';
import FilterEnums from 'types/filterEnums';
import InfoIcon from '@assets/InfoIcon';
import { useGetData } from '@api/index';
import { getPeriods } from '@utils/getPeriods';
import AreaChart from '@components/AreaChart';
import useDisclosure from '@hooks/useDisclosure';

export default function Analytics() {
  const [selected, setSelected] = useState<FilterEnums>(FilterEnums.ALL_TIME);
  const [viewData, setViewData] = useState<Record<string, number>>({});
  const [dateRange, setDateRange] = useState<DateRange>({});

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState([]);

  const [topLocations, setTopLocations] = useState([]);
  const [topSources, setTopSources] = useState([]);

  const { isOpen, onToggle, onClose, onOpen } = useDisclosure();

  const handleClick = (value: FilterEnums) => {
    if (value === FilterEnums.CUSTOM_DATE) {
      onOpen();
      setDateRange({});
    }
    setSelected(value);
  };

  const { data } = useGetData();

  useEffect(() => {
    if (data !== undefined) {
      const viewData = Object.entries(data.graph_data.views)
        .map(([key, value]) => ({
          x: format(new Date(key), 'dd MMM yyyy'),
          y: value,
        }))
        .reduce((acc, curr) => {
          const { x, y } = curr;
          acc[x] = y;
          return acc;
        }, {});

      setViewData(viewData);

      setTopLocations(data.top_locations);
      setTopSources(data.top_sources);
    }
  }, [data]);

  useEffect(() => {
    let periods;
    switch (selected) {
      case FilterEnums.ALL_TIME:
        periods = Object.keys(viewData).length > 0 && Object.keys(viewData);
        const views =
          Object.keys(viewData).length > 0
            ? (Object.values(viewData) as number[])
            : [0];

        setValues(views);
        break;
      case FilterEnums.LAST_30_DAYS:
        periods = getPeriods(FilterEnums.LAST_30_DAYS);
        const last30DaysViews = periods.map((period) => {
          const view = viewData[period];
          return view ? view : 0;
        });
        setValues(last30DaysViews);
        break;
      case FilterEnums.LAST_7_DAYS:
        periods = getPeriods(FilterEnums.LAST_7_DAYS);
        const last7DaysViews = periods.map((period) => {
          const view = viewData[period];
          return view ? view : 0;
        });
        setValues(last7DaysViews);
        break;
      case FilterEnums.LAST_3_DAYS:
        periods = getPeriods(FilterEnums.LAST_3_DAYS);
        const last3DaysViews = periods.map((period) => {
          const view = viewData[period];
          return view ? view : 0;
        });
        setValues(last3DaysViews);
        break;
      case FilterEnums.LAST_1_DAY:
        periods = getPeriods(FilterEnums.LAST_1_DAY);
        const last1DayViews = periods.map((period) => {
          const view = viewData[period];
          return view ? view : 0;
        });
        setValues(last1DayViews);
        break;
      default:
        periods = Object.keys(viewData).length > 0 && Object.keys(viewData);
        break;
    }

    setCategories(periods);
  }, [selected, viewData]);

  useEffect(() => {
    if (Object.keys(dateRange).length > 0) {
      onClose();
      const periods = getPeriods(FilterEnums.CUSTOM_DATE, dateRange);
      setCategories(periods);
      const rangeViews = periods.map((period) => {
        const view = viewData[period];
        return view ? view : 0;
      });
      setValues(rangeViews);
    }
  }, [dateRange]);

  const pageViews =
    values.length > 0 ? values.reduce((acc, curr) => acc + curr, 0) : 0;

  const selectedFeedback = {
    [FilterEnums.ALL_TIME]: 'All Time',
    [FilterEnums.LAST_30_DAYS]: 'Last 30 days',
    [FilterEnums.LAST_7_DAYS]: 'Last 7 days',
    [FilterEnums.LAST_3_DAYS]: 'Last 3 days',
    [FilterEnums.LAST_1_DAY]: 'Last 1 day',
    [FilterEnums.CUSTOM_DATE]:
      Object.keys(dateRange).length > 0 &&
      `${format(dateRange.startDate, 'dd MMM yyyy')} - ${format(
        dateRange.endDate,
        'dd MMM yyyy',
      )}`,
  };

  return (
    <>
      <Flex flexDirection="column">
        <Flex columnGap="12px" rowGap="12px" flexWrap="wrap">
          {React.Children.toArray(
            Object.values(FilterEnums).map((filter) => {
              if (filter === selected) {
                return (
                  <Chip selected value={filter} handleClick={handleClick} />
                );
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
                {selectedFeedback[selected]}
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
            {pageViews}
          </Text>

          <AreaChart categories={categories} values={values} />

          <Flex mt="24px" columnGap="16px" flexWrap="wrap" rowGap="16px">
            <DataCard title="Top Locations" chartData={topLocations} />
            <DataCard title="Top Referral source" chartData={topSources} />
          </Flex>
        </Flex>
      </Flex>

      <Dialog
        open={isOpen}
        onClose={onClose}
        closeAfterTransition
        disableEscapeKeyDown
        fullWidth
        maxWidth="md"
        scroll="body"
        keepMounted
      >
        <DateRangePicker
          open={isOpen}
          toggle={onToggle}
          definedRanges={[]}
          onChange={(range) => setDateRange(range)}
        />
      </Dialog>
    </>
  );
}
