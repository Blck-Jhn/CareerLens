"use client"
import ResumeInsights from "./ResumeInsights"
import CareerSuggestions from "./CareerSuggestions"

interface Props {
  atsScore: number | null
  keywordMatch: number | null
  skillGap: string[]
  isSubscribed: boolean
}

export default function AIAnalysisPanel({
  atsScore,
  keywordMatch,
  skillGap,
  isSubscribed
}: Props) {

  if (!atsScore) return null

  return (
    <section className="py-20 bg-gray-50 ">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          AI Career Insights
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Resume Insights */}
          <div className={`${!isSubscribed ? "blur-sm opacity-70 pointer-events-none" : ""}`}>
            <ResumeInsights
              atsScore={atsScore}
              keywordMatch={keywordMatch}
              skillGap={skillGap}
            />
          </div>

          {/* Career Suggestions */}
          <div className={`${!isSubscribed ? "blur-sm opacity-70 pointer-events-none" : ""}`}>
            <CareerSuggestions
              keywordMatch={keywordMatch}
              skillGap={skillGap}
            />
          </div>

        </div>
      </div>

      {/* Premium Upgrade Panel */}
      {!isSubscribed && (
        <div className="mt-8 bg-gray-700/80 backdrop-blur-lg border border-gray-200 rounded-xl p-6 text-center">
          <h3 className="text-lg font-bold text-white">🔒 Advanced AI Insights</h3>
          <p className="text-emerald-300 mt-2">
            Upgrade to CareerLens Pro to unlock deeper resume analysis,
            AI rewrite suggestions, and job match insights.
          </p>

          <button
            onClick={() => alert("Subscription flow coming soon")}
            className="mt-4 bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Upgrade to Pro
          </button>
        </div>
      )}
    </section>
  )
}