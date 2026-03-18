"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, Play, ShieldCheck, Zap, ArrowRight, BrainCircuit, RefreshCw } from "lucide-react"

export default function InterviewPrep() {
 
  const [answer, setAnswer] = useState("")

  const mockQuestion = "Can you describe a time you had to handle a high-pressure technical failure?"

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: AI Interviewer Context */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-transparent rounded-xl flex items-center justify-center">
                <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-blue-600 transition-transform duration-300 group-hover:scale-110"
            viewBox="0 0 64 64"
          >
            <circle cx="32" cy="32" r="28" stroke="#2563EB" strokeWidth="4" fill="none" />
            <path
              d="M20 40 L32 24 L44 40"
              stroke="#2563EB"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="44" cy="20" r="3" fill="#3B82F6" />
          </svg>
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight text-gray-900">
                 Career<span className="text-blue-900 font-semibold">Lens</span>
                </span>
                <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-wider">Active Simulation</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase mb-2">Current Focus</p>
                <p className="text-sm text-slate-700 font-medium">Behavioral: Leadership & Grit</p>
              </div>
              
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600 p-2">
                <ShieldCheck className="w-4 h-4" /> 85% Match for Senior Roles
              </div>
            </div>
          </div>

          <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-xl shadow-blue-100">
            <RefreshCw className="w-4 h-4" /> Generate New Question
          </button>
        </div>

        {/* Right: Simulation Area */}
        <main className="lg:col-span-8 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-slate-200 rounded-[32px] p-8 md:p-12 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <MessageSquare className="w-32 h-32" />
              </div>

              <div className="relative z-10">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-widest">Question 01</span>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mt-4 mb-8 leading-tight">
                  &quot;{mockQuestion}&quot;
                </h1>

                <div className="space-y-4">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Your Response (STAR Method)</label>
                  <textarea 
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Start typing your response here..."
                    className="w-full h-48 p-6 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                  />
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    <span className="w-2 h-2 rounded-full bg-slate-200" />
                    <span className="w-2 h-2 rounded-full bg-slate-200" />
                  </div>
                  <button className="group flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-black transition-all">
                    Analyze Answer <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* AI Feedback Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 border border-emerald-100 p-5 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold text-emerald-800 uppercase">Strong Point</span>
              </div>
              <p className="text-sm text-emerald-700 leading-relaxed">Your mention of &quot;System Scalability&quot; aligns perfectly with the job description.</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 p-5 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Play className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-bold text-amber-800 uppercase">Improvement</span>
              </div>
              <p className="text-sm text-amber-700 leading-relaxed">Try to quantify the result (e.g., &quot;Reduced latency by 40%&quot;).</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}