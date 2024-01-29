import AddToDoList from "./component/AddToDoList";
import ToDoItemsList from "./component/ToDoItemsList";
//import ToDoItem from "./component/ToDoItem";

function Calculator() {
  const toDoItems = [
    { name: "Milk", dueDate: "12/12/2024" },
    { name: "Egg", dueDate: "10/12/2024" },
    { name: "Parle", dueDate: "12/2/2021" }
  ];
  return (
    <div className="container bg-color">
      <h3>Mini Calculater</h3>
      <AddToDoList></AddToDoList>
      <ToDoItemsList todoItems={toDoItems}></ToDoItemsList>
    </div>
  );
}

export default Calculator;
