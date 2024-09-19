import React, { useState } from "react";
import Image from "next/image";

export default function Dropdown({
  options = [],
  defaultOption,
  onOptionSelect,
  big = false,
  blue = false,
  none = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption || options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onOptionSelect) {
      onOptionSelect(option);
    }
  };

  return (
    <div className="relative w-full">
      <button
        onClick={toggleDropdown}
        className={`flex w-full items-center justify-between rounded-16 focus:outline-none ${big ? "h-64 px-24 py-18 text-2lg-18px-medium" : "px-10 py-8 text-lg-14px-semibold"} ${none ? "border-none" : blue && isOpen ? "border border-primary-blue-300 bg-primary-blue-50 text-primary-blue-300" : "border border-gray-300 bg-white text-black-400"}`}
      >
        {selectedOption}
        <div className={`transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
          <Image
            src={blue && isOpen ? "/images/chevron-blue.png" : "/images/chevron-down.png"}
            alt="Chevron"
            width={big ? 36 : 20}
            height={big ? 36 : 20}
          />
        </div>
      </button>

      {isOpen && (
        <div
          className={`absolute z-10 w-full rounded-lg border border-line-100 bg-white shadow-lg ${big ? "mt-8" : "mt-2"} max-h-[320px] overflow-y-auto`}
        >
          <div className={`grid gap-1 ${options.length > 6 ? "grid-cols-2" : "grid-cols-1"}`}>
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`block w-full text-left text-black-400 hover:bg-gray-50 focus:outline-none ${big ? "px-24 py-16 text-2lg-18px-medium" : "px-10 py-8 text-lg-14px-medium"}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
