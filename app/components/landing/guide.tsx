import React from "react";
import Image from "next/image";

export default function Guide() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center px-6">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

        <div className="relative flex justify-center items-center">

          <div className="absolute w-125 h-125 rounded-full border border-[#18181C]"></div>
          <div className="absolute w-100 h-100 rounded-full border border-[#18181C]"></div>
          <div className="absolute w-75 h-75 rounded-full border border-[#18181C]"></div>

          <div className="w-28 h-28 bg-[#18181C] rounded-full flex items-center justify-center z-10 shadow-xl">
            <Image
              src="/images/Vector.png"
              alt="center logo"
              width={50}
              height={50}
            />
          </div>

          <div className="absolute top-52 left-50 w-16.5 h-16.5 rounded-full  flex items-center justify-center shadow-lg">
            <Image src="/images/Ellipse 10.png" alt="" width={66} height={66} />
          </div>

          <div className="absolute -top-12 right-20 w-16.5 h-16.5 rounded-full  flex items-center justify-center shadow-lg">
            <Image src="/images/Ellipse 9.png" alt="" width={66} height={66} />
          </div>

          <div className="absolute bottom-30 left-25 w-16.5 h-16.5 rounded-full  flex items-center justify-center shadow-lg">
            <Image src="/images/Ellipse 11.png" alt="" width={66} height={66} />
          </div>

          <div className="absolute top-50 right-43">
            <Image
              src="/images/Group 126.png"
              alt="orbit ball"
              width={32}
              height={32}
            />
          </div>

          <div className="absolute top-25 left-25">
            <Image
              src="/images/Group 126.png"
              alt="orbit ball"
              width={32}
              height={32}
            />
          </div>

          <div className="absolute bottom-55 right-50">
            <Image
              src="/images/Group 126.png"
              alt="orbit ball"
              width={32}
              height={32}
            />
          </div>


        </div>

        <div className="ml-10">
          <h2 className="text-4xl md:text-[48px] font-semibold leading-tight mb-6">
            We're here to <br />
            guide and help <br />
            you at all times
          </h2>

          <p className="text-gray-400 mb-8 max-w-xs leading-relaxed">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem
          </p>

          <button className="px-7 py-2 rounded-[5px] text-[14px] bg-linear-to-r from-pink-400 to-purple-500 text-white font-medium hover:opacity-90 transition">
            Download
          </button>
        </div>

      </div>
    </section>
  );
}
