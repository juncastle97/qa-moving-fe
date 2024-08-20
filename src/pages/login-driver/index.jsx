import CustomButton from "@/components/common/Button";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ERROR_MESSAGE } from "@/constants/formMessages";

export default function LoginUser() {
  const router = useRouter();

  const handleLoginUser = () => {
    router.push("/login-user");
  };

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="mx-auto mt-56 flex w-640 flex-col items-center gap-72">
        <div className="flex flex-col items-center gap-8">
          <div className="relative h-80 w-140">
            <Image src="/icons/ic-logo-text.svg" alt="logo-text" fill />
          </div>
          <div className="text-xl-20px-regular text-black-200">
            일반 유저라면?{" "}
            <span
              className="cursor-pointer text-primary-blue-300 underline underline-offset-2"
              onClick={handleLoginUser}
            >
              일반 유저 전용 페이지
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <div className="flex flex-col gap-56">
              <div className="flex flex-col gap-32">
                <div className="flex flex-col gap-16">
                  <label htmlFor="email" className="text-xl-20px-regular text-black-400">
                    이메일
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="이메일"
                    {...register("email", {
                      required: ERROR_MESSAGE.email.required,
                    })}
                    className="h-64 w-640 rounded-16 border border-line-200 bg-grayscale-50 p-14 text-xl-20px-regular outline-none"
                  />
                </div>
                <div className="flex flex-col gap-16">
                  <label htmlFor="password" className="text-xl-20px-regular text-black-400">
                    비밀번호
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="비밀번호"
                    {...register("password", {
                      required: ERROR_MESSAGE.password.required,
                    })}
                    className="h-64 w-640 rounded-16 border border-line-200 bg-grayscale-50 p-14 text-xl-20px-regular text-grayscale-400 outline-none"
                    autoComplete="off"
                  />
                </div>
              </div>
              <CustomButton
                text="로그인"
                type="submit"
                className="h-64 w-640 rounded-16 text-xl-20px-semibold"
                disabled={!isValid}
              />
            </div>
            <div className="mt-24 text-center text-xl-20px-regular text-black-200">
              아직 무빙 회원이 아니신가요?{" "}
              <span className="cursor-pointer text-primary-blue-300 underline underline-offset-2">
                이메일로 회원가입하기
              </span>
            </div>
          </div>
        </form>

        {/* <div className="flex flex-col items-center gap-32">
          <div className="text-xl-20px-regular text-black-200">SNS 계정으로 간편 가입하기</div>
          <div className="flex gap-32">
            <div className="relative h-72 w-72 cursor-pointer">
              <Image src="/images/img-google.png" alt="google img" fill />
            </div>
            <div className="relative h-72 w-72 cursor-pointer">
              <Image src="/images/img-kakao.png" alt="kakao img" fill />
            </div>
            <div className="relative h-72 w-72 cursor-pointer">
              <Image src="/images/img-naver.png" alt="naver img" fill />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
