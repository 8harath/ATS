import { type NextRequest, NextResponse } from "next/server"
import { generatePdf } from "@/lib/pdf-generator"

export async function POST(request: NextRequest) {
  try {
    const { content } = await request.json()

    if (!content) {
      return new NextResponse(JSON.stringify({ message: "No content provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    const pdfBytes = await generatePdf(content)

    if (!pdfBytes) {
      return new NextResponse(JSON.stringify({ message: "Failed to generate PDF" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      })
    }

    return new NextResponse(pdfBytes, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=resume.pdf",
      },
    })
  } catch (error) {
    console.error("Error generating PDF:", error)
    return new NextResponse(JSON.stringify({ message: "Error generating PDF" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
