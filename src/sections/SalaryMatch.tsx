"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { BarChart, DollarSign, Search, Briefcase, Info, ArrowRight } from "lucide-react"

export default function SalaryMatch() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const stats = [
    { label: "Market Avg", value: "$142k", trend: "+12%" },
    { label: "Top 10%", value: "$185k", trend: "+8%" },
    { label: "Entry Level", value: "$92k", trend: "+5%" },
  ]

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-[60vh] bg-slate-900" />
        <div className="absolute top-[30vh] left-0 right-0 h-[50vh] bg-gradient-to-b from-slate-900 to-white" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-6"
          >
            <DollarSign className="w-3 h-3 text-blue-400" />
            <span className="text-blue-200 text-[10px] font-bold uppercase tracking-[0.2em]">Real-time Market Intelligence</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight"
          >
            Know your worth. <br />
            <span className="text-slate-400 ">Negotiate with data.</span>
          </motion.h1>
          <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
        className="flex flex-col items-center gap-4 group"
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 text-blue-500 transition-transform duration-300 group-hover:scale-110 mt-7"
        viewBox="0 0 64 64"
      >
        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="none" />
        <path
          d="M20 40 L32 24 L44 40"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="44" cy="20" r="3" fill="#3B82F6" />
      </svg>
      <span className="text-3xl font-bold tracking-tight text-gray-900">
        Career<span className="text-blue-500 font-semibold">Lens</span>
      </span>
    </motion.div>
        </div>

        {/* Search & Input Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[32px] shadow-2xl shadow-slate-200 border border-slate-100 p-8 md:p-12 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Job Title</label>
              <div className="relative">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="text" placeholder="e.g. Senior Frontend Engineer" className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Location</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="text" placeholder="Remote / New York / Lagos" className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
              </div>
            </div>
            <button 
              onClick={() => setIsAnalyzing(true)}
              className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200 active:scale-[0.98]"
            >
              Analyze Salary Range
            </button>
          </div>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Visualizer */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-8 bg-slate-900 rounded-[40px] p-8 text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-xl font-bold">Salary Distribution</h3>
                  <p className="text-slate-400 text-sm">Based on 2.4k data points this month</p>
                </div>
                <Info className="w-5 h-5 text-slate-600 cursor-help" />
              </div>

              {/* Mock Bar Chart Animation */}
              <div className="flex items-end gap-3 h-48 mb-8">
                {[40, 60, 45, 90, 65, 80, 50, 30].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    transition={{ delay: i * 0.1, duration: 1 }}
                    className={`flex-1 rounded-t-lg ${i === 3 ? 'bg-blue-500' : 'bg-slate-700'}`}
                  />
                ))}
              </div>
              <p className="text-center text-xs text-slate-500 font-medium">Salary Percentile (Low → High)</p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />
          </motion.div>

          {/* Quick Insights Cards */}
          <div className="lg:col-span-4 space-y-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-200 p-6 rounded-[24px] flex justify-between items-center group hover:border-blue-500 transition-colors"
              >
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-900 tracking-tight">{stat.value}</p>
                </div>
                <div className="text-right">
                  <span className="text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-lg">{stat.trend}</span>
                </div>
              </motion.div>
            ))}
            
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="bg-blue-600 rounded-[24px] p-6 text-white cursor-pointer group"
            >
              <h4 className="font-bold flex items-center gap-2">
                Get Personalized Report <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </h4>
              <p className="text-blue-100 text-xs mt-2 opacity-80">Detailed breakdown based on your specific tech stack and years of experience.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}