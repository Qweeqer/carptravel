import Image from "next/image";

import { SlideProps } from "@/types/interfaces";
import data from "@/data/offers.json";

const BG_IMAGE_SIZES = "100vw";
const SLIDE_IMAGE_WIDTH = 280;
const SLIDE_IMAGE_HEIGHT = 220;

export const Slide: React.FC<SlideProps> = ({
  bg_image,
  date,
  image,
  subtitle,
  descr,
}) => {
  return (
    <div className="relative h-full py-[54px] md:py-[64px] lg:py-[104px]">
      <Image
        className="absolute top-0 left-0 bottom-0 right-0 -z-10 object-cover object-center"
        src={bg_image.src}
        alt={bg_image.alt}
        fill
        quality={100}
        sizes={BG_IMAGE_SIZES}
      />
      <div className="container">
        <div className="mb:[14px] md:mb[40px] lg:mb[20px] md:flex md:gap-[170px] lg:gap-[162px] md:items-center">
          <h2 className="title xs:mb-[24px]">
            <span className="font-thin">{data.title.span1}</span>
            {data.title.span2}
          </h2>
          <p className="text-[43px] md:text-[67px] lg:text-[98px] font-thin text-end">
            {date.day}
            <span className="text-white/20">{date.month}</span>
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between md:gap-[20px] lg:gap-[332px]">
          <Image
            className="w-full md:w-[463px] md:h-[370px] lg:w-[608px] lg:h-[434px] xs:mb-[12px] object-cover object-center"
            src={image.src}
            alt={image.alt}
            width={SLIDE_IMAGE_WIDTH}
            height={SLIDE_IMAGE_HEIGHT}
            sizes={BG_IMAGE_SIZES}
          />
          <div className="w-full flex flex-col gap-[224px] md:gap-[34px] lg:gap-0 mdOnly:mt-[197px]">
            <p className="text-[12px] md:text-start font-extralight tracking-[2.4px] lg:hidden">
              {subtitle}
            </p>
            <p className="flex-grow lg:flex-grow-0 text-[14px] md:text-[13px] lg:text-[18px] font-extralight leading-[20px] lg:leading-[24px] lg:max-w-[293px] md:text-justify lg:mt-auto">
              {descr}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
