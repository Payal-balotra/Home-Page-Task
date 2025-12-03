import React, { useState } from "react";

export default function EmailSignup() {
  const [gender, setGender] = useState("");

  return (
    <section className="w-full py-16 bg-[#FFF9F0]">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-gray-900 font-semibold text-lg md:text-2xl tracking-wide">
          SIGN UP TO BE A GARNET LANEE INSIDER
        </h2>

        {/* SUBTITLE */}
        <p className="text-gray-600 text-xs md:text-sm mt-2 leading-relaxed max-w-xl">
          Get promotions, inspirations and the latest news about brands and jewellery items directly in your inbox.
        </p>

        {/* FORM */}
        <div className="mt-6 flex flex-col md:flex-row items-center gap-4">

          {/* EMAIL INPUT */}
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 border border-gray-300 rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-teal-700 text-sm placeholder-gray-500"
          />

          {/* SUBMIT BUTTON */}
          <button className="bg-[#005943] text-white py-3 px-10 rounded-full text-xs md:text-sm tracking-wide font-semibold hover:opacity-90 transition-all">
            SUBMIT
          </button>
        </div>

        {/* GENDER SELECTION */}
        <div className="flex items-center gap-10 mt-6 text-sm text-gray-700">

          {/* FEMALE */}
          <label
            className="flex items-center gap-2 cursor-pointer select-none"
            onClick={() => setGender("female")}
          >
            <img src="/female.svg" className="h-4 opacity-80" alt="" />
            <span className={`${gender === "female" ? "text-teal-700 font-semibold" : ""}`}>
              Female
            </span>
          </label>

          {/* MALE */}
          <label
            className="flex items-center gap-2 cursor-pointer select-none"
            onClick={() => setGender("male")}
          >
            <img src="/male.svg" className="h-4 opacity-80" alt="" />
            <span className={`${gender === "male" ? "text-teal-700 font-semibold" : ""}`}>
              Male
            </span>
          </label>

        </div>
      </div>
    </section>
  );
}
