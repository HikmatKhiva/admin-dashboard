import React from 'react'
const SidebarDropItem = ({ icon, text, menuSidebar }) => {
    return (
        <div style={{ padding: menuSidebar && '5px 15px' }} className='sidebar-drop-item'>
            <img src={icon} alt="Icon" />
            <span className="nav-text for-text">{text}</span>
        </div>
    )
}
export default SidebarDropItem;