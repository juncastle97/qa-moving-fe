import QuoteChip from "@/components/common/QuoteChip";
import Image from "next/image";
import React from "react";

export default function LikedDriverList({ quoteStatuses }) {
  return (
    <div className="shadow-custom flex h-188 w-327 flex-col gap-8 rounded-16 px-14 py-16 cursor-pointer">
      <QuoteChip quoteStatuses={quoteStatuses} />
      <div className="text-lg-14px-semibold text-black-300">
        고객님의 물품을 안전하게 운송해 드립니다.
      </div>
      <div className="relative flex h-78 w-full rounded-6 border p-10">
        <div className="flex items-center gap-12">
          <div className="relative h-45 w-45 overflow-hidden rounded-full border-3 border-black">
            <Image src={"/images/기사님프로필사진.png"} alt="기사님 프로필" fill />
          </div>
          <div className="flex flex-col gap-12 w-221">
            <div className="flex gap-4 text-lg-14px-semibold text-black-300">
              <p>김코드</p>
              <p>기사님</p>
            </div>
            <div className="flex items-center gap-8 text-sm-13px-medium">
              <div className="flex">
                <div className="relative h-20 w-20 mr-1">
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
        <div className="absolute flex gap-4 right-10 items-center">
          <div className="relative h-24 w-24">
            <Image src={"/images/like.png"} alt="like" fill />
          </div>
          <p className="text-sm-13px-medium text-primary-blue-400">136</p>
        </div>
      </div>
    </div>
  );
}
