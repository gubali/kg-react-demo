function AddToDoList() {
  return (
      <form className="row">
        <div className="col-2"></div>
        <div className="col-4">
          <label htmlFor="staticEmail2" className="visually-hidden">
            Email
          </label>
          <input type="text" className="form-control" id="staticEmail2"></input>
        </div>
        <div className="col-4">
          <label htmlFor="inputPassword2" className="visually-hidden">
            Password
          </label>
          <input
            type="date"
            className="form-control"
            id="inputPassword2"
            placeholder="Password"
          ></input>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-primary mb-3">
            Add
          </button>
        </div>
      </form>
    
  );
}

export default AddToDoList;
