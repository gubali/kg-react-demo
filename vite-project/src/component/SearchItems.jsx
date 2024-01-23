const SearchItems = ({handleDownEvent})=>{
    // const handleEvent = (event)=>{
    //     alert((event.target.value))
    // }
    return <>
      <input type="text" className="form-control mb-2"
       placeholder="Serach items.." onKeyDown={handleDownEvent}></input>
    </>
}

export default SearchItems;