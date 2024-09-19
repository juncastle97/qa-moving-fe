import Image from "next/image";
import React from "react";
import { statusToImageMap, statusToWidthMap } from "@/constants/QuoteStatus";

export default function QuoteChip({ quoteStatuses }) {
  return (
    <div className="flex items-center">
      {quoteStatuses.map((status, index) => {
        const imageUrl = statusToImageMap[status];
        const imageWidth = statusToWidthMap[status];

        if (!imageUrl || !imageWidth) {
          return null;
        }

        return (
          <div key={index}>
            <Image src={imageUrl} alt={status} width={imageWidth} height={34} />
          </div>
        );
      })}
    </div>
  );
}
