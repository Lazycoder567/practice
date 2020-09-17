import React, { useState } from "react";

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
          {item.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
