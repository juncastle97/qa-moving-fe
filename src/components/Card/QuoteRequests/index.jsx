import React, { useState } from "react";
import QuoteChip from "@/components/common/QuoteChip";
import CustomButton from "@/components/common/Button";
import SendQuoteModal from "@/components/Modal/SendQuote";
import RejectQuoteModal from "@/components/Modal/RejectQuote";

export default function QuoteRequests({ quoteStatuses, data }) {
  const [showSendModal, setShowSendModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);

  const handleOpenSendModal = () => {
    setShowSendModal(true);
  };

  const handleCloseSendModal = () => {
    setShowSendModal(false);
  };

  const handleOpenRejectModal = () => {
    setShowRejectModal(true);
  };

  const handleCloseRejectModal = () => {
    setShowRejectModal(false);
  };
  return (
    <>
      <div className="flex w-955 flex-col gap-16 px-24 pb-12 pt-20 shadow-custom">
        <QuoteChip quoteStatuses={quoteStatuses} />

        <div className="flex flex-col gap-18 rounded-16 px-18 py-16">
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
        </div>

        <div className="flex w-full justify-center gap-8">
          <CustomButton
            text="견적 보내기"
            className="h-64 w-448 rounded-16 p-16 text-xl-20px-semibold"
            onClick={handleOpenSendModal}
          />
          <CustomButton
            text="반려"
            className="h-64 w-448 rounded-16 p-16 text-xl-20px-semibold"
            outline
            onClick={handleOpenRejectModal}
          />
        </div>
      </div>
      {showSendModal && (
        <SendQuoteModal onClose={handleCloseSendModal} quoteStatuses={quoteStatuses} data={data} />
      )}
      {showRejectModal && (
        <RejectQuoteModal
          onClose={handleCloseRejectModal}
          quoteStatuses={quoteStatuses}
          data={data}
        />
      )}
    </>
  );
}
