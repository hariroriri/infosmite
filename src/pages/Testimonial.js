// TestimonialCarousel.js
import React from "react";
import { Carousel } from "react-bootstrap";
import '../styles/Testimonial.css'; // Ensure you have this CSS file
import ajitha from '../assets/ajitha.jpg';
import nambi from '../assets/nambi.jpg';
import ajay from '../assets/ajay.jpg';

const testimonials = [
    {
        name: "- Ajitha",
        position: "CEO, Company A",
        text: "I Completed my UI/UX design course at Infosmite. The instruction was clear and comprehensive, and the facilitators encouraged open dialogue, allowing me to ask questions freely. Thanks to their support, I secured my first internship opportunity",
        image: ajitha, // Placeholder image URL
    },
    {
        name: "- Nambirajan",
        position: "Director, Company B",
        text: "I wanted to share my experience with your inplant training. The program was well-structured and highly informative. The instructor were knowledgeable and made learning enjoyable. I gained valuable skills and insights that I can now apply in my work.",
        image: nambi, // Placeholder image URL
    },
    {
        name: "- Ajay",
        position: "Manager, Company C",
        text: "I wanted to share my experience with the inplant training program, and I must say it exceeded my expectations! The program was meticulously structured, which made it easy to follow and incredibly informative. Each session was well-organized, covering essential topics that are relevant to the industry today.",
        image: ajay, // Placeholder image URL
    },
];

const TestimonialCarousel = () => {
    return (
        <div className="testimonial-carousel">
            <h1 className="text-center">What People Say About Us</h1>
            <Carousel>
                {testimonials.map((testimonial, index) => (
                    <Carousel.Item key={index}>
                        <div className="testimonial-content d-flex align-items-center">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="testimonial-image"
                            />
                            <div className="testimonial-text-content">
                                <p className="testimonial-text">"{testimonial.text}"</p>
                                <h5 className="testimonial-name">{testimonial.name}</h5>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default TestimonialCarousel;
