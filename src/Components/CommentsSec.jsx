import React, { useState } from "react";

const reviews = [
  {
    name: "Himesh",
    date: "May 25, 2022",
    review:
      "Talk about a range of elements, including customer service. Be detailed, specific, and honest. Leave out links and personal information.",
    rating: 3,
  },
  {
    name: "Himesh",
    date: "May 25, 2022",
    review:
      "Talk about a range of elements, including customer service. Be detailed, specific, and honest. Leave out links and personal information.",
    rating: 4,
  },
  {
    name: "Himesh",
    date: "May 25, 2022",
    review:
      "Talk about a range of elements, including customer service. Be detailed, specific, and honest. Leave out links and personal information.",
    rating: 2,
  },
];

export default function CustomerReviews() {
  return (
    <section className="w-full py-16 bg-[#FFFDF7]">

      {/* TITLE */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-4 border-b-2 border-teal-700 pb-1">
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
            CUSTOMER REVIEWS
          </h2>
        </div>
        <p className="text-teal-700 text-xs md:text-sm mt-2 tracking-wide">
          KNOW ABOUT WHAT OTHERS THINK
        </p>
      </div>

      {/* REVIEWS GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {reviews.map((r, i) => (
          <ReviewCard key={i} {...r} />
        ))}
      </div>

      {/* READ MORE BUTTON */}
      <div className="flex justify-center mt-10">
        <button className="flex items-center gap-2 text-teal-700 font-semibold hover:opacity-70">
          READ MORE
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

function ReviewCard({ name, date, review, rating }) {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="bg-white shadow-md rounded-3xl p-6 relative border border-gray-200">

      {/* QUOTES ICON */}
      <img src="/coma.png" alt="" className="absolute top-6 right-6 h-8 opacity-70" />

      {/* NAME + DATE */}
      <h3 className="text-gray-800 font-semibold text-sm">{name}</h3>
      <p className="text-xs text-teal-500 mb-4">{date}</p>

      {/* REVIEW TEXT */}
      <p className="text-gray-600 text-xs leading-relaxed h-24">
        {review}
      </p>

      {/* GOOGLE ICON + STAR RATING */}
      <div className="flex items-center justify-between mt-5">
        <img src="/google.png" className="h-4" alt="google-review" />

       <div className="flex gap-1">
  {[1, 2, 3, 4, 5].map((star) => {
    const isRated = star <= rating; // stars that should be blue
    const isHover = star <= hovered; // stars under hover effect

    return (
      <div
        key={star}
        onMouseEnter={() => setHovered(star)}
        onMouseLeave={() => setHovered(0)}
        className={`
          h-5 w-5 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer
          ${isHover ? "scale-110 border-teal-600" : "border-gray-300"}
          border
        `}
      >
        <img
          src={isRated ? "/blue-star.svg" : "/white-star.png"}
          alt="star"
          className="h-3 w-3 pointer-events-none"
        />
      </div>
    );
  })}
</div>

      </div>
    </div>
  );
}
