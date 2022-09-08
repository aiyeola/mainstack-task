import format from 'date-fns/format';
import sub from 'date-fns/sub';
import add from 'date-fns/add';
import { DateRange } from 'mui-daterange-picker';

import FilterEnums from 'types/filterEnums';

export const getPeriods = (period: FilterEnums, range?: DateRange) => {
  let currentDate = new Date();

  if (period === FilterEnums.LAST_30_DAYS) {
    const period = [];

    for (let i = 30; i > 0; i -= 1) {
      const data = format(sub(currentDate, { days: i }), 'dd MMM yyyy');
      period.push(data);
    }
    return period;
  }

  if (period === FilterEnums.LAST_7_DAYS) {
    const period = [];

    for (let i = 7; i > 0; i -= 1) {
      const data = format(sub(currentDate, { days: i }), 'dd MMM yyyy');
      period.push(data);
    }
    return period;
  }

  if (period === FilterEnums.LAST_3_DAYS) {
    const period = [];

    for (let i = 3; i > 0; i -= 1) {
      const data = format(sub(currentDate, { days: i }), 'dd MMM yyyy');
      period.push(data);
    }
    return period;
  }

  if (period === FilterEnums.LAST_1_DAY) {
    const period = [];

    for (let i = 1; i > 0; i -= 1) {
      const data = format(sub(currentDate, { days: i }), 'dd MMM yyyy');
      period.push(data);
    }
    return period;
  }

  if (period === FilterEnums.CUSTOM_DATE) {
    const period = [];

    const startDate = new Date(range?.startDate);
    const endDate = new Date(range?.endDate);

    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    for (let i = diffDays; i >= 0; i -= 1) {
      const data = format(add(startDate, { days: i }), 'dd MMM yyyy');
      period.unshift(data);
    }
    return period;
  }
};
