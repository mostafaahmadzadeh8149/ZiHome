import { Link } from "react-router-dom";

function SimpleCartProduct({
  collection,
  discount,
  price,
  id,
  src,
  title,
  desc,
}) {
  const discountt = Number(discount) || 0;
  const hasDiscount = discount > 0;

  const realPrice = hasDiscount ? price - (price * discountt) / 100 : price;

  return (
    <Link to={`/productDetails/${collection}/${id}`}>
      <div className="bg-white w-full h-[210px] md:h-[270px] p-3 flex flex-col rounded-xl shadow-md hover:shadow-lg transition border border-gray-100">
        <div className="w-full h-[120px] md:h-[150px] overflow-hidden rounded-lg">
          <img
            src={src}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <h4 className="text-[13px] md:text-[15px] mt-2 line-clamp-1 font-medium">
            {title}
          </h4>

          <p className="text-[11px] md:text-[13px] text-gray-500 mt-1 line-clamp-1">
            {desc}
          </p>
        </div>

        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <span
              className={`text-[12px] md:text-[14px] ${
                hasDiscount ? "line-through text-gray-400" : "text-gray-800"
              }`}
            >
              {price.toLocaleString()} تومان
            </span>

            {hasDiscount && (
              <span className="text-[10px] md:text-[12px] text-white bg-red-500 px-2 rounded-full">
                {discount}%
              </span>
            )}
          </div>

          {hasDiscount && (
            <div className="text-[13px] md:text-[15px] font-semibold text-gray-900">
              {realPrice.toLocaleString()} تومان
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default SimpleCartProduct;
