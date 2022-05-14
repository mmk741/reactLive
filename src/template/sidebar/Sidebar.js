import React,{useState , useEffect} from 'react'
import SidebarHeader from './SidebarHeader'
import data from '../../assest/json/sidebar.json'
import Tree from './Tree';

import './styles/sideMenu.scss'
import  './styles/tree.scss'

function Sidebar() {

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [treeState, setTreeState] = useState({})
    
    // console.log(treeState);
useEffect(() => {
  

  const storedTreeState=JSON.parse(localStorage.getItem('treeState')) || {};
 setTreeState(()=>storedTreeState)


}, [])


useEffect(() => {

  const isEmpty = Object.keys(treeState).length === 0;
 
if(!isEmpty)
 localStorage.setItem("treeState",JSON.stringify(treeState));

}, [treeState])

    const toggleCollapsed=()=>setIsCollapsed(!isCollapsed);

    const handleTreeState=(node)=>{
      setTreeState(Object.assign({},node));
    }
 
    return (
    <div className={`side-menu ${isCollapsed ? "side-menu--collapsed":''}`}>
    <SidebarHeader
      brandName="React"
      isCollapsed={isCollapsed}
      toggleCollapsed={toggleCollapsed}
    />

    <Tree
     data={data.data}
      isCollapsed={isCollapsed}
      treeState={treeState}
      handleTreeState={handleTreeState}
    />
    
    
    </div>
  )
}

export default Sidebar