import React, {useState} from "react";
const TodoItem = ({
  taskValue,
  taskId,
  handleMarkComplete,
  handleDeleteItem,
  isCompleted,
}) => {

  const taskStyle = {
    textDecorationLine: isCompleted === true ? "line-through" : "none",
    color: isCompleted === true ? "blue" : "white",
    fontWeight: "fantasy",
    fontSize: "16px",
  };
  return (
    <>
      <div className=" todo-item_wrapper">
        <input
          type="checkbox"
          checked={isCompleted}
          value={taskId}
         
          onChange={() => handleMarkComplete(taskId)}
        />
        <h1 style={taskStyle}>{taskValue}</h1>
        <button
          key={taskId}
          type="submit"
          onClick={() => handleDeleteItem(taskId)}
        >
          X
        </button>
      </div>
    </>
  );
};

export default TodoItem;
