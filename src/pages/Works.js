import React from 'react';
import '../styles/Works.css'; // Import your CSS styles
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';

const Works = () => {
  const projects = [
    {
      id: 1,
      title: 'Project A',
      description: 'We provided motivational talk on emerging technologies to Sadakathullah Appa college, P.G Department of Computer science.We addressed more than 100+ students and delivered such an inspiring and motivational talk to the students. Our speech has insights on career guidance, motivation, entrepreneurship development, and the importance of technology for placement were engaging and informative. The students found our session extremely valuable and encouraging, and we have received positive feedback from many who were motivated by our words to pursue their goals with renewed enthusiasm.',
      image: p1 ,
    },
    {
      id: 2,
      title: 'Project B',
      description: 'We delivered a guest lecture to the U.G CSE Department at PSN College of Engineering, reaching over 120 students. Our session provided valuable insights and was well-received, with many students finding the information particularly beneficial and inspiring.',
      image: p2, // Replace with your image URL
    },
  ];

  return (
<div className="works-section">
  <h2 className="text-center">Our Past Works</h2>
  <div className="column-container">
    {projects.map((project) => (
      <div key={project.id} className="work-card">
        <img src={project.image} alt={project.title} className="work-image" />
        <div className="work-content">
          <p>{project.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Works;
