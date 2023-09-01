"use client";

import { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import data from "@/data/offers.json";
import Slide from "@/components/Slide";
import SliderButtons from "@/components/SliderButtons";

function Offers() {
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
        {data.slides.map((slide, idx) => (
          <li className="keen-slider__slide" key={idx}>
            <Slide {...slide} />
          </li>
        ))}
      </ul>

      {loaded && instanceRef.current && (
        <SliderButtons
          currentSlide={currentSlide}
          slides={data.slides}
          onButtonClick={(idx) => instanceRef.current?.moveToIdx(idx)}
        />
      )}
    </section>
  );
}

export default Offers;
