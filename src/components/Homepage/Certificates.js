import Image from "next/image";
import React from "react";

const logos = [
  {
    id: "Accenture_Logo_Black-min",
    src: "/logo/Accenture_Logo_Black-min.svg",
    alt: "Accenture Logo",
  },
  {
    id: "Bloomsbury_Black_logo-min",
    src: "/logo/Bloomsbury_Black_logo-min.svg",
    alt: "Bloomsbury Logo",
  },
  {
    id: "Cambridge_Logo_Black",
    src: "/logo/Cambridge_Logo_Black.svg",
    alt: "Cambridge Logo",
  },
  {
    id: "NHS_HEE_Logo_Black-min",
    src: "/logo/NHS_HEE_Logo_Black-min.svg",
    alt: "NHS Logo",
  },
  {
    id: "the_open_univ",
    src: "/logo/the_open_univ.svg",
    alt: "The Open University Logo",
  },
  {
    id: "UCI_Logo_Black-min",
    src: "/logo/UCL_Logo_Black-min.svg",
    alt: "UCI Logo",
  },
  {
    id: "University_of_Leeds_Logo_Black",
    src: "/logo/University_of_Leeds_Logo_Black.svg",
    alt: "University of Leeds Logo",
  },
];

const Certificates = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center py-20 ">
        <div className=" w-[95%] justify-between items-center flex flex-col p-10 rounded-lg">
          <h2 className="py-20">
            Learn with 200+ world-class institutions and educators
          </h2>
          <div className="grid grid-cols-4 gap-10 mt-8 items-center">
            {logos.slice(0, 4).map((logo) => (
              <div key={logo.id} className="flex justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={100}
                  className="w-full h-auto "
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
            {logos.slice(4).map((logo) => (
              <div key={logo.id} className="flex justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={100}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Certificates;
