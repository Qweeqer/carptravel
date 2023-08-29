import React from "react";

import { ContactListProps } from "@/types/interfaces";

const ContactList: React.FC<ContactListProps> = ({ contacts, description }) => (
  <div className="flex justify-end gap-[20px]">
    <ul className="flex flex-col gap-[4px] text-[14px] md:text-[16px] lg:text-[18px] font-normal">
      {contacts.map((contact, idx) => (
        <li key={idx}>
          <a
            className="duration-300 hover:border-b focus:border-b"
            href={contact.url}
          >
            {contact.name}
          </a>
        </li>
      ))}
    </ul>
    <p className="w-[100px] text-[12px] font-extralight leading-[1.6]">
      {description}
    </p>
  </div>
);

export default ContactList;
