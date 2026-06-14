import SearchIcon from "@/assets/icons/search.svg?react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@/assets/icons/shoppingCart.svg?react";
import DeletIcon from "@/assets/icons/delet.svg?react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

function HeaderForProductDetails() {
  const { totalItems, shoppingCart } = useContext(CartContext);

  return (
    <div className=" flex items-center justify-between px-4 py-3  md:hidden">
      <div className=" flex items-center justify-between gap-5">
        <Link to="/shoppingCart" className=" relative">
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
          <ShoppingCartIcon width={30} height={30} className="text-black" />
        </Link>
        <Link to="/search">
          <SearchIcon width={30} height={30} className="text-black" />
        </Link>
      </div>
      <div>
        <Link to="/">
          <DeletIcon width={40} height={40} className="text-black" />
        </Link>
      </div>
    </div>
  );
}
export default HeaderForProductDetails;
