/* eslint-disable react/no-unescaped-entities */
import saree1 from "../../assets/shree1.webp";
import saree2 from "../../assets/shree2.webp";
const WomenSaree = () => {
  return (
    <div className="mt-8">
      <section className="relative">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 ">
            <img
              className=" w-full object-cover h-[900px]"
              src={saree1}
              alt=""
            />
          </div>
          <div className="flex-1">
            <img
              className="w-full h-[900px] object-cover"
              src={saree2}
              alt=""
            />
          </div>
        </div>
        <div className="bg-[#322929] absolute top-[800px] md:top-[300px] left-16 md:left-[210px] lg:left-[600px] md:w-[350px] mx-auto p-6 rounded md:p-12 flex flex-col justify-center items-center space-y-5">
          <h1 className="text-3xl font-semibold text-white">Women's Saree</h1>
          <p className="text-white font-bold"> Exclusive Fashion</p>
          <button className="px-6 hover:bg-white hover:text-[#322929] text-white py-3 border-2 text-sm border-white font-bold ">
            VIEW PRODUCTS
          </button>
        </div>
          </section>
    </div>
  );
};

export default WomenSaree;
