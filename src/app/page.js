import Certificates from "@/components/Homepage/Certificates";
import Hero from "@/components/Homepage/Hero";
import HowItWorks from "@/components/Homepage/HowItWorks";
import TopSubjects from "@/components/Homepage/TopSubjects";
import VideoSection from "@/components/Homepage/VideoSection";
import ResponsiveNavbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <ResponsiveNavbar />
      <Hero />
      <section className="flex flex-col justify-center items-center py-20">
        <h2>Explore top subjects</h2>
        <hr
          style={{
            borderWidth: 0,
            height: "5px",
            backgroundColor: "#f0bd6c",
            opacity: "100%",
            width: "10%",
          }}
        />
        <TopSubjects />
      </section>
      <Certificates />
      <section className="flex w-full justify-center py-20">
        <VideoSection />
      </section>
      <section className="flex w-full justify-center py-20">
        <HowItWorks />
      </section>
      <section className="h-[100vh]"></section>
    </>
  );
};

export default page;
