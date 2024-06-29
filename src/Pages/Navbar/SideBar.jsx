/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [close1, setClose1] = useState(false);
  const [close2, setClose2] = useState(false);
  const [close3, setClose3] = useState(false);
  const [close4, setClose4] = useState(false);
  const [close5, setClose5] = useState(false);
  const [close6, setClose6] = useState(false);
  const [close7, setClose7] = useState(false);
  return (
    <div>
      <div onClick={() => setOpen(!open)}>
        <IoMenuSharp className="text-4xl cursor-pointer" />
      </div>
      {open && (
        <div
          className={`bg-white md:w-[70%] h-full ${
            open
              ? "w-full left-0 transition duration-500 border mt-4 fixed"
              : ""
          } z-[500]`}
        >
          <ul className="p-5 space-y-4 ">
            <li className="text-xl font-bold  border-b-2 pb-2 uppercase">
              Home
            </li>
            <li onClick={() => setClose(!close)} className="relative z-[99]">
              <Link className="flex uppercase  hover:text-red-500 items-center font-bold gap-1 border-b-2 pb-2 text-xl ">
                EID-UL-ADHA'24 <IoIosArrowDown />
              </Link>
              {close && (
                <ul className="border mt-2 text-black transition-opacity duration-300  rounded-lg bg-white">
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex p-6 gap-28 px-8"
                  >
                    <li className="flex flex-col gap-2 font-semibold">
                      <Link className="hover:text-red-500">MAN'S</Link>
                      <Link className="hover:text-red-500 ">WOMAN'S</Link>
                      <Link className="hover:text-red-500 ">KID'S</Link>
                    </li>
                  </div>
                </ul>
              )}
            </li>
            <li onClick={() => setClose1(!close1)} className="relative z-[99]">
              <Link className="flex text-xl uppercase  hover:text-red-500 items-center font-bold gap-1 border-b-2 pb-2">
                New IN <IoIosArrowDown />
              </Link>
              {close1 && (
                <ul className="border mt-2 text-black transition-opacity duration-300  rounded-lg bg-white">
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex p-6 gap-28 px-8"
                  >
                    <li className="flex flex-col gap-2 font-semibold">
                      <Link className="hover:text-red-400 ">MAN'S</Link>
                      <Link className="hover:text-red-400 ">WOMAN'S</Link>
                      <Link className="hover:text-red-400  ">KID'S</Link>
                    </li>
                  </div>
                </ul>
              )}
            </li>
            <li onClick={() => setClose2(!close2)} className="relative z-[99]">
              <Link className="flex text-xl uppercase  hover:text-red-500 items-center font-bold gap-1 border-b-2 pb-2">
                Men <IoIosArrowDown />
              </Link>
              {close2 && (
                <ul className="border mt-2 text-black transition-opacity duration-300  rounded-lg bg-white">
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex p-6 gap-28 px-8"
                  >
                    <li className="grid grid-cols-2 gap-5 font-semibold ">
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
              )}
            </li>
            <li onClick={() => setClose3(!close3)} className="relative ">
              <Link className="flex text-xl uppercase  hover:text-red-500 items-center font-bold gap-1 border-b-2 pb-2">
                Women <IoIosArrowDown />
              </Link>
              {close3 && (
                <ul className="absolute -top-40 w-full  border mt-2 text-black transition-opacity duration-300  rounded-lg bg-white z-[900]">
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="p-6  px-8"
                  >
                    <div onClick={() => setClose3(false)}>
                      <p className="text-xl font-semibold absolute right-0 top-0 border bg-white rounded-full cursor-pointer w-8 flex items-center justify-center">
                        X
                      </p>
                    </div>
                    <li className="grid grid-cols-2 gap-5  font-semibold ">
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
              )}
            </li>
            <li onClick={() => setClose4(!close4)} className="relative z-[99]">
              <Link className="flex text-xl uppercase  hover:text-red-500 items-center font-bold gap-1 border-b-2 pb-2">
                CUB KLUB <IoIosArrowDown />
              </Link>
              {close4 && (
                <ul className="absolute -top-52 w-full  border mt-2 text-black transition-opacity duration-300  rounded-lg bg-white z-[500]">
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="p-6  px-8"
                  >
                    <div onClick={() => setClose4(false)}>
                      <p className="text-xl font-semibold absolute right-0 top-0 border bg-white rounded-full cursor-pointer w-8 flex items-center justify-center">
                        X
                      </p>
                    </div>
                    <li className="grid grid-cols-2 gap-5  font-semibold ">
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
              )}
            </li>
            <li onClick={() => setClose5(!close5)} className="relative">
              <Link className="flex text-xl uppercase  hover:text-red-500 items-center font-bold gap-1 border-b-2 pb-2">
                FOOTWEAR <IoIosArrowDown />
              </Link>
              {close5 && (
                <ul className=" w-full  border mt-2 text-black transition-opacity duration-300  rounded-lg bg-white z-[500]">
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="p-6  px-8"
                  >
                    <li className="grid grid-cols-2 gap-5  font-semibold ">
                      <Link className="hover:text-red-500 ">MAN'S</Link>
                      <Link className="hover:text-red-500 ">WOMAN'S</Link>
                      <Link className="hover:text-red-500 ">KID'S</Link>
                    </li>
                  </div>
                </ul>
              )}
            </li>
            <li onClick={() => setClose6(!close6)} className="relative">
              <Link className="flex text-xl uppercase  hover:text-red-500 items-center font-bold gap-1 border-b-2 pb-2">
                ESSENTIAL <IoIosArrowDown />
              </Link>
              {close6 && (
                <ul className=" w-full  border mt-2 text-black transition-opacity duration-300  rounded-lg bg-white z-[500]">
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="p-6  px-8"
                  >
                    <li className="grid grid-cols-2 gap-5  font-semibold ">
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
              )}
            </li>
            <li onClick={() => setClose7(!close7)} className="relative z-[99]">
              <Link className="flex text-xl uppercase  hover:text-red-500 items-center font-bold gap-1 border-b-2 pb-2">
                ACCESSORIES <IoIosArrowDown />
              </Link>
              {close7 && (
                <ul className="absolute -top-80 w-full  border mt-2 text-black transition-opacity duration-300  rounded-lg bg-white z-[500]">
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="p-6  px-8"
                  >
                    <div onClick={() => setClose7(false)}>
                      <p className="text-xl font-semibold absolute right-0 top-0 border bg-white rounded-full cursor-pointer w-8 flex items-center justify-center">
                        X
                      </p>
                    </div>
                    <li className="grid grid-cols-2 gap-5  font-semibold ">
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
                    </li>
                  </div>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideBar;
