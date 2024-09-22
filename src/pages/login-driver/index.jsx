import CustomButton from "@/components/common/Button";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ERROR_MESSAGE } from "@/constants/formMessages";
import CustomInput from "@/components/common/Input";
import CustomLable from "@/components/common/Lable";

export default function LoginDriver() {
  const router = useRouter();

  const handleLoginDriver = () => {
    router.push("/login-user");
  };

  const handleSignupUser = () => {
    router.push("/signup-driver");
  };

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    try {
      console.log("Form submitted with data:", data);
      router.push("/my-request");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="mx-auto mb-88 mt-56 flex w-327 flex-col items-center gap-40 lg:w-640 lg:gap-72">
        <div className="flex flex-col items-center gap-8">
          <div className="relative h-64 w-112 lg:h-80 lg:w-140">
            <Image src="/icons/ic-logo-text.svg" alt="logo-text" fill />
          </div>
          <div className="text-xs-12px-regular text-black-200 lg:text-xl-20px-regular">
            일반 유저라면?{" "}
            <span
              className="cursor-pointer text-primary-blue-300 underline underline-offset-2"
              onClick={handleLoginDriver}
            >
              일반 유저 전용 페이지
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="flex flex-col gap-32 lg:gap-56">
            <div className="flex flex-col gap-16 lg:gap-32">
              <div className="flex flex-col gap-8 lg:gap-16">
                <CustomLable text="이메일" htmlFor="email" />
                <CustomInput
                  type="text"
                  id="email"
                  placeholder="이메일을 입력해주세요"
                  {...register("email", {
                    required: ERROR_MESSAGE.email.required,
                  })}
                />
              </div>
              <div className="flex flex-col gap-8 lg:gap-16">
                <CustomLable text="비밀번호" htmlFor="password" />
                <CustomInput
                  type="password"
                  id="password"
                  placeholder="비밀번호를 입력해주세요"
                  {...register("password", {
                    required: ERROR_MESSAGE.password.required,
                  })}
                  autoComplete="off"
                />
              </div>
            </div>
            <CustomButton
              text="로그인"
              type="submit"
              className="h-54 w-full rounded-16 text-lg-16px-semibold lg:h-64 lg:text-xl-20px-semibold"
              disabled={!isValid}
            />
          </div>
          <div className="mt-24 text-center text-xs-12px-regular text-black-200 lg:text-xl-20px-regular">
            아직 무빙 회원이 아니신가요?{" "}
            <span
              className="cursor-pointer text-primary-blue-300 underline underline-offset-2"
              onClick={handleSignupUser}
            >
              이메일로 회원가입하기
            </span>
          </div>
        </form>

        {/* <div className="flex flex-col items-center gap-24 lg:gap-32">
          <div className="text-xs-12px-regular text-black-200 lg:text-xl-20px-regular">
            SNS 계정으로 간편 로그인하기
          </div>
          <div className="flex gap-24 lg:gap-32">
            <div className="relative h-54 w-54 cursor-pointer lg:h-72 lg:w-72">
              <Image src="/images/img-google.png" alt="google img" fill />
            </div>
            <div className="relative h-54 w-54 cursor-pointer lg:h-72 lg:w-72">
              <Image src="/images/img-kakao.png" alt="kakao img" fill />
            </div>
            <div className="relative h-54 w-54 cursor-pointer lg:h-72 lg:w-72">
              <Image src="/images/img-naver.png" alt="naver img" fill />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
