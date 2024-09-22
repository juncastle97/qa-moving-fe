import React from "react";
import likedDriverData from "@/mock/liked-driver/mockData";
import DriverList from "@/components/Card/DriverList";

export default function LikedDriver() {
  return (
    <div>
      <div className="h-96 w-full bg-white px-260 py-32">
        <h1 className="text-2xl-24px-semibold">찜한 기사님</h1>
      </div>
      <div className="min-h-screen bg-bg-200 px-260 pt-24">
        <div className="grid grid-cols-2 gap-24 w-1330">
          {likedDriverData.map((data, index) => (
            <div key={index} className="w-full">
              <DriverList quoteStatuses={data.quoteStatuses} data={data} noneCursor={true} heart={true}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
