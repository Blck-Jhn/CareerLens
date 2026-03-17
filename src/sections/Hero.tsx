"use client"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Tesseract from "tesseract.js"


interface Props {
  atsScore: number | null
  keywordMatch: number | null
  skillGap: string[]
  setAtsScore: (score: number) => void
  setKeywordMatch: (score: number) => void
  setSkillGap: (skills: string[]) => void
  isSubscribed: boolean
}

export default function Hero({
  atsScore,
  keywordMatch,
  skillGap,
  setAtsScore,
  setKeywordMatch,
  setSkillGap,
  isSubscribed
}: Props) {
  const [resumeUploaded, setResumeUploaded] = useState(false)
  const [fileName, setFileName] = useState("")
  const [scanning, setScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)

  const fileInputRef = useRef<HTMLInputElement>(null)

   const runOCR=async (file: File) => {
          const {data} =await Tesseract.recognize(file,"eng",{
            logger: (m) => console.log(m),
          })
          return data.text
        }

  const analyzeResume = (text: string) => {
    const keywords = [
      "javascript", 
      "react", 
      "node",
       "typescript",
       "sql", 
       "mongodb", 
       "python", 
       "aws","communication",
       "leadership",
       "excel",
       "microsoft office",
       "sales",
       "project management",
       "analysis",
       "marketing"

      ]


    const lowerText = text.toLowerCase()
    const foundKeywords = keywords.filter((skill) => lowerText.includes(skill))
    const missingSkills = keywords.filter((skill) => !lowerText.includes(skill))
    const keywordPercent = Math.round((foundKeywords.length / keywords.length) * 100)
    const ats = 50 + keywordPercent / 2

    setKeywordMatch(keywordPercent)
    setSkillGap(missingSkills.slice(0, 3))
    setAtsScore(Math.round(ats))
  }

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || typeof window === 'undefined') return // Safety check
   
    setFileName(file.name)
    setResumeUploaded(true)
    setScanning(true)
    setScanProgress(10)

    const reader = new FileReader()
    reader.onload = async function () {
      try {
        // Use the legacy-style entry point specifically to avoid the canvas factory
        const pdfjs = await import("pdfjs-dist/build/pdf.mjs");
        
        // Link worker via unpkg
        pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

        const typedArray = new Uint8Array(this.result as ArrayBuffer)  
        
        const loadingTask = pdfjs.getDocument({ 
            data: typedArray,
            // These flags prevent PDF.js from even LOOKING for canvas/node features
            disableFontFace: true,
            isEvalSupported: false,
            useSystemFonts: true
        });
     
        const pdf = await loadingTask.promise
        let fullText = ""

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i)
          const content = await page.getTextContent()
          const pageText = content.items
            .map((item: any) => item.str || "")
            .join(" ")
          fullText += pageText + " "
          setScanProgress(Math.round((i / pdf.numPages) * 90))
        }
        
        if (!fullText.trim()){
          console.log("No Text Found -> running OCR...")
          const ocrText= await runOCR(file)
          fullText=ocrText
        }

         try {
          const res = await fetch("/api/analyze", {
            method: "POST",
            body: JSON.stringify({ resumeText: fullText }),
          })

          const data = await res.json()
          console.log("AI Result:", data.result)

        } catch {
          // fallback if API fails
          analyzeResume(fullText)
        }


        //fallback always set something back
        analyzeResume(fullText)
        setScanProgress(100)
        if (fileInputRef.current) fileInputRef.current.value = ""
        setTimeout(() => setScanning(false), 500)
      } catch (error) {
        console.error("PDF Error:", error)
        setScanning(false)
      }
    }
    reader.readAsArrayBuffer(file)
  }


  const runDemo = () => {
    setFileName("Demo_Resume.pdf")
    setResumeUploaded(true)
    setScanning(true)
    setScanProgress(30)

    setTimeout(() => {
      setAtsScore(74)
      setKeywordMatch(68)
      setSkillGap(["SQL", "AWS", "Leadership","Communication","Excel"])
      setScanning(false)
    }, 2000)
    
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-green-400 min-h-[600px]">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="HabsB.jpg"
          alt="Background 1"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 18, repeat: Infinity, times: [0.33, 0.66, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.img
          src="HabsG.jpg"
          alt="Background 2"
          animate={{ opacity: [0, 0, 1] }}
          transition={{ duration: 18, repeat: Infinity, times: [0.66, 1, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>


    {/* HEADING SECTIO */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left text-white">
          <h1 className="text-5xl font-bold leading-tight">Improve Your Resume With AI</h1>
          <p className="mt-6 text-lg text-white/90">
            Upload your resume and get instant ATS analysis, skill gap detection, and personalized career coaching.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <label className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition cursor-pointer">
              {resumeUploaded ? "Scan Another" : "Upload Resume"}
              <input type="file" ref={fileInputRef} accept=".pdf" className="hidden" onChange={handleUpload} />
            </label>
            <button onClick={runDemo} className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-lg font-bold hover:bg-white/40 transition">
              Try Demo
            </button>
          </div>
          {fileName && <p className="text-sm mt-3 font-medium">File: {fileName}</p>}
        </div>

        <div className="flex-1 relative w-full h-[400px]">
          {!resumeUploaded ? (
            <>
              <FloatingCard delay={2} title="ATS Score" value="78 / 100" position="top-0 right-0" />
              <FloatingCard delay={0.3} title="Skill Gap" value="SQL, Tableau" position="bottom-0 left-0" dark />
              <FloatingCard delay={0.6} title="Keyword Match" value="65%" position="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </>
          ) : (
            <>
              {/* ATS Score Card */}
              <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="absolute top-0 right-0 bg-white/90 backdrop-blur-lg border border-white/40 shadow-xl rounded-xl p-6 w-64">
                <h2 className="font-bold text-black text-sm uppercase tracking-wider">ATS Score</h2>
                {scanning ? (
                  <div className="mt-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div className="bg-emerald-500 h-2 rounded-full" animate={{ width: `${scanProgress}%` }} />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Analyzing... {scanProgress}%</p>
                  </div>
                ) : (
                  <p className="text-3xl font-bold text-emerald-600 mt-2">{atsScore}/100</p>
                )}
              </motion.div>

              {/* Keyword Match Card */}
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 shadow-2xl rounded-xl p-6 w-64 border-2 border-emerald-500/20">
                <h2 className="font-bold text-black text-sm uppercase tracking-wider">Keyword Match</h2>
                <p className="text-4xl font-black text-black mt-1">{scanning ? "..." : `${keywordMatch}%`}</p>
              </motion.div>

              {/* Skill Gap Card (Consolidated Upgrade logic) */}
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="absolute bottom-0 left-0 bg-white/90 border border-white/40 shadow-xl rounded-xl p-6 w-64">
                <h2 className="font-bold text-sm uppercase tracking-wider text-black">Skill Gap</h2>
                <div className="mt-2 min-h-[40px]">
                    {scanning ? (
                        <p className="italic text-gray-500">Detecting...</p>
                    ) : isSubscribed ? (
                        <p className="font-medium text-gray-700">{skillGap.length ? skillGap.join(", ") : "Perfect Match!"}</p>
                    ) : (
                        <div className="flex flex-col gap-3">
                            <p className="text-xs text-gray-500">🔒 Upgrade to unlock analysis</p>
                            <button onClick={() => alert("Upgrade coming soon")} className="bg-black text-white px-3 py-2 rounded-lg text-xs font-semibold hover:bg-gray-800 transition">
                                Upgrade to Pro
                            </button>
                        </div>
                    )}
                </div>
              </motion.div>              
            </>
          )}
        </div>
      </div>
    </section>
  )
}

interface FloatingCardProps { title: string; value: string; position: string; delay: number; dark?: boolean }

function FloatingCard({ title, value, position, delay, dark = false }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: [0, 15, 0], opacity: 1 }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute ${position} backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl p-6 w-60 ${dark ? "bg-gray-900/80 text-white" : "bg-white/80 text-black"}`}
    >
      <h2 className={`text-xs font-bold uppercase tracking-widest ${dark ? "text-gray-400" : "text-gray-500"}`}>{title}</h2>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </motion.div>
  )


}
