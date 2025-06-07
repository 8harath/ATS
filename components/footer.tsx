"use client"

import { Heart, Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center space-y-6">
          {/* Creator Credit */}
          <div className="flex items-center justify-center space-x-3">
            <span className="text-slate-300">Crafted with</span>
            <Heart className="h-5 w-5 text-red-400 animate-pulse" />
            <span className="text-slate-300">by</span>
            <span className="font-bold text-white text-lg">Bharath K</span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/bharathk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/bharathk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:bharath@example.com"
              className="text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-slate-400 text-sm">© {currentYear} ResumeAI. Empowering careers worldwide.</div>
        </div>
      </div>
    </footer>
  )
}
