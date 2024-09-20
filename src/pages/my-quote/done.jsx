import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Done() {
  const router = useRouter();
  const currentPath = router.pathname;

  const tabs = [
    { name: "대기 중인 견적", path: "/my-quote/wait" },
    { name: "받았던 견적", path: "/my-quote/done" },
  ];

  return (
   <>
      <div className="h-80 px-260 pt-16">
        <nav className="-mb-px flex gap-32">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.path}
              className={`relative inline-flex items-center border-b-2 text-xl-20px-semibold py-14 ${
                currentPath === tab.path
                  ? "border-black text-black-400"
                  : "border-transparent text-grayscale-400"
              }`}
            >
              {tab.name}
              {currentPath === tab.path && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-black" />
              )}
            </Link>
          ))}
        </nav>
      </div>
      <div className="bg-bg-200 min-h-screen"></div>
   </>
  );
}
