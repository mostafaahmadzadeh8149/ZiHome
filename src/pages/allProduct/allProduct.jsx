import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CardProduct from "../../components/cardProduct/cardProduct";
import NavbarHeaderMobile from "../../components/navBarMobile/navBarHeaderMobile";
import NavBarPc from "../../components/navBarPc/navBarPc";
import NavBarBottomPc from "../../components/navBarPc/navBarBottomPc";
import ReactPaginatePkg from "react-paginate";

const ReactPaginate = ReactPaginatePkg.default;

function AllProuduct() {
  const { type } = useParams();

  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);

  const itemsPerPage = 20;

  const collections = [
    "light",
    "golodon",
    "moble",
    "sandali",
    "sideboard",
    "tablo",
  ];

  const titles = {
    isAmazing: "شگفت انگیز",
    isBestSeller: "پرفروش ترین",
    isPopular: "محبوب ترین",
    light: "لوستر",
    golodon: "گلدون",
    moble: "مبل",
    sandali: "صندلی",
    sideboard: "سایدبورد",
    tablo: "تابلو",
  };

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:10000/light"),
      axios.get("http://localhost:10000/golodon"),
      axios.get("http://localhost:10000/moble"),
      axios.get("http://localhost:10000/sandali"),
      axios.get("http://localhost:10000/sideboard"),
      axios.get("http://localhost:10000/tablo"),
    ])
      .then((res) => {
        const allProducts = res.flatMap((response, index) =>
          response.data.map((item) => ({
            ...item,
            collection: collections[index],
          })),
        );

        let filtered = [];

        if (collections.includes(type)) {
          filtered = allProducts.filter((item) => item.collection === type);
        } else {
          filtered = allProducts.filter((item) => item[type]);
        }

        const shuffled = [...filtered].sort(() => Math.random() - 0.5);

        setAllData(shuffled);
        setData(shuffled.slice(0, itemsPerPage));
      })
      .catch((err) => {
        console.error("خطا در دریافت محصولات:", err);
        setAllData([]);
        setData([]);
      });
  }, [type]);

  const handlerPageChange = (event) => {
    const pageNumber = event.selected + 1;
    const start = (pageNumber - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    setData(allData.slice(start, end));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <NavbarHeaderMobile />
      <NavBarPc />
      <NavBarBottomPc />

      {data.length > 0 ? (
        <div>
          <h1 dir="rtl" className="md:mx-[25px] md:px-0 px-6 mt-10 text-2xl">
            محصولات :
            <span className="text-[#DC2655] mr-2">
              {titles[type] || "همه محصولات"}
            </span>
          </h1>

          <div
            dir="rtl"
            className="
              grid
              grid-cols-1
              lg:grid-cols-3
              xl:grid-cols-4
              gap-4
              lg:gap-0
              bg-white
              lg:border
              lg:border-gray-200
              lg:rounded-xl
              overflow-hidden
              md:mx-[25px]
              md:px-0
              px-6
              mt-10
            "
          >
            {data.map((item) => (
              <Link
                key={`${item.collection}-${item.id}`}
                to={`/productDetails/${item.collection}/${item.id}`}
              >
                <CardProduct {...item} />
              </Link>
            ))}
          </div>

          <ReactPaginate
            pageCount={Math.ceil(allData.length / itemsPerPage)}
            previousLabel="قبلی"
            nextLabel="بعدی"
            containerClassName="flex justify-center items-center gap-2 py-8"
            pageClassName="overflow-hidden"
            previousClassName="text-[#DC2655] overflow-hidden px-2 py-1"
            nextClassName="text-[#DC2655] overflow-hidden px-2 py-1"
            pageLinkClassName="px-3 py-2 flex justify-center items-center"
            nextLinkClassName="px-3 py-2 flex justify-center items-center"
            previousLinkClassName="px-3 py-2 flex justify-center items-center"
            activeClassName="bg-[#DC2655] text-white rounded-full"
            onPageChange={handlerPageChange}
          />
        </div>
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold">به زودی...</h1>
          <p className="text-gray-500 mt-4">این بخش در حال توسعه است</p>
        </div>
      )}
    </div>
  );
}

export default AllProuduct;
