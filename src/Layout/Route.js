import { createBrowserRouter } from "react-router-dom";
import Date from "../Components/Date/Date";
import Home from "../Components/Home/Home";
import HotelDetails from "../Components/HotelDetails/HotelDetails";
import HotelsService from "../Components/HotelsService/HotelsService";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Main from "./Main";

export const Route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',

                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/data',
                element: <Date></Date>
            },

            {
                path: '/details/:id',
                loader: ({ params }) =>fetch(`http://localhost:5000/data/${params.id}`),
              
                element: <HotelDetails></HotelDetails>
            },

            {
                path:'/service/:id',
                loader: ({ params }) =>fetch(`http://localhost:5000/data/${params.id}`),
                element:<HotelsService></HotelsService>

            }

        ]

    }
])