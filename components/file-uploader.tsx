"use client"

import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, AlertCircle, FileText, CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { formatFileSize } from "@/lib/utils"

interface FileUploaderProps {
  file: File | null
  onFileSelected: (file: File | null) => void
  error: string | null
}

export default function FileUploader({ file, onFileSelected, error }: FileUploaderProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onFileSelected(acceptedFiles[0])
      }
    },
    [onFileSelected],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    },
    maxSize: 5 * 1024 * 1024, // 5MB
    multiple: false,
  })

  return (
    <div className="space-y-6">
      <div
        {...getRootProps()}
        className={`relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 overflow-hidden ${
          isDragActive
            ? "border-primary-500 bg-primary-50 scale-105 shadow-lg shadow-primary-500/20"
            : "border-slate-300 hover:border-primary-400 hover:bg-slate-50"
        }`}
      >
        <input {...getInputProps()} />

        {/* Animated background gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-primary-500/10 via-purple-500/10 to-blue-500/10 opacity-0 transition-opacity duration-300 ${isDragActive ? "opacity-100" : ""}`}
        ></div>

        <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
          <div
            className={`rounded-full p-6 transition-all duration-300 ${
              isDragActive
                ? "bg-gradient-to-br from-primary-500 to-purple-500 text-white scale-110 animate-pulse-glow"
                : "bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600"
            }`}
          >
            <Upload className="h-10 w-10" />
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-slate-900">
              {isDragActive ? "Drop your resume here! 🎯" : "Upload Your Resume"}
            </h3>
            <p className="text-slate-600">
              Drag & drop your file here, or{" "}
              <span className="text-primary-600 font-medium underline">click to browse</span>
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full">PDF</span>
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full">DOCX</span>
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full">Max 5MB</span>
            </div>
          </div>
        </div>
      </div>

      {file && (
        <div className="flex items-center justify-between p-6 border-2 border-emerald-200 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 animate-slide-up">
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-emerald-100 p-3">
              <FileText className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <p className="font-medium text-slate-900 truncate max-w-[200px] sm:max-w-[300px]">{file.name}</p>
              <p className="text-sm text-slate-600">{formatFileSize(file.size)}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-5 w-5 text-emerald-600" />
            <button
              onClick={(e) => {
                e.stopPropagation()
                onFileSelected(null)
              }}
              className="text-sm text-slate-500 hover:text-slate-700 transition-colors duration-200 px-3 py-1 rounded-lg hover:bg-white/50"
            >
              Remove
            </button>
          </div>
        </div>
      )}

      {error && (
        <Alert variant="destructive" className="border-red-200 bg-red-50 animate-slide-up">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="text-red-700">{error}</AlertDescription>
        </Alert>
      )}
    </div>
  )
}
