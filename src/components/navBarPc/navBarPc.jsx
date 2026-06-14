import LogoIcon from "@/assets/icons/logo.svg?react";
import ProfileIcon from "@/assets/icons/profile.svg?react";
import ShoppingCart from "@/assets/icons/shoppingCart.svg?react";
import { Link } from "react-router-dom";
import SearchIcon from "@/assets/icons/search.svg?react";
import { useEffect, useRef, useState } from "react";
import SearchPanel from "./searchPanel";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

function NavBarPc() {
  const { totalItems, shoppingCart } = useContext(CartContext);
  const [input, setInput] = useState("");
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const inputRef = useRef(null);
  const inputHandler = (e) => {
    inputRef.current?.focus();
    setInput(e.target.value);
  };
  const searchResult = input.trim()
    ? datas
        .filter((item) => {
          const searchText = input.toLowerCase();
          return (
            item?.title?.toLowerCase().includes(searchText) ||
            item?.desc?.toLowerCase().includes(searchText) ||
            item?.tags?.some((tag) => tag.toLowerCase().includes(searchText))
          );
        })
        .slice(0, 10)
    : [];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responses = await Promise.all([
          axios.get("http://localhost:10000/light"),
          axios.get("http://localhost:10000/golodon"),
          axios.get("http://localhost:10000/moble"),
          axios.get("http://localhost:10000/sandali"),
          axios.get("http://localhost:10000/sideboard"),
          axios.get("http://localhost:10000/tablo"),
        ]);

        const allProducts = responses.flatMap((res) => res.data);

        setDatas(allProducts);
      } catch (error) {
        console.error("خطا در دریافت محصولات:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="relative ">
      <div className="hidden md:flex items-center justify-between mt-2 mx-[25px] ">
        <div className="flex items-center gap-3">
          {shoppingCart.length > 0 && (
            <span className=" absolute bg-[#DC2655] text-white rounded-[100%] py-[2px] px-[4px] text-center  text-[12px] left-[50px] bottom-[55px] md:text-[15px]">
              {totalItems}
            </span>
          )}
          <Link
            to="/shoppingCart"
            className="
            group p-2 rounded-lg
            transition-all duration-300
            hover:bg-gray-100
            "
          >
            <ShoppingCart
              width={28}
              height={28}
              className="
              text-[#3E4344]
              transition-all duration-300
              group-hover:text-black
              group-hover:scale-110
              "
            />
          </Link>

          <div className="w-px h-[40px] bg-gray-300 " />

          <Link
            to="/profile"
            className="
            group flex items-center gap-1
            border border-gray-400
            px-3 py-1
            rounded-lg
            text-[#3E4344]
            transition-all duration-300
            hover:bg-gray-100
            hover:border-gray-500
            "
          >
            ثبت نام | ورود
            <ProfileIcon
              width={28}
              height={28}
              className="
              text-[#3E4344]
              transition-all duration-300
              group-hover:text-black
              group-hover:scale-110
              "
            />
          </Link>
        </div>

        <div className="flex items-center gap-5 relative ">
          <div className="relative">
            <SearchIcon
              width={22}
              height={22}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="جستجو"
              className="
              border border-gray-300
              rounded-xl
              h-[40px] w-[630px]
              pr-10 pl-3
              outline-none
              text-right
              placeholder:text-gray-400
              transition-all
              focus:border-gray-500
            
            
              "
              value={input}
              onChange={inputHandler}
              ref={inputRef}
            />
            {input && (
              <SearchPanel
                input={input}
                loading={loading}
                searchResult={searchResult}
              />
            )}
          </div>

          <Link to="/">
            <LogoIcon width={110} height={110} />
          </Link>
        </div>
      </div>

      <hr className="border-gray-300 absolute w-full bottom-3 hidden md:block" />
    </div>
  );
}

export default NavBarPc;
