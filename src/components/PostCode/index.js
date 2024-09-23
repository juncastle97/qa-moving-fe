// src/components/Postcode.js
import React, { useEffect } from "react";

const Postcode = ({ onComplete }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;
    script.onload = () => {
      window.daum
        .Postcode({
          oncomplete: (data) => {
            let addr = "";
            let extraAddr = "";

            if (data.userSelectedType === "R") {
              addr = data.roadAddress;
              if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
                extraAddr += data.bname;
              }
              if (data.buildingName !== "" && data.apartment === "Y") {
                extraAddr += extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
              }
              extraAddr = extraAddr !== "" ? ` (${extraAddr})` : "";
            } else {
              addr = data.jibunAddress;
            }

            onComplete({
              postcode: data.zonecode,
              address: addr,
              extraAddress: extraAddr,
            });
          },
        })
        .open();
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [onComplete]);

  return null;
};

export default Postcode;
