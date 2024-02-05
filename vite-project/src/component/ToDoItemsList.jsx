import ToDoItem from "./ToDoItem";
const ToDoItemsList = ({ todoItems, onDelteClick }) => {
  return (
    <>
      {todoItems.map((item) => (
        <ToDoItem todoName={item.pName} key={item.pName} todoDate={item.pDate} onDelteClick1={onDelteClick}></ToDoItem>
      ))}
    </>
  );
};

export default ToDoItemsList;
