import React from 'react';
import Button from '../components/Button';
import '../styles/Home.css'; 
import home from '../assets/home-img.png'
import AboutUs from './About';
import Stats from './Stats';
import Services from './Services';
import Works from './Works';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
    <div className="home-container">
      {/* Left side: Illustration Image */}
      <div className="home-image">
        <img src={home} alt="Learning Journey Illustration" />
      </div>

      {/* Right side: Content */}
      <div className="home-content">
        <h1>Explore our Learning Journey!</h1>
        <p>Are you finding difficulty in where & when to start?</p>
        <Button label="Book a Meeting" />
      </div>
    </div>
    <AboutUs />
    <Stats />
    <Services />
    <Works />
    <Footer />
    </>
  );
};

export default Home;
