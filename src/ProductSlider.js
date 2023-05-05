import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "./components/ProductCard";
// import images
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";

const ProductSlider = () => {
  return (
    <div className="container py-4 px-4 justify-content-center bg-dark">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <h1>
            <ProductCard
              data={{ imgSrc: img1, price: "10$", title: "Juicy Grapes" }}
            />
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>
            <ProductCard
              data={{ imgSrc: img2, price: "15$", title: "Sweet Oranges" }}
            />
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>
            <ProductCard
              data={{ imgSrc: img3, price: "15$", title: "Fresh Mangoes" }}
            />
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>
            <ProductCard
              data={{ imgSrc: img4, price: "25$", title: "African star apple" }}
            />
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>
            <ProductCard
              data={{ imgSrc: img5, price: "15$", title: "Cruchy carrots" }}
            />
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>
            <ProductCard
              data={{ imgSrc: img3, price: "15$", title: "Chilly Pepper" }}
            />
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
