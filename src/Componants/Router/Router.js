import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Contact from "../../Pages/Contact/Contact";



const router=createBrowserRouter([
    {
      path:"/",
      element:  <Home></Home>
    
    },
    {
      path:"/contact",
      element:  <Contact></Contact>
    
    },
    
      ])
export default router;