import bg from "../../assets/images/bg1.jpg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function HeaderComponent() {
  const { t } = useTranslation();

  return (
    <header
      style={{ backgroundImage: `url(${bg})` }}
      className="relative h-[600px] sm:h-[700px] md:h-[800px] w-full bg-cover bg-center bg-fixed flex items-center justify-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-5 sm:gap-6 md:gap-8 text-center px-4">
        <p className="text-white tracking-[0.2em] text-[12px] sm:text-[14px] uppercase">
          {t("header.subtitle")}
        </p>

        <h1 className="text-white font-medium leading-[1.1] text-[48px] sm:text-[70px] md:text-[90px] lg:text-[110px]">
          {t("header.title_line1")}
        </h1>

        <h1 className="text-white font-medium leading-[1.1] text-[48px] sm:text-[70px] md:text-[90px] lg:text-[110px]">
          {t("header.title_line2")}
        </h1>

        <NavLink to="/online">
          <span className="inline-block text-[18px] sm:text-[22px] md:text-[25px] text-[rgb(173,169,160)] hover:text-white transition-colors duration-300 mt-4 border border-[rgb(173,169,160)] px-6 py-2 rounded-full hover:border-white">
            {t("header.order_online")}
          </span>
        </NavLink>
      </div>
    </header>
  );
}

export default HeaderComponent;
