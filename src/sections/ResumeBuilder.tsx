"use client"
// import { useState } from "react"
import { motion } from "framer-motion"
import { FileText, Sparkles, Download, Layout, Plus, Trash2 } from "lucide-react"

export default function ResumeBuilder() {
 
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      {/* Builder Header */}
      <header className="h-16 border-b border-slate-200 bg-white sticky top-20 z-40 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 group">
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
          <span className="text-2xl font-bold tracking-tight text-gray-900">
            Career<span className="text-blue-900 font-semibold">Lens</span>
          </span>
        </div>
          <div className="bg-blue-50 p-2 rounded-lg">
            <FileText className="w-5 h-5 text-blue-600" />
          </div>
          <h1 className="font-bold text-slate-900 text-sm tracking-tight">Untitled Resume 2026</h1>
          <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full uppercase">Saved</span>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-xl text-sm font-semibold transition">
            <Layout className="w-4 h-4" /> Change Template
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white hover:bg-blue-600 rounded-xl text-sm font-bold transition shadow-lg">
            <Download className="w-4 h-4" /> Export PDF
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar: Controls */}
        <aside className="w-full md:w-[400px] border-r border-slate-200 bg-white overflow-y-auto p-6 space-y-8">
          
          {/* AI Helper Card */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-5 text-white shadow-xl shadow-blue-200">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-blue-200" />
              <span className="text-xs font-bold uppercase tracking-wider">CareerLens AI</span>
            </div>
            <p className="text-sm font-medium leading-relaxed opacity-90">
              I&apos;ve scanned your job description. Focus on highlighting &quot;System Architecture&quot; in your experience section.
            </p>
          </div>

          {/* Form Sections */}
          <section className="space-y-6">
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Personal Info</h3>
              <div className="grid gap-4">
                <input type="text" placeholder="Full Name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 outline-none transition" />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 outline-none transition" />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Experience</h3>
                <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-xs font-bold">
                  <Plus className="w-3 h-3" /> Add
                </button>
              </div>
              
              <div className="p-4 border border-slate-200 rounded-xl bg-slate-50/50">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-slate-800 tracking-tight">Senior Product Designer</p>
                    <p className="text-xs text-slate-500">TechCorp Inc. • 2022 - Present</p>
                  </div>
                  <button className="text-slate-300 hover:text-red-500"><Trash2 className="w-4 h-4"/></button>
                </div>
                <button className="mt-4 w-full py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-blue-600 hover:bg-blue-50 flex items-center justify-center gap-2">
                  <Sparkles className="w-3 h-3" /> Rewrite with AI
                </button>
              </div>
            </div>
          </section>
        </aside>

        {/* Right Preview: The "Page" */}
        <main className="flex-1 bg-slate-100 p-8 md:p-12 overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto bg-white shadow-2xl min-h-[1056px] w-full max-w-[816px] p-[60px] border border-slate-200 flex flex-col"
          >
            {/* Resume Content Placeholder */}
            <div className="border-b-2 border-slate-900 pb-6 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter text-slate-900 mb-2">YOUR NAME HERE</h2>
              <div className="flex gap-4 text-xs font-medium text-slate-500">
                <span>Lagos, NG</span>
                <span>•</span>
                <span>portfolio.com</span>
                <span>•</span>
                <span>linkedin.com/in/user</span>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-3">Professional Summary</h4>
                <div className="h-4 bg-slate-100 rounded w-full mb-2" />
                <div className="h-4 bg-slate-100 rounded w-5/6" />
              </div>

              <div>
                <h4 className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-3">Experience</h4>
                <div className="flex justify-between mb-2">
                  <div className="h-4 bg-slate-200 rounded w-1/3" />
                  <div className="h-4 bg-slate-100 rounded w-1/4" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-slate-50 rounded w-full" />
                  <div className="h-3 bg-slate-50 rounded w-full" />
                  <div className="h-3 bg-slate-50 rounded w-4/5" />
                </div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}