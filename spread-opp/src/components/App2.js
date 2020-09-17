import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

const App = () => {
  const [InputItem, setInputItem] = useState("");
  const [item, setItem] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputItem(value);
  };

  const handleClickAdd = (event) => {
    if (InputItem !== "") {
      setItem((prevItem) => {
        return [...prevItem, InputItem];
      });
      setInputItem("");
    }
  };

  const deleteItem = (id) => {
    setItem((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={InputItem} />
        <button onClick={handleClickAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todo, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todo}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
