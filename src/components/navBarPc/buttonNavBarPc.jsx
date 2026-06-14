
import { Link } from "react-router-dom";

function ButtonNavBarPc({ to, label, icon: Icon }) {
  return (
    <Link
      to={to}
      className="
        group relative flex items-center justify-center gap-1
        px-2 py-1
        transition-all duration-300 ease-out
      "
    >
      <span className="text-[13px] text-[#292C2D] transition-colors duration-300 group-hover:text-gray-600">
        {label}
      </span>

      {}
      {Icon && (
        <Icon className="w-5 h-5 transition-colors duration-300 group-hover:text-gray-600 text-[#676F71]" />
      )}
      {/*       <Icon className="w-6 h-6 transition-colors duration-300 group-hover:text-gray-600" />
       */}
      <span
        className="
          absolute left-0 -bottom-1 h-[2px] w-0
          bg-gray-600
          transition-all duration-300
          group-hover:w-full
        "
      />
    </Link>
  );
}

export default ButtonNavBarPc;
