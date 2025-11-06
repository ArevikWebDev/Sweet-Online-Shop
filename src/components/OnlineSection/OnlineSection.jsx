import { useTranslation } from "react-i18next";
import geo from "../../assets/icons/geo.svg";
import clock from "../../assets/icons/clock.svg";
import { useDispatch } from "react-redux";
import { openModal, setModalType } from "../../store/slices/modalSlice/modalSlice";
import ModalBlock from "../ModalBlock/ModalBlock";

function OnlineSection() {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const hadleScroll = (id) => {
    window.scrollTo({
      top: document.getElementById(id).offsetTop - 100,
      behavior: "smooth"
    })
  }

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-10 relative cursor-pointer">
      <div className="flex flex-col justify-center items-start gap-6">
        <div className="flex flex-col gap-4 max-w-[800px]">
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#756F63]">
            {t("onlineSection.title")}
          </h1>
          <p className="text-[#4E4A42] text-[16px] sm:text-[18px] leading-6">
            {t("onlineSection.description")}
          </p>
        </div>

        <div className="w-fit px-4 h-[40px] border border-gray-400 flex justify-center items-center rounded-full gap-2 cursor-pointer">
          <div className="w-[10px] h-[10px] rounded-full bg-green-600"></div>
          <span className="text-[14px] sm:text-[16px]">
            {t("onlineSection.status")}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row w-full max-w-[420px] max-sm:gap-2">
          <div
            onClick={() => dispatch(openModal("pickup"))}
            className="min-w-[150px] h-[50px] p-2 border border-gray-400 flex justify-center items-center bg-[rgb(210,209,206)] text-[16px] cursor-pointer hover:bg-gray-300 transition"
          >
            <p>{t("onlineSection.pickup")}</p>
          </div>
          <div className="min-w-[150px] h-[50px] border border-gray-400 flex justify-center items-center text-[16px] cursor-pointer hover:bg-gray-100 transition" onClick={() => dispatch(openModal("delivery"))}>
            <p>{t("onlineSection.delivery")}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col lg:flex-row gap-6">
            <p className="flex items-center gap-2 text-[15px] sm:text-[16px] flex-wrap">
              <img src={clock} alt="clock" className="w-5 h-5" />
              <span className="font-semibold">
                {t("onlineSection.pickupTime")}
              </span>
              <span>{t("onlineSection.pickupTimeValue")}</span>
              <span className="text-black-600 cursor-pointer hover:underline">
                {t("onlineSection.change")}
              </span>
            </p>
            <p className="flex items-center gap-2 text-[15px] sm:text-[16px] flex-wrap">
              <img src={geo} alt="geo" className="w-5 h-5" />
              <span className="font-semibold">
                {t("onlineSection.pickupAddress")}
              </span>
              <span>{t("onlineSection.addressValue")}</span>
            </p>
          </div>
        </div>

        <div className="flex gap-4 sm:gap-6 text-[15px] sm:text-[16px] tracking-[0.05em] flex-wrap">
          
            <h3  className="cursor-pointer hover:text-[#756F63]" onClick={() => hadleScroll("trufels")}>
              {t('onlineSection.categories.0')}
            </h3>

            <h3  className="cursor-pointer hover:text-[#756F63]" onClick={() => hadleScroll("desserts")}>
              {t('onlineSection.categories.1')}
            </h3>

          
        </div>
      </div>

      <ModalBlock />
    </section>
  );
}

export default OnlineSection;
