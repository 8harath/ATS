"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Heart, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We believe everyone deserves access to quality resume optimization tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <Card className="border-2 border-slate-200 hover:border-primary-300 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">Free Forever</CardTitle>
              <div className="text-4xl font-bold text-slate-900 mt-4">
                $0
                <span className="text-lg font-normal text-slate-600">/month</span>
              </div>
              <p className="text-slate-600 mt-2">Perfect for job seekers</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  "Unlimited resume uploads",
                  "AI-powered content enhancement",
                  "ATS optimization",
                  "Professional PDF generation",
                  "Career-level customization",
                  "Privacy-first approach",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white">
                  Start Using Now
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Support Plan */}
          <Card className="border-2 border-primary-300 bg-gradient-to-br from-primary-50 to-purple-50 hover:shadow-lg transition-all duration-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Support the Project
              </span>
            </div>
            <CardHeader className="text-center pb-8 pt-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">Supporter</CardTitle>
              <div className="text-4xl font-bold text-slate-900 mt-4">
                $5+
                <span className="text-lg font-normal text-slate-600">/one-time</span>
              </div>
              <p className="text-slate-600 mt-2">Help us keep it free</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  "Everything in Free plan",
                  "Support open-source development",
                  "Help maintain server costs",
                  "Enable future improvements",
                  "Join our community of supporters",
                  "Feel good about helping others",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary-600 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <Button className="w-full bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white">
                  <Heart className="h-4 w-4 mr-2" />
                  Support Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 max-w-2xl mx-auto">
            This project is completely free and open-source. Your support helps us cover server costs and continue
            improving the tool for everyone.
          </p>
        </div>
      </div>
    </section>
  )
}
