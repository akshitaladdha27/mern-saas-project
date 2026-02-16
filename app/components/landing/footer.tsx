import React from "react";
import { Twitter, Linkedin, Github } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#18181C] text-white pt-20">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12 pb-16">

        <div className="max-w-2xs">
          <div className="mb-6">
            <Image
              src="/images/Vector.png"
              width={56}
              height={45.06}
              alt="Logo"
            />
          </div>

          <p className="text-[#9E9E9E] text-[14px] leading-relaxed">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem
          </p>
        </div>

        <div className="flex flex-col items-">
          <h4 className="font-semibold text-[#FFFFFF] text-16px mb-6">Sections</h4>

          <div className="flex gap-20">
            {[1, 2, 3].map((col) => (
              <ul key={col} className="space-y-3 text-[#9E9E9E] text-sm">
                <li>Home</li>
                <li>Section One</li>
                <li>Section Two</li>
                <li>Section Three</li>
              </ul>
            ))}
          </div>

        </div>

      </div>

      <div className="bg-[#000000] py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

          <p className="text-[#9E9E9E] text-sm">
            All Rights Reserved Inkyy.com 2022
          </p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <div className="w-10 h-10 flex items-center justify-center bg-[#18181C] rounded-2xl hover:bg-white/10 transition">
              <Twitter size={16} className="text-[#FFFFFF] fill-white" />
            </div>

            <div className="w-10 h-10 flex items-center justify-center bg-[#18181C] rounded-2xl  hover:bg-white/10 transition">
              <Linkedin size={16} className="text-[#FFFFFF] fill-white" />
            </div>

            <div className="w-10 h-10 flex items-center justify-center bg-[#18181C] rounded-2xl  hover:bg-white/10 transition">
              <Github size={16}  className="text-[#FFFFFF] fill-white" />
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}
