"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const TopSubjects = () => {
  const [activeTab, setActiveTab] = useState("Healthcare & Medicine");

  const tabs = [
    {
      name: "Business & Management",
      header: "Business & Management",
      description: `Boss it in business with our specialist upskilling courses, industry certifications and high-flying degrees.
      No matter what your goals are, leading experts from the likes of Accenture, AWS and Deakin University will guide you to achieve them.
      From data analytics to digital marketing, start learning from the best.`,
      quote: {
        text: `“The course was beautifully conceptualised, and well presented. The videos were lucid, clear, articulate and informative."`,
        author: "Charles, UK",
      },
      courses: [
        {
          title: "Master of Business Administration (MBA)",
          description:
            "Step into your next big role by gaining top-tier business acumen and well-rounded, practical experience with the University of Roehampton.",
          image: "/mgd.jpg",

          type: "Degree Program",
        },
        {
          title: "Principles of Wealth Management",
          description:
            "Introduce yourself to the world of finance and wealth management with this engaging course from the Hanken School of Economics.",
          image: "/mgd.jpg",

          type: "Short Course",
        },
      ],
    },
    {
      name: "Tech & IT",
      header: "Tech & IT",
      description: `Boss it in business with our specialist upskilling courses, industry certifications and high-flying degrees.
      No matter what your goals are, leading experts from the likes of Accenture, AWS and Deakin University will guide you to achieve them.
      From data analytics to digital marketing, start learning from the best.`,
      quote: {
        text: `“The course was beautifully conceptualised, and well presented. The videos were lucid, clear, articulate and informative."`,
        author: "Charles, UK",
      },
      courses: [
        {
          title: "Master of Business Administration (MBA)",
          description:
            "Step into your next big role by gaining top-tier business acumen and well-rounded, practical experience with the University of Roehampton.",
          image: "/mgd.jpg",

          type: "Degree Program",
        },
        {
          title: "Principles of Wealth Management",
          description:
            "Introduce yourself to the world of finance and wealth management with this engaging course from the Hanken School of Economics.",
          image: "/mgd.jpg",

          type: "Short Course",
        },
      ],
    },
    {
      name: "Teaching",
      header: "Teaching",
      description: `Boss it in business with our specialist upskilling courses, industry certifications and high-flying degrees.
      No matter what your goals are, leading experts from the likes of Accenture, AWS and Deakin University will guide you to achieve them.
      From data analytics to digital marketing, start learning from the best.`,
      quote: {
        text: `“The course was beautifully conceptualised, and well presented. The videos were lucid, clear, articulate and informative."`,
        author: "Charles, UK",
      },
      courses: [
        {
          title: "Master of Business Administration (MBA)",
          description:
            "Step into your next big role by gaining top-tier business acumen and well-rounded, practical experience with the University of Roehampton.",
          image: "/mgd.jpg",

          type: "Degree Program",
        },
        {
          title: "Principles of Wealth Management",
          description:
            "Introduce yourself to the world of finance and wealth management with this engaging course from the Hanken School of Economics.",
          image: "/mgd.jpg",

          type: "Short Course",
        },
      ],
    },
    {
      name: "Healthcare & Medicine",
      header: "Healthcare & Medicine",
      description: `Earning CPD and getting that all-important professional development has never been easier.
      Our expansive range of healthcare & medicine courses by leading experts will support your
      career journey — no matter where you want to go.`,
      quote: {
        text: `“Throughout the course there was an emphasis on reflection and self observation, which I
        found very insightful. I feel that as well as gaining practical strategies, I have
        learned something about myself too.”`,
        author: "Simone, UK",
      },
      courses: [
        {
          title: "Masters of Public Health (MPH)",
          description:
            "Gain career-ready skills in public health with a flexible online master's degree from Brunel University London.",
          image: "/mgd.jpg",

          type: "Degree Program",
        },
        {
          title: "Paediatric Gastroenterology",
          description:
            "Gain life-saving skills from healthcare experts as you learn to identify, manage, and prevent paediatric foreign body ingestion.",
          image: "/mgd.jpg",

          type: "Short Course",
        },
      ],
    },
    // Add other tabs here...
  ];

  const activeTabContent = tabs.find((tab) => tab.name === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Categories Section */}
      <div className="flex justify-center space-x-8 mb-8">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(tab.name)}
            className={`cursor-pointer text-gray-500 hover:text-pink-600 transition-all duration-300 ${
              activeTab === tab.name ? "text-black font-semibold" : ""
            }`}
          >
            {tab.name}
          </div>
        ))}
      </div>

      <div className="flex flex-row gap-5">
        <div className="flex flex-col">
          {/* Header Section */}
          <div className="mb-12">
            <Typography variant="h4" className="font-bold mb-4">
              {activeTabContent.header}
            </Typography>
            <Typography variant="body1" className="text-gray-600">
              {activeTabContent.description}
            </Typography>
          </div>

          {/* Quote Section */}
          <div className="mb-12">
            <div className="border-l-4 border-pink-500 pl-4">
              <Typography variant="body1" className="italic text-gray-600">
                {activeTabContent.quote.text}
              </Typography>
              <Typography
                variant="body2"
                className="font-bold text-gray-500 mt-2"
              >
                {activeTabContent.quote.author}
              </Typography>
            </div>
          </div>
          {/* Explore Courses Button */}
          <div className="text-center mt-12">
            <Button
              variant="contained"
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full"
            >
              Explore courses
            </Button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* <div className="flex gap-5"> */}
          {activeTabContent.courses.map((course, index) => (
            <Card key={index} className="shadow-lg rounded-2xl">
              <CardMedia
                component="img"
                height="140"
                image={course.image}
                alt={course.title}
                className="rounded-t-lg"
              />
              <CardContent>
                <Typography variant="h6" className="font-bold mb-2">
                  {course.title}
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-4">
                  {course.description}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  className="capitalize"
                >
                  {course.type}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSubjects;
