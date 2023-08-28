import data from "@/data/career.json";
import Form from "@/components/Form";

export default function Career() {
  return (
    <section className="py-[56px] md:py-[64px] lg:py-[104px]" id="career">
      <div className="container">
        <div className="mb-[36px] md:mb-[12px] lg:mb-[24px] md:flex md:items-center">
          <h2 className="title leading-[56px] mb-[24px] md:mb-0">
            <span className="font-thin">{data.title.span1}</span>
            {data.title.span2}
          </h2>
          <p className="text-[14px] md:text-[13px] lg:text-[18px] font-extralight md:text-justify leading-[20px] lg:leading-[24px] ml-[101px] md:ml-[115px] lg:ml-auto md:w-[222px] lg:w-[293px]">
            {data.descr.top}
          </p>
        </div>

        <div className="md:flex md:gap-[20px]">
          <div className="mb-[56px] md:w-[221px] lg:w-[625px]">
            <h3 className="text-[30px] lg:text-[36px] font-extralight uppercase mb-[36px] md:mb-[56px] lg:mb-[45px] ml-[100px] md:ml-0 mdOnly:text-right lg:ml-[147px]">
              {data.title.span3}
            </h3>
            <ul className="text-right mr-[99px] md:mr-0">
              {data.text.map((item, idx) => (
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
          </div>

          <div className="md:pt-[100px] lg:pt-[8px]">
            <div className="text-[14px] md:text-[13px] lg:text-[18px] leading-[20px] lg:leading-[24px] font-extralight ml-[101px] md:ml-0 mb-[24px] md:w-[221px] lg:w-[234px]">
              <p>{data.descr.bottom1}</p>
              <p>{data.descr.bottom2}</p>
            </div>

            <Form extended={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
