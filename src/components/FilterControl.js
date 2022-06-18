import TodoItem from "./TodoItem";
const FilterControl = ({ filtered }) => {
  const filteredTodoList = filtered.map((item) => {
    return (
      <>
        <TodoItem
          key={item.id}
          taskId={item.id}
          taskValue={item.task}
          isCompleted={item.isCompleted}
        />
      </>
    );
  });
  return (
    <>
      <ul>{filteredTodoList}</ul>
    </>
  );
};
export default FilterControl;
