import Image from "next/image";
import { RADIO_BTN } from "@/constants/location";
import { MOVE_TYPES } from "@/constants/moveType";
import { useState } from "react";
import CustomButton from "@/components/common/Button";
import SelectButton from "@/components/common/SelectButton";

export default function ProfileUser() {
  const [selectedButtonType, setSelectedButtonType] = useState(null);
  const [selectedButtonRegion, setSelectedButtonRegion] = useState(null);

  const handleButtonClickType = (text) => {
    setSelectedButtonType(text);
  };
  const handleButtonClickRegion = (text) => {
    setSelectedButtonRegion(text);
  };

  const error = false;

  return (
    <div className="mx-auto mb-40 mt-16 w-327 lg:mt-24 lg:w-640">
      <form>
        <div className="flex flex-col gap-16 lg:gap-32">
          <p className="text-2lg-18px-bold text-black-400 lg:text-3xl-32px-semibold">
            기사님 프로필 등록
          </p>
          <p className="text-xs-12px-regular text-black-100 lg:text-xl-20px-regular lg:text-black-200">
            추가 정보를 입력하여 회원가입을 완료해주세요.
          </p>
        </div>

        <div className="mb-20 mt-16 flex flex-col gap-20 lg:mb-32 lg:mt-32 lg:gap-32">
          <div className="border-t-1 border-line-100"></div>

          <div className="flex flex-col gap-16">
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

          <div className="flex flex-col gap-16">
            <p className="flex gap-4 text-lg-16px-semibold text-black-300 lg:text-xl-20px-semibold">
              이름<span className="text-primary-blue-300">*</span>
            </p>
            <input
              type="text"
              id="name"
              placeholder="기사님 성함을 입력해 주세요"
              className={`h-54 w-full rounded-16 bg-bg-200 p-14 text-lg-16px-regular outline-none lg:h-64 lg:text-xl-20px-regular ${
                error && showError ? "border-secondary-red-200" : "border-line-200"
              }`}
              // error={errors.name}
              // {...register("name", { required: true })}
            />
          </div>

          <div className="border-t-1 border-line-100"></div>

          <div className="flex flex-col gap-16">
            <p className="flex gap-4 text-lg-16px-semibold text-black-300 lg:text-xl-20px-semibold">
              경력<span className="text-primary-blue-300">*</span>
            </p>
            <input
              type="text"
              id="name"
              placeholder="기사님의 경력을 입력해 주세요"
              className={`h-54 w-full rounded-16 bg-bg-200 p-14 text-lg-16px-regular outline-none lg:h-64 lg:text-xl-20px-regular ${
                error && showError ? "border-secondary-red-200" : "border-line-200"
              }`}
              // error={errors.name}
              // {...register("name", { required: true })}
            />
          </div>

          <div className="border-t-1 border-line-100"></div>

          <div className="flex flex-col gap-16">
            <p className="flex gap-4 text-lg-16px-semibold text-black-300 lg:text-xl-20px-semibold">
              한 줄 소개<span className="text-primary-blue-300">*</span>
            </p>
            <input
              type="text"
              id="name"
              placeholder="한 줄 소개를 입력해 주세요"
              className={`h-54 w-full rounded-16 bg-bg-200 p-14 text-lg-16px-regular outline-none lg:h-64 lg:text-xl-20px-regular ${
                error && showError ? "border-secondary-red-200" : "border-line-200"
              }`}
              // error={errors.name}
              // {...register("name", { required: true })}
            />
          </div>

          <div className="border-t-1 border-line-100"></div>

          <div className="flex flex-col gap-16">
            <p className="flex gap-4 text-lg-16px-semibold text-black-300 lg:text-xl-20px-semibold">
              상세 설명<span className="text-primary-blue-300">*</span>
            </p>
            <textarea
              type="text"
              id="name"
              placeholder="상세 내용을 입력해 주세요"
              className={`h-160 w-full resize-none rounded-16 bg-bg-200 p-14 text-lg-16px-regular outline-none lg:h-64 lg:text-xl-20px-regular ${
                error && showError ? "border-secondary-red-200" : "border-line-200"
              }`}
              // error={errors.name}
              // {...register("name", { required: true })}
              // 최소 10자 이상
            />
          </div>

          <div className="border-t-1 border-line-100"></div>

          <div className="flex flex-col gap-16 lg:gap-32">
            <p className="flex gap-4 text-lg-16px-semibold text-black-300 lg:text-xl-20px-semibold">
              제공 서비스<span className="text-primary-blue-300">*</span>
            </p>
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

        <div className="mb-32 flex flex-col gap-16 lg:mb-56 lg:gap-32">
          <p className="flex gap-4 text-lg-16px-semibold text-black-300 lg:text-xl-20px-semibold">
            서비스 가능 지역<span className="text-primary-blue-300">*</span>
          </p>
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
    </div>
  );
}
