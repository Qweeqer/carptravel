"use client";

import { useState, useMemo } from "react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useWindowSize } from "@/hooks/useWindowSize";
import data from "@/data/gallery.json";

export default function Gallery() {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const size = useWindowSize();

  const { width } = size;

  const { imgWidth, imgHeight } = useMemo(() => {
    if (width && width >= 768 && width < 1280) {
      return { imgWidth: 415, imgHeight: 294 };
    } else if (width && width >= 1280) {
      return { imgWidth: 606, imgHeight: 429 };
    }
    return { imgWidth: 280, imgHeight: 187 };
  }, [width]);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLUListElement>({
    slides: { origin: "center", perView: 3, spacing: 24 },
    loop: true,
    created: () => setLoaded(true),
    slideChanged: () => {
      if (instanceRef.current?.track.details) {
        setCurrentSlide(instanceRef.current.track.details.rel);
      }
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
      className="relative py-[56px] md:py-[64px] lg:p-[80px]"
      id="gallery"
    >
      <div className="container">
        <h2 className="title mb-[24px] md:mb-[66px] lg:mb-[15px] text-center lg:text-left">
          <span className="font-thin">{data.title.span1}</span>
          {data.title.span2}
        </h2>
        <ul
          className="gallery_slider keen-slider h-full justify-center md:justify-start xs:min-h-screen xs:flex-col md:flex-row"
          ref={sliderRef}
        >
          {data.images.map((image, idx) => (
            <li
              key={idx}
              className={`keen-slider__slide ${
                idx === currentSlide ? "active-slide" : ""
              }`}
            >
              <div
                className={`image-wrapper ${
                  idx === currentSlide ? "" : "shrinked-slide"
                }`}
              >
                <Image
                  className="w-full h-auto"
                  src={image.src}
                  alt={image.alt}
                  width={imgWidth}
                  height={imgHeight}
                  quality={100}
                />
              </div>
            </li>
          ))}
        </ul>
        {loaded && instanceRef.current && (
          <div className="hidden md:flex justify-around lg:space-x-0 lg:justify-evenly lg:gap-[130px]">
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
        )}
      </div>
    </section>
  );
}
