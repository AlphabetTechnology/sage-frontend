"use client";
import { Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const cards = [
  {
    icon: "/icons/MyCourses.png",
    title: "My Courses",
  },
  {
    icon: "/icons/Assesment.png",
    title: "Assesment",
  },
  {
    icon: "/icons/MyAccount.png",
    title: "My Account",
  },
  {
    icon: "/icons/BookaCall.png",
    title: "Book a Call",
  },
  {
    icon: "/icons/HelpDesk.png",
    title: "Help Desk",
  },
];

const CoursesPage = () => {
  const [visibleCourses, setVisibleCourses] = useState(4);

  // Example course data
  const courses = [
    {
      title: "Blockchain",
      university: "University at Buffalo",
      category: "Specialization",
      image: "https://via.placeholder.com/200x150",
    },
    {
      title: "Blockchain Basics",
      university: "University at Buffalo",
      category: "Course",
      image: "https://via.placeholder.com/200x150",
    },
    {
      title: "Smart Contracts",
      university: "University at Buffalo",
      category: "Course",
      image: "https://via.placeholder.com/200x150",
    },
    {
      title: "Meta Back-End Developer",
      university: "Meta",
      category: "Professional Certificate",
      image: "https://via.placeholder.com/200x150",
    },
    // Add more courses as needed
  ];

  // Function to show more courses
  const showMoreCourses = () => {
    setVisibleCourses(visibleCourses + 4); // Increase the number of visible courses
  };
  return (
    <>
      <div className="flex mx-auto p-10 w-full h-auto justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 items-center">
          {cards.map((course, index) => (
            <div
              key={index}
              className="shadow-lg border-[1px] border-[#f0bd6c] rounded-2xl flex flex-col items-center justify-center cursor-pointer min-w-[150px] HelpDesk.png lg:min-w-[200px] p-2"
            >
              <div className="rounded-t-lg">
                <Image
                  height={50}
                  width={50}
                  src={course.icon}
                  alt={course.title}
                />
              </div>
              <div className="p-4 text-center">
                <Typography variant="h6" className="font-bold mb-2">
                  {course.title}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 py-20 ">
        <h3>Explore Other Courses</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.slice(0, visibleCourses).map((course, index) => (
            <div
              key={index}
              className="shadow-md rounded-lg overflow-hidden border border-gray-200"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold mb-2">{course.title}</h4>
                <p className="text-sm text-gray-600">{course.university}</p>
                <p className="text-sm text-gray-500 italic">
                  {course.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCourses < courses.length && (
          <div className="text-center mt-6">
            <button
              onClick={showMoreCourses}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300"
            >
              Show 8 More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CoursesPage;
