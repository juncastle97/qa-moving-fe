import React from "react";
import QuoteChip from "@/components/common/QuoteChip";
import { useRouter } from "next/router";

export default function DriverQuoteCard({ quoteStatuses, data, reject }) {
  const router = useRouter();

  const handleButtonClick = () => {
    reject
      ? router.push(`/my-quote-driver/reject/${data.id}`)
      : router.push(`/my-quote-driver/receive/${data.id}`);
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원";
  };

  return (
    <>
      <div
        className={`relative flex w-688 flex-col gap-16 rounded-16 bg-white px-24 pb-12 pt-20 shadow-custom`}
      >
        <QuoteChip quoteStatuses={quoteStatuses} />

        <div className="flex flex-col gap-18 rounded-16 pt-16">
          <div className="text-xl-20px-semibold text-black-300">{data.name} 고객님</div>

          <div className="border-t border-line-200"></div>

          <div className="flex items-center gap-16">
            <div className="flex items-center gap-6">
              <p className="rounded-4 bg-bg-400 px-6 py-4 text-2lg-18px-regular text-grayscale-500">
                이사일
              </p>
              <p className="text-2lg-18px-medium text-black-300">{data.movingDate}</p>
            </div>

            <div className="h-16 border border-line-200"></div>

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
          {!reject && (
            <div className="flex items-center justify-end gap-16">
              <p className="text-2lg-18px-medium text-black-400">견적 금액</p>
              <p className="text-2xl-24px-bold text-black-400">{formatPrice(data.price)}</p>
            </div>
          )}
        </div>

        {data.done && (
          <div className="absolute inset-0 flex w-688 items-center justify-center rounded-16 bg-black opacity-80">
            <div className="flex flex-col items-center gap-16">
              <p className="text-2lg-18px-semibold text-grayscale-50">
                {!reject ? "이사 완료된 견적이에요" : "반려된 견적이에요"}
              </p>
              <button
                onClick={handleButtonClick}
                className="rounded-16 border border-primary-blue-200 bg-primary-blue-100 px-18 py-10 text-lg-16px-semibold text-primary-blue-300"
              >
                견적 상세보기
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
