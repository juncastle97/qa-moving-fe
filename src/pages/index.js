import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-bg-400">
        <h1 className="text-landing-h1 pb-48 pt-80 text-center">
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
      </div>
    </>
  );
}
