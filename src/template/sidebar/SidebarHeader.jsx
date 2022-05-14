import React from "react";
import './styles/sidebarHeader.scss'

function SidebarHeader({ brandName = "BrandName", isCollapsed, toggleCollapsed }) {
   
  
  return <div className={`sidebar-header ${isCollapsed?"sidebar-header--collapsed":''}`}>
     { !isCollapsed? <h2>{brandName}</h2>:""}
     <button onClick={toggleCollapsed}/>   
  </div>;
}

export default SidebarHeader;
