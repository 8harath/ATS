import { type NextRequest, NextResponse } from "next/server"
import { extractTextFromPdf, extractTextFromDocx } from "@/lib/file-processing"

export const config = {
  api: {
    bodyParser: false,
  },
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File | null

    if (!file) {
      return NextResponse.json({ message: "No file provided" }, { status: 400 })
    }

    // Validate file size (max 5MB)
    const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ message: "File too large. Maximum size is 5MB" }, { status: 400 })
    }

    // Validate file type
    const fileType = file.name.split(".").pop()?.toLowerCase()
    if (!["pdf", "docx"].includes(fileType || "")) {
      return NextResponse.json({ message: "Invalid file type. Only PDF and DOCX files are supported" }, { status: 400 })
    }

    // Extract text based on file type
    let extractedText = ""
    if (fileType === "pdf") {
      extractedText = await extractTextFromPdf(file)
    } else if (fileType === "docx") {
      extractedText = await extractTextFromDocx(file)
    }

    if (!extractedText) {
      return NextResponse.json({ message: "Failed to extract text from file" }, { status: 400 })
    }

    return NextResponse.json({ text: extractedText })
  } catch (error) {
    console.error("Error processing file:", error)
    return NextResponse.json({ message: "Error processing file" }, { status: 500 })
  }
}
