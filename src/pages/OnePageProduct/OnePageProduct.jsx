import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../store/slices/productSlice/productSliceApi"
import { productsSelector } from "../../store/slices/productSlice/productSlice"
import { useParams } from "react-router-dom"
import { getCarts, postCarts, putCarts } from "../../store/slices/cartSlice/cartSliceApi"
import { cartSelector, setCartOpen } from "../../store/slices/cartSlice/cartSlice"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"
import { useTranslation } from "react-i18next"

function OnePageProduct() {
    const dispatch = useDispatch()
    const products = useSelector(productsSelector)
    const cartsData = useSelector(cartSelector)
    const { id } = useParams()
    const { i18n } = useTranslation()
    const {t} = useTranslation()
    const currentProduct = products.find(product => product.id === id)

    useEffect(() => {
        if (products.length === 0) {
            dispatch(getProducts())
            dispatch(getCarts())
        }
    }, [dispatch, products.length])

    if (!currentProduct) {
        return (
            <div className="pt-[120px] text-center text-gray-500">
                <LoadingSpinner />
            </div>
        )
    }

    const handleAddCart = () => {
        const item = {
            id: currentProduct.id,
            name: currentProduct.name,
            price: currentProduct.price,
            image: currentProduct.image,
            quantity: 1,
        }
        const existingCart = cartsData.find((el) => el.id === id)

        if (existingCart) {
            dispatch(putCarts({ ...item, quantity: item.quantity + 1 }))
        } else {

            dispatch(postCarts(item))
        }

        dispatch(setCartOpen(true))
    }


    useEffect(() => {
        window.scrollTo({top: 0})
    },[])
    const name = currentProduct[`name_${i18n.language}`] || currentProduct.name;
    const description =
        currentProduct[`description_${i18n.language}`] || currentProduct.description;

    return (
        <div className="pt-[100px] pb-20 flex justify-center cursor-pointer">
            <div className="max-w-[1100px] w-full flex flex-col md:flex-row items-center gap-10 bg-[#f8f5f0] p-10 rounded-2xl shadow-lg">

                {/* Product Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src={currentProduct.image}
                        alt={name}
                        className="w-full h-[500px] object-cover rounded-xl shadow-md"
                    />
                </div>

                {/* Product Info */}
                <div className="w-full md:w-1/2 flex flex-col gap-6 text-[#3b3b3b]">
                    <h1 className="text-4xl font-bold text-[#756F63]">
                        {name}
                    </h1>
                    <p className="text-lg leading-relaxed">
                        {description || "Описание товара пока отсутствует."}
                    </p>

                    <div className="text-3xl font-semibold text-[#b39c75]">
                        {currentProduct.price} ₽
                    </div>

                    <button
                        onClick={handleAddCart}
                        className="bg-[#b39c75] text-white py-3 px-6 rounded-md hover:bg-[#9a865f] transition text-lg font-medium w-[250px]"
                    >
                       {t("modal.addCart")}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OnePageProduct
