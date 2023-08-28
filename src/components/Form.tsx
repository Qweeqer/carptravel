"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import toast, { Toaster } from "react-hot-toast";

import { IFormData } from "@/types/interfaces";
import data from "@/data/form.json";
import InputError from "./InputError";

export default function Form({ extended }: { extended: boolean }) {
  const [checked, setChecked] = useState(false);
  const isBrowser = typeof window !== "undefined";
  const SESSION_KEY = "form";

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    console.log(data);
    toast.success("Sent successfully!");
    setChecked(false);
    reset();
  };

  useFormPersist(SESSION_KEY, {
    watch,
    setValue,
    storage: isBrowser ? localStorage : undefined,
  });

  return (
    <>
      <form
        className={`${
          extended ? "lg:flex-row lg:gap-[24px]" : "lg:flex-col lg:gap-[42px]"
        } flex flex-col gap-[24px] md:gap-[20px] mdOnly:flex-row w-full lg:max-w-[608px] leading-[24px]`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className={`${
            extended
              ? "lg:flex-col md:gap-[16px] lg:gap-[26px] lg:w-[290px]"
              : "lg:flex-row md:gap-[28px] lg:gap-[20px] lg:w-full"
          } flex flex-col gap-[25px] w-full mdOnly:w-[221px]`}
        >
          <label className="relative block w-full text-[12px] font-extralight tracking-[2.4px]">
            {data.fields.name}
            <input
              className="input"
              type="text"
              placeholder={data.placeholders.name}
              {...register("fullName", {
                required: data.errors.notEmpty,
                pattern: {
                  value: /^[a-zа-яієїґ0-9_ \']+$/i,
                  message: data.errors.name,
                },
                minLength: { value: 2, message: "2 characters minimum" },
                maxLength: {
                  value: 50,
                  message: "Too long (max 50 characters)",
                },
              })}
            />
            {errors.fullName ? (
              <InputError text={errors.fullName?.message} />
            ) : null}
          </label>

          <label className="relative block w-full text-[12px] font-extralight tracking-[2.4px]">
            {data.fields.email}
            <input
              className="input"
              type="email"
              placeholder={data.placeholders.email}
              {...register("email", {
                required: data.errors.notEmpty,
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: data.errors.email,
                },
              })}
            />
            {errors.email ? <InputError text={errors.email?.message} /> : null}
          </label>

          {extended ? (
            <>
              <label className="relative block w-full text-[12px] font-extralight tracking-[2.4px]">
                {data.fields.position}
                <input
                  className="input"
                  type="text"
                  placeholder={data.placeholders.position}
                  {...register("position", {
                    required: data.errors.notEmpty,
                    minLength: { value: 2, message: "2 characters minimum" },
                    maxLength: {
                      value: 50,
                      message: "Too long (max 50 characters)",
                    },
                  })}
                />
                {errors.position ? (
                  <InputError text={errors.position?.message} />
                ) : null}
              </label>

              <label className="relative block w-full text-[12px] font-extralight tracking-[2.4px]">
                {data.fields.phone}
                <span className="absolute left-[8px] bottom-0 lg:bottom-[2px] text-[13px] lg:text-[20px] tracking-[1px]">
                  {data.placeholders.phoneCode}
                </span>
                <input
                  className="input pl-[50px] lg:pl-[60px] tracking-[1px]"
                  type="tel"
                  placeholder={data.placeholders.phone}
                  {...register("phone", {
                    required: data.errors.notEmpty,
                    minLength: { value: 10, message: data.errors.phone },
                    maxLength: { value: 10, message: data.errors.phone },

                    pattern: {
                      value: /^[0-9]+$/,
                      message: data.errors.phone,
                    },
                  })}
                />
                {errors.phone ? (
                  <InputError text={errors.phone?.message} />
                ) : null}
              </label>
            </>
          ) : null}
        </div>

        <div>
          <label className="relative block w-full text-[12px] leading-loose font-extralight tracking-[2.4px] mb-[16px] lg:mb-[24px]">
            {data.fields.message}
            <textarea
              className={`${
                extended
                  ? "md:w-[221px] lg:w-[268px] lg:h-[268px]"
                  : "md:w-[463px] lg:w-[607px] lg:h-[174px]"
              } input h-[193px] md:h-[221px] resize-none`}
              maxLength={200}
              cols={20}
              rows={8}
              {...register("message", {
                required: data.errors.notEmpty,
                minLength: {
                  value: 5,
                  message: "5 characters minimum",
                },
                maxLength: {
                  value: 200,
                  message: "Too long (max 200 characters)",
                },
              })}
            />
            {errors.message ? (
              <InputError text={errors.message?.message} />
            ) : null}
          </label>

          <div className="relative md:flex md:justify-between">
            {extended ? (
              <div className="relative md:absolute md:top-0 md:-left-[242px] lg:-left-[314px] flex items-start gap-[8px] text-[12px] font-extralight leading-[22px] mb-[16px] lg:mb-[24px] group">
                <div className="flex items-center justify-center w-[22px] h-[22px] lg:w-[24px] lg:h-[24px] border border-white">
                  <div
                    className={`${
                      checked
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
                    {errors.checked ? (
                      <InputError text={errors.checked?.message} />
                    ) : null}
                  </div>
                </div>
                <p className="inline-block md:w-[192px] lg:w-[258px]">
                  {data.confirm}
                </p>
              </div>
            ) : null}

            <button
              className="block ml-auto text-[30px] lg:text-[32px] font-medium leading-normal uppercase duration-300 hover:opacity-60 focus:opacity-60 cursor-pointer"
              type="submit"
            >
              {data.send}
            </button>
          </div>
        </div>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
