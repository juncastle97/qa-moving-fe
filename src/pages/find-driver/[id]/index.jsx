import React, { useState } from "react";
import DriverList from "@/components/Card/DriverList";
import CustomButton from "@/components/common/Button";
import Image from "next/image";
import DetailChip from "@/components/common/DetailChip";
import StarRatingAverage from "@/components/StarRatingAverage";
import ReviewDetail from "@/components/Card/ReviewDetail";
import { useRouter } from "next/router";
import driverData from "@/mock/find-driver/driverData";

export default function DriverDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [currentPage, setCurrentPage] = useState(1);
  const [leftArrowImage, setLeftArrowImage] = useState("/images/leftArrowGray.png");
  const [rightArrowImage, setRightArrowImage] = useState("/images/rightArrowGray.png");

  const data = driverData.find((item) => item.id === Number(id));

  if (!data) {
    return <p>해당 드라이버에 대한 데이터를 찾을 수 없습니다.</p>;
  }

  const scoresCount = data
    ? [
        data.scoreFiveCount,
        data.scoreFourCount,
        data.scoreThreeCount,
        data.scoreTwoCount,
        data.scoreOneCount,
      ]
    : [];

  const totalReviews =
    scoresCount.length > 0 ? scoresCount.reduce((total, score) => total + score, 0) : 0;

  const reviewsPerPage = 5;
  const totalPages =
    data && data.reviewData ? Math.ceil(data.reviewData.length / reviewsPerPage) : 0;

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;

  const currentReviews = data.reviewData
    ? data.reviewData.slice(indexOfFirstReview, indexOfLastReview)
    : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 5;

    buttons.push(
      <button
        key="prev"
        onClick={() => paginate(Math.max(1, currentPage - 1))}
        className="mr-10"
        disabled={currentPage === 1}
        onMouseEnter={() => setLeftArrowImage("/images/leftArrowBlack.png")} // 포커스 시 검정색 이미지로 변경
        onMouseLeave={() => setLeftArrowImage("/images/leftArrowGray.png")} // 포커스 해제 시 다시 회색으로 변경
      >
        <div className="relative h-48 w-48">
          <Image src={leftArrowImage} alt="leftArrow" fill />
        </div>
      </button>,
    );

    if (totalPages <= maxVisibleButtons) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <button key={i} onClick={() => paginate(i)}>
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
              <span>...</span>
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

    buttons.push(
      <button
        key="next"
        onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
        className="ml-10"
        disabled={currentPage === totalPages}
        onMouseEnter={() => setRightArrowImage("/images/rightArrowBlack.png")} // 포커스 시 검정색 이미지로 변경
        onMouseLeave={() => setRightArrowImage("/images/rightArrowGray.png")} // 포커스 해제 시 다시 회색으로 변경
      >
        <div className="relative h-48 w-48">
          <Image src={rightArrowImage} alt="rightArrow" fill />
        </div>
      </button>,
    );

    return buttons;
  };

  return (
    <div className="mb-65 mt-56 flex gap-117 pl-260">
      <div className="flex w-955 flex-col gap-40">
        <DriverList quoteStatuses={data.quoteStatuses} data={data} />

        <div className="border-t border-line-100"></div>

        <div className="flex flex-col gap-32">
          <p className="text-2xl-24px-bold text-black-400">상세설명</p>
          <div className="text-2lg-18px-regular text-black-400">{data.descriptionData}</div>
        </div>

        <div className="border-t border-line-100"></div>

        <div className="flex flex-col gap-32">
          <p className="text-2xl-24px-bold text-black-400">제공 서비스</p>
          <div className="flex gap-12">
            {data.moveType.map((type, index) => (
              <DetailChip key={index} text={type} isSelected={true} />
            ))}
          </div>
        </div>

        <div className="border-t border-line-100"></div>

        <div className="flex flex-col gap-32">
          <p className="text-2xl-24px-bold text-black-400">서비스 가능 지역</p>
          <div className="flex gap-12">
            {data.location.map((type, index) => (
              <DetailChip key={index} text={type} isSelected={false} />
            ))}
          </div>
        </div>

        <div className="border-t border-line-100"></div>

        {data.reviewData ? (
          <>
            <div className="flex flex-col gap-32">
              <p className="text-2xl-24px-bold text-black-400">리뷰 ({totalReviews})</p>
              <StarRatingAverage data={data} />
            </div>
            <div className="h-900">
              {currentReviews.map((data, index) => (
                <ReviewDetail key={index} data={data} />
              ))}
            </div>
            <div className="mt-4 flex justify-center">{renderPaginationButtons()}</div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center gap-24 p-180">
            <div className="relative h-82 w-110">
              <Image src={"/images/emptyReview.png"} alt="empty" fill />
            </div>
            <p className="text-lg-16px-regular text-grayscale-400">아직 등록된 리뷰가 없어요!</p>
          </div>
        )}
      </div>

      <div className="flex w-354 flex-col gap-40">
        <div className="flex flex-col gap-32">
          <p className="text-xl-20px-semibold text-black-400">
            김코드 기사님에게 지정 견적을 요청해보세요!
          </p>
          <CustomButton
            text="지정 견적 요청하기"
            type="button"
            className="h-64 w-328 rounded-16 text-xl-20px-semibold"
          />
        </div>

        <div className="border-t border-line-100"></div>

        <div className="flex flex-col gap-22">
          <p className="text-xl-20px-semibold text-black-400">나만 알기엔 아쉬운 기사님인가요?</p>
          <div className="flex gap-16">
            <Image
              src={"/images/outlined.png"}
              alt="outlined"
              width={64}
              height={64}
              className="cursor-pointer"
            />
            <Image
              src={"/images/kakao.png"}
              alt="kakao"
              width={64}
              height={64}
              className="cursor-pointer"
            />
            <Image
              src={"/images/facebook.png"}
              alt="facebook"
              width={64}
              height={64}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
