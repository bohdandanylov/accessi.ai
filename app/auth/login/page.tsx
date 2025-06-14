"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Target, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Store user session (in real app, use proper auth)
    localStorage.setItem("user", JSON.stringify({ email, name: "John Doe" }))

    // Redirect to dashboard
    window.location.href = "/dashboard"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-4">
        <CardHeader className="text-center">
          <div
            className="flex items-center justify-center space-x-2 mb-4 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => (window.location.href = "/")}
          >
            <div
              className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "#5409DA" }}
            >
              <Target className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-gray-900">AccessiAI</span>
          </div>
          <CardTitle className="text-xl md:text-2xl">Welcome back</CardTitle>
          <p className="text-gray-600 text-sm md:text-base">Sign in to your account</p>
        </CardHeader>
        <CardContent className="px-4 md:px-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm md:text-base">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-10 md:h-12 text-sm md:text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm md:text-base">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-10 md:h-12 text-sm md:text-base pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 text-gray-500" />
                  ) : (
                    <Eye className="w-4 h-4 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="remember" className="rounded" />
                <Label htmlFor="remember" className="text-xs md:text-sm">
                  Remember me
                </Label>
              </div>
              <Link
                href="/auth/forgot-password"
                className="text-xs md:text-sm hover:underline"
                style={{ color: "#5409DA" }}
              >
                Forgot password?
              </Link>
            </div>
            <Button
              type="submit"
              className="w-full h-10 md:h-12 text-white transition-all duration-200 hover:shadow-lg text-sm md:text-base"
              style={{ backgroundColor: "#5409DA" }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#4A08C7")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#5409DA")}
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm md:text-base">
              Don't have an account?{" "}
              <Link href="/auth/signup" className="font-medium hover:underline" style={{ color: "#5409DA" }}>
                Sign up
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
