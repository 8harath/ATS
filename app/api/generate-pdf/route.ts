import { type NextRequest, NextResponse } from "next/server"
import { generatePdf } from "@/lib/pdf-generator"

export async function POST(request: NextRequest) {
  try {
    const { content } = await request.json()

    if (!content) {
      return NextResponse.json({ message: "No content provided" }, { status: 400 })
    }

    const pdfUrl = await generatePdf(content)

    if (!pdfUrl) {
      return NextResponse.json({ message: "Failed to generate PDF" }, { status: 500 })
    }

    return NextResponse.json({ pdfUrl })
  } catch (error) {
    console.error("Error generating PDF:", error)
    return NextResponse.json({ message: "Error generating PDF" }, { status: 500 })
  }
}
