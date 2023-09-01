import data from "@/data/contacts.json";
import Form from "@/components/Form";

function Contacts() {
  return (
    <section className="py-[40px] md:py-[80px] lg:py-[100px]" id="contacts">
      <div className="container">
        <h2 className="title mb-[49px] lg:mb-[86px]">
          <span className="font-thin">{data.title.span1}</span>
          {data.title.span2}
        </h2>

        <div className="lg:flex lg:justify-between">
          <div className="flex flex-col gap-[22px] md:justify-center lg:justify-between mb-[22px] md:mb-[61px] lg:mb-0 mdOnly:flex-row mdOnly:gap-[89px]">
            <div className="flex flex-col gap-[22px]">
              <div className="flex justify-end gap-[20px]">
                <ul className="flex flex-col gap-[4px] text-[14px] md:text-[16px] lg:text-[18px] font-normal">
                  {data.phone.numbers.map((number, idx) => (
                    <li key={idx}>
                      <a
                        className="duration-300 hover:border-b focus:border-b"
                        href={number.url}
                      >
                        {number.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="w-[100px] text-[12px] font-extralight leading-[1.6]">
                  {data.phone.text}
                </p>
              </div>

              <div className="flex justify-end items-center gap-[20px] text-[14px] font-normal md:text-[16px] lg:text-[18px]">
                <a
                  className="duration-300 hover:border-b focus:border-b"
                  href={`mailto:${data.email.email}`}
                >
                  <p>{data.email.email}</p>
                </a>
                <p className="w-[100px] text-[12px] font-extralight leading-[1.6]">
                  {data.email.text}
                </p>
              </div>
            </div>

            <div className="flex gap-[20px] flex-row-reverse lg:flex-row lg:justify-end">
              <ul className="w-[100px]">
                {data.social.links.map((link, idx) => (
                  <li
                    className="text-[14px] font-normal md:text-[16px] lg:text-[18px]"
                    key={idx}
                  >
                    <a
                      className="duration-300 hover:border-b focus:border-b"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-[12px] font-extralight leading-[1.6] lg:w-[100px]">
                {data.social.text}
              </p>
            </div>
          </div>

          <Form extended={false} />
        </div>
      </div>
    </section>
  );
}

export default Contacts;
