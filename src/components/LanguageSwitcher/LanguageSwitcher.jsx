import { useTranslation } from "react-i18next"

function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const changeLanguage = (lang) => {
  i18n.changeLanguage(lang)

  const currentPath = window.location.pathname
  const segments = currentPath.split("/").filter(Boolean)

  console.log(segments, 'segment');
  console.log(currentPath, 'current');
  

  // Remove existing lang prefix if it exists (like 'en', 'ru', 'hy')
  const supportedLangs = ["en", "ru", "hy"]
  if (supportedLangs.includes(segments[0])) {
    segments.shift()
  }

  // Build new URL with selected language
  const newPath = `/${lang}/${segments.join("/")}`
  window.history.pushState({}, "", newPath)
  
  localStorage.setItem("lng", lang)
}

  return (
    <div className="flex gap-3 text-sm">
      {[
        { code: "hy", label: "Հայ" },
        { code: "en", label: "EN" },
        { code: "ru", label: "РУ" },
      ].map(({ code, label }) => (
        <button
          key={code}
          onClick={() => changeLanguage(code)}
          className={`px-3 py-1 max-sm:px-1.5 max-sm:py-0.5 max-sm:text-[12px] rounded-md font-semibold border border-[#cfcfcf] 
            hover:bg-[#f5f5f5] hover:text-[#333] transition
            ${i18n.language === code ? "bg-[#756F63] text-white border-[#756F63]" : "text-[#c7c4be]"}
          `}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
