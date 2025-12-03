import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

export default function ProductSection({ title, filterKey }) {

  const filteredProducts = products.filter(p => p.category === filterKey);

  return (
    <section className="w-full bg-white py-14">

      {/* TITLE */}
      <div className="text-center mb-10">
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

      {/* PRODUCT ROW */}
      <div className="flex gap-6 overflow-x-auto no-scrollbar px-4 md:px-6 snap-x snap-mandatory scroll-smooth">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>

      {/* DISCOVER ALL */}
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
