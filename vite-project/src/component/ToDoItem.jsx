import { MdDelete } from "react-icons/md";
function ToDoItem({ todoName, todoDate, onDelteClick1 }) {
  const deleteRowItem = () => {
    let answer = prompt("Do you want to delete item");
    if (answer.toLowerCase === 'yes') {
      alert('Item deleted')
    }
    else {
      alert("Thanks")
    }

  }
  return <>
    <div className="row mb-1">
      <div className="col-lg-6">{todoName}</div>
      <div className="col-lg-4">{todoDate}</div>
      <div className="col-lg-2">
        <button type="button" className="btn btn-danger" onClick={() => onDelteClick1(todoName)}><MdDelete />
        </button>
      </div>
    </div>
  </>
}

export default ToDoItem;
