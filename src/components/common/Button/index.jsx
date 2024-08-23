import React from 'react';
import clsx from 'clsx';

export default function CustomButton({
  text = "버튼 내용 입력 필요",
  onClick,
  type = 'button',
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <button
      className={clsx(
        "text-gray-50 transition-colors duration-200",
        disabled
          ? "cursor-not-allowed bg-grayscale-100"
          : "bg-primary-blue-300 hover:bg-primary-blue-200 active:bg-primary-blue-300",
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