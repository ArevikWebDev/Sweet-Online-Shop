import { useTranslation } from "react-i18next";

function MenuCard({ menuItem }) {
  const { i18n } = useTranslation();
  const name = menuItem[`name_${i18n.language}`] || menuItem.name;
  const description = menuItem[`description_${i18n.language}`] || menuItem.description;

  return (
    <div className="flex flex-col md:flex-row justify-between items-center border-b py-6 gap-6 md:gap-20 w-full">
      {/* Text Section */}
      <div className="flex-1">
        <h3 className="text-lg md:text-xl font-semibold text-gray-600">{name}</h3>
        <p className="text-[#756F63] text-sm md:text-[15px] font-[600] mt-2">{description}</p>
      </div>

      {/* Price & Image Section */}
      <div className="flex items-center gap-4 md:gap-6 mt-4 md:mt-0">
        <span className="text-[#756F63] text-[14px] md:text-[15px] font-normal">{menuItem.price}₽</span>
        <img
          src={menuItem.image}
          alt={menuItem.name}
          className="w-24 h-24 md:w-40 md:h-40 object-cover rounded"
        />
      </div>
    </div>
  );
}

export default MenuCard;
