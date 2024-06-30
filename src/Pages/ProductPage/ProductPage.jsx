/* eslint-disable react/no-unescaped-entities */
import image1 from "../../assets/download.svg";
import image2 from "../../assets/download (1).svg";
import image3 from "../../assets/download (2).svg";
import image4 from "../../assets/download (3).svg";
import image5 from "../../assets/download (4).svg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import bannerImage from "../../assets/Task-12317956-1-4-4Kaa_3000x.webp";

const ProductPage = () => {
  return (
    <div className="mt-32 max-w-screen-xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-28">
        <div className="md:flex-1">
          <img src={bannerImage} alt="" />
        </div>
        <div className="md:flex-1">
          <h1 className="text-2xl font-semibold">Women's 3 Piece Suit</h1>
          <p className="text-xl mt-4">Tk 5,490.00</p>
          <p className="text-sm mt-10">size</p>
          <div className="flex gap-5 text-sm mt-6">
            <div className="px-3 py-1 border">XS</div>
            <div className="px-3 py-1 border">S</div>
            <div className="px-3 py-1 border">M</div>
            <div className="px-3 py-1 border">L</div>
            <div className="px-3 py-1 border">XL</div>
            <div className="px-3 py-1 border-2 border-[#b1945c]">XXL</div>
          </div>
          <div className="border flex items-center gap-6 w-[95px] mt-8">
            <div className="text-xl p-1 cursor-pointer">-</div>
            <div>1</div>
            <div className="text-xl p-1 cursor-pointer">+</div>
          </div>
          <div className="mt-12">
            <button className="px-12 hover:bg-[#b1945c] hover:text-white text-[#b1945c] font-bold py-2 border border-[#b1945c]">
              Add To Cart
            </button>
          </div>
          <div className="mt-12 flex gap-4 flex-wrap items-center justify-center">
            <img className="w-24" src={image1} alt="" />
            <img className="w-24" src={image2} alt="" />
            <img className="w-24" src={image3} alt="" />
            <img className="w-24" src={image4} alt="" />
            <img className="w-24" src={image5} alt="" />
          </div>

          <div className=" mt-12">
            <Tabs>
              <TabList className="text-center mb-10">
                <Tab> Size Chart</Tab>
                <Tab>Description</Tab>
                <Tab>Features</Tab>
              </TabList>

              <TabPanel>
                <h2 className="text-[#008080] text-2xl font-bold">
                  STYLE CODE- WSKD-295
                </h2>
                <div className="w-full overflow-x-auto mt-12">
                  <table className="w-full text-left border border-separate rounded border-slate-200">
                    <tbody>
                      <tr className="text-center">
                        <th
                          scope="col"
                          className=" p-2 text-sm font-medium text-center"
                        >
                          Measurement (Inches) Size
                        </th>
                        <th
                          scope="col"
                          className="p-2 text-sm font-medium border-l"
                        >
                          XS
                        </th>
                        <th
                          scope="col"
                          className=" p-2 text-sm font-medium border-l "
                        >
                          S
                        </th>
                        <th
                          scope="col"
                          className="p-2 text-sm font-medium border-l "
                        >
                          M
                        </th>
                        <th
                          scope="col"
                          className=" p-2 text-sm font-medium border-l "
                        >
                          L
                        </th>
                        <th
                          scope="col"
                          className=" p-2 text-sm font-medium border-l"
                        >
                          XL
                        </th>
                        <th
                          scope="col"
                          className=" p-2 text-sm font-medium border-l"
                        >
                          XXL
                        </th>
                      </tr>
                      <tr className="text-center">
                        <th
                          scope="row"
                          className="h-12 p-1 text-sm text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 "
                        >
                          Waist
                        </th>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200  ">
                          36"
                        </td>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200 ">
                          38"
                        </td>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200">
                          40"
                        </td>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200 ">
                          42"
                        </td>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200">
                          44"
                        </td>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200">
                          45.5"
                        </td>
                      </tr>
                      <tr className="text-center">
                        <th
                          scope="row"
                          className="h-12 p-1 text-sm text-center border-t border-l first:border-l-0 border-slate-200  "
                        >
                          Outseam
                        </th>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200 ">
                          36"
                        </td>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200">
                          38"
                        </td>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200 ">
                          40"
                        </td>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200">
                          42"
                        </td>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200 ">
                          44"
                        </td>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200">
                          45.5"
                        </td>
                      </tr>
                      <tr className="text-center">
                        <th
                          scope="row"
                          className="h-12 p-1 text-sm text-center border-t border-l first:border-l-0 border-slate-200  "
                        >
                          Full Length
                        </th>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200 ">
                          36"
                        </td>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200">
                          38"
                        </td>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200 ">
                          40"
                        </td>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200">
                          42"
                        </td>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200 ">
                          44"
                        </td>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200">
                          45.5"
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h1 className="font-bold mt-12">Bottom</h1>
                <div className="w-full overflow-x-auto mt-12">
                  <table className="w-full text-left border border-separate rounded border-slate-200">
                    <tbody>
                      <tr className="text-center">
                        <th
                          scope="col"
                          className=" p-2 text-sm font-bold text-center"
                        >
                          Measurement (Inches) Size
                        </th>
                        <th
                          scope="col"
                          className="p-2 text-sm font-medium border-l"
                        >
                          XS
                        </th>
                        <th
                          scope="col"
                          className=" p-2 text-sm font-medium border-l "
                        >
                          S
                        </th>
                        <th
                          scope="col"
                          className="p-2 text-sm font-medium border-l "
                        >
                          M
                        </th>
                        <th
                          scope="col"
                          className=" p-2 text-sm font-medium border-l "
                        >
                          L
                        </th>
                        <th
                          scope="col"
                          className=" p-2 text-sm font-medium border-l"
                        >
                          XL
                        </th>
                        <th
                          scope="col"
                          className=" p-2 text-sm font-medium border-l"
                        >
                          XXL
                        </th>
                      </tr>
                      <tr className="text-center">
                        <th
                          scope="row"
                          className="h-12 p-1 text-sm text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 "
                        >
                          Waist
                        </th>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200  ">
                          36"
                        </td>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200 ">
                          38"
                        </td>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200">
                          40"
                        </td>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200 ">
                          42"
                        </td>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200">
                          44"
                        </td>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200">
                          45.5"
                        </td>
                      </tr>
                      <tr className="text-center">
                        <th
                          scope="row"
                          className="h-12 p-1 text-sm text-center border-t border-l first:border-l-0 border-slate-200  "
                        >
                          Outseam
                        </th>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200 ">
                          36"
                        </td>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200">
                          38"
                        </td>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200 ">
                          40"
                        </td>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200">
                          42"
                        </td>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200 ">
                          44"
                        </td>
                        <td className="h-12 p-1 text-sm transition font-bold border-t border-l first:border-l-0 border-slate-200">
                          45.5"
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabPanel>
              <TabPanel>
                <h2 className="text-3xl font-bold text-[#808000]">
                  Women's 3 Piece Suit Mint
                </h2>
                <p className="mt-6">
                  Premium high-quality exclusive women's 3 pieces suit
                  collection modern design perfect fit style for women with
                  high-performance fabric. Klubhaus blended fabrics are soft,
                  Well-fitting, strong, and cooler than cotton. They wick
                  moisture, are breathable, and retain color vibrancy.
                </p>
                <p className="font-bold mt-5">𝗙𝗘𝗔𝗧𝗨𝗥𝗘𝗦:</p>
                <div className="ml-8 mt-2">
                  <li>
                    Made of the highest quality materials with a softer fabric.
                  </li>
                  <li>Brand new classic designed women's 3 piece set.</li>
                  <li>Comfortable fit with easy movement.</li>
                  <li>
                    Soft, durable, and capable of a lived-in feel right away.
                  </li>
                  <li>
                    Clean finish, ensuring each garment is tough and
                    long-lasting.
                  </li>
                  <li>Satisfaction Guaranteed!!</li>
                </div>
                <p className="font-bold mt-5">𝗦𝗣𝗘𝗖𝗜𝗙𝗜𝗖𝗔𝗧𝗜𝗢𝗡𝗦:</p>
                <div className="ml-8 mt-2">
                  <li>
                    <span className="font-bold">Brand:</span>Klubhaus
                  </li>
                  <li>
                    <span className="font-bold">Color:</span>Mint
                  </li>
                  <li>
                    <span className="font-bold">Fabric:</span>Silk
                  </li>
                  <li>
                    <span className="font-bold">Style:</span>WSKD-295
                  </li>
                </div>
              </TabPanel>
              <TabPanel>
                <h2 className="text-3xl font-semibold text-green-500">
                  KEY FEATURES:
                </h2>
                <div className="mt-5 space-y-8">
                  <p>
                    <span className="font-bold">𝗥𝗘𝗠𝗜𝗨𝗠 𝗙𝗔𝗕𝗥𝗜𝗖:</span> The
                    klubhaus Women's 3 Piece Set is made from silk which makes
                    it very soft and comfortable to wear. This Women's 3-Piece
                    Suit has a soft flat double stitched collar
                  </p>
                  <p>
                    <span className="font-bold">𝗙𝗔𝗦𝗛𝗜𝗢𝗡𝗔𝗕𝗟𝗘 𝗪𝗘𝗔𝗥:</span> This
                    women's 3-piece set classic design Women's 3-Piece Suit will
                    create a new and elegant look for you. This comfortable
                    Women's 3 3-piece suit is a fashionable and perfect
                    companion for indoor and outdoor wear.
                  </p>
                  <p>
                    <span className="font-bold">𝗣𝗘𝗥𝗙𝗘𝗖𝗧 𝐅𝐈𝐓:</span> Our Women's
                    3-piece suits are designed with a slight taper. So, it fits
                    easily with the body of the Athletes. You will find a size
                    chart on the images.
                  </p>
                  <p>
                    <span className="font-bold">𝗖𝗟𝗔𝗦𝗦𝗜𝗖 𝗗𝗘𝗦𝗜𝗚𝗡: </span> The
                    "Klubhaus modern" design of the Women's 3 Piece Suit is
                    printed using a garments printing method that uses
                    eco-friendly water-based ink for soft hand feel and thin
                    printing. This type of color and printing uses fewer
                    chemicals.
                  </p>
                  <p>
                    <span className="font-bold">𝗦𝗨𝗜𝗧𝗔𝗕𝗟𝗘 𝗙𝗢𝗥:</span> Favorite
                    light little women's 3 Piece Set for work, festival spring
                    summer office, wedding, casual wear, dates, and travel!
                    Available in a wide range of solid colors
                  </p>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
