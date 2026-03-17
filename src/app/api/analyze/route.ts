import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

export async function POST(req: Request) {
  const { resumeText } = await req.json()

  const response = await openai.chat.completions.create({
    model: "gpt-5-mini",
    messages: [
      {
        role: "system",
        content: "You are a professional career coach."
      },
      {
        role: "user",
        content: `
Analyze this resume and return:

1. ATS score (0-100)
2. Keyword match %
3. Missing skills
4. 3 improvement suggestions

Resume:
${resumeText}
        `
      }
    ],
  })

  return Response.json({
    result: response.choices[0].message.content,
  })
}