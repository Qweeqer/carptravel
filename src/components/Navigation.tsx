import { Link } from "react-scroll";

import { Navigate } from "@/types/interfaces";
import data from "@/data/navigation.json";

const LINK_PROPS = {
  smooth: true,
  spy: true,
  hashSpy: true,
  duration: 600,
};

function Navigation({ onClick }: Navigate) {
  return (
    <nav>
      <ul className="flex flex-col md:flex-row gap-[48px] md:gap-[24px] lg:gap-[56px] items-center justify-center">
        {data.map((item) => (
          <li key={item.id}>
            <Link
              className="text-[18px] md:text-[14px] font-normal tracking-[1.4px] border-b border-b-transparent duration-300 hover:border-b-white focus:border-b-white cursor-pointer"
              to={item.link}
              href="/"
              onClick={onClick}
              {...LINK_PROPS}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
