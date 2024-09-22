import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import doneQuoteData from "@/mock/my-quote/doneMockData";
import Dropdown from "@/components/common/Dropdown";
import DriverList from "@/components/Card/DriverList";

export default function Done() {
  const router = useRouter();
  const currentPath = router.pathname;
  const [filter, setFilter] = useState("전체"); // 필터 상태 관리

  const tabs = [
    { name: "대기 중인 견적", path: "/my-quote/wait" },
    { name: "받았던 견적", path: "/my-quote/done" },
  ];

  function formatDate(movingDate) {
    const parts = movingDate.split(". ");
    const year = parts[0].slice(2);
    const month = parts[1];
    const day = parts[2].split("(")[0];

    return `${year}.${month}.${day}`;
  }

  // 드롭다운에서 선택한 옵션에 따른 필터링 로직
  const filteredDriverList =
    filter === "확정한 견적서"
      ? doneQuoteData.driverList.filter((data) => data.check === true)
      : doneQuoteData.driverList;

  return (
    <>
      <div className="h-80 px-260 pt-16">
        <nav className="-mb-px flex gap-32">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.path}
              className={`relative inline-flex items-center border-b-1 py-14 text-xl-20px-semibold ${
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
      <div className="min-h-screen overflow-x-auto bg-bg-200 px-260 py-64">
        <div className="flex w-1400 flex-col justify-center gap-48 rounded-40 bg-white px-40 py-48 shadow-custom">
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

          <div className="flex flex-col gap-40">
            <p className="text-2xl-24px-semibold text-black-400">견적 정보</p>
            <div className="w-190">
              <Dropdown
                options={["전체", "확정한 견적서"]}
                blue
                onOptionSelect={(value) => setFilter(value)} // onOptionSelect를 제대로 연결
              />
            </div>

            {filteredDriverList.map((data, index) => (
              <div key={index}>
                <DriverList quoteStatuses={data.quoteStatuses} data={data} small />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
