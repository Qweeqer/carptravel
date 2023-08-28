import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="w-[61px] h-[33px] duration-300 hover:opacity-60 focus:opacity-60 cursor-pointer">
      <Link href="/" aria-label="CarpTravel logo">
        <Image src="/images/logo.svg" alt="Logo" width={61} height={33} />
      </Link>
    </div>
  );
}
