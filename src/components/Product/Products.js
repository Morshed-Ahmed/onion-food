import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = (props) => {
    const { id, discription, img, name, price } = (props.product)

    const url = `/produ/${id}`;
    return (

        <div className="col-md-6 col-lg-4 card">
            <div>
                <img className="w-50" src={img} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{discription}</p>
                <h3>{price}</h3>
                <Link to={url}>Click</Link>
                {/* <button onClick={url} className="btn btn-primary mt-3">Click Me</button> */}
            </div>
        </div>

    );
};

export default Products;