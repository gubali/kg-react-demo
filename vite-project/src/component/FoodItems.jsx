import Items from "./Items";
const FoodItems = ({items}) => {
  // let foodItems = ["Dal", "Pulse", "Green Pea", "Salad"];
  const getFoodItems = (items)=>{
    alert("Clicked: " + items)
   }
  return (
    <ul className="list-group col-lg-6">
      {items.map((item) => (
       <Items foodItem={item} key={item} handleBuyEvent={()=> getFoodItems(item)}></Items>
      ))}
    </ul>
  );
};

export default FoodItems;
