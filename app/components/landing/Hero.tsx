import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-32 overflow-hidden bg-black text-white min-h-screen flex flex-col items-center">
      
      <div className="absolute top-[30%] left-[2%] w-32.5 h-32.5  mix-blend-screen pointer-events-none">
        <Image src="/images/Ellipse 13.png" alt="Orb" width={300} height={300} className="" />
      </div>

      <div className="absolute top-[20%] right-[5%] w-24 h-24  mix-blend-screen pointer-events-none">
        <Image src="/images/Ellipse 13.png" alt="Orb" width={200} height={200} className="" />
      </div>

      <div className="absolute top-[5%] center-[15%] w-16 h-16  mix-blend-screen pointer-events-none">
        <Image src="/images/Ellipse 13.png" alt="Orb" width={150} height={150} className="" />
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-175 bg-linear-to-b from-purple-900/20 to-transparent rounded-[50%] blur-3xl pointer-events-none" />
      
      <div className="container mt-13 font-[Manrope] px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          Beautiful Landing Page <br /> Design for You
        </h1>
        <p className="text-gray-400 max-w-md mx-auto mb-10 text-lg">
          A good design is not only aesthetically pleasing but also functional. 
          It should be able to solve the problem.
        </p>
        
        <button className="px-8 py-3 bg-linear-to-r from-[#FF8FB5] to-[#8B5CF6] rounded-[5px] font-semibold hover:opacity-90 transition shadow-lg shadow-purple-500/20">
          Download Template
        </button>

        <div className="relative bg-[#0F1117] rounded-[40px] mt-14 mx-15 p-10 w-275 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">

          <div className="grid grid-cols-3 gap-8">

            <div className="bg-[#1A1D25] rounded-3xl p-6 h-105 flex flex-col justify-between">
              <div className="space-y-4">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="h-3 bg-white/10 rounded"></div>
                ))}
              </div>

              <div className="flex justify-center">
                <div className="w-16 h-16 bg-pink-400 rounded-full"></div>
              </div>
            </div>

            <div className="bg-[#1A1D25] rounded-3xl p-6 h-50 flex items-center justify-center">
              <div className="w-28 h-28 rounded-full border-8 border-pink-400 border-r-purple-500 border-b-purple-500 border-l-pink-400"></div>
            </div>

            <div className="bg-[#1A1D25] rounded-3xl p-6 h-105 space-y-6">
              {[1,2,3].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-white/10 rounded"></div>
                    <div className="h-3 bg-white/5 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#1A1D25] rounded-3xl p-6 h-50 flex items-end gap-4 col-span-2">
              {[20,40,60,80,100].map((h,i) => (
                <div
                  key={i}
                  className="w-6 rounded-full bg-linear-to-t from-pink-400 to-purple-500"
                  style={{ height: `${h}px` }}
                ></div>
              ))}
            </div>

            <div className="bg-[#1A1D25] rounded-3xl h-50"></div>

          </div>

        </div>

      </div>

      <Image src="/images/Subtract.png" alt="Subtract" width={1446} height={474.4} className="absolute bottom-0 w-full h-75  pointer-events-none" />

    </section>
  );
}