"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useCookies } from "next-client-cookies";
import clsx from "clsx";
import { toast } from "react-toastify";

export default function Home() {
  const cookieStore = useCookies();
  const router = useRouter();
  const user = cookieStore.get("user");

  function logoutHandler() {
    cookieStore.remove("user");
    router.push("/login");
    toast.success("Logout successful.");
  }

  useEffect(() => {
    if (!user) router.push("/login");
  }, []);

  if (!user) return null;
  return (
    <div className={clsx("flex justify-center items-center", "h-svh w-full", "text-5xl")}>
      <span className="opacity-50">Just login, and </span>
      <button className="font-bold" onClick={logoutHandler}>
        &nbsp;Logout
      </button>
    </div>
  );
}
