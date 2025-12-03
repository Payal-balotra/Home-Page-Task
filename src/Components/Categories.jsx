import { useRef } from "react";
import categories from "../data/categories";
import React from "react";

export default function Categories() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white py-10 relative mt-2">

      {/* LEFT ARROW */}
      <button
        onClick={scrollLeft}
        className="hidden md:flex absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 z-20 
                   bg-white rounded-full shadow-md p-2 hover:scale-110 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="rgb(0,120,92)"  /* GEMLAY GREEN */
          strokeWidth="3"
          className="h-8 w-8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* CATEGORY LIST */}
   <div
  ref={scrollRef}
  className="flex gap-14 overflow-x-auto no-scrollbar scroll-smooth pl-20 pr-12 lg:pl-32 lg:pr-20"
>
  {categories.map((item, index) => (
    <div
      key={index}
      className="flex flex-col items-center cursor-pointer shrink-0 group"
    >
      <div className="h-24 w-24 lg:h-28 lg:w-28 border-[3px] border-teal-700 rounded-full flex justify-center items-center group-hover:scale-105 transition-transform">
        <img src={item.img} alt={item.label} className="h-16 w-16 object-contain" />
      </div>

      <span className="mt-2 text-xs lg:text-sm font-medium text-gray-700">
        {item.label}
      </span>

      <span className="w-4 h-[3px] bg-teal-700 rounded-full mt-1 opacity-0 group-hover:opacity-100 transition-opacity"></span>
    </div>
  ))}
</div>


      {/* RIGHT ARROW */}
      <button
        onClick={scrollRight}
        className="hidden md:flex absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 z-20 
                   bg-white rounded-full shadow-md p-2 hover:scale-110 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="rgb(0,120,92)"
          strokeWidth="3"
          className="h-8 w-8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </section>
  );
}
