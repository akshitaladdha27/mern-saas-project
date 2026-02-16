import React from "react";
import Image from "next/image";

const features = [
  { title: "Fully Customizable", image: "/images/Group 102.png" },
  { title: "Fully Customizable", image: "/images/Group.png" },
  { title: "Fully Customizable", image: "/images/Group 129.png" },
  { title: "Fully Customizable", image: "/images/Group 103.png" },
  { title: "Fully Customizable", image: "/images/Group 105.png" },
  { title: "Fully Customizable", image: "/images/Group 106.png" },
];

export default function Feature() {
  return (
    <section className="bg-black text-white pt-2 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Feature Boxes
        </h2>

        <p className="text-gray-400 max-w-md mb-16 leading-relaxed">
          A good design is not only aesthetically pleasing, but also
          functional. It should be able to solve the problem
        </p>
        <div className="max-w-5xl mx-26">
        <div className="grid md:grid-cols-3 gap-x-0 gap-y-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                bg-linear-to-b
                bg-[#18181C] 
                w-75 
                rounded-[20px]
                px-5 py-10
                text-center
                backdrop-blur-xl
                shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                transition-all duration-300
              "
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center 
                              rounded-2xl 
                              bg-[#222228]
                              mb-8">
                <Image
                  src={feature.image}
                  alt="feature icon"
                  width={32}
                  height={32}
                />
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-400 max-w-md text-sm leading-relaxed">
                A good design is not only aesthetically pleasing, but also
                functional. It should be able to solve the problem
              </p>
            </div>
          ))}
        </div>
        </div>

      </div>
    </section>
  );
}
