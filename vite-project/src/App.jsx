import Hello from "./Hello";
import RandomKey from "./Random";
import KgButton from "./KgButton";
import Calculator from "./Calculater";
import CurrentTime from "./component/CurrentTime";
import FoodItems from "./component/FoodItems";
import Header from "./component/Header";
import MiniCalculator from "./component/MiniCalculator";
import Container from "./component/Container";
function App() {
  let foodItems = ["Dal", "Pulse", "Green Pea", "Salad"];
  const heading = "Welcome to React App";
  return (
    <Container>
      {/* <h2>Welcome first React App!</h2> */}
      <Header headingText={heading}></Header>
      <KgButton></KgButton>
      <Hello></Hello>
      <RandomKey></RandomKey>
      <Calculator></Calculator>
      <CurrentTime></CurrentTime>
      <FoodItems items={foodItems}></FoodItems>
      <MiniCalculator></MiniCalculator>
      <hr />
</Container>
      
  );
}

// function Test(){
//   return <h2>Test, Welcome first React App!</h2>

// }

export default App;
