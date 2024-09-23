import React, { useState } from "react";
import CustomButton from "@/components/common/Button";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useRouter } from "next/router";
import LocationModal from "@/components/Modal/Location";

const MovingQuoteRequest = () => {
  const [step, setStep] = useState(1);
  const [movingType, setMovingType] = useState("");
  const [movingDate, setMovingDate] = useState("");
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");

  const [showDepartureModal, setShowDepartureModal] = useState(false);
  const [showDestinationModal, setShowDestinationModal] = useState(false);

  const handleCloseDepartureModal = () => setShowDepartureModal(false);
  const handleCloseDestinationModal = () => setShowDestinationModal(false);

  const handleDepartureSubmit = (location) => {
    setDeparture(location);
    console.log("출발지:", location);
  };

  const handleDestinationSubmit = (location) => {
    setDestination(location);
    console.log("도착지:", location);
  };

  const router = useRouter();

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = () => {
    try {
      console.log("견적 요청:", { movingType, movingDate, departure, destination });
      // 여기에 견적 요청 로직 추가
      router.push("/find-driver");
    } catch (error) {
      console.error("오류", error.message);
    }
  };

  const getMovingTypeText = () => {
    switch (movingType) {
      case "small":
        return "소형이사 (원룸, 투룸, 20평대 미만)";
      case "home":
        return "가정이사 (쓰리룸, 20평대 이상)";
      case "office":
        return "사무실이사 (사무실, 상업공간)";
      default:
        return null;
    }
  };

  const movingTypeText = getMovingTypeText();

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      <div className="flex h-128 w-full flex-col gap-24 px-260 py-32">
        <h1 className="text-2xl-24px-semibold">견적 요청</h1>
        <div className="mb-6 h-2.5 w-full rounded-full bg-line-200">
          <div
            className="h-2.5 rounded-full bg-primary-blue-300"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="min-h-[calc(100vh-188px)] bg-bg-200 px-260 lg:min-h-[calc(100vh-216px)]">
        {step === 1 && (
          <div className="flex flex-col gap-24 pt-40">
            <div className="custom-rounded-text flex h-66 w-520 items-center justify-center bg-white text-2lg-18px-medium text-black-400">
              {"몇 가지 정보만 알려주시면 최대 5개의 견적을 받을 수 있어요 :)"}
            </div>
            <div className="custom-rounded-text flex h-66 w-270 items-center justify-center bg-white text-2lg-18px-medium text-black-400">
              이사 종류를 선택해 주세요.
            </div>
            <div className="custom-rounded-input flex w-640 flex-col gap-16 bg-white p-40">
              <label
                className={`flex items-center gap-8 border ${
                  movingType === "small"
                    ? "border-primary-blue-300 bg-primary-blue-50"
                    : "border-gray-300"
                } h-66 rounded-16 px-32`}
              >
                <input
                  type="radio"
                  value="small"
                  checked={movingType === "small"}
                  onChange={(e) => setMovingType(e.target.value)}
                  className="form-radio"
                />
                <span className="text-2lg-18px-semibold text-black-400">
                  소형이사 (원룸, 투룸, 20평대 미만)
                </span>
              </label>
              <label
                className={`flex items-center gap-8 border ${
                  movingType === "home"
                    ? "border-primary-blue-300 bg-primary-blue-50"
                    : "border-gray-300"
                } h-66 rounded-16 px-32`}
              >
                <input
                  type="radio"
                  value="home"
                  checked={movingType === "home"}
                  onChange={(e) => setMovingType(e.target.value)}
                  className="form-radio"
                />
                <span className="text-2lg-18px-semibold text-black-400">
                  가정이사 (쓰리룸, 20평대 이상)
                </span>
              </label>
              <label
                className={`flex items-center gap-8 border ${
                  movingType === "office"
                    ? "border-primary-blue-300 bg-primary-blue-50"
                    : "border-gray-300"
                } h-66 rounded-16 px-32`}
              >
                <input
                  type="radio"
                  value="office"
                  checked={movingType === "office"}
                  onChange={(e) => setMovingType(e.target.value)}
                  className="form-radio"
                />
                <span className="text-2lg-18px-semibold text-black-400">
                  사무실이사 (사무실, 상업공간)
                </span>
              </label>
              <CustomButton
                text="선택완료"
                type="submit"
                className="mt-8 h-54 w-full rounded-16 text-lg-16px-semibold lg:h-64 lg:text-xl-20px-semibold"
                disabled={!movingType}
                onClick={handleNext}
              />
            </div>
            {movingTypeText && (
              <div className="mt-8 flex justify-end">
                <div className="custom-rounded-answer flex h-66 items-center justify-center self-end bg-primary-blue-300 px-40 py-20 text-2lg-18px-medium text-white">
                  {movingTypeText}
                </div>
              </div>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-24 pt-40">
            <div className="custom-rounded-text flex h-66 w-270 items-center justify-center bg-white text-2lg-18px-medium text-black-400">
              이사 예정일을 선택해주세요.
            </div>
            <div className="flex w-640 flex-col items-center justify-center gap-24 rounded-32 bg-white py-24">
              <Calendar onChange={(date) => setMovingDate(date.toISOString())} value={movingDate} />
              <CustomButton
                text="선택완료"
                type="submit"
                className="h-54 w-560 rounded-16 text-lg-16px-semibold lg:h-64 lg:text-xl-20px-semibold"
                disabled={!movingDate}
                onClick={handleNext}
              />
            </div>
            {movingDate && (
              <div className="mt-8 flex justify-end">
                <div className="custom-rounded-answer flex h-66 items-center justify-center self-end bg-primary-blue-300 px-40 py-20 text-2lg-18px-medium text-white">
                  {formatDate(movingDate)}
                </div>
              </div>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col gap-24 pt-40">
            <div className="custom-rounded-text flex h-66 w-270 items-center justify-center bg-white text-2lg-18px-medium text-black-400">
              이사 지역을 선택해주세요.
            </div>
            <div className="flex h-297 w-624 flex-col justify-center gap-21 rounded-32 bg-white p-32">
              <div>
                <label className="mb-16 block text-2lg-18px-semibold">출발지</label>
                <button
                  onClick={() => setShowDepartureModal(true)}
                  className="flex h-64 w-560 items-center rounded-16 border border-primary-blue-300 px-24 py-16 text-xl-20px-semibold text-primary-blue-300"
                >
                  출발지 선택하기
                </button>
              </div>
              <div>
                <label className="mb-16 block text-2lg-18px-semibold">도착지</label>
                <button
                  onClick={() => setShowDestinationModal(true)}
                  className="flex h-64 w-560 items-center rounded-16 border border-primary-blue-300 px-24 py-16 text-xl-20px-semibold text-primary-blue-300"
                >
                  도착지 선택하기
                </button>
              </div>
            </div>
            {showDepartureModal && (
              <LocationModal
                onClose={handleCloseDepartureModal}
                onSubmit={handleDepartureSubmit}
                departure
              />
            )}
            {showDestinationModal && (
              <LocationModal
                onClose={handleCloseDestinationModal}
                onSubmit={handleDestinationSubmit}
              />
            )}

            {departure && destination && (
              <div className="custom-rounded-answer flex w-624 flex-col justify-center gap-21 self-end bg-white p-32">
                <div>
                  <label className="mb-16 block text-2lg-18px-semibold">출발지</label>
                  <button className="flex h-64 w-560 items-center rounded-16 border border-primary-blue-300 px-24 py-16 text-xl-20px-semibold text-primary-blue-300">
                    {departure}
                  </button>
                  <div className="mr-8 mt-8 cursor-pointer text-right text-lg-16px-medium text-black-400 underline">
                    수정하기
                  </div>
                </div>
                <div>
                  <label className="mb-16 block text-2lg-18px-semibold">도착지</label>
                  <button className="flex h-64 w-560 items-center rounded-16 border border-primary-blue-300 px-24 py-16 text-xl-20px-semibold text-primary-blue-300">
                    {destination}
                  </button>
                  <div className="mr-8 mt-8 cursor-pointer text-right text-lg-16px-medium text-black-400 underline">
                    수정하기
                  </div>
                </div>
                <CustomButton
                  text="견적 확정하기"
                  type="submit"
                  className="mt-8 h-64 w-560 rounded-16 p-16 text-lg-16px-semibold lg:text-xl-20px-semibold"
                  // disabled={!departure || !destination}
                  onClick={handleSubmit}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovingQuoteRequest;
