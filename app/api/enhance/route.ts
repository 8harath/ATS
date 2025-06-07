import { type NextRequest, NextResponse } from "next/server"
import { enhanceResumeWithGemini } from "@/lib/gemini-api"

export async function POST(request: NextRequest) {
  try {
    const { text, careerLevel } = await request.json()

    if (!text) {
      return NextResponse.json({ message: "No text content provided" }, { status: 400 })
    }

    const { enhancedContent, suggestions } = await enhanceResumeWithGemini(text, careerLevel)

    if (!enhancedContent) {
      return NextResponse.json({ message: "Failed to enhance resume content" }, { status: 500 })
    }

    return NextResponse.json({ enhancedContent, suggestions })
  } catch (error) {
    console.error("Error enhancing resume:", error)
    return NextResponse.json({ message: "Error enhancing resume content" }, { status: 500 })
  }
}
