import DriverList from "@/components/Card/DriverList";
import React from "react";
import { useRouter } from "next/router";
import mockDriverDataList from "@/mock/my-quote/waitMockData";
import Link from "next/link";
import CustomButton from "@/components/common/Button";
import Image from "next/image";

export default function QuoteDetail() {
  const router = useRouter();
  const { id } = router.query;

  const currentPath = router.pathname;

  const tabs = [
    { name: "대기 중인 견적", path: "/my-quote/wait" },
    { name: "받았던 견적", path: "/my-quote/done" },
  ];

  const data = mockDriverDataList.find((item, index) => index + 1 === Number(id));

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

  return (
    <>
      <div className="h-80 px-260 pt-16">
        <nav className="-mb-px flex gap-32">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.path}
              className={`relative inline-flex items-center border-b-2 py-14 text-xl-20px-semibold ${
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
      <div className="h-96 w-full bg-white px-260 py-32">
        <h1 className="text-2xl-24px-semibold">견적 상세</h1>
      </div>
      <div className="flex gap-117 px-260">
        <div className="flex w-955 flex-col gap-40">
          <DriverList quoteStatuses={data.quoteStatuses} data={data} />
          <div className="border border-line-100"></div>
          <div className="flex flex-col gap-40">
            <p className="text-2xl-24px-semibold text-black-400">견적 정보</p>

            <div className="flex h-285 flex-col justify-center gap-16 rounded-16 border border-line-100 bg-bg-100 px-40 py-32">
              <div className="flex gap-32 text-2lg-18px-regular">
                <p className="w-90 text-grayscale-300">견적 요청일</p>
                <p>{formatDate(data.movingDate)}</p>
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
          <CustomButton
            text="견적 확정하기"
            type="button"
            className="h-64 w-328 rounded-16 text-xl-20px-semibold"
          />

          <div className="border-t border-line-100"></div>

          <div className="flex flex-col gap-22">
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
