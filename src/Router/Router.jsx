import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import Main from "../Layout/main";
import About from "../About/About";
import Detail from "../Page/Detail/Detail";

let Router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element:<About/>
      }
    ],
  },
  {
    path:'/detail/:id',
    element:<Detail/>
  }
]);

export default Router;
