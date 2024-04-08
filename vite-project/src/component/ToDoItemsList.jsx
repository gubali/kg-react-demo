import { useContext } from "react";
import { ToDoItemContext } from "../store/Todo-Item-store";
import ToDoItem from "./ToDoItem";
const ToDoItemsList = () => {
  let {addTodoitem} = useContext(ToDoItemContext); // API context
  //let toDoItems = toDoItemObj.addTodoitem;
  //console.log(toDoItems)

  return (
    <>
      {addTodoitem.map((item) => (  // chnage to api context format
        <ToDoItem todoName={item.pName} key={item.pName} todoDate={item.pDate}></ToDoItem>
      ))}
    </>
  );
};

export default ToDoItemsList;
