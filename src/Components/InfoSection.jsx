import React, { useState } from "react";

const faqItems = [
  "Buy Gold Jewellery Online in India",
  "Variety of options",
  "Pay as per your convenience",
  "Customize as you like",
  "Crowd-free Buying Diamond Jewellery Online in India",
];

export default function InfoSection() {
  const [openIndex, setOpenIndex] = useState(0); // first one open by default

  return (
    <section className="w-full py-14 bg-[#FBFFF9] border-t border-[#D7E5DF]">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

        {/* LEFT ACCORDION */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer text-sm font-medium flex items-center gap-2 text-gray-700"
              onClick={() => setOpenIndex(index)}
            >
              <img
                src={openIndex === index ? "/right-arrow.svg" : "/gray-arrow.svg"}
                className="h-3"
                alt=""
              />
              <span className={openIndex === index ? "text-teal-700" : ""}>
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Buy Gold Jewellery Online in India
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed mt-4">
            Buying Jewellery Online in India is becoming common these days.
            Though many people are still sceptical of doing so. Yet, the trend
            of shopping online for anything and everything is surging
            exponentially. Garnet Lanee is one among the many reputed brands
            that deliver all kinds of diamond and gold jewellery direct to your
            home – Rings, Necklaces, Bracelets, Pendants, et al.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed mt-4">
            History tells the folktales of the importance of jewellery in India.
            Running down through decades, trends and styles may have changed,
            but emotions attached emanates ditto affection and care.
          </p>
        </div>

      </div>

      {/* SOCIAL ICONS */}
      <div className="text-center mt-12">
        <p className="text-gray-600 text-xs tracking-wide mb-4">
          WE WOULD LOVE TO MEET YOU ON OUR HANDLES
        </p>

        <div className="flex justify-center gap-6 text-2xl">
          <a href="#"><img src="/facebook.png" className="h-6" /></a>
          <a href="#"><img src="/insta.png" className="h-6" /></a>
          <a href="#"><img src="/youtube.png" className="h-6" /></a>
        </div>
      </div>

    </section>
  );
}
