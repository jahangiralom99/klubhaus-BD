import Banner from "./Banner";
import Collection from "./Collection";
import FastShopping from "./FastShopping";
import ManCollection from "./ManCollection";
import Trending from "./Trending";
import WomenSaree from "./WomenSaree";

const Home = () => {
    return (
        <div>
            <Banner />
            <Collection />
            <WomenSaree />
            <ManCollection />
            <Trending />
            <FastShopping/>
        </div>
    );
};

export default Home;