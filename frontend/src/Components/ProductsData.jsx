import React, {useEffect, useState} from "react"
import '../App.css'
import axios from "axios";
export default function ProductsData(props){
    const url = 'http://localhost:3001/products'
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`${url}`)
        .then(res => setData(res.data))
        .catch(err=>console.log(err))
    })
    const deleteProduct = (id, e) =>{
        axios.delete(`${url}/${id}`)
    }
    const productData = data.map(ele => {
        return(
                <tr>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.brand}</td>
                    <td>{ele.quantity}</td>
                    <td>{ele.price}</td>
                    <td><button onClick={e => deleteProduct(ele.id, e)}>delete</button></td>
                </tr> 
        )
    })
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>ProductNameB</th>
                    <th>Brand</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>   
            </thead>
            <tbody>
                {productData}
            </tbody>
        </table>
    )
}