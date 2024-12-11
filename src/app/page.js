import Hero from "@/components/Homepage/Hero";
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
      </section>
      
    </>
  );
};

export default page;
