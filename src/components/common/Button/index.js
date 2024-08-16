import { Button } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";

function CustomButton({
  text = "버튼 내용 입력 필요",
  onClick,
  disabled = false,
  width = "327",
  height = "54",
  rounded = "16",
  fontSize = "",
}) {
  return (
    <Button as={Fragment}>
      {({ hover, active }) => (
        <button
          className={clsx(
            `w-${width}`,
            `h-${height}`,
            `rounded-${rounded}`,
            `text-${fontSize}`,
            "p-16 text-gray-50",
            !hover && !active && "bg-primary-blue-300",
            hover && !active && "bg-primary-blue-200",
            active && "bg-primary-blue-300",
            disabled && "cursor-not-allowed bg-grayscale-100",
          )}
          onClick={onClick}
          disabled={disabled}
        >
          {text}
        </button>
      )}
    </Button>
  );
}

export default CustomButton;
