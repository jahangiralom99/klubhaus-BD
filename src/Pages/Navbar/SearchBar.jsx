import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const SearchBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <div onClick={() => setOpen(!open)}>
        <CiSearch className="text-3xl hover:text-[#b1945c] cursor-pointer" />
      </div>
      <div>
        {open && (
          <div className="p-5 duration-300 shadow-lg border z-[99999999] w-full px-12 lg:px-28 bg-white absolute top-0 left-0">
            <div className="my-6 flex items-center gap-2">
              <div className="">
                <CiSearch className="text-xl"></CiSearch>
              </div>
              <input
                id="id-s01"
                type="search"
                name="id-s01"
                placeholder="Search here"
                aria-label="Search content"
                className="peer relative h-10 w-full border-b border-slate-200 px-4 pr-12 text-sm text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <div className="cursor-pointer" onClick={() => setOpen(false)}>
                <IoMdClose className="text-xl" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
