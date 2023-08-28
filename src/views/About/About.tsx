import data from "@/data/about.json";

export default function About() {
  return (
    <section className="py-[55px] md:py-[64px] lg:py-[104px]" id="about">
      <div className="container md:relative">
        <div className="md:flex md:justify-between lg:justify-start lg:gap-[30px]">
          <h2 className="title xs:mb-[20px]">
            <span className="font-thin">{data.title.who}</span>
            {data.title.weAre}
          </h2>
          <div className="max-w-[180px] md:max-w-[225px] lg:max-w-[292px] mdOnly:ml-auto">
            <p className="font-extralight leading-[20px] lg:leading-[24px] text-[14px] md:text-[16px] lg:text-[18px] mb-[20px] md:mb-[16px] lg:mb-[24px]">
              <span className="font-normal">{data.descr.span1}</span>
              {data.descr.text1}
            </p>
            <p className="font-extralight leading-[20px] lg:leading-[24px] text-[14px] md:text-[16px] lg:text-[18px]">
              <span className="font-normal">{data.descr.span2}</span>
              {data.descr.text2}
            </p>
          </div>
        </div>

        <div className="xs:mt-[40px] lg:flex lg:flex-row-reverse lg:justify-between lg:mt-[72px]">
          <p className="block w-[180px] md:w-[221px] lg:w-[298px] xs:ml-auto text-[14px] md:text-[16px] lg:text-[18px] font-extralight mdOnly:absolute mdOnly:bottom-[188px] mdOnly:left-[32px] leading-[20px] lg:leading-[24px] ">
            <span className="block font-normal uppercase">
              {data.subtitle.span1}
            </span>
            <span className="block font-normal text-right uppercase">
              {data.subtitle.span2}
            </span>
            <span className="tracking-[-0.14px] md:tracking-[0.32px] lg:tracking-[2.16px]">
              {data.subtitle.text}
            </span>
          </p>
          <p className="block md:w-[463px] lg:w-[605px] text-[14px] md:text-[16px] lg:text-[18px] font-extralight leading-[20px] lg:leading-[24px] mt-[40px] md:mt-[64px] lg:mt-0 mdOnly:ml-auto">
            <span className="font-normal">{data.descr.span3}</span>
            {data.descr.text3}
          </p>
        </div>
      </div>
    </section>
  );
}
