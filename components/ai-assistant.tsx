"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "ai"
  timestamp: Date
}

const predefinedResponses = {
  "what is accessibility":
    "Web accessibility means designing websites and apps that can be used by everyone, including people with disabilities. This includes visual, auditory, motor, and cognitive impairments. AccessiAI helps you identify and fix accessibility issues automatically!",
  "how does accessiai work":
    "AccessiAI uses advanced AI to scan your website and identify accessibility issues. It provides a score from 0-100, highlights specific problems, and gives you AI-powered code suggestions to fix them. Simply install our Chrome extension and start scanning!",
  "what is wcag":
    "WCAG (Web Content Accessibility Guidelines) are international standards for web accessibility. They provide guidelines for making web content more accessible to people with disabilities. AccessiAI checks your site against WCAG 2.1 AA standards.",
  pricing:
    "We offer two plans: Startup at $49/month (up to 10 pages, basic reporting) and Agency at $149/month (unlimited pages, advanced features, team collaboration). Both include AI-powered suggestions and detailed reports!",
  "free trial":
    "Yes! You can start with a free trial. Simply sign up and you'll get access to scan your first website and see how AccessiAI works. No credit card required to get started.",
  "what issues does it find":
    "AccessiAI finds various accessibility issues including missing alt text, poor color contrast, improper heading structure, missing form labels, keyboard navigation problems, and much more. It provides specific code fixes for each issue.",
  "how accurate is it":
    "Our AI is trained on WCAG guidelines and real-world accessibility patterns. It achieves 95%+ accuracy in identifying common accessibility issues and provides contextual, actionable suggestions for fixes.",
  support:
    "We offer email support for all users, with priority support for Agency plan customers. You can also check our documentation or ask me any questions right here!",
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm your AccessiAI assistant. I can help you with questions about web accessibility, our features, pricing, and more. What would you like to know?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const findBestResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    // Check for exact matches first
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (message.includes(key)) {
        return response
      }
    }

    // Check for related keywords
    if (message.includes("price") || message.includes("cost") || message.includes("plan")) {
      return predefinedResponses["pricing"]
    }

    if (message.includes("trial") || message.includes("free")) {
      return predefinedResponses["free trial"]
    }

    if (message.includes("help") || message.includes("support") || message.includes("contact")) {
      return predefinedResponses["support"]
    }

    if (message.includes("scan") || message.includes("work") || message.includes("how")) {
      return predefinedResponses["how does accessiai work"]
    }

    if (message.includes("issue") || message.includes("problem") || message.includes("find")) {
      return predefinedResponses["what issues does it find"]
    }

    // Default response
    return "I'd be happy to help! I can answer questions about web accessibility, how AccessiAI works, our pricing plans, WCAG guidelines, and more. Try asking me about 'what is accessibility', 'how does AccessiAI work', or 'pricing'."
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(
      () => {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: findBestResponse(inputValue),
          sender: "ai",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, aiResponse])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    ) // Random delay between 1-2 seconds
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 shadow-lg text-white transition-all duration-200 hover:shadow-xl"
          style={{ backgroundColor: "#5409DA" }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#4A08C7")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#5409DA")}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-80 shadow-xl transition-all duration-300 ${isMinimized ? "h-16" : "h-96"}`}>
        <CardHeader className="p-4 border-b" style={{ backgroundColor: "#5409DA" }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="w-5 h-5 text-white" />
              <CardTitle className="text-white text-sm">AccessiAI Assistant</CardTitle>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 p-1 h-auto"
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1 h-auto"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <>
            <CardContent className="p-0 h-64 overflow-y-auto">
              <div className="p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === "user" ? "text-white" : "bg-gray-100 text-gray-900"
                      }`}
                      style={message.sender === "user" ? { backgroundColor: "#5409DA" } : {}}
                    >
                      <div className="flex items-start space-x-2">
                        {message.sender === "ai" && <Bot className="w-4 h-4 mt-0.5 text-gray-600" />}
                        {message.sender === "user" && <User className="w-4 h-4 mt-0.5 text-white" />}
                        <p className="text-sm leading-relaxed">{message.text}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Bot className="w-4 h-4 text-gray-600" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </CardContent>

            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about accessibility..."
                  className="flex-1 text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="text-white"
                  style={{ backgroundColor: "#5409DA" }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#4A08C7")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#5409DA")}
                  disabled={!inputValue.trim() || isTyping}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  )
}
