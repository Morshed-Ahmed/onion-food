import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className="home">
            <div className=" mx-auto banner ">
                <h2 >Bast food waiting for your belly  </h2>
                <div className="input-group w-50 mx-auto ">
                    <input type="text" className="form-control radius" placeholder="Search Food" />
                    <button className="btn btn-danger b-radius" type="button" id="button-addon2">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;