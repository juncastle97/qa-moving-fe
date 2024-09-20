import clsx from "clsx";

export default function DetailChip({ text, isSelected }) {
  return (
    <div
      className={clsx(
        "flex h-36 items-center justify-center rounded-full border px-12 py-6 lg:h-46 lg:px-20 lg:py-10",
        {
          "border-primary-blue-300": isSelected,
          "border-grayscale-100": !isSelected,
        },
        "bg-bg-100",
      )}
    >
      <p
        className={clsx("text-md-14px-medium lg:text-2lg-18px-regular", {
          "text-primary-blue-300": isSelected,
          "text-primary-blue-400": !isSelected,
        })}
      >
        {text}
      </p>
    </div>
  );
}