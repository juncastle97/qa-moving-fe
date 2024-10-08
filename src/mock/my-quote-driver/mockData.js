const driverQuoteData = [
  {
    id: 1,
    name: "김인서",
    requestDate: "24.06.01",
    movingDate: "2024.07.02(화)",
    movingTime: "오전 10:00",
    quoteStatuses: ["Quote Check", "Home Moving", "Requested Quote"],
    quoteType: "사무실이사",
    startLocation: "서울시 중구",
    endLocation: "경기도 수원시",
    startLocationDetail: "서울시 중구 삼일대로 343",
    endLocationDetail: "경기도 수원시 권선구 곡반정동",
    location: ["서울", "경기"],
    price: 180000,
    reject: false,
    done: true,
  },
  {
    id: 2,
    name: "박지훈",
    requestDate: "24.07.01",
    movingDate: "2024.08.15(수)",
    movingTime: "오후 2:00",
    quoteStatuses: ["Office Moving"],
    quoteType: "가정이사",
    startLocation: "서울시 강남구",
    endLocation: "경기도 성남시",
    startLocationDetail: "서울시 강남구 테헤란로 123",
    endLocationDetail: "경기도 성남시 수정구 수진동",
    location: ["서울", "경기"],
    price: 190000,
    reject: true,
    done: true,
  },
  {
    id: 3,
    name: "이현우",
    requestDate: "24.08.01",
    movingDate: "2024.09.10(화)",
    movingTime: "오전 11:00",
    quoteStatuses: ["Quote Check", "Home Moving", "Requested Quote"],
    quoteType: "사무실이사",
    startLocation: "서울시 서초구",
    endLocation: "경기도 고양시",
    startLocationDetail: "서울시 서초구 강남대로 202",
    endLocationDetail: "경기도 고양시 일산동구 일산로 123",
    location: ["서울", "경기"],
    price: 190000,
    reject: false,
    done: false,
  },
  {
    id: 4,
    name: "최민수",
    requestDate: "24.06.15",
    movingDate: "2024.07.20(토)",
    movingTime: "오후 1:00",
    quoteStatuses: ["Quote Check", "Home Moving"],
    quoteType: "가정이사",
    startLocation: "서울시 송파구",
    endLocation: "경기도 부천시",
    startLocationDetail: "서울시 송파구 백제고분로 12",
    endLocationDetail: "경기도 부천시 길주로 345",
    location: ["서울", "경기"],
    price: 170000,
    reject: false,
    done: true,
  },
  {
    id: 5,
    name: "정수현",
    requestDate: "24.07.20",
    movingDate: "2024.08.25(일)",
    movingTime: "오후 3:00",
    quoteStatuses: ["Office Moving", "Requested Quote"],
    quoteType: "사무실이사",
    startLocation: "서울시 마포구",
    endLocation: "경기도 하남시",
    startLocationDetail: "서울시 마포구 월드컵북로 32",
    endLocationDetail: "경기도 하남시 미사대로 123",
    location: ["서울", "경기"],
    price: 200000,
    reject: true,
    done: true,
  },
  {
    id: 6,
    name: "이수진",
    requestDate: "24.08.05",
    movingDate: "2024.09.15(일)",
    movingTime: "오전 9:00",
    quoteStatuses: ["Quote Check", "Home Moving"],
    quoteType: "가정이사",
    startLocation: "서울시 용산구",
    endLocation: "경기도 성남시",
    startLocationDetail: "서울시 용산구 한강대로 42",
    endLocationDetail: "경기도 성남시 분당구 판교로 678",
    location: ["서울", "경기"],
    price: 210000,
    reject: false,
    done: false,
  },
  {
    id: 7,
    name: "김하나",
    requestDate: "24.06.30",
    movingDate: "2024.07.25(금)",
    movingTime: "오후 4:00",
    quoteStatuses: ["Home Moving", "Requested Quote"],
    quoteType: "가정이사",
    startLocation: "서울시 강서구",
    endLocation: "경기도 광명시",
    startLocationDetail: "서울시 강서구 화곡로 56",
    endLocationDetail: "경기도 광명시 소하동 112",
    location: ["서울", "경기"],
    price: 175000,
    reject: true,
    done: true,
  },
  {
    id: 8,
    name: "박지민",
    requestDate: "24.07.10",
    movingDate: "2024.08.30(토)",
    movingTime: "오전 10:30",
    quoteStatuses: ["Quote Check", "Office Moving"],
    quoteType: "사무실이사",
    startLocation: "서울시 강북구",
    endLocation: "경기도 고양시",
    startLocationDetail: "서울시 강북구 도봉로 123",
    endLocationDetail: "경기도 고양시 일산서구 덕이동 234",
    location: ["서울", "경기"],
    price: 185000,
    reject: false,
    done: true,
  },
  {
    id: 9,
    name: "이동민",
    requestDate: "24.08.12",
    movingDate: "2024.09.20(금)",
    movingTime: "오후 5:00",
    quoteStatuses: ["Home Moving"],
    quoteType: "가정이사",
    startLocation: "서울시 중랑구",
    endLocation: "경기도 시흥시",
    startLocationDetail: "서울시 중랑구 동일로 11",
    endLocationDetail: "경기도 시흥시 정왕동 789",
    location: ["서울", "경기"],
    price: 160000,
    reject: true,
    done: true,
  },
  {
    id: 10,
    name: "정해인",
    requestDate: "24.07.15",
    movingDate: "2024.09.05(수)",
    movingTime: "오전 8:30",
    quoteStatuses: ["Quote Check", "Office Moving", "Requested Quote"],
    quoteType: "사무실이사",
    startLocation: "서울시 관악구",
    endLocation: "경기도 파주시",
    startLocationDetail: "서울시 관악구 남부순환로 100",
    endLocationDetail: "경기도 파주시 문발동 456",
    location: ["서울", "경기"],
    price: 205000,
    reject: false,
    done: false,
  },
  {
    id: 11,
    name: "최재영",
    requestDate: "24.08.20",
    movingDate: "2024.09.25(수)",
    movingTime: "오후 2:30",
    quoteStatuses: ["Quote Check", "Home Moving"],
    quoteType: "가정이사",
    startLocation: "서울시 동대문구",
    endLocation: "경기도 안양시",
    startLocationDetail: "서울시 동대문구 왕산로 34",
    endLocationDetail: "경기도 안양시 동안구 평촌대로 345",
    location: ["서울", "경기"],
    price: 195000,
    reject: false,
    done: true,
  },
  {
    id: 12,
    name: "김미정",
    requestDate: "24.09.01",
    movingDate: "2024.09.30(월)",
    movingTime: "오전 11:00",
    quoteStatuses: ["Office Moving", "Requested Quote"],
    quoteType: "사무실이사",
    startLocation: "서울시 금천구",
    endLocation: "경기도 광주",
    startLocationDetail: "서울시 금천구 시흥대로 59",
    endLocationDetail: "경기도 광주시 경안동 123",
    location: ["서울", "경기"],
    price: 230000,
    reject: true,
    done: true,
  },
  {
    id: 13,
    name: "이진호",
    requestDate: "24.09.05",
    movingDate: "2024.10.01(화)",
    movingTime: "오후 3:00",
    quoteStatuses: ["Quote Check", "Home Moving"],
    quoteType: "가정이사",
    startLocation: "서울시 서대문구",
    endLocation: "경기도 의정부시",
    startLocationDetail: "서울시 서대문구 연세로 123",
    endLocationDetail: "경기도 의정부시 경의로 456",
    location: ["서울", "경기"],
    price: 175000,
    reject: false,
    done: false,
  },
  {
    id: 14,
    name: "김서현",
    requestDate: "24.09.10",
    movingDate: "2024.10.05(토)",
    movingTime: "오후 4:30",
    quoteStatuses: ["Home Moving", "Requested Quote"],
    quoteType: "사무실이사",
    startLocation: "서울시 송파구",
    endLocation: "경기도 남양주시",
    startLocationDetail: "서울시 송파구 올림픽로 123",
    endLocationDetail: "경기도 남양주시 도농동 789",
    location: ["서울", "경기"],
    price: 210000,
    reject: true,
    done: true,
  },
  {
    id: 15,
    name: "홍길동",
    requestDate: "24.09.15",
    movingDate: "2024.10.10(화)",
    movingTime: "오전 9:30",
    quoteStatuses: ["Quote Check", "Office Moving"],
    quoteType: "가정이사",
    startLocation: "서울시 강북구",
    endLocation: "경기도 김포시",
    startLocationDetail: "서울시 강북구 수유동 123",
    endLocationDetail: "경기도 김포시 고촌읍 456",
    location: ["서울", "경기"],
    price: 220000,
    reject: false,
    done: true,
  },
];

export default driverQuoteData;
