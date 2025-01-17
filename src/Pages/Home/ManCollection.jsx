/* eslint-disable react/no-unescaped-entities */
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/man_collection/KAUS0551aa.webp";
import img2 from "../../assets/man_collection/KAUS0583.webp";
import img3 from "../../assets/man_collection/KAUS5412.webp";
import img4 from "../../assets/man_collection/KAUS5498.webp";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const ManCollection = () => {
  return (
    <div>
      <section className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-4 mt-8 justify-items-center">
          <Link to="/card">
            <img
              className="w-[400px] h-[400px] object-cover"
              src={img1}
              alt="Collection-image"
            />
            <p className="mt-4 text-xl text-center">Men's Shirt</p>
          </Link>
          <Link to="/card">
            <img
              className="w-[400px] h-[400px] object-cover "
              src={img2}
              alt="Collection-image"
            />
            <p className="mt-4 text-xl text-center">Men's Collections</p>
          </Link>
          <Link to="/card">
            <img
              className="w-[400px] h-[400px] object-cover"
              src={img3}
              alt="Collection-image"
            />
            <p className="mt-4 text-xl text-center">Ethnic Top</p>
          </Link>
          <Link to="/card">
            <img
              className="w-[400px] h-[400px] object-cover"
              src={img4}
              alt="Collection-image"
            />
            <p className="mt-4 text-xl text-center">Women's Collections</p>
          </Link>
        </div>
      </section>
      <section className="md:hidden mt-8">
        {/* <Carousel showThumbs={false} autoPlay={false} showArrows={true}>
          <div>
            <img className="h-[600px] object-cover" src={img1} />
            <p className="mt-4 text-xl text-center">Men's Shirt</p>
          </div>
          <div>
            <img className="h-[600px] object-cover" src={img2} />
            <p className="mt-4 text-xl text-center">Men's Collections</p>
          </div>
          <div>
            <img className="h-[600px] object-cover" src={img3} />
            <p className="mt-4 text-xl text-center">Ethnic Top</p>
          </div>
          <div>
            <img className="h-[600px] object-cover" src={img4} />
            <p className="mt-4 text-xl text-center">Women's Collections</p>
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
              <div className="cursor-pointer">
                <Link to="/card">
                  <img className="md:h-[600px] z-50 object-cover" src={img1} />
                  <p className="mt-4 text-xl text-center">Cub Klub</p>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Link to="/card">
                  <img className="md:h-[600px] object-cover" src={img2} />
                  <p className="mt-4 text-xl text-center">Men's Panjabi</p>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Link to="/card">
                  <img className="md:h-[600px] object-cover" src={img3} />
                  <p className="mt-4 text-xl text-center">
                    Women's Ethnic Suit
                  </p>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Link to="/card">
                  <img className="md:h-[600px] object-cover" src={img4} />
                  <p className="mt-4 text-xl text-center">EID-UL-ADHA'24</p>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default ManCollection;
