"use client";

import Button from "@/components/ui/Button";
import RHFTextField from "@/components/ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupApi } from "@/services/authService";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const schema = yup.object({
  name: yup
    .string()
    .min(5, "نام و نام خانوادگی نامعتبر است")
    .max(30)
    .required("نام و نام خانوادگی الزامی است"),
  email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
  password: yup.string().required("رمز عبور الزامی است"),
});

function SignIn() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const onSubmit = async (value) => {
    try {
      const { user, message } = await signupApi(value);
      router.push("/");

      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="w-full">
      <h1></h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <RHFTextField
          name="name"
          label="نام و نام خانوادگی"
          register={register}
          isRequired
          errors={errors}
        />
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
        <Button
          type="submit"
          variant="primary"
          className="w-full relative top-5 font-bold text-lg md:text-xl text-secondary-0"
        >
          تایید
        </Button>
      </form>
    </div>
  );
}

export default SignIn;
