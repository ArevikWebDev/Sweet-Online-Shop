import NavMenu from "./NavMenu/NavMenu"
import person from "../../assets/icons/person.svg"
import inst from "../../assets/icons/inst.svg"
import basket from "../../assets/icons/basket.svg"
import x from "../../assets/icons/x.svg"
import bar from "../../assets/icons/bar.svg"
import { useDispatch, useSelector } from "react-redux"
import { burgerSelector, toggleMenu } from "../../store/slices/burgerSlice/burgerSlice"
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"
import { useTranslation } from "react-i18next"
import { setCartOpen } from "../../store/slices/cartSlice/cartSlice"

function NavBar() {
  const dispatch = useDispatch()
  const isOpen = useSelector(burgerSelector)
  const { t } = useTranslation()
  return (
    <div className="fixed top-0 left-0 w-full bg-[rgba(40,35,30,0.66)] backdrop-blur-sm text-white py-4 z-50 cursor-pointer">
      <div className="mx-auto flex justify-around items-center px-6">
        <div className="flex justify-center items-center ">
          <NavMenu />
        </div>
        <div className="flex items-center gap-[20px] max-sm:justify-between max-sm:w-full">
          <LanguageSwitcher />
          <div className="icons_div flex justify-center items-center gap-8">
            <div className="person_icon flex gap-2 items-center max-sm:hidden">
              <img src={person} alt="person" className="w-6 invert" />
              <p className="text-sm">{t('navbar.login')}</p>
            </div>
            <div className="icons_item flex justify-center items-center gap-4 invert">
              <div className="flex justify-center items-center gap-2">
                <img src={x} alt="twitter" />
                <img src={inst} alt="instagram" />
              </div>

              <img src={basket} alt="basket" onClick={() => dispatch(setCartOpen(true))} />

              <img
                src={bar}
                alt="menu"
                onClick={() => dispatch(toggleMenu())}
                className="block md:hidden cursor-pointer w-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar