"use client";

import { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

import data from "@/data/gallery.json";

export default function Gallery() {
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLUListElement>({
    slides: { origin: "center", perView: 2, spacing: 24 },
    loop: true,
    created() {
      setLoaded(true);
    },
    breakpoints: {
      "(max-width: 767px)": {
        vertical: true,
        slides: { origin: "center", perView: 3, spacing: 24 },
      },
    },
  });

  return (
    <section
      className="relative min-h-screen py-[56px] md:py-[64px] lg:py-[80px]"
      id="gallery"
    >
      <div className="container">
        <h2 className="title mb-[24px] md:mb-[66px] lg:mb-[15px] text-center lg:text-left">
          <span className="font-thin">{data.title.span1}</span>
          {data.title.span2}
        </h2>
        <ul className="gallery_slider keen-slider h-full" ref={sliderRef}>
          {data.images.map((image, idx) => (
            <li className="keen-slider__slide" key={idx}>
              <Image
                className="w-full h-auto"
                src={image.src}
                alt={image.alt}
                width={280}
                height={187}
                quality={100}
              />
            </li>
          ))}
        </ul>

        {loaded && instanceRef.current ? (
          <div className="hidden md:flex md:gap-[459px] lg:gap-[651px] absolute top-[86%] left-[50%] transform -translate-x-1/2 lg:top-[78%]">
            <button
              className="text-[33px] font-thin leading-normal uppercase duration-300 hover:opacity-50 focus:opacity-50 border-b border-b-transparent hover:border-b-white focus:border-b-white"
              onClick={() => instanceRef.current?.prev()}
            >
              {data.buttons.back}
            </button>
            <button
              className="text-[33px] font-thin leading-normal uppercase duration-300 hover:opacity-50 focus:opacity-50 border-b border-b-transparent hover:border-b-white focus:border-b-white"
              onClick={() => instanceRef.current?.next()}
            >
              {data.buttons.next}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
