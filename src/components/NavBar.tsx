"use client";

import { useEffect, useState } from "react";

import data from "@/data/buttons.json";
import Navigation from "./Navigation";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    mobileMenuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [mobileMenuOpen]);

  return (
    <div>
      <button
        className="uppercase md:hidden"
        type="button"
        onClick={toggleMobileMenu}
      >
        {data.menu}
      </button>
      <div
        className={`xs:absolute xs:z-20 xs:bg-bgMobile/75 xs:backdrop-blur-[25px] ${
          mobileMenuOpen
            ? "xs:disable-scroll xs:fixed xs:left-0 xs:top-0 xs:w-screen xs:min-h-screen"
            : "xs:static xs:hidden"
        }`}
      >
        <div className="relative flex flex-col items-center justify-center xs:w-full xs:h-screen">
          <button
            className="uppercase absolute top-0 right-0 mt-[43px] mr-[20px] md:hidden"
            type="button"
            onClick={closeMobileMenu}
          >
            {data.close}
          </button>
          <Navigation onClick={closeMobileMenu} />
        </div>
      </div>
    </div>
  );
}
