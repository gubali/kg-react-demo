const SearchItems = ({handleEvent})=>{
    // const handleEvent = (event)=>{
    //     alert((event.target.value))
    // }
    return <>
      <input type="text" className="form-control mb-2"
       placeholder="Serach items.." onChange={handleEvent}></input>
    </>
}

export default SearchItems;