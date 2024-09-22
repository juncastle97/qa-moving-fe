import React, { useState } from "react";
import SelectButton from "@/components/common/SelectButton";
import Image from "next/image";
import { useRouter } from "next/router";
import editUserData from "@/mock/edit-profile/editUserData";
import CustomButton from "@/components/common/Button";

const ProfileEditPage = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(editUserData);
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");

  const [profileImage, setProfileImage] = useState(userData.profileImage);

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
    switch (name) {
      case "currentPassword":
        setCurrentPw(value);
        break;
      case "newPassword":
        setNewPw(value);
        validateNewPassword(value, confirmPassword);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        validateNewPassword(newPw, value);
        break;
      default:
        setUserData({ ...userData, [name]: value });
    }
  };

  const validateNewPassword = (newPassword, confirmPass) => {
    if (newPassword !== confirmPass) {
      setNewPasswordError("새 비밀번호가 일치하지 않습니다.");
    } else {
      setNewPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 필수 데이터 검증
    if (!userData.name || !userData.phoneNumber || !currentPw || !newPw || !confirmPassword) {
      alert("모든 필수 필드를 입력해주세요.");
      return;
    }

    if (currentPw !== userData.currentPassword) {
      setPasswordError("현재 비밀번호가 일치하지 않습니다.");
      return;
    }
    if (newPw !== confirmPassword) {
      setNewPasswordError("새 비밀번호가 일치하지 않습니다.");
      return;
    }

    setPasswordError("");
    setNewPasswordError("");

    console.log("Updated user data:", { ...userData, newPassword: newPw });
    // 여기서 데이터를 백엔드에 보내는 코드 작성

    // 모든 검증이 통과한 경우 이전 페이지로 돌아가기
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
        setProfileImage(reader.result); // Base64 URL로 이미지 업데이트
      };
      reader.readAsDataURL(file); // 파일을 읽어 Base64 URL로 변환
    }
  };

  return (
    <div className="container mx-auto w-1352 py-56">
      <h1 className="mb-40 border-b pb-40 text-2xl font-bold">프로필 수정</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex justify-between gap-72">
          <div className="flex w-640 flex-col gap-32">
            <div>
              <label className="mb-16 block text-xl-20px-semibold text-black-300">이름</label>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                className="mt-1 block h-64 w-640 rounded-16 bg-bg-300 p-14 text-xl-20px-regular text-black-400 focus:outline-none"
              />
            </div>
            <div className="border border-line-100"></div>
            <div>
              <label className="mb-16 block text-xl-20px-semibold text-black-300">이메일</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                disabled
                className="mt-1 block h-64 w-full cursor-not-allowed rounded-16 bg-bg-300 p-14 text-xl-20px-regular text-grayscale-400"
              />
            </div>
            <div className="border border-line-100"></div>
            <div>
              <label className="mb-16 block text-xl-20px-semibold text-black-300">전화번호</label>
              <input
                type="tel"
                name="phoneNumber"
                value={userData.phoneNumber}
                onChange={handleInputChange}
                className="mt-1 block h-64 w-640 rounded-16 bg-bg-300 p-14 text-xl-20px-regular text-black-400 focus:outline-none"
              />
            </div>
            <div className="border border-line-100"></div>
            <div className="relative">
              <label className="mb-16 block text-xl-20px-semibold text-black-300">
                현재 비밀번호
              </label>
              <input
                type="password"
                name="currentPassword"
                placeholder="현재 비밀번호를 입력해주세요"
                value={currentPw}
                onChange={handleInputChange}
                className="mt-1 block h-64 w-640 rounded-16 bg-bg-300 p-14 text-xl-20px-regular text-black-400 focus:outline-none"
              />
              {passwordError && (
                <p className="absolute left-0 top-full mt-2 text-sm text-red-600">
                  {passwordError}
                </p>
              )}
            </div>
            <div className="border border-line-100"></div>
            <div className="relative">
              <label className="mb-16 block text-xl-20px-semibold text-black-300">
                새 비밀번호
              </label>
              <input
                type="password"
                name="newPassword"
                placeholder="새 비밀번호를 입력해주세요"
                value={newPw}
                onChange={handleInputChange}
                className="mt-1 block h-64 w-640 rounded-16 bg-bg-300 p-14 text-xl-20px-regular text-black-400 focus:outline-none"
              />
            </div>
            <div className="border border-line-100"></div>
            <div className="relative">
              <label className="mb-16 block text-xl-20px-semibold text-black-300">
                새 비밀번호 확인
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="새 비밀번호를 다시 한번 입력해주세요"
                value={confirmPassword}
                onChange={handleInputChange}
                className="mt-1 block h-64 w-640 rounded-16 bg-bg-300 p-14 text-xl-20px-regular text-black-400 focus:outline-none"
              />
              {newPasswordError && (
                <p className="absolute left-0 top-full mt-2 text-sm text-red-600">
                  {newPasswordError}
                </p>
              )}
            </div>
          </div>

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
            <div className="w-640">
              <label className="mb-8 block text-xl-20px-semibold text-black-300">이용 서비스</label>
              <p className="mb-16 text-lg-16px-regular text-grayscale-400">
                *견적 요청 시 이용 서비스를 선택할 수 있어요.
              </p>
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
              <p className="mb-16 text-lg-16px-regular text-grayscale-400">
                *견적 요청 시 지역을 설정할 수 있어요.
              </p>
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
