import React from 'react';
import useAuth from '../Hooks/useAuth';

const Register = () => {

    const user = useAuth();
    console.log(user)
    return (
        <div>
            <h2>this is register page</h2>
        </div>
    );
};

export default Register;