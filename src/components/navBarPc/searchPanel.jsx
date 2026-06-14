import { Link } from "react-router-dom";

function SearchPanel({ input, loading, searchResult }) {
  if (!input.trim()) return null;

  return (
    <div
      className="
        absolute top-full right-0 mt-2
        w-full
        bg-white
        border border-gray-200
        rounded-2xl
        shadow-xl
        z-50
        overflow-hidden
      "
    >
      <div className="max-h-[450px] overflow-y-auto">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-right font-semibold text-gray-800">
            نتایج جستجو
          </h2>
        </div>

        {loading && (
          <div className="py-8 text-center text-gray-500">
            در حال بارگذاری...
          </div>
        )}

        {!loading && searchResult.length === 0 && (
          <div className="py-8 text-center text-gray-500">محصولی یافت نشد</div>
        )}

        {!loading &&
          searchResult.map((item) => (
            <Link
              key={`${item.category || "product"}-${item.id}`}
              to={`/productDetails/${item.category}/${item.id}`}
              className="block"
            >
              <div
                className="
                  flex items-center gap-3
                  p-4
                  hover:bg-gray-50
                  transition-colors
                  border-b border-gray-100
                  last:border-b-0
                "
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="
                    w-20 h-20
                    rounded-xl
                    object-cover
                    border border-gray-100
                    flex-shrink-0
                  "
                />

                <div className="flex-1 text-right">
                  <h3 className="font-medium text-sm text-gray-800 line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {item.desc}
                  </p>

                  <p className="mt-3 font-bold text-sm text-gray-900">
                    {item.price?.toLocaleString()} تومان
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default SearchPanel;
