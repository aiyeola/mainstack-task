import { useQuery } from '@tanstack/react-query';

import request from '@api/config';

export const useGetData = () =>
  useQuery(['getData'], () =>
    request
      .get('/')
      .then((res) => res.data)
      .catch((err) => err.response.data),
  );
