import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [{
            path: '/',
            element: <Home></Home>,
            loader: ()=>  fetch('http://localhost:5000/coffee')
        }]
    }
])