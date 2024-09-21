import QuoteChip from "@/components/common/QuoteChip";
import Image from "next/image";
import React from "react";

export default function LikedDriverList({ quoteStatuses, data }) {
  return (
    <div className="flex h-188 w-327 cursor-pointer flex-col gap-8 rounded-16 px-14 py-16 shadow-custom">
      <QuoteChip quoteStatuses={quoteStatuses} />
      <div className="text-lg-14px-semibold text-black-300">{data.descriptionData}</div>
      <div className="relative flex h-78 w-full rounded-6 border p-10">
        <div className="flex items-center gap-12">
          <div className="relative h-45 w-45 overflow-hidden rounded-full border-3 border-black">
            <Image src={data.profileImage} alt="기사님 프로필" fill />
          </div>
          <div className="flex w-221 flex-col gap-12">
            <div className="flex gap-4 text-lg-14px-semibold text-black-300">
              <p>{data.name}</p>
              <p>기사님</p>
            </div>
            <div className="flex items-center gap-8 text-sm-13px-medium">
              <div className="flex">
                <div className="relative mr-1 h-20 w-20">
                  <Image src={"/images/star.png"} alt="star" fill />
                </div>
                <p className="text-black-300">{data.rating}</p>
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
        <div className="absolute right-10 flex items-center gap-4">
          <div className="relative h-24 w-24">
            <Image src={"/images/like.png"} alt="like" fill />
          </div>
          <p className="text-sm-13px-medium text-primary-blue-400">{data.likes}</p>
        </div>
      </div>
    </div>
  );
}
