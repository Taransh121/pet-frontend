import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar1 } from '../Components/Navbar1';
import axios from 'axios';
// import { DropzoneArea } from "react-dropzone";


export const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }
    const signupbtn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://petbackendd.onrender.com/user/register', { firstName, lastName, email, password, phone });
            localStorage.setItem("token", response.data.token);
            navigate("/");

        } catch (error) {
            alert("Error occurred while creating your account, sorry! You may have to restart your server.");
        }
    }
    return (
        <>
            <Navbar1 />
            <h2 className='text-center mt-5' >Create an account to use NewProject</h2>
            <form onSubmit={signupbtn} className='m-5' >
                <div className="row mb-3">
                    <div className="mb-3 col-md-6 col-sm-12">
                        <label htmlFor="firstName" className="form-label">Firstname</label>
                        <input type="text" className="form-control" onChange={handleFirstNameChange} value={firstName} required minLength={3} maxLength={20} name='firstName' id="firstName" aria-describedby="firstNameHelp" />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="lastName" className="form-label">Lastname</label>
                        <input type="text" className="form-control" onChange={handleLastNameChange} value={lastName} required minLength={3} maxLength={20} name='lastName' id="lastName" aria-describedby="lastNameHelp" />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="mb-3 col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" onChange={handleEmailChange} minLength={5} required value={email} name='email' id="email" />
                    </div>
                    <div className="mb-3 col-md-6">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={handlePasswordChange} minLength={5} required value={password} name='password' id="password" />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="mb-2 col-md-6">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="text" className="form-control" onChange={handlePhoneChange} minLength={5} required value={phone} name='phone' id="phone" />
                    </div>
                </div> <br />

                <button type="submit" className="btn btn-outline-danger mr-5 col-md-1 mb-2" >Signup</button> <br />
                <Link to="/login" className='mx-1 text-danger'>Already have an Account ? Login Now</Link>
            </form >

        </>
    )
}
