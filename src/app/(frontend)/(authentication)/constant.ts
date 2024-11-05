import clsx from "clsx";

export const className = {
  form: clsx("max-w-full w-[25rem] p-10 pb-8", "rounded-lg", "text-on-surface"),
  formField: "relative my-3",
  formInput: clsx(
    "block w-full px-3 pt-5 pb-2",
    "bg-foreground",
    "border-0 border-b-2 border-transparent",
    "rounded appearance-none",
    "transition duration-300",
    "opacity-90 focus:opacity-100",
    "focus:border-primary focus:outline-none focus:ring-0 peer"
  ),
  formLabel: clsx(
    "absolute start-3 top-4 z-10",
    "duration-300 -translate-y-4 scale-75 origin-[0]",
    "opacity-50 peer-focus:opacity-100",
    "peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
  ),
  errorMessage: clsx("text-red-500 text-xs italic", "mt-3"),
};
