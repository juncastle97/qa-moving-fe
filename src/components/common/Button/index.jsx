import React from 'react';
import clsx from 'clsx';

export default function CustomButton({
  text = "버튼 내용 입력 필요",
  onClick,
  type = 'button',
  disabled = false,
  outline = false,
  className = "",
  ...props
}) {
  return (
    <button
      className={clsx(
        "transition-colors",
        disabled
          ? "cursor-not-allowed bg-grayscale-100 text-gray-50"
          : outline
            ? "border border-primary-blue-300 text-primary-blue-300 hover:bg-primary-blue-50"
            : "bg-primary-blue-300 text-gray-50 hover:bg-primary-blue-200 active:bg-primary-blue-300",
        className
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
}