import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import driverReviewData from "@/mock/review/addReview";
import AddReviews from "@/components/Card/AddReviews";
import Image from "next/image";

export default function AddReview() {
  const router = useRouter();
  const currentPath = router.pathname;

  const tabs = [
    { name: "작성 가능한 리뷰", path: "/review/add-review" },
    { name: "내가 작성한 리뷰", path: "/review/my-review" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 6;
  const totalPages = Math.ceil(driverReviewData.length / reviewsPerPage);

  const [leftArrowImage, setLeftArrowImage] = useState("/icons/leftgray.svg");
  const [rightArrowImage, setRightArrowImage] = useState("/icons/rightgray.svg");

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentReviews = driverReviewData.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage,
  );

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 5;

    buttons.push(
      <button
        key="prev"
        onClick={() => paginate(Math.max(1, currentPage - 1))}
        className="mr-10"
        disabled={currentPage === 1}
        onMouseEnter={() => setLeftArrowImage("/icons/leftblack.svg")}
        onMouseLeave={() => setLeftArrowImage("/icons/leftgray.svg")}
      >
        <div className="relative h-36 w-36">
          <Image src={leftArrowImage} alt="leftArrow" fill />
        </div>
      </button>,
    );

    if (totalPages <= maxVisibleButtons) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => paginate(i)}
            className={`h-48 w-48 p-10 text-2lg-18px-semibold ${
              currentPage === i ? "text-black-400" : "text-grayscale-200"
            }`}
          >
            {i}
          </button>,
        );
      }
    } else {
      const leftBoundary = Math.max(1, currentPage - 2);
      const rightBoundary = Math.min(totalPages, currentPage + 2);

      if (leftBoundary > 1) {
        buttons.push(
          <button
            key={1}
            onClick={() => paginate(1)}
            className="h-48 w-48 p-10 text-2lg-18px-semibold text-grayscale-200"
          >
            1
          </button>,
        );
        if (leftBoundary > 2) {
          buttons.push(
            <span
              key="leftEllipsis"
              className="h-48 w-48 p-10 text-2lg-18px-semibold text-grayscale-200"
            >
              ...
            </span>,
          );
        }
      }

      for (let i = leftBoundary; i <= rightBoundary; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => paginate(i)}
            className={`h-48 w-48 p-10 text-2lg-18px-semibold ${
              currentPage === i ? "text-black-400" : "text-grayscale-200"
            }`}
          >
            {i}
          </button>,
        );
      }

      if (rightBoundary < totalPages) {
        if (rightBoundary < totalPages - 1) {
          buttons.push(
            <span
              key="rightEllipsis"
              className="h-48 w-48 p-10 text-2lg-18px-semibold text-grayscale-200"
            >
              ...
            </span>,
          );
        }
        buttons.push(
          <button
            key={totalPages}
            onClick={() => paginate(totalPages)}
            className="h-48 w-48 p-10 text-2lg-18px-semibold text-grayscale-200"
          >
            {totalPages}
          </button>,
        );
      }
    }

    // 다음 버튼
    buttons.push(
      <button
        key="next"
        onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
        className="ml-10"
        disabled={currentPage === totalPages}
        onMouseEnter={() => setRightArrowImage("/icons/rightblack.svg")}
        onMouseLeave={() => setRightArrowImage("/icons/rightgray.svg")}
      >
        <div className="relative h-36 w-36">
          <Image src={rightArrowImage} alt="rightArrow" fill />
        </div>
      </button>,
    );

    return buttons;
  };

  return (
    <>
      <div className="h-80 px-260 pt-16">
        <nav className="-mb-px flex gap-32">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.path}
              className={`relative inline-flex items-center border-b-1 py-14 text-xl-20px-semibold ${
                currentPath === tab.path
                  ? "border-black text-black-400"
                  : "border-transparent text-grayscale-400"
              }`}
            >
              {tab.name}
              {currentPath === tab.path && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-black" />
              )}
            </Link>
          ))}
        </nav>
      </div>
      <div className="min-h-screen bg-bg-200 px-260 pt-40">
        <div className="flex flex-col justify-center">
          <div className="grid min-h-[1130px] w-1360 grid-cols-2 gap-x-24 gap-y-48">
            {currentReviews.map((data, index) => (
              <AddReviews key={index} quoteStatuses={data.quoteStatuses} data={data} />
            ))}
          </div>

          <div className="mt-32 flex w-1360 justify-center">{renderPaginationButtons()}</div>
        </div>
      </div>
    </>
  );
}
