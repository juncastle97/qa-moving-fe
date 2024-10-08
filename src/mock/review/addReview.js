const driverReviewData = [
  {
    id: 1,
    name: "김코드",
    profileImage: "/images/기사님프로필사진.png",
    movingDate: "2024.10.01",
    price: 150000,
    quoteStatuses: ["Home Moving", "Requested Quote"],
  },
  {
    id: 2,
    name: "박프론트",
    profileImage: "/images/기사님프로필사진2.png",
    movingDate: "2024.10.05",
    price: 75000,
    quoteStatuses: ["Office Moving", "Requested Quote"],
  },
  {
    id: 3,
    name: "이백엔드",
    profileImage: "/images/기사님프로필사진3.png",
    movingDate: "2024.10.10",
    price: 260000,
    quoteStatuses: ["Home Moving", "Requested Quote"],
  },
  {
    id: 4,
    name: "정풀스택",
    profileImage: "/images/기사님프로필사진4.png",
    movingDate: "2024.10.15",
    price: 80000,
    quoteStatuses: ["Home Moving", "Requested Quote"],
  },
  {
    id: 5,
    name: "홍디자인",
    profileImage: "/images/기사님프로필사진.png",
    movingDate: "2024.10.20",
    price: 170000,
    quoteStatuses: ["Office Moving", "Requested Quote"],
  },
  {
    id: 6,
    name: "이프론트",
    profileImage: "/images/기사님프로필사진2.png",
    movingDate: "2024.10.25",
    price: 65000,
    quoteStatuses: ["Small Moving", "Requested Quote"],
  },
  // 20개 추가된 데이터
  {
    id: 7,
    name: "최웹",
    profileImage: "/images/기사님프로필사진3.png",
    movingDate: "2024.10.30",
    price: 180000,
    quoteStatuses: ["Home Moving", "Completed Quote"],
  },
  {
    id: 8,
    name: "한프론트",
    profileImage: "/images/기사님프로필사진4.png",
    movingDate: "2024.11.01",
    price: 90000,
    quoteStatuses: ["Office Moving", "Requested Quote"],
  },
  {
    id: 9,
    name: "유개발",
    profileImage: "/images/기사님프로필사진2.png",
    movingDate: "2024.11.05",
    price: 210000,
    quoteStatuses: ["Home Moving", "Completed Quote"],
  },
  {
    id: 10,
    name: "김테스트",
    profileImage: "/images/기사님프로필사진3.png",
    movingDate: "2024.11.08",
    price: 120000,
    quoteStatuses: ["Small Moving", "Requested Quote"],
  },
  {
    id: 11,
    name: "박백엔드",
    profileImage: "/images/기사님프로필사진4.png",
    movingDate: "2024.11.12",
    price: 95000,
    quoteStatuses: ["Home Moving", "Requested Quote"],
  },
  {
    id: 12,
    name: "이풀스택",
    profileImage: "/images/기사님프로필사진2.png",
    movingDate: "2024.11.17",
    price: 275000,
    quoteStatuses: ["Office Moving", "Completed Quote"],
  },
  {
    id: 13,
    name: "정리액트",
    profileImage: "/images/기사님프로필사진3.png",
    movingDate: "2024.11.20",
    price: 100000,
    quoteStatuses: ["Small Moving", "Requested Quote"],
  },
  {
    id: 14,
    name: "홍자바스크립트",
    profileImage: "/images/기사님프로필사진4.png",
    movingDate: "2024.11.25",
    price: 300000,
    quoteStatuses: ["Home Moving", "Requested Quote"],
  },
  {
    id: 15,
    name: "서뷰",
    profileImage: "/images/기사님프로필사진2.png",
    movingDate: "2024.11.30",
    price: 85000,
    quoteStatuses: ["Office Moving", "Requested Quote"],
  },
  {
    id: 16,
    name: "최디자인",
    profileImage: "/images/기사님프로필사진3.png",
    movingDate: "2024.12.03",
    price: 140000,
    quoteStatuses: ["Home Moving", "Completed Quote"],
  },
  {
    id: 17,
    name: "백프론트",
    profileImage: "/images/기사님프로필사진4.png",
    movingDate: "2024.12.06",
    price: 65000,
    quoteStatuses: ["Small Moving", "Requested Quote"],
  },
  {
    id: 18,
    name: "이자바",
    profileImage: "/images/기사님프로필사진2.png",
    movingDate: "2024.12.09",
    price: 170000,
    quoteStatuses: ["Home Moving", "Completed Quote"],
  },
  {
    id: 19,
    name: "정백엔드",
    profileImage: "/images/기사님프로필사진3.png",
    movingDate: "2024.12.15",
    price: 135000,
    quoteStatuses: ["Office Moving", "Requested Quote"],
  },
  {
    id: 20,
    name: "최테스터",
    profileImage: "/images/기사님프로필사진4.png",
    movingDate: "2024.12.18",
    price: 105000,
    quoteStatuses: ["Home Moving", "Completed Quote"],
  },
  {
    id: 21,
    name: "한리액트",
    profileImage: "/images/기사님프로필사진2.png",
    movingDate: "2024.12.20",
    price: 195000,
    quoteStatuses: ["Small Moving", "Requested Quote"],
  },
  {
    id: 22,
    name: "박풀스택",
    profileImage: "/images/기사님프로필사진3.png",
    movingDate: "2024.12.24",
    price: 155000,
    quoteStatuses: ["Office Moving", "Requested Quote"],
  },
  {
    id: 23,
    name: "김테크",
    profileImage: "/images/기사님프로필사진4.png",
    movingDate: "2024.12.28",
    price: 115000,
    quoteStatuses: ["Home Moving", "Completed Quote"],
  },
  {
    id: 24,
    name: "이자바스크립트",
    profileImage: "/images/기사님프로필사진2.png",
    movingDate: "2024.12.30",
    price: 270000,
    quoteStatuses: ["Small Moving", "Requested Quote"],
  },
  {
    id: 25,
    name: "최프론트엔드",
    profileImage: "/images/기사님프로필사진3.png",
    movingDate: "2025.01.03",
    price: 90000,
    quoteStatuses: ["Home Moving", "Requested Quote"],
  },
  {
    id: 26,
    name: "박백엔드",
    profileImage: "/images/기사님프로필사진4.png",
    movingDate: "2025.01.05",
    price: 130000,
    quoteStatuses: ["Office Moving", "Completed Quote"],
  },
  {
    id: 27,
    name: "이자바",
    profileImage: "/images/기사님프로필사진2.png",
    movingDate: "2024.12.09",
    price: 170000,
    quoteStatuses: ["Home Moving", "Completed Quote"],
  },
  {
    id: 28,
    name: "정백엔드",
    profileImage: "/images/기사님프로필사진3.png",
    movingDate: "2024.12.15",
    price: 135000,
    quoteStatuses: ["Office Moving", "Requested Quote"],
  },
  {
    id: 29,
    name: "최테스터",
    profileImage: "/images/기사님프로필사진4.png",
    movingDate: "2024.12.18",
    price: 105000,
    quoteStatuses: ["Home Moving", "Completed Quote"],
  },
  {
    id: 30,
    name: "한리액트",
    profileImage: "/images/기사님프로필사진2.png",
    movingDate: "2024.12.20",
    price: 195000,
    quoteStatuses: ["Small Moving", "Requested Quote"],
  },
  {
    id: 31,
    name: "박풀스택",
    profileImage: "/images/기사님프로필사진3.png",
    movingDate: "2024.12.24",
    price: 155000,
    quoteStatuses: ["Office Moving", "Requested Quote"],
  },
  {
    id: 32,
    name: "김테크",
    profileImage: "/images/기사님프로필사진4.png",
    movingDate: "2024.12.28",
    price: 115000,
    quoteStatuses: ["Home Moving", "Completed Quote"],
  },
  {
    id: 33,
    name: "이자바스크립트",
    profileImage: "/images/기사님프로필사진2.png",
    movingDate: "2024.12.30",
    price: 270000,
    quoteStatuses: ["Small Moving", "Requested Quote"],
  },
  {
    id: 34,
    name: "최프론트엔드",
    profileImage: "/images/기사님프로필사진3.png",
    movingDate: "2025.01.03",
    price: 90000,
    quoteStatuses: ["Home Moving", "Requested Quote"],
  },
  {
    id: 35,
    name: "이자바스크립트",
    profileImage: "/images/기사님프로필사진2.png",
    movingDate: "2024.12.30",
    price: 270000,
    quoteStatuses: ["Small Moving", "Requested Quote"],
  },
  {
    id: 36,
    name: "최프론트엔드",
    profileImage: "/images/기사님프로필사진3.png",
    movingDate: "2025.01.03",
    price: 90000,
    quoteStatuses: ["Home Moving", "Requested Quote"],
  },
];

export default driverReviewData;
