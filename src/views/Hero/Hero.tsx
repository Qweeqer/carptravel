import Button from "@/components/Button";
import data from "@/data/hero.json";
import btnData from "@/data/buttons.json";

export default function Hero() {
  return (
    <section
      className="pt-[105px] pb-[56px] md:pt-[122px] md:pb-[64px] lg:pt-[130px] lg:pb-[104px]"
      id="hero"
    >
      <div className="container md:flex md:gap-[48px] lg:gap-[285px]">
        <div className="md:hidden flex flex-col items-end mb-[24px]">
          <p className="text-[37px] font-thin uppercase tracking-[1.66px] leading-none">
            <span className="font-medium">{data.title.number}</span>
            {data.title.days}
          </p>
          <p className="text-[12px] font-light uppercase tracking-[9.48px] leading-none">
            {data.title.journey}
          </p>
        </div>

        <div className="w-[280px] md:w-[426px] lg:w-[646px]">
          <h1 className="title mb-[24px] md:mb-[68px] lg:mb-[148px]">
            {data.title.span1}
            <span className="font-thin">{data.title.span2}</span>
          </h1>
          <p className="text-[10px] md:text-[14px] lg:text-[16px] font-extralight leading-[16px] lg:leading-[24px] md:tracking-[1.26px] lg:tracking-[1.44px] max-w-[157px] md:max-w-[265px] lg:max-w-[608px] mb-[24px]">
            {data.descr.places}
          </p>
        </div>

        <div className="md:w-[230px] lg:w-[294px]">
          <div className="hidden md:flex md:flex-col md:items-end md:mb-[56px] lg:mb-[181px]">
            <p className="text-[67px] lg:text-[98px] font-thin tracking-[8.71px] uppercase leading-none">
              <span className="font-medium">{data.title.number}</span>
              {data.title.days}
            </p>
            <p className="md:text-[14px] lg:text-[16px] font-light tracking-[25px] lg:tracking-[36.48px] uppercase leading-none">
              {data.title.journey}
            </p>
          </div>
          <p className="font-extralight text-justify md:text-[16px] lg:text-[18px] leading-[20px] lg:leading-[24px] mb-[24px] md:mb-[28px]">
            {data.descr.text}
          </p>
          <Button>
            <span>{btnData.joinNow}</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
