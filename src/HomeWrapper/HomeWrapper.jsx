import { NavLink, Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"
import { useSelector } from "react-redux";
import { burgerSelector } from "../store/slices/burgerSlice/burgerSlice";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import CartsBlock from "../components/CartsBlock/CartsBlock";
import Footer from "../components/Footer/Footer";

function HomeWrapper() {
     const isOpen = useSelector(burgerSelector);
    return(
        <div className="home_wrapper">
               <NavBar/>
               <Outlet/>
               { isOpen && <BurgerMenu/>}
               <Footer/>
               <CartsBlock/>
        </div>
    )
}

export default HomeWrapper