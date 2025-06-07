"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Shield, Zap, Target, Brain, FileCheck } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Analysis",
      description:
        "Advanced AI analyzes your resume structure, content, and formatting to identify improvement opportunities.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "ATS Optimization",
      description:
        "Ensures your resume passes through Applicant Tracking Systems used by 99% of Fortune 500 companies.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Smart Enhancement",
      description: "Automatically improves your achievements with quantifiable results and industry-specific keywords.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Results",
      description: "Get your optimized resume in under 2 minutes with our lightning-fast processing engine.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy First",
      description:
        "Your data is encrypted and automatically deleted after processing. We never store your personal information.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Professional Format",
      description: "Clean, modern templates that recruiters love, optimized for both digital and print viewing.",
      gradient: "from-pink-500 to-rose-500",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything You Need to Stand Out</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Our comprehensive suite of AI-powered tools ensures your resume gets noticed by both ATS systems and human
            recruiters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
