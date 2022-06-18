import React, { useState } from "react";

const AddTodo = ({ addTodoHandler, handleDeleteAll,handleSelectAll,isSelectAll}) => {
  const [input, setInput] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodoHandler(input);
    setInput("");
  };

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div className="add-todo_wrapper">
          <div className="input_wrapper ">
            <input type="checkbox" id="select" checked={isSelectAll} onChange={handleSelectAll} />
            <label htmlFor="select">select all</label>

            
            <input
              type="text"
              placeholder="add todo.."
              value={input}
              onChange={onChangeHandler}
            />
            <button type="submit">Add</button>
            <button type="submit" onClick={handleDeleteAll}>
              Delete all
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default AddTodo;
