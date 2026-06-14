import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ThreeStar from "@/assets/icons/3star.svg?react";
import HamBurgerMenu from "@/assets/icons/hamburger.svg?react";
import Terend from "@/assets/icons/terend.svg?react";
import Cup from "@/assets/icons/cup.svg?react";
import Heart from "@/assets/icons/heart.svg?react";
import ButtonNavBarPc from "./buttonNavBarPc";

function NavBarBottomPc() {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/Category").then((res) => {
      setCategories(res.data || []);
    });
  }, []);

  return (
    <div className="relative">
      <div className="hidden md:flex md:mx-[25px] md:items-center md:justify-end md:gap-4 py-2">
        <ButtonNavBarPc to={"/FAQ"} label="سوالات شما" icon={""} />

        <hr className="border border-gray-300 h-5" />

        <ButtonNavBarPc
          to={"/allProducts/isPopular"}
          icon={Heart}
          label="محبوب ترین ها"
        />

        <ButtonNavBarPc
          to={"/allProducts/isBestSeller"}
          icon={Cup}
          label="پرفروش ترین ها"
        />

        <ButtonNavBarPc
          to={"/allProducts/terend"}
          icon={Terend}
          label="ترند ترین ها"
        />

        <ButtonNavBarPc
          to={"/allProducts/isAmazing"}
          icon={ThreeStar}
          label="شگفت انگیز"
        />

        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <ButtonNavBarPc
            to={""}
            icon={HamBurgerMenu}
            label="دسته بندی کالا ها"
          />

          <div
            className={`
              absolute right-0 top-full mt-3
              w-[420px] max-h-[420px] overflow-y-auto
              bg-white shadow-2xl rounded-2xl
              border border-gray-100
              z-50

              transition-all duration-300 ease-out origin-top

              ${
                open
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }
            `}
          >
            <div className="sticky top-0 bg-white border-b px-4 py-3">
              <p className="text-sm font-semibold text-gray-700">
                دسته‌بندی‌ها
              </p>
            </div>

            <div className="p-2 space-y-1">
              {categories.map((item) => {
                const isComingSoon = !item.title;

                if (isComingSoon) {
                  return (
                    <div
                      key={item.src}
                      className="px-3 py-2 text-sm text-gray-400 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                      به زودی
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.title}
                    to={`/allProducts/${item.title}`}
                    className="block"
                  >
                    <div
                      className="
          flex items-center gap-3
          px-3 py-2
          rounded-xl

          hover:bg-gray-50
          transition-all duration-200
          active:scale-[0.98]
        "
                    >
                      <div className="w-9 h-9 flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
                        <img
                          src={item.src}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-700 truncate">
                          {item.text}
                        </p>
                      </div>

                      <span className="text-gray-300">›</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBarBottomPc;
