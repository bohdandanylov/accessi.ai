"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AIAssistant from "@/components/ai-assistant"
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
} from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#5409DA" }}>
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">AccessiAI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
              How it Works
            </a>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
                onClick={() => (window.location.href = "/auth/login")}
              >
                Login
              </Button>
              <Button
                style={{ backgroundColor: "#5409DA" }}
                className="hover:opacity-90 text-white transition-all duration-200 hover:shadow-lg"
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#4A08C7")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#5409DA")}
                onClick={() => (window.location.href = "/auth/signup")}
              >
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">AI-Powered Accessibility Testing</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 whitespace-nowrap">
            Make your website accessible with AI.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Automatically scan your site, get a real-time accessibility score, and receive AI-powered code fixes to help
            you stay compliant and inclusive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              style={{ backgroundColor: "#5409DA" }}
              className="text-white px-8 py-4 text-lg transition-all duration-200 hover:shadow-lg"
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#4A08C7")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#5409DA")}
              onClick={() => (window.location.href = "/auth/signup")}
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg"
            >
              Watch Demo
            </Button>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500">Accessibility Score</span>
              <span className="text-2xl font-bold text-green-600">87/100</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
              <div className="bg-green-500 h-3 rounded-full" style={{ width: "87%" }}></div>
            </div>
            <div className="text-left space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Missing alt text on 3 images</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Low color contrast in navigation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Form labels not properly associated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">The Accessibility Crisis</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-red-500 mb-2">95%</div>
              <p className="text-gray-600">of websites fail accessibility standards</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">$13B</div>
              <p className="text-gray-600">lost annually due to inaccessible sites</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2">15%</div>
              <p className="text-gray-600">of the global population has a disability</p>
            </div>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Poor accessibility doesn't just exclude users—it hurts your SEO rankings, reduces conversion rates, and
            exposes your business to legal risks. Don't let accessibility issues cost you customers and revenue.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Get from problem to solution in 4 simple steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Chrome className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Install Extension</h3>
              <p className="text-gray-600">Add our Chrome extension to your browser in seconds</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scan className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Scan Pages</h3>
              <p className="text-gray-600">Click to scan any webpage for accessibility issues</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Get AI Suggestions</h3>
              <p className="text-gray-600">Receive intelligent, actionable recommendations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Fix with Code</h3>
              <p className="text-gray-600">Copy-paste ready code examples to fix issues</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need to make your website accessible</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">AI-Powered Scanning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Advanced AI analyzes your website against WCAG 2.1 guidelines
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Code Suggestions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Get specific, actionable code fixes powered by OpenAI</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Detailed Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Comprehensive accessibility reports for stakeholders</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Score Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Monitor your accessibility improvements over time</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Startup</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  $49<span className="text-lg text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">Perfect for small teams and startups</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Up to 10 pages per scan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>AI-powered suggestions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Basic reporting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Email support</span>
                </div>
                <Button
                  className="w-full mt-6 text-white transition-all duration-200 hover:shadow-lg"
                  style={{ backgroundColor: "#5409DA" }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#4A08C7")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#5409DA")}
                  onClick={() => (window.location.href = "/auth/signup")}
                >
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                Most Popular
              </Badge>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Agency</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  $149<span className="text-lg text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">For agencies and larger teams</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Unlimited page scans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Advanced AI suggestions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>White-label reports</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Priority support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Team collaboration</span>
                </div>
                <Button
                  className="w-full mt-6 text-white transition-all duration-200 hover:shadow-lg"
                  style={{ backgroundColor: "#5409DA" }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#4A08C7")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#5409DA")}
                  onClick={() => (window.location.href = "/auth/signup")}
                >
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Leading Companies</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 text-lg">
                  "AccessiAI helped us identify and fix critical accessibility issues we didn't even know existed. Our
                  compliance score improved from 60 to 95 in just two weeks."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Chen</div>
                    <div className="text-sm text-gray-600">CTO, TechStart Inc.</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 text-lg">
                  "The AI-generated code suggestions are incredibly accurate. What used to take our team days now takes
                  hours. It's a game-changer for our development workflow."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Michael Rodriguez</div>
                    <div className="text-sm text-gray-600">Lead Developer, WebCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Improve your accessibility score today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers and companies making the web more accessible with AI-powered insights.
          </p>
          <Button
            size="lg"
            className="bg-white px-8 py-4 text-lg transition-all duration-200 hover:shadow-lg hover:bg-gray-50"
            style={{ color: "#5409DA" }}
            onClick={() => (window.location.href = "/auth/signup")}
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#5409DA" }}
              >
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">AccessiAI</span>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="mailto:hello@accessiai.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>hello@accessiai.com</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AccessiAI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <AIAssistant />
    </div>
  )
}
