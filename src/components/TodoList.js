import TodoItem from "./TodoItem";
const TodoList = ({ handleMarkComplete, handleDeleteItem, allTodo }) => {
  const TodoList1 = allTodo.map((item) => {
    return (
      <>
        <div className="todo-list_wrapper">
          {item.isDeleted === false && (
            <TodoItem
            key={item.id}
              taskId={item.id}
              taskValue={item.task}
              isCompleted={item.isCompleted}
              handleMarkComplete={handleMarkComplete}
              handleDeleteItem={handleDeleteItem}
            />
          )}
        </div>
      </>
    );
  });
  return (
    <div>
      <h1>{TodoList1}</h1>
    </div>
  );
};
export default TodoList;
