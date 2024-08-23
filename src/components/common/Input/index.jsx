import Image from "next/image";
import { useState, forwardRef, useEffect } from "react";

const CustomInput = forwardRef(({ type, id, placeholder, error, ...props }, ref) => {
  const [typeState, setTypeState] = useState(type);
  const [isFocused, setIsFocused] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleTypeChange = () => {
    setTypeState((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleFocus = () => {
    setIsFocused(true);
    setShowError(false);
  };

  const handleBlur = () => {
    setIsFocused(false);
    // 약간의 지연 후 에러 메시지를 표시
    setTimeout(() => {
      setShowError(true);
    }, 100);
  };

  useEffect(() => {
    // 컴포넌트가 마운트되거나 error prop이 변경될 때 showError 상태 업데이트
    setShowError(!!error);
  }, [error]);

  return (
    <div className="relative w-full">
      <div>
        <input
          ref={ref}
          className={`h-54 w-full rounded-16 border bg-grayscale-50 p-14 text-lg-16px-regular outline-none focus:border-primary-blue-300 lg:h-64 lg:text-xl-20px-regular ${
            error && showError ? "border-secondary-red-200" : "border-line-200"
          }`}
          type={typeState}
          id={id}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {type === "password" && (
          <div className="absolute right-14 top-1/2 flex -translate-y-1/2">
            <Image
              className="cursor-pointer"
              src={typeState === "text" ? "/icons/ic-eye-on.svg" : "/icons/ic-eye-off.svg"}
              alt={
                typeState === "text" ? "비밀번호 보이는 상태 아이콘" : "비밀번호 숨겨진 상태 아이콘"
              }
              width={24}
              height={24}
              onClick={handleTypeChange}
            />
          </div>
        )}
      </div>
      {error && showError && (
        <p className="absolute right-8 mt-4 text-sm-13px-medium text-secondary-red-200 lg:text-lg-16px-medium">
          {error.message}
        </p>
      )}
    </div>
  );
});

CustomInput.displayName = "CustomInput";

export default CustomInput;
