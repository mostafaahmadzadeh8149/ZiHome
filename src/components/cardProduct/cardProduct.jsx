function CardProduct(props) {
  return (
    <div
      className="
                group
                bg-white
                lg:border-l
                lg:border-b
                lg:border-gray-200
                rounded-2xl
                lg:rounded-none
                p-3
                hover:z-10
                hover:shadow-xl
                hover:scale-[1.02]
                transition-all
                duration-300
              "
    >
      <div className="flex lg:block gap-4">
        <div
          className="
                    w-[120px]
                    h-[120px]
                    lg:w-full
                    lg:h-[220px]
                    flex-shrink-0
                  "
        >
          <img
            src={props.src}
            alt={props.title}
            className="
                      w-full
                      h-full
                      object-contain
                    "
          />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2
              className="
                        text-[13px]
                        md:text-[14px]
                        text-gray-800
                        leading-6
                        line-clamp-2
                      "
            >
              {props.title}
            </h2>

            <div className="flex items-center gap-1 mt-2">
              <span className="text-yellow-500 text-xs">★</span>

              <span className="text-xs text-gray-500">
                {props.rating || "4.5"}
              </span>
            </div>
          </div>

          <div className="mt-4">
            <p
              className="
                        text-[16px]
                        lg:text-[18px]
                        font-bold
                        text-gray-900
                      "
            >
              {props.price?.toLocaleString()}
            </p>

            <span className="text-[11px] text-gray-500">تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardProduct;
