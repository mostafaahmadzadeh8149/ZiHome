import ArrowLeft from "@/assets/icons/arrowleft.svg?react";
import { Link } from "react-router-dom";

function TermsZihome() {
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
        <div className="rounded-3xl bg-white p-6 sm:p-8 border border-zinc-200 shadow-sm">
          <h1 className="text-2xl sm:text-3xl font-black text-zinc-900">
            شرایط استفاده از زی هوم
          </h1>

          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-7">
            با استفاده از خدمات زی هوم، شما قوانین و شرایط زیر را می‌پذیرید.
            لطفاً پیش از ثبت سفارش این موارد را مطالعه کنید.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="bg-white p-5 rounded-2xl border border-zinc-200">
            <h2 className="font-bold text-zinc-900">۱. ثبت سفارش</h2>
            <p className="mt-2 text-sm text-zinc-600 leading-7">
              ثبت سفارش به معنای درخواست خرید است و نهایی شدن آن وابسته به
              موجودی کالا و تأیید پرداخت می‌باشد.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-zinc-200">
            <h2 className="font-bold text-zinc-900">۲. قیمت محصولات</h2>
            <p className="mt-2 text-sm text-zinc-600 leading-7">
              قیمت‌ها ممکن است بدون اطلاع قبلی تغییر کنند و همگی به تومان نمایش
              داده می‌شوند.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-zinc-200">
            <h2 className="font-bold text-zinc-900">۳. ارسال سفارش</h2>
            <p className="mt-2 text-sm text-zinc-600 leading-7">
              زمان ارسال بسته به موقعیت جغرافیایی بین ۱ تا ۳ روز کاری متغیر است.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-zinc-200">
            <h2 className="font-bold text-zinc-900">۴. بازگشت کالا</h2>
            <p className="mt-2 text-sm text-zinc-600 leading-7">
              در صورت وجود ایراد فنی یا مغایرت، امکان بازگشت کالا طبق شرایط
              پشتیبانی وجود دارد.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-zinc-200">
            <h2 className="font-bold text-zinc-900">۵. حریم خصوصی</h2>
            <p className="mt-2 text-sm text-zinc-600 leading-7">
              اطلاعات کاربران محفوظ بوده و فقط برای پردازش سفارش و بهبود خدمات
              استفاده می‌شود.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-zinc-200">
            <h2 className="font-bold text-zinc-900">۶. تغییر قوانین</h2>
            <p className="mt-2 text-sm text-zinc-600 leading-7">
              زی هوم حق دارد در هر زمان قوانین را به‌روزرسانی کند و نسخه جدید
              معتبر خواهد بود.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsZihome;
