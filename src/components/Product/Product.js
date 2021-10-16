import React, { useEffect, useState } from 'react';
import Products from './Products';
import './Product.css'
const Product = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    /*  console.log(products) */
    return (
        <>

            <div className="menu-tabs container mt-5">

                <div className="food-tabs">
                    <div className="tab-menu ">
                        <button id="breakfast-btn" >Breakfast</button>
                        <button id="lunch-btn">Lunch</button>
                        <button id="dinner-btn" >Dinner</button>
                    </div>

                    <div className="row mt-5 ">
                        {
                            products.map(product => <Products

                                product={product}
                            ></Products>)
                        }


                    </div>
                    <button className="btn btn-secondary mt-4">Checkout Your Food </button>
                </div>
            </div>
        </>
    );
};

export default Product;