"use client"

import { useState } from "react"
import { X, QrCode, Copy, Check, Heart, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SupportModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SupportModal({ isOpen, onClose }: SupportModalProps) {
  const [copied, setCopied] = useState(false)
  const paymentAddress = "bharath.crypto.wallet@example.com"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(paymentAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <Card className="w-full max-w-lg bg-white shadow-2xl animate-scale-in">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6 bg-gradient-to-r from-primary-50 to-purple-50 rounded-t-lg">
          <CardTitle className="text-2xl font-bold flex items-center">
            <div className="p-2 bg-gradient-to-br from-primary-500 to-purple-500 rounded-lg mr-3">
              <Heart className="h-6 w-6 text-white" />
            </div>
            Support Our Mission
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0 hover:bg-white/50">
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6 p-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 text-slate-600">
              <Coffee className="h-5 w-5" />
              <span>Help us keep this tool free for everyone!</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Your support helps us maintain our servers, improve our AI models, and keep this service accessible to job
              seekers worldwide.
            </p>
          </div>

          {/* QR Code Placeholder */}
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-dashed border-slate-300 rounded-2xl flex items-center justify-center group hover:border-primary-400 transition-colors duration-300">
              <div className="text-center">
                <QrCode className="h-16 w-16 text-slate-400 mx-auto mb-3 group-hover:text-primary-500 transition-colors duration-300" />
                <p className="text-sm font-medium text-slate-600">QR Code Scanner</p>
                <p className="text-xs text-slate-500 mt-1">Scan to donate crypto</p>
              </div>
            </div>
          </div>

          {/* Payment Address */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-slate-700">Crypto Wallet Address:</label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={paymentAddress}
                readOnly
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg bg-slate-50 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Button
                onClick={handleCopy}
                size="sm"
                variant="outline"
                className="px-4 hover:bg-primary-50 hover:border-primary-300 transition-all duration-200"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Support Options */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-slate-700">Quick amounts:</label>
            <div className="grid grid-cols-3 gap-3">
              {["$5", "$10", "$25"].map((amount) => (
                <Button
                  key={amount}
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700 transition-all duration-200"
                >
                  {amount}
                </Button>
              ))}
            </div>
          </div>

          <div className="text-center pt-4 border-t border-slate-200">
            <p className="text-sm text-slate-500 leading-relaxed">
              Every contribution, no matter how small, helps us improve and maintain this service. Thank you for your
              support! 🙏
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
