import img6 from "../../assets/images/img6.jpg";
import { useTranslation } from "react-i18next";

function HistorySection() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col md:flex-row items-center justify-around h-full w-full px-6 md:px-20 md:py-24 md:gap-16">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
        <div className="flex justify-center items-center w-full md:w-auto">
          <img
            src={img6}
            alt={t("historySection.alt")}
            className="w-[460px] h-[600px] object-cover shadow-lg"
          />
        </div>

        <div className="flex-1 gap-5 justify-center items-center text-center md:text-left">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-3xl font-serif text-[rgb(117,111,99)] mb-2 flex justify-center">
              {t("historySection.title")}
            </h2>
            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="uppercase text-sm md:text-base text-[rgb(117,111,99)] mb-4 leading-tight flex flex-col justify-center items-center">
                {t("historySection.name")}
              </p>
              <hr className="border-gray-300 mb-6 w-[88px] h-[5px] flex justify-center items-center" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-10">
            <p className="text-[6px] md:text-[18px] text-[rgb(117,111,99)] leading-[1.7em] max-w-[450px] text-center">
              {t("historySection.paragraph1")}
            </p>
            <p className="text-[rgb(117,111,99)] text-base md:text-sm leading-[1.7em] max-w-[450px] text-center mt-4 md:text-[14px]">
              {t("historySection.paragraph2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistorySection;
