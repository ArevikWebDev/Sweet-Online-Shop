import React from "react";
import { useTranslation } from "react-i18next";

import img5 from "../../assets/images/img5.jpg";
import img7 from "../../assets/images/img7.jpg";

function CacaoSection() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-center gap-16">
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
  <img
    src={img7}
    alt={t("cacao.title")}
    className="w-full sm:w-[180px] md:w-[200px] h-[250px] sm:h-[400px] md:h-[550px] object-cover rounded-md shadow-sm"
  />
  <img
    src={img5}
    alt={t("cacao.title")}
    className="w-full sm:w-[180px] md:w-[200px] h-[250px] sm:h-[400px] md:h-[550px] object-cover rounded-md shadow-sm"
  />
</div>

      <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center items-center gap-4">
        <h2 className="text-4xl font-serif text-[#756F63] mb-4">{t("cacao.title")}</h2>
        <p className="uppercase text-[#756F63] tracking-wider text-sm mb-6">{t("cacao.subtitle")}</p>
        <div className="w-18 h-[0.5px] bg-[#756F63] mx-auto lg:mx-0 mb-8"></div>
        <p className="text-[#756F63] leading-relaxed max-w-lg mx-auto lg:mx-0 text-center">
          {t("cacao.description")}
        </p>
      </div>
    </section>
  );
}

export default CacaoSection;
