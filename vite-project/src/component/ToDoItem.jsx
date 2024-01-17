function ToDoItem({todoName, todoDate}) {
  return <>
    <div className="row mb-1">
      <div className="col-lg-6">{todoName}</div>
      <div className="col-lg-4">{todoDate}</div>
      <div className="col-lg-2">
        <button type="button" className="btn btn-danger">Delete</button>
      </div>
    </div>
  </>
}

export default ToDoItem;
