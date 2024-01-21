const SearchItems = ()=>{
    return <>
      <input type="text" className="form-control mb-2"
       placeholder="Serach items.." onChange={(e)=>alert((e.target.value))}></input>
    </>
}

export default SearchItems;