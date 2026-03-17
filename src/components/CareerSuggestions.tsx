interface Props {
  keywordMatch: number | null
  skillGap: string[]
}

export default function CareerSuggestions({
  keywordMatch,
  skillGap
}: Props) {

  const roles = [
    "Frontend Developer",
    "React Developer",
    "Full Stack Engineer",
    "JavaScript Developer"
  ]

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">

      <h3 className="text-xl font-bold mb-4">
        Recommended Career Paths
      </h3>

      <p className="text-gray-600 mb-4">
        Based on your resume skills
      </p>

      <ul className="space-y-3">
        {roles.map((role, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-blue-500">→</span>
            <span>{role}</span>
          </li>
        ))}
      </ul>

      {skillGap.length > 0 && (
        <div className="mt-6 text-sm text-gray-500">
          Learning {skillGap.join(", ")} could unlock more roles.
        </div>
      )}

    </div>
  )
}