import React from "react";
import { Rating } from "@mui/material";
import Buttonfilled from "../Buttons/ButtonFilled1";

const HeroSection = () => {
  return (
    <section className="flex justify-center items-center bg-gradient-to-r from-slate-50 to-slate-300 h-[auto] lg:h-[100dvh]">
      <div className="w-[80%] w-full flex flex-col items-start p-5">
        <h1 className="text-[58px] lg:text-[7rem] md:text-[5rem] font-bold leading-tight lg:ml-[4%]">
          <span className="text-[#f0bd6c]">Accelerate</span>
          <br />
          your learning
        </h1>
        <div className="flex max-w-full lg:max-w-[90%] gap-10 flex-col lg:flex-row sm:flex-col">
          <div className="flex flex-col items-center mt-6 gap-3 w-[50%]">
            <p className="text-[1.8rem] font-semibold">4.58 average rating</p>
            <div className="flex items-center space-x-2">
              <Rating name="course-rating" defaultValue={4} size="small" />
              <span className="text-[14px]">187,672 learner reviews</span>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-6 w-full">
            <p className="text-2xl lg:max-w-[90%] max-w-[100%] mt-6">
              Take your career further. Discover 1400+ courses from top
              universities and master in-demand skills across marketing, tech,
              business, cybersecurity and more.
            </p>
            <div className="flex gap-5 lg:flex-row flex-col w-full">
              <Buttonfilled text="Get Unlimited Learning" />
              <button className=" p-3 border-[2px] rounded-lg border-[#f0bd6c] text-lg text-[#000] hover:bg-[#f0bd6c] hover:text-black transition-colors duration-300">
                Explore Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
