import React from "react";

const genderData = [
  { label: "WOMEN", img: "/women.png" },
  { label: "MEN", img: "/men.png" },
  { label: "KIDS", img: "/kids.png" },
  { label: "UNISEX", img: "/uni.png" },
];

export default function ShopByGender() {
  return (
    <section className="w-full py-16 bg-[#FFF9F0]">

      {/* SECTION TITLE */}
      <div className="text-center mb-10">
        <div className="flex justify-center items-center gap-4">
          <span className="h-0.5 w-16 bg-teal-700"></span>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 tracking-wide">
            SHOP BY GENDER
          </h2>
          <span className="h-0.5 w-16 bg-teal-700"></span>
        </div>
        <p className="text-teal-700 text-xs md:text-sm mt-1 tracking-wide">
          DISCOVER YOUR WORLD OF JEWELLERY
        </p>
      </div>

      {/* GENDER GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 px-6">
        {genderData.map((item, i) => (
          <div
            key={i}
            className="relative bg-[#F5EEDB] rounded-xl shadow-md hover:shadow-xl overflow-hidden cursor-pointer aspect-square flex items-center justify-center"
          >
            {/* BACKGROUND IMAGE */}
            <img
              src={item.img}
              alt={item.label}
              className="absolute inset-0 w-full h-full object-contain p-6"
            />

          
          </div>
        ))}
      </div>

      {/* DISCOVER ALL BUTTON */}
      <div className="flex justify-center mt-10">
        <button className="flex items-center gap-2 text-teal-700 font-semibold tracking-wide hover:opacity-80">
          DISCOVER ALL
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke="rgb(0,120,92)" strokeWidth="2"
            className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
