"use client";

import Button from "@/components/ui/Button";
import RHFTextField from "@/components/ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import SpinnerMini from "@/components/ui/SpinnerMini";

const schema = yup.object({
  email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
  password: yup.string().required("رمز عبور الزامی است"),
});

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const { signin } = useAuth();
  const onSubmit = async (values) => {
    await signin(values);
  };

  return (
    <div className="w-full">
      <h1 className="w-full text-center mb-10 font-bold text-primary-800 text-xl md:text-2xl">
        ورود
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <RHFTextField
          name="email"
          label="ایمیل"
          register={register}
          dir="ltr"
          isRequired
          errors={errors}
        />
        <RHFTextField
          name="password"
          label="رمز عبور"
          register={register}
          dir="ltr"
          type="password"
          isRequired
          errors={errors}
        />
        {isLoading ? (
          <SpinnerMini />
        ) : (
          <Button
            type="submit"
            variant="primary"
            className="w-full relative top-5 font-bold text-lg md:text-xl text-secondary-0"
          >
            تایید
          </Button>
        )}
      </form>
      <Link href="/signup" className="mt-6">
        <Button
          variant="secondary"
          className="w-full relative top-5 font-bold text-lg md:text-xl text-secondary-0"
        >
          ثبت نام
         </Button>
      </Link>
    </div>
  );
}

export default SignIn;
