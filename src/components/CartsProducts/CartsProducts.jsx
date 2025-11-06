import { useSelector, useDispatch } from "react-redux";
import { cartSelector } from "../../store/slices/cartSlice/cartSlice";
import trash from "../../assets/icons/trash.svg"
import { deleteCarts, putCarts } from "../../store/slices/cartSlice/cartSliceApi";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function CartsProducts() {
  const carts = useSelector(cartSelector);
  const dispatch = useDispatch();
  const {i18n} = useTranslation()



  if (carts.length === 0) {
    return <p className="text-center text-gray-500 italic mt-10">Ваша корзина пуста</p>;
  }


  const changeQuantity = (op, item) => {
    if (op === "increment") {
      dispatch(putCarts({...item, quantity:item.quantity + 1}));
    } else if (op === "decrement" && item.quantity > 1) {
      dispatch(putCarts({...item, quantity:item.quantity - 1}));
    }

    
  }
  const deleteItem = (id)=>{
  dispatch(deleteCarts(id))
  }

  return (
    <div className="flex-1 overflow-y-auto p-5 space-y-5 cursor-pointer">
      {carts.map(item => (
        
        <div key={item.id} className="flex justify-between items-center border-b pb-3 pt-[10px]">
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-[60px] h-[60px] object-cover rounded-md"
            />
            <div>
              <h4 className="text-[15px] font-medium text-[#3b2b2b]">{item[`name_${i18n.language}`] || item.name}</h4>
              <p className="text-gray-500 text-[14px]">{item.price} ₽</p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center border border-gray-300 rounded">
              <button
                className="px-2 text-[18px] text-gray-600 hover:text-black"
                onClick={()=> changeQuantity('decrement', item)}
              >
                –
              </button>
              <span className="px-3 text-[15px]">{item.quantity}</span>
              <button
                className="px-2 text-[18px] text-gray-600 hover:text-black"
                onClick={()=>changeQuantity("increment", item)}
              >
                +
              </button>
            </div>
            <p className="text-[15px] font-medium text-[#3b2b2b]">{item.price * item.quantity} ₽</p>
            <button
              className="text-[13px] text-gray-400 hover:text-red-500 transition"
              onClick={()=> deleteItem(item.id)}
            >
              <img src={trash} alt="trash" />
            </button>
          </div>
        </div>
      ))}

    </div>
  );
}

export default CartsProducts;
