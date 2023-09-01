import React from "react";

import { CareerTextListProps } from "@/types/interfaces";

function CareerTextList(props: CareerTextListProps) {
  const { textList } = props;

  return (
    <ul className="text-right mr-[99px] md:mr-0">
      {textList.map((item, idx) => (
        <li
          className="leading-[20px] lg:leading-[24px] mb-[16px] lg:flex lg:items-center lg:justify-between"
          key={idx}
        >
          <p className="text-[14px] md:text-[16px] lg:text-[18px] font-normal mb-[8px] lg:ml-auto lg:mr-[24px]">
            {item.subtitle}
          </p>
          <p className="text-[12px] font-extralight lg:w-[285px] lg:text-left">
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  );
}
export default CareerTextList;
