import ArrowLeft from "@/assets/icons/arrowleft.svg?react";
import { Link } from "react-router-dom";

function RulesAndPrivate() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#f7f7f6] py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className=" flex mb-8">
        <Link to="/profile">
          <ArrowLeft className=" w-[25px] h-[25px]" />
        </Link>
      </div>
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 rounded-3xl bg-white p-6 sm:p-8 border border-zinc-200 shadow-sm">
          <h1 className="text-2xl sm:text-3xl font-black text-zinc-900">
            قوانین و حریم خصوصی
          </h1>

          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-7">
            این صفحه چارچوب استفاده از خدمات زی هوم را مشخص می‌کند. استفاده از
            سایت به معنای پذیرش کامل این شرایط است.
          </p>
        </div>

        <section className="rounded-3xl bg-white p-6 border border-zinc-200 shadow-sm">
          <h2 className="text-lg sm:text-xl font-black text-zinc-900 mb-6">
            قوانین استفاده
          </h2>

          <div className="space-y-4">
            <div className="rounded-2xl bg-zinc-50 p-5">
              <h3 className="font-bold text-zinc-900">ثبت سفارش</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-7">
                ثبت سفارش به معنای درخواست خرید است و نهایی شدن آن منوط به
                موجودی کالا و تأیید پرداخت می‌باشد.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-50 p-5">
              <h3 className="font-bold text-zinc-900">مسئولیت کاربر</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-7">
                کاربر موظف است اطلاعات صحیح وارد کند. مسئولیت اشتباه در اطلاعات
                ثبت‌شده بر عهده کاربر است.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-50 p-5">
              <h3 className="font-bold text-zinc-900">ارسال و بازگشت کالا</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-7">
                ارسال بین ۱ تا ۳ روز کاری انجام می‌شود. در صورت مغایرت یا خرابی،
                امکان مرجوعی وجود دارد.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-50 p-5">
              <h3 className="font-bold text-zinc-900">قیمت محصولات</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-7">
                قیمت‌ها به تومان هستند و ممکن است بدون اطلاع قبلی تغییر کنند.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-6 border border-zinc-200 shadow-sm">
          <h2 className="text-lg sm:text-xl font-black text-zinc-900 mb-6">
            حریم خصوصی
          </h2>

          <div className="space-y-4">
            <div className="rounded-2xl bg-zinc-50 p-5">
              <h3 className="font-bold text-zinc-900">جمع‌آوری اطلاعات</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-7">
                اطلاعات کاربران فقط برای پردازش سفارش، ارسال کالا و پشتیبانی
                استفاده می‌شود.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-50 p-5">
              <h3 className="font-bold text-zinc-900">امنیت اطلاعات</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-7">
                اطلاعات کاربران محرمانه بوده و به هیچ شخص ثالثی منتقل نمی‌شود
                مگر در موارد قانونی.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-50 p-5">
              <h3 className="font-bold text-zinc-900">کوکی‌ها</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-7">
                برای بهبود تجربه کاربری از کوکی‌ها استفاده می‌شود و کاربر
                می‌تواند آن را مدیریت کند.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-6 rounded-3xl bg-[#DC2655] p-6 text-white">
          <h3 className="font-black text-lg">پذیرش قوانین</h3>
          <p className="mt-2 text-sm leading-7 text-white/90">
            ادامه استفاده از سایت به معنای مطالعه و پذیرش کامل این قوانین است.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RulesAndPrivate;
