import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Navbar1 } from '../Components/Navbar1';


export const NewPet = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [animalName, setAnimalName] = useState("");
    const [animalType, setAnimalType] = useState("");
    const [animalBreed, setAnimalBreed] = useState("");
    const [animalAge, setAnimalAge] = useState("");
    const [city, setCity] = useState("");
    const [animalImage, setAnimalImage] = useState("");
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };
    const handleCityChange = (e) => {
        setCity(e.target.value);
    };
    const handleAnimalNameChange = (e) => {
        setAnimalName(e.target.value);
    };
    const handleAnimalTypeChange = (e) => {
        setAnimalType(e.target.value);
    };
    const handleAnimalBreedChange = (e) => {
        setAnimalBreed(e.target.value);
    };
    const handleAnimalAgeChange = (e) => {
        setAnimalAge(e.target.value);
    };
    const handleAnimalImageChange = (e) => {
        let x = e.target.value.slice(12);
        setAnimalImage(x);
    }
    const submitBtn = async (e) => {
        e.preventDefault();
        try {
            // eslint-disable-next-line
            const response = await axios.post('https://petbackendd.onrender.com/animal/addNewAnimal', { name, email, phone, animalAge, animalBreed, animalImage, animalName, animalType, city }, { headers: { "Content-Type": "multipart/form-data" } });
            navigate("/");
        }
        catch (error) {
            alert("Error occurred while filling out the form.");
        }
    }
    return (
        <>
            <Navbar1 />
            <div className=''>
                <h2 className='text-center mt-4'>Pet Donation Form </h2>
                <form onSubmit={submitBtn} className='shadow rounded p-5 m-5'>
                    <div className='row justify-content-center '>
                        <div className="mb-3 col-md-5">
                            <label htmlFor="name" className="form-label">Founder Name</label>
                            <input onChange={handleNameChange} value={name} required type="text" className="form-control" id="name" />
                        </div>
                        <div className="mb-3 col-md-5">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input onChange={handleEmailChange} value={email} required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>

                    </div>
                    <div className='row justify-content-center mt-4'>
                        <div className="mb-3 col-md-5">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input onChange={handlePhoneChange} value={phone} required type="text" className="form-control" id="phone" />
                        </div>
                        <div className="mb-3 col-md-5">
                            <label htmlFor="City" className="form-label">City</label>
                            <input onChange={handleCityChange} value={city} required type="text" className="form-control" id="City" />
                        </div>


                    </div>
                    <div className='row justify-content-center mt-4'>
                        <div className="mb-3 col-md-5">
                            <label htmlFor="animalName" className="form-label">Animal Name</label>
                            <input onChange={handleAnimalNameChange} value={animalName} required type="text" className="form-control" id="animalName" />
                        </div>
                        <div className="mb-1 col-md-5">
                            <label htmlFor="animalType" className="form-label">Animal Type</label>
                            <input onChange={handleAnimalTypeChange} value={animalType} required type="text" className="form-control" id="animalType" />
                        </div>

                    </div>
                    <div className='row justify-content-center mt-4'>
                        <div className="mb-1 col-md-5">
                            <label htmlFor="animalBreed" className="form-label">Animal Breed</label>
                            <input onChange={handleAnimalBreedChange} value={animalBreed} required type="text" className="form-control" id="animalBreed" />
                        </div>
                        <div className="mb-1 col-md-5">
                            <label htmlFor="animalAge" className="form-label">Animal Age</label>
                            <input onChange={handleAnimalAgeChange} value={animalAge} required type="text" className="form-control" id="animalAge" />
                        </div>
                    </div>
                    <div className="custom-file my-4" style={{ marginLeft: "8.5%" }}>
                        <input name='animalImage' onChange={handleAnimalImageChange} type="file" className="custom-file-input" id="animalImage" accept="image/*" />
                        <label className="custom-file-label" htmlFor="animalImage">Animal Image</label>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </div>
                </form>
            </div>
        </>

    )
}
