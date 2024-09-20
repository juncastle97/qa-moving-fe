import React from "react";
import Image from "next/image";

export default function ReviewDetail({ data }) {
  const renderStars = () => {
    const starArray = [];

    for (let i = 0; i < 5; i++) {
      starArray.push(
        <div key={i} className="relative h-20 w-20">
          <Image
            src={i < data.starRating ? "/icons/ic-star-on.svg" : "/icons/ic-star-off.svg"}
            alt={i < data.starRating ? "Filled star" : "Empty star"}
            fill
          />
        </div>,
      );
    }
    return starArray;
  };

  return (
    <div className="flex w-955 flex-col gap-24 border-b border-line-100 py-32">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-14">
          <p className="text-2lg-18px-regular text-black-400">
            {data.userName.length > 2 ? data.userName.slice(0, -2) + "**" : data.userName[0] + "*"}
          </p>
          <div className="h-14 border border-line-200"></div>
          <p className="text-2lg-18px-regular text-grayscale-300">{data.reviewDate}</p>
        </div>
        <div className="flex">{renderStars()}</div>
      </div>
      <p className="text-2lg-18px-regular">{data.reviewText}</p>
    </div>
  );
}
