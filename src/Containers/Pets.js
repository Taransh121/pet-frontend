import React, { useEffect } from 'react'
import { getAllPets } from '../Actions/PetAction';
import { useDispatch, useSelector } from 'react-redux';
import { PetComponent } from './PetComponent';

export const Pets = () => {
    const pets = useSelector(state => state.pet.data.animals);
    console.log(pets);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPets())
        // eslint-disable-next-line
    }, [])
    const styles = {
        overflowY: "auto"
    }
    return (
        <>
            <div className='px-4'>
                <h1 className='text-danger mt-2 text-center'>"Welcome to Our Adoption Family: Meet the Pets"</h1>
                <div className='d-flex align-items-center' style={styles} >
                    {
                        pets &&
                        (pets).map(({ name, animalName, animalType, animalBreed, animalAge, city, animalImage }) => (
                            <PetComponent key={Math.random()} name={name} animalName={animalName} animalType={animalType} animalBreed={animalBreed} animalAge={animalAge} city={city} animalImage={animalImage} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
