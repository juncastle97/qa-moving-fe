import Image from "next/image";
import { useRouter } from "next/router";

export default function GNB() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      <div className="flex items-center justify-between w-full px-24 py-10 border-b h-54 border-line-100 md:h-60 md:px-32 md:py-19 lg:h-88 lg:px-120 lg:py-26">
        <div className="flex items-center gap-80">
          <div className="relative h-34 w-88 lg:h-44 lg:w-116">
            <Image src="/icons/ic-logo-icon-text.svg" alt="logo-icon-text" fill />
          </div>
          <div className="flex gap-40 text-2lg-18px-bold">
            <div>견적요청</div>
            <div>기사님 찾기</div>
            <div>햄께 했던 기사님</div>
          </div>
        </div>
        {currentPath == "/" && (
          <div className="flex gap-24 itsems-center w-72 lg:w-167 lg:gap-32">
            <div className="relative w-24 h-24 lg:h-36 lg:w-36">
              <Image src="/icons/ic-alarm.svg" alt="ic-alarm" fill />
            </div>
            <div className="flex items-center gap-15">
              <div className="relative w-24 h-24 overflow-hidden rounded-full lg:h-36 lg:w-36">
                <Image src="/images/img-default.png" alt="default-profile-img" fill />
              </div>
              <div className="text-2lg-18px-medium">김가나</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
