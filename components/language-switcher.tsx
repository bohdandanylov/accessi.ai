"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Globe } from "lucide-react"
import { useTranslation, type Language } from "@/hooks/useTranslation"

const languages = {
  en: { name: "🇺🇸 English", flag: "🇺🇸", shortName: "English" },
  fr: { name: "🇫🇷 Français", flag: "🇫🇷", shortName: "Français" },
  es: { name: "🇪🇸 Español", flag: "🇪🇸", shortName: "Español" },
  de: { name: "🇩🇪 Deutsch", flag: "🇩🇪", shortName: "Deutsch" },
  zh: { name: "🇨🇳 中文", flag: "🇨🇳", shortName: "中文" },
}

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 border-gray-300 text-gray-700 hover:bg-gray-50"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{languages[language].shortName}</span>
        <span className="sm:hidden">{languages[language].flag}</span>
        <ChevronDown className="w-3 h-3" />
      </Button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-[60]" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-[70]">
            {Object.entries(languages).map(([code, lang]) => (
              <button
                key={code}
                onClick={() => {
                  changeLanguage(code as Language)
                  setIsOpen(false)
                }}
                className={`w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-3 first:rounded-t-lg last:rounded-b-lg ${
                  language === code ? "bg-blue-50 text-blue-600" : "text-gray-700"
                }`}
              >
                <span className="text-sm">{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
