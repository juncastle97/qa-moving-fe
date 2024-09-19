import QuoteChip from "@/components/common/QuoteChip";
import Image from "next/image";
import React from "react";

export default function DriverList({quoteStatuses}) {
  return (
    <div className="flex h-230 w-955 flex-col gap-9 rounded-16 px-24 py-20 shadow-custom cursor-pointer">
      <QuoteChip quoteStatuses={quoteStatuses} />
      <div className="text-2xl-24px-semibold text-black-300">
        고객님의 물품을 안전하게 운송해 드립니다.
      </div>
      <div className="flex h-92 w-full gap-12 rounded-6 border px-18 py-16">
        <div className="flex items-center gap-24">
          <div className="relative h-65 w-65 overflow-hidden rounded-full border-3 border-black">
            <Image src={"/images/기사님프로필사진.png"} alt="기사님 프로필" fill />
          </div>
          <div className="flex w-708 flex-col gap-8">
            <div className="flex gap-8 text-2lg-18px-semibold text-black-300">
              <p>김코드</p>
              <p>기사님</p>
            </div>
            <div className="flex items-center gap-16 text-lg-16px-medium">
              <div className="flex gap-6">
                <div className="relative h-24 w-24">
                  <Image src={"/images/star.png"} alt="star" fill />
                </div>
                <p className="text-black-300">5.0</p>
                <p className="text-grayscale-300">(178)</p>
              </div>
              <div className="h-14 border border-line-200"></div>
              <div className="flex gap-6">
                <p className="text-grayscale-300">경력</p>
                <p className="text-black-300">7년</p>
              </div>
              <div className="h-14 border border-line-200"></div>
              <div className="flex gap-6">
                <p className="text-black-300">334건</p>
                <p className="text-grayscale-300">확정</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="relative h-24 w-24">
            <Image src={"/images/like.png"} alt="like" fill />
          </div>
          <p className="text-2lg-18px-medium text-primary-blue-400">136</p>
        </div>
      </div>
    </div>
  );
}
