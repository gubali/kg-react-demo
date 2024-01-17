import Hello from "./Hello";
import RandomKey from "./Random";
import KgButton from "./kgButton";
import Calculator from "./Calc][-oo96876ee63433333333666666666226877later";
import CurrentTime from "./component/CurrentTime";
import FoodItems from "./component/FoodItems";
import Header from "./component/Header";
import MiniCalculator from "./component/MiniCalculator";
function App() {
  let foodItems = ["Dal", "Pulse", "Green Pea", "Salad"];
  const heading = "Welcome to React App";
  return (
    <>
      {/* <h2>Welcome first React App!</h2> */}
      <Header headingText={heading}></Header>
      <KgButton></KgButton>
      <Hello></Hello>
      <RandomKey></RandomKey>
      <Calculator></Calculator>
      <CurrentTime></CurrentTime>
      <FoodItems items={foodItems}></FoodItems>
      <MiniCalculator></MiniCalculator>
      </>
  );
}

// function Test(){
//   return <h2>Test, Welcome first React App!</h2>

// }

export default App;
