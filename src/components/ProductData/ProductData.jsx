import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getProducts } from "../../store/slices/productSlice/productSliceApi";
import { productsError, productsLoading, productsSelector } from "../../store/slices/productSlice/productSlice";
import ProductCard from "../ProductCard/ProductCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function ProductData() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);
  const loading = useSelector(productsLoading);
  const error = useSelector(productsError);

  console.log(products,666);
  

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const trufels = products.filter((item) => item.type === "trufel");
  const desserts = products.filter((item) => item.type === "desert");

  if (loading) return <div className="text-center py-10"><LoadingSpinner/></div>;
  if (error) return <p className="text-center text-red-500">{t("productPage.error")}: {error}</p>;

  return (
    <div className="flex flex-col gap-16 px-4 sm:px-8 md:px-16 lg:px-24 py-10 cursor-pointer">
      {/* Header */}
      <div className="text-[rgb(117,111,99)] text-[28px] sm:text-[32px] font-semibold">
        <h1>{t("productPage.menuTitle")}</h1>
        <hr className="border-[rgb(117,111,99)] mt-2" />
      </div>

      {/* Trufels Section */}
      <section id="trufels" className="flex flex-col items-start w-full">
        <div className="pb-3 mb-6 max-sm:w-full">
          <h3 className="text-[18px] sm:text-[20px] font-[800] text-[#272521] mb-2">{t("productPage.trufels.title")}</h3>
          <p className="text-[#272521] text-[16px] sm:text-[18px] leading-6">{t("productPage.trufels.description")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {trufels.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Desserts Section */}
      <section id="desserts" className="flex flex-col items-start w-full">
        <div className="pb-3 mb-6">
          <h3 className="text-[18px] sm:text-[20px] font-[800] text-[#272521] mb-2">{t("productPage.desserts.title")}</h3>
          <p className="text-[#272521] text-[16px] sm:text-[18px] leading-6">{t("productPage.desserts.description")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-sm:w-full">
          {desserts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductData;
