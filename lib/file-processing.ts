import { PDFDocument } from "pdf-lib"
import mammoth from "mammoth"

export async function extractTextFromPdf(file: File): Promise<string> {
  try {
    const arrayBuffer = await file.arrayBuffer()
    const pdfDoc = await PDFDocument.load(arrayBuffer)

    // This is a simplified version - in a real implementation,
    // you would use a more robust PDF text extraction library
    // like pdf-parse or pdfjs-dist

    // For now, we'll return a placeholder
    return "Sample PDF content extracted. In a real implementation, this would contain the actual text from the PDF."
  } catch (error) {
    console.error("Error extracting text from PDF:", error)
    throw new Error("Failed to extract text from PDF")
  }
}

export async function extractTextFromDocx(file: File): Promise<string> {
  try {
    const arrayBuffer = await file.arrayBuffer()
    const result = await mammoth.extractRawText({ arrayBuffer })
    return result.value
  } catch (error) {
    console.error("Error extracting text from DOCX:", error)
    throw new Error("Failed to extract text from DOCX")
  }
}
