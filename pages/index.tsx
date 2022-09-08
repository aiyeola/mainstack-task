import React from 'react';

import AppLayout from '@layouts/AppLayout';
import Flex from '@components/MuiComposed/Flex';
import Text from '@components/MuiComposed/Text';
import Analytics from '@components/Analytics';
import { useGetData } from '@api/index';

export default function Index() {
  // const { data } = useGetData();
  // console.log('data: ', data);

  return (
    <AppLayout>
      <Flex
        flexDirection="column"
        px={['20px', , , '60px']}
        pt="22px"
        pb="44px"
        width="100%"
      >
        <Text variant="h6" fontWeight={800}>
          Dashboard
        </Text>
        <Flex
          flexDirection={['column', , , 'row']}
          mt="46px"
          alignItems={['flex-start', , , 'center']}
          justifyContent="space-between"
          width="100%"
          rowGap="12px"
        >
          <Flex flexDirection="column">
            <Text variant="h5" fontWeight={800}>
              Good morning, Blessing ⛅️
            </Text>
            <Text
              variant="body2"
              mt="10px"
              color="brand.grey_secondary"
              fontWeight={500}
            >
              Check out your dashboard summary.
            </Text>
          </Flex>
          <Text
            color="brand.secondary"
            variant="body2"
            alignSelf={['flex-end', , , 'inherit']}
          >
            View analytics
          </Text>
        </Flex>
        <Flex flexDirection="column" mt="23px">
          <Analytics />
        </Flex>
      </Flex>
    </AppLayout>
  );
}
