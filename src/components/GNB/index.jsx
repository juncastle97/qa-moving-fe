import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ProfileDropdown from "../common/ProfileDropdown";

export default function GNB() {
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
    { name: "견적요청", path: "/quote-request" },
    { name: "기사님 찾기", path: "/find-driver" },
    { name: "내 견적 관리", path: "/my-quote/wait" },
  ];

  return (
    <>
      <div className="flex h-54 w-full items-center justify-between border-b border-line-100 px-24 py-10 md:h-60 md:px-32 md:py-19 lg:h-88 lg:px-120 lg:py-26">
        <div className="flex items-center gap-80">
          <div
            className="relative h-34 w-88 cursor-pointer lg:h-44 lg:w-116"
            onClick={handlePushMain}
          >
            <Image src="/icons/ic-logo-icon-text.svg" alt="logo-icon-text" fill />
          </div>
          {!hiddenPaths.includes(currentPath) && (
            <div className="flex gap-40 text-2lg-18px-bold text-grayscale-400">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`cursor-pointer ${
                    currentPath === item.path ? "text-black-400" : "hover:text-primary-blue-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        {!hiddenPaths.includes(currentPath) && (
          <div className="flex items-center gap-24 lg:gap-32">
            <div className="relative h-24 w-24 lg:h-36 lg:w-36">
              <Image src="/icons/alarm.svg" alt="ic-alarm" fill />
            </div>
            <ProfileDropdown />
          </div>
        )}
      </div>
    </>
  );
}
