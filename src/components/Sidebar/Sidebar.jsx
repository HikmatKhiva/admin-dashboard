import React, { useContext, useState } from 'react';
import { Dashboard, ExpandMore, ExpandLess, Menu, Close } from '@mui/icons-material';
import { Box, Folder } from '../../assets/Icon/exportIcon';
import { IconButton } from '@mui/material';
import { SidebarDropItem } from '../export';
import { MenuData, SystemData } from '../../data'
import { SidebarContext } from '../../context/SidebarContext';
import './sidebar.css'
const Sidebar = () => {
  const { sideBar, setSidebar } = useContext(SidebarContext)
  const [sidebarDropMenu, setSidebarDropMenu] = useState(false);
  const [sidebarDropSystem, setSidebarDropSystem] = useState(false);
  const [menuSidebar, setMenuSidebar] = useState(false);

  return (
    <div className={`${menuSidebar ? 'sidebar-mobile' : 'sidebar'} ${sideBar && 'open-sidebar'}`}>
      <div className="sidebar-header">
        <span className='for-text'>Admin Dashboard</span>
        <IconButton className='sidebar-icon' onClick={() => setMenuSidebar(prev => !prev)}>
          <Menu />
        </IconButton>
        <IconButton className='sidebar-icon__close' onClick={() => setSidebar(prev => !prev)}>
          <Close />
        </IconButton>
      </div>
      <div className="sidebar-body">
        <span className="sidebar-logo for-text">
          Menu
        </span>
        <div className="sidebar-menu">
          <span className="sidebar-menu_logo for-text">
            <Dashboard style={{ width: '30px', height: '30px', color: '#504178' }} />
            <span className="sidebar-menu_text for-text">
              Dashboard
            </span>
          </span>
          <div className="sidebar-nav">
            <div className='sidebar-nav__drop'>
              <img src={Box} alt="BoxIcon" />
              <span className="nav-text for-text">Order</span>
              <IconButton onClick={() => setSidebarDropMenu(prev => !prev)}>
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
              <IconButton onClick={() => setSidebarDropSystem(prev => !prev)}>
                {sidebarDropSystem ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </div>
            {/* Sidebar Drop down Item */}
            <div className={`${sidebarDropSystem ? 'show-drop' : 'hidden-drop'}`}>
              {SystemData && SystemData.map(value => (
                <SidebarDropItem key={value.id} icon={value.icon} text={value.text} menuSidebar={menuSidebar} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar