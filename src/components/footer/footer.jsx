
import { Link } from "react-router-dom";

import LogoIcon from "@/assets/icons/logo.svg?react";

import Linkedin from "@/assets/icons/Linkedin.svg?react";
import Twitter from "@/assets/icons/Twitter.svg?react";
import Instagram from "@/assets/icons/Instagram.svg?react";
import YouTube from "@/assets/icons/Youtube.svg?react";

import Truck from "@/assets/icons/truck.svg?react";
import Check from "@/assets/icons/checkmark.svg?react";
import CubeIcon from "@/assets/icons/kube.svg?react";

import F1 from "@/assets/icons/f1.svg?react";
import F2 from "@/assets/icons/f2.svg?react";
import F3 from "@/assets/icons/f3.svg?react";

function Footer() {
  const links = {
    store: ["اتاق خبر", "فروش در سایت", "فرصت‌های شغلی", "تماس با ما"],
    customer: ["پرسش‌های متداول", "رویه بازگشت", "حریم خصوصی", "شرایط استفاده"],
    guide: ["نحوه ثبت سفارش", "شیوه پرداخت", "روش ارسال", "پیگیری سفارش"],
  };

  return (
    <footer className="w-full bg-[#F5F5F5] border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="py-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-b border-gray-200">
          <div className="flex flex-col items-center lg:items-start gap-3">
            <LogoIcon className="w-[120px] lg:w-[140px] h-10" />
            <div className="text-[12px] text-gray-600 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span>تلفن پشتیبانی ۰۲۱-۹۱۰۰۰۱۰۰</span>
              <span className="hidden lg:inline text-gray-300">|</span>
              <span>۷ روز هفته، ۲۴ ساعته پاسخگو هستیم</span>
            </div>
          </div>

          <button className="h-10 px-4 self-center lg:self-auto border border-gray-300 rounded-lg text-[12px] text-gray-700 hover:bg-gray-100 transition">
            بازگشت به بالا
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 py-8 border-b border-gray-200">
          {[
            { icon: Truck, title: "ارسال سریع" },
            { icon: Check, title: "ضمانت بازگشت" },
            { icon: CubeIcon, title: "ضمانت اصالت" },
          ].map(({ icon: Icon, title }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <Icon className="w-8 h-8 mb-2 text-gray-700" />
              <span className="text-[12px] lg:text-[13px] font-medium text-gray-700">
                {title}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-b border-gray-200">
          <div>
            <h3 className="font-bold text-[15px] mb-4">با فروشگاه</h3>
            <ul className="space-y-3 text-[13px] text-gray-600">
              {links.store.map((item) => (
                <li key={item}>
                  <Link to="#" className="hover:text-gray-900 transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[15px] mb-4">خدمات مشتریان</h3>
            <ul className="space-y-3 text-[13px] text-gray-600">
              {links.customer.map((item) => (
                <li key={item}>
                  <Link to="#" className="hover:text-gray-900 transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[15px] mb-4">راهنمای خرید</h3>
            <ul className="space-y-3 text-[13px] text-gray-600">
              {links.guide.map((item) => (
                <li key={item}>
                  <Link to="#" className="hover:text-gray-900 transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h3 className="font-bold text-[15px] mb-4">همراه ما باشید</h3>

            <div className="flex items-center gap-4 mb-6 text-gray-700">
              <Linkedin className="w-5 h-5 cursor-pointer hover:opacity-70 transition" />
              <Twitter className="w-5 h-5 cursor-pointer hover:opacity-70 transition" />
              <Instagram className="w-5 h-5 cursor-pointer hover:opacity-70 transition" />
              <YouTube className="w-5 h-5 cursor-pointer hover:opacity-70 transition" />
            </div>

            <h4 className="font-medium text-[14px] mb-3">دریافت خبرنامه</h4>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="ایمیل شما"
                className="flex-1 h-11 rounded-lg bg-white border border-gray-200 px-4 text-[13px] outline-none focus:ring-2 focus:ring-gray-300"
              />
              <button className="h-11 px-5 rounded-lg bg-gray-800 text-white text-[13px] hover:bg-gray-700 transition">
                ثبت
              </button>
            </div>
          </div>
        </div>

        <div className="py-8 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="flex-1">
              <h2 className="font-bold text-[17px] mb-4">
                فروشگاه اینترنتی مبلمان و دکوراسیون
              </h2>

              <p className="text-[13px] leading-8 text-gray-600">
                این فروشگاه مجموعه‌ای کامل از محصولات دکوراسیون داخلی، مبلمان،
                لوازم آشپزخانه و اکسسوری منزل را با بهترین کیفیت و مناسب‌ترین
                قیمت ارائه می‌دهد. هدف ما تجربه یک خرید سریع، مطمئن و حرفه‌ای
                برای کاربران است.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-end">
              {[F1, F2, F3].map((Badge, index) => (
                <div
                  key={index}
                  className="w-[92px] h-[92px] lg:w-[110px] lg:h-[110px] rounded-xl bg-white border border-gray-200 flex items-center justify-center"
                >
                  <Badge className="w-14 h-14 lg:w-16 lg:h-16" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-6">
          <p className="text-center text-[11px] text-gray-500 leading-6">
            استفاده از مطالب این وبسایت فقط برای مقاصد غیرتجاری و با ذکر منبع
            بلامانع است. تمامی حقوق این سایت محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
