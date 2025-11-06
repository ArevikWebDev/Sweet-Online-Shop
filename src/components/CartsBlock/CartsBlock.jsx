import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import close from "../../assets/icons/close.svg";
import { cartOpenSelector, cartSelector, setCartOpen } from "../../store/slices/cartSlice/cartSlice";
import CartsProducts from "../CartsProducts/CartsProducts";
import { useEffect } from "react";
import { getCarts } from "../../store/slices/cartSlice/cartSliceApi";

function CartsBlock() {
  const dispatch = useDispatch();
  const isOpen = useSelector(cartOpenSelector);
  const { t } = useTranslation();
 const carts = useSelector(cartSelector)
  useEffect(()=>{
    dispatch(getCarts())
  },[])
  const totalPrice  = carts.reduce((sum,item)=> sum + item.price * item.quantity,0)
  return (
    <div className={`fixed inset-0 bg-black/40 cursor-pointer flex justify-end z-[99999] ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
      <div className="w-[420px] bg-white h-full flex justify-between flex-col shadow-[-10px_0_25px_rgba(0,0,0,0.1)] animate-slideIn">

        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200">
          <h2 className="text-[20px] font-medium text-[#3b2b2b]">
            {t("cart.title")} <span className="text-gray-500 text-[15px]">{t("cart.items")}</span>
          </h2>
          <img
            src={close}
            alt="close"
            onClick={() => dispatch(setCartOpen(false))}
            className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition"
          />
        </div>

        <CartsProducts/>
       {/* Promo Code */}

        {/* Total */}
        <div className="border-t border-gray-200 px-5 py-5 flex flex-col justify-center gap-5 items-start">
        <div className="border-b border-gray-200  py-3 flex  items-center text-gray-600 gap-2 text-sm w-full h-full">
          <span>+</span> {t("cart.addPromo")}
        </div>
          <div className="flex justify-between w-full mb-3">
            <span className="text-gray-600">{t("cart.total")}</span>
            <span className="font-semibold text-[#3b2b2b]"> {totalPrice.toLocaleString()}₽</span>
          </div>
          <p className="text-[13px] text-gray-500 mb-4">{t("cart.note")}</p>

          <button className="w-full bg-[#b39c75] text-white font-medium py-3 rounded-md hover:bg-[#9a865f] transition">
            {t("cart.checkout")}
          </button>

          <button className="w-full mt-3 text-[#b39c75] font-medium py-2 rounded-md border border-[#b39c75] hover:bg-[#f7f5f0] transition">
            {t("cart.viewCart")}
          </button>

          <p className="text-[12px] flex justify-center items-center w-full text-gray-400 text-center mt-3">{t("cart.secureOrder")}</p>
        </div>
     
      </div>
    </div>
  );
}

export default CartsBlock;
