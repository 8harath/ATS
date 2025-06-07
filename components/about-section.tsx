"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Brain, Shield, Users, Github, Lightbulb } from "lucide-react"

export default function AboutSection() {
  const philosophyPoints = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Accessibility First",
      description: "Job searching is stressful enough. Quality resume tools shouldn't be behind paywalls.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Privacy by Design",
      description: "Your personal data stays private. We process everything securely and delete files immediately.",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI for Good",
      description: "Leveraging AI to level the playing field and help everyone present their best professional self.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Open Source",
      description: "Transparent, community-driven development. Anyone can contribute and improve the tool.",
    },
  ]

  const techStack = [
    { name: "Next.js 14", description: "React framework with App Router" },
    { name: "TypeScript", description: "Type-safe development" },
    { name: "Tailwind CSS", description: "Utility-first styling" },
    { name: "Google Gemini AI", description: "Content enhancement" },
    { name: "Vercel", description: "Deployment platform" },
    { name: "React Hook Form", description: "Form handling" },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About This Project</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Built with the philosophy that everyone deserves access to quality career tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Project Story */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold text-slate-900">
                <Lightbulb className="h-6 w-6 mr-3 text-primary-600" />
                The Story Behind ResumeAI
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                This project was born from a simple observation: job seekers often struggle with ATS systems that
                automatically filter out resumes before human eyes ever see them.
              </p>
              <p>
                Traditional resume services charge hundreds of dollars for what AI can now do in seconds. We believe
                this creates an unfair advantage for those who can afford premium services.
              </p>
              <p>
                By combining modern AI capabilities with a privacy-first approach, we've created a tool that's both
                powerful and accessible to everyone, regardless of their financial situation.
              </p>
            </CardContent>
          </Card>

          {/* Technical Implementation */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold text-slate-900">
                <Code className="h-6 w-6 mr-3 text-primary-600" />
                Technical Implementation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                Built as a modern web application using cutting-edge technologies for performance and user experience.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {techStack.map((tech, index) => (
                  <div key={index} className="bg-slate-50 p-3 rounded-lg">
                    <div className="font-medium text-slate-900 text-sm">{tech.name}</div>
                    <div className="text-xs text-slate-600">{tech.description}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Philosophy */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Our Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyPoints.map((point, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {point.icon}
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">{point.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Source */}
        <Card className="border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-purple-50">
          <CardContent className="p-8 text-center">
            <Github className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Open Source & Community Driven</h3>
            <p className="text-slate-700 max-w-2xl mx-auto mb-6 leading-relaxed">
              This project is completely open source. We believe in transparency, community collaboration, and giving
              back to the developer ecosystem. Feel free to contribute, report issues, or suggest improvements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/bharathk/resume-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-200"
              >
                <Github className="h-5 w-5 mr-2" />
                View on GitHub
              </a>
              <a
                href="https://github.com/bharathk/resume-ai/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all duration-200"
              >
                Report Issues
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
