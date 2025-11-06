import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div id="footer">
      <div className="cursor-pointer">
        <div className="bg-[#f7f5f0] py-[50px] flex flex-col gap-10 items-center justify-center px-4">
          <div className="text-center mb-8 flex flex-col justify-center items-center gap-2">
            <h2 className="text-5xl md:text-4xl font-serif text-[#B1ADA6] mb-2 leading-[1.4em] ">
              {t("contactPage.title")}
            </h2>
            <p className="text-[#C7C4BF] text-sm md:text-base mb-2">
              {t("contactPage.info")}
            </p>
            <div className="border-b border-gray-300 w-16 mx-auto flex justify-center items-center"></div>
          </div>

          <p className="text-gray-500 text-center mb-6 max-w-md">
            {t("contactPage.subtitle")}
          </p>

          <form className="flex flex-col md:flex-row gap-4 max-w-4xl w-full">
            <div className="flex flex-col gap-4 md:w-1/2">
              <input
                type="text"
                placeholder={t("contactPage.name")}
                className="border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
              />
              <input
                type="email"
                placeholder={t("contactPage.email")}
                className="border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
              />
              <input
                type="tel"
                placeholder={t("contactPage.phone")}
                className="border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
              />
            </div>
            <div className="flex flex-col md:w-1/2">
              <textarea
                placeholder={t("contactPage.message")}
                className="border border-gray-300 px-4 py-2 h-full resize-none focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
              ></textarea>
            </div>
          </form>

          <button className="mt-4 bg-gray-600 text-white cursor-pointer px-6 py-2 rounded hover:bg-gray-700 transition-colors">
            {t("contactPage.submit")}
          </button>

          <footer className="mt-12 text-center text-gray-500 text-sm">
            {t("contactPage.footer")}
            <a href="https://wix.com" className="underline">
              {t("contactPage.footer_link")}
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
