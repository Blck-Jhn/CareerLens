interface Props {
  atsScore: number
  keywordMatch: number | null
  skillGap: string[]
}

export default function ResumeInsights({
  atsScore,
  keywordMatch,
  skillGap
}: Props) {

  const suggestions = []

  if (atsScore < 70)
    suggestions.push("Add measurable achievements to your experience section")

  if (keywordMatch && keywordMatch < 60)
    suggestions.push("Increase job-specific keywords in your resume")

  if (skillGap.length > 0)
    suggestions.push(`Consider learning: ${skillGap.join(", ")}`)

  if (suggestions.length === 0)
    suggestions.push("Great resume! Minor formatting improvements could help.")

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">

      <h3 className="text-xl font-bold mb-4">
        Resume Feedback
      </h3>

      <p className="mb-4 text-gray-600">
        ATS Score: <strong>{atsScore}/100</strong>
      </p>

      <ul className="space-y-3">
        {suggestions.map((s, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>

    </div>
  )
}