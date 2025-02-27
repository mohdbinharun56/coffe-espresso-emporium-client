import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import ViewDetails from "../pages/ViewDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path: '/coffees',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: '/coffee/:id',
                element: <ViewDetails></ViewDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
            }
        ]
    }
])