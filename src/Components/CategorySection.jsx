import React from "react";

const categoriesTop = [
  { label: "RINGS", img: "/pink1.png" },
  { label: "EARRINGS", img: "/pink2.png" },
];

const categoriesBottom = [
  { label: "BRACELET", img: "/b1.png" },
  { label: "PENDANT", img: "/b2.png" },
  { label: "BANGLES", img: "/b3.png" },
  { label: "MANGALSUTRA", img: "/b4.png" },
];

export default function CategorySection() {
  return (
    <section className="w-full py-16 bg-white">

      {/* TITLE */}
      <div className="text-center mb-10">
        <div className="flex justify-center items-center gap-4">
          <span className="h-0.5 w-16 bg-teal-700" />
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 tracking-wide">
            CATEGORY
          </h2>
          <span className="h-0.5 w-16 bg-teal-700" />
        </div>
        <p className="text-teal-700 text-xs md:text-sm mt-1 tracking-wide">
          DISCOVER YOUR WORLD OF JEWELLERY
        </p>
      </div>

      {/* TOP 2 LARGE CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        {categoriesTop.map((c, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
          >
            <img src={c.img} alt={c.label} className="w-full object-cover" />
            <p className="text-center py-4 text-lg font-semibold text-gray-700 tracking-wide">
              {c.label}
            </p>
          </div>
        ))}
      </div>

      {/* BOTTOM 4 SMALL CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 px-6 mt-10">
        {categoriesBottom.map((c, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
          >
            <img src={c.img} alt={c.label} className="w-full h-56 object-cover" />
            <p className="text-center py-4 text-sm font-semibold text-gray-700 tracking-wide">
              {c.label}
            </p>
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
