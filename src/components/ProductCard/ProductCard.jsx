import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

function ProductCard({ product }) {
  const { i18n } = useTranslation()
  const name = product[`name_${i18n.language}`] || product.name;
  const description = product[`description_${i18n.language}`] || product.description;

  return (
    <Link to={`/${i18n.language}/product/${product.id}`} className="flex flex-col items-center text-center w-[280px] h-[350px] border border-[#B6B5B3] mx-auto  max-sm:w-full">
      <img
        src={product.image}
        alt={product.name}
        className=" h-40 object-cover w-full max-sm:h-50"
      />

      <div className="flex flex-col justify-center items-center w-full h-full bg-[#F4F3F2] p-[10px]">
        <h3 className="text-lg font-semibold text-gray-700">{name}</h3>
        <p
          className="text-[#756F63] text-sm font-[600] mt-1 overflow-hidden text-ellipsis line-clamp-2"
        >
          {description}
        </p>
        <span className="text-[#756F63] text-[15px] font-medium mt-2">
          {product.price}₽
        </span>
      </div>
    </Link>
  )
}

export default ProductCard
