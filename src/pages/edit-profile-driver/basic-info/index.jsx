import React, { useState } from "react";
import { useRouter } from "next/router";
import CustomButton from "@/components/common/Button";
import DriverProfileData from "@/mock/mypage-driver/mockData";
import Image from "next/image";

const BasicInfoEditPage = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(DriverProfileData);
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [showCurrentPw, setShowCurrentPw] = useState(false);
  const [showNewPw, setShowNewPw] = useState(false);
  const [showConfirmPw, setShowConfirmPw] = useState(false);

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

  const handleTogglePasswordVisibility = (field) => {
    if (field === "current") {
      setShowCurrentPw(!showCurrentPw);
    } else if (field === "new") {
      setShowNewPw(!showNewPw);
    } else if (field === "confirm") {
      setShowConfirmPw(!showConfirmPw);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="container mx-auto w-1352 py-56">
      <h1 className="mb-40 border-b pb-40 text-2xl font-bold">기본정보 수정</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex justify-between gap-72">
          <div className="flex w-640 flex-col gap-32">
            <div className="flex flex-col gap-32">
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
            </div>
          </div>

          <div className="flex w-640 flex-col gap-32">
            <div className="relative">
              <label className="mb-16 block text-xl-20px-semibold text-black-300">
                현재 비밀번호
              </label>
              <input
                type={showCurrentPw ? "text" : "password"}
                name="currentPassword"
                placeholder="현재 비밀번호를 입력해주세요"
                value={currentPw}
                onChange={handleInputChange}
                className="mt-1 block h-64 w-640 rounded-16 bg-bg-300 p-14 text-xl-20px-regular text-black-400 focus:outline-none"
              />
              <div className="absolute bottom-8 right-14 flex -translate-y-1/2">
                <Image
                  className="cursor-pointer"
                  src={showCurrentPw ? "/icons/ic-eye-on.svg" : "/icons/ic-eye-off.svg"}
                  alt={
                    showCurrentPw ? "비밀번호 보이는 상태 아이콘" : "비밀번호 숨겨진 상태 아이콘"
                  }
                  width={24}
                  height={24}
                  onClick={() => handleTogglePasswordVisibility("current")}
                />
              </div>
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
                type={showNewPw ? "text" : "password"}
                name="newPassword"
                placeholder="새 비밀번호를 입력해주세요"
                value={newPw}
                onChange={handleInputChange}
                className="mt-1 block h-64 w-640 rounded-16 bg-bg-300 p-14 text-xl-20px-regular text-black-400 focus:outline-none"
              />
              <div className="absolute bottom-8 right-14 flex -translate-y-1/2">
                <Image
                  className="cursor-pointer"
                  src={showNewPw ? "/icons/ic-eye-on.svg" : "/icons/ic-eye-off.svg"}
                  alt={showNewPw ? "비밀번호 보이는 상태 아이콘" : "비밀번호 숨겨진 상태 아이콘"}
                  width={24}
                  height={24}
                  onClick={() => handleTogglePasswordVisibility("new")}
                />
              </div>
              {newPasswordError && (
                <p className="absolute left-0 top-full mt-2 text-sm text-red-600">
                  {newPasswordError}
                </p>
              )}
            </div>
            <div className="border border-line-100"></div>
            <div className="relative">
              <label className="mb-16 block text-xl-20px-semibold text-black-300">
                새 비밀번호 확인
              </label>
              <input
                type={showConfirmPw ? "text" : "password"}
                name="confirmPassword"
                placeholder="새 비밀번호를 다시 한번 입력해주세요"
                value={confirmPassword}
                onChange={handleInputChange}
                className="mt-1 block h-64 w-640 rounded-16 bg-bg-300 p-14 text-xl-20px-regular text-black-400 focus:outline-none"
              />
              <div className="absolute bottom-8 right-14 flex -translate-y-1/2">
                <Image
                  className="cursor-pointer"
                  src={showConfirmPw ? "/icons/ic-eye-on.svg" : "/icons/ic-eye-off.svg"}
                  alt={
                    showConfirmPw ? "비밀번호 보이는 상태 아이콘" : "비밀번호 숨겨진 상태 아이콘"
                  }
                  width={24}
                  height={24}
                  onClick={() => handleTogglePasswordVisibility("confirm")}
                />
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

export default BasicInfoEditPage;
