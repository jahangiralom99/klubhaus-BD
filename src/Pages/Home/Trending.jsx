import image from "../../assets/WhatsApp_Image_2024-06-07_at_10.56.37_AM.jpg"
const Trending = () => {
    return (
        <div className="mt-8 relative max-w-screen-xl mx-auto">
            <img src={image} alt="" />
            <div className="space-y-4 absolute left-10 top-[80px] md:top-[200px] lg:top-[300px]">
                <h1 className="text-3xl font-semibold">Trending Now</h1>
                <p className="text-xl ">Checkout Our Latest Collection</p>
                <button className="px-6 py-3 border-2 border-black text-sm font-bold hover:bg-[#545454] hover:text-white">SHOP NOW</button>
            </div>
        </div>
    );
};

export default Trending;