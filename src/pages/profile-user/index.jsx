import CustomButton from "@/components/common/Button";
import SelectButton from "@/components/common/SelectButton";
import Image from "next/image";
import { RADIO_BTN } from "@/constants/location";
import { MOVE_TYPES } from "@/constants/moveType";
import { useState } from "react";

export default function ProfileUser() {
  const [selectedButtonType, setSelectedButtonType] = useState(null);
  const [selectedButtonRegion, setSelectedButtonRegion] = useState(null);

  const handleButtonClickType = (text) => {
    setSelectedButtonType(text);
  };
  const handleButtonClickRegion = (text) => {
    setSelectedButtonRegion(text);
  };

  return (
    <div className="mx-auto mt-16 w-327 lg:mt-24 lg:w-640 mb-40">
      <form>
        <div className="flex flex-col gap-16 lg:gap-32">
          <p className="text-2lg-18px-bold text-black-400 lg:text-3xl-32px-semibold">프로필 등록</p>
          <p className="text-xs-12px-regular text-black-100 lg:text-xl-20px-regular lg:text-black-200">
            추가 정보를 입력하여 회원가입을 완료해주세요.
          </p>
        </div>

        <div className="mb-20 mt-16 flex flex-col gap-20 lg:mb-32 lg:mt-32 lg:gap-32">
          <div className="border-t-1 border-line-100"></div>

          <div className="flex flex-col gap-16 lg:gap-24">
            <p className="text-lg-16px-semibold text-black-300 lg:text-xl-20px-semibold">
              프로필 이미지
            </p>
            <label
              className="flex h-100 w-100 cursor-pointer items-center justify-center rounded-6 bg-[#f6f6f6] lg:h-160 lg:w-160"
              htmlFor="file"
            >
              <div className="relative h-32 w-32 lg:h-40 lg:w-40">
                <Image src="/icons/ic-gallery.svg" alt="프로필 사진 추가" fill />
              </div>
              <input id="file" type="file" className="hidden" />
            </label>
          </div>

          <div className="border-t-1 border-line-100"></div>

          <div className="flex flex-col gap-24 lg:gap-32">
            <div className="flex flex-col gap-8">
              <p className="text-lg-16px-semibold text-black-300 lg:text-xl-20px-semibold">
                이용 서비스
              </p>
              <p className="text-xs-12px-regular text-grayscale-400 lg:text-lg-16px-regular">
                *견적 요청 시 이용 서비스를 선택할 수 있어요.
              </p>
            </div>
            <div className="flex gap-6 lg:gap-12">
              {MOVE_TYPES.map((type, index) => (
                <SelectButton
                  key={index}
                  text={type}
                  isSelected={selectedButtonType === type}
                  onClick={handleButtonClickType}
                />
              ))}
            </div>
          </div>

          <div className="border-t-1 border-line-100"></div>
        </div>

        <div className="mb-32 flex flex-col gap-24 lg:mb-56 lg:gap-32">
          <div className="flex flex-col gap-8">
            <p className="text-lg-16px-semibold text-black-300 lg:text-xl-20px-semibold">
              내가 사는 지역
            </p>
            <p className="text-xs-12px-regular text-grayscale-400 lg:text-lg-16px-regular">
              *견적 요청 시 지역을 설정할 수 있어요.
            </p>
          </div>
          <div className="flex w-284 flex-wrap gap-x-8 gap-y-12 lg:w-422 lg:gap-x-14 lg:gap-y-18">
            {RADIO_BTN.map((region, index) => (
              <SelectButton
                key={index}
                text={region}
                isSelected={selectedButtonRegion === region}
                onClick={handleButtonClickRegion}
              />
            ))}
          </div>
        </div>

        <CustomButton
          text="시작하기"
          type="submit"
          className="h-54 w-full rounded-16 text-lg-16px-semibold lg:h-64 lg:text-xl-20px-semibold"
          // disabled={!isValid}
        />
      </form>

      <div className="flex h-54 w-full items-center justify-center rounded-16 text-lg-16px-semibold text-grayscale-400 underline underline-offset-2 lg:h-64 lg:text-xl-20px-semibold">
        <p className="cursor-pointer">건너뛰기</p>
      </div>
    </div>
  );
}
