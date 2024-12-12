"use client";
import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";

// Example tabs data
const tabsData = [
  {
    label: "Short courses",
    steps: [
      {
        number: 1,
        title: "Choose a short course",
        description:
          "From introductory to advanced, you'll find high-quality courses across every subject, designed and taught by academic and industry experts.",
      },
      {
        number: 2,
        title: "Subscribe or upgrade",
        description:
          "Join FutureLearn Unlimited for long-term access to your course and a CV-ready certificate, or upgrade individually on each course.",
      },
      {
        number: 3,
        title: "Learn, connect and discuss",
        description:
          "Courses are divided into weeks and steps. You'll be able to connect with other learners throughout your learning journey.",
      },
      {
        number: 4,
        title: "Find your next course",
        description: "Now you've caught the bug, what will you learn next?",
      },
    ],
  },
  {
    label: "Microcredentials",
    steps: [
      {
        number: 1,
        title: "Start learning",
        description: "Access curated tracks with expert-level content.",
      },
      {
        number: 2,
        title: "Engage with experts",
        description: "Join discussions and get direct feedback from experts.",
      },
      {
        number: 3,
        title: "Test your knowledge",
        description:
          "Complete quizzes and assignments to validate your skills.",
      },
      {
        number: 4,
        title: "Achieve certification",
        description:
          "Earn a professional certificate to boost your career opportunities.",
      },
    ],
  },
  {
    label: "Online degrees",
    steps: [
      {
        number: 1,
        title: "Start learning",
        description: "Access curated tracks with expert-level content.",
      },
      {
        number: 2,
        title: "Engage with experts",
        description: "Join discussions and get direct feedback from experts.",
      },
      {
        number: 3,
        title: "Test your knowledge",
        description:
          "Complete quizzes and assignments to validate your skills.",
      },
      {
        number: 4,
        title: "Achieve certification",
        description:
          "Earn a professional certificate to boost your career opportunities.",
      },
    ],
  },
  {
    label: "ExpertTracks",
    steps: [
      {
        number: 1,
        title: "Start learning",
        description: "Access curated tracks with expert-level content.",
      },
      {
        number: 2,
        title: "Engage with experts",
        description: "Join discussions and get direct feedback from experts.",
      },
      {
        number: 3,
        title: "Test your knowledge",
        description:
          "Complete quizzes and assignments to validate your skills.",
      },
      {
        number: 4,
        title: "Achieve certification",
        description:
          "Earn a professional certificate to boost your career opportunities.",
      },
    ],
  },
  // Add more tabs with steps as needed
];

const HowItWorks = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className="flex w-[90%] bg-[#57574d] rounded-2xl text-white">
      <Box sx={{ maxWidth: "1200px", mx: "auto", py: 20, px: 2 }}>
        {/* Header */}
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          How does it work?
        </Typography>

        <Box
          sx={{
            height: "3px",
            width: "100px",
            backgroundColor: "#f0bd6c",
            mx: "auto",
            mb: 4,
          }}
        />

        {/* Tabs */}
        {/* Tabs */}
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          centered
          textColor="inherit"
          TabIndicatorProps={{
            style: { backgroundColor: "#000", height: "4px" },
          }}
          sx={{
            mb: 4,
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "1.25rem",
            },
            "& .Mui-selected": {
              color: "#f0bd6c !important", // Font color for the selected tab
            },
          }}
        >
          {tabsData.map((tab, index) => (
            <Tab label={tab.label} key={index} />
          ))}
        </Tabs>

        {/* Steps Content */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 4,
          }}
        >
          {tabsData[selectedTab].steps.map((step) => (
            <Box key={step.number} sx={{ textAlign: "center" }}>
              <Typography
                variant="h3"
                color="#f0bd6c"
                sx={{ fontWeight: "bold", mb: 1 }}
                align="left"
              >
                {step.number}
              </Typography>
              <Typography
                align="left"
                variant="h6"
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                {step.title}
              </Typography>
              <Typography align="left" variant="body2" color="white">
                {step.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default HowItWorks;
