"use client"

import RHFTextField from "@/components/ui/RHFTextField";
import { useForm } from "react-hook-form";

function SignIn() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (value) => {
    console.log(value);
  };
  return (
    <div className="w-full">
      <h1></h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <RHFTextField
          name="name"
          label="نام و نام خانوادگی"
          register={register}
        />
        <RHFTextField
          name="email"
          label="ایمیل"
          register={register}
          dir="ltr"
        />
        <RHFTextField
          name="password"
          label="رمز عبور"
          register={register}
          dir="ltr"
          type="password"
        />
        <button className="btn btn--primary w-full relative top-5 text-xl font-bold text-secondary-0">تایید</button>
      </form>
    </div>
  );
}

export default SignIn;
