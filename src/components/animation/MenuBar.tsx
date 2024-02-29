"use client"
import React from 'react';
import '../../style/MenuBar.css';

interface MenuBarProps {
  isPushed: boolean;
}

const MenuBar: React.FC<MenuBarProps> = ({ isPushed }) => {
  return (
    <div id="nav-container" className={isPushed ? 'nav-container pushed' : 'nav-container'}>
      <div className="toggle-icon">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default MenuBar;