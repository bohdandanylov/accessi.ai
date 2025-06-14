"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AIAssistant from "@/components/ai-assistant"
import LanguageSwitcher from "@/components/language-switcher"
import { useTranslation } from "@/hooks/useTranslation"
import {
  Check,
  Chrome,
  Scan,
  Lightbulb,
  Code,
  BarChart3,
  FileText,
  Target,
  Zap,
  Mail,
  Github,
  Linkedin,
  Menu,
  X,
} from "lucide-react"

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-end items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-200"
              onClick={() => (window.location.href = "/auth/login")}
            >
              {t("nav.login")}
            </Button>
            <Button
              size="sm"
              style={{ backgroundColor: "#5409DA" }}
              className="text-white hover:opacity-90 transition-all duration-200 hover:shadow-lg"
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#4A08C7")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#5409DA")}
              onClick={() => (window.location.href = "/auth/signup")}
            >
              {t("nav.signUp")}
            </Button>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => (window.location.href = "/")}
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#5409DA" }}>
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">AccessiAI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t("nav.features")}
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t("nav.pricing")}
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t("nav.howItWorks")}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white/70 backdrop-blur-md">
            <div className="px-4 py-4 space-y-4">
              <a
                href="#features"
                className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.features")}
              </a>
              <a
                href="#pricing"
                className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.pricing")}
              </a>
              <a
                href="#how-it-works"
                className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.howItWorks")}
              </a>
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                  onClick={() => (window.location.href = "/auth/login")}
                >
                  {t("nav.login")}
                </Button>
                <Button
                  className="w-full text-white"
                  style={{ backgroundColor: "#5409DA" }}
                  onClick={() => (window.location.href = "/auth/signup")}
                >
                  {t("nav.signUp")}
                </Button>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 md:mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100 text-sm">{t("hero.badge")}</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            {t("hero.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12">
            <Button
              size="lg"
              style={{ backgroundColor: "#5409DA" }}
              className="text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg transition-all duration-200 hover:shadow-lg w-full sm:w-auto"
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#4A08C7")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#5409DA")}
              onClick={() => (window.location.href = "/auth/signup")}
            >
              {t("hero.startTrial")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto"
            >
              {t("hero.watchDemo")}
            </Button>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <span className="text-xs md:text-sm text-gray-500">{t("hero.accessibilityScore")}</span>
              <span className="text-xl md:text-2xl font-bold text-green-600">87/100</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 md:h-3 mb-4 md:mb-6">
              <div className="bg-green-500 h-2 md:h-3 rounded-full" style={{ width: "87%" }}></div>
            </div>
            <div className="text-left space-y-2 md:space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span className="text-xs md:text-sm text-gray-700">{t("hero.issues.altText")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                <span className="text-xs md:text-sm text-gray-700">{t("hero.issues.contrast")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span className="text-xs md:text-sm text-gray-700">{t("hero.issues.formLabels")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">{t("problem.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">95%</div>
              <p className="text-gray-600 text-sm md:text-base">{t("problem.stats.websites")}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">$13B</div>
              <p className="text-gray-600 text-sm md:text-base">{t("problem.stats.revenue")}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">15%</div>
              <p className="text-gray-600 text-sm md:text-base">{t("problem.stats.population")}</p>
            </div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{t("problem.description")}</p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-12 md:py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("howItWorks.title")}</h2>
            <p className="text-lg md:text-xl text-gray-600">{t("howItWorks.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Chrome className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {t("howItWorks.steps.install.title")}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">{t("howItWorks.steps.install.description")}</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scan className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {t("howItWorks.steps.scan.title")}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">{t("howItWorks.steps.scan.description")}</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {t("howItWorks.steps.suggestions.title")}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">{t("howItWorks.steps.suggestions.description")}</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{t("howItWorks.steps.fix.title")}</h3>
              <p className="text-gray-600 text-sm md:text-base">{t("howItWorks.steps.fix.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("features.title")}</h2>
            <p className="text-lg md:text-xl text-gray-600">{t("features.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Zap className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                </div>
                <CardTitle className="text-base md:text-lg">{t("features.items.scanning.title")}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-center text-sm md:text-base">
                  {t("features.items.scanning.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Code className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                </div>
                <CardTitle className="text-base md:text-lg">{t("features.items.suggestions.title")}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-center text-sm md:text-base">
                  {t("features.items.suggestions.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <FileText className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
                </div>
                <CardTitle className="text-base md:text-lg">{t("features.items.reports.title")}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-center text-sm md:text-base">
                  {t("features.items.reports.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                </div>
                <CardTitle className="text-base md:text-lg">{t("features.items.tracking.title")}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-center text-sm md:text-base">
                  {t("features.items.tracking.description")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 md:py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("pricing.title")}</h2>
            <p className="text-lg md:text-xl text-gray-600">{t("pricing.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-6 md:pb-8">
                <CardTitle className="text-xl md:text-2xl mb-2">{t("pricing.startup.title")}</CardTitle>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {t("pricing.startup.price")}
                  <span className="text-base md:text-lg text-gray-600">{t("pricing.startup.period")}</span>
                </div>
                <p className="text-gray-600 text-sm md:text-base">{t("pricing.startup.description")}</p>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-4">
                {(t("pricing.startup.features") as string[]).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm md:text-base">{feature}</span>
                  </div>
                ))}
                <Button
                  className="w-full mt-4 md:mt-6 text-white transition-all duration-200 hover:shadow-lg"
                  style={{ backgroundColor: "#5409DA" }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#4A08C7")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#5409DA")}
                  onClick={() => (window.location.href = "/auth/signup")}
                >
                  {t("hero.startTrial")}
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs">
                {t("pricing.agency.badge")}
              </Badge>
              <CardHeader className="text-center pb-6 md:pb-8">
                <CardTitle className="text-xl md:text-2xl mb-2">{t("pricing.agency.title")}</CardTitle>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {t("pricing.agency.price")}
                  <span className="text-base md:text-lg text-gray-600">{t("pricing.agency.period")}</span>
                </div>
                <p className="text-gray-600 text-sm md:text-base">{t("pricing.agency.description")}</p>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-4">
                {(t("pricing.agency.features") as string[]).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm md:text-base">{feature}</span>
                  </div>
                ))}
                <Button
                  className="w-full mt-4 md:mt-6 text-white transition-all duration-200 hover:shadow-lg"
                  style={{ backgroundColor: "#5409DA" }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#4A08C7")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#5409DA")}
                  onClick={() => (window.location.href = "/auth/signup")}
                >
                  {t("hero.startTrial")}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("testimonials.title")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {(t("testimonials.items") as any[]).map((testimonial, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-6 md:p-8">
                  <p className="text-gray-600 mb-4 md:mb-6 text-base md:text-lg leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.author}</div>
                      <div className="text-xs md:text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 px-4 bg-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">{t("cta.title")}</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            {t("cta.description")}
          </p>
          <Button
            size="lg"
            className="bg-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg transition-all duration-200 hover:shadow-lg hover:bg-gray-50 w-full sm:w-auto"
            style={{ color: "#5409DA" }}
            onClick={() => (window.location.href = "/auth/signup")}
          >
            {t("cta.button")}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#5409DA" }}
              >
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">AccessiAI</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href={`mailto:${t("footer.email")}`}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm md:text-base"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                <span>{t("footer.email")}</span>
              </a>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400 text-sm">
            <p>{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <AIAssistant />
    </div>
  )
}
