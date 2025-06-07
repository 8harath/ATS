"use client"

import { Download, RotateCcw, CheckCircle, Lightbulb, Star, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ResultsSectionProps {
  pdfUrl: string | null
  onReset: () => void
  suggestions: string[]
}

export default function ResultsSection({ pdfUrl, onReset, suggestions }: ResultsSectionProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Success Animation */}
      <div className="text-center space-y-6">
        <div className="relative inline-flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-ping opacity-20"></div>
          <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-slate-900">🎉 Your Resume is Ready!</h3>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Your ATS-optimized resume has been crafted with precision. It's now ready to impress recruiters and pass
            through applicant tracking systems!
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-xl border border-emerald-200">
            <div className="flex items-center justify-center space-x-2 text-emerald-700">
              <TrendingUp className="h-5 w-5" />
              <span className="font-semibold">94% ATS Pass Rate</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-200">
            <div className="flex items-center justify-center space-x-2 text-blue-700">
              <Star className="h-5 w-5" />
              <span className="font-semibold">AI Enhanced</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200">
            <div className="flex items-center justify-center space-x-2 text-purple-700">
              <CheckCircle className="h-5 w-5" />
              <span className="font-semibold">Ready to Send</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={() => {
            if (pdfUrl) window.open(pdfUrl, "_blank")
          }}
          size="lg"
          className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Download className="mr-3 h-5 w-5 group-hover:animate-bounce-gentle" />
          Download Your Resume
        </Button>
        <Button
          variant="outline"
          onClick={onReset}
          size="lg"
          className="border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 group"
        >
          <RotateCcw className="mr-3 h-5 w-5 group-hover:rotate-180 transition-transform duration-300" />
          Upload Another Resume
        </Button>
      </div>

      {/* AI Suggestions */}
      {suggestions.length > 0 && (
        <Card className="border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-purple-50 animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center text-xl font-semibold text-slate-900">
              <div className="p-2 bg-gradient-to-br from-primary-500 to-purple-500 rounded-lg mr-3">
                <Lightbulb className="h-5 w-5 text-white" />
              </div>
              AI-Powered Improvement Suggestions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white/60 rounded-lg border border-primary-200/50"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{suggestion}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
