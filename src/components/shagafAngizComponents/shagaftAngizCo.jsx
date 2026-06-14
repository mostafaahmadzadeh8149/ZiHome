import ProductSlider from "../../components/products&productCart/productsSlider";
import ShagaftAngiz from "../../components/products&productCart/shagaftAngiz";
import TimerTakhfif from "../../components/products&productCart/timerTakhfif";
import ArrowAll from "@/assets/icons/arrowAll.svg?react";
import { Link } from "react-router-dom";
function ShagaftAngizCo({ data, bg, link, initialTime }) {
  return (
    <div
      style={{ backgroundColor: `#${bg}` }}
      className="w-full px-6 md:rounded-xl h-[300px] md:flex md:items-center md:gap-5 overflow-hidden "
    >
      <ShagaftAngiz
        initialTime={initialTime}
        className="md:hidden"
        link={link}
      />

      <div className="flex-1 min-w-0">
        <ProductSlider products={data} />
      </div>

      <div className="hidden md:flex shrink-0 flex-col items-center text-center w-[180px]">
        <p className="text-white text-2xl py-3">
          پیشنهاد <br />
          شگفت <br />
          انگیز
        </p>

        <TimerTakhfif
          initialTime={initialTime}
          colonClass="text-white"
          boxClass=" bg-white"
        />

        <img
          src="/images/productsCart&slider/sugest2.png"
          alt="png"
          className="w-[104px]"
        />

        <Link
          to={link}
          className="flex items-center justify-center gap-1 text-white"
        >
          <ArrowAll className="w-6 h-6 text-white translate-y-[1px]" />
          <span className="text-[16px] font-bold">همه</span>
        </Link>
      </div>
    </div>
  );
}
export default ShagaftAngizCo;
