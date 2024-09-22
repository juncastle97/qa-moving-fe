import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import DriverProfileDropdown from "@/components/common/DriverProfileDropdown";

export default function DriverGNB() {
  const router = useRouter();
  const currentPath = router.pathname;

  const hiddenPaths = [
    "/",
    "/login-user",
    "/signup-user",
    "/login-driver",
    "/signup-driver",
    "/profile-user",
    "/profile-driver",
  ];

  const handlePushMain = () => {
    router.push("/");
  };

  const navItems = [
    { name: "받은 요청", path: "/my-request" },
    { name: "내 견적 관리", path: "/my-quote-driver/receive" },
  ];

  return (
    <>
      <div className="flex h-54 w-full items-center justify-between border-b border-line-100 px-24 py-10 md:h-60 md:px-32 md:py-19 lg:h-88 lg:px-260 lg:py-26">
        <div className="flex items-center gap-80">
          <div
            className="relative h-34 w-88 cursor-pointer lg:h-44 lg:w-116"
            onClick={handlePushMain}
          >
            <Image src="/icons/ic-logo-icon-text.svg" alt="logo-icon-text" fill />
          </div>

          {/* hiddenPaths에 현재 경로가 포함되지 않으면 네비게이션을 보여줌 */}
          {!hiddenPaths.includes(currentPath) && (
            <div className="flex gap-40 text-2lg-18px-bold text-grayscale-400">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`cursor-pointer ${
                    currentPath.startsWith(item.path) // startsWith로 경로 일치 여부 확인
                      ? "text-black-400"
                      : "hover:text-primary-blue-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* 알람 및 다른 요소들 - hiddenPaths에 현재 경로가 포함되지 않으면 표시 */}
        {!hiddenPaths.includes(currentPath) && (
          <div className="flex items-center gap-24 lg:gap-32">
            <div className="relative h-24 w-24 lg:h-36 lg:w-36">
              <Image src="/icons/alarm.svg" alt="ic-alarm" fill />
            </div>
            <DriverProfileDropdown />
          </div>
        )}
      </div>
    </>
  );
}
