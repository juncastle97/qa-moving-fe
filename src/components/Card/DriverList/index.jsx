import QuoteChip from "@/components/common/QuoteChip";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function DriverList({ quoteStatuses, data, small, noneCursor, heart }) {
  const [liked, setLiked] = useState(heart || false); // heart prop에 따라 초기 상태 설정

  const router = useRouter();

  const handleClick = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원";
  };

  const navigateToDriverDetail = () => {
    if (!noneCursor) { // noneCursor가 true가 아닐 때만 작동
      const currentPath = router.asPath;
      const basePath = currentPath.split("?")[0];
      const newPath = `${basePath.replace(/\/$/, "")}/${data.id}`;
      router.push(newPath);
    }
  };

  return (
    <div
      className={`flex w-full flex-col gap-9 rounded-16 px-24 py-20 shadow-custom bg-white ${
        noneCursor ? "" : "cursor-pointer"
      }`}
      onClick={navigateToDriverDetail}
    >
      <QuoteChip quoteStatuses={quoteStatuses} />
      <div
        className={
          small ? "text-xl-20px-semibold text-black-300" : "text-2xl-24px-semibold text-black-300"
        }
      >
        {data.descriptionData}
      </div>
      <div className="flex h-92 w-full justify-between gap-12 rounded-6 border px-18 py-16">
        <div className="flex items-center gap-24">
          <div className="relative h-65 w-65 overflow-hidden rounded-full border-3 border-black">
            <Image src={data.profileImage} alt="기사님 프로필" fill />
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex gap-8 text-2lg-18px-semibold text-black-300">
              <p>{data.name}</p>
              <p>기사님</p>
            </div>
            <div className="flex items-center gap-16 text-lg-16px-medium">
              <div className="flex gap-6">
                <div className="relative h-24 w-24">
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
        <div className="flex gap-4">
          <div
            className="relative h-24 w-24 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            <Image src={liked ? "/images/like.png" : "/images/empty-heart.png"} alt="like" fill />
          </div>
          <p className="text-2lg-18px-medium text-primary-blue-400">{data.likes}</p>
        </div>
      </div>
      {data.price && (
        <div className="flex items-center justify-end gap-16">
          <p className="text-2lg-18px-medium text-black-400">견적 금액</p>
          <p className="text-2xl-24px-bold text-black-400">{formatPrice(data.price)}</p>
        </div>
      )}
    </div>
  );
}
