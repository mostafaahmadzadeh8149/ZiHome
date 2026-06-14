import { NavLink } from "react-router-dom";
function ButtonNavBarMobile({ to, label, icon: Icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        "flex flex-col items-center gap-1 transition-colors " +
        (isActive ? "text-[#424750]" : "text-gray-400")
      }
    >
      <Icon className="w-6 h-6" />
      <span className="text-[10px]">{label}</span>
    </NavLink>
  );
}
export default ButtonNavBarMobile;
