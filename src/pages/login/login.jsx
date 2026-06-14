import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Swal from "sweetalert2";

import ArrowLeft from "@/assets/icons/arrowleft.svg?react";
import LogoIcon from "@/assets/icons/logo.svg?react";
import { AuthContext } from "../../context/authContext";

function LoginPage() {
  const { userName, password, passwordHandler, userNameHandler } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    const isAdmin = userName === "admin" && password === "1234";
    const isUser = userName === "user" && password === "1234";

    if (!isAdmin && !isUser) {
      Swal.fire({
        title: "Error!",
        text: "نام کاربری یا رمز عبور اشتباه است",
        icon: "error",
        confirmButtonText: "بستن",
      });
      return;
    }

    document.cookie = "isLogin=true; path=/; max-age=86400";

    if (isAdmin) {
      document.cookie = "role=admin; path=/; max-age=86400";
      navigate("/adminPanel");
      return;
    }

    document.cookie = "role=user; path=/; max-age=86400";
    navigate("/profile");
  };

  return (
    <div className="px-6 md:mx-[150px] md:px-0 flex flex-col min-h-screen">
      <div className="flex items-end justify-end mt-5">
        <Link to="/">
          <ArrowLeft className="w-[25px] h-[25px]" />
        </Link>
      </div>

      <div className="flex items-center justify-center mt-[10px]">
        <LogoIcon className="w-[120px] h-[120px]" />
      </div>

      <div className="w-full flex justify-center">
        <div
          className="
          w-full
          md:w-[450px]
          mt-5
          md:mt-10

          md:bg-white
          md:border
          md:border-zinc-200
          md:rounded-3xl
          md:shadow-sm
          md:p-8
        "
        >
          <p className="font-bold text-right">ورود یا ثبت نام در زی هوم</p>

          <p className="text-[11px] text-gray-500 py-3 text-right">
            لطفا نام کاربری و رمز عبور خود را وارد کنید
          </p>

          <form dir="rtl" className="rounded-3xl space-y-6 mt-6">
            <div className="relative">
              <label className="absolute -top-3 right-3 bg-white px-2 text-sm text-zinc-600">
                نام کاربری
              </label>

              <input
                type="text"
                className="
                  w-full h-12
                  border border-zinc-300
                  rounded-2xl px-4
                  outline-none
                  focus:border-[#DC2655]
                "
                onChange={userNameHandler}
                value={userName}
              />
            </div>

            <div className="relative">
              <label className="absolute -top-3 right-3 bg-white px-2 text-sm text-zinc-600">
                رمز عبور
              </label>

              <input
                type="password"
                className="
                  w-full h-12
                  border border-zinc-300
                  rounded-2xl px-4
                  outline-none
                  focus:border-[#DC2655]
                "
                onChange={passwordHandler}
                value={password}
              />
            </div>

            <button
              type="submit"
              onClick={login}
              className="
                w-full h-14
                rounded-2xl
                bg-[#DC2655]
                text-white
                font-bold
                hover:bg-[#c81f4b]
                transition
              "
            >
              ورود به زی هوم
            </button>
          </form>

          <p className="text-right text-xs text-zinc-600 leading-6 mt-2">
            ورود شما به معنای پذیرش{" "}
            <Link className="text-[#DC2655] font-bold" to="/terms">
              شرایط زی هوم
            </Link>{" "}
            و{" "}
            <Link className="text-[#DC2655] font-bold" to="/rules">
              قوانین و حریم خصوصی
            </Link>{" "}
            است
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
