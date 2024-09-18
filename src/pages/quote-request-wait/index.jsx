import CustomButton from "@/components/common/Button";
import Image from "next/image";
import React from "react";

export default function QutoeRequestWait() {
  return (
    <>
      <div className="flex h-96 w-full flex-col gap-24 bg-white px-260 py-32">
        <h1 className="text-2xl-24px-semibold">견적 요청</h1>
      </div>
      <div className="flex min-h-[calc(100vh-156px)] items-center justify-center bg-bg-200 lg:min-h-[calc(100vh-184px)]">
        <div className="flex flex-col items-center justify-center">
          <div className="relative ml-24 h-140 w-378">
            <Image src={"/images/car.png"} alt="car" fill />
          </div>
          <div className="mb-32 mt-64 flex flex-col text-center text-xl-20px-regular text-grayscale-400">
            <span>현재 진행 중인 이사 견적이 있어요!</span>
            <span>진행 중인 이사 완료 후 새로운 견적을 받아보세요.</span>
          </div>
          <CustomButton
            text="받은 견적 보러가기"
            className="h-64 w-196 rounded-16 text-xl-20px-semibold"
            // onClick={}
          />
        </div>
      </div>
    </>
  );
}
