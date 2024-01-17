import ToDoItem from "./ToDoItem";
const ToDoItemsList = ({ todoItems }) => {
  return (
    <>
      {todoItems.map((item) => (
        <ToDoItem todoName={item.name}key={item.name} todoDate={item.dueDate}></ToDoItem>
      ))}
    </>
  );
};

export default ToDoItemsList;
