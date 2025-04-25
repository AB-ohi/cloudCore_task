   import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navber from "../Shared/NavBer/NavBer";

const Main = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
}
export default Main;
