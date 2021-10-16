import React from 'react';
import './Login.css'
import useFirebase from '../Hooks/useFirebase';
import { Form } from 'react-bootstrap';
import logo from '../../img/logo2.png'

const Login = () => {
    const { signInWithGoogle, user } = useFirebase();

    return (
        <div className=" login ">
            <img className="img-fluid login-logo py-5 " src={logo} alt="" />
            <div className="d-flex justify-content-center
        align-items-center ">

                {/* <input className="w-100" type="text" /> */}
                <div>
                    <Form.Control className="input" type="name" placeholder="Your Name" />
                    <br />
                    <Form.Control className="input" type="email" placeholder="Enter email" />
                    <br />
                    <Form.Control className="input" type="password" placeholder="Password" />
                    <br />
                    <Form.Control className="input" type="password" placeholder="Confirm Password" />
                    <br />

                    <button onClick={signInWithGoogle} className="btn btn-danger w-100 ">Sign In </button>
                </div>
            </div>
        </div>
    );
};

export default Login;