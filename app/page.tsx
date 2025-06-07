"use client"

import { useState, useEffect } from "react"
import { FileUp, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FileUploader from "@/components/file-uploader"
import ProcessingStatus from "@/components/processing-status"
import ResultsSection from "@/components/results-section"
import CareerSelector from "@/components/career-selector"
import SupportModal from "@/components/support-modal"
import Footer from "@/components/footer"
import Header from "@/components/header"
import PricingSection from "@/components/pricing-section"
import AboutSection from "@/components/about-section"

type ProcessingStage = "idle" | "extracting" | "enhancing" | "generating" | "complete" | "error"
type CareerLevel = "entry" | "mid" | "expert"

export default function Home() {
  const [file, setFile] = useState<File | null>(null)
  const [processingStage, setProcessingStage] = useState<ProcessingStage>("idle")
  const [error, setError] = useState<string | null>(null)
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const [careerLevel, setCareerLevel] = useState<CareerLevel>("mid")
  const [showSupport, setShowSupport] = useState(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleFileSelected = (selectedFile: File | null) => {
    setFile(selectedFile)
    setError(null)
    setPdfUrl(null)
    setProcessingStage("idle")
    setProgress(0)
    setSuggestions([])
  }

  const handleConvert = async () => {
    if (!file) return

    try {
      setProcessingStage("extracting")
      setProgress(20)

      // Step 1: Upload file and extract text
      const formData = new FormData()
      formData.append("file", file)
      formData.append("careerLevel", careerLevel)

      const uploadResponse = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (!uploadResponse.ok) {
        const errorData = await uploadResponse.json()
        throw new Error(errorData.message || "Failed to extract text from resume")
      }

      const { text } = await uploadResponse.json()
      setProgress(40)
      setProcessingStage("enhancing")

      // Step 2: Enhance content with Gemini API
      const enhanceResponse = await fetch("/api/enhance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, careerLevel }),
      })

      if (!enhanceResponse.ok) {
        const errorData = await enhanceResponse.json()
        throw new Error(errorData.message || "Failed to enhance resume content")
      }

      const { enhancedContent, suggestions: aiSuggestions } = await enhanceResponse.json()
      setSuggestions(aiSuggestions || [])
      setProgress(70)
      setProcessingStage("generating")

      // Step 3: Generate PDF
      const generateResponse = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: enhancedContent, careerLevel }),
      })

      if (!generateResponse.ok) {
        const errorData = await generateResponse.json()
        throw new Error(errorData.message || "Failed to generate PDF")
      }

      const { pdfUrl } = await generateResponse.json()
      setProgress(100)
      setPdfUrl(pdfUrl)
      setProcessingStage("complete")
    } catch (err) {
      console.error("Error processing resume:", err)
      setError(err instanceof Error ? err.message : "An unexpected error occurred")
      setProcessingStage("error")
    }
  };

  const resetForm = () => {
    setFile(null)
    setError(null)
    setPdfUrl(null)
    setProcessingStage("idle")
    setProgress(0)
    setSuggestions([])
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <Header onSupportClick={() => setShowSupport(true)} />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-primary-50 border border-primary-200 rounded-full text-primary-700 text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Resume Enhancement
              </div>

              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-primary-600 to-slate-900 bg-clip-text text-transparent mb-6 leading-tight">
                Transform Your Resume
                <span className="block text-4xl md:text-6xl mt-2">Get Hired Faster</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                A free, open-source tool that uses AI to analyze and optimize your resume for Applicant Tracking Systems (ATS).
              </p>

            {/* Career Level Selector */}
            {processingStage === "idle" && (
              <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <CareerSelector value={careerLevel} onChange={setCareerLevel} />
              </div>
            )}

            {/* Main Upload Card */}
            <div className="max-w-4xl mx-auto animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-2xl shadow-primary-500/10">
                <CardContent className="p-8 md:p-12">
                  {processingStage === "idle" || processingStage === "error" ? (
                    <FileUploader file={file} onFileSelected={handleFileSelected} error={error} />
                  ) : processingStage === "complete" ? (
                    <ResultsSection pdfUrl={pdfUrl} onReset={resetForm} suggestions={suggestions} />
                  ) : (
                    <ProcessingStatus stage={processingStage} progress={progress} />
                  )}

                  {processingStage === "idle" && (
                    <div className="mt-8 flex justify-center">
                      <Button
                        onClick={handleConvert}
                        disabled={!file}
                        size="lg"
                        className="bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <FileUp className="mr-3 h-5 w-5 group-hover:animate-bounce-gentle" />
                        Transform My Resume
                        <Sparkles className="ml-3 h-5 w-5 group-hover:animate-bounce-gentle" />
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <PricingSection />

        {/* About Section */}
        <AboutSection />
      </main>

      <Footer />
      <SupportModal isOpen={showSupport} onClose={() => setShowSupport(false)} />
    </div>
  )
}
