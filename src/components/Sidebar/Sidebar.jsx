import React from 'react'
import { Dashboard, ExpandMore, ExpandLess, Menu } from '@mui/icons-material';
import { Box, Folder } from '../../assets/Icon/exportIcon'
import './sidebar.css'
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { SidebarDropItem } from '../export';
import { MenuData, SystemData } from '../../data'
const Sidebar = () => {
  const [sidebarDropMenu, setSidebarDropMenu] = useState(false);
  const [sidebarDropSystem, setSidebarDropSystem] = useState(false);
  const [menuSidebar, setMenuSidebar] = useState(false);

  return (
    <div className={`${menuSidebar ? 'sidebar-mobile' : 'sidebar'}`}>
      <div className="sidebar-header">
        <span>Admin Dashboard</span>
        <IconButton onClick={() => setMenuSidebar(prev => !prev)}>
          <Menu />
        </IconButton>
      </div>
      <div className="sidebar-body">
        <span  className="sidebar-logo">
          Menu
        </span>
        <div className="sidebar-menu">
          <span  className="sidebar-menu_logo">
            <Dashboard style={{ width: '30px', height: '30px', color: '#504178' }} />
            <span  className="sidebar-menu_text">
              Dashboard
            </span>
          </span>
          <div className="sidebar-nav">
            <div className='sidebar-nav__drop'>
              <img src={Box} alt="BoxIcon" />
              <span className="nav-text">Order</span>
              <IconButton  onClick={() => setSidebarDropMenu(prev => !prev)}>
                {sidebarDropMenu ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </div>
            {/* Sidebar Drop down Item */}
            <div className={`${sidebarDropMenu ? 'show-drop' : 'hidden-drop'}`}>
              {MenuData && MenuData.map(value => (
                <SidebarDropItem key={value.id} icon={value.icon} text={value.text} menuSidebar={menuSidebar} />
              ))}
            </div>
            <span className="sidebar-nav__logo">
              System
            </span>
            <div className='sidebar-nav__drop'>
              <img src={Folder} alt="BoxIcon" />
              <span className="nav-text">Master Data</span>
              <IconButton  onClick={() => setSidebarDropSystem(prev => !prev)}>
                {sidebarDropSystem ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </div>
            {/* Sidebar Drop down Item */}
            <div className={`${sidebarDropSystem ? 'show-drop' : 'hidden-drop'}`}>
              {SystemData && SystemData.map(value => (
                <SidebarDropItem  key={value.id} icon={value.icon} text={value.text} menuSidebar={menuSidebar} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar