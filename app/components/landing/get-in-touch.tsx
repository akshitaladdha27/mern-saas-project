import React from "react";
import Image from "next/image";

export default function GetInTouch() {
  return (
    <section className="relative bg-black text-white pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div className="relative flex justify-center items-center">
          <Image
            src="/images/Group 133.png"
            alt="globe"
            width={541}
            height={541}
            className=""
          />

          <div className="absolute top-2 left-2 w-16 h-16 rounded-full
                          bg-[radial-gradient(circle_at_30%_30%,#494955,#141414)]
                          blur-[20px] ">
          </div>

          <div className="absolute -bottom-10 right-1 w-24 h-24 rounded-full
                          bg-[radial-gradient(circle_at_30%_30%,#494955,#141414)]
                          blur-[20px] ">
          </div>

        </div>

        <div>
          <h2 className="text-4xl md:text-[48px] font-semibold mb-6">
            Get In Touch
          </h2>

          <p className="text-[#9E9E9E] text-[18px] mb-8 max-w-md">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem
          </p>

          <form className="space-y-5">

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-[#18181C]  rounded-xs px-4 py-3 text-[14px] text-white placeholder-[#9E9E9E] "
            />

            <input
              type="text"
              placeholder="Name"
              className="w-full bg-[#18181C]  rounded-xs px-4 py-3 text-[14px] text-white placeholder-[#9E9E9E] "
            />

            <textarea
              placeholder="Message"
              rows={5}
              className="w-full bg-[#18181C]  rounded-xs px-4 py-3 text-[14px] text-white placeholder-[#9E9E9E] "
            />

            <button
              type="submit"
              className="px-7 py-2 rounded-xs text-[14px] bg-linear-to-r from-pink-400 to-purple-500 text-white font-medium hover:opacity-90 transition"
            >
              Get in Touch
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
