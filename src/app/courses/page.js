'use client';  // Add this line

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Testimonials from '@/components/Testimonials';
import LearnerReviews from '@/components/Reviews';

const Courses = () => {
    const allCourses = [
        {
            image: "https://ugc.futurelearn.com/uploads/images/dd/f6/thumbnail_ddf6b560-c986-42d7-af3b-04d3dc0b272e.jpg",
            title: "Perioperative Medicine in Action",
            university: "UCL (University College London)",
            rating: "4.7 (224 reviews)",
            weeks: "4 weeks",
            hours: "3 hrs per week",
            description: "Perioperative medicine is an emerging, multi-disciplinary...",
            subject: "Business & Management",
            subscription: "Included in Unlimited",
            startDate: "Start now"
        },
        {
            image: "https://ugc.futurelearn.com/uploads/images/dd/f6/thumbnail_ddf6b560-c986-42d7-af3b-04d3dc0b272e.jpg",
            title: "Animal Feed Production: Feed Safety",
            university: "EIT Food & Queen's University Belfast",
            rating: "4.3 (7 reviews)",
            weeks: "5 weeks",
            hours: "4 hrs per week",
            description: "Perioperative medicine is an emerging, multi-disciplinary...",
            subject: "Nature & Environment",
            subscription: "Premium courses",
            startDate: "Start later"
        },
        {
            image: "https://ugc.futurelearn.com/uploads/images/dd/f6/thumbnail_ddf6b560-c986-42d7-af3b-04d3dc0b272e.jpg",
            title: "Introduction to Cyber Security",
            university: "The Open University",
            rating: "4.7 (520 reviews)",
            weeks: "8 weeks",
            hours: "3 hrs per week",
            description: "Perioperative medicine is an emerging, multi-disciplinary...",
            subject: "Creative Arts & Media",
            subscription: "Included in Unlimited",
            startDate: "Start now"
        },
        {
            image: "https://ugc.futurelearn.com/uploads/images/dd/f6/thumbnail_ddf6b560-c986-42d7-af3b-04d3dc0b272e.jpg",
            title: "Data Science and AI",
            university: "MIT (Massachusetts Institute of Technology)",
            rating: "4.9 (100 reviews)",
            weeks: "6 weeks",
            hours: "5 hrs per week",
            description: "Learn the fundamentals of data science and AI applications.",
            subject: "Technology",
            subscription: "Premium courses",
            startDate: "Start later"
        },
        {
            image: "https://ugc.futurelearn.com/uploads/images/dd/f6/thumbnail_ddf6b560-c986-42d7-af3b-04d3dc0b272e.jpg",
            title: "Introduction to Philosophy",
            university: "Harvard University",
            rating: "4.8 (430 reviews)",
            weeks: "10 weeks",
            hours: "2 hrs per week",
            description: "Explore the key topics in philosophy from ancient to modern times.",
            subject: "Arts & Humanities",
            subscription: "Included in Unlimited",
            startDate: "Start now"
        },
        {
            image: "https://ugc.futurelearn.com/uploads/images/dd/f6/thumbnail_ddf6b560-c986-42d7-af3b-04d3dc0b272e.jpg",
            title: "Digital Marketing Fundamentals",
            university: "University of California, Berkeley",
            rating: "4.5 (320 reviews)",
            weeks: "7 weeks",
            hours: "3 hrs per week",
            description: "Master the fundamentals of digital marketing...",
            subject: "Business & Management",
            subscription: "Premium courses",
            startDate: "Start later"
        },
    ];

    const [filteredCourses, setFilteredCourses] = useState(allCourses);
    const [subjectFilter, setSubjectFilter] = useState('');
    const [subscriptionFilter, setSubscriptionFilter] = useState('');
    const [startDateFilter, setStartDateFilter] = useState('');

    const filterCourses = () => {
        let filtered = allCourses;

        if (subjectFilter) {
            filtered = filtered.filter(course => course.subject === subjectFilter);
        }
        if (subscriptionFilter) {
            filtered = filtered.filter(course => course.subscription === subscriptionFilter);
        }
        if (startDateFilter) {
            filtered = filtered.filter(course => course.startDate === startDateFilter);
        }

        setFilteredCourses(filtered);
    };

    const handleFilterChange = (e, type) => {
        const value = e.target.value;
        if (value === 'All') {
            if (type === "subject") {
                setSubjectFilter('');
            } else if (type === "subscription") {
                setSubscriptionFilter('');
            } else if (type === "startDate") {
                setStartDateFilter('');
            }
        } else {
            if (type === "subject") {
                setSubjectFilter(value);
            } else if (type === "subscription") {
                setSubscriptionFilter(value);
            } else if (type === "startDate") {
                setStartDateFilter(value);
            }
        }
        filterCourses();
    };

    const isSelected = (filterValue, currentFilter) => filterValue === currentFilter;

    return (
        <>
            <Navbar />
            {/* Course Section Start */}
            <section className="bg-gradient-to-r from-slate-50 px-4">
                <div className="container mx-auto">
                    <div className="w-[80%] w-full flex flex-col items-start py-20">
                        <h1 className="text-[36px] lg:text-[2.4rem] md:text-[2rem] font-bold leading-tight">
                            Short online courses
                        </h1>
                        <p className="text-[2xl] sm:text-[2xl] leading-tight">
                            Choose from thousands of online courses from top universities and specialist organisations.
                        </p>
                    </div>
                </div>
            </section>
            <section className="courses mt-10 px-4">
                {/* Filter Section */}
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        {/* Sidebar Section */}
                        <div className="w-full md:w-1/4 pr-4">
                            {/* Subject Section */}
                            <h2 className="text-lg font-bold md:mb-4">Subject</h2>
                            <ul className="space-y-2 hidden md:block">
                                <li className={`cursor-pointer hover:text-[rgb(240,189,108)] ${isSelected('', subjectFilter) ? 'text-[rgb(240,189,108)]' : ''}`} onClick={(e) => handleFilterChange({ target: { value: 'All' } }, 'subject')}>All subjects</li>
                                <li className={`cursor-pointer hover:text-[rgb(240,189,108)] ${isSelected('Business & Management', subjectFilter) ? 'text-[rgb(240,189,108)]' : ''}`} onClick={(e) => handleFilterChange({ target: { value: 'Business & Management' } }, 'subject')}>Business & Management</li>
                                <li className={`cursor-pointer hover:text-[rgb(240,189,108)] ${isSelected('Creative Arts & Media', subjectFilter) ? 'text-[rgb(240,189,108)]' : ''}`} onClick={(e) => handleFilterChange({ target: { value: 'Creative Arts & Media' } }, 'subject')}>Creative Arts & Media</li>
                                <li className={`cursor-pointer hover:text-[rgb(240,189,108)] ${isSelected('Nature & Environment', subjectFilter) ? 'text-[rgb(240,189,108)]' : ''}`} onClick={(e) => handleFilterChange({ target: { value: 'Nature & Environment' } }, 'subject')}>Nature & Environment</li>
                                <li className={`cursor-pointer hover:text-[rgb(240,189,108)] ${isSelected('Politics & Society', subjectFilter) ? 'text-[rgb(240,189,108)]' : ''}`} onClick={(e) => handleFilterChange({ target: { value: 'Politics & Society' } }, 'subject')}>Politics & Society</li>
                            </ul>
                            <select className="md:hidden block w-full bg-white p-2 border border-gray-300 rounded-md" onChange={(e) => handleFilterChange(e, 'subject')}>
                                <option value="All">All subjects</option>
                                <option value="Business & Management">Business & Management</option>
                                <option value="Creative Arts & Media">Creative Arts & Media</option>
                                <option value="Nature & Environment">Nature & Environment</option>
                                <option value="Politics & Society">Politics & Society</option>
                            </select>

                            {/* Course Subscription Section */}
                            <h2 className="text-lg font-bold md:mb-4 md:mt-8">Course subscription</h2>
                            <ul className="space-y-2 hidden md:block">
                                <li className={`cursor-pointer hover:text-[rgb(240,189,108)] ${isSelected('', subscriptionFilter) ? 'text-[rgb(240,189,108)]' : ''}`} onClick={(e) => handleFilterChange({ target: { value: 'All' } }, 'subscription')}>All subscriptions</li>
                                <li className={`cursor-pointer hover:text-[rgb(240,189,108)] ${isSelected('Included in Unlimited', subscriptionFilter) ? 'text-[rgb(240,189,108)]' : ''}`} onClick={(e) => handleFilterChange({ target: { value: 'Included in Unlimited' } }, 'subscription')}>Included in Unlimited</li>
                                <li className={`cursor-pointer hover:text-[rgb(240,189,108)] ${isSelected('Premium courses', subscriptionFilter) ? 'text-[rgb(240,189,108)]' : ''}`} onClick={(e) => handleFilterChange({ target: { value: 'Premium courses' } }, 'subscription')}>Premium courses</li>
                            </ul>
                            <select className="md:hidden block w-full bg-white p-2 border border-gray-300 rounded-md" onChange={(e) => handleFilterChange(e, 'subscription')}>
                                <option value="All">All subscriptions</option>
                                <option value="Included in Unlimited">Included in Unlimited</option>
                                <option value="Premium courses">Premium courses</option>
                            </select>

                            {/* Start Date Section */}
                            <h2 className="text-lg font-bold md:mb-4 md:mt-8">Start date</h2>
                            <ul className="space-y-2 hidden md:block">
                                <li className={`cursor-pointer hover:text-[rgb(240,189,108)] ${isSelected('', startDateFilter) ? 'text-[rgb(240,189,108)]' : ''}`} onClick={(e) => handleFilterChange({ target: { value: 'All' } }, 'startDate')}>All start dates</li>
                                <li className={`cursor-pointer hover:text-[rgb(240,189,108)] ${isSelected('Start now', startDateFilter) ? 'text-[rgb(240,189,108)]' : ''}`} onClick={(e) => handleFilterChange({ target: { value: 'Start now' } }, 'startDate')}>Start now</li>
                                <li className={`cursor-pointer hover:text-[rgb(240,189,108)] ${isSelected('Start later', startDateFilter) ? 'text-[rgb(240,189,108)]' : ''}`} onClick={(e) => handleFilterChange({ target: { value: 'Start later' } }, 'startDate')}>Start later</li>
                            </ul>
                            <select className="md:hidden block w-full bg-white p-2 border border-gray-300 rounded-md mb-5" onChange={(e) => handleFilterChange(e, 'startDate')}>
                                <option value="All">All start dates</option>
                                <option value="Start now">Start now</option>
                                <option value="Start later">Start later</option>
                            </select>
                        </div>


                        {/* Course Cards Section */}
                        <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCourses.length > 0 ? (
                                filteredCourses.map((course, index) => (
                                    <div
                                        key={index}
                                        className="border rounded-lg shadow-sm overflow-hidden bg-white hover:bg-[#f9f9f9]"
                                        style={{ maxHeight: "490px" }}
                                    >
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-5">
                                            <h2 className="text-lg font-bold mt-2">{course.title}</h2>
                                            <div className="text-sm text-gray-500 mt-2">
                                                <p>
                                                    {course.description.split(' ').slice(0, 10).join(' ')}{course.description.split(' ').length > 10 ? '...' : ''}
                                                </p>

                                            </div>
                                            <p className="text-yellow-500 font-semibold mt-2 text-sm line-height">
                                                ⭐ {course.rating}
                                            </p>
                                            <div className="text-xsm text-gray-500 mt-2">
                                                <span className='text-md mr-2'>⏳ {course.weeks}</span>
                                                <span className='text-md'>🕒 {course.hours}</span>
                                            </div>
                                            <button
                                                className="w-full mt-6 text-white font-semibold py-2 rounded-md hover:opacity-90"
                                                style={{ backgroundColor: "#f0bd6c" }}
                                            >
                                                Find out more
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-3 text-center text-lg text-gray-500">No courses found</div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Courses;