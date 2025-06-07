import { Loader2, FileText, FileUp, Brain } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface ProcessingStatusProps {
  stage: "extracting" | "enhancing" | "generating" | "complete"
  progress: number
}

export default function ProcessingStatus({ stage, progress }: ProcessingStatusProps) {
  const getStageInfo = () => {
    switch (stage) {
      case "extracting":
        return {
          icon: <FileText className="h-8 w-8 text-blue-600" />,
          text: "Analyzing your resume...",
          subtext: "Reading through your content carefully",
          gradient: "from-blue-500 to-cyan-500",
        }
      case "enhancing":
        return {
          icon: <Brain className="h-8 w-8 text-purple-600" />,
          text: "AI is working its magic...",
          subtext: "Optimizing content for maximum impact",
          gradient: "from-purple-500 to-pink-500",
        }
      case "generating":
        return {
          icon: <FileUp className="h-8 w-8 text-emerald-600" />,
          text: "Creating your perfect resume...",
          subtext: "Almost ready for download!",
          gradient: "from-emerald-500 to-teal-500",
        }
      default:
        return {
          icon: <Loader2 className="h-8 w-8 text-primary-600 animate-spin" />,
          text: "Processing your resume...",
          subtext: "Great things take time",
          gradient: "from-primary-500 to-blue-500",
        }
    }
  }

  const { icon, text, subtext, gradient } = getStageInfo()

  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-8 animate-fade-in">
      <div className="flex flex-col items-center space-y-6">
        <div className={`p-6 rounded-full bg-gradient-to-br ${gradient} text-white animate-pulse-glow`}>{icon}</div>
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-semibold text-slate-900">{text}</h3>
          <p className="text-slate-600">{subtext}</p>
        </div>
      </div>

      <div className="w-full max-w-md space-y-4">
        <Progress value={progress} className="h-3 bg-slate-200" />
        <div className="flex justify-between text-sm text-slate-600">
          <span>Processing</span>
          <span className="font-mono font-medium">{progress}%</span>
        </div>
      </div>

      <div className="text-center max-w-lg">
        <p className="text-sm text-slate-500 leading-relaxed">
          Our AI is analyzing your resume structure, enhancing your achievements with quantifiable results, and
          formatting everything to pass ATS systems with flying colors! 🚀
        </p>
      </div>
    </div>
  )
}
