/* eslint-disable react/no-unescaped-entities */
import banner1 from "../../assets/banner-1.webp";
import banner2 from "../../assets/banner2.jpg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <div>
      {/* <Carousel showThumbs={false} autoPlay showArrows={true}>
        <div className="relative ">
          <img className="w-44" src={banner1} />
          <div className="space-y-4 hidden md:block absolute left-10 top-[40px] md:top-[200px] lg:top-[250px]">
            <h1 className="text-3xl font-semibold text-white"> EID STYLES </h1>
            <p className="text-xl text-white">The Season's latest</p>
            <Link to="/card">
            <button className="px-6 text-white py-3 border-2 border-white text-sm font-bold hover:bg-white hover:text-black">
              SHOP
            </button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <img src={banner2} />
          <div className="space-y-4 hidden md:block absolute left-10 top-[80px] md:top-[200px] lg:top-[250px]">
            <h1 className="text-3xl font-semibold text-white"> EID STYLES </h1>
            <p className="text-xl text-white">The Season's latest</p>
            <Link to="/card">
            <button className="px-6 text-white py-3 border-2 border-white text-sm font-bold hover:bg-white hover:text-black">
              SHOP
            </button>
            </Link>
          </div>
        </div>
      </Carousel> */}
      <div>
        <Swiper
          rewind={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative ">
              <img className="h-screen md:h-full object-cover" src={banner1} />
              <div className="space-y-4 md:block absolute left-10 top-[400px] md:top-[200px] lg:top-[250px]">
                <h1 className="text-3xl font-semibold text-white">
                  {" "}
                  EID STYLES{" "}
                </h1>
                <p className="text-xl text-white">The Season's latest</p>
                <Link to="/card">
                  <button className="px-6 text-white py-3 border-2 border-white text-sm font-bold hover:bg-white hover:text-black">
                    SHOP
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative">
          <img className="h-screen md:h-full object-cover" src={banner2} />
          <div className="space-y-4 md:block absolute left-10 top-[400px] md:top-[200px] lg:top-[250px]">
            <h1 className="text-3xl font-semibold text-white"> EID STYLES </h1>
            <p className="text-xl text-white">The Season's latest</p>
            <Link to="/card">
            <button className="px-6 text-white py-3 border-2 border-white text-sm font-bold hover:bg-white hover:text-black">
              SHOP
            </button>
            </Link>
          </div>
        </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
