import React from "react";
import Image from "next/image";

export default function Companies() {
  return (
    <>
      <section className="bg-[#18181C] text-white py-2 px-6 h-140.25 relative">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-semibold mt-20 mb-12">
            Companies we Worked <br />
            With in Since 2015
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mb-20">
            {["Smile", "Urban", "natural", "WAVE", "Happy", "Alisa"].map(
              (item, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-black rounded-lg text-gray-400 text-sm border border-white/10"
                >
                  {item}
                </div>
              )
            )}
          </div>

        </div>
      </section>

      <section className="bg-black text-white pt-2 pb-24 px-6 relative">

        <div className="max-w-6xl mx-auto -mt-50 ">
          <div className="rounded-[40px] overflow-hidden p-12 md:p-16
                          bg-linear-to-br
                          from-[#FF9898]
                          to-[#8054FF]">

            <div className="grid md:grid-cols-2 items-center gap-8 h-60">

              <div>
                <p className="text-[20px] mb-3 opacity-80">
                  Love our Our Tool?
                </p>

                <h3 className="text-3xl md:text-[48px] font-semibold mb-6 leading-snug">
                  Feel Free to Join our <br />
                  15 Days Free Trial
                </h3>

                <button className="px-6 py-3 bg-black text-white text-[14px] rounded-md hover:opacity-90 transition">
                  Download Template
                </button>
              </div>

              <div className="flex justify-end items-center">
                <Image
                    src="/images/Frame.png"
                    alt="world map"
                    width={554}
                    height={369}
                    className="w-full max-w-138.5 h-auto object-contain"
                />
              </div>

            </div>
          </div>
        </div>

      </section>
    </>
  );
}
