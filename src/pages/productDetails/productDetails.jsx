import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../../dataBase/db.json";

import HeaderForProductDetails from "../../components/headerForProductDetails/headerForProductDetails";
import NavBarPc from "../../components/navBarPc/navBarPc";
import NavBarBottomPc from "../../components/navBarPc/navBarBottomPc";

import {
  FiHeart,
  FiShoppingCart,
  FiTruck,
  FiShield,
  FiStar,
  FiPercent,
  FiChevronLeft,
  FiCheckCircle,
  FiXCircle,
  FiInfo,
  FiBox,
  FiRefreshCcw,
  FiAward,
} from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
// =================================================>
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import NavBarMobile from "../../components/navBarMobile/navBarMobile";

function ProductDetails() {
  const { addHandler } = useContext(CartContext);
  const { category, id } = useParams();

  const product = useMemo(
    () => data?.[category]?.find((item) => item.id === Number(id)),
    [category, id],
  );

  const [liked, setLiked] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    setActiveImg(0);
    setLiked(false);
  }, [id]);

  if (!product) {
    return (
      <div
        dir="rtl"
        className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 text-center"
      >
        <div className="rounded-3xl bg-white px-8 py-10 shadow-sm ring-1 ring-zinc-200">
          <p className="text-2xl font-black text-zinc-900">محصول یافت نشد</p>
        </div>
      </div>
    );
  }

  const images =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images
      : [product.src];
  const safePrice = Number(product.price) || 0;
  const safeDiscount = Number(product.discount) || 0;
  const safeStock = Number(product.stock) || 0;
  const safeRating = Number(product.rating) || 0;
  const finalPrice =
    safeDiscount > 0 ? safePrice - (safePrice * safeDiscount) / 100 : safePrice;
  const savingAmount = safePrice - finalPrice;

  const productBadges = [
    product.isAmazing && {
      label: "پیشنهاد ویژه",
      className: "bg-rose-50 text-rose-700 ring-rose-200",
    },
    product.isBestSeller && {
      label: "پرفروش",
      className: "bg-amber-50 text-amber-700 ring-amber-200",
    },
    product.isPopular && {
      label: "محبوب",
      className: "bg-sky-50 text-sky-700 ring-sky-200",
    },
  ].filter(Boolean);

  const stockInfo =
    safeStock > 10
      ? {
          label: "موجود در انبار",
          textClass: "text-emerald-700",
          chipClass: "bg-emerald-50 text-emerald-700 ring-emerald-200",
          icon: <FiCheckCircle />,
          progress: 88,
        }
      : safeStock > 0
        ? {
            label: "موجودی محدود",
            textClass: "text-amber-700",
            chipClass: "bg-amber-50 text-amber-700 ring-amber-200",
            icon: <FiCheckCircle />,
            progress: 42,
          }
        : {
            label: "ناموجود",
            textClass: "text-rose-700",
            chipClass: "bg-rose-50 text-rose-700 ring-rose-200",
            icon: <FiXCircle />,
            progress: 100,
          };

  const specs = [
    { key: "نوع محصول", value: product.type || "—" },
    { key: "رنگ", value: product.color || "—" },
    { key: "سبک طراحی", value: product.style || "—" },
    { key: "دسته‌بندی", value: product.category || "—" },
    { key: "موجودی", value: safeStock > 0 ? `${safeStock} عدد` : "ناموجود" },
    { key: "امتیاز", value: `${safeRating} از 5` },
  ];

  const features = [
    { icon: <FiTruck />, title: "ارسال سریع", desc: "تحویل ۱ تا ۳ روز" },
    { icon: <FiShield />, title: "ضمانت اصالت", desc: "تضمین کیفیت" },
    { icon: <FiRefreshCcw />, title: "بازگشت کالا", desc: "۷ روز مهلت" },
    { icon: <FiAward />, title: "تضمین قیمت", desc: "خرید به‌صرفه" },
  ];

  return (
    <div className="min-h-screen bg-[#f7f7f6] text-zinc-900 font-sans">
      <HeaderForProductDetails />
      <NavBarPc />
      <NavBarBottomPc />
      <NavBarMobile />
      <hr />
      <main className="mx-auto  px-4 pb-24 pt-6 sm:px-6 lg:px-8" dir="rtl">
        <nav className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-zinc-400">
          <span>خانه</span>
          <FiChevronLeft className="text-[10px]" />
          <span>{product.category}</span>
          <FiChevronLeft className="text-[10px]" />
          <span className="font-medium text-zinc-900">{product.title}</span>
        </nav>

        <section className="overflow-hidden rounded-[32px] border border-zinc-200/70 bg-white shadow-xl">
          <div className="grid lg:grid-cols-12 items-start">
          
            <aside className="lg:col-span-5 p-4 sm:p-6 lg:border-l lg:border-zinc-100">
              <div className="relative overflow-hidden rounded-[30px] bg-[#fafaf9] ring-1 ring-zinc-200/70">
                <img
                  src={images[activeImg]}
                  alt={product.title}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <button
                  onClick={() => setLiked(!liked)}
                  className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 backdrop-blur-md shadow-lg"
                >
                  {liked ? (
                    <AiFillHeart className="text-2xl text-rose-500" />
                  ) : (
                    <FiHeart className="text-xl" />
                  )}
                </button>

                <div className="absolute right-5 top-5 flex flex-col items-end gap-2">
                  {safeDiscount > 0 && (
                    <span className="rounded-2xl bg-zinc-950 px-4 py-2 text-xs font-black text-white">
                      %{safeDiscount} تخفیف
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-4 flex gap-3 overflow-x-auto">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImg(index)}
                    className={`h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-2 transition-all ${index === activeImg ? "ring-zinc-950" : "ring-transparent opacity-60"}`}
                  >
                    <img
                      src={img}
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  </button>
                ))}
              </div>
            </aside>
            <div className="lg:col-span-7 p-5 sm:p-7 lg:p-9">
              <header>
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-zinc-100 px-4 py-1.5 text-xs font-bold text-zinc-600">
                    {product.category}
                  </span>
                  {productBadges.map((badge) => (
                    <span
                      key={badge.label}
                      className={`rounded-full px-4 py-1.5 text-xs font-bold ring-1 ${badge.className}`}
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>

                <h1 className="text-3xl font-black leading-tight text-zinc-950 sm:text-4xl lg:text-5xl">
                  {product.title}
                </h1>

                <div className="mt-6 flex items-center gap-6">
                  <div className="flex items-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`text-lg ${i < Math.floor(safeRating) ? "fill-zinc-900 text-zinc-900" : "text-zinc-200"}`}
                      />
                    ))}
                    <span className="mr-1 font-bold">{safeRating}</span>
                  </div>
                  <span className={`text-sm font-bold ${stockInfo.textClass}`}>
                    {stockInfo.label}
                  </span>
                </div>
              </header>

              <section className="mt-8">
                <h2 className="mb-3 text-lg font-black flex items-center gap-2">
                  <FiInfo /> درباره محصول
                </h2>
                <p className="text-[15px] leading-8 text-zinc-600 text-justify">
                  {product.desc}
                </p>
              </section>

              <section className="mt-10">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {specs.map((item) => (
                    <div
                      key={item.key}
                      className="flex items-center justify-between rounded-2xl bg-zinc-50 px-4 py-4 ring-1 ring-zinc-200/60"
                    >
                      <dt className="text-xs text-zinc-500">{item.key}</dt>
                      <dd className="text-sm font-black text-zinc-900">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-10">
                <div className="rounded-[28px] bg-zinc-950 p-6 sm:p-8 text-white relative overflow-hidden shadow-2xl">
                  <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
                    <div>
                      <p className="text-zinc-400 text-xs mb-2">قیمت نهایی</p>
                      <div className="flex items-end gap-2">
                        <span className="text-4xl sm:text-5xl font-black">
                          {finalPrice.toLocaleString()}
                        </span>
                        <span className="text-sm text-zinc-400 mb-1">
                          تومان
                        </span>
                      </div>
                      {safeDiscount > 0 && (
                        <p className="mt-2 text-zinc-500 line-through text-sm">
                          {safePrice.toLocaleString()} تومان
                        </p>
                      )}
                    </div>

                    {/* <button
                      disabled={safeStock === 0}
                      className="w-full lg:w-auto h-16 px-10 bg-white text-zinc-950 rounded-2xl font-black flex items-center justify-center gap-3 transition hover:bg-zinc-100 disabled:bg-zinc-800"
                    >
                      <FiShoppingCart className="text-xl" />
                      {safeStock > 0 ? "افزودن به سبد" : "ناموجود"}
                    </button> */}
                    <button
                      disabled={safeStock === 0}
                      className="w-full lg:w-auto h-16 px-10 bg-[#DC2655] text-white rounded-2xl font-black flex items-center justify-center gap-3 shadow-[0_12px_30px_-8px_rgba(220,38,85,0.55)] transition-all duration-300 hover:bg-[#c81f4b] hover:shadow-[0_16px_36px_-10px_rgba(220,38,85,0.65)] active:scale-[0.98] disabled:bg-zinc-700 disabled:text-zinc-400 disabled:shadow-none"
                      onClick={() => addHandler(product)}
                    >
                      <FiShoppingCart className="text-xl" />
                      {safeStock > 0 ? "افزودن به سبد" : "ناموجود"}
                    </button>
                  </div>
                </div>
              </section>

              <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center p-4 rounded-2xl bg-zinc-50 text-center border border-zinc-100"
                  >
                    <div className="mb-2 text-zinc-900 text-xl">{f.icon}</div>
                    <span className="text-xs font-black">{f.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProductDetails;
