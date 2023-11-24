import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar1 } from '../Components/Navbar1';

export const ConfirmAdoption = () => {
    return (
        <>
            <Navbar1 />
            <section>
                <h1 className='text-danger text-center mt-3'>Reservation Confirmation</h1>
                <div className='m-5'>
                    <p>
                        Thank you for choosing to adopt a furry friend from our Pet Adoption Center!
                    </p>
                    <p>
                        We are excited to inform you that the pet you selected has been reserved for you.
                        To complete the adoption process and take your new companion home, we kindly request
                        that you visit our center within the next week.
                    </p>
                    <p>
                        Our staff will be happy to assist you with the final adoption paperwork and provide
                        you with more information about your new pet's care.
                    </p>
                    <p>
                        If you have any questions or need further assistance, feel free to contact us.
                    </p>
                    <Link className='text-danger' to="/"> Go back to home page.</Link>
                </div>
            </section>
        </>
    )
}
