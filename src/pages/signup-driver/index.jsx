import CustomButton from "@/components/common/Button";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ERROR_MESSAGE } from "@/constants/formMessages";
import CustomInput from "@/components/common/Input";
import CustomLable from "@/components/common/Lable";

export default function SignupDriver() {
  const router = useRouter();

  const handleSignupUser = () => {
    router.push("/signup-user");
  };

  const handleLoginDriver = () => {
    router.push("/login-driver");
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange" });

  const password = watch("password");

  const onSubmit = (data) => console.log(data);

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
              onClick={handleSignupUser}
            >
              일반 유저 전용 페이지
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="flex flex-col gap-32 lg:gap-56">
            <div className="flex flex-col gap-16 lg:gap-32">
              <div className="flex flex-col gap-8 lg:gap-16">
                <CustomLable text="이름" htmlFor="name" />
                <CustomInput
                  type="text"
                  id="name"
                  placeholder="성함을 입력해주세요"
                  error={errors.name}
                  {...register("name", { required: true })}
                />
              </div>
              <div className="flex flex-col gap-8 lg:gap-16">
                <CustomLable text="이메일" htmlFor="email" />
                <CustomInput
                  type="text"
                  id="email"
                  placeholder="이메일을 입력해주세요"
                  error={errors.email}
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: ERROR_MESSAGE.email.valid,
                    },
                  })}
                />
              </div>
              <div className="flex flex-col gap-8 lg:gap-16">
                <CustomLable text="전화번호" htmlFor="address" />
                <CustomInput
                  type="text"
                  id="address"
                  placeholder="숫자만 입력해주세요"
                  error={errors.address}
                  {...register("address", {
                    required: true,
                    pattern: {
                      value: /^[0-9]+$/,
                      message: ERROR_MESSAGE.address.valid,
                    },
                  })}
                />
              </div>
              <div className="flex flex-col gap-8 lg:gap-16">
                <CustomLable text="비밀번호" htmlFor="password" />
                <CustomInput
                  type="password"
                  id="password"
                  placeholder="비밀번호를 입력해주세요"
                  error={errors.password}
                  {...register("password", { required: true })}
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col gap-8 lg:gap-16">
                <CustomLable text="비밀번호" htmlFor="passwordConfirm" />
                <CustomInput
                  type="password"
                  id="passwordConfirm"
                  placeholder="비밀번호를 다시 한번 입력해주세요"
                  error={errors.passwordConfirm}
                  {...register("passwordConfirm", {
                    required: true,
                    validate: (value) => value === password || ERROR_MESSAGE.password.confirm,
                  })}
                  autoComplete="off"
                />
              </div>
            </div>
            <CustomButton
              text="시작하기"
              type="submit"
              className="h-54 w-full rounded-16 text-lg-16px-semibold lg:h-64 lg:text-xl-20px-semibold"
              disabled={!isValid}
            />
          </div>
          <div className="mt-24 text-center text-xs-12px-regular text-black-200 lg:text-xl-20px-regular">
            이미 무빙 회원이신가요?{" "}
            <span
              className="cursor-pointer text-primary-blue-300 underline underline-offset-2"
              onClick={handleLoginDriver}
            >
              로그인
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
