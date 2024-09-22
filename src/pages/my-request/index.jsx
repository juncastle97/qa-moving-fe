import React, { useState } from "react";
import Dropdown from "@/components/common/Dropdown";
import DriverRequestData from "@/mock/myrequest/mockData";
import QuoteRequests from "@/components/Card/QuoteRequests";
import Image from "next/image";
import driverData from "@/mock/myrequest/driverData";

export default function MyRequest() {
  // 체크박스 상태 관리
  const [selectedMoveTypes, setSelectedMoveTypes] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    serviceArea: false,
    requestedQuote: false,
  });
  const [selectMovingTypeAll, setSelectMovingTypeAll] = useState(false);
  const [selectFilterAll, setSelectFilterAll] = useState(false);
  const [sortOrder, setSortOrder] = useState("이사 빠른순");

  const getMoveTypeLabel = (type) => {
    switch (type) {
      case "Small Moving":
        return "소형이사";
      case "Home Moving":
        return "가정이사";
      case "Office Moving":
        return "사무실이사";
      default:
        return type;
    }
  };

  const handleMoveTypeToggle = (moveType) => {
    if (selectedMoveTypes.includes(moveType)) {
      setSelectedMoveTypes(selectedMoveTypes.filter((type) => type !== moveType));
    } else {
      setSelectedMoveTypes([...selectedMoveTypes, moveType]);
    }
  };

  const handleFilterToggle = (filterType) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filterType]: !prevState[filterType],
    }));
  };

  const handleSelectMovingTypeAll = () => {
    if (selectMovingTypeAll) {
      setSelectedMoveTypes([]);
    } else {
      setSelectedMoveTypes(["Small Moving", "Home Moving", "Office Moving"]);
    }
    setSelectMovingTypeAll(!selectMovingTypeAll);
  };

  const handleSelectFilterAll = () => {
    if (selectFilterAll) {
      setSelectedFilters({
        serviceArea: false,
        requestedQuote: false,
      });
    } else {
      setSelectedFilters({
        serviceArea: true,
        requestedQuote: true,
      });
    }
    setSelectFilterAll(!selectFilterAll);
  };

  // 필터링된 데이터 가져오기
  const filteredData = DriverRequestData.filter((data) => {
    // 이사 유형 필터 적용
    if (
      selectedMoveTypes.length > 0 &&
      !selectedMoveTypes.some((type) => data.quoteStatuses.includes(type))
    ) {
      return false;
    }

    // 지정 견적 요청 필터 적용
    if (selectedFilters.requestedQuote && !data.quoteStatuses.includes("Requested Quote")) {
      return false;
    }

    // 서비스 가능 지역 필터 적용
    if (
      selectedFilters.serviceArea &&
      (!data.location ||
        !Array.isArray(data.location) ||
        !data.location.some((loc) => driverData.location.includes(loc)))
    ) {
      return false;
    }

    return true;
  });

  // 정렬 로직 추가
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortOrder === "이사 빠른순") {
      return new Date(a.movingDate) - new Date(b.movingDate);
    } else if (sortOrder === "요청일 빠른순") {
      return new Date(a.requestDate) - new Date(b.requestDate);
    }
    return 0; // 기본값으로 정렬하지 않음
  });

  const handleSortChange = (option) => {
    setSortOrder(option);
  };

  // 이사 유형 필터에 따른 데이터 개수 계산
  const getMoveTypeCount = (type) => {
    return DriverRequestData.filter((data) => data.quoteStatuses.includes(type)).length;
  };

  // 필터링된 데이터 개수 계산
  const serviceAreaCount = DriverRequestData.filter(
    (data) =>
      data.location &&
      Array.isArray(data.location) &&
      data.location.some((loc) => driverData.location.includes(loc)),
  ).length;

  const requestedQuoteCount = DriverRequestData.filter((data) =>
    data.quoteStatuses.includes("Requested Quote"),
  ).length;

  return (
    <>
      <div className="h-96 w-full bg-white px-260 py-32">
        <h1 className="text-2xl-24px-semibold">받은 요청</h1>
      </div>
      <div className="mb-50 flex gap-107">
        <div className="flex w-598 flex-col gap-32 pl-260 pr-10">
          <div className="flex w-328 justify-between border-b border-line-200 px-10 py-16">
            <p className="text-xl-20px-medium">이사 유형</p>
            <div className="flex items-center gap-12">
              <div
                className={`flex h-20 w-20 cursor-pointer items-center justify-center rounded-4 border ${selectMovingTypeAll ? "border-primary-blue-300 bg-primary-blue-300" : "border-line-200"}`}
                onClick={handleSelectMovingTypeAll}
              >
                {selectMovingTypeAll && (
                  <Image src={"/icons/check-box.svg"} alt="check" width={12} height={10} />
                )}
              </div>
              <div className="text-lg-16px-medium text-grayscale-300">전체 선택</div>
            </div>
          </div>
          {["Small Moving", "Home Moving", "Office Moving"].map((type, index) => (
            <div key={index} className="flex w-328 justify-between border-b border-line-200 p-16">
              <p className="text-xl-20px-medium">
                {getMoveTypeLabel(type)} ({getMoveTypeCount(type)})
              </p>
              <div
                className={`flex h-20 w-20 cursor-pointer items-center justify-center rounded-4 border ${selectedMoveTypes.includes(type) ? "border-primary-blue-300 bg-primary-blue-300" : "border-line-200"}`}
                onClick={() => handleMoveTypeToggle(type)}
              >
                {selectedMoveTypes.includes(type) && (
                  <Image src={"/icons/check-box.svg"} alt="check" width={12} height={10} />
                )}
              </div>
            </div>
          ))}

          <div className="flex w-328 justify-between border-b border-line-200 py-16">
            <p className="text-xl-20px-medium">필터</p>
            <div className="flex items-center gap-12">
              <div
                className={`flex h-20 w-20 cursor-pointer items-center justify-center rounded-4 border ${selectFilterAll ? "border-primary-blue-300 bg-primary-blue-300" : "border-line-200"}`}
                onClick={handleSelectFilterAll}
              >
                {selectFilterAll && (
                  <Image src={"/icons/check-box.svg"} alt="check" width={12} height={10} />
                )}
              </div>
              <div className="text-lg-16px-medium text-grayscale-300">전체 선택</div>
            </div>
          </div>
          <div className="flex w-328 justify-between border-b border-line-200 p-16">
            <p className="text-xl-20px-medium">서비스 가능 지역 ({serviceAreaCount})</p>
            <div
              className={`flex h-20 w-20 cursor-pointer items-center justify-center rounded-4 border ${selectedFilters.serviceArea ? "border-primary-blue-300 bg-primary-blue-300" : "border-line-200"}`}
              onClick={() => handleFilterToggle("serviceArea")}
            >
              {selectedFilters.serviceArea && (
                <Image src={"/icons/check-box.svg"} alt="check" width={12} height={10} />
              )}
            </div>
          </div>
          <div className="flex w-328 justify-between border-b border-line-200 p-16">
            <p className="text-xl-20px-medium">지정 견적 요청 ({requestedQuoteCount})</p>
            <div
              className={`flex h-20 w-20 cursor-pointer items-center justify-center rounded-4 border ${selectedFilters.requestedQuote ? "border-primary-blue-300 bg-primary-blue-300" : "border-line-200"}`}
              onClick={() => handleFilterToggle("requestedQuote")}
            >
              {selectedFilters.requestedQuote && (
                <Image src={"/icons/check-box.svg"} alt="check" width={12} height={10} />
              )}
            </div>
          </div>
        </div>

        {/* 필터된 데이터 */}
        <div className="flex flex-col gap-24">
          <div className="flex flex-col gap-24">
            <input
              placeholder="어떤 고객님을 찾고 계셰요?"
              className="h-64 w-955 rounded-16 bg-bg-200 px-24 py-14 focus:outline-none"
            />
          </div>
          <div className="mb-8 flex w-955 items-center justify-between">
            <p>전체 {sortedData.length}건</p>
            <div className="w-120">
              <Dropdown
                options={["이사 빠른순", "요청일 빠른순"]}
                defaultOption={sortOrder}
                onOptionSelect={handleSortChange}
                none
              />
            </div>
          </div>
          <div className="flex flex-col gap-48">
            {sortedData.map(
              (
                data,
                index,
              ) => (
                <QuoteRequests key={index} quoteStatuses={data.quoteStatuses} data={data} />
              ),
            )}
          </div>
        </div>
      </div>
    </>
  );
}
