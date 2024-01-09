import React from "react";

const Todos = ({ input ,index , onSelect}) => {
  const handleDel = () => {
    console.log("Deleted");
  };

  return (
    <>
      <div className="list-display">
        <li className="clear-icon" onClick={()=>onSelect(index)} >
          c
        </li>
        <li>{input}</li>
      </div>
    </>
  );
};

export default Todos;
