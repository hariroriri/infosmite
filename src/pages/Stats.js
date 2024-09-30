import React from 'react';
import '../styles/Stats.css'; // Optional: separate CSS file for Stats component

const Stats = () => {
  return (
    <div className="container">
      <div className="row stats-section text-center mt-5">
        <div className="col-md-4">
          <img 
            src="https://media.istockphoto.com/id/1489671297/photo/portrait-satisfied-businessman-showing-to-camera-thumbs-up.jpg?s=2048x2048&w=is&k=20&c=8UZqWRRq9gheVykYX1OpOEGOzDCQgsLai5cZrKEHvPI=" 
            alt="Satisfaction" 
            className="stat-icon" 
          />
          <h3>100% Satisfaction</h3>
        </div>
        <div className="col-md-4">
          <img 
            src="https://media.istockphoto.com/id/1366226145/photo/woman-sitting-at-coffee-shop-writing-notes-on-notebook-while-using-laptop.jpg?s=1024x1024&w=is&k=20&c=BeRom9W9thDYHjk-0hy-oApPyLhd2fP1pz1uB1E0o-8=" 
            alt="Learners" 
            className="stat-icon" 
          />
          <h3>1000+ Learners</h3>
        </div>
        <div className="col-md-4">
          <img 
            src="https://media.istockphoto.com/id/1369746033/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=1024x1024&w=is&k=20&c=tlTA4SvOrjz9psmv6-0RtA8sC9pmkZdm0KkxK6o8qJo=" 
            alt="Experts" 
            className="stat-icon" 
          />
          <h3>30+ Experts</h3>
        </div>
      </div>
    </div>
  );
};

export default Stats;
