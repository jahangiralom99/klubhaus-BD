/* eslint-disable react/no-unescaped-entities */
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div className=" max-w-screen-xl mx-auto px-4 mt-16 hidden lg:block">
      <ul className="flex items-center justify-center">
        <li className="font-bold hover:text-red-500 uppercase">
          <Link to="/">Home</Link>
        </li>
        <li className="relative p-4 group z-[9]">
          <Link className="flex uppercase text-red-500 hover:text-red-500 items-center font-bold gap-1">
            EID-UL-ADHA'24 <IoIosArrowDown />
          </Link>
          <ul className="absolute md:top-12 shadow-lg border  left-0 mt-2 text-black  opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block rounded-lg bg-white">
            <div className="flex p-6 gap-28 px-8">
              <li className="flex flex-col gap-2 font-semibold">
                <Link className="hover:text-red-500 ">MAN'S</Link>
                <Link className="hover:text-red-500 ">WOMAN'S</Link>
                <Link className="hover:text-red-500 ">KID'S</Link>
              </li>
            </div>
          </ul>
        </li>
        <li className="relative p-4 group z-[9]">
          <Link className="flex uppercase text-green-500 hover:text-red-500 items-center font-bold gap-1">
            NEW IN <IoIosArrowDown />
          </Link>
          <ul className="absolute md:top-12 bg-white shadow-lg border left-0 mt-2 text-black  opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block rounded-lg">
            <div className="flex p-6 gap-28 px-8">
              <li className="flex flex-col gap-2 font-semibold">
                <Link className="hover:text-red-400 ">MAN'S</Link>
                <Link className="hover:text-red-400 ">WOMAN'S</Link>
                <Link className="hover:text-red-400  ">KID'S</Link>
              </li>
            </div>
          </ul>
        </li>
        <li className="relative p-4 group z-[9]">
          <Link className="flex uppercase hover:text-red-500 items-center  font-bold gap-1">
            Men <IoIosArrowDown />
          </Link>
          <ul className="absolute md:top-12 shadow-lg border left-0 mt-2 text-black  opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block rounded-lg w-44 bg-white">
            <div className="flex p-6 gap-28 px-8">
              <li className="flex flex-col gap-2 font-semibold">
                <Link>Formal Shirt</Link>
                <Link>Casual Shirt</Link>
                <Link>Panjabi</Link>
                <Link>Sherwani</Link>
                <Link>Prince Coat</Link>
                <Link>WaistCoat</Link>
                <Link>Men's Kabli</Link>
                <Link>T-Shirts</Link>
                <Link>Polo Shirts</Link>
                <Link>Blazer</Link>
                <Link>Activewear</Link>
                <Link>Sleepwear</Link>
                <Link>Pants</Link>
                <Link>Denim Trouser</Link>
              </li>
            </div>
          </ul>
        </li>
        <li className="relative p-4 group z-[9]">
          <Link className="flex uppercase hover:text-red-500 items-center font-bold gap-1">
            Women <IoIosArrowDown />
          </Link>
          <ul className="absolute md:top-12 shadow-lg border bg-white left-0 mt-2 text-black  opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block rounded-lg w-44">
            <div className="flex p-6 gap-28 px-8">
              <li className="flex flex-col gap-2 font-semibold">
                <Link>3 Piece/2 Piece Set</Link>
                <Link>Ethnic Top</Link>
                <Link>Western Top</Link>
                <Link>Lehenga</Link>
                <Link>Women's Saree</Link>
                <Link>Skirt Top Set</Link>
                <Link>Blazer</Link>
                <Link>Shirt</Link>
                <Link>T-Shirt</Link>
                <Link>Norm Dress</Link>
                <Link>Maternity</Link>
                <Link>Activewear</Link>
                <Link>Sleepwear</Link>
                <Link>Ethnic Bottom</Link>
                <Link>Other Bottom</Link>
              </li>
            </div>
          </ul>
        </li>
        <li className="relative p-4 group z-[9]">
          <Link className="flex uppercase hover:text-red-500 items-center font-bold gap-1">
            CUB KLub <IoIosArrowDown />
          </Link>
          <ul className="absolute md:top-12 shadow-lg border bg-white -left-[550px] mt-2 text-black  opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block rounded-lg w-[1000px]">
            <div className="flex justify-between p-6 gap-28 px-8 w-full">
              <li className="flex flex-col gap-2">
                <h1 className="font-bold">MEN</h1>
                <Link>Formal Shirt</Link>
                <Link>Casual Shirt</Link>
                <Link>Panjabi</Link>
                <Link>Sherwani</Link>
                <Link>Prince Coat</Link>
                <Link>WaistCoat</Link>
                <Link>Men's Kabli</Link>
                <Link>T-Shirts</Link>
                <Link>Polo Shirts</Link>
                <Link>Blazer</Link>
                <Link>Activewear</Link>
                <Link>Sleepwear</Link>
                <Link>Pants</Link>
                <Link>Denim Trouser</Link>
              </li>
              <li className="flex flex-col gap-2">
                <h1 className="font-bold">WOMEN</h1>
                <Link>3 Piece/2 Piece Set</Link>
                <Link>Ethnic Top</Link>
                <Link>Western Top</Link>
                <Link>Lehenga</Link>
                <Link>Women's Saree</Link>
                <Link>Skirt Top Set</Link>
                <Link>Blazer</Link>
                <Link>Shirt</Link>
                <Link>T-Shirt</Link>
                <Link>Norm Dress</Link>
                <Link>Maternity</Link>
                <Link>Activewear</Link>
                <Link>Sleepwear</Link>
                <Link>Ethnic Bottom</Link>
                <Link>Other Bottom</Link>
              </li>
              <li className="space-y-2 flex flex-col">
                <h1 className="font-bold">NEW BORN</h1>
                <Link>Party Gown</Link>
                <Link> Boys Set</Link>
                <Link>Gift Box</Link>
              </li>
            </div>
          </ul>
        </li>
        <li className="relative p-4 group z-[9] ">
          <Link className="flex uppercase text-[#00f] hover:text-red-500 items-center  font-bold gap-1">
            FOOTWEAR <IoIosArrowDown />
          </Link>
          <ul className="absolute md:top-12 shadow-lg border bg-white left-0 mt-2 text-black  opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block rounded-lg">
            <div className="flex p-6 px-8">
              <li className="flex flex-col gap-2 font-semibold">
                <Link className="hover:text-red-500 ">MAN'S</Link>
                <Link className="hover:text-red-500 ">WOMAN'S</Link>
                <Link className="hover:text-red-500 ">KID'S</Link>
              </li>
            </div>
          </ul>
        </li>
        <li className="relative p-4 group z-[9]">
          <Link className="flex uppercase hover:text-red-500 items-center font-bold gap-1">
            ESSENTIAL <IoIosArrowDown />
          </Link>
          <ul className="absolute md:top-12 shadow-lg border bg-white left-0 mt-2 text-black  opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block rounded-lg">
            <div className="flex p-6 px-8">
              <li className="flex flex-col gap-2 font-semibold">
                <Link>Activewear</Link>
                <Link>Sleepwear</Link>
                <Link>Maternity</Link>
                <Link>Apron</Link>
                <Link>Boxer</Link>
                <Link>Socks</Link>
                <Link>Footwear</Link>
              </li>
            </div>
          </ul>
        </li>
        <li className="relative p-4 group z-[9]">
          <Link className="flex hover:text-red-500 uppercase items-center font-bold gap-1">
            ACCESSORIES <IoIosArrowDown />
          </Link>
          <ul className="absolute md:top-12 shadow-lg border bg-white -left-[900px] mt-2 text-black  opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block rounded-lg w-[1000px]">
            <div className="flex justify-between p-6 gap-28 px-8 w-full">
              <li className="flex flex-col gap-2">
                <h1 className="font-bold">MEN</h1>
                <Link>Formal Shirt</Link>
                <Link>Casual Shirt</Link>
                <Link>Panjabi</Link>
                <Link>Sherwani</Link>
                <Link>Prince Coat</Link>
                <Link>WaistCoat</Link>
                <Link>Men's Kabli</Link>
              </li>
              <li className="flex flex-col gap-2">
                <h1 className="font-bold">WOMEN</h1>
                <Link>3 Piece/2 Piece Set</Link>
                <Link>Ethnic Top</Link>
                <Link>Western Top</Link>
                <Link>Lehenga</Link>
                <Link>Women's Saree</Link>
                <Link>Skirt Top Set</Link>
                <Link>Blazer</Link>
              </li>
              <li className="space-y-2 flex flex-col">
                <h1 className="font-bold">NEW BORN</h1>
                <Link>Party Gown</Link>
                <Link> Boys Set</Link>
                <Link>Gift Box</Link>
              </li>
            </div>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Navbar2;
