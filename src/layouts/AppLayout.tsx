import React, { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

import Flex from '@components/MuiComposed/Flex';
import Navigation from '@layouts/Navigation';

let ps;

export default function AppLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const matches1028 = useMediaQuery('(min-width:1028px)');

  // initialize and destroy the PerfectScrollbar plugin
  useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar('#mainPanel', {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = 'hidden';
    }
    window.addEventListener('resize', resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
      }
      window.removeEventListener('resize', resizeFunction);
    };
  }, []);

  const resizeFunction = () => {
    if (window.innerWidth >= 1028) {
      setMobileOpen(false);
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Flex
      flexDirection={matches1028 ? 'row' : 'column'}
      sx={{
        position: 'relative',
        top: '0',
        height: '100vh',
      }}
    >
      <Navigation handleDrawerToggle={handleDrawerToggle} open={mobileOpen} />

      <Flex width="100%" id="mainPanel">
        {children}
      </Flex>
    </Flex>
  );
}
