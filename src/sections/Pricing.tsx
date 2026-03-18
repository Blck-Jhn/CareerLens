"use client"
import { Check } from "lucide-react" // npm install lucide-react or use SVGs
import { motion } from "framer-motion"

const tiers = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for testing the waters.",
    features: ["1 AI Resume Scan/mo", "Basic Template Access", "Salary Insights", "Community Support"],
    cta: "Start for Free",
    highlight: false,
  },
  {
    name: "Professional",
    price: "19",
    description: "The standard for active job seekers.",
    features: [
      "Unlimited AI Resume Builds",
      "Unlimited Interview Prep",
      "Priority AI Salary Matching",
      "Custom Career Roadmaps",
      "No CareerLens Watermark",
    ],
    cta: "Get Pro Access",
    highlight: true,
  },
  {
    name: "Executive",
    price: "49",
    description: "White-glove career optimization.",
    features: [
      "Everything in Professional",
      "1-on-1 AI Mentor Chat",
      "LinkedIn Profile Optimization",
      "Early Access to Job Leads",
      "24/7 Dedicated Support",
    ],
    cta: "Go Executive",
    highlight: false,
  },
]

export default function PricingPage() {
  return (
    <div className="bg-gray-800/10 min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          <h2 className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-3">Pricing</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Invest in your <span className="text-blue-600">future self.</span>
          </h1>
          <p className="text-lg text-slate-500 font-medium">
            Transparent pricing designed for every stage of your career journey.
          </p>
         
        </div>
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
          <span className="text-3xl font-bold tracking-tight text-white mb-7">
           Career<span className="text-blue-500 font-semibold">Lens</span>
        </span>
     </motion.div>
    <br></br>
    <br></br>
        
        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                tier.highlight 
                  ? "bg-white border-blue-200 shadow-2xl scale-105 z-10" 
                  : "bg-white/50 border-slate-200 shadow-sm"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg">
                  Most Popular
                </span>
              )}

              <div className="mb-8">
                <h3 className="text-slate-900 font-bold text-xl mb-2">{tier.name}</h3>
                <p className="text-cyan-900 text-sm font-medium">{tier.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">${tier.price}</span>
                  <span className="text-slate-400 text-sm font-semibold">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-2xl font-bold text-sm transition-all ${
                  tier.highlight
                    ? "bg-blue-600 text-white hover:bg-slate-900 shadow-xl shadow-blue-200"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Comparison Trust Note */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">
            Secure payments via Stripe • Cancel anytime • 14-day money-back guarantee
          </p>
        </div>
      </div>
    </div>
  )
}