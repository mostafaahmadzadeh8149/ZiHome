import SearchIcon from "@/assets/icons/search.svg?react";
import LogoIcon from "@/assets/icons/logo.svg?react";
import { Link } from "react-router-dom";

function NavbarHeaderMobile() {
  return (
    <div className="flex items-center justify-between mt-2 px-6 gap-4 md:hidden">
      <Link
        to="/search"
        className="w-full  border border-gray-400 rounded-2xl h-[35px] flex items-center justify-end cursor-pointer"
      >
        <div className="flex items-center justify-center">
          <span className="mr-1 text-[#676F71]">جستجو</span>
          <SearchIcon
            className=" mr-2 ml-1 text-[#676F71]"
            width={22}
            height={22}
          />
        </div>
      </Link>
      <div>
        <Link to={"/"}>
          <LogoIcon width={100} height={50} />
        </Link>
      </div>
    </div>
  );
}
export default NavbarHeaderMobile;
