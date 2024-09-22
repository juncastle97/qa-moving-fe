import React from "react";
import QuoteChip from "@/components/common/QuoteChip";

export default function CustomerInfo({ quoteStatuses, data }) {
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원";
  };

  return (
    <div
      className={`relative flex w-955 flex-col gap-16 rounded-16 bg-white px-24 pb-12 pt-20 shadow-custom`}
    >
      <QuoteChip quoteStatuses={quoteStatuses} />

      <div className="flex flex-col gap-18 rounded-16 pt-16">
        <div className="text-xl-20px-semibold text-black-300">{data.name} 고객님</div>

        <div className="border-t border-line-200"></div>

        <div className="flex items-center gap-16 mb-16">
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
      </div>
    </div>
  );
}
