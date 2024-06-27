const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-16">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="md:flex-1">
          <h1 className="font-bold">INFORMATION</h1>
          <hr className="mt-3" />
          <ul className="mt-5 text-sm space-y-3">
            <li>ABOUT US</li>
            <li>MEASUREMENT CHART</li>
            <li>STORE LOCATION</li>
            <li>TERMS AND CONDITIONS</li>
            <li>PRIVACY POLICY</li>
            <li>RETURN AND REFUND POLICY</li>
          </ul>
        </div>
        <div className="md:flex-1">
          <h1 className="font-bold">NEWSLETTER</h1>
          <hr className="mt-3" />
          <p className="font-bold mt-6">
            Subscribe to get special offers, free giveaways, and
            once-in-a-lifetime deals.
          </p>
          <div className="mt-5 flex items-center">
            <input
              className="border border-black w-full py-1 px-4"
              type="text"
              name=""
              id=""
            />
            <button className="py-[6px] px-4 font-bold text-sm uppercase text-white bg-[#545454]">
              Join
            </button>
          </div>
        </div>
          </div>
          <p className="mt-16 mb-12">© Ionic Corporation</p>
    </div>
  );
};

export default Footer;
