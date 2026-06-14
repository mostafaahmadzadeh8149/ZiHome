import { Link } from "react-router-dom";

function Account() {
  return (
    <div
      dir="rtl"
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-6"
    >
      <div className="w-full max-w-xl bg-white rounded-3xl p-8 shadow-xl relative text-center">
        <div className="flex items-center justify-between mb-6">
          <div className="w-8" />

          <h2 className="font-bold text-zinc-800 text-lg">حساب کاربری</h2>

          <div className="w-8" />
        </div>

        <div className="w-20 h-20 mx-auto rounded-full bg-[#DC2655]/10 flex items-center justify-center mb-5">
          <span className="text-4xl">👤</span>
        </div>

        <div className="space-y-4 text-right">
          <p className="text-sm text-zinc-700 leading-7">
            این بخش برای مشاهده و ویرایش اطلاعات حساب کاربری، مدیریت آدرس‌ها و
            تنظیمات شخصی طراحی شده است.
          </p>

          <p className="text-sm text-zinc-600 leading-7 bg-zinc-50 border border-zinc-200 p-4 rounded-2xl">
            به دلیل استفاده از <span className="font-bold">API فیک</span>، امکان
            ویرایش واقعی اطلاعات در این پروژه تمرینی وجود ندارد.
          </p>

          <p className="text-xs text-zinc-500 leading-6">
            در نسخه واقعی شامل:
            <br />• ویرایش پروفایل
            <br />• مدیریت آدرس‌ها
            <br />• تاریخچه سفارشات
          </p>
        </div>

        <div className="mt-8">
          <Link
            to="/"
            className="
              inline-flex
              items-center
              justify-center
              px-6
              h-12
              rounded-2xl
              bg-[#DC2655]
              text-white
              font-bold
              transition
              hover:bg-[#c81f4b]
            "
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none">
          <span className="text-6xl">ZiHome</span>
        </div>
      </div>
    </div>
  );
}

export default Account;
