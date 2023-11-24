import React, { useRef } from 'react';
import { Navbar1 } from '../Components/Navbar1';
import bg2 from "../images/bg2.jpg";
import { Pets } from './Pets';
import { useNavigate } from 'react-router-dom';
import { About } from './About';

export const Homepage = () => {
    const styles = {
        background: `url(${bg2})`,
        backgroundSize: 'cover',
        opacity: '1',
        color: "white",
        fontWeight: "500",
        fontSize: "20px",
        padding: "19% 5%",
    };
    const navigate = useNavigate();
    const sectionRef = useRef(null);

    const adoptNowBtn = () => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    const donateBtn = () => {
        navigate("/donatePet")
    }
    return (
        <>
            <Navbar1 />
            <div style={styles} id='home'  >
                <h2 style={{ width: "50%" }}>Open your heart and home to a friend for life. </h2>
                <p className='text-danger'>Do you think about adopting a pet ? </p>
                <div className=' text-dark'>
                    <button className='btn btn-outline-light' onClick={adoptNowBtn}> <strong>Find out now</strong> </button>
                    <button className='btn btn-outline-danger mx-2 ' onClick={donateBtn}> <strong>Donate</strong> </button>
                </div>
                <div className=' text-dark'>
                </div>
            </div>
            <About />
            <div ref={sectionRef}>
                <Pets />
            </div>
        </>
    )
}
