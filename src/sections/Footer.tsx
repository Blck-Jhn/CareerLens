"use client"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative bg-[#F8FAFC] pt-24 pb-12 overflow-hidden border-t border-gray-200">
      
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#E2E8F0,transparent_70%)]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
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

            <p className="text-slate-500 mt-6 text-base leading-relaxed max-w-sm font-medium">
              Precision-engineered career optimization. Turning raw experience into recruiter-grade narratives.
            </p>
            
            
            <div className="mt-8 flex max-w-md bg-white border border-slate-200 rounded-2xl p-1.5 shadow-sm focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all">
              <input 
                type="email" 
                placeholder="Join the career briefing..." 
                className="bg-transparent border-none focus:ring-0 text-sm px-4 py-2 w-full text-slate-900 outline-none placeholder:text-slate-400"
              />
              <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-all shadow-lg shadow-slate-200">
                Subscribe
              </button>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2 md:col-start-7">
            <h3 className="text-slate-900 font-bold text-xs uppercase tracking-[0.15em] mb-6">Product</h3>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li><Link href="/resume-builder" className="hover:text-emerald-600 transition-colors cursor-pointer">Resume Builder</Link></li>
              <li><Link href="/interview-prep" className="hover:text-emerald-600 transition-colors cursor-pointer">Interview Prep</Link></li>
              <li><Link href="/salary-match"className="hover:text-emerald-600 transition-colors cursor-pointer">Salary Data</Link></li>
              <li><Link href="/pricing" className="hover:text-emerald-600 transition-colors cursor-pointer">Pricing</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-slate-900 font-bold text-xs uppercase tracking-[0.15em] mb-6">Company</h3>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li><Link href="/about" className="hover:text-emerald-600 transition-colors cursor-pointer">Our Mission</Link></li>
              <li><Link href="/privacy" className="hover:text-emerald-600 transition-colors cursor-pointer">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-emerald-600 transition-colors cursor-pointer">Terms</Link></li>
              <li><Link href="/#" className="hover:text-emerald-600 transition-colors cursor-pointer">Security</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-slate-900 font-bold text-xs uppercase tracking-[0.15em] mb-6">Connect</h3>
            <div className="flex gap-3">
              {[ '𝕏', 'in', 'gh','f','gmail' ].map((social) => (
                <div key={social} className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:border-emerald-500 hover:bg-emerald-50 cursor-pointer transition-all shadow-sm">
                  <span className="text-slate-900 font-bold text-xs">{social}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400 text-[10px] tracking-[0.25em] font-bold uppercase">
            © {new Date().getFullYear()} CareerLens AI — The Standard in Resume Intelligence
          </div>
          
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Live Status</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  )
}