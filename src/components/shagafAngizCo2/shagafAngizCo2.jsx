import SimpleSlider from "../slideSimple/sliderSimple";
import CartShagaftAngiz from "./cartShagaftAngiz";

function ShagafAngizCo2({ data, link, linkall }) {
  return (
    <>
      <div className=" flex items-stretch  w-full  gap-3   md:bg-[#f3f4f6] md:p-4 rounded-xl py-0 px-3">
        <SimpleSlider products={data} link={link} />
        <CartShagaftAngiz initialTime={3 * 60 * 60} linkall={linkall} />
      </div>
    </>
  );
}
export default ShagafAngizCo2;
