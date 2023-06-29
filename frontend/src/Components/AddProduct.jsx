import axios from 'axios';
import React, {useState} from 'react'

export default function AddProduct(){
    const [product, setProduct] = useState({
        name : "",
        brand : "",
        quantity : "",
        price : ""
    })

    function handleProductNameChange(e){
        let ele = e.target.name;
        setProduct({...product, [ele]:e.target.value });
    }

    function handleBrandChange(e){
        let ele = e.target.name;
        setProduct({...product, [ele]:e.target.value });
    }

    function handleQuantityChange(e){
        let ele = e.target.name;
        setProduct({...product, [ele]:e.target.value });
    }

    function handlePriceChange(e){
        let ele = e.target.name;
        setProduct({...product, [ele]:e.target.value });
    }

    const addTask=(newTask)=>{
        console.log(newTask)
       return axios.post('http://localhost:3001/products',newTask)
   }

    const saveBook = (newTask) => {
        addTask(newTask).then(console.log("sucess"))
        .catch("error")
    }

    function handleFormSubmit(){
        saveBook(product);
        setProduct({
            name : "",
            brand : "",
            quantity : "",
            price : ""
        })
    }

    return (
        <form>
            {console.log(product)}
            <input type="text" onChange={handleProductNameChange} name="name" value={product.name} placeholder="product name"></input>
            <br />
            <input type="text" onChange={handleBrandChange} name="brand" value={product.brand} placeholder="brand name"></input>
            <br />
            <input type="text" onChange={handleQuantityChange} name="quantity" value={product.quantity} placeholder="quantity"></input>
            <br />
            <input type="text" onChange={handlePriceChange} name="price" value={product.price} placeholder="price"></input>
            <br />
            <button onClick={handleFormSubmit}>Add</button>
        </form>
    )
}