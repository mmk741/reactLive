import React from "react";
import Branch from "./Branch"

function Tree({ data, isCollapsed, treeState, handleTreeState }) {
 
 
  return <div>
  { data.map( (elm) => (
    <Branch 
      key={elm.id}
      item={elm}
      isCollapsed={isCollapsed}
      treeState={treeState}
      handleTreeState={handleTreeState}
      level={-1}
    />
    
  ))}

  </div>;
}

export default Tree;
