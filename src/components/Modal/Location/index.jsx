import React, { useState } from "react";
import CustomButton from "@/components/common/Button";

export default function LocationModal({ onClose, onSubmit, departure }) {
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    onSubmit(location);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="w-608 rounded-32 bg-white px-24 pb-40 pt-32">
        <div className="flex h-36 items-center justify-between p-4">
          <p className="text-2xl-24px-semibold">{departure ? "출발지를 선택해주세요" : "도착지를 선택해주세요"}</p>
          <button onClick={onClose} className="text-3xl text-grayscale-400 hover:text-gray-700">
            ×
          </button>
        </div>
        <div className="p-4">
          <div className="flex flex-col gap-32">
            <div className="mt-32 flex flex-col gap-16">
              <input
                placeholder="주소를 입력해 주세요"
                className="h-64 w-full rounded-16 bg-bg-200 p-14 text-xl-20px-regular focus:outline-none"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
        </div>
        <CustomButton
          text="선택완료"
          className="h-64 w-full rounded-16 text-xl-20px-semibold"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}
