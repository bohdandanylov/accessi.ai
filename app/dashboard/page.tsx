"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  BarChart3,
  Globe,
  Settings,
  LogOut,
  Plus,
  Eye,
  Download,
  AlertCircle,
  CheckCircle,
  Clock,
  Menu,
  X,
} from "lucide-react"

interface User {
  name: string
  email: string
}

interface Website {
  id: string
  url: string
  score: number
  lastScan: string
  status: "scanning" | "completed" | "error"
  issues: number
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [websites, setWebsites] = useState<Website[]>([
    {
      id: "1",
      url: "https://mywebsite.com",
      score: 87,
      lastScan: "2024-01-15",
      status: "completed",
      issues: 5,
    },
    {
      id: "2",
      url: "https://blog.mywebsite.com",
      score: 92,
      lastScan: "2024-01-14",
      status: "completed",
      issues: 2,
    },
    {
      id: "3",
      url: "https://shop.mywebsite.com",
      score: 0,
      lastScan: "2024-01-15",
      status: "scanning",
      issues: 0,
    },
  ])

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      window.location.href = "/auth/login"
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    window.location.href = "/"
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
      case "scanning":
        return <Clock className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
      case "error":
        return <AlertCircle className="w-3 h-3 md:w-4 md:h-4 text-red-600" />
      default:
        return null
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  if (!user) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div
                className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => (window.location.href = "/")}
              >
                <div
                  className="w-6 h-6 md:w-8 md:h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#5409DA" }}
                >
                  <Target className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <span className="text-lg md:text-xl font-bold text-gray-900">AccessiAI</span>
              </div>
            </div>

            {/* Desktop Header */}
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-gray-700 text-sm">Welcome, {user.name}</span>
              <Button variant="outline" size="sm" onClick={handleLogout} className="flex items-center space-x-2">
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 bg-white pb-4">
              <div className="px-4 py-4 space-y-4">
                <div className="text-sm text-gray-700">Welcome, {user.name}</div>
                <Button
                  variant="outline"
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center space-x-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-600">Total Websites</p>
                  <p className="text-xl md:text-2xl font-bold text-gray-900">{websites.length}</p>
                </div>
                <Globe className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-600">Average Score</p>
                  <p className="text-xl md:text-2xl font-bold text-gray-900">
                    {Math.round(
                      websites.filter((w) => w.status === "completed").reduce((acc, w) => acc + w.score, 0) /
                        websites.filter((w) => w.status === "completed").length,
                    ) || 0}
                  </p>
                </div>
                <BarChart3 className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-600">Total Issues</p>
                  <p className="text-xl md:text-2xl font-bold text-gray-900">
                    {websites.reduce((acc, w) => acc + w.issues, 0)}
                  </p>
                </div>
                <AlertCircle className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-600">Scans This Month</p>
                  <p className="text-xl md:text-2xl font-bold text-gray-900">12</p>
                </div>
                <Target className="w-6 h-6 md:w-8 md:h-8" style={{ color: "#5409DA" }} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Websites List */}
        <Card>
          <CardHeader className="p-4 md:p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
              <CardTitle className="text-lg md:text-xl">Your Websites</CardTitle>
              <Button
                className="text-white transition-all duration-200 hover:shadow-lg w-full sm:w-auto"
                style={{ backgroundColor: "#5409DA" }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#4A08C7")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#5409DA")}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Website
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            <div className="space-y-4">
              {websites.map((website) => (
                <div
                  key={website.id}
                  className="flex flex-col md:flex-row md:items-center md:justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 space-y-3 md:space-y-0"
                >
                  <div className="flex items-center space-x-3 md:space-x-4">
                    {getStatusIcon(website.status)}
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium text-gray-900 text-sm md:text-base truncate">{website.url}</h3>
                      <p className="text-xs md:text-sm text-gray-500">
                        Last scan: {new Date(website.lastScan).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end space-x-4">
                    {website.status === "completed" && (
                      <>
                        <div className="text-center">
                          <p className={`text-lg md:text-2xl font-bold ${getScoreColor(website.score)}`}>
                            {website.score}
                          </p>
                          <p className="text-xs text-gray-500">Score</p>
                        </div>

                        <Badge
                          variant={website.issues > 5 ? "destructive" : website.issues > 0 ? "secondary" : "default"}
                          className="text-xs"
                        >
                          {website.issues} issues
                        </Badge>
                      </>
                    )}

                    {website.status === "scanning" && (
                      <Badge variant="secondary" className="text-xs">
                        Scanning...
                      </Badge>
                    )}

                    <div className="flex space-x-1 md:space-x-2">
                      <Button variant="outline" size="sm" className="p-2">
                        <Eye className="w-3 h-3 md:w-4 md:h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="p-2">
                        <Download className="w-3 h-3 md:w-4 md:h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="p-2">
                        <Settings className="w-3 h-3 md:w-4 md:h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
