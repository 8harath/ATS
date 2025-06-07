"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Menu, X } from "lucide-react"

interface HeaderProps {
  onSupportClick: () => void
}

export default function Header({ onSupportClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-primary-600 bg-clip-text text-transparent">
              ResumeAI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-primary-600 transition-colors duration-200">
              Features
            </a>
            <a href="#pricing" className="text-slate-600 hover:text-primary-600 transition-colors duration-200">
              Pricing
            </a>
            <a href="#about" className="text-slate-600 hover:text-primary-600 transition-colors duration-200">
              About
            </a>
          </nav>

          {/* Support Button */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={onSupportClick}
              variant="outline"
              size="sm"
              className="hidden sm:flex border-primary-200 text-primary-600 hover:bg-primary-50 hover:border-primary-300 transition-all duration-200 group"
            >
              <Heart className="w-4 h-4 mr-2 group-hover:text-red-500 transition-colors duration-200" />
              Support Us
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-slate-200/50 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-slate-600 hover:text-primary-600 transition-colors duration-200">
                Features
              </a>
              <a href="#pricing" className="text-slate-600 hover:text-primary-600 transition-colors duration-200">
                Pricing
              </a>
              <a href="#about" className="text-slate-600 hover:text-primary-600 transition-colors duration-200">
                About
              </a>
              <Button
                onClick={onSupportClick}
                variant="outline"
                size="sm"
                className="self-start border-primary-200 text-primary-600 hover:bg-primary-50"
              >
                <Heart className="w-4 h-4 mr-2" />
                Support Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
