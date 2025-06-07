"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type CareerLevel = "entry" | "mid" | "expert"

interface CareerSelectorProps {
  value: CareerLevel
  onChange: (level: CareerLevel) => void
}

export default function CareerSelector({ value, onChange }: CareerSelectorProps) {
  const levels = [
    {
      id: "entry" as CareerLevel,
      title: "Entry Level",
      description: "0-2 years experience",
      icon: "🌱",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      id: "mid" as CareerLevel,
      title: "Mid Level",
      description: "3-7 years experience",
      icon: "🚀",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      id: "expert" as CareerLevel,
      title: "Expert Level",
      description: "8+ years experience",
      icon: "⭐",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-slate-900 mb-2">Select Your Career Level</h3>
        <p className="text-slate-600">This helps our AI tailor the perfect enhancements for your experience</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {levels.map((level) => (
          <Card
            key={level.id}
            className={`cursor-pointer transition-all duration-300 hover:scale-105 border-2 ${
              value === level.id
                ? "border-primary-500 bg-primary-50 shadow-lg shadow-primary-500/20"
                : "border-slate-200 hover:border-slate-300 bg-white/80 backdrop-blur-sm"
            }`}
            onClick={() => onChange(level.id)}
          >
            <CardContent className="p-6 text-center">
              <div className="space-y-4">
                <div className="text-4xl mb-2">{level.icon}</div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg mb-1">{level.title}</h4>
                  <p className="text-sm text-slate-600">{level.description}</p>
                </div>
                {value === level.id && (
                  <Badge className={`bg-gradient-to-r ${level.gradient} text-white border-0 animate-scale-in`}>
                    Selected
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
