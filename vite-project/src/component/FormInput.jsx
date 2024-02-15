import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
const FormInputControls = ()=>{
    let forHeader = "Form Example"
    let [productName, setProductDetails] = useState("Shoes");
    let [productDetails, setproductDetails] = useState("Nike shoes!");
    const AddProductName = (event)=>{
        setProductDetails(event.target.value)
    }
   const productDescription = (event)=>{
    setproductDetails(event.target.value);
   }
return <>
<h1> {forHeader ? forHeader : 'World'}</h1>
  <form className="row" action="">
      <div className="col-lg-4 ">
        <input type="text" className="form-control" value={productName} onChange={AddProductName}
         id="productName" placeholder="Please type productname..."></input>
      </div>
      <div className="col-lg-4">
        <input
          type="text"
          className="form-control"
          value={productDetails}
          onChange={productDescription}
          id="purchaseddes"
        ></input>
        {productName}
      </div>
      <div className="col-lg-2">
        <button type="button" className="mt-2 btn btn-success mb-3">
        <IoMdAdd />
        </button>
      </div>
    </form>
    <table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Shoes</td>
      <td><em>ssasa</em></td>
    </tr>
  </tbody>
</table>
</>
}

export default FormInputControls;