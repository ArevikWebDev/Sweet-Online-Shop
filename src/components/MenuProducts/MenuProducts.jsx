import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMenu } from "../../store/slices/menuSlice/menuSliceApi"
import MenuCard from "../MenuCard/MenuCard"
import { menuError, menuLoading, menuSelector } from "../../store/slices/menuSlice/menuSlice"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"
import { useTranslation } from "react-i18next"

function MenuProducts() {
  const dispatch = useDispatch()
  const menu = useSelector(menuSelector)
  const loading = useSelector(menuLoading)
  const error = useSelector(menuError)
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(getMenu())
  }, [dispatch])

  const trufels = menu.filter((item) => item.type === "trufel")
  const desserts = menu.filter((item) => item.type === "desert")

  if (loading) return <div className="text-center py-10"><LoadingSpinner /></div>
  if (error) return <p className="text-center text-red-500">Error: {error}</p>
  return (
    <div className="flex flex-col justify-around items-center gap-16 cursor-pointer w-full h-full">
      {/* // menu.length > 0 && menu.map(menuItem=>(
                //     <MenuCard key={menuItem.id} menuItem={menuItem}/>
                // )) */}
      <section className="flex justify-center flex-col items-start w-[70%] max-md:w-[100%]">
        <div className="border-b border-gray-300 pb-3 mb-6 w-full h-full">
          <h3 className="text-[20px] font-[800] text-[#272521] mb-2 flex">{t("productPage.trufels.title")}</h3>
          <p className="text-[#272521] text-[18px]">
            {t("productPage.trufels.description")}
          </p>
        </div>
        <div className="flex items-start justify-around w-full flex-col gap-6">
          {trufels.map((menuItem) => (
            <MenuCard key={menuItem.id} menuItem={menuItem} />
          ))}
        </div>
      </section>

      <section  className="flex justify-center flex-col items-start w-[70%] max-md:w-[100%]">
        <div className="border-b border-gray-300 pb-3 mb-6 w-full h-full">
          <h3 className="text-2xl font-bold text-gray-800 mb-2 flex">{t("productPage.desserts.title")}</h3>
          <p className="text-gray-500 flex">
            {t("productPage.desserts.description")}
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full">
          {desserts.map((menuItem) => (
            <MenuCard key={menuItem.id} menuItem={menuItem} />
          ))}
        </div>
      </section>

    </div>
  )
}

export default MenuProducts