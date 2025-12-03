import React from "react";

export default function Offers() {
  return (
    <section className="w-full bg-white py-10 flex flex-col items-center">

      {/* Container of cards */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-center gap-6 md:gap-10 px-4">

        {/* EXPRESS DELIVERY */}
        <div className="flex-1 bg-white rounded-[40px] shadow-md py-6 px-6 flex items-center justify-between md:justify-around 
                        hover:shadow-lg transition-shadow">
          
          {/* TEXT */}
          <div className="flex flex-col text-left">
            <span className="text-gray-800 font-semibold text-xl md:text-2xl">EXPRESS</span>
            <span className="text-teal-700 font-semibold text-xl md:text-2xl">DELIVERY</span>
          </div>

          {/* IMAGE */}
          <img
            src="/truck.png"
            alt="Express Delivery"
            className="h-20 w-auto md:h-28 object-contain"
          />
        </div>

        {/* SPECIAL DISCOUNT */}
        <div className="flex-1 bg-white rounded-[40px] shadow-md py-6 px-6 flex items-center justify-between md:justify-around 
                        hover:shadow-lg transition-shadow">
          
          {/* TEXT */}
          <div className="flex flex-col text-right md:text-left">
            <span className="text-gray-800 font-semibold text-xl md:text-2xl">SPECIAL</span>
            <span className="text-teal-700 font-semibold text-xl md:text-2xl">DISCOUNT</span>
          </div>

          {/* IMAGE */}
          <img
            src="/giftpack.png"
            alt="Special Discount"
            className="h-20 w-auto md:h-28 object-contain"
          />
        </div>

      </div>

      {/* COLLECTION TITLE */}
      <div className="text-center mt-10">
        <div className="flex justify-center items-center gap-4">
          <span className="h-0.5 w-16 bg-teal-700"></span>
          <span className="text-gray-700 font-medium tracking-wide text-sm md:text-base">
            COLLECTIONS
          </span>
          <span className="h-0.5 w-16 bg-teal-700"></span>
        </div>

        <p className="text-teal-700 font-medium tracking-wide mt-1 text-xs md:text-sm">
          DISCOVER YOUR WORLD OF JEWELLERY
        </p>
      </div>

    </section>
  );
}
