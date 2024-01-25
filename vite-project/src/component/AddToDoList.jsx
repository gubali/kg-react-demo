function AddToDoList() {
  return (
      <form className="row">
      
        <div className="col-lg-4 ">
          {/* <label htmlFor="staticEmail2" className="visually-hidden">
            Email
          </label> */}
          <input type="text" className="form-control"
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
            
          ></input>
        </div>
        <div className="col-lg-2">
          <button type="submit" className="mt-2 btn btn-primary mb-3">
            Add to list
          </button>
        </div>
      </form>
    
  );
}

export default AddToDoList;
