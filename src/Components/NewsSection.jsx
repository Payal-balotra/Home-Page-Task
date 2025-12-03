import React from "react";

const newsData = [
  {
    logo: "/line.png",
    text: "Ratan Tata-backed BlueStone valuation tops $410Mn latest round.",
    height: "h-5",
    margin:"mt-2",
    padding:"p-4"
  },
  {
    logo: "/times.png",
    text: "Ratan Tata-backed BlueStone valuation tops $410Mn latest round.",
     height: "h-12",
    
  },
  {
    logo: "/india.png",
    text: "Ratan Tata-backed BlueStone valuation tops $410Mn latest round.",
     height: "h-15",
     margin:"mb-6"
  },
  {
    logo: "/line.png",
    text: "Ratan Tata-backed BlueStone valuation tops $410Mn latest round.",
     height: "h-5",
     margin:"mt-2"
  },
];

export default function NewsSection() {
  return (
    <section className="w-full py-16 bg-white">
      {/* TITLE */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-4">
          <span className="h-0.5 w-16 bg-teal-700"></span>
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
            STAY UPDATE WITH US
          </h2>
          <span className="h-0.5 w-16 bg-teal-700"></span>
        </div>
        <p className="text-teal-700 text-xs md:text-sm mt-2 tracking-wide">
          KNOW ABOUT WHAT OTHERS THINK
        </p>
      </div>

      {/* NEWS CARDS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {newsData.map((item, i) => (
          <div
            key={i}
            className="border border-gray-300 rounded-2xl shadow-sm py-8 flex flex-col items-center text-center hover:shadow-lg transition-all h-80 justify-between"
          >
            <img
              src={item.logo}
              alt=""
              className={`${item.height} ${item.margin} ${item.padding}w-auto object-contain mx-auto `}
            />

            <p className="text-[11px] px-4 text-gray-600 leading-relaxed">
              {item.text}
            </p>

            <button className="bg-linear-to-r from-[#D7F0E3] to-[#EFFFF6] border border-teal-200 rounded-full px-6 py-2 text-[10px] text-gray-700 font-semibold tracking-wide hover:opacity-80">
              READ MORE
            </button>
          </div>
        ))}
      </div>

      {/* DISCOVER ALL BUTTON */}
      <div className="flex justify-center mt-10">
        <button className="flex items-center gap-2 text-teal-700 font-semibold hover:opacity-70">
          DISCOVER ALL
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="rgb(0,120,92)"
            strokeWidth="2"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
