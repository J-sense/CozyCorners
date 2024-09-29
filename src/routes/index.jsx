import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/main/Home";
import About from "../pages/main/About";
import Shop from "../pages/main/Shop";
// import Shop from "../components/ui/Shop";

export const router = createBrowserRouter([
  {
    path:"/",
    element:<Main/>,
    children :[
        {
            path:"/",
            element:<Home />
        },
        {
          path:"/about",
          element:<About />
        },
        {
          path:"/shop",
          element:<Shop />
        },

    ]
  }
])