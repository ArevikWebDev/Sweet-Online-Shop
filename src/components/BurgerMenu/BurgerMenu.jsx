import { useDispatch, useSelector } from "react-redux";
import { burgerSelector, closeMenu } from "../../store/slices/burgerSlice/burgerSlice";
import NavMenuItems from "../NavBar/NavMenuItems/NavMenuItems";
import person from "../../assets/icons/person.svg";
import close from "../../assets/icons/close.svg"
function BurgerMenu() {
  const dispatch = useDispatch();
  const isOpen = useSelector(burgerSelector);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[300px] bg-[#1e1b17] text-white transition-transform duration-300 z-60 shadow-lg
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex justify-between  gap-15 items-center p-[20px] border-b border-[#2c2823] w-full">
        <div className="flex items-center gap-10 cursor-pointer justify-between w-full">
          <img src={person} alt="person" className="w-8 h-10 invert" />
          <span className="text-[25px] hover:text-gray-300">Войти</span>
        </div>
        <img src={close} alt="close" onClick={() => dispatch(closeMenu())}
          className="w-10 h-10 font-light hover:text-gray-400 transition invert" />
      </div>

      <ul className="flex flex-col gap-6 mt-10 text-center text-[40px] uppercase tracking-wide">
          <NavMenuItems name="Главная" path="/" />
            <NavMenuItems name="МЕНЮ" path="/menu" />
            <NavMenuItems name="ОНЛАЙН-ЗАКАЗ" path="/online" />
            <NavMenuItems name="Контакты" path="" />
        </ul>
    
    </div>
  );
}

export default BurgerMenu;
