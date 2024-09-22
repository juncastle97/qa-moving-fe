const reviewData = [
  {
    id: 1,
    name: "김코드",
    profileImage: "/images/기사님프로필사진.png",
    reviewDate: "2024.10.01",
    movingDate: "2024.07.02",
    price: 75000,
    rating: 4,
    review:
      "처음 견적 받아봤는데, 엄청 친절하시고 꼼꼼하세요! 귀찮게 이것저것 물어봤는데 잘 알려주셨습니다. 원룸 이사는 믿고 맡기세요! :)",
    quoteStatuses: ["Home Moving", "Requested Quote"],
  },
  {
    id: 2,
    name: "박프론트",
    profileImage: "/images/기사님프로필사진2.png",
    reviewDate: "2024.10.05",
    movingDate: "2024.07.02",
    price: 150000,
    rating: 5,
    review:
      "이사 잘 마쳤습니다! 시간도 맞춰 주시고, 무엇보다 친절하셔서 마음이 편했습니다. 다음에도 꼭 부탁드릴게요.",
    quoteStatuses: ["Office Moving"],
  },
  {
    id: 3,
    name: "이백엔드",
    profileImage: "/images/기사님프로필사진3.png",
    reviewDate: "2024.10.07",
    movingDate: "2024.07.02",
    price: 85000,
    rating: 3,
    review:
      "가격 대비 무난했어요. 조금 더 꼼꼼했으면 좋았을텐데, 전체적으로는 만족했습니다.",
    quoteStatuses: ["Small Moving"],
  },
  {
    id: 4,
    name: "정풀스택",
    profileImage: "/images/기사님프로필사진4.png",
    reviewDate: "2024.10.09",
    movingDate: "2024.07.02",
    price: 95000,
    rating: 4,
    review:
      "이사 업체 선정이 어려웠는데 잘 선택한 것 같아요. 이사 과정이 깔끔했습니다.",
    quoteStatuses: ["Home Moving", "Requested Quote"],
  },
  {
    id: 5,
    name: "홍디자인",
    profileImage: "/images/기사님프로필사진.png",
    reviewDate: "2024.10.11",
    movingDate: "2024.07.02",
    price: 125000,
    rating: 5,
    review:
      "시간 약속도 잘 지키고 꼼꼼하게 이사를 도와주셔서 기분 좋게 마무리했습니다.",
    quoteStatuses: ["Office Moving", "Requested Quote"],
  },
  {
    id: 6,
    name: "이프론트",
    profileImage: "/images/기사님프로필사진2.png",
    reviewDate: "2024.10.13",
    movingDate: "2024.07.02",
    price: 175000,
    rating: 4,
    review:
      "부지런하시고 친절하셔서 부담없이 이사를 마쳤습니다. 가격도 합리적이었어요.",
    quoteStatuses: ["Home Moving"],
  },
  {
    id: 7,
    name: "김서비스",
    profileImage: "/images/기사님프로필사진3.png",
    reviewDate: "2024.10.14",
    movingDate: "2024.07.02",
    price: 65000,
    rating: 3,
    review:
      "시간이 조금 늦었지만 대체적으로 만족스러운 서비스였습니다. 감사합니다.",
    quoteStatuses: ["Small Moving", "Requested Quote"],
  },
  {
    id: 8,
    name: "박백엔드",
    profileImage: "/images/기사님프로필사진4.png",
    reviewDate: "2024.10.16",
    movingDate: "2024.07.02",
    price: 185000,
    rating: 5,
    review:
      "너무 만족했습니다! 가격도 좋고 친절하게 이사 도와주셔서 기분 좋게 마무리했어요.",
    quoteStatuses: ["Home Moving"],
  },
  {
    id: 9,
    name: "이디자인",
    profileImage: "/images/기사님프로필사진.png",
    reviewDate: "2024.10.18",
    movingDate: "2024.07.02",
    price: 205000,
    rating: 4,
    review:
      "전체적으로 만족스러웠습니다. 세심하게 신경 써주셔서 감사드려요.",
    quoteStatuses: ["Office Moving"],
  },
  {
    id: 10,
    name: "정서비스",
    profileImage: "/images/기사님프로필사진2.png",
    reviewDate: "2024.10.20",
    movingDate: "2024.07.02",
    price: 95000,
    rating: 3,
    review:
      "가격은 괜찮았는데, 약간 미흡한 부분도 있었습니다. 다음에는 더 꼼꼼하게 부탁드려요.",
    quoteStatuses: ["Small Moving", "Requested Quote"],
  },
  {
    id: 11,
    name: "홍프론트",
    profileImage: "/images/기사님프로필사진3.png",
    reviewDate: "2024.10.21",
    movingDate: "2024.07.02",
    price: 155000,
    rating: 4,
    review:
      "친절하시고 전문적인 느낌이었습니다. 시간도 잘 맞춰주셔서 좋았습니다.",
    quoteStatuses: ["Home Moving", "Requested Quote"],
  },
  {
    id: 12,
    name: "김백엔드",
    profileImage: "/images/기사님프로필사진4.png",
    reviewDate: "2024.10.23",
    movingDate: "2024.07.02",
    price: 140000,
    rating: 5,
    review:
      "정말 마음 편하게 이사할 수 있었습니다. 다시 이용하고 싶어요.",
    quoteStatuses: ["Home Moving"],
  },
  {
    id: 13,
    name: "박풀스택",
    profileImage: "/images/기사님프로필사진.png",
    reviewDate: "2024.10.25",
    movingDate: "2024.07.02",
    price: 90000,
    rating: 3,
    review:
      "대체로 괜찮았습니다. 조금 더 신경 써주시면 좋을 것 같아요.",
    quoteStatuses: ["Office Moving", "Requested Quote"],
  },
  {
    id: 14,
    name: "이디자인",
    profileImage: "/images/기사님프로필사진2.png",
    reviewDate: "2024.10.27",
    movingDate: "2024.07.02",
    price: 115000,
    rating: 4,
    review:
      "부지런하시고 꼼꼼하게 이사를 잘 마쳤습니다. 다시 이용하고 싶어요.",
    quoteStatuses: ["Small Moving"],
  },
  {
    id: 15,
    name: "정프론트",
    profileImage: "/images/기사님프로필사진3.png",
    reviewDate: "2024.10.29",
    movingDate: "2024.07.02",
    price: 185000,
    rating: 5,
    review:
      "완벽한 서비스였습니다! 감사합니다. 이사할 때마다 이 업체를 이용할 것 같아요.",
    quoteStatuses: ["Home Moving"],
  },
  {
    id: 16,
    name: "홍풀스택",
    profileImage: "/images/기사님프로필사진4.png",
    reviewDate: "2024.10.30",
    movingDate: "2024.07.02",
    price: 145000,
    rating: 4,
    review:
      "가격도 좋고 친절하셔서 이사하는 내내 편안했습니다. 추천드려요.",
    quoteStatuses: ["Home Moving", "Requested Quote"],
  },
  {
    id: 17,
    name: "김디자인",
    profileImage: "/images/기사님프로필사진.png",
    reviewDate: "2024.11.01",
    movingDate: "2024.07.02",
    price: 95000,
    rating: 3,
    review:
      "약간 아쉬운 부분도 있었지만, 전체적으로는 만족스러웠습니다.",
    quoteStatuses: ["Office Moving", "Requested Quote"],
  },
  {
    id: 18,
    name: "박백엔드",
    profileImage: "/images/기사님프로필사진2.png",
    reviewDate: "2024.11.03",
    movingDate: "2024.07.02",
    price: 125000,
    rating: 4,
    review:
      "시간 약속 잘 지켜주셨고, 서비스도 좋았습니다. 다음에 또 이용할게요.",
    quoteStatuses: ["Small Moving"],
  },
  {
    id: 19,
    name: "이서비스",
    profileImage: "/images/기사님프로필사진3.png",
    reviewDate: "2024.11.05",
    movingDate: "2024.07.02",
    price: 205000,
    rating: 5,
    review:
      "최고의 서비스였습니다. 이사 스트레스 없이 편하게 잘 끝냈어요.",
    quoteStatuses: ["Home Moving"],
  },
  {
    id: 20,
    name: "정디자인",
    profileImage: "/images/기사님프로필사진4.png",
    reviewDate: "2024.11.07",
    movingDate: "2024.07.02",
    price: 135000,
    rating: 4,
    review:
      "깔끔하게 이사 잘 마쳤습니다. 가격도 적당했고 매우 만족해요.",
    quoteStatuses: ["Home Moving", "Requested Quote"],
  },
  {
    id: 21,
    name: "홍프론트",
    profileImage: "/images/기사님프로필사진3.png",
    reviewDate: "2024.10.21",
    movingDate: "2024.07.02",
    price: 155000,
    rating: 4,
    review:
      "친절하시고 전문적인 느낌이었습니다. 시간도 잘 맞춰주셔서 좋았습니다.",
    quoteStatuses: ["Home Moving", "Requested Quote"],
  },
  {
    id: 22,
    name: "김백엔드",
    profileImage: "/images/기사님프로필사진4.png",
    reviewDate: "2024.10.23",
    movingDate: "2024.07.02",
    price: 140000,
    rating: 5,
    review:
      "정말 마음 편하게 이사할 수 있었습니다. 다시 이용하고 싶어요.",
    quoteStatuses: ["Home Moving"],
  },
  {
    id: 23,
    name: "박풀스택",
    profileImage: "/images/기사님프로필사진.png",
    reviewDate: "2024.10.25",
    movingDate: "2024.07.02",
    price: 90000,
    rating: 3,
    review:
      "대체로 괜찮았습니다. 조금 더 신경 써주시면 좋을 것 같아요.",
    quoteStatuses: ["Office Moving", "Requested Quote"],
  },
  {
    id: 24,
    name: "이디자인",
    profileImage: "/images/기사님프로필사진2.png",
    reviewDate: "2024.10.27",
    movingDate: "2024.07.02",
    price: 115000,
    rating: 4,
    review:
      "부지런하시고 꼼꼼하게 이사를 잘 마쳤습니다. 다시 이용하고 싶어요.",
    quoteStatuses: ["Small Moving"],
  },
  {
    id: 25,
    name: "정프론트",
    profileImage: "/images/기사님프로필사진3.png",
    reviewDate: "2024.10.29",
    movingDate: "2024.07.02",
    price: 185000,
    rating: 5,
    review:
      "완벽한 서비스였습니다! 감사합니다. 이사할 때마다 이 업체를 이용할 것 같아요.",
    quoteStatuses: ["Home Moving"],
  },
  {
    id: 26,
    name: "홍풀스택",
    profileImage: "/images/기사님프로필사진4.png",
    reviewDate: "2024.10.30",
    movingDate: "2024.07.02",
    price: 145000,
    rating: 4,
    review:
      "가격도 좋고 친절하셔서 이사하는 내내 편안했습니다. 추천드려요.",
    quoteStatuses: ["Home Moving", "Requested Quote"],
  },
  {
    id: 27,
    name: "김디자인",
    profileImage: "/images/기사님프로필사진.png",
    reviewDate: "2024.11.01",
    movingDate: "2024.07.02",
    price: 95000,
    rating: 3,
    review:
      "약간 아쉬운 부분도 있었지만, 전체적으로는 만족스러웠습니다.",
    quoteStatuses: ["Office Moving", "Requested Quote"],
  },
  {
    id: 28,
    name: "박백엔드",
    profileImage: "/images/기사님프로필사진2.png",
    reviewDate: "2024.11.03",
    movingDate: "2024.07.02",
    price: 125000,
    rating: 4,
    review:
      "시간 약속 잘 지켜주셨고, 서비스도 좋았습니다. 다음에 또 이용할게요.",
    quoteStatuses: ["Small Moving"],
  },
  {
    id: 29,
    name: "이서비스",
    profileImage: "/images/기사님프로필사진3.png",
    reviewDate: "2024.11.05",
    movingDate: "2024.07.02",
    price: 205000,
    rating: 5,
    review:
      "최고의 서비스였습니다. 이사 스트레스 없이 편하게 잘 끝냈어요.",
    quoteStatuses: ["Home Moving"],
  },
  {
    id: 30,
    name: "정디자인",
    profileImage: "/images/기사님프로필사진4.png",
    reviewDate: "2024.11.07",
    movingDate: "2024.07.02",
    price: 135000,
    rating: 4,
    review:
      "깔끔하게 이사 잘 마쳤습니다. 가격도 적당했고 매우 만족해요.",
    quoteStatuses: ["Home Moving", "Requested Quote"],
  },
];

export default reviewData;
