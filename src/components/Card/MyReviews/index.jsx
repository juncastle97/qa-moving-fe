import QuoteChip from "@/components/common/QuoteChip";
import Image from "next/image";
import React, { useState } from "react";

export default function MyReviews({ quoteStatuses, data }) {
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원";
  };

  const totalStars = 5;

  return (
    <>
      <div
        className={
          "flex h-346 w-full flex-col gap-24 rounded-16 bg-white px-24 py-32 shadow-custom"
        }
      >
        <div className="flex items-center justify-between">
          <QuoteChip quoteStatuses={quoteStatuses} />
          <div className="text-2lg-18px-regular text-grayscale-300">작성일 {data.reviewDate}</div>
        </div>
        <div className="flex w-full justify-between gap-12 rounded-6 border px-18 py-16">
          <div className="flex items-center gap-24">
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-3 border-black">
              <Image src={data.profileImage} alt="기사님 프로필" fill />
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex gap-8 text-2xl-24px-semibold text-black-300">
                <p>{data.name}</p>
                <p>기사님</p>
              </div>
              <div className="flex items-center gap-16 text-lg-16px-medium">
                <div className="flex gap-12">
                  <p className="text-xl-20px-regular text-grayscale-500">이사일</p>
                  <p className="text-xl-20px-medium text-black-400">{data.movingDate}</p>
                </div>
                <div className="h-16 border border-line-200"></div>
                <div className="flex gap-12">
                  <p className="text-xl-20px-regular text-grayscale-500">견적가</p>
                  <p className="text-xl-20px-medium text-black-400">{formatPrice(data.price)}</p>
                </div>
              </div>
              <div className="flex">
                {[...Array(totalStars)].map((_, index) => (
                  <Image
                    key={index}
                    src={index < data.rating ? "/icons/ic-star-on.svg" : "/icons/ic-star-off.svg"}
                    alt={index < data.rating ? "yellow star" : "gray star"}
                    width={24} // 원하는 크기로 조절 가능
                    height={24} // 원하는 크기로 조절 가능
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden text-xl-20px-regular text-grayscale-500">{data.review}</div>
      </div>
    </>
  );
}
