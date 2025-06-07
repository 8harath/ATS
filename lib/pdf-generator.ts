import { PDFDocument, StandardFonts, rgb } from "pdf-lib"

/**
 * Generates a PDF from the provided resume content (plain text or structured object).
 * Returns the PDF as a Uint8Array (file bytes).
 */
export async function generatePdf(content: string): Promise<Uint8Array> {
  try {
    const pdfDoc = await PDFDocument.create()
    const page = pdfDoc.addPage([595.28, 841.89]) // A4 size in points
    const { width, height } = page.getSize()
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

    // Simple formatting: add title and content
    const fontSize = 18
    const margin = 40
    let y = height - margin

    // Title
    page.drawText("Resume", {
      x: margin,
      y,
      size: fontSize + 6,
      font,
      color: rgb(0, 0.2, 0.6),
    })
    y -= fontSize + 16

    // Content (split into lines for basic wrapping)
    const lines = content.split(/\r?\n/)
    for (const line of lines) {
      if (y < margin + fontSize) break // avoid overflow
      page.drawText(line, {
        x: margin,
        y,
        size: fontSize,
        font,
        color: rgb(0, 0, 0),
      })
      y -= fontSize + 6
    }

    const pdfBytes = await pdfDoc.save()
    return pdfBytes
  } catch (error) {
    console.error("Error generating PDF:", error)
    throw new Error("Failed to generate PDF")
  }
}
