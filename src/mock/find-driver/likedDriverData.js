const driverData = [
  {
    id: 1,
    name: "김코드",
    profileImage: "/images/기사님프로필사진.png",
    descriptionData: "고객님의 물품을 안전하게 운송해 드립니다.",
    location: ["서울", "경기"],
    moveType: ["소형이사", "가정이사"],
    rating: 5.0,
    reviewCount: 178,
    experience: "7년",
    confirmedCount: 334,
    likes: 136,
    movingDate: "2024. 07. 01(월)",
    movingTime: "오전 10:00",
    startLocation: "서울시 중구",
    endLocation: "경기도 수원시",
    startLocationDetail: "서울시 중구 삼일대로 343",
    endLocationDetail: "경기도 수원시 권선구 곡반정동",
    quoteStatuses: ["Home Moving", "Requested Quote"],
    quoteType: "사무실이사",
    scoreFiveCount: 160,
    scoreFourCount: 35,
    scoreThreeCount: 10,
    scoreTwoCount: 6,
    scoreOneCount: 4,
    reviewData: [
      {
        userName: "홍길동",
        reviewDate: "2024-03-20",
        starRating: 5,
        reviewText: "정말 친절하시고 이사도 안전하게 잘 해주셨어요!",
      },
      {
        userName: "김솔",
        reviewDate: "2024-05-18",
        starRating: 4,
        reviewText: "이사는 잘 되었지만, 시간이 조금 늦었어요.",
      },
      {
        userName: "박철수",
        reviewDate: "2024-06-17",
        starRating: 3,
        reviewText: "평범한 이사였습니다. 기대했던 만큼은 아니었어요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
    ],
  },
  {
    id: 2,
    name: "박프론트",
    profileImage: "/images/기사님프로필사진2.png",
    descriptionData: "전국 이사! 어디든 갑니다.",
    location: ["서울", "경기", "부산"],
    moveType: ["소형이사", "사무실이사"],
    rating: 4.8,
    reviewCount: 120,
    experience: "5년",
    confirmedCount: 210,
    likes: 98,
    movingDate: "2024. 06. 20(금)",
    movingTime: "오후 01:00",
    startLocation: "서울시 강남구",
    endLocation: "부산광역시 해운대구",
    startLocationDetail: "서울시 강남구 선릉로 428",
    endLocationDetail: "부산광역시 해운대구 반송동",
    quoteStatuses: ["Office Moving"],
    quoteType: "소형이사",
    scoreFiveCount: 160,
    scoreFourCount: 35,
    scoreThreeCount: 10,
    scoreTwoCount: 6,
    scoreOneCount: 4,
    reviewData: [
      {
        userName: "홍길동",
        reviewDate: "2024-03-20",
        starRating: 5,
        reviewText: "정말 친절하시고 이사도 안전하게 잘 해주셨어요!",
      },
      {
        userName: "김솔",
        reviewDate: "2024-05-18",
        starRating: 4,
        reviewText: "이사는 잘 되었지만, 시간이 조금 늦었어요.",
      },
      {
        userName: "박철수",
        reviewDate: "2024-06-17",
        starRating: 3,
        reviewText: "평범한 이사였습니다. 기대했던 만큼은 아니었어요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
    ],
  },
  {
    id: 3,
    name: "이백엔드",
    profileImage: "/images/기사님프로필사진3.png",
    descriptionData: "경기, 인천 가장 빠른 이삿짐~",
    location: ["경기", "인천"],
    moveType: ["가정이사"],
    rating: 4.9,
    reviewCount: 145,
    experience: "3년",
    confirmedCount: 211,
    likes: 112,
    movingDate: "2024. 08. 15(목)",
    movingTime: "오전 11:00",
    startLocation: "경기도 성남시",
    endLocation: "인천광역시 미추홀구",
    startLocationDetail: "경기도 성남시 수정구",
    endLocationDetail: "인천광역시 미추홀구 주안동",
    quoteStatuses: ["Office Moving"],
    quoteType: "가정이사",
    scoreFiveCount: 160,
    scoreFourCount: 35,
    scoreThreeCount: 10,
    scoreTwoCount: 6,
    scoreOneCount: 4,
    reviewData: [
      {
        userName: "홍길동",
        reviewDate: "2024-03-20",
        starRating: 5,
        reviewText: "정말 친절하시고 이사도 안전하게 잘 해주셨어요!",
      },
      {
        userName: "김솔",
        reviewDate: "2024-05-18",
        starRating: 4,
        reviewText: "이사는 잘 되었지만, 시간이 조금 늦었어요.",
      },
      {
        userName: "박철수",
        reviewDate: "2024-06-17",
        starRating: 3,
        reviewText: "평범한 이사였습니다. 기대했던 만큼은 아니었어요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
    ],
  },
  {
    id: 4,
    name: "정풀스택",
    profileImage: "/images/기사님프로필사진4.png",
    descriptionData: "안전 운송, 빠른 이사, 애프터 서비스까지!",
    location: ["대전", "대구"],
    moveType: ["소형이사", "가정이사", "사무실이사"],
    rating: 4.7,
    reviewCount: 200,
    experience: "1년",
    confirmedCount: 40,
    likes: 150,
    movingDate: "2024. 05. 10(토)",
    movingTime: "오전 09:00",
    startLocation: "대전광역시 서구",
    endLocation: "대구광역시 중구",
    startLocationDetail: "대전광역시 서구 둔산동",
    endLocationDetail: "대구광역시 중구 동인동1가",
    quoteStatuses: ["Office Moving"],
    quoteType: "사무실이사",
    scoreFiveCount: 160,
    scoreFourCount: 35,
    scoreThreeCount: 10,
    scoreTwoCount: 6,
    scoreOneCount: 4,
    reviewData: [
      {
        userName: "홍길동",
        reviewDate: "2024-03-20",
        starRating: 5,
        reviewText: "정말 친절하시고 이사도 안전하게 잘 해주셨어요!",
      },
      {
        userName: "김솔",
        reviewDate: "2024-05-18",
        starRating: 4,
        reviewText: "이사는 잘 되었지만, 시간이 조금 늦었어요.",
      },
      {
        userName: "박철수",
        reviewDate: "2024-06-17",
        starRating: 3,
        reviewText: "평범한 이사였습니다. 기대했던 만큼은 아니었어요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
    ],
  },
  {
    id: 5,
    name: "홍디자인",
    profileImage: "/images/기사님프로필사진3.png",
    descriptionData: "부산 최고의 이삿짐 센터!",
    location: ["부산", "울산"],
    moveType: ["소형이사", "가정이사"],
    rating: 4.6,
    reviewCount: 160,
    experience: "4년",
    confirmedCount: 190,
    likes: 88,
    movingDate: "2024. 09. 02(화)",
    movingTime: "오후 02:00",
    startLocation: "부산광역시 남구",
    endLocation: "울산광역시 남구",
    startLocationDetail: "부산광역시 남구 대연동",
    endLocationDetail: "울산광역시 남구 무거동",
    quoteStatuses: ["Office Moving", "Requested Quote"],
    quoteType: "소형이사",
    scoreFiveCount: 160,
    scoreFourCount: 35,
    scoreThreeCount: 10,
    scoreTwoCount: 6,
    scoreOneCount: 4,
    reviewData: [
      {
        userName: "홍길동",
        reviewDate: "2024-03-20",
        starRating: 5,
        reviewText: "정말 친절하시고 이사도 안전하게 잘 해주셨어요!",
      },
      {
        userName: "김솔",
        reviewDate: "2024-05-18",
        starRating: 4,
        reviewText: "이사는 잘 되었지만, 시간이 조금 늦었어요.",
      },
      {
        userName: "박철수",
        reviewDate: "2024-06-17",
        starRating: 3,
        reviewText: "평범한 이사였습니다. 기대했던 만큼은 아니었어요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이민정",
        reviewDate: "2024-07-15",
        starRating: 5,
        reviewText: "좋아요 좋아요 좋아요 좋아요",
      },
      {
        userName: "김하나",
        reviewDate: "2024-08-15",
        starRating: 4,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
      {
        userName: "이바다",
        reviewDate: "2024-09-15",
        starRating: 2,
        reviewText: "아쉬워요.",
      },
      {
        userName: "최수정",
        reviewDate: "2024-09-20",
        starRating: 5,
        reviewText: "너무 만족스러운 서비스였습니다! 다음에도 이용할게요.",
      },
    ],
  },
];

export default driverData;
