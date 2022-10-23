import { createBrowserRouter } from "react-router-dom";
import Date from "../Components/Date/Date";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Hudai from "../Components/NewsDetails/Details";
import NewsDetails from "../Components/NewsDetails/NewsDetails";
import Register from "../Components/Register/Register";
import Main from "./Main";

export const Route=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
 
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/data',
                element:<Date></Date>
            },

            {
                path:'/details/:id',
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`),
                element:<NewsDetails></NewsDetails>
            },
          
        ]

    }
])