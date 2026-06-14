import { Link } from "react-router-dom";
import ArowAll from "@/assets/icons/arrowAll.svg?react";

function SectionTitle({ addresses, text }) {
  return (
    <div className=" flex items-center  justify-between ">
      <div className=" flex items-center justify-center">
        <Link
          className=" flex items-center justify-center gap-1 text-[14px]"
          to={addresses}
        >
          <ArowAll className=" translate-y-[2px] w-7 h-7" />
          مشاهده همه
        </Link>
      </div>
      <div>
        <h6 className="md:text-xl font-bold">{text}</h6>
      </div>
    </div>
  );
}
export default SectionTitle;
