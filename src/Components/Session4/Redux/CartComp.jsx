import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './../Products/products.css'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'

const CartComp = () => {
    const items = useSelector(x => x.cart.items)
    // useEffect(() => {

    // })
    return (
        <>
            <Navbar />
            <div className='products'>
                {items.map((element) => (
                    <div className='product' key={element.id} >
                        <img src={element.thumbnail} alt='' />
                        <h2>{element.title}</h2>
                        <h3>${element.price}</h3>
                        <h5>{element.category}</h5>
                        <p>{element.description}</p>
                        <Link to={`${element.id}`}>Show More</Link>
                        {/* <button  onClick={()=>dispatch(cart.actions.addToCart(element))}>Add to cart</button> */}
                    </div>
                ))}
            </div>
        </>
    )
}

export default CartComp
