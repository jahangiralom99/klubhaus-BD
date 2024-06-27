/* eslint-disable react/no-unescaped-entities */
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/collection/klubhaus_bd1.webp";
import img2 from "../../assets/collection/klubhaus_bd2.webp";
import img3 from "../../assets/collection/klubhaus_bd3.webp";
import img4 from "../../assets/collection/klubhaus_bd4.webp";

const Collection = () => {
  return (
    <div className="mt-4">
      <h1 className="text-center text-2xl font-semibold">New Collections</h1>
      <section className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-4 mt-8 justify-items-center">
          <div>
            <img
              className="w-[400px] h-[400px] object-cover"
              src={img1}
              alt="Collection-image"
            />
            <p className="mt-4 text-xl text-center">Cub Klub</p>
          </div>
          <div>
            <img
              className="w-[400px] h-[400px] object-cover "
              src={img2}
              alt="Collection-image"
            />
            <p className="mt-4 text-xl text-center">Men's Panjabi</p>
          </div>
          <div>
            <img
              className="w-[400px] h-[400px] object-cover"
              src={img3}
              alt="Collection-image"
            />
            <p className="mt-4 text-xl text-center">Women's Ethnic Suit</p>
          </div>
          <div>
            <img
              className="w-[400px] h-[400px] object-cover"
              src={img4}
              alt="Collection-image"
            />
            <p className="mt-4 text-xl text-center">EID-UL-ADHA'24</p>
          </div>
        </div>
      </section>
      <section className="md:hidden mt-8">
        <Carousel showThumbs={false} autoPlay={false} showArrows={true}>
          <div>
            <img className="h-[600px] object-cover" src={img1} />
            <p className="mt-4 text-xl text-center">Cub Klub</p>
          </div>
          <div>
            <img className="h-[600px] object-cover" src={img2} />
            <p className="mt-4 text-xl text-center">Men's Panjabi</p>
          </div>
          <div>
            <img className="h-[600px] object-cover" src={img3} />
            <p className="mt-4 text-xl text-center">Women's Ethnic Suit</p>
          </div>
          <div>
            <img className="h-[600px] object-cover" src={img4} />
            <p className="mt-4 text-xl text-center">EID-UL-ADHA'24</p>
          </div>
        </Carousel>
      </section>
    </div>
  );
};

export default Collection;
