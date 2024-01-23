import { useState } from "react";
import Items from "./Items";
const FoodItems = ({items}) => {
  // let foodItems = ["Dal", "Pulse", "Green Pea", "Salad"];
  let [activeItems, setActiveitems]= useState([]);
  let onBuyButton = (item, event)=>{
 let newList = [...activeItems,item];
 setActiveitems(newList);
  }
  // const getFoodItems = (items)=>{
  //   alert("Clicked: " + items)
  //  }
  return (
    <ul className="list-group col-lg-6">
      {items.map((item) => (
       <Items foodItem={item} key={item} bool={activeItems.includes(item)} 
       handleBuyEvent={(event)=> onBuyButton(item,event)}></Items>
      ))}
    </ul>
  );
};

export default FoodItems;
