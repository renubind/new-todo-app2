import "./Todo.css";
import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import FilterControl from "./FilterControl";
import { nanoid } from "nanoid";

const Todo = () => {
  const Tasks = [
    { id: "001a", task: "task1", isCompleted: false, isDeleted: false },
    { id: "001b", task: "task2", isCompleted: false, isDeleted: false },
    { id: "001c", task: "task3", isCompleted: false, isDeleted: false },
  ];
  const [allTodo, setAllTodo] = useState(Tasks);
  const [showFilteredData, setShowFilteredData] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [isSelectAll, setIsSelectAll] = useState(false);

  //addtodo functionality
  const addTodoHandler = (newTodo) => {
    console.log("nanoid",nanoid(3))
    let newTodoObj = {
      id: nanoid(3),
      task: newTodo,
      isCompleted: false,
      isDeleted: false,
    };
    const newTodoList = [...allTodo, newTodoObj];
    setAllTodo(newTodoList);
  };

  const handleDeleteAll = () => {
    setAllTodo([]);
  };


  const handleSelectAll = () => {
    const selectedList=allTodo.map((item)=>{
      const newItem={...item,  isCompleted:!isSelectAll}
      return newItem;
    })
    setAllTodo( selectedList);
    setIsSelectAll(!isSelectAll)
  };

  //TodoList functionality
  const handleDeleteItem = (todoId) => {
    const itemList = allTodo.map((element) => {
      if (element.id === todoId) {
        const deleteItemList = { ...element, isDeleted: true };
        return deleteItemList;
      }
      return element;
    });
    setAllTodo(itemList);
  };

  const handleMarkComplete = (todoId) => {
    console.log("mark completed", todoId);
    const newItemList = allTodo.map((element) => {
      if (element.id === todoId) {
        const newValue = { ...element, isCompleted: !element.isCompleted };
        return newValue;
      }
      return element;
    });
    setAllTodo(newItemList);
  };

  //filter functionality

  const handleIsCompleted = () => {
    setShowFilteredData(true);
    const data = allTodo.filter((element) => element.isCompleted === true);
    setFiltered(data);
  };

  const handleIsDeleted = () => {
    setShowFilteredData(true);
    const tasks = allTodo.filter((element) => element.isDeleted === true);
    setFiltered(tasks);
  };

  const handleAllTask = () => {
    setShowFilteredData(true);
    setFiltered(allTodo);
  };
  return (
    <>
      <div className="Todo_wrapper">
        <h1>Todo App</h1>
        <AddTodo
        isSelectAll={isSelectAll}
        handleSelectAll={handleSelectAll}
          addTodoHandler={addTodoHandler}
          handleDeleteAll={handleDeleteAll}
        />

        {showFilteredData === true ? (
          <FilterControl filtered={filtered} />
        ) : (
          <TodoList
            handleMarkComplete={handleMarkComplete}
            handleDeleteItem={handleDeleteItem}
            allTodo={allTodo}
          />
        )}
        <div className="todo-button">
          <button type="submit" onClick={handleAllTask}>
            All
          </button>
          <button type="submit" onClick={handleIsCompleted}>
            Completed
          </button>
          <button type="submit" onClick={handleIsDeleted}>
            Deleted
          </button>
        </div>
      </div>
    </>
  );
};
export default Todo;
