import Items from "./Items";
const FoodItems = ({items}) => {
  // let foodItems = ["Dal", "Pulse", "Green Pea", "Salad"];
  return (
    <ul className="list-group col-lg-6">
      {items.map((item) => (
       <Items foodItem={item} key={item} handleBuyEvent={()=> alert("Event fire from Child")}></Items>
      ))}
    </ul>
  );
};

export default FoodItems;
