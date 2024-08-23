import Image from "next/image";
import { useRouter } from "next/router";
import CustomButton from "@/components/common/Button";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/login-user");
  };

  return (
    <>
      <div className="h-[calc(100vh-54px)] bg-bg-400 md:h-[calc(100vh-60px)] lg:h-[calc(100vh-88px)]">
        <h1 className="text-landing-h2 pb-30 pt-80 text-center lg:text-landing-h1">
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

        <div className="mt-30 flex justify-center">
          <CustomButton
            text="지금 시작하기"
            className="h-54 w-327 rounded-50 text-lg-16px-semibold lg:h-64 lg:w-640 lg:text-xl-20px-semibold"
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
}
