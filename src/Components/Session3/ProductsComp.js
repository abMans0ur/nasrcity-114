import React, { useEffect, useState } from "react";
import productStyle from './product.module.css'
import axios from "axios";

const ProductsComp = () => {
    function mapFn(value) {
        return value * 2;
    }

    function objectMap(obj, fn) {
        return Object.fromEntries(
            Object.entries(obj).map(([key, value]) => [key, fn(value)])
        );
    }

    const [products, setProducts] = useState([])
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    })
    return (
        <div className={productStyle.products}>
            {products?.map((el) => (
                <div className={productStyle.product} key={el.id}>
                    {/* <img src={el.thumbnail} alt="" /> */}
                    <h1>{el.name}</h1>
                    <h3>{el.email}</h3>
                    <h3>{el.phone}</h3>

                    <p>{objectMap(el.address,mapFn())}</p>
                </div>
            ))}
        </div>
    )
}
export default ProductsComp