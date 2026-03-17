import "./globals.css"

export const metadata = {
  title: "CareerLens",
  description: "AI Resume Analyzer and Career Coach"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}