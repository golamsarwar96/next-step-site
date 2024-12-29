import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";

import { Pagination, Navigation } from "swiper/modules";
const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="w-full"
      loop={true}
      modules={[Pagination, Navigation]}
    >
      <SwiperSlide>
        <img src={slider1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider3} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
