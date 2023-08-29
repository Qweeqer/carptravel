import React from "react";

import data from "@/data/offers.json";

import { SliderButtonProps } from "@/types/interfaces";

const SliderButtons: React.FC<SliderButtonProps> = ({
  currentSlide,
  slides,
  onButtonClick,
}) => (
  <ul className="absolute top-[calc(50%+50px)] left-[calc(50%-150px)] sm:top-[calc(50%+80px)] sm:left-[calc(50%-180px)] md:top-[160px] md:left-[calc(50%+130px)] lg:top-[244px] lg:left-[calc(50%+25px)] flex flex-col items-start gap-[16px] lg:gap-[24px] w-[200px] md:w-[210px] lg:w-[260px] z-10">
    {data.buttons.map((button, idx) => (
      <li key={idx}>
        <button
          className={`uppercase relative text-left text-[20px] md:text-[22px] lg:text-[28px] leading-[0.8] font-extralight lg:w-[260px] hover:text-white focus:text-white cursor-pointer ${
            currentSlide === idx
              ? "text-white font-medium dotted flex items-center gap-[8px]"
              : "text-white/50"
          }`}
          onClick={() => onButtonClick(idx)}
        >
          {button}
          <span
            className={`hidden absolute top-[7px] left-[115%] normal-case lg:w-[290px] lg:text-[12px] lg:font-extralight lg:tracking-[2.4px] cursor-default ${
              currentSlide === idx ? "lg:block" : "lg:hidden"
            }`}
          >
            {slides[idx].subtitle}
          </span>
        </button>
      </li>
    ))}
  </ul>
);

export default SliderButtons;
