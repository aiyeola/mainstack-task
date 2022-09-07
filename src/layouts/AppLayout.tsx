import React from 'react';
import { useRouter } from 'next/router';
import Avatar from '@mui/material/Avatar';

import Flex from '@components/MuiComposed/Flex';
import Text from '@components/MuiComposed/Text';
import Link from '@components/MuiComposed/Link';
import Logo from '@assets/Logo';
import EllipsisIcon from '@assets/EllipsisIcon';
import { section1Routes, section2Routes, section3Routes } from 'src/routes';

export default function AppLayout({ children }) {
  const router = useRouter();

  const activeRoute = (routeName) =>
    router.asPath.indexOf(routeName) === 0 ? true : false;

  return (
    <Flex>
      <Flex
        flexDirection="column"
        pt="38px"
        pb="60px"
        sx={{
          width: '304px',
          borderRightWidth: '1px',
          borderRightStyle: 'solid',
          borderRightColor: 'brand.border_grey',
          minHeight: '100vh',
        }}
      >
        <Flex pl="61px" mb="46px">
          <Logo />
        </Flex>

        <Flex flexDirection="column" rowGap="22px">
          {React.Children.toArray(
            section1Routes.map((route) => (
              <Flex
                pl="61px"
                py="2px"
                alignItems="center"
                component={Link}
                href={route.link}
                className="fill_icon"
                sx={{
                  fill: activeRoute(route.link) && '#FF5403 !important',
                  stroke: activeRoute(route.link) && '#FF5403 !important',
                  color: activeRoute(route.link)
                    ? 'brand.secondary'
                    : 'brand.grey',
                  '&:hover': {
                    color: 'brand.secondary',
                  },
                }}
              >
                <route.icon />
                <Text ml="15px" color="inherit" fontWeight={700}>
                  {route.title}
                </Text>
              </Flex>
            )),
          )}
        </Flex>

        <Flex flexDirection="column" rowGap="22px" mt="30px">
          <Text color="brand.grey" pl="61px" fontWeight={600}>
            OTHERS 1
          </Text>
          {React.Children.toArray(
            section2Routes.map((route) => (
              <Flex
                pl="61px"
                py="2px"
                alignItems="center"
                component={Link}
                href={route.link}
                className="fill_icon"
                sx={{
                  '&:hover': {
                    color: 'brand.secondary',
                  },
                }}
              >
                <route.icon />
                <Text ml="15px" color="inherit" fontWeight={700}>
                  {route.title}
                </Text>
              </Flex>
            )),
          )}
        </Flex>
        <Flex flexDirection="column" rowGap="22px" mt="30px">
          <Text color="brand.grey" pl="61px" fontWeight={600}>
            OTHER 2
          </Text>
          {React.Children.toArray(
            section3Routes.map((route) => (
              <Flex
                pl="61px"
                py="2px"
                alignItems="center"
                component={Link}
                href={route.link}
                className="fill_icon"
                sx={{
                  '&:hover': {
                    color: 'brand.secondary',
                  },
                }}
              >
                <route.icon />
                <Text ml="15px" color="inherit" fontWeight={700}>
                  {route.title}
                </Text>
              </Flex>
            )),
          )}
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="space-between"
          mt="auto"
          pl="61px"
          pr="20px"
        >
          <Flex alignItems="center">
            <Avatar
              alt="user"
              src="/images/user.png"
              sx={{ width: 32, height: 32, marginRight: '12px' }}
            />
            <Text color="brand.grey">Blessing Daniels</Text>
          </Flex>
          <EllipsisIcon />
        </Flex>
      </Flex>
      <Flex>{children}</Flex>
    </Flex>
  );
}
