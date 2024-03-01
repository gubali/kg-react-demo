import { useContext } from "react";
import { ToDoItemContext } from "../store/Todo-Item-store";
import ToDoItem from "./ToDoItem";
const ToDoItemsList = ({onDelteClick }) => {
  let {addTodoitem} = useContext(ToDoItemContext); // API context
  //let toDoItems = toDoItemObj.addTodoitem;
  //console.log(toDoItems)

  return (
    <>
      {addTodoitem.map((item) => (  // chnage to api context format
        <ToDoItem todoName={item.pName} key={item.pName} todoDate={item.pDate} onDelteClick1={onDelteClick}></ToDoItem>
      ))}
    </>
  );
};

export default ToDoItemsList;
