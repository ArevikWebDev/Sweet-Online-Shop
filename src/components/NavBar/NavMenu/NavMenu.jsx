import { useTranslation } from "react-i18next"
import NavMenuItems from "../NavMenuItems/NavMenuItems"

function NavMenu() {
    const {t} = useTranslation()
    return (
        <ul className="nav_menu  justify-between gap-4 items-center w-full h-full text-[15px] capitalize md:uppercase hidden md:flex">
            <NavMenuItems name={t("navmenu.home")} path="/" />
            <NavMenuItems name={t("navmenu.menu")} path="/menu" />
            <NavMenuItems name={t("navmenu.online")} path="/online" />
            <NavMenuItems name={t("navmenu.contact")} />
        </ul>
    )
}

export default NavMenu
