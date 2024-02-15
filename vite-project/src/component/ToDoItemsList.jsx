import { useContext } from "react";
import { toDoItemContext } from "../store/Todo-Item-store";
import ToDoItem from "./ToDoItem";
const ToDoItemsList = ({ todoItems, onDelteClick }) => {
  let toDoItemFromContext = useContext(toDoItemContext)
  console.log(toDoItemFromContext);

  return (
    <>
      {todoItems.map((item) => (
        <ToDoItem todoName={item.pName} key={item.pName} todoDate={item.pDate} onDelteClick1={onDelteClick}></ToDoItem>
      ))}
    </>
  );
};

export default ToDoItemsList;
