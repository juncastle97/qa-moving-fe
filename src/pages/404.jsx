import React from "react";
import Link from "next/link";

const Custom404 = () => {
  const routes = [
    { path: "/", name: "홈" },
    { path: "/login-user", name: "로그인_일반유저" },
    { path: "/signup-user", name: "회원가입_일반유저" },
    { path: "/profile-user", name: "프로필등록_일반유저" },
    { path: "/quote-request", name: "견적요청" },
    { path: "/quote-request-wait", name: "견적요청_진행 중인 경우" },
    { path: "/find-driver", name: "기사님 찾기" },
    { path: "/find-driver/1", name: "기사님 상세페이지" },
    { path: "/my-quote/wait", name: "내 견적 관리_대기 중인 견적" },
    { path: "/my-quote/wait/1", name: "내 견적 관리_대기 중인 견적_상세" },
    { path: "/my-quote/done", name: "내 견적 관리_받았던 견적" },
    { path: "/my-quote/done/1", name: "내 견적 관리_받았던 견적_상세" },
    { path: "/liked-driver", name: "찜한 기사님" },
    { path: "/review/add-review", name: "작성 가능한 리뷰" },
    { path: "/review/my-review", name: "내가 작성한 리뷰" },
    { path: "/edit-profile-user", name: "프로필 수정_일반유저" },
    { path: "/login-driver", name: "로그인_기사님" },
    { path: "/signup-driver", name: "회원가입_기사님" },
    { path: "/profile-driver", name: "프로필 등록_기사님" },
    { path: "/my-request", name: "받은 요청" },
    { path: "/my-quote-driver/receive", name: "내 견적 관리_확정 견적" },
    { path: "/my-quote-driver/receive/1", name: "내 견적 관리_확정 견적_상세" },
    { path: "/my-quote-driver/reject", name: "내 견적 관리_반려 견적" },
    { path: "/mypage-driver", name: "마이페이지_기사님" },
    { path: "/edit-profile-driver/profile", name: "프로필 수정_기사님" },
    { path: "/edit-profile-driver/basic-info", name: "기본정보 수정_기사님" },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold">404 - 페이지를 찾을 수 없습니다</h1>
      <p className="mt-4">요청하신 페이지가 존재하지 않습니다.</p>
      <p className="mt-8">아래의 경로를 확인해 보세요:</p>
      <ul className="mt-4 space-y-2">
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>
              <div className="text-blue-500 hover:underline">{route.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Custom404;
