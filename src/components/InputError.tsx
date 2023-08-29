import Image from "next/image";

import errorIcon from "../../public/images/error.svg";
import { InputErrorProps } from "@/types/interfaces";

const InputError: React.FC<InputErrorProps> = ({ text }) => {
  if (!text) return null;
  return (
    <div className="absolute bottom-[-24px] right-0 flex items-center gap-[4px] justify-end">
      <Image
        src={errorIcon}
        alt="Error"
        width={18}
        height={18}
        aria-label="Error"
      />
      <span className="inputWarn">{text}</span>
    </div>
  );
};

export default InputError;
