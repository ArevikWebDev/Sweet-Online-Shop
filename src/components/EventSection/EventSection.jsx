import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";

function EventSection() {
  const { t } = useTranslation();

  return (
    <section className="px-6 py-12 md:py-20 flex justify-center items-center text-center">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 w-full max-w-6xl text-center">
        <div className="text-[rgb(117,111,99)] flex flex-col justify-center items-center gap-8 md:items-start text-center md:text-left">
          <div className="flex flex-col gap-1 items-center md:items-start">
            <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
              {t("eventSection.title")}
            </h1>
            <span className="text-sm tracking-wider">
              {t("eventSection.subtitle")}
            </span>
            <hr className="border-gray-300 mb-6 w-20 h-[5px]" />
          </div>
          <div className="max-w-md">
            <span className="text-sm leading-relaxed">
              {t("eventSection.text")}
            </span>
          </div>
          <NavLink to="/menu">
            <span className="text-sm text-[rgb(173,169,160)] hover:text-[rgb(83,81,78)] transition-colors duration-300">
              {t("eventSection.button")}
            </span>
          </NavLink>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-sm md:max-w-[500px]">
          <img src={img1} alt="event1" className="w-full h-full object-cover" />
          <img src={img2} alt="event2" className="w-full h-full object-cover" />
          <img src={img3} alt="event3" className="w-full h-full object-cover" />
          <img src={img4} alt="event4" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export default EventSection;
