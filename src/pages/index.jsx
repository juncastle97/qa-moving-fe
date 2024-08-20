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
      <div className="h-[calc(100vh-88px)] bg-bg-400">
        <h1 className="pb-30 pt-80 text-center text-landing-h1">
          원하는 이사 서비스를 요청하고
          <br />
          견적을 받아보세요
        </h1>
        <div className="mx-auto flex w-full items-center justify-center">
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
        <div className="mt-30 flex justify-center">
          <CustomButton
            text="지금 시작하기"
            className="h-64 w-640 rounded-50 text-xl-20px-semibold"
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
}
