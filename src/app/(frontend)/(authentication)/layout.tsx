"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";
import clsx from "clsx";
import { Header } from "@/components";
import backgroundImageURL from "@/assets/night-neon.avif";

export default function AuthenticationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();
  const cookieStore = useCookies();
  const [title, setTitle] = useState("");

  const user = cookieStore.get("user");

  useEffect(() => {
    if (user) router.push("/");
    if (pathname === "/login") setTitle("Login");
    else if (pathname === "/register") setTitle("Register");
  }, [pathname]);

  if (user) return null;
  return (
    <div className={clsx("w-screen h-svh", "overflow-hidden select-none")}>
      <SubBackground />
      <div className={clsx("w-full xl:w-3/5 h-full", "relative float-right")}>
        <Header />
        <div
          className={clsx(
            "flex flex-col justify-center items-center",
            "w-full h-[calc(100%-4rem)] px-4"
          )}
        >
          <span className={clsx("block", "font-bold uppercase tracking-widest text-4xl")}>
            {title}
          </span>
          {children}
        </div>
      </div>
    </div>
  );
}

function SubBackground() {
  return (
    <div className={clsx("w-2/5 h-full float-left", "hidden xl:block", "relative")}>
      <div
        className={clsx(
          "bg-[linear-gradient(45deg,rgba(4,2,96,0.7),rgba(180,49,183,0.9)),linear-gradient(90deg,rgba(51,136,140,0.3),rgba(87,240,240,0.1))]",
          "size-full px-6",
          "absolute top-0 left-0",
          "flex flex-col justify-center items-center",
          "text-center text-white"
        )}
      >
        <div className="max-w-xl">
          <h1 className={clsx("neon-effect", "mb-3", "font-['Monoton'] text-3xl tracking-widest")}>
            welcome back
          </h1>
          <div>
            The ultimate platform designed to bring people together through the power of media.
          </div>
        </div>
      </div>
      <img src={backgroundImageURL.src} alt="background" className="size-full object-cover" />
    </div>
  );
}
