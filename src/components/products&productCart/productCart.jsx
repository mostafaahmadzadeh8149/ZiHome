import { Link } from "react-router-dom";

function ProductCart(props) {
  const realPrice = props.price - (props.price * props.discount) / 100;

  return (
    <Link to={`/productDetails/${props.collection}/${props.id}`}>
      <div
        className={`
        bg-white w-full h-[210px]  md:h-[270px] p-3 shadow-sm flex flex-col  

        ${props.index === 0 ? "rounded-tr-xl rounded-br-xl" : "rounded-none"}
      `}
      >
        <div className="w-full h-[120px] md:h-[150px] overflow-hidden flex-1 ">
          <img
            src={props.src}
            alt={props.title}
            className="w-full h-full object-cover"
          />
        </div>

        <h4 className="text-[13px] md:text-[15px] mt-2 line-clamp-1 font-medium">
          {props.title}
        </h4>

        <p className="text-[11px] md:text-[13px] text-gray-500 mt-1 line-clamp-1">
          {props.desc}
        </p>

        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <span
              className={`text-[11px] md:text-[13px] ${
                props.discount ? "line-through text-gray-400" : ""
              }`}
            >
              {props.price.toLocaleString()}
            </span>

            {props.discount && (
              <span className="text-[10px] md:text-[12px] text-white bg-red-500 px-2 rounded-full">
                {props.discount}%
              </span>
            )}
          </div>

          {props.discount && (
            <div className="text-[13px] md:text-[15px] font-semibold text-gray-800">
              {` ${realPrice.toLocaleString()} تومان`}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCart;
