"use client"
import { motion } from "framer-motion"
import { Target, Zap, Shield, BarChart3, ArrowUpRight } from "lucide-react"

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
    
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-[70vh] bg-slate-900" />
        <div className="absolute top-[40vh] left-0 right-0 h-[60vh] bg-gradient-to-b from-slate-900 to-white" />
        
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
  <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
    {/* Animated Badge */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
    >
      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Established 2026</span>
    </motion.div>
    
    <motion.h1 
      {...fadeIn}
      className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-8"
    >
      Intelligence <br /> Meets <span className="text-blue-500">Intent.</span>
    </motion.h1>
    
    <motion.p 
      {...fadeIn}
      transition={{ delay: 0.2 }}
      className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl font-medium mb-12"
    >
      CareerLens isn&apos;t just a tool; it&apos;s a structural upgrade for your professional identity. 
      We blend logic with narrative to make you unignorable.
    </motion.p>
    
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="flex flex-col items-center gap-4 group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 text-blue-500 transition-transform duration-300 group-hover:scale-110"
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
</section>

        {/* Bento Grid (Transitions from Dark to White) */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            
            <motion.div 
              {...fadeIn}
              className="md:col-span-8 bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 md:p-16 text-white group"
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                The Mission <ArrowUpRight className="text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </h2>
              <p className="text-gray-900 text-lg leading-relaxed max-w-xl">
                In a world of noise, clarity is the ultimate luxury. We built CareerLens to provide 
                high-fidelity career optimization for developers who demand more than "templates."
              </p>
            </motion.div>

            {/* Transition Stats Card */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 bg-white shadow-2xl shadow-slate-200 rounded-[40px] p-10 flex flex-col justify-between border border-slate-100"
            >
              <BarChart3 className="w-12 h-12 text-blue-600" />
              <div>
                <h3 className="text-6xl font-bold text-slate-900 tracking-tighter">10k+</h3>
                <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-2">Optimized Narratives</p>
              </div>
            </motion.div>

            {/* Bottom Row - Features on White */}
            {[
              { icon: <Target />, title: "Precision", color: "text-blue-600" },
              { icon: <Zap />, title: "Speed", color: "text-emerald-600" },
              { icon: <Shield />, title: "Privacy", color: "text-slate-900" }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                {...fadeIn}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="md:col-span-4 bg-white border border-slate-200 rounded-[32px] p-8 hover:border-blue-500 transition-colors group cursor-default"
              >
                <div className={`mb-6 ${item.color} group-hover:scale-110 transition-transform`}>{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium">Engineered for recruiter-grade performance across all sectors.</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}