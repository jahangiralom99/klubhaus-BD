import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar";
import Navbar2 from "./Pages/Navbar/Navbar2";
import Footer from "./Pages/Footer/Footer";

const App = () => {
    return (
        <div>
            <Navbar />
            <Navbar2/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default App;