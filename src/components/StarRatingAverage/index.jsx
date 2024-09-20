import React from "react";

import Image from "next/image";

export default function StarRatingAverage({ data }) {
  const scoresCount = [
    data.scoreFiveCount,
    data.scoreFourCount,
    data.scoreThreeCount,
    data.scoreTwoCount,
    data.scoreOneCount,
  ];

  const totalReviews = scoresCount.reduce((total, score) => total + score, 0);

  const totalScore =
    data.scoreFiveCount * 5 +
    data.scoreFourCount * 4 +
    data.scoreThreeCount * 3 +
    data.scoreTwoCount * 2 +
    data.scoreOneCount * 1;

  const averageScore = totalReviews ? (totalScore / totalReviews).toFixed(1) : 0;

  const renderStars = () => {
    const starArray = [];

    for (let i = 0; i < 5; i++) {
      starArray.push(
        <div key={i} className="relative h-48 w-48">
          <Image
            src={i < averageScore ? "/icons/ic-star-on.svg" : "/icons/ic-star-off.svg"}
            alt={i < averageScore ? "Filled star" : "Empty star"}
            fill
          />
        </div>,
      );
    }
    return starArray;
  };

  return (
    <div className="flex h-296 w-full items-center gap-83 rounded-32 bg-bg-200 px-64 py-40">
      <div className="flex flex-col items-center justify-center gap-15">
        <div className="flex items-baseline gap-8">
          <p className="text-review-star text-black-400">{averageScore}</p>
          <p className="text-review-count text-grayscale-100">/ 5</p>
        </div>
        <div className="flex">{renderStars()}</div>
      </div>
      <div className="flex w-full flex-col gap-7">
        {scoresCount.map((score, index) => {
          const progressPercentage = totalReviews ? (score / totalReviews) * 100 : 0;

          return (
            <div key={index} className="text-body-2Sb">
              <div className="flex items-center justify-start gap-30">
                <p className="w-36 text-xl-20px-medium text-black-300">{5 - index}점</p>
                <div className="relative h-8 w-370 rounded-full bg-bg-300">
                  <div
                    className="absolute h-8 rounded-full bg-secondary-yellow"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <p className="flex w-44 justify-start text-xl-20px-medium text-grayscale-300">
                  {score}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
