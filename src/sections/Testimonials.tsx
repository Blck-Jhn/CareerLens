"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const testimonials = [
  {
    name: "David A.",
    role: "Graduate Trainee",
    text: "This tool showed me exactly what my resume was missing. My ATS score improved instantly.",
    size: "md:col-span-2",
    glow: "from-emerald-500/20 via-emerald-500/10 to-transparent"
  },
  {
    name: "Chioma K.",
    role: "Data Analyst",
    text: "The skill gap feature is a game changer. I finally know what recruiters want.",
    size: "md:col-span-1",
    glow: "from-purple-500/20 via-blue-500/10 to-transparent"
  },
  {
    name: "Michael T.",
    role: "Product Manager",
    text: "Simple, fast, and actually useful. The insights feel like a real career coach sitting right next to you.",
    size: "md:col-span-3",
    glow: "from-blue-500/20 via-cyan-500/10 to-transparent"
  }
]

export default function Testimonials() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="relative py-32 bg-[#020617] overflow-hidden">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6" ref={containerRef}>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-400/10 border border-emerald-400/20 rounded-full"
          >
            Wall of Proof
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
            Trusted by the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Top 1%</span>
          </h2>
        </div>

        {/* Bento-style Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={`group relative p-px rounded-3xl overflow-hidden ${item.size}`}
            >
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 group-hover:from-emerald-500/50 group-hover:to-cyan-500/50 transition-all duration-700" />
              
              <div className="relative h-full bg-[#0B0F1A] p-8 md:p-12 rounded-3xl flex flex-col justify-between overflow-hidden">
                {/* Spotlight Effect */}
                <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${item.glow} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative z-10">
                  <div className="flex gap-1 mb-6 text-emerald-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed mb-8 italic">
                    {item.text}
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-4">
                  <div className="h-px flex-1 bg-white/10" />
                  <div className="text-right">
                    <p className="text-lg font-bold text-white">{item.name}</p>
                    <p className="text-sm font-bold text-emerald-500 tracking-tighter uppercase">{item.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}