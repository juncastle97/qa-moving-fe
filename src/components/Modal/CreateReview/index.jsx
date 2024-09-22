import React, { useState } from "react";
import Image from "next/image";
import QuoteChip from "@/components/common/QuoteChip";
import CustomButton from "@/components/common/Button";

const ReviewModal = ({ onClose, data, quoteStatuses }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = () => {
    console.log({ rating, review });
    onClose();
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원";
  };

  const isButtonDisabled = rating === 0 || review.length < 10;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="w-608 rounded-32 bg-white px-24 pb-40 pt-32">
        <div className="flex h-36 items-center justify-between p-4">
          <p className="text-2xl-24px-semibold">리뷰 쓰기</p>
          <button onClick={onClose} className="text-3xl text-grayscale-400 hover:text-gray-700">
            ×
          </button>
        </div>
        <div className="p-4">
          <div className="my-40">
            <QuoteChip quoteStatuses={quoteStatuses} />
            <div className="mt-16 flex w-full justify-between gap-12 rounded-8 border px-18 py-24">
              <div className="flex items-center gap-24">
                <div className="relative h-80 w-80 overflow-hidden rounded-full border-2 border-black">
                  <Image src={data.profileImage} alt="기사님 프로필" fill />
                </div>
                <div className="flex flex-col gap-16">
                  <div className="flex gap-8 text-2xl-24px-semibold text-black-300">
                    <p>{data.name}</p>
                    <p>기사님</p>
                  </div>
                  <div className="flex items-center gap-16 text-lg-16px-medium">
                    <div className="flex items-center gap-12">
                      <p className="rounded-4 bg-bg-400 px-6 py-4 text-xl-20px-regular text-grayscale-500">
                        이사일
                      </p>
                      <p className="text-xl-20px-medium text-black-400">{data.movingDate}</p>
                    </div>
                    <div className="h-16 border border-line-200"></div>
                    <div className="flex items-center gap-12">
                      <p className="rounded-4 bg-bg-400 px-6 py-4 text-xl-20px-regular text-grayscale-500">
                        견적가
                      </p>
                      <p className="text-xl-20px-medium text-black-400">
                        {formatPrice(data.price)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-32">
              <div>
                <p className="mb-16 mt-32 text-xl-20px-semibold text-black-300">
                  평점을 선택해 주세요
                </p>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className="relative h-48 w-48"
                    >
                      <Image
                        src={rating >= star ? "/icons/ic-star-on.svg" : "/icons/ic-star-off.svg"}
                        alt={`Star ${star}`}
                        fill
                        className="h-6 w-6"
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="border border-line-100"></div>
              <div>
                <p className="mb-16 text-xl-20px-semibold text-black-300">
                  상세 후기를 작성해 주세요
                </p>
                <textarea
                  className="h-160 w-full resize-none rounded-16 bg-bg-200 px-24 py-14 text-xl-20px-regular focus:outline-none"
                  rows="4"
                  placeholder="최소 10자 이상 입력해 주세요"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
          <CustomButton
            text="리뷰 등록"
            className="h-64 w-full rounded-16 text-xl-20px-semibold"
            onClick={handleSubmit}
            disabled={isButtonDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
