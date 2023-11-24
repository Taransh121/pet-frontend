import React from 'react';
import aboutImg from "../images/about1.jpeg";


export const About = () => {
    return (
        <div id="about" className='d-flex gap-0 md:mt-5 mt-0 row m-md-5 m-sm-0'>
            <div className='col-4'>
                <img src={aboutImg} className='d-none d-sm-block' alt="about" width="100%" />
            </div>
            <div className='font-weight-bold p-5 col-12 col-md-8' style={{ fontSize: "14px" }}>
                <h3 className='text-danger'>Welcome to PetHarbor- Where Love Finds a Home!</h3>
                {/* <h2 >Make Yourself Stronger <br /> Than Your Excuses. </h2> <br /> */}
                <p>At PetHarbor, we believe that every furry friend deserves a loving and forever home. Our journey began with a simple yet profound mission: to connect animals in need with compassionate individuals and families who are ready to open their hearts and homes.</p>
                <div>
                    <div className='d-flex gap-0 gap-md-5 mt-5 row'>
                        <div className='col-6 col-md-5'>
                            <h5><strong>Ethical Practices</strong></h5>
                            <p className=''>Here we adhere to ethical adoption practices and work closely with reputable shelters and rescue organizations..</p>
                        </div>
                        <div className='col-6 col-md-5'>
                            <h5><strong>Education and Support</strong></h5>
                            <p> We provide resources, guidance, and support to adopters to ensure a smooth transition for both the pet and their new family.</p>
                        </div>

                    </div>
                    <div className='d-flex gap-0 gap-md-5 mt-4 row '>
                        <div className='col-6 col-md-5'>
                            <h5><strong>Personalized Matching</strong></h5>
                            <p>We consider the lifestyle, preferences, and needs of both the adopter and the animal.</p>
                        </div>
                        <div className='col-6 col-md-5'>
                            <h5><strong>Transparency</strong></h5>
                            <p>Trust is the foundation of our organization. We believe in transparency, and our adoption process is clear and straightforward.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
