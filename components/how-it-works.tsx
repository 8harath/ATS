"use client"

import { FileText, Sparkles, FileDown, Upload, Cpu, Download } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="h-8 w-8 text-retro-orange" />,
      title: "File Upload & Validation",
      description:
        "Your resume is securely uploaded and validated for format (PDF/DOCX) and size (max 5MB). We use multipart form data handling with strict security checks.",
      technical:
        "FastAPI/Express.js with multer middleware, file type validation using magic numbers, virus scanning integration",
    },
    {
      icon: <FileText className="h-8 w-8 text-retro-sage" />,
      title: "Text Extraction",
      description:
        "Advanced OCR and parsing engines extract clean text from your document while preserving structure and formatting context.",
      technical:
        "PyMuPDF for PDFs, python-docx for Word documents, with fallback to OCR using Tesseract for image-based content",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-retro-mustard" />,
      title: "AI Enhancement",
      description:
        "Google Gemini AI analyzes your content and restructures it with quantified achievements, action verbs, and ATS-optimized keywords.",
      technical:
        "Gemini Pro API with custom prompts, JSON schema validation, rate limiting, and retry logic with exponential backoff",
    },
    {
      icon: <Cpu className="h-8 w-8 text-retro-rust" />,
      title: "Content Processing",
      description:
        "The AI-enhanced content is structured into professional sections with consistent formatting and ATS-friendly organization.",
      technical:
        "JSON schema validation, content sanitization, template engine integration, and format standardization algorithms",
    },
    {
      icon: <FileDown className="h-8 w-8 text-primary" />,
      title: "PDF Generation",
      description:
        "A professionally styled PDF is generated with optimized typography, spacing, and ATS-compatible formatting standards.",
      technical:
        "WeasyPrint/Puppeteer for PDF generation, custom CSS templates, font embedding, and accessibility compliance",
    },
    {
      icon: <Download className="h-8 w-8 text-retro-sage" />,
      title: "Secure Delivery",
      description:
        "Your optimized resume is delivered through a secure download link with automatic cleanup and privacy protection.",
      technical: "Temporary file storage, signed URLs, automatic cleanup cron jobs, and GDPR-compliant data handling",
    },
  ]

  return (
    <section className="mt-16 animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-mono text-retro-brown mb-4">How The Magic Happens ✨</h2>
        <div className="w-16 h-1 bg-retro-sage mx-auto mb-4 rounded-full"></div>
        <p className="text-lg text-retro-brown/70 max-w-2xl mx-auto">
          Curious about the technology behind your resume transformation? Here's a peek under the hood!
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <Card
            key={index}
            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-2 border-transparent hover:border-retro-orange/30 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-br from-secondary to-retro-cream group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <CardTitle className="text-lg font-semibold text-retro-brown group-hover:text-retro-orange transition-colors duration-300">
                {step.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-retro-brown/80 mb-4 leading-relaxed">{step.description}</p>
              <div className="bg-retro-cream/50 p-3 rounded-lg border-l-4 border-retro-sage">
                <p className="text-xs text-retro-brown/70 font-mono leading-relaxed">
                  <strong>Tech Stack:</strong> {step.technical}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Card className="bg-gradient-to-r from-retro-orange/10 to-retro-sage/10 border-2 border-retro-orange/20">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold text-retro-brown mb-4">🔒 Privacy & Security First</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-retro-brown/80">
              <div>
                <strong className="text-retro-rust">Data Protection:</strong> All files are processed in memory and
                automatically deleted after 1 hour. No permanent storage of your personal information.
              </div>
              <div>
                <strong className="text-retro-rust">Encryption:</strong> End-to-end encryption for all data transmission
                using TLS 1.3 and AES-256 encryption standards.
              </div>
              <div>
                <strong className="text-retro-rust">Compliance:</strong> GDPR and CCPA compliant with comprehensive
                audit logs and data processing transparency.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
