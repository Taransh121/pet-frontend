import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { Navbar1 } from '../Components/Navbar1';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleemailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://petbackendd.onrender.com/user/login', { email, password, });
            localStorage.setItem("token", response.data.token);
            navigate("/");
        } catch (error) {
            alert("Invalid creds");
        }
    };
    return (
        <>
            <Navbar1 />
            <h2 className='text-center mt-5'>Login to continue to NewProject</h2> <br />

            <form onSubmit={handleSubmit} className='container'  >
                <div className="row justify-content-center">
                    <div className="mb-3 col-md-8">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" onChange={handleemailChange} required value={email} name='email' id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-md-8">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={handlePasswordChange} required value={password} name='password' id="password" />
                    </div> <br />
                    <div className='text-center'>
                        <button type="submit" className="btn btn-outline-danger col-md-1" >Login</button> <br /> <br />
                        <Link className='text-danger' to="/register">Dont have an Account ? Register here</Link>
                    </div>
                </div>
            </form>

        </>
    )
}
