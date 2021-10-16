import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className="  footer">
            <div className="row container">
                <div className="col-md-6">
                    <div className="footer-logo">
                        <img className="img-fluid w-25 mt-3 " src={'https://i.ibb.co/RvPYmpy/logo2.png'} alt="" />
                    </div>
                </div>
                <div className="col-md-3 ">
                    <ul >
                        <li><Link className="footer-item" to="/">About online food</Link></li>
                        <li><Link className="footer-item" to="/">Read our blog</Link></li>
                        <li><Link className="footer-item" to="/signup">Sign up to deliver</Link></li>
                        <li><Link className="footer-item" to="/">Add your resturent</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li><Link className="footer-item" to="/">Get help</Link></li>
                        <li><Link className="footer-item" to="/">Read FAQs</Link></li>
                        <li><Link className="footer-item" to="/">View all cities</Link></li>
                        <li><Link className="footer-item" to="/">Resturents near me</Link></li>
                    </ul>
                </div>
                <p className="mt-4 text-start"><small >Copyright © 2021 RED ONION
                </small></p>
            </div>

        </div>
    );
};

export default Footer;