import { Link } from "react-router-dom";
import ArrowAll from "@/assets/icons/arrowAll.svg?react";
import TimerTakhfif from "./timerTakhfif";
function ShagaftAngiz({ className, initialTime, link }) {
  return (
    <div
      className={`flex items-center justify-between gap-5  mt-4 w-full whitespace-nowrap p-4 md:flex-col ${className} `}
    >
      <div className=" flex items-center justify-center ">
        <Link
          to={link}
          className="flex items-center justify-center gap-1 text-white"
        >
          <ArrowAll className="w-6 h-6 text-white translate-y-[1px]" />
          <span className="text-[16px] font-bold">همه</span>
        </Link>
      </div>

      <TimerTakhfif
        initialTime={initialTime}
        containerClass="text-black"
        boxClass="bg-white"
        colonClass="text-white"
      />
      <div className="flex items-center justify-center gap-2 md:hidden ">
        <p className="text-white text-[18px]">شگفت‌انگیز</p>
        <img
          src="/images/productsCart&slider/sugest2.png"
          className="w-[25px]"
        />
      </div>
    </div>
  );
}

export default ShagaftAngiz;
