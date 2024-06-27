/* eslint-disable react/no-unescaped-entities */
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/man_collection/KAUS0551aa.webp";
import img2 from "../../assets/man_collection/KAUS0583.webp";
import img3 from "../../assets/man_collection/KAUS5412.webp";
import img4 from "../../assets/man_collection/KAUS5498.webp";

const ManCollection = () => {
    return (
        <div>
            <section className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-4 mt-8 justify-items-center">
          <div>
            <img
              className="w-[400px] h-[400px] object-cover"
              src={img1}
              alt="Collection-image"
            />
            <p className="mt-4 text-xl text-center">Men's Shirt</p>
          </div>
          <div>
            <img
              className="w-[400px] h-[400px] object-cover "
              src={img2}
              alt="Collection-image"
            />
            <p className="mt-4 text-xl text-center">Men's Collections</p>
          </div>
          <div>
            <img
              className="w-[400px] h-[400px] object-cover"
              src={img3}
              alt="Collection-image"
            />
            <p className="mt-4 text-xl text-center">Ethnic Top</p>
          </div>
          <div>
            <img
              className="w-[400px] h-[400px] object-cover"
              src={img4}
              alt="Collection-image"
            />
            <p className="mt-4 text-xl text-center">Women's Collections</p>
          </div>
        </div>
      </section>
      <section className="md:hidden mt-8">
        <Carousel showThumbs={false} autoPlay={false} showArrows={true}>
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
        </Carousel>
      </section>
        </div>
    );
};

export default ManCollection;