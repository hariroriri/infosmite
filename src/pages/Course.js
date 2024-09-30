
// Courses.js
import React from 'react';
import '../styles/Course.css';
import Footer from '../components/Footer';
import TestimonialCarousel from './Testimonial';
// import abt from '../assets/home-img.png'

const courses = [
    {
        id: 1,
        title: 'Web Development Bootcamp',
        image: 'https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Learn the fundamentals of web development with hands-on projects.',
        price: '₹499',
    },
    {
        id: 2,
        title: 'Data Science Masterclass',
        image: 'https://plus.unsplash.com/premium_photo-1664299121357-f34f6225d6a1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Master data science and analytics with real-world case studies.',
        price: '₹799',
    },
    {
        id: 3,
        title: 'Digital Marketing 101',
        image: 'https://media.istockphoto.com/id/935427102/photo/digital-marketing-word-on-blackboard-with-supportive-icons.jpg?s=612x612&w=is&k=20&c=T-WVtv9XIg-mRbDg2jdjMb3NcpnDNJV-jZDYY303q-g=',
        description: 'Develop your digital marketing skills with SEO, SEM, and social media.',
        price: '₹599',
    },
    {
        id: 4,
        title: 'Graphic Design Essentials',
        image: 'https://plus.unsplash.com/premium_photo-1721225465446-02f5b991a37f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Explore the world of graphic design with industry-standard tools.',
        price: '₹699',
    },
    {
        id: 5,
        title: 'AI & Machine Learning',
        image: 'https://media.istockphoto.com/id/1387900612/photo/automation-data-analytic-with-robot-and-digital-visualization-for-big-data-scientist.jpg?s=2048x2048&w=is&k=20&c=zLKHgq_p3IRkXSjbrOEPuJiXD7opXMRXiod4J-MXJuw=',
        description: 'Dive into AI and machine learning with hands-on projects.',
        price: '₹999',
    },
    {
        id: 6,
        title: 'Mobile App Development',
        image: 'https://plus.unsplash.com/premium_photo-1661425491614-6cfe2341c2a1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Build your own mobile apps with React Native (or) Flutter.',
        price: '₹899',
    },
];

const Courses = () => {
    return (
        <>

            <div className="course-banner">
                <h1>Explore Our Modules!</h1>
                <p>Delve into our extensive collection of modules to enhance your learning journey.</p>
            </div>

            <div className="pack-page">
                <h1>Our Courses</h1>
                <div className="pack-container">
                    {courses.map(course => (
                        <div key={course.id} className="pack-card">
                            <img src={course.image} alt={course.title} className="pack-image" />
                            <div className="pack-info">
                                <h2>{course.title}</h2>
                                <p>{course.description}</p>
                                <p className="pack-price">{course.price}</p>
                                <button className="book-now-btn">Enroll Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* New Course Details Section */}
            <div className="course-card-container">
                <h1>Our Course Duration</h1>
                <div className="course-details">
                    <span>1 Week</span> - <span>Basic</span> - <span>Level 0</span>
                </div>
                <div className="course-details">
                    <span>1 Month</span> - <span>Beginner</span> - <span>Level 1</span>
                </div>
                <div className="course-details">
                    <span>3 Months</span> - <span>Intermediate</span> - <span>Level 2</span>
                </div>
                <div className="course-details">
                    <span>6 Months</span> - <span>Advance</span> - <span>Level 3</span>
                </div>
            </div>

            <TestimonialCarousel />

            <Footer />
        </>

    );
};

export default Courses;
