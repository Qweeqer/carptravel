// Checkbox.tsx
import React from "react";
import data from "@/data/form.json";
import InputError from "./InputError";

import { CheckboxProps } from "@/types/interfaces";

function Checkbox(props: CheckboxProps) {
  const { register, errors, checked, setChecked } = props;

  return (
    <div className="relative md:absolute md:top-0 md:-left-[242px] lg:-left-[314px] flex items-start gap-[8px] text-[12px] font-extralight leading-[22px] mb-[16px] lg:mb-[24px] group">
      <div className="flex items-center justify-center w-[22px] h-[22px] lg:w-[24px] lg:h-[24px] border border-white">
        <div
          className={`${checked
              ? "bg-white"
              : "bg-white/10 duration-300 group-hover:bg-white/50 group-focus:bg-white/50"
            } w-[14px] h-[14px] lg:w-[16px] lg:h-[16px]`}
        >
          <input
            className="absolute top-0 bottom-0 left-0 right-0 cursor-pointer opacity-0"
            type="checkbox"
            onClick={() => setChecked(!checked)}
            {...register("checked", {
              required: data.errors.notEmpty,
            })}
          />
          {errors.checked ? <InputError text={errors.checked?.message} /> : null}
        </div>
      </div>
      <p className="inline-block md:w-[192px] lg:w-[258px]">{data.confirm}</p>
    </div>
  );
}

export default Checkbox;
