import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { closeMenu } from "../../../store/slices/burgerSlice/burgerSlice";

function NavMenuItems({name,path}) {
    const {i18n} = useTranslation()
    const dispatch = useDispatch()

    const handleScrollContact = () => {
        if (!path) {
            window.scrollTo({
                top: document.getElementById("footer").offsetTop,
                behavior: "smooth"
            })
        }
        else{
             window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
        dispatch(closeMenu())
    }
    return(
       <li className="text-[rgb(173,169,160)] leading-10 text-sm" onClick={handleScrollContact}>
        <NavLink to={path && `/${i18n.language}${path}`} className={({isActive})=>(isActive ? "active_link" : "link","text-10 ")}>
            {name}
        </NavLink>
       </li> 
    )
}

export default NavMenuItems