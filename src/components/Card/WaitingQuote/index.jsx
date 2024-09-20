import QuoteChip from "@/components/common/QuoteChip";
import Image from "next/image";
import React from "react";

export default function WaitingQuote({ quoteStatuses, data }) {
  return (
    <div className="shadow-custom flex h-354 w-688 flex-col gap-24 rounded-16 bg-white px-14 py-16">
      <QuoteChip quoteStatuses={quoteStatuses} />
      <div className="relative flex h-92 w-full rounded-6 border p-16">
        <div className="flex items-center gap-24">
          <div className="relative h-60 w-60 overflow-hidden rounded-full border-3 border-black">
            <Image src={data.profileImage} alt="기사님 프로필" fill />
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex gap-8 text-2lg-18px-semibold text-black-300">
              <p>{data.name}</p>
              <p>기사님</p>
            </div>
            <div className="flex items-center gap-16 text-lg-16px-medium">
              <div className="flex gap-6">
                <div className="relative mr-1 h-24 w-24">
                  <Image src={"/images/star.png"} alt="star" fill />
                </div>
                <p className="text-black-300">{data.rating.toFixed(1)}</p>
                <p className="text-grayscale-300">({data.reviewCount})</p>
              </div>
              <div className="h-14 border border-line-200"></div>
              <div className="flex gap-6">
                <p className="text-grayscale-300">경력</p>
                <p className="text-black-300">{data.experience}</p>
              </div>
              <div className="h-14 border border-line-200"></div>
              <div className="flex gap-6">
                <p className="text-black-300">{data.confirmedCount}건</p>
                <p className="text-grayscale-300">확정</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-16 flex items-center gap-4">
          <div className="relative h-24 w-24">
            <Image src={"/images/empty-heart.png"} alt="like" fill />
          </div>
          <p className="text-2lg-18px-medium text-primary-blue-400">{data.likes}</p>
        </div>
      </div>
      <div className="flex items-center gap-16">
        <div className="flex gap-12">
          <p className="rounded-4 bg-bg-400 px-6 py-4 text-2lg-18px-regular text-grayscale-500">
            이사일
          </p>
          <p className="py-4 text-2lg-18px-medium text-black-300">{data.movingDate}</p>
        </div>
        <div className="h-14 border border-line-200"></div>
        <div className="flex gap-12">
          <p className="rounded-4 bg-bg-400 px-6 py-4 text-2lg-18px-regular text-grayscale-500">
            출발
          </p>
          <p className="py-4 text-2lg-18px-medium text-black-300">{data.startLocation}</p>
        </div>
        <div className="h-14 border border-line-200"></div>
        <div className="flex gap-12">
          <p className="rounded-4 bg-bg-400 px-6 py-4 text-2lg-18px-regular text-grayscale-500">
            도착
          </p>
          <p className="py-4 text-2lg-18px-medium text-black-300">{data.endLocation}</p>
        </div>
      </div>
      <div className="flex justify-center gap-12">
        <button className="h-64 w-314 rounded-16 border border-primary-blue-300 bg-primary-blue-300 p-16 text-xl-20px-semibold text-white hover:border-primary-blue-200 hover:bg-primary-blue-200">
          견적 확정하기
        </button>
        <button className="h-64 w-314 rounded-16 border border-primary-blue-300 bg-white p-16 text-xl-20px-semibold text-primary-blue-300 hover:border-primary-blue-200 hover:text-primary-blue-200">
          상세보기
        </button>
      </div>
    </div>
  );
}
