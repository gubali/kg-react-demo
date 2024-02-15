import { useState, useRef } from "react";
import { IoMdAdd } from "react-icons/io";
function AddToDoList({onNewItem}) {
  let [addProducttoList, setProducttoList] = useState("");
  let [addDateToList, setDateToList] = useState("");
  //use ref example with add to to do list
  const noOfClick = useRef(0);
  const todoProductName = useRef();
  const todoProductPurchasedDate = useRef();

  //end
  const handleNameChange = (event)=>{
    setProducttoList(event.target.value);
    noOfClick.current+=1;
  }
  const handleDateChange = (event)=>{
    setDateToList(event.target.value);
    console.log(`No of click ${noOfClick.current}`)
  }
 /** for normal code to add on click usinf usestate */
  // const handleAddButtonEvent = (event)=>{ 
  //   console.log(event);
  //   event.preventDefault();
  //   onNewItem(addProducttoList, addDateToList);
  //   setProducttoList("");
  //   setDateToList("");
  // }

  const handleAddButtonEvent = (event)=>{
    event.preventDefault();
    const addProducttoList = todoProductName.current.value;
    const addDateToList = todoProductPurchasedDate.current.value;
    console.log(`${addProducttoList} - ${addDateToList}`)
    onNewItem(addProducttoList, addDateToList);
    todoProductName.current.value = '';
    todoProductPurchasedDate.current.value='';
  }
  return (
    /****below code for add item list w/o useRef */
      // <form className="row" action="" onSubmit={handleAddButtonEvent}>
      //   <div className="col-lg-4 ">
      //     <input type="text" className="form-control" onChange={handleNameChange}
      //      id="productName" value={addProducttoList} placeholder="Please type productname..."></input>
      //   </div>
      //   <div className="col-lg-4">
      //     <input
      //       type="date"
      //       className="form-control"
      //       id="purchasedDate"
      //       onChange={handleDateChange}
      //       value={addDateToList}
      //     ></input>
      //   </div>
      //   <div className="col-lg-2">
      //     <button  className="mt-2 btn btn-primary mb-3">
      //     <IoMdAdd />
      //     </button>
      //   </div>
      // </form>
      //with UseRef Example
      <form className="row" action="" onSubmit={handleAddButtonEvent}>
        <div className="col-lg-4 ">
          <input type="text" className="form-control" ref={todoProductName}
           id="productName" placeholder="Please type productname..."></input>
        </div>
        <div className="col-lg-4">
          <input
            type="date"
            className="form-control"
            id="purchasedDate"
            ref={todoProductPurchasedDate}
          ></input>
        </div>
        <div className="col-lg-2">
          <button  className="mt-2 btn btn-primary mb-3">
          <IoMdAdd />
          </button>
        </div>
      </form>
  );
}

export default AddToDoList;
