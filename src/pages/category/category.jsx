import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBarMobile from "../../components/navBarMobile/navBarMobile";
import axios from "axios";

function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:10000/Category").then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBarMobile />

      <div className="px-4 py-6">
        <h1 className="text-lg font-bold text-right mb-4">دسته‌بندی‌ها</h1>

        <div className="grid grid-cols-2 gap-4">
          {categories.map((item, index) => {
            if (!item.title) {
              return (
                <div
                  key={index}
                  className="h-28 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 text-sm"
                >
                  به زودی
                </div>
              );
            }

            return (
              <Link to={`/allProducts/${item.title}`}>
                <div
                  key={index}
                  className="cursor-pointer bg-white rounded-2xl shadow-sm overflow-hidden active:scale-95 transition"
                >
                  <img src={item.src} className="h-24 w-full object-cover" />
                  <p className="text-center py-2 text-sm font-medium">
                    {item.text}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Category;
