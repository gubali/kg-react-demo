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
import { useState } from "react";    
import TodoError from "./component/TodoError";
import FormInputControls from './component/FormInput'
import ToDoItemContext from './store/Todo-Item-store'

/***857 vdo length */

function App() {
  // let foodItems = ["Dal", "Pulse", "Green Pea", "Salad"];
  const heading = "Welcome to React App";
  //use state
  // let textStateArr = useState('Welcome to food Cafe!');
  // let textDispaly = textStateArr[0];
  // let stateMethod = textStateArr[1];
  //new  type if declaring use state using destructure
  let [textDispaly1, stateMethod1] = useState('Destructure way: Welcome to food Cafe!');
  let [stateFoodList, setFoodList] = useState(["Paratha", "Dal", "Pulse"])
  let flag = true;
  const handleEvent = (event) => {
    if (event.key === 'Enter') {
      let newFodItems = event.target.value;
      setFoodList([...stateFoodList, newFodItems]); //spread operator
      newFodItems = null;
      //alert(newFodItems);
    }
    //alert(event.target.value);
    stateMethod1(event.target.value);
  }
  const initialToDoItems = [
    // { pName: "Milk12", pDate: "12/12/2024" },
    // { pName: "Egg12", pDate: "10/12/2024" },
    // { pName: "Parle", pDate: "12/2/2021" }
  ];
  const [addTodoitem, setAddTodoTem] = useState([]);
  const handleAddNewItems = (a, b) => {
    // const newCreatedArray = [...addTodoitem, {pName:a, pDate:b}];
    // setAddTodoTem(newCreatedArray);
    setAddTodoTem((currentValue) => [...currentValue, { pName: a, pDate: b }]); // called as functional update
  }

  const deleteItems = (itemName) => {
    let actionAns = confirm(`Do you wan to delte this item ${itemName}`);
    if (actionAns) {
      const newItemAfterDleted = addTodoitem.filter((item) => item.pName !== itemName);
      alert(`Item has been deleted!`)
      setAddTodoTem(newItemAfterDleted);
    }
    // const newItemAfterDleted =addTodoitem.filter((item)=> item.pName !==itemName);
    // setAddTodoTem(newItemAfterDleted);

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
          {/* <h2>Welcome first React App!</h2> */}
          <Header headingText={heading}></Header>
          <KgButton></KgButton>
          <Hello></Hello>

          <RandomKey></RandomKey>
          <h3>Add Purchased items to list...</h3>
          <AddToDoList />
          {/* {addTodoitem.length === 0  && <TodoError></TodoError>} */}
          <TodoError></TodoError>
          <ToDoItemsList />
          <CurrentTime></CurrentTime>
          <SearchItems handleDownEvent={handleEvent}></SearchItems>
          {textDispaly1}
          {flag === true ? <FoodItems items={stateFoodList}></FoodItems> : 'Resource not found!'}
          {/* <FoodItems items={foodItems}></FoodItems> */}
          <MiniCalculator></MiniCalculator>
          <hr />
          <FormInputControls></FormInputControls>
        </ToDoItemContext.Provider>
      </Container>
      <hr />
      {/* <Container>
  <p>Testing the container, loreipsum doller amet set</p>
</Container> */}
    </>
  );
}

// function Test(){
//   return <h2>Test, Welcome first React App!</h2>

// }

export default App;
