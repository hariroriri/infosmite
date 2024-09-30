import React from 'react';
import '../styles/Services.css';

const packages = [
  {
    id: 1,
    title: 'Technology based education',
    image: 'https://media.istockphoto.com/id/1395129919/photo/sustainable-development-goals-valid-in-future-modern-industry-renewable-energy-based-green.jpg?s=1024x1024&w=is&k=20&c=3rTbA9vNRUistvCX_t9krTVGYGqvS_HV-gD9IJ_z4hg=',
    description: 'Relax on the most beautiful beaches with our all-inclusive beach paradise package.',
  },
  {
    id: 2,
    title: 'Cost friendly product development',
    image: 'https://media.istockphoto.com/id/2098791852/photo/portrait-of-her-she-nice-well-dressed-attractive-lovely-luxury-pretty-content-cheerful-girl.jpg?s=2048x2048&w=is&k=20&c=PQHdG6WMzk-IpM2lGG3QVVmHLYYA3-q-o08xSgl-ngk=',
    description: 'Experience thrilling adventures with our exclusive adventure package.',
  },
  {
    id: 3,
    title: 'Career Guidance',
    image: 'https://media.istockphoto.com/id/643957016/photo/personal-development.jpg?s=1024x1024&w=is&k=20&c=PTcardyWwxoLEnr6i8Czrxv4PBHYGm_1n7S1MDOj_N8=',
    description: 'Immerse yourself in rich cultures with our cultural journey package.',
  },
//   {
//     id: 4,
//     title: 'Mountain Expedition',
//     image: 'https://plus.unsplash.com/premium_photo-1661809977784-fde7d1d6c02e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     description: 'Embark on a challenging mountain expedition with breathtaking views.',
//   },
];


const Services = () => {
  return (
    <div className="packages-page">
      <h1>Our Services</h1>
      <div className="packages-container">
        {packages.map(pkg => (
          <div key={pkg.id} className="package-card">
            <img src={pkg.image} alt={pkg.title} className="package-image" />
            <div className="package-info">
              <h2>{pkg.title}</h2>
              <p>{pkg.description}</p>
              <p className="package-price">{pkg.price}</p>
              <button className="book-now-btn">Online</button>
              <button className="book-now-btn green">Offline</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
