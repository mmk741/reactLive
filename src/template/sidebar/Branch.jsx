import React,{useState,useEffect} from "react";
import Node from './Node'
import Tree from "./Tree";

function Branch({ item, isCollapsed, treeState, handleTreeState, level }) {

 
  const [isExpanded, setIsExpanded] = useState(treeState[item.id] ?? false)

  useEffect(() => {
    setIsExpanded(treeState[item.id] ?? false);
  }, [treeState[item.id]])
  

  const hasChildren=item.children===undefined?false:true;
  
 
  


  const toggleExpansion=()=>{
   if(hasChildren)
    {setIsExpanded(prevVal=>!prevVal);
    const singleNodeState={};
    singleNodeState[item.id]= !isExpanded;//why doing opposite
    const updateState=Object.assign({},treeState,singleNodeState);
    handleTreeState(updateState);
    }

  }
  
  const renderChild=()=>{
   
if(hasChildren)  {
   return item.children.map((elm)=>{ 
    return(
       <Branch
      key={elm.id}
      item={elm}
      isCollapsed={isCollapsed}
      treeState={treeState}
      handleTreeState={handleTreeState}
      level={level+1}

       />
     )}
   )
    }
  }

  return ( <>
  <Node
  level={level+1}
  item={item}
  isCollapsed={isCollapsed}   //sidemenu collapsed or not
  toggleExpansion={toggleExpansion}
  isExpanded={isExpanded}
  hasChildren={hasChildren}

   />

   
{isExpanded && renderChild()}


</>)
}

export default Branch;
