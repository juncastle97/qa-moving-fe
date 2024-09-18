import Image from "next/image";
import { useRouter } from "next/router";
import CustomButton from "@/components/common/Button";

export default function Home() {
  const router = useRouter();

  const handleClickLogin = () => {
    router.push("/login-user");
  };

  const handleClickSignup = () => {
    router.push("/signup-user");
  };

  return (
    <>
      <div className="min-h-[calc(100vh-60px)] bg-bg-400 lg:min-h-[calc(100vh-88px)]">
        <h1 className="pb-30 pt-80 text-center text-landing-h2 lg:text-landing-h1">
          원하는 이사 서비스를 요청하고
          <br />
          견적을 받아보세요
        </h1>

        <div className="mx-auto hidden w-full items-center justify-center lg:flex">
          <div className="relative h-598 w-432">
            <Image src="/images/md_01.png" alt="landing-img" fill />
          </div>
          <div>
            <div className="relative h-287 w-764">
              <Image src="/images/md_02.png" alt="landing-img" fill />
            </div>
            <div className="relative h-287 w-764">
              <Image src="/images/md_03.png" alt="landing-img" fill />
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-full flex-col items-center justify-center gap-12 lg:hidden">
          <div className="relative h-240 w-327">
            <Image src="/images/sm_01.png" alt="landing-img" fill />
          </div>
          <div className="relative h-240 w-327">
            <Image src="/images/sm_02.png" alt="landing-img" fill />
          </div>
          <div className="relative h-240 w-327">
            <Image src="/images/sm_03.png" alt="landing-img" fill />
          </div>
        </div>

        <div className="mt-30 flex flex-col items-center justify-center gap-8 pb-65 lg:flex-row lg:gap-16 lg:pb-54">
          <CustomButton
            text="로그인"
            className="h-54 w-327 rounded-50 text-lg-16px-semibold lg:h-64 lg:w-340 lg:text-xl-20px-semibold"
            onClick={handleClickLogin}
          />
          <CustomButton
            text="회원가입"
            className="h-54 w-327 rounded-50 text-lg-16px-semibold lg:h-64 lg:w-340 lg:text-xl-20px-semibold"
            onClick={handleClickSignup}
            outline={true}
          />
        </div>
      </div>
    </>
  );
}
