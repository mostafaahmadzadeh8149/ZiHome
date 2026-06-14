import { Link } from "react-router-dom";

function Banar1({
  starText1,
  starText2,
  starText3,
  img,
  link,
  heading1,
  heading2,
}) {
  return (
    <div className="relative w-full h-[160px] md:h-[250px] bg-[#676F71] rounded-2xl overflow-hidden shadow-lg select-none">
      <div className="relative w-full h-[110px] md:h-[170px] flex items-center justify-between px-4 md:px-10 md:mt-9 md:z-30">
        <div className="relative flex items-center justify-center w-20 h-20 md:w-32 md:h-32">
          <img
            src="/images/bannersCart/new.png"
            className="w-full h-full object-contain z-30"
            alt="badge"
          />

          <img
            src="/images/bannersCart/circle.png"
            className="absolute w-[80%] h-[80%] animate-spin-slow z-30"
            alt="circle"
          />
          <img
            src="/images/bannersCart/Group (1).png"
            className="md:block hidden absolute left-[75%] z-20"
          />
          <p className="absolute text-white text-[9px] md:text-xs text-center font-bold leading-tight z-40">
            {starText1}
            <br />
            {starText2}
            <br /> {starText3}
          </p>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-90 md:opacity-100 mr-8">
          <img
            src="/images/bannersCart/Group.png"
            className="md:block hidden absolute left-[38%] z-20"
          />
          <img
            src={img}
            className="w-24 md:w-44 object-contain translate-y-2  z-30"
            alt="product"
          />
          <img
            src="/images/bannersCart/Group (1).png"
            className="md:block hidden absolute right-[41%] z-20"
          />
        </div>

        <div className="relative z-10 flex flex-col text-right max-w-[140px] md:max-w-none mr-1 w-full">
          <h3 className="w-full text-white text-[13px] md:text-xl font-black leading-tight">
            {heading1}
            <br className="md:hidden" />
            {heading2}
          </h3>

          <p className="w-full text-gray-200 text-[10px] md:text-sm mt-1">
            به سبک زی‌هوم تکمیل کن
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-[50px] md:h-[80px] bg-[#1F2122] flex items-center justify-end px-4 md:px-10">
        <Link
          to={link}
          className="bg-[#E91E63] text-white text-[11px] md:text-sm font-bold px-4 py-1.5 md:px-6 md:py-2 rounded-lg flex items-center gap-1 hover:scale-105 transition-transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-3 h-3"
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
    </div>
  );
}

export default Banar1;
