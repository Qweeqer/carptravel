"use client";

import { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import data from "@/data/offers.json";
import { ISlideProps } from "@/types/interfaces";
import Slide from "@/components/Slide";

export default function Offers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    defaultAnimation: { duration: 2000 },
    slides: { origin: "center", perView: 1 },
  });

  return (
    <section className="relative" id="services">
      <ul className="keen-slider" ref={sliderRef}>
        {data.slides.map((slide: ISlideProps) => (
          <li className="keen-slider__slide" key={slide.id}>
            <Slide {...slide} />
          </li>
        ))}
      </ul>

      {loaded && instanceRef.current ? (
        <ul className="absolute top-[calc(50%+50px)] left-[calc(50%-150px)] sm:top-[calc(50%+80px)] sm:left-[calc(50%-180px)] md:top-[160px] md:left-[calc(50%+130px)] lg:top-[244px] lg:left-[calc(50%+25px)] flex flex-col items-start gap-[16px] lg:gap-[24px] w-[200px] md:w-[210px] lg:w-[260px] z-10">
          {data.buttons.map((button, idx) => (
            <li key={idx}>
              <button
                className={`${
                  currentSlide === idx
                    ? "text-white font-medium dotted flex items-center gap-[8px]"
                    : " text-white/50"
                } uppercase relative text-left text-[20px] md:text-[22px] lg:text-[28px] leading-[0.8] font-extralight lg:w-[260px] hover:text-white focus:text-white cursor-pointer`}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
              >
                {button}
                <span
                  className={`${
                    currentSlide === idx ? "lg:block" : "lg:hidden"
                  } hidden absolute top-[7px] left-[115%] normal-case lg:w-[290px] lg:text-[12px] lg:font-extralight lg:tracking-[2.4px] cursor-default`}
                >
                  {data.slides[idx].subtitle}
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
