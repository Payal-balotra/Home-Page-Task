import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

export default function ProductSection({ title, filterKey }) {

  const filteredProducts = products.filter(p => p.category === filterKey);

  return (
    <section className="w-full bg-white py-14">

      {/* Title centered */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <div className="flex justify-center items-center gap-4">
            <span className="h-0.5 w-16 bg-teal-700" />
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 tracking-wide">
              {title}
            </h2>
            <span className="h-0.5 w-16 bg-teal-700" />
          </div>
          <p className="text-teal-700 text-xs md:text-sm mt-1 tracking-wide">
            DISCOVER YOUR WORLD OF JEWELLERY
          </p>
        </div>
      </div>

      {/* PRODUCT ROW - centered container with padding on sides */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-4">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>

      {/* DISCOVER ALL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center mt-10">
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
