import CustomButton from "@/components/common/Button";
import QuoteChip from "@/components/common/QuoteChip";
import Image from "next/image";
import React, { useState } from "react";
import ReviewModal from "@/components/Modal/CreateReview"; // 이전에 만든 ReviewModal 컴포넌트를 import 합니다.

export default function AddReviews({ quoteStatuses, data }) {
  const [showModal, setShowModal] = useState(false);

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원";
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={"flex w-full h-346 flex-col gap-24 rounded-16 bg-white px-24 py-32 shadow-custom"}>
        <QuoteChip quoteStatuses={quoteStatuses} />
        <div className="flex w-full justify-between gap-12 rounded-6 border px-18 py-16">
          <div className="flex items-center gap-24">
            <div className="relative h-65 w-65 overflow-hidden rounded-full border-3 border-black">
              <Image src={data.profileImage} alt="기사님 프로필" fill />
            </div>
            <div className="flex flex-col gap-16">
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
            </div>
          </div>
        </div>
        <CustomButton
          text="리뷰 작성하기"
          className="h-64 rounded-16 text-xl-20px-semibold"
          onClick={handleOpenModal}
        />
      </div>

      {showModal && (
        <ReviewModal onClose={handleCloseModal} quoteStatuses={quoteStatuses} data={data} />
      )}
    </>
  );
}
