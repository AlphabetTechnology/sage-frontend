"use client";
import React, { useState, useEffect } from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            role: 'Medical Professional',
            text: 'This course has been a game-changer for my practice. It gave me deep insights into perioperative care and has improved the outcomes of my patients.',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            name: 'Jane Smith',
            role: 'Surgeon',
            text: 'I highly recommend this course. It’s packed with valuable knowledge for anyone involved in the surgical field.',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            name: 'Robert Brown',
            role: 'Anaesthetist',
            text: 'A fantastic course with a clear focus on patient safety. It helped me implement protocols to improve patient recovery.',
            image: 'https://via.placeholder.com/150',
        },
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000); // Change testimonial every 5 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="testimonial-section py-10 bg-gray-50 my-10">
            <div className="container mx-auto text-center">
                <h3 className="text-2xl font-bold mb-6">What do people say about this course?</h3>

                {/* Testimonial Box */}
                <div className="testimonial-box max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <div className="testimonial-content mb-4">
                        <p className="text-lg text-gray-700 mb-4">{testimonials[currentTestimonial].text}</p>
                        <div className="testimonial-author flex items-center justify-center">
                            <img
                                src={testimonials[currentTestimonial].image}
                                alt={testimonials[currentTestimonial].name}
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
                                <p className="text-sm text-gray-500">{testimonials[currentTestimonial].role}</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between">
                        <button
                            onClick={prevTestimonial}
                            className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                        >
                            Previous
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
