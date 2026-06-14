import { Link, useParams } from "react-router-dom";
import data from "../../../dataBase/db.json";
import ReactPaginatePkg from "react-paginate";
import NavbarHeaderMobile from "../../components/navBarMobile/navBarHeaderMobile";
import NavBarPc from "../../components/navBarPc/navBarPc";
import NavBarBottomPc from "../../components/navBarPc/navBarBottomPc";
import { useEffect, useState } from "react";
import CardProduct from "../../components/cardProduct/cardProduct";

const ReactPaginate = ReactPaginatePkg.default;

function CategoryProduct() {
  const { categoryName } = useParams();

  const [datas, setDatas] = useState([]);

  const itemsPerPage = 20;

  const newData =
    (data[categoryName] || []).map((item) => ({
      ...item,
      collection: categoryName,
    })) || [];

  useEffect(() => {
    fetchDatas(1);
  }, [categoryName]);

  const fetchDatas = (pageNumber) => {
    const start = (pageNumber - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    setDatas(newData.slice(start, end));
  };

  const handlerPageChange = (event) => {
    fetchDatas(event.selected + 1);
  };
  const titles = {
    light: "لوستر",
    golodon: "گلدون",
    moble: "مبل",
    sandali: "صندلی",
    sideboard: "سایدبورد",
    tablo: "تابلو",
  };
  return (
    <div>
      <NavbarHeaderMobile />
      <NavBarPc />
      <NavBarBottomPc />

      {datas.length > 0 ? (
        <div className="md:mx-[25px] md:px-0 px-6 mt-10">
          <h1 dir="rtl" className="pb-10 text-2xl">
            دسته بندی :{" "}
            <span className="text-[#DC2655] mr-2">{titles[categoryName]}</span>
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
        "
          >
            {datas.map((item) => (
              <Link
                key={item.id}
                to={`/productDetails/${item.collection}/${item.id}`}
              >
                <CardProduct {...item} />
              </Link>
            ))}
          </div>

          <ReactPaginate
            pageCount={Math.ceil(newData.length / itemsPerPage)}
            previousLabel="قبلی"
            nextLabel="بعدی"
            containerClassName="flex justify-center items-center gap-2 py-5"
            pageClassName="overflow-hidden"
            previousClassName="text-[#DC2655] overflow-hidden px-2 py-1"
            nextClassName="text-[#DC2655] overflow-hidden px-2 py-1"
            pageLinkClassName="px-2 py-1 flex justify-center items-center"
            nextLinkClassName="px-2 py-1 justify-center items-center"
            previousLinkClassName="px-2 py-1 justify-center items-center"
            activeClassName="bg-[#DC2655] text-[#eee] border border-[#DC2655] rounded-full"
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

export default CategoryProduct;
