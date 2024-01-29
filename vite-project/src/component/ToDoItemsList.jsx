import ToDoItem from "./ToDoItem";
const ToDoItemsList = ({ todoItems }) => {
  return (
    <>
      {todoItems.map((item) => (
        <ToDoItem todoName={item.pName} key={item.pName} todoDate={item.pDate}></ToDoItem>
      ))}
    </>
  );
};

export default ToDoItemsList;
