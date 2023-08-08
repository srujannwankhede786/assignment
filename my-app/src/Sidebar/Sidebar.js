import React, { useState } from 'react';
import './Sidebar.css';
import { IoSettingsOutline } from 'react-icons/io5';

const Sidebar = ({ isOpen }) => {
  const [isCollapsed, setIsCollapsed] = useState(isOpen);



  return (
    <div className={`sidebar ${isOpen ? 'open' : ''} ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="logo">Your Logo</div>
      <ul className="nav-links">
        <li className='round'>
          <a href="/"> <IoSettingsOutline className='px-1' size={25}/> Home</a>
        </li>
        <li>
          <a href="/"><IoSettingsOutline className='px-1' size={25}/> About</a>
        </li>
        <li>
          <a href="/"><IoSettingsOutline className='px-1' size={25}/> Services</a>
        </li>
        <li>
          <a href="/"><IoSettingsOutline className='px-1' size={25}/> Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
