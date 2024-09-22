import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const DriverProfileDropdown = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { name: "마이페이지", path: "/mypage-driver" },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-center gap-15 focus:outline-none">
        <div className="relative h-24 w-24 overflow-hidden rounded-full lg:h-36 lg:w-36">
          <Image src="/icons/Profile.svg" alt="default-profile-img" fill />
        </div>
        <button
          onClick={toggleDropdown}
          className="text-2lg-18px-medium text-black-400 md:hidden lg:block"
        >
          김코드
        </button>
        <button onClick={toggleDropdown} className="relative h-24 w-24 lg:hidden lg:h-36 lg:w-36">
          <Image src={"/images/menu.png"} alt="menu" fill />
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 mt-8 w-248 rounded-16 bg-white pb-6 pt-16 shadow-lg ring-1 ring-black ring-opacity-5"
          style={{ zIndex: 999 }} // z-index 추가
        >
          <div className="h-54 w-240 py-14 pl-24 pr-12">김코드 기사님</div>
          <div>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="flex h-54 w-240 flex-col justify-center py-14 pl-24 pr-12 text-lg-16px-medium text-sm text-black-400 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              className="flex w-full justify-center border-t border-line-100 px-4 py-2 pt-14 text-left text-md-14px-medium text-sm text-grayscale-500"
              onClick={() => {
                // 로그아웃 로직
                setIsOpen(false);
                router.push("/");
              }}
            >
              로그아웃
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DriverProfileDropdown;
