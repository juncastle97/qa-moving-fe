import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import driverQuoteData from "@/mock/my-quote-driver/mockData";
import CustomerInfo from "@/components/Card/CustomerInfo";

export default function QuoteDetail() {
  const router = useRouter();
  const { id } = router.query;

  const data = driverQuoteData.find((item) => item.id === Number(id));

  console.log(data);

  if (!data) {
    return <div>존재하지 않는 데이터입니다.</div>;
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
          <CustomerInfo quoteStatuses={data.quoteStatuses} data={data} />

          <p className="text-2xl-24px-semibold text-black-400">견적가</p>

          <p className="text-2xl-24px-bold text-black-400">{formatPrice(data.price)}</p>

          <div className="border border-line-100"></div>

          <div className="flex flex-col gap-40">
            <p className="text-2xl-24px-semibold text-black-400">견적 정보</p>
            <div className="flex h-285 flex-col justify-center gap-16 rounded-16 border border-line-100 bg-bg-200 px-40 py-32">
              <div className="flex gap-32 text-2lg-18px-regular">
                <p className="w-90 text-grayscale-300">견적 요청일</p>
                <p>{data.requestDate}</p>
              </div>
              <div className="flex gap-32 text-2lg-18px-regular">
                <p className="w-90 text-grayscale-300">서비스</p>
                <p>{data.quoteType}</p>
              </div>
              <div className="flex gap-32 text-2lg-18px-regular">
                <p className="w-90 text-grayscale-300">이용일</p>
                <p>
                  {data.movingDate} {data.movingTime}
                </p>
              </div>
              <div className="flex gap-32 text-2lg-18px-regular">
                <p className="w-90 text-grayscale-300">출발지</p>
                <p>{data.startLocationDetail}</p>
              </div>
              <div className="flex gap-32 text-2lg-18px-regular">
                <p className="w-90 text-grayscale-300">도착지</p>
                <p>{data.endLocationDetail}</p>
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
