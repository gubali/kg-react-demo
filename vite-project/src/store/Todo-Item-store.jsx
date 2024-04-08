import { createContext } from "react";
export const ToDoItemContext = createContext({
    addTodoitem: [],
    handleAddNewItems: () => { },
    deleteItems: () => { }
});

export default ToDoItemContext;