import { Link } from "react-router-dom";

const Card = () => {
  const data = [
    {
      id: "1",
      name: "Laptop",
      price: 999.99,
      image: "https://i.ibb.co/yqpMY7W/Task-12193912-1-2-4-K-360x.webp",
    },
    {
      id: "2",
      name: "Smartphone",
      price: 699.99,
      image: "https://i.ibb.co/K9JgWjY/Task-12191848-2-1-4-Kaa-540x.webp",
    },
    {
      id: "3",
      name: "Headphones",
      price: 199.99,
      image: "https://i.ibb.co/cD4LPhh/Frontpartershoeshobec-540x.webp",
    },
    {
      id: "4",
      name: "Laptop",
      price: 999.99,
      image: "https://i.ibb.co/yqpMY7W/Task-12193912-1-2-4-K-360x.webp",
    },
    {
      id: "5",
      name: "Smartphone",
      price: 699.99,
      image: "https://i.ibb.co/K9JgWjY/Task-12191848-2-1-4-Kaa-540x.webp",
    },
    {
      id: "6",
      name: "Headphones",
      price: 199.99,
      image: "https://i.ibb.co/h18rLv4/Task-12212947-1-3-4-Kaa-540x.webp",
    },
    {
      id: "7",
      name: "Laptop",
      price: 999.99,
      image: "https://i.ibb.co/yqpMY7W/Task-12193912-1-2-4-K-360x.webp",
    },
    {
      id: "8",
      name: "Smartphone",
      price: 699.99,
      image: "https://i.ibb.co/K9JgWjY/Task-12191848-2-1-4-Kaa-540x.webp",
    },
  ];

  return (
    <div className="mt-12">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-[70%]">
          <img
            className="h-40 w-[400px] md:w-full  object-cover"
            src="https://i.ibb.co/h18rLv4/Task-12212947-1-3-4-Kaa-540x.webp"
            alt=""
          />
        </div>
        <div className="md:w-[30%] space-y-3 px-4">
          <h1 className="text-3xl font-bold">Eid Collection-2024</h1>
          <h3 className="text-xl font-bold text-[#b18021] italic">
            Most loved eid fashion new and now glow!!
          </h3>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-12">
        {data.map((item) => (
          <div className="group" key={item.id}>
            <Link to="/product">
              <img
                className="md:h-[600px] w-full object-cover"
                src={item.image}
                alt=""
              />
              <div className="text-center cursor-pointer bg-slate-200 py-4 hidden transition delay-300 group-hover:duration-500 group-hover:block ">
                <h1>Quick View</h1>
              </div>
            </Link>
            <p className="text-slate-500 text-center mt-4 text-xl font-semibold">
              {item.name}
            </p>
            <p className="text-slate-500 text-center mt-4 mb-4 text-xl font-semibold">
              Price : {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
