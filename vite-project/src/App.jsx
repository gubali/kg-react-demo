import Hello from "./Hello";
import RandomKey from "./Random";
import KgButton from "./KgButton";
import AddToDoList from "./component/AddToDoList";
import ToDoItemsList from "./component/ToDoItemsList";
import CurrentTime from "./component/CurrentTime";
import FoodItems from "./component/FoodItems";
import Header from "./component/Header";
import MiniCalculator from "./component/MiniCalculator";
import Container from "./component/Container";
import SearchItems from './component/SearchItems'
import { useState, useReducer } from "react";
import TodoError from "./component/TodoError";
import FormInputControls from './component/FormInput'
import ToDoItemContext from './store/Todo-Item-store'

/***857 vdo length */
const todoItemReducer = (acurrentItem, action) => {
  let newReducerNewItem = acurrentItem;
  if (action.type === 'NEW_ITEM') {
    newReducerNewItem = [
      ...acurrentItem, { pName: action.payload.itemName, pDate: action.payload.itemDueDate }
    ];
  }
  else if (action.type === 'DELETE_ITEM') {
    let actionAns = confirm(`Do you wan to delte this item ${action.payload.itemName}`);
    if (actionAns) {
      newReducerNewItem = acurrentItem.filter((item) => item.pName !== action.payload.itemName);
      alert(`Item has been deleted!`)
      return newReducerNewItem;
    }
  };
  return newReducerNewItem
}
/// Incriment and decriment with usereducer
const initalValue = 0;
const reducer = (state, action) => {
  console.log(state);
  console.log(action);
  if (action.type === 'Incri') {
    return state + 1;
  }
  if (action.type === 'Decri') {
    return state - 1;
  }
  if (action.type = 'reset') {
    return 0;
  }
  return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initalValue);
  const [addTodoitem, dispatchReducerItem] = useReducer(todoItemReducer, []);
  const heading = "Welcome to React App";
  //use state
  //new  type if declaring use state using destructure
  // let [textDispaly1, stateMethod1] = useState('Destructure way: Welcome to food Cafe!');
   let [stateFoodList, setFoodList] = useState(["Paratha", "Dal", "Pulse"]);
  let flag = true;
  const handleEvent = (event) => {
    if (event.key === 'Enter') {
      let newFodItems = event.target.value;
      setFoodList([...stateFoodList, newFodItems]); //spread operator
      newFodItems = null;
    }
    stateMethod1(event.target.value);
  }
  const handleAddNewItems = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate
      }
    }
    dispatchReducerItem(newItemAction);
  }

  const deleteItems = (itemName) => {
    const delteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: itemName
      }
    };
    dispatchReducerItem(delteItemAction);
  }
  const defaultToDoContextItem = [
    { pName: 'Buy Biscuit', pDate: 'Today' }
  ]
  return (
    <>
      <Container>
        <ToDoItemContext.Provider value={{
          addTodoitem,
          handleAddNewItems,
          deleteItems
        }}>
          <Header headingText={heading}></Header>
          <KgButton></KgButton>
          <Hello></Hello>
          <RandomKey></RandomKey>
          <h3>Add Purchased items to list...</h3>
          <AddToDoList />
          <TodoError></TodoError>
          <ToDoItemsList />
          <CurrentTime></CurrentTime>
          <SearchItems handleDownEvent={handleEvent}></SearchItems>
          {/* {textDispaly1} */}
          {flag === true ? <FoodItems items={stateFoodList}></FoodItems> : 'Resource not found!'}
          <MiniCalculator></MiniCalculator>
          <hr />
          <FormInputControls></FormInputControls>
        </ToDoItemContext.Provider>
      </Container>
      <hr />
      <h3>=============================Reducer with example=========================</h3>
      <h2>{state}</h2>
      <button onClick={() => dispatch({ type: 'Incri' })} className="btn btn-primary">Incriment</button>
      <button onClick={() => dispatch({ type: 'Decri' })} className="btn btn-success">Decriment</button>
      <button onClick={() => dispatch({ type: 'reset' })} className="btn btn-success">Reset</button>
    </>
  );
}

export default App;
