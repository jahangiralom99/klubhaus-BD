import { GoPlus } from "react-icons/go";

const Cart = () => {
  return (
    <div className="mt-28 max-w-screen-xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-10 ">
        <div className="md:w-[70%]">
          <div className="flex  justify-between items-center">
            <h3 className="text-xl font-semibold">CART</h3>
            <button className="px-4 py-2 border-2 text-[#b1945c] border-[#b1945c] font-bold hover:bg-[#b1945c] hover:text-white">
              {" "}
              Continue Shopping
            </button>
          </div>
          <hr className="mt-4" />
          {/* Cart page Start  */}
          <div className="mt-6 flex flex-col md:flex-row  items-center gap-4 justify-between">
            <div className="flex items-center gap-8 ">
              <img
                className="w-20 h-28"
                src="https://i.ibb.co/yqpMY7W/Task-12193912-1-2-4-K-360x.webp"
                alt=""
              />
              <div className="space-y-3">
                <h1 className="text-xl font-bold">Women's 3 Piece Suit</h1>
                <p className="text-sm font-semibold">Size: XS</p>
                <button className="text-sm hover:text-[#b1945c]  ">
                  REMOVE
                </button>
              </div>
            </div>
            <div>
              <p className="font-bold">TK 4, 990.00</p>
            </div>
            <div className="border flex items-center font-bold gap-6 w-[95px] mt-8">
              <div className="text-xl p-1 cursor-pointer">-</div>
              <div>1</div>
              <div className="text-xl p-1 cursor-pointer">+</div>
            </div>
          </div>
        </div>
        <div className="md:w-[30%]">
          <div className="flex items-center justify-between">
            <p className="font-sm font-bold">SUBTOTAL</p>
            <h1 className="text-2xl font-bold text-[#b1945c]">TK 4,990.00</h1>
          </div>
          <div className="flex justify-start gap-3 ml-6 mt-3">
            <input type="checkbox" id="id" name="name" value="nothing"></input>
            <p className="font-bold">
              {" "}
              I agree with the{" "}
              <span className="text-blue-500">
                terms and conditions ,Privacy Policy
              </span>{" "}
              and <span className="text-blue-500">Return Refund Policy</span>
            </p>
          </div>
          <hr className="mt-2" />
          <div className="flex mt-2 justify-between items-center ">
            <p className="text-sm">Add Order Notes</p>
            <GoPlus className="text-xl" />
          </div>
          <hr className="mt-2" />
          <div className="flex mt-2 justify-between items-center ">
            <p className="text-sm">Estimate Shipping</p>
            <GoPlus className="text-xl" />
          </div>
          <button className="mt-5 w-full mx-auto text-center font-bold text-white py-4 bg-[#b1945c]">
            Check Out
          </button>
          <p className="italic text-sm mt-4 font-semibold">
            Shipping, taxes, and discount codes are calculated at checkout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
