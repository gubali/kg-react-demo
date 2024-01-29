import { useState } from "react";

function AddToDoList({onNewItem}) {
  let [addProducttoList, setProducttoList] = useState();
  let [addDateToList, setDateToList] = useState();
  const handleNameChange = (event)=>{
    setProducttoList(event.target.value);
  }
  const handleDateChange = (event)=>{
    setDateToList(event.target.value);
  }
  return (
      <form className="row">
      
        <div className="col-lg-4 ">
          {/* <label htmlFor="staticEmail2" className="visually-hidden">
            Email
          </label> */}
          <input type="text" className="form-control" onChange={handleNameChange}
           id="productName" placeholder="Please type productname..."></input>
        </div>
        <div className="col-lg-4">
          {/* <label htmlFor="inputPassword2" className="visually-hidden">
            Password
          </label> */}
          <input
            type="date"
            className="form-control"
            id="purchasedDate"
            onChange={handleDateChange}
            
          ></input>
        </div>
        <div className="col-lg-2">
          <button type="submit" className="mt-2 btn btn-primary mb-3" onClick={()=>onNewItem(addProducttoList, addDateToList)}>
            Add to list
          </button>
        </div>
      </form>
    
  );
}

export default AddToDoList;
