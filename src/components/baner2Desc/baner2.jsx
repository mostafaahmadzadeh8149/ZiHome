import { Link } from "react-router-dom";
import ArowAll from "@/assets/icons/arrowAll.svg?react";

function Baner2({ linkright, linkLeft }) {
  return (
    <div className="flex items-center justify-between gap-3 h-[200px] md:min-h-[280px] xl:h-[346px]">
      <div className="flex-1 min-w-0 bg-[#676F71] rounded-xl overflow-hidden relative h-full w-full">
        <div className="flex flex-col gap-2 text-right absolute top-4 right-4 z-40 md:right-[220px] xl:right-[360px] md:top-10">
          <p className="text-[15px] md:text-3xl md:font-bold">
            خرید اعتباری
            <span className="ml-1 bg-[#DC2655] text-white rounded-xl p-[1px]">
              %
            </span>
          </p>

          <p className="text-[11px] leading-4 md:text-[18px] md:leading-6">
            سرویس های قابلمه متنوع <br />
            زی هوم حال خوب اشپزخانه
          </p>

          <Link
            className="flex items-center gap-1 text-[10px] bg-[#DC2655] text-white rounded-lg px-3 py-1 md:text-[18px] w-fit"
            to={linkright}
          >
            <ArowAll className="w-4 h-4 md:w-7 md:h-7" />
            مشاهده همه
          </Link>
        </div>

        <img
          src="/images/bannersCart/zarf.png"
          className="
            absolute z-30
            w-[70px] h-[55px]
            md:w-[150px] md:h-[150px]
            xl:w-[190px] xl:h-[190px]
            top-[110px] right-[25px]
            md:top-[40px] md:right-[100px]
            xl:top-[28px] xl:right-[140px]
          "
          alt="ظروف آشپزخانه"
        />

        <img
          src="/images/bannersCart/kitchenleft.png"
          className="absolute bottom-0 right-0 left-0 w-full z-20"
          alt="کابینت آشپزخانه"
        />
      </div>

      <div className="flex-1 min-w-0 bg-[#676F71] rounded-xl overflow-hidden relative h-full w-full">
        <div className="flex flex-col gap-2 text-right absolute top-4 left-4 z-40 md:left-10 md:top-10">
          <p className="text-[15px] md:text-3xl md:font-bold">
            خرید اعتباری
            <span className="ml-1 bg-[#DC2655] text-white rounded-xl p-[1px]">
              %
            </span>
          </p>

          <p className="text-[11px] leading-4 md:text-[18px] md:leading-6">
            سرویس های قابلمه متنوع <br />
            زی هوم حال خوب اشپزخانه
          </p>

          <Link
            className="flex items-center gap-1 text-[10px] bg-[#DC2655] text-white rounded-lg px-3 py-1 md:text-[18px] w-fit"
            to={linkLeft}
          >
            <ArowAll className="w-4 h-4 md:w-7 md:h-7" />
            مشاهده همه
          </Link>
        </div>

        <img
          src="/images/bannersCart/coffe.png"
          className="
            absolute z-30
            w-[70px] h-[55px]
            md:w-[150px] md:h-[150px]
            xl:w-[190px] xl:h-[190px]
            top-[110px] right-[22px]
            md:top-[45px] md:right-[25px]
            xl:top-[32px] xl:right-[60px]
          "
          alt="دستگاه قهوه ساز"
        />

        <img
          src="/images/bannersCart/kitchenRight.png"
          className="absolute bottom-0 right-0 left-0 w-full z-20"
          alt="کابینت آشپزخانه"
        />
      </div>
    </div>
  );
}

export default Baner2;
