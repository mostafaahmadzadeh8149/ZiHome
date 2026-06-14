import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function BannerSlider({ datas }) {
  if (!datas || datas.length === 0) return null;

  return (
    <div className="w-full overflow-hidden relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        grabCursor
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        dir="rtl"
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        spaceBetween={12}
        slidesPerView={1.05}
        breakpoints={{
          640: { slidesPerView: 1.1 },
          1024: { slidesPerView: 1, spaceBetween: 0 },
        }}
        className="w-full"
      >
        {datas.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/BannerHeader/${item.slug}`} className="block w-full">
              <div className="lg:hidden">
                <div
                  className="w-full h-[170px] sm:h-[220px] rounded-2xl bg-cover bg-center shadow-lg"
                  style={{ backgroundImage: `url(${item.src})` }}
                />
              </div>

              <div className="hidden lg:block w-full">
                <div className="relative w-full lg:h-[520px] xl:h-[620px] 2xl:h-[550px] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title || "banner"}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .custom-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db; /* gray-300 */
          opacity: 1;
          border-radius: 9999px;
          margin: 0 4px !important;
        }
        .custom-bullet-active {
          background: #6b7280 !important; /* gray-500 */
          width: 22px !important;
          transition: 0.3s;
        }
      `}</style>
    </div>
  );
}

export default BannerSlider;
