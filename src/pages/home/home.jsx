import NavBarMobile from "./../../components/navBarMobile/navBarMobile";
import Substract from "@/assets/icons/Subtract.svg?react";
import { Link } from "react-router-dom";
import Slider from "../../components/slidersBanner/sliderBanner";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBarPc from "../../components/navBarPc/navBarPc";
import NavBarBottomPc from "../../components/navBarPc/navBarBottomPc";

import Category from "./../../components/category/category";
import { useRef } from "react";
import Banar1 from "../../components/baner1Desc/baner1";
import ShagaftAngizCo from "../../components/shagafAngizComponents/shagaftAngizCo";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import Tab from "../../components/tab/tab";
import SimpleSlider from "../../components/slideSimple/sliderSimple";
import Baner2 from "../../components/baner2Desc/baner2";
import ShagafAngizCo2 from "../../components/shagafAngizCo2/shagafAngizCo2";
import Footer from "../../components/footer/footer";
import NavbarHeaderMobile from "../../components/navBarMobile/navBarHeaderMobile";
function Home() {
  const [banner, setBanner] = useState([]);
  const [shagafAngiz, setShagafAngiz] = useState([]);
  const [category, setCategory] = useState([]);
  const scrollRef = useRef(null);
  const [isBestSeller, setIsBestSeller] = useState([]);
  // ===================================================================================================>
  const [tabDataBestSaller, setTabDataBestSalar] = useState([]);
  const [tabDataPopular, setTabDataPopular] = useState([]);
  const [activeTabBestSalar, setActiveTabBestSalar] = useState("tablo");
  const [activeTabPopular, setActiveTabPopular] = useState("sandali");

  const bestSellerTabHandler = (e) => {
    const currentTarget = e.currentTarget.dataset.category;
    setActiveTabBestSalar(currentTarget);
  };

  const popularTabHandler = (e) => {
    const currentTarget = e.currentTarget.dataset.category;
    setActiveTabPopular(currentTarget);
  };

  useEffect(() => {
    axios.get(`http://localhost:10000/${activeTabBestSalar}`).then((res) => {
      const filtered = res.data.filter((items) => items.isBestSeller === true);
      setTabDataBestSalar(filtered);
    });
  }, [activeTabBestSalar]);
  useEffect(() => {
    axios.get(`http://localhost:10000/${activeTabPopular}`).then((res) => {
      const filtered = res.data.filter((items) => items.isPopular === true);
      setTabDataPopular(filtered);
    });
  }, [activeTabPopular]);

  const handleMouseDown = (e) => {
    const ele = scrollRef.current;
    if (!ele) return;

    const startPos = {
      left: ele.scrollLeft,
      x: e.clientX,
    };

    const handleMouseMove = (e) => {
      const dx = e.clientX - startPos.x;
      ele.scrollLeft = startPos.left - dx;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      ele.style.cursor = "grab";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    ele.style.cursor = "grabbing";
  };
  useEffect(() => {
    axios
      .get("http://localhost:10000/banner")
      .then((res) => setBanner(res.data));
    const collections = [
      "light",
      "golodon",
      "moble",
      "sandali",
      "sideboard",
      "tablo",
    ];
    Promise.all([
      axios.get("http://localhost:10000/light"),
      axios.get("http://localhost:10000/golodon"),
      axios.get("http://localhost:10000/moble"),
      axios.get("http://localhost:10000/sandali"),
      axios.get("http://localhost:10000/sideboard"),
      axios.get("http://localhost:10000/tablo"),
    ]).then((res) => {
      const filteredAmazing = res
        .flatMap((response, index) =>
          response.data.map((item) => ({
            ...item,
            collection: collections[index],
          })),
        )
        .filter((item) => item.isBestSeller);

      const shuffled = [...filteredAmazing].sort(() => Math.random() - 0.5);

      setShagafAngiz(shuffled);
    });
    axios
      .get("http://localhost:10000/Category")
      .then((res) => setCategory(res.data));
    Promise.all([
      axios.get("http://localhost:10000/light"),
      axios.get("http://localhost:10000/golodon"),
      axios.get("http://localhost:10000/moble"),
      axios.get("http://localhost:10000/sandali"),
      axios.get("http://localhost:10000/sideboard"),
      axios.get("http://localhost:10000/tablo"),
    ]).then((res) => {
      const filtered = res
        .flatMap((response, index) =>
          response.data.map((item) => ({
            ...item,
            collection: collections[index],
          })),
        )
        .filter((item) => item.isBestSeller);

      setIsBestSeller(filtered);
    });
  }, []);
  //======================================================================================================>

  return (
    <>
      <header className=" flex flex-col">
        <NavBarMobile />
        <NavBarPc />
        <NavBarBottomPc />
        <NavbarHeaderMobile />
        <div className="mt-2 px-6 md:w-full md:px-0">
          <Slider datas={banner} />
        </div>
      </header>
      <main className="">
        <section className="mt-4 md:mx-[150px] md:px-0 ">
          <ShagaftAngizCo
            data={shagafAngiz}
            bg={"DC2655"}
            link="/allProducts/isAmazing"
            initialTime={1 * 60 * 60}
          />
        </section>
        <section className=" px-6 md:mx-[150px] select-none  md:px-0" dir="rtl">
          <h5 className="text-right text-[15px] font-bold  my-5 md:my-4 md:text-center md:text-xl">
            دسته بندی ها
          </h5>

          <div
            className="w-full overflow-x-auto scrollbar-hide "
            ref={scrollRef}
            onMouseDown={handleMouseDown}
          >
            <div className="grid grid-rows-2 grid-flow-col auto-cols-max gap-y-6 gap-x-5 pb-4">
              {category.map((ca, index) => (
                <Category key={index} {...ca} />
              ))}
            </div>
          </div>
        </section>

        <section className=" mt-1 px-6 md:mx-[150px] md:px-0">
          <Banar1
            starText1="15 روز تا"
            starText2="اتمام اردیبهشت"
            starText3="مانده"
            img="/images/bannersCart/—Pngtree—a functional group of kitchen_20034684 1.png"
            link={`/allProducts/kitchen`}
            heading1=" کاملترین کالکشن "
            heading2=" ابزار آشپزخانه"
          />
        </section>
        <section className="mt-5 px-6 md:mx-[150px] md:px-0  md:pb-0 ">
          <SectionTitle
            addresses="/allProducts/isBestSeller"
            text="پرفروش ترین"
          />
        </section>
        {/*================================================================================== */}
        <section className=" md:flex flex-col hidden mt-8 px-6 md:mx-[150px] md:px-0  md:pb-0">
          <div className=" flex items-center justify-end gap-2">
            <div className=" flex items-center justify-end gap-10">
              <Tab
                text="مبلمان"
                category="moble"
                handler={bestSellerTabHandler}
                isActive={activeTabBestSalar === "moble"}
              />
              <Tab
                text="صندلی"
                category="sandali"
                handler={bestSellerTabHandler}
                isActive={activeTabBestSalar === "sandali"}
              />
              <Tab
                text="نور و روشنایی"
                category="light"
                handler={bestSellerTabHandler}
                isActive={activeTabBestSalar === "light"}
              />
              <Tab
                text="تابلو"
                category="tablo"
                handler={bestSellerTabHandler}
                isActive={activeTabBestSalar === "tablo"}
              />
              <Tab
                text="سایدبار"
                category="sideboard"
                handler={bestSellerTabHandler}
                isActive={activeTabBestSalar === "sideboard"}
              />
              <Tab
                text="گلدان"
                category="golodon"
                handler={bestSellerTabHandler}
                isActive={activeTabBestSalar === "golodon"}
              />
            </div>
            <span className="border-1 h-5 gap-0 border-[#DC2655]"></span>
          </div>
        </section>
        <section className=" md:pb-0 px-6 mt-5 md:mx-[150px] md:px-0 md:hidden">
          <SimpleSlider
            products={isBestSeller}
            link={`/allProducts/${activeTabBestSalar}`}
          />
        </section>
        <section className="md:block hidden md:pb-0 px-6 mt-5 md:mx-[150px] md:px-0">
          {tabDataBestSaller.length > 0 && (
            <SimpleSlider
              products={tabDataBestSaller}
              link={`/allProducts/${activeTabBestSalar}`}
            />
          )}
        </section>
        {/*======================================================================== */}
        <section className=" px-6 md:mx-[150px] md:px-0  md:pb-0 mt-10  min-[376px]:hidden lg:block">
          <Baner2
            linkLeft="/allProducts/ghablamehKitchen"
            linkright="/allProducts/ghablamehKitchen"
          />
        </section>
        <section className="mt-5 px-6 md:mx-[150px] md:px-0  md:pb-0 ">
          <SectionTitle addresses="/allProducts/isPopular" text="محبوب ترین" />
        </section>
        <section className=" md:flex flex-col hidden mt-8 px-6 md:mx-[150px] md:px-0  md:pb-0">
          <div className=" flex items-center justify-end gap-2">
            <div className=" flex items-center justify-end gap-10">
              <Tab
                text="مبلمان"
                category="moble"
                handler={popularTabHandler}
                isActive={activeTabPopular === "moble"}
              />
              <Tab
                text="صندلی"
                category="sandali"
                handler={popularTabHandler}
                isActive={activeTabPopular === "sandali"}
              />
              <Tab
                text="نور و روشنایی"
                category="light"
                handler={popularTabHandler}
                isActive={activeTabPopular === "light"}
              />
              <Tab
                text="تابلو"
                category="tablo"
                handler={popularTabHandler}
                isActive={activeTabPopular === "tablo"}
              />
              <Tab
                text="سایدبار"
                category="sideboard"
                handler={popularTabHandler}
                isActive={activeTabPopular === "sideboard"}
              />
              <Tab
                text="گلدان"
                category="golodon"
                handler={popularTabHandler}
                isActive={activeTabPopular === "golodon"}
              />
            </div>
            <span className="border-1 h-5 gap-0 border-[#DC2655]"></span>
          </div>
        </section>
        <section className=" md:pb-0 px-6 mt-5 md:mx-[150px] md:px-0 md:hidden">
          <SimpleSlider
            products={tabDataPopular}
            link={`/allProducts/${activeTabPopular}`}
          />
        </section>
        <section className="md:block hidden md:pb-0 px-6 mt-5 md:mx-[150px] md:px-0">
          {tabDataPopular.length > 0 && (
            <SimpleSlider
              products={tabDataPopular}
              link={`/allProducts/${activeTabPopular}`}
            />
          )}
        </section>
        <section className="mt-4 md:mx-[150px] md:px-0  px-3 bg-[#f3f4f6] md:rounded-xl">
          <ShagafAngizCo2
            data={shagafAngiz}
            link="/allProducts/isAmazing"
            linkall="/allProducts/isAmazing"
          />
        </section>
        <section className="mt-5 px-6 md:mx-[150px] md:px-0  md:pb-0 ">
          <SectionTitle addresses="/allProducts/reading" text="خواندنی ها" />
        </section>
        <section>{/* برای گامپوننت خواندنی ها */}</section>
      </main>
      <footer className="relative mt-15 bg-[#F0F1F1] pb-13 md:pb-0">
        <Footer />
      </footer>
    </>
  );
}
export default Home;
