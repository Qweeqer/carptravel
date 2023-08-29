import data from "@/data/contacts.json";

import Form from "@/components/Form";
import ContactList from "@/components/ContactList";


export default function Contacts() {
  const { title, phone, email, social } = data;

  return (
    <section className="py-[40px] md:py-[80px] lg:py-[100px]" id="contacts">
      <div className="container">
        <h2 className="title mb-[49px] lg:mb-[86px]">
          <span className="font-thin">{title.span1}</span>
          {title.span2}
        </h2>

        <div className="lg:flex lg:justify-between">
          <div className="flex flex-col gap-[22px] md:justify-center lg:justify-between mb-[22px] md:mb-[61px] lg:mb-0 mdOnly:flex-row mdOnly:gap-[89px]">
            <ContactList contacts={phone.numbers} description={phone.text} />
            <ContactList
              contacts={[{ name: email.email, url: `mailto:${email.email}` }]}
              description={email.text}
            />

            <div className="flex gap-[20px] flex-row-reverse lg:flex-row lg:justify-end">
              <ul className="w-[100px]">
                {social.links.map((link, idx) => (
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
                {social.text}
              </p>
            </div>
          </div>

          <Form extended={false} />
        </div>
      </div>
    </section>
  );
}
