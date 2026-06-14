import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowAll from "@/assets/icons/arrowAll.svg?react";
import "swiper/css";
import "swiper/css/navigation";

import ProductCart from "./productCart";

const ProductSlider = ({ products }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!products || products.length === 0) return null;

  return (
    <div
      className={`w-full min-w-0 flex items-center select-none ${
        !isBeginning ? "show-next" : ""
      }`}
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => {
          setIsBeginning(swiper.isBeginning);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
        }}
        autoplay={
          isMobile
            ? {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        dir="rtl"
        spaceBetween={4}
        loop={false}
        navigation={true}
        breakpoints={{
          0: { slidesPerView: 2.5, spaceBetween: 4 },
          480: { slidesPerView: 5, spaceBetween: 4 },
          640: { slidesPerView: 3.2, spaceBetween: 4 },

          768: { slidesPerView: 3.5, spaceBetween: 4 },
          1024: { slidesPerView: 4.2, spaceBetween: 4 },
          1280: { slidesPerView: 5.2, spaceBetween: 4 },
          1440: { slidesPerView: 6.2, spaceBetween: 4 },
          1600: { slidesPerView: 7, spaceBetween: 4 },
          1800: { slidesPerView: 8, spaceBetween: 4 },
        }}
        className="w-full"
      >
        {products.slice(0, 18).map((product, index) => (
          <SwiperSlide
            key={`${product.id}-${index}`}
            className="flex items-center"
          >
            <ProductCart {...product} index={index} />
          </SwiperSlide>
        ))}

        <SwiperSlide className="flex !h-[200px] md:!h-[270px]">
          <div className="bg-white w-full h-[230px] md:h-[270px] flex flex-col items-center justify-center rounded-bl-xl rounded-tl-xl shadow-sm cursor-pointer">
            <Link
              to="/"
              className="flex items-center justify-center gap-1 text-black"
            >
              <span className="text-[16px] font-bold">همه</span>
              <ArrowAll className="w-6 h-6 text-black translate-y-[1px]" />
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>

      <style>{`
        .swiper {
          width: 100%;
          min-width: 0;
        }

        .swiper-wrapper {
          align-items: stretch;
        }

        .swiper-slide {
          height: auto;
        }

        .swiper-button-next,
        .swiper-button-prev {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #ffffff;
          color: #6b7280 !important;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 12px !important;
          font-weight: bold;
        }

        .swiper-button-disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }

        .swiper-button-next {
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .show-next .swiper-button-next {
          opacity: 1;
          pointer-events: auto;
        }

        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductSlider;
