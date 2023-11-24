import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'


export const PetComponent = ({ name, animalName, animalType, animalBreed, animalAge, city, animalImage }) => {
    const navigate = useNavigate();
    const selectPetBtn = () => {
        // alert("The")
        navigate("/confirmAdoption")

    }
    return (
        <>
            <div className="col-md-3 col-12" style={{ cursor: "pointer" }} onClick={selectPetBtn}>
                <div className="m-2 p-2">
                    <img src={`https://petbackendd.onrender.com/public/${animalImage}`} style={{ height: "300px" }} alt="animalImage" className='col-12' />
                    <div className='mt-2'>
                        <h5 className='text-danger'>
                            {animalName}
                        </h5>
                        <p className='mb-2'> <strong> Owner Name -  {name} </strong> </p>
                        <p className='mb-2'> <strong> {animalType} : (Age - {animalAge})</strong> </p>
                        <p className='mb-2'> <strong> Breed - {animalBreed} </strong> </p>
                        <p className='mb-2'> <strong> Location - {city} </strong> </p>
                    </div>
                </div>
            </div>
        </>
    )
}
