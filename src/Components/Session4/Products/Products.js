import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import './products.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cart } from '../Redux/cart'
const Products = () => {
    const [products, setProducts] = useState([])
    const dispatch=useDispatch();
    useEffect(() => {
        axios
            .get('https://dummyjson.com/products')
            .then(res => setProducts(res.data.products))
            .catch(err => console.log(err))
    })
    return (
        <>
            <Navbar />
            <div className='products'>
                {products.map((element) => (
                    <div className='product' key={element.id} >
                        <img src={element.thumbnail} alt='' />
                        <h2>{element.title}</h2>
                        <h3>${element.price}</h3>
                        <h5>{element.category}</h5>
                        <p>{element.description}</p>
                        <Link to={`${element.id}`}>Show More</Link>
                        <button  onClick={()=>dispatch(cart.actions.addToCart(element))}>Add to cart</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products
