import React from 'react';
import { Outlet } from "react-router-dom";
import LayoutNav from './components/LayoutNav';
import LayoutHeader from './components/LayoutHeader';
import LayoutFooter from './components/LayoutFooter';
import LayoutFixed from './components/LayoutFixed';

function Layout() {
  return (
    <>
      <div id='app'>
        <LayoutFixed />
        <LayoutNav />
        <LayoutHeader />
        <Outlet />
        <LayoutFooter />
      </div>
    </>
    
  );
}

export default Layout;