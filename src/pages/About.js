import React from 'react';
import '../styles/About.css'; 
import about from '../assets/About.png';

const AboutUs = () => {
    return (
        <div className="about-container">
            <div className="about-image">
                <img src={about} alt="About Us" />
            </div>
            <div className="about-content">
                <h2>About Us</h2>
                <p>
                We offer you complete end to end guidence to reach your professional goals. We provide you expert mentorship sessions on flexible timings. Get real time exposure with the help of our organization to success in your career.
                </p>
                <button>Learn More</button>
            </div>
        </div>
    );
};

export default AboutUs;
