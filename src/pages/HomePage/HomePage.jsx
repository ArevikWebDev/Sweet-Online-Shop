import bg2 from "../../assets/images/bg2.jpg"
import bg6 from "../../assets/images/bg6.avif"
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent"
import HistorySection from "../../components/HistorySection/HistorySection"
import EventSection from "../../components/EventSection/EventSection"
import { useTranslation } from "react-i18next"
import CacaoSection from "@/components/CacaoSection/CacaoSection"

function HomePage() {
  const {t} = useTranslation()
  return (
    <div className="home_page w-full overflow-hidden cursor-pointer">
      <div className="container mx-auto">
        {/* Header */}
        <HeaderComponent />

        {/* History Section */}
        <HistorySection />

        {/* First background image section */}
        <section
          className="relative h-[350px] sm:h-[450px] md:h-[550px] w-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </section>

        {/* Events */}
        <EventSection />

        <section
          className="relative w-full bg-cover bg-center bg-fixed flex items-center justify-center"
          style={{ backgroundImage: `url(${bg6})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>

          {/* Text content */}
          <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 text-center text-white px-4 py-20">
      <span className="text-[18px] sm:text-[22px] md:text-[26px] leading-relaxed italic">
        {t("quoteSection.quote")}
      </span>
      <span className="text-[14px] sm:text-[16px] md:text-[18px] font-light tracking-wide">
        {t("quoteSection.author")}
      </span>
    </div>
        </section>
          
          {/* Cacao */}

          <CacaoSection/>

      </div>
    </div>
  )
}

export default HomePage
