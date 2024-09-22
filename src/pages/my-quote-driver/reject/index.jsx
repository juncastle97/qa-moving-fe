import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import driverQuoteData from "@/mock/my-quote-driver/mockData";
import DriverQuoteCard from "@/components/Card/DriverQuote";

export default function Reject() {
  const router = useRouter();
  const currentPath = router.pathname;

  const tabs = [
    { name: "받은 견적 조회", path: "/my-quote-driver/receive" },
    { name: "반려 견적", path: "/my-quote-driver/reject" },
  ];

  const filteredQuoteData = driverQuoteData.filter((data) => data.reject);

  return (
    <>
      <div className="h-80 px-260 pt-16">
        <nav className="-mb-px flex gap-32">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.path}
              className={`relative inline-flex items-center border-b-1 py-14 text-xl-20px-semibold ${
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
      <div className="min-h-screen w-full overflow-x-auto bg-bg-200 px-260 pt-40">
        <div className="flex flex-col justify-center">
          <div className="grid w-1400 grid-cols-2 gap-x-24 gap-y-48">
            {filteredQuoteData.map((data, index) => (
              <DriverQuoteCard key={index} quoteStatuses={data.quoteStatuses} data={data} reject />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
