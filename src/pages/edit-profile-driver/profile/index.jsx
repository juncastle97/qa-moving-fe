import React, { useState } from "react";
import SelectButton from "@/components/common/SelectButton";
import Image from "next/image";
import { useRouter } from "next/router";
import CustomButton from "@/components/common/Button";
import DriverProfileData from "@/mock/mypage-driver/mockData";

const ProfileEditPage = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(DriverProfileData);
  const [profileImage, setProfileImage] = useState(userData.profileImage);
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");

  const allServices = ["소형이사", "가정이사", "사무실이사"];
  const allRegions = [
    "서울",
    "경기",
    "인천",
    "강원",
    "충북",
    "충남",
    "세종",
    "대전",
    "전북",
    "전남",
    "광주",
    "경북",
    "경남",
    "대구",
    "울산",
    "부산",
    "제주",
  ];

  const handleServiceChange = (service) => {
    setUserData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleRegionChange = (region) => {
    setUserData((prev) => ({
      ...prev,
      regions: prev.regions.includes(region)
        ? prev.regions.filter((r) => r !== region)
        : [...prev.regions, region],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 필수 데이터 검증
    if (
      !userData.name ||
      !userData.experience ||
      !userData.shortIntro ||
      !userData.detailedDescription
    ) {
      alert("모든 필수 필드를 입력해주세요.");
      return;
    }

    setPasswordError("");
    setNewPasswordError("");

    console.log("Updated user data:", { ...userData, newPassword: newPw });
    // 여기서 데이터를 백엔드에 보내는 코드 작성

    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto w-1352 py-56">
      <h1 className="mb-40 border-b pb-40 text-2xl font-bold">프로필 수정</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex justify-between gap-72">
          <div className="flex w-640 flex-col gap-32">
            <div className="w-640">
              <label className="mb-16 block text-xl-20px-semibold text-black-300">
                프로필 이미지
              </label>
              <label
                className="flex h-100 w-100 cursor-pointer items-center justify-center rounded-6 bg-[#f6f6f6] lg:h-160 lg:w-160"
                htmlFor="file"
              >
                <div className="relative h-100 w-100 overflow-hidden rounded-6 lg:h-160 lg:w-160">
                  <Image src={profileImage} alt="프로필 사진 추가" fill />
                </div>
                <input id="file" type="file" className="hidden" onChange={handleImageChange} />
              </label>
            </div>

            <div className="border border-line-100"></div>

            <div>
              <label className="mb-16 block text-xl-20px-semibold text-black-300">경력</label>
              <input
                type="text"
                name="experience"
                value={userData.experience}
                onChange={handleInputChange}
                className="mt-1 block h-64 w-640 rounded-16 bg-bg-200 p-14 text-xl-20px-regular text-black-400 focus:outline-none"
              />
            </div>

            <div className="border border-line-100"></div>

            <div>
              <label className="mb-16 block text-xl-20px-semibold text-black-300">한 줄 소개</label>
              <input
                type="text"
                name="shortIntro"
                value={userData.shortIntro}
                onChange={handleInputChange}
                className="mt-1 block h-64 w-640 rounded-16 bg-bg-200 p-14 text-xl-20px-regular text-black-400 focus:outline-none"
              />
            </div>

            <div className="border border-line-100"></div>

            <div>
              <label className="mb-16 block text-xl-20px-semibold text-black-300">상세 설명</label>
              <textarea
                className="h-160 w-full resize-none rounded-16 bg-bg-200 px-24 py-14 text-xl-20px-regular focus:outline-none"
                rows="4"
                placeholder="최소 10자 이상 입력해 주세요"
                value={userData.detailedDescription}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, detailedDescription: e.target.value }))
                }
              ></textarea>
            </div>
          </div>

          <div className="flex w-640 flex-col gap-32">
            <div className="w-640">
              <label className="mb-8 block text-xl-20px-semibold text-black-300">이용 서비스</label>
              <div className="flex gap-6 lg:gap-12">
                {allServices.map((service) => (
                  <SelectButton
                    key={service}
                    text={service}
                    isSelected={userData.services.includes(service)}
                    onClick={() => handleServiceChange(service)}
                  />
                ))}
              </div>
            </div>
            <div className="border border-line-100"></div>
            <div>
              <label className="mb-16 block text-xl-20px-semibold text-black-300">
                내가 사는 지역
              </label>
              <div className="flex w-284 flex-wrap gap-x-8 gap-y-12 lg:w-422 lg:gap-x-14 lg:gap-y-18">
                {allRegions.map((region) => (
                  <SelectButton
                    key={region}
                    text={region}
                    isSelected={userData.regions.includes(region)}
                    onClick={() => handleRegionChange(region)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-1352 justify-between gap-10 pt-64">
          <button
            type="button"
            onClick={handleCancel}
            className="inline-flex h-64 w-660 items-center justify-center rounded-16 border border-grayscale-300 bg-white px-24 py-16 text-xl-20px-semibold text-grayscale-300 shadow-sm hover:bg-gray-50 focus:outline-none"
          >
            취소
          </button>
          <CustomButton
            type="submit"
            className="h-64 w-660 rounded-16 text-xl-20px-semibold"
            text="수정하기"
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileEditPage;
