/* eslint-disable react/no-unescaped-entities */
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../assets/banner-1.webp";
import banner2 from "../../assets/banner2.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel showThumbs={false} autoPlay showArrows={true}>
        <div className="relative ">
          <img src={banner1} />
          <div className="space-y-4 hidden md:block absolute left-10 top-[40px] md:top-[200px] lg:top-[250px]">
            <h1 className="text-3xl font-semibold text-white"> EID STYLES </h1>
            <p className="text-xl text-white">The Season's latest</p>
            <button className="px-6 text-white py-3 border-2 border-white text-sm font-bold hover:bg-white hover:text-black">
              SHOP
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={banner2} />
          <div className="space-y-4 hidden md:block absolute left-10 top-[80px] md:top-[200px] lg:top-[250px]">
            <h1 className="text-3xl font-semibold text-white"> EID STYLES </h1>
            <p className="text-xl text-white">The Season's latest</p>
            <button className="px-6 text-white py-3 border-2 border-white text-sm font-bold hover:bg-white hover:text-black">
              SHOP
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
