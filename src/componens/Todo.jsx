import React, { useState } from "react";
import "./Todo.css";
import Todos from "./Todos";

const Todo = () => {
  const [inputList, setInputList] = useState(" ");
  const [data, setData] = useState([]);

  const handletext = (e) => {
    setInputList(e.target.value);
  };
  const addData = () => {
    setData((prevdata) => {
      return [...prevdata, inputList];
    });
    setInputList("")
  };
  const handleDel = (id)=>{
    console.log(id)
    setData((prevdata)=>{
        return prevdata.filter((val,idx)=>{
            return idx != id;
        })
    })

  }
  
  return (
    <div className="main-div">
      <div className="box-div">
        <br />
        <h1 className="todo-header">ToDo List </h1>
        <br />
        <input type="text" value = {inputList} placeholder="Add a item" onChange={handletext} />
        <button onClick={addData}>+</button>
        {data.map((input, index) => {
        return <Todos input = {input}
        index = {index}
        key = {index}
        onSelect = {handleDel}
         />
        })}
      </div>
    </div>
  );
};

export default Todo;
