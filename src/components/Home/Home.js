import React from 'react';
import Product from '../Product/Product';
import Service from '../Service/Service';
import Banner from './Banner/Banner';
import './Home.css'

const Home = () => {
    return (
        <div >

            <Banner></Banner>
            <Product></Product>
            <Service></Service>


        </div>
    );
};

export default Home;