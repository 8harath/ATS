# ATS (ResumeAI) – AI-Powered, Privacy-First Resume Enhancement

ATS (ResumeAI) is an open-source web application that helps job seekers transform their resumes to optimize for Applicant Tracking Systems (ATS) using the latest AI technology. Our mission is to make high-quality, AI-powered career tools accessible, transparent, and privacy-respecting for everyone.

## ✨ What does ATS do?

- **Upload Your Resume:** Securely upload your resume in PDF or DOCX format.
- **Smart Text Extraction:** Extracts and cleans text from your document, preserving structure and formatting.
- **AI Enhancement:** Google Gemini AI analyzes your content, restructures it with quantified achievements, action verbs, and ATS-friendly keywords.
- **Professional Formatting:** Organizes content into professional sections with consistent, ATS-optimized formatting.
- **Generate a Ready-to-Send PDF:** Instantly download a beautifully styled, ATS-compatible PDF resume.
- **Privacy & Security:** No data is stored permanently; all files are deleted after 1 hour. End-to-end encryption and full GDPR/CCPA compliance.

## 💡 Philosophy

Our core values shape every line of code:

- **Accessibility First:**  
  Job searching is stressful enough—quality resume tools should not be locked behind paywalls.

- **Privacy by Design:**  
  Your personal data stays private. All processing is secure and files are deleted immediately after use.

- **AI for Good:**  
  We leverage AI to help everyone present their best professional self, leveling the playing field for job seekers.

- **Open Source:**  
  Transparent, community-driven development. Anyone can contribute, audit, or improve the tool.

## 🛠️ Tech Stack

- **Frontend:** Next.js 14 (React), TypeScript, Tailwind CSS
- **AI Integration:** Google Gemini AI (via API)
- **Backend:** FastAPI / Express.js for file handling and API endpoints
- **PDF Generation:** WeasyPrint / Puppeteer, custom CSS templates
- **Security:** End-to-end encryption (TLS 1.3, AES-256), strict CSP, GDPR/CCPA compliance
- **Deployment:** Vercel

## 🚀 How It Works

1. **Upload & Validate:**  
   Files are validated for type and checked for malware.

2. **Extract Text:**  
   PyMuPDF (PDF), python-docx (Word), Tesseract (OCR for images).

3. **AI Enhancement:**  
   Gemini AI restructures and improves your resume.

4. **Format & Generate:**  
   Content is organized and exported as a PDF.

5. **Secure Delivery:**  
   Resume delivered via a secure link. All files are auto-deleted after 1 hour.

## 🔒 Privacy & Security

- No permanent storage of resumes or personal information.
- Data transmission secured by TLS 1.3 and AES-256.
- GDPR and CCPA compliant.
- Comprehensive audit logs and data processing transparency.

## 🤝 Contributing

This project is open source and welcomes contributions!  
Report issues, suggest features, or submit pull requests to help improve ATS for everyone.

## 📢 Community & Support

- [View on GitHub](https://github.com/8harath/ATS)
- [Open an Issue](https://github.com/8harath/ATS/issues)
- [LinkedIn](https://linkedin.com/in/bharathk)

---

Crafted with ❤️ to empower careers worldwide.
