import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import ProductPage from "../Pages/ProductPage/ProductPage";
import Card from "../Pages/Card/Card";
import Login from "../Pages/Login/Login";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/card",
                element: <Card/>
            },
            {
                path: "/product",
                element: <ProductPage/>
            },
            {
                path: "/login",
                element: <Login/>
            }
        ]
    }
])


export default Route;