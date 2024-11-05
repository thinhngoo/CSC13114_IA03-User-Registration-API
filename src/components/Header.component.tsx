import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export default function Header() {
  return (
    <header
      className={clsx(
        "w-full px-6 h-16",
        "relative z-20",
        "border-b border-white/[.1] shadow-md",
        "bg-foreground"
      )}
    >
      <Link href="/" className={clsx("flex items-center bg", "w-fit h-full")}>
        <Image src="/images/icon.svg" width={44} height={44} alt="logo" />
        <span className={clsx("ml-3", "font-bold text-2xl")}>Just Login</span>
      </Link>
    </header>
  );
}
