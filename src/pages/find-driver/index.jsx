import React, { useState, useEffect } from "react";
import Image from "next/image";
import Dropdown from "@/components/common/Dropdown";
import { DROPDOWN_BTN } from "@/constants/location";
import LikedDriverList from "@/components/Card/LikedDriverList";
import DriverList from "@/components/Card/DriverList";

export default function FindDriver() {
  const [location, setLocation] = useState("지역");
  const [service, setService] = useState("서비스");
  const [sortOption, setSortOption] = useState("리뷰 많은 순");
  const [key, setKey] = useState(0);

  const handleOptionSelect = (option, type) => {
    if (type === "location") {
      setLocation(option);
    } else if (type === "service") {
      setService(option);
    } else if (type === "sort") {
      setSortOption(option);
    }
  };

  const resetDropdowns = () => {
    setLocation("지역");
    setService("서비스");
    setSortOption("리뷰 많은 순");
    setKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    console.log(location, service, sortOption);
  }, [location, service, sortOption]);

  return (
    <>
      <div className="h-96 w-full bg-white px-260 py-32">
        <h1 className="text-2xl-24px-semibold">기사님 찾기</h1>
      </div>
      <div className="mb-50 flex gap-107">
        <div className="flex w-598 flex-col gap-32 pl-260 pr-10">
          <div className="flex justify-between border-b border-line-200 py-16">
            <p className="text-xl-20px-medium">필터</p>
            <button className="text-lg-16px-medium text-grayscale-300" onClick={resetDropdowns}>
              초기화
            </button>
          </div>
          <div>
            <p className="mb-16 text-2lg-18px-semibold text-black-400">지역을 선택해주세요</p>
            <div className="w-328">
              <Dropdown
                key={`location-${key}`}
                options={DROPDOWN_BTN}
                defaultOption={location}
                onOptionSelect={(option) => handleOptionSelect(option, "location")}
                big
                blue
              />
            </div>
          </div>
          <div>
            <p className="mb-16 text-2lg-18px-semibold text-black-400">어떤 서비스가 필요하세요?</p>
            <div className="w-328">
              <Dropdown
                key={`service-${key}`}
                options={["전체", "소형이사", "가정이사", "사무실이사"]}
                defaultOption={service}
                onOptionSelect={(option) => handleOptionSelect(option, "service")}
                big
                blue
              />
            </div>
          </div>
          <div className="mt-14 flex flex-col gap-16">
            <p className="text-xl-20px-semibold text-black-400">찜한 기사님</p>
            <LikedDriverList quoteStatuses={["Office Moving", "Requested Quote"]} />
            <LikedDriverList quoteStatuses={["Office Moving", "Requested Quote"]} />
            <LikedDriverList quoteStatuses={["Office Moving", "Requested Quote"]} />
          </div>
        </div>
        <div className="flex flex-col gap-30">
          <div className="flex flex-col gap-24">
            <div className="ml-auto w-114">
              <Dropdown
                key={`sort-${key}`}
                options={["리뷰 많은 순", "평점 높은 순", "경력 높은 순", "확정 많은 순"]}
                defaultOption={sortOption}
                onOptionSelect={(option) => handleOptionSelect(option, "sort")}
                none
              />
            </div>
            <input
              placeholder="어떤 기사님을 찾고 계셰요?"
              className="h-64 w-955 rounded-16 bg-bg-200 px-24 py-14 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-48">
            <DriverList quoteStatuses={["Office Moving", "Requested Quote"]} />
            <DriverList quoteStatuses={["Office Moving", "Requested Quote"]} />
            <DriverList quoteStatuses={["Office Moving", "Requested Quote"]} />
            <DriverList quoteStatuses={["Office Moving", "Requested Quote"]} />
            <DriverList quoteStatuses={["Office Moving", "Requested Quote"]} />
          </div>
        </div>
      </div>
    </>
  );
}
