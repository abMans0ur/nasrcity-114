import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './products.css'
import Navbar from '../Navbar';
const SingleProduct = () => {
    const{id} = useParams();
    const [product,setProduct]=useState({})
    useEffect(()=>{
        axios
        .get(`https://dummyjson.com/products/${id}`)
        .then(res=>setProduct(res.data))
        .catch(error=>console.log(error))
    })
    return (
        <>
        <Navbar/>
        <div className='products'>
        <div className='product' key={product.id} >
            <img src={product.thumbnail} alt='' />
            <h2>{product.title}</h2>
            <h3>${product.price}</h3>
            <h5>{product.category}</h5>
            <h5>{product.rating}</h5>
            <p>{product.description}</p>
        </div>
        </div>
        </>
    )
}

export default SingleProduct
