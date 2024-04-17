import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Following from "./following";
import Home from "./Home/"
import NotFound from "./notFound";

const Router = createBrowserRouter([
    { path:"/",element:<Home/>,},
    { path:"/Following",element:<Following/>,},
    { path:"*",element:<NotFound/>,},
])

export default Router;