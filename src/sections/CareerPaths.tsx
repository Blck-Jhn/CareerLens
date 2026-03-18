"use client"
import { motion } from "framer-motion"
import { Compass, Zap, Target, Layers, ArrowUpRight, Workflow } from "lucide-react"

export default function CareerPaths() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] overflow-hidden">
      
      
      <div className="fixed top-6 left-6 z-50 flex items-center gap-2 group bg-gray-900/20 backdrop-blur-md p-2 rounded-2xl border border-white/10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-blue-500 transition-transform duration-300 group-hover:scale-110"
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
        <span className="text-xl font-bold tracking-tight text-white  transition-colors">
          Career<span className="text-blue-500">Lens</span>
        </span>
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] md:top-[-20%] left-1/2 -translate-x-1/2 w-[160%] md:w-[140%] h-[500px] md:h-[700px] bg-slate-950 rounded-[100%] shadow-[0_0_120px_rgba(30,58,138,0.3)]" />
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 md:pt-40 pb-24">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <div className="p-3 md:p-4 bg-blue-600/10 border border-blue-500/20 rounded-3xl backdrop-blur-xl">
              <Compass className="w-6 h-6 md:w-8 md:h-8 text-blue-500 animate-[spin_10s_linear_infinite]" />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-8xl font-bold text-white tracking-tighter leading-tight mb-6 px-2"
          >
            Mapping <span className="text-blue-500">Trajectory.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-400 text-sm md:text-lg font-medium max-w-xl mx-auto mb-7 px-4"
          >
            From your current stack to your ultimate role. We use AI to plot the most efficient sequence of moves.
          </motion.p>
        </div>

        {/* Path Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {[
            { title: "Technical Architect", icon: <Layers />, tag: "Scale", color: "text-blue-500" },
            { title: "Lead Developer", icon: <Zap />, tag: "Speed", color: "text-emerald-500" },
            { title: "CTO / Founder", icon: <Target />, tag: "Vision", color: "text-purple-500" }
          ].map((path) => (
            <motion.div
              key={path.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white border border-slate-200 p-8 md:p-10 rounded-4xl md:rounded-[48px] shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <Workflow className="w-16 h-16 md:w-24 md:h-24" />
              </div>
              
              <div className={`${path.color} mb-6 md:mb-8 scale-110 md:scale-125 origin-left`}>
                {path.icon}
              </div>
              
              <span className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{path.tag} Track</span>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mt-2 mb-4">{path.title}</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6 md:mb-8">
                Master the architectural patterns and team leadership skills required for roles at scale.
              </p>
              
              <button className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                View Roadmap <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 bg-slate-900 rounded-[32px] md:rounded-[56px] p-8 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div className="max-w-md text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:h-6">Visualizing Skill Gaps</h2>
            <p className="text-slate-400 text-sm md:text-base font-medium">
              Our AI compares your profile against 50k+ successful transitions to highlight exactly what you&apos;re missing.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="h-24 w-16 md:h-32 md:w-20 bg-blue-600/20 rounded-2xl border border-blue-500/30 flex items-center justify-center">
              <div className="w-1.5 h-12 md:h-16 bg-blue-500 rounded-full animate-pulse" />
            </div>
            <div className="h-24 w-16 md:h-32 md:w-20 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
              <div className="w-1.5 h-6 md:h-8 bg-slate-700 rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}