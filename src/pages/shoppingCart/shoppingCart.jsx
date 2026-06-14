import NavBarMobile from "../../components/navBarMobile/navBarMobile";
import HeaderForProductDetails from "./../../components/headerForProductDetails/headerForProductDetails";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import NavBarPc from "../../components/navBarPc/navBarPc";

function ShoppingCart() {
  const { shoppingCart, increase, decrease } = useContext(CartContext);

  const totalItems = shoppingCart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const originalTotal = shoppingCart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const finalTotal = shoppingCart.reduce((acc, item) => {
    const price =
      item.discount > 0
        ? item.price - (item.price * item.discount) / 100
        : item.price;

    return acc + price * item.quantity;
  }, 0);

  const discountTotal = originalTotal - finalTotal;

  return (
    <div className="min-h-screen bg-[#f6f6f5] pb-11">
      <NavBarMobile />
      <HeaderForProductDetails />
      <NavBarPc />
      <hr className="md:hidden" />

      <div className="mx-auto max-w-6xl px-4 py-6 lg:py-10">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-black text-zinc-900">سبد خرید</h1>

          <span
            className="text-sm text-zinc-500 bg-white px-3 py-1 rounded-full border"
            dir="rtl"
          >
            {shoppingCart.length > 0
              ? `${totalItems} محصول`
              : "سبد خرید خالی است"}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {shoppingCart.map((items) => {
              const finalPrice =
                items.discount > 0
                  ? items.price - (items.price * items.discount) / 100
                  : items.price;

              const totalPrice = finalPrice * items.quantity;

              return (
                <div
                  key={items.id}
                  className="bg-white rounded-3xl border border-zinc-200 shadow-sm p-4 flex flex-col sm:flex-row gap-4 hover:shadow-md transition"
                >
                  <img
                    src={items.src}
                    className="w-full sm:w-28 h-48 sm:h-28 object-cover rounded-2xl"
                  />

                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <h2 className="font-black text-zinc-900 text-lg">
                        {items.title}
                      </h2>

                      <p className="text-sm text-zinc-500 mt-1">{items.desc}</p>

                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full">
                          {items.stock > 0 ? "موجود" : "ناموجود"}
                        </span>

                        <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">
                          {items.stock}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start sm:items-center justify-between mt-5 flex-col sm:flex-row gap-4">
                      <div className="flex flex-col">
                        <div className="font-black text-zinc-900 text-lg">
                          {finalPrice.toLocaleString()}
                          <span className="text-xs font-normal"> تومان</span>
                        </div>

                        <div className="text-sm text-zinc-500 mt-1">
                          مجموع: {totalPrice.toLocaleString()} تومان
                        </div>

                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-zinc-400 line-through">
                            {items.price.toLocaleString()}
                          </span>

                          {items.discount > 0 && (
                            <span className="text-xs bg-rose-50 text-rose-600 px-2 py-0.5 rounded-full">
                              {items.discount}%
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between w-full sm:w-auto bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-2 shadow-sm">
                        <button
                          className="w-9 h-9 text-lg rounded-xl hover:bg-zinc-200 transition"
                          onClick={() => decrease(items.id)}
                        >
                          -
                        </button>

                        <span className="w-8 text-center font-bold">
                          {items.quantity}
                        </span>

                        <button
                          className="w-9 h-9 text-lg rounded-xl hover:bg-zinc-200 transition"
                          onClick={() => increase(items.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {shoppingCart.length > 0 && (
            <div className="lg:col-span-1">
              <div className="bg-white border border-zinc-200 rounded-3xl p-5 shadow-sm sticky top-6">
                <h3 className="font-black text-zinc-900 mb-5">خلاصه سفارش</h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-zinc-600">
                    <span>جمع کالاها</span>
                    <span>{originalTotal.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between text-rose-600">
                    <span>تخفیف</span>
                    <span>-{discountTotal.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between text-zinc-600">
                    <span>ارسال</span>
                    <span>رایگان</span>
                  </div>

                  <div className="border-t pt-3 flex justify-between font-black text-zinc-900">
                    <span>قابل پرداخت</span>
                    <span>{finalTotal.toLocaleString()}</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-[#DC2655] text-white py-3 rounded-2xl font-bold shadow-lg hover:bg-[#c81f4b] transition">
                  ادامه خرید
                </button>

                <p className="text-xs text-zinc-400 text-center mt-3">
                  امکان ویرایش سبد تا قبل از پرداخت
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
