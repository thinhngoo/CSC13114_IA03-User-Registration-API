"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import clsx from "clsx";
import { className } from "../constant";
import type { LoginData } from "../type";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();
  const router = useRouter();

  const submitHandler = async (data: LoginData) => {
    await axios
      .post("http://localhost:3000/user/login", data)
      .then((response) => {
        console.log(response);
        router.push("/");
        toast.success("Login successful.");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.response.data);
      });
  };

  return (
    <form className={className.form} onSubmit={handleSubmit(submitHandler)}>
      <div className={clsx("mb-4", className.formField)}>
        <input
          className={clsx(className.formInput, errors.email && "!border-red-500")}
          id="email"
          type="email"
          placeholder=""
          {...register("email", { required: "Email is required." })}
        />
        <label
          htmlFor="email"
          className={clsx(className.formLabel, errors.email && "!text-red-500")}
        >
          Email
        </label>
        {errors.email && <p className={className.errorMessage}>{errors.email.message}</p>}
      </div>

      <div className={clsx("mb-12", className.formField)}>
        <input
          className={clsx(className.formInput, errors.email && "!border-red-500")}
          id="password"
          type="password"
          placeholder=""
          {...register("password", {
            required: "Password is required.",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters.",
            },
          })}
        />
        <label
          htmlFor="password"
          className={clsx(className.formLabel, errors.email && "!text-red-500")}
        >
          Password
        </label>
        {errors.password && <p className={className.errorMessage}>{errors.password?.message}</p>}
      </div>

      <div className="flex items-center justify-between">
        <button
          className={clsx(
            "bg-primary",
            "py-2 px-4 rounded",
            "text-on-primary font-bold",
            "hover:opacity-50 transition-opacity duration-300",
            "focus:outline-none focus:shadow-outline"
          )}
          type="submit"
        >
          Login
        </button>
        <Link
          className={clsx(
            "inline-block align-baseline",
            "font-bold text-sm text-primary",
            "hover:opacity-50 transition-opacity duration-300"
          )}
          href="/register"
        >
          Register
        </Link>
      </div>
    </form>
  );
}
