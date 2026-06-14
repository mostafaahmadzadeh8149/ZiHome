import HomeIcon from "@/assets/icons/home.svg?react";
import CategotyIcon from "@/assets/icons/category.svg?react";
import ShoppingCartIcon from "@/assets/icons/shoppingCart.svg?react";
import ProfileIcon from "@/assets/icons/profile.svg?react";
import ButtonNavBarMobile from "./buttonNavBarMobile";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

function NavBarMobile() {
  const { totalItems, shoppingCart } = useContext(CartContext);

  return (
    <nav
      className="
        fixed bottom-0 left-0 right-0 z-50
        bg-white border-t border-gray-200
        flex items-center justify-between
        py-2 px-6 md:hidden
      "
    >
      <ButtonNavBarMobile to="/profile" label="پروفایل" icon={ProfileIcon} />

      <div className="relative flex flex-col items-center">
        <ButtonNavBarMobile
          to="/shoppingCart"
          label="سبد خرید"
          icon={ShoppingCartIcon}
        />

        {shoppingCart.length > 0 && (
          <span
            className="
              absolute -top-1 -right-2
              bg-[#DC2655] text-white
              rounded-full
              min-w-[18px] h-[18px]
              flex items-center justify-center
              text-[11px] font-bold
              px-1
            "
          >
            {totalItems}
          </span>
        )}
      </div>

      <ButtonNavBarMobile
        to="/category"
        label="دسته بندی"
        icon={CategotyIcon}
      />

      <ButtonNavBarMobile to="/" label="خانه" icon={HomeIcon} />
    </nav>
  );
}

export default NavBarMobile;
