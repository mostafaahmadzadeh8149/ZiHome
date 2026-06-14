import { useParams } from "react-router-dom";
import data from "../../../dataBase/db.json";
import NavBarPc from "../../components/navBarPc/navBarPc";
import NavBarBottomPc from "../../components/navBarPc/navBarBottomPc";
import NavbarHeaderMobile from "../../components/navBarMobile/navBarHeaderMobile";

function BannerPageHeader() {
  const { slug } = useParams();

  const bannerInfo = data.banner.find((item) => item.slug === slug);

  if (!bannerInfo) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        بنر پیدا نشد
      </div>
    );
  }

  return (
    <div className="w-full  bg-gray-50">
      <NavbarHeaderMobile />
      <NavBarPc />
      <NavBarBottomPc />
      <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden mt-2">
        <img
          src={bannerInfo.src}
          alt={bannerInfo.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 -mt-16 relative">
          <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
            {bannerInfo.title}
          </h1>

          <p className="text-gray-600 leading-7">{bannerInfo.desc}</p>

          <span className="inline-block mt-5 px-4 py-1 text-xs bg-gray-100 rounded-full">
            {bannerInfo.type}
          </span>
        </div>
      </div>
      <span
        dir="rtl"
        className="inline-block mt-6 px-4 py-3 text-xs md:text-sm leading-6 bg-yellow-50 text-yellow-700 rounded-xl border border-yellow-200"
      >
        این صفحه با استفاده از React و ساختار کاملاً داینامیک پیاده‌سازی شده
        است. داده‌ها به‌صورت نمونه (Mock Data) و محدود استفاده شده‌اند و هدف
        اصلی این بخش، نمایش توانایی در طراحی معماری کامپوننت‌ها، مسیریابی
        داینامیک و مدیریت داده‌ها در سطح فرانت‌اند بوده است. ساختار پروژه
        به‌گونه‌ای طراحی شده که در آینده به‌راحتی قابلیت اتصال به API واقعی و
        توسعه در مقیاس بزرگ را دارد.
      </span>
    </div>
  );
}

export default BannerPageHeader;
