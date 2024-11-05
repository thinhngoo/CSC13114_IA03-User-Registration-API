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
        <img src="/images/icon.svg" className="size-10" alt="logo" />
        <span className={clsx("ml-3", "font-bold text-2xl")}>Just Login</span>
      </Link>
    </header>
  );
}
