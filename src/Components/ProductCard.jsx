import React from "react";

export default function ProductCard({ tag, productImg, detailsImg, colors = [] }) {
  const [selectedDot, setSelectedDot] = React.useState(null);

  return (
    <div className="shrink-0 w-48 sm:w-56 md:w-60 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all snap-start">

      {/* TAG + HEART */}
      <div className="flex justify-between p-3">
        <span className="text-[10px] px-2 py-1 rounded-md bg-teal-100 text-teal-700 font-semibold">
          {tag}
        </span>
        <img src="/wishlist.png" className="h-5 w-5" alt="" />
      </div>

      {/* PRODUCT IMAGE */}
      <img src={productImg} className="w-full h-32 object-contain" alt="" />

      {/* PRICE IMAGE */}
      <div className="px-3">
        <img src={detailsImg} className="w-[80%] mx-auto" alt="" />
      </div>

      {/* COLOR DOTS */}
      <div className="flex gap-2 px-3 mt-2">
        {colors?.map((c, i) => (
          <button
            key={i}
            onClick={() => setSelectedDot(i)}
            className={`h-4 w-4 rounded-full border ${
              selectedDot === i ? "ring-2 ring-teal-700" : ""
            }`}
            style={{ backgroundColor: c }}
          />
        ))}
      </div>

      {/* BUY NOW */}
      <div className="px-3 py-3">
        <button className="w-full py-2 bg-[#005B41] rounded-md text-white text-xs font-semibold flex items-center justify-center gap-2 hover:opacity-90">
          <img src="/cart-white.svg" className="h-3" alt="" />
          Buy Now
        </button>
      </div>

    </div>
  );
}
