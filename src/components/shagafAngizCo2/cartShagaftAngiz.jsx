import TimerTakhfif from "../products&productCart/timerTakhfif";
import ThreeStar from "@/assets/icons/3star.svg?react";
import { Link } from "react-router-dom";

function CartShagaftAngiz({ initialTime, linkall }) {
  return (
    <div className="relative w-[160px] h-[270px] flex-shrink-0 md:w-fit">
      <img
        src="/images/productsCart&slider/sugest.svg"
        alt=""
        className="w-full h-full pointer-events-none"
      />

      <div
        className="
          absolute
          md:bottom-[67%]
          bottom-[62%]
          left-1/2
          -translate-x-1/2
          flex
          flex-col
          items-center
          text-white
          text-center
          pointer-events-none
        "
      >
        <ThreeStar className="my-[-20px] ml-[104px] w-[26px] h-[26px] md:w-[32px] md:h-[32px] md:ml-[130px]" />

        <p dir="rtl" className="text-[18px] md:text-[22px] leading-tight">
          پیشنهاد <br />
          شگفت انگیز
        </p>
      </div>

      <div
        className="
          absolute
          bottom-[42%]
          md:bottom-[37%]
          left-2/5
          md:left-2/5
          -translate-x-1/2
          flex
          items-center
          gap-1
          text-white
          text-sm
          z-[60]
        "
      >
        <Link
          to={linkall}
          className="relative z-[60] text-white text-[11px] md:text-sm font-bold px-4 py-1.5 md:px-6 md:py-2 rounded-lg flex items-center gap-1 whitespace-nowrap cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-3 h-3 pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          مشاهده همه
        </Link>
      </div>

      {/* تایمر */}
      <div
        className="
          absolute
          md:bottom-[1%]
          bottom-[13%]
          left-1/2
          -translate-x-1/2
          w-[155px]
          md:w-[210px]
          p-3
          md:top-[50%]
          flex items-center justify-center
        "
      >
        <img
          src="/images/productsCart&slider/timerSygest.svg"
          alt=""
          className="w-full h-full pointer-events-none"
        />

        <TimerTakhfif
          initialTime={initialTime}
          containerClass="
            absolute
            inset-0
            flex
            items-center
            justify-center
            gap-1
            mt-6
            pointer-events-none
          "
          boxClass="
            w-[28px]
            h-[28px]
            md:w-[36px]
            md:h-[36px]
            bg-[#F0F1F1]
            text-black
            rounded-md
            flex
            items-center
            justify-center
            text-[13px]
            md:text-[15px]
          "
          colonClass="text-black text-[13px] md:text-[15px]"
        />

        <img
          src="/images/productsCart&slider/timerClock.svg"
          className="
            absolute
            top-4
            right-4
            md:right-7
            w-[24px]
            h-[24px]
            md:w-[32px]
            md:h-[32px]
            pointer-events-none
          "
          alt=""
        />
      </div>
    </div>
  );
}

export default CartShagaftAngiz;
``;
