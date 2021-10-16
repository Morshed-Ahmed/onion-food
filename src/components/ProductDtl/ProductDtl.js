import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDtl = () => {
    const { productsId } = useParams();
    const [detals, setDetals] = useState([])

    /* useEffect(() => {
        fetch(`/public/menu.json`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [productsId])
 */



    return (
        <div className="details">
            <h2>this is product detauls page ::{productsId}</h2>
            <h2>this is product detauls page</h2>
            <h2>this is product detauls page</h2>
        </div>
    );
};

export default ProductDtl;