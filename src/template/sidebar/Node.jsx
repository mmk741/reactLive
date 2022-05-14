import React from "react";

function Node(props) {
  const { level, item, isCollapsed, toggleExpansion, isExpanded, hasChildren } =  props;


  //dropdown svg
  return (
    <>
    <div className={`tree-node ${`tree-node-level-`+level}`}>
   { hasChildren && !isCollapsed && <span  onClick={toggleExpansion}/>}
     
     { !isCollapsed && <div  onClick={toggleExpansion} > {item.label} </div>}

    </div>
     
    </>
  );
}

export default Node;
