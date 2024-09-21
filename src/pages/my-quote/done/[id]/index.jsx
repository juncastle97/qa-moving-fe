import DriverList from "@/components/Card/DriverList";
import React from "react";
import { useRouter } from "next/router";
import doneQuoteData from "@/mock/my-quote/doneMockData";
import Image from "next/image";

export default function QuoteDetail() {
  const router = useRouter();
  const { id } = router.query;

  const data = doneQuoteData.driverList.find((item) => item.id === Number(id));

  if (!data) {
    return <div>존재하지 않는 데이터입니다.</div>;
  }

  function formatDate(movingDate) {
    const parts = movingDate.split(". ");
    const year = parts[0].slice(2);
    const month = parts[1];
    const day = parts[2].split("(")[0];

    return `${year}.${month}.${day}`;
  }

  const formatPrice = (price) => {
    if (!price && price !== 0) return "가격 정보 없음";
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원";
  };

  return (
    <>
      <div className="h-96 w-full bg-white px-260 py-32">
        <h1 className="text-2xl-24px-semibold">견적 상세</h1>
      </div>
      <div className="flex gap-117 px-260">
        <div className="flex w-955 flex-col gap-40">
          <DriverList quoteStatuses={data.quoteStatuses} data={data} />

          <div className="border border-line-100"></div>

          <p className="text-2xl-24px-semibold text-black-400">견적가</p>

          <p className="text-2xl-24px-bold text-black-400">{formatPrice(data.price)}</p>

          <div className="border border-line-100"></div>

          <div className="flex flex-col gap-40">
            <p className="text-2xl-24px-semibold text-black-400">견적 정보</p>
            <div className="flex h-285 flex-col justify-center gap-16 rounded-16 border border-line-100 bg-bg-100 px-40 py-32">
              <div className="flex gap-32 text-2lg-18px-regular">
                <p className="w-90 text-grayscale-300">견적 요청일</p>
                <p>{formatDate(doneQuoteData.movingDate)}</p>
              </div>
              <div className="flex gap-32 text-2lg-18px-regular">
                <p className="w-90 text-grayscale-300">서비스</p>
                <p>{doneQuoteData.quoteType}</p>
              </div>
              <div className="flex gap-32 text-2lg-18px-regular">
                <p className="w-90 text-grayscale-300">이용일</p>
                <p>
                  {doneQuoteData.movingDate} {doneQuoteData.movingTime}
                </p>
              </div>
              <div className="flex gap-32 text-2lg-18px-regular">
                <p className="w-90 text-grayscale-300">출발지</p>
                <p>{doneQuoteData.startLocationDetail}</p>
              </div>
              <div className="flex gap-32 text-2lg-18px-regular">
                <p className="w-90 text-grayscale-300">도착지</p>
                <p>{doneQuoteData.endLocationDetail}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-354 flex-col gap-40">
          <div className="flex w-224 flex-col gap-22">
            <p className="text-xl-20px-semibold text-black-400">견적서 공유하기</p>
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
    </>
  );
}
