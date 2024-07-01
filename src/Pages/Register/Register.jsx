import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center space-y-4 mt-28">
        <h1 className="text-4xl font-bold">Create Account
        </h1>
        <p className="text-xl ">
        Already have an account?{" "}
          <Link className="hover:text-[#b1945c] font-bold" to="/login">
            Login here.
          </Link>
        </p>
      </div>
      <div className=" py-6 px-8  bg-white rounded shadow-xl">
        <form action="">
          <div className="mb-6">
            <label className="block text-gray-800 font-bold">First Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="First Name"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 font-bold">Last Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Last Name"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 font-bold">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="username"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-bold">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="@email"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            />
          </div>
          <button className="cursor-pointer py-2 px-4 block mt-6 bg-[#b1945c] text-white font-bold w-full text-center rounded">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
