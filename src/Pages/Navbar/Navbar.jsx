import {
  FaFacebookSquare,
  FaInstagram,
  FaRegUser,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/logo_220x.avif";
import { CiShoppingCart } from "react-icons/ci";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-5 w-full bg-white fixed top-0 z-[500] px-4">
      <div className="flex justify-between ">
        <div className="flex items-center lg:hidden gap-3">
          <div>
            <SideBar />
          </div>
          <div className="lg:hidden">
            <SearchBar />
          </div>
        </div>
        <div className="hidden lg:block ">
          <div className="flex items-center  gap-5 cursor-pointer ">
            <FaInstagram className="text-xl hover:text-[#FF8C00]" />
            <FaFacebookSquare className="text-xl hover:text-[#FF8C00]" />
            <FaYoutube className="text-xl hover:text-[#FF8C00]" />
            <FaTiktok className="text-xl hover:text-[#FF8C00]" />
          </div>
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center gap-5 cursor-pointer">
          <Link to="/login">
            <FaRegUser className="text-xl hover:text-[#FF8C00]" />
          </Link>
          <div className="hidden lg:block">
            <SearchBar />
          </div>
          <Link to="/cart" className="relative">
            <CiShoppingCart className="text-3xl hover:text-[#FF8C00]" />
            <div className="absolute -top-1 -right-0">
              <p className="px-1 font-bold text-sm text-white rounded-full bg-[#b1945c]">0</p>
            </div>
          </Link>
        </div>
      </div>
      <hr className="mt-4" />
    </div>
  );
};

export default Navbar;
