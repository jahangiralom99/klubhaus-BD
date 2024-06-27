import { FaRegCircleQuestion } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { TbSquareRoundedMinus2 } from "react-icons/tb";

const FastShopping = () => {
  return (
    <div className="mt-16 max-w-screen-xl mx-auto px-4">
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2">
        <div className="space-y-3 flex gap-4 items-center">
          <FiShoppingCart className="text-4xl rotate-45 text-[#2879fe]" />
          <div>
            <h1 className="text-3xl font-semibold">FAST SHIPPING</h1>
            <p>Fast Shipping on all orders from the US</p>
          </div>
        </div>
        <div className="space-y-3 flex gap-4 items-center">
          <FaRegCircleQuestion className="text-[100px] text-[#2879fe]" />

          <div>
            <h1 className="text-3xl font-semibold">SUPPORT 24/7</h1>
            <p>
              Contact us 24 hours a day, 📞 01841-297782(10AM - 6PM) Except
              Weekend/Govt Holidays) ✉ info@klubhaus.com.bd
            </p>
          </div>
        </div>
              <div className="space-y-3 flex gap-4 items-center">
              <TbSquareRoundedMinus2 className="text-4xl text-[#2879fe]" />

                  <div>
                  <h1 className="text-3xl font-semibold">EASY EXCHANGE</h1>
                  <p>Simply exchange within 7 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastShopping;
