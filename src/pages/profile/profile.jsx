import { Link, useNavigate } from "react-router-dom";
import { getRole, logout } from "../../utils/auth";
import { useState } from "react";

import Setting from "@/assets/icons/Settings.svg?react";
import NavBarMobile from "../../components/navBarMobile/navBarMobile";
import ProfileIcon from "@/assets/icons/profile.svg?react";
import DeletIcon from "@/assets/icons/delet.svg?react";
import LogoIcon from "@/assets/icons/logo.svg?react";
import Exit from "@/assets/icons/exit.svg?react";
import CartIcon from "@/assets/icons/shoppingCart.svg?react";

function Profile() {
  const role = getRole();
  const [settingPanel, setSettingPanel] = useState(false);
  const navigate = useNavigate();

  const logoutHandler = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="min-h-screen bg-[#f6f6f5]">
      <NavBarMobile />

      <div className="px-6 md:px-[150px] flex items-center justify-between py-4">
        <Link to="/account">
          <ProfileIcon className="text-zinc-600 w-[35px] h-[35px]" />
        </Link>

        <button onClick={() => setSettingPanel(true)}>
          <Setting className="text-zinc-600 w-[30px] h-[30px]" />
        </button>
      </div>

      <hr className="border-zinc-200" />

      <div className="px-6 md:px-[150px] mt-10">
        <div className="w-full max-w-xl mx-auto bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm space-y-4">
          <Link
            to="/shoppingCart"
            className="
              flex items-center justify-between
              p-4 rounded-2xl
              bg-zinc-50
              hover:bg-zinc-100
              transition
              border border-zinc-100
            "
          >
            <div className="flex items-center gap-3">
              <CartIcon className="w-6 h-6 text-zinc-700" />
              <span className="font-medium text-zinc-800">سبد خرید</span>
            </div>

            <span className="text-xs text-zinc-500">مشاهده</span>
          </Link>

          <button
            onClick={logoutHandler}
            className="
              w-full flex items-center justify-between
              p-4 rounded-2xl
              bg-red-50
              hover:bg-red-100
              transition
              border border-red-100
            "
          >
            <div className="flex items-center gap-3 text-[#DC2655]">
              <Exit className="w-6 h-6" />
              <span className="font-bold">خروج از حساب کاربری</span>
            </div>

            <span className="text-xs text-[#DC2655]/70">Logout</span>
          </button>
        </div>
      </div>

      {settingPanel && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-6">
          <div className="w-full max-w-xl bg-white rounded-3xl p-8 shadow-xl relative text-center">
            <div className="flex items-center justify-between mb-6">
              <button onClick={() => setSettingPanel(false)}>
                <DeletIcon className="w-8 h-8 text-zinc-600" />
              </button>

              <h2 className="font-bold text-zinc-800">پشتیبانی و اطلاعات</h2>

              <div className="w-8" />
            </div>

            <div className="space-y-4 text-right" dir="rtl">
              <p className="text-sm text-zinc-700 leading-7">
                این بخش برای نمایش اطلاعات پشتیبانی، قوانین و راهنمای کاربران
                طراحی شده است.
              </p>

              <p className="text-sm text-zinc-600 leading-7 bg-zinc-50 border border-zinc-200 p-4 rounded-2xl">
                به دلیل استفاده از <span className="font-bold">API فیک</span>،
                این بخش صرفاً نمایشی بوده و امکان توسعه واقعی در این پروژه
                تمرینی وجود ندارد.
              </p>

              <p className="text-xs text-zinc-500 leading-6">
                در نسخه واقعی شامل:
                <br />• پشتیبانی آنلاین
                <br />• ارسال تیکت
                <br />• تماس با تیم
                <br />• سوالات متداول
              </p>
            </div>

            <LogoIcon
              className="
                absolute bottom-4 left-1/2 -translate-x-1/2
                w-[70px] h-[70px]
                opacity-10
                pointer-events-none
              "
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
