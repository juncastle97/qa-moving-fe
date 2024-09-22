import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import DriverProfileData from "@/mock/mypage-driver/mockData";
import CustomButton from "@/components/common/Button";
import driverQuoteData from "@/mock/my-quote-driver/mockData";
import CustomerInfo from "@/components/Card/CustomerInfo";

export default function MypageDriver() {
  const router = useRouter();
  const filteredQuoteData = driverQuoteData.filter((data) => !data.reject);

  return (
    <div className="mb-60 px-260">
      <div className="mb-24 h-96 py-32 text-2xl-24px-semibold">마이페이지</div>
      <div className="flex h-272 w-1400 flex-col gap-24 rounded-16 border border-grayscale-100 bg-bg-100 p-24">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-8">
            <p className="text-2xl-24px-semibold text-black-300">{DriverProfileData.name}</p>
            <p className="text-xl-20px-regular text-grayscale-400">
              {DriverProfileData.detailedDescription}
            </p>
          </div>
          <div className="flex gap-16">
            <button
              onClick={() => router.push("/edit-profile-driver/basic-info")}
              className="h-64 w-280 rounded-16 border border-grayscale-200 bg-bg-200 p-16 text-xl-20px-semibold text-grayscale-300 hover:bg-bg-100"
            >
              기본 정보 수정
            </button>
            <CustomButton
              text="내 프로필 수정"
              className="h-64 w-280 rounded-16 p-16 text-xl-20px-semibold"
              onClick={() => router.push("/edit-profile-driver/profile")}
            />
          </div>
        </div>
        <div className="flex items-center gap-24 rounded-6 border border-line-200 px-18 py-24">
          <div className="relative h-80 w-80 overflow-hidden rounded-full border-3 border-black">
            <Image src="/images/user-profile-img.jpeg" alt="기사님 프로필" fill />
          </div>
          <div className="flex flex-col gap-16">
            <div className="flex items-center gap-16 text-lg-16px-medium">
              <div className="flex gap-6">
                <div className="relative h-24 w-24">
                  <Image src={"/images/star.png"} alt="star" fill />
                </div>
                <p className="text-black-300">rating</p>
                <p className="text-grayscale-300">({DriverProfileData.reviewCount})</p>
              </div>
              <div className="h-14 border border-line-200"></div>
              <div className="flex gap-6">
                <p className="text-grayscale-300">경력</p>
                <p className="text-black-300">{DriverProfileData.experience}</p>
              </div>
              <div className="h-14 border border-line-200"></div>
              <div className="flex gap-6">
                <p className="text-black-300">{DriverProfileData.confirmedCount}건</p>
                <p className="text-grayscale-300">확정</p>
              </div>
            </div>
            <div className="flex items-center gap-16 text-lg-16px-medium">
              <div className="flex items-center gap-6">
                <p className="rounded-4 bg-bg-200 px-6 py-4 text-2lg-18px-regular text-grayscale-500">
                  제공 서비스
                </p>
                {DriverProfileData.services.map((service, index) => (
                  <p key={index} className="text-2lg-18px-medium text-black-300">
                    {service}
                    {index < DriverProfileData.services.length - 1 && ", "}
                  </p>
                ))}
              </div>
              <div className="h-14 border border-line-200"></div>
              <div className="flex items-center gap-6">
                <p className="rounded-4 bg-bg-200 px-6 py-4 text-2lg-18px-regular text-grayscale-500">
                  지역
                </p>
                {DriverProfileData.regions.map((region, index) => (
                  <p key={index} className="text-2lg-18px-medium text-black-300">
                    {region}
                    {index < DriverProfileData.regions.length - 1 && ", "}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-24 mt-60 h-96 py-32 text-2xl-24px-semibold">확정 견적</div>
        <div className="flex flex-col gap-48">
          {filteredQuoteData.map((data, index) => (
            <CustomerInfo key={index} quoteStatuses={data.quoteStatuses} data={data} line />
          ))}
        </div>
      </div>
    </div>
  );
}
