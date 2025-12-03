import React from "react";
import collections from "../data/collections";

export default function Collections() {
  return (
    <section className="w-full bg-white py-12 flex flex-col items-center">

      {/* GRID OF IMAGE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl px-6">
        {collections.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.03] transition-transform cursor-pointer"
          >
            <img
              src={item.img}
              alt={`collection-${index}`}
              className="w-full h-52 lg:h-56 object-cover"
            />
          </div>
        ))}
      </div>

      {/* DISCOVER ALL BUTTON */}
      <button className="mt-12 flex items-center gap-2 text-teal-700 font-semibold tracking-wide hover:opacity-80 transition-opacity">
        DISCOVER ALL
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="rgb(0,120,92)" strokeWidth="2" className="h-4 w-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </section>
  );
}
