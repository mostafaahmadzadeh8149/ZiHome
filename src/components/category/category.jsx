import { Link } from "react-router-dom";

function Category({ text, src, title }) {
  return (
    <Link to={`/categoryProduct/${title}`}>
      <div className="flex flex-col items-center w-[75px] md:w-[125px]  ">
        <div className="w-[70px] h-[70px] bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border border-gray-50 md:w-[100px] md:h-[100px]">
          <img src={src} className="w-full h-full object-cover" alt={text} />
        </div>
        <span className="text-[11px] mt-2 text-center leading-5 font-medium text-gray-800 break-words w-full h-10 overflow-hidden">
          {text}
        </span>
      </div>
    </Link>
  );
}
export default Category;
