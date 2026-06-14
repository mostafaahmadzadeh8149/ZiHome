function Tab({ text, handler, category, isActive }) {
  return (
    <button
      onClick={handler}
      className={` text-[16px]  ${
        isActive
          ? "border-b-2 border-[#DC2655] text-[#DC2655] font-bold"
          : "text-gray-500 hover:text-black"
      }`}
      data-category={category}
    >
      {text}
    </button>
  );
}
export default Tab;
