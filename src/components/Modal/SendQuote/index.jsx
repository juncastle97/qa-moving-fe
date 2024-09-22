import React, { useState } from "react";
import QuoteChip from "@/components/common/QuoteChip";
import CustomButton from "@/components/common/Button";

const SendQuoteModal = ({ onClose, data, quoteStatuses }) => {
  const [price, setPrice] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = () => {
    console.log({ price, review });
    onClose();
  };

  const isButtonDisabled = !(Number(price) > 0) || review.length < 10;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="w-608 rounded-32 bg-white px-24 pb-40 pt-32">
        <div className="flex h-36 items-center justify-between p-4">
          <p className="text-2xl-24px-semibold">견적 보내기</p>
          <button onClick={onClose} className="text-3xl text-grayscale-400 hover:text-gray-700">
            ×
          </button>
        </div>
        <div className="p-4">
          <div className="my-40">
            <QuoteChip quoteStatuses={quoteStatuses} />
            <div className="mt-16 flex w-full justify-between gap-12 rounded-8 border px-18 py-24">
              <div className="flex items-center gap-24">
                <div className="flex flex-col gap-16">
                  <div className="flex gap-8 text-2xl-24px-semibold text-black-300">
                    <p>{data.name}</p>
                    <p>고객님</p>
                  </div>
                  <div className="flex flex-col gap-16 text-lg-16px-medium">
                    <div className="flex items-center gap-12">
                      <p className="rounded-4 bg-bg-400 px-6 py-4 text-2lg-18px-regular text-grayscale-500">
                        이사일
                      </p>
                      <p className="text-2lg-18px-medium text-black-300">{data.movingDate}</p>
                    </div>

                    <div className="flex items-center gap-16">
                      <div className="flex items-center gap-6">
                        <p className="rounded-4 bg-bg-400 px-6 py-4 text-2lg-18px-regular text-grayscale-500">
                          출발
                        </p>
                        <p className="text-2lg-18px-medium text-black-300">{data.startLocation}</p>
                      </div>

                      <div className="h-16 border border-line-200"></div>

                      <div className="flex items-center gap-6">
                        <p className="rounded-4 bg-bg-400 px-6 py-4 text-2lg-18px-regular text-grayscale-500">
                          도착
                        </p>
                        <p className="text-2lg-18px-medium text-black-300">{data.endLocation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-32">
              <div className="mt-32 flex flex-col gap-16">
                <p className="text-xl-20px-semibold text-black-300">견적가를 입력해 주세요</p>
                <input
                  placeholder="견적가 입력"
                  className="h-64 w-full rounded-16 bg-bg-200 p-14 text-xl-20px-regular focus:outline-none"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                ></input>
              </div>
              <div className="border border-line-100"></div>
              <div>
                <p className="mb-16 text-xl-20px-semibold text-black-300">코멘트를 입력해 주세요</p>
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
            text="견적 보내기"
            className="h-64 w-full rounded-16 text-xl-20px-semibold"
            onClick={handleSubmit}
            disabled={isButtonDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default SendQuoteModal;
