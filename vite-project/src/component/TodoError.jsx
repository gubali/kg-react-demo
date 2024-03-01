import { useContext } from "react"
import {ToDoItemContext} from '../store/Todo-Item-store'
const  TodoError = ()=>{
  // const addTodoItemContext = useContext(ToDoItemContext)
  let {addTodoitem} = useContext(ToDoItemContext); // API context
  // let toDoItems = toDoItemObj.addTodoitem;
  // console.log(toDoItems)
  return (
    addTodoitem.length === 0 && <h4 className="text-danger">Enjoy your Time!!!</h4>
  )
}
export default TodoError
