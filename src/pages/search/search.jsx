import ArrowLeft from "@/assets/icons/arrowleft.svg?react";
import SearchIcon from "@/assets/icons/search.svg?react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function Search() {
  const [input, setInput] = useState("");
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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

  const searchResults = input.trim()
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

  return (
    <>
      <div className="px-6 mt-2 flex items-center justify-between md:hidden">
        <div className="relative flex items-center">
          <SearchIcon
            className="absolute right-3 text-gray-500 pointer-events-none"
            width={22}
            height={22}
          />

          <input
            type="text"
            className="
              w-[285px] h-[35px]
              border border-gray-400 rounded-2xl
              pr-10 pl-3 outline-none text-right placeholder:text-gray-500
              text-gray-500
            "
            placeholder="جستجو در همه کالاها"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            ref={inputRef}
          />
        </div>

        <Link to="/">
          <ArrowLeft width={35} height={35} className="text-black" />
        </Link>
      </div>

      <div className="p-4 md:hidden">
        {input.trim() && (
          <h2 className="text-right mb-4 font-semibold text-lg">نتایج جستجو</h2>
        )}

        {loading && (
          <p className="text-center text-gray-500">در حال بارگذاری...</p>
        )}

        {!loading && input.trim() && searchResults.length === 0 && (
          <p className="text-center text-gray-500 mt-8">محصولی یافت نشد</p>
        )}

        <div className="flex flex-col gap-3">
          {searchResults.map((item) => (
            <Link
              key={`${item.category || "product"}-${item.id}`}
              to={`/productDetails/${item.category}/${item.id}`}
            >
              <div className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-xl shadow-sm">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />

                <div className="flex-1 text-right">
                  <h3 className="font-medium text-sm">{item.title}</h3>

                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {item.desc}
                  </p>

                  <p className="font-semibold mt-2">
                    {item.price ? item.price.toLocaleString() : 0} تومان
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;
