import { Button } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";

export default function CustomButton({
  text = "버튼 내용 입력 필요",
  onClick,
  disabled = false,
  className = "",
}) {
  return (
    <Button as={Fragment}>
      {({ hover, active }) => (
        <button
          className={clsx(
            "text-gray-50",
            disabled
              ? "cursor-not-allowed bg-grayscale-100"
              : hover && !active
                ? "bg-primary-blue-200"
                : active
                  ? "bg-primary-blue-300"
                  : "bg-primary-blue-300",
            className,
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
