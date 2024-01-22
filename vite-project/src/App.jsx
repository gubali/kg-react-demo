import Hello from "./Hello";
import RandomKey from "./Random";
import KgButton from "./KgButton";
import Calculator from "./Calculater";
import CurrentTime from "./component/CurrentTime";
import FoodItems from "./component/FoodItems";
import Header from "./component/Header";
import MiniCalculator from "./component/MiniCalculator";
import Container from "./component/Container";
import SearchItems from './component/SearchItems'
import { useState } from "react";
function App() {
  let foodItems = ["Dal", "Pulse", "Green Pea", "Salad"];
  const heading = "Welcome to React App";
  let textStateArr = useState('Welcome to food Cafe!');
  let textDispaly = textStateArr[0];
  let stateMethod = textStateArr[1];
  let flag = true;
  const handleEvent = (event)=>{
    //alert(event.target.value);
    stateMethod(event.target.value);
}
  return (
    <>
    <Container>
      {/* <h2>Welcome first React App!</h2> */}
      <Header headingText={heading}></Header>
      <KgButton></KgButton>
      <Hello></Hello>
      <RandomKey></RandomKey>
      <Calculator></Calculator>
      <CurrentTime></CurrentTime>
      <SearchItems handleEvent={handleEvent}></SearchItems>
      {textStateArr}
      {flag === false ?  <FoodItems items={foodItems}></FoodItems> :  'Resource not found!'}
      {/* <FoodItems items={foodItems}></FoodItems> */}
      <MiniCalculator></MiniCalculator>
      <hr />
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
