import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";

type FoldingSectionProps ={
  children: React.ReactNode;
  bg?:string;
  z?:number;
}

const FoldingSection = ({ children, bg = "bg-black", z = 10 }:FoldingSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0,0.8, 1], [1, 1,0]);

  return (
    <div ref={containerRef} className="relative h-screen">
      <motion.section
        style={{ scale, opacity, zIndex: z ,boxShadow: "0 0 50px rgba(0,0,0,0.5)"}}
        className={`sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden ${bg}`}
      >
        {children}
      </motion.section>
    </div>
  );
};

export default function Heading() {
  const fadeInUp : Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i:number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <main className="bg-black text-white overflow-x-hidden">
      <FoldingSection z={30}>
        {/* Animated Gradient */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.25),transparent_60%)]"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  w-[120vw] h-[120vw] rounded-full border border-cyan-400/20"
          />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full border border-cyan-400/30"
        />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('/noise.png')]" />
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-20">
         
                  {/* LEFT SIDE */}
          <div className="text-center lg:text-left">
            <motion.span
              custom={0}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="inline-block px-4 py-1 rounded-full border border-red-500/20 bg-red-500/10 text-[10px] font-bold tracking-[0.25em] text-red-500 mb-6 uppercase"
            >
            The Future of Resume Parsing
            </motion.span>
            <motion.h1
              custom={1}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[6rem] font-black leading-[0.95] tracking-tight"
            >
              PRECISION <br />
              <span className="text-white/30">ENGINEERED</span>
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="mt-6 md:mt-8 text-base md:text-lg text-gray-400 max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              Stop guessing. Use recruiter-grade AI to optimize your resume,
              unlock hidden keywords, and increase your interview success rate.
            </motion.p>          
          </div >

                {/* RIGHT SIDE */}
        <div className="order-2">
            <motion.div 
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="relative hidden lg:flex items-center justify-center"
            >        
          <div className="absolute w-50 h-50 lg:w-100 lg:h-100 bg-cyan-500/10 blur-[80px] rounded-full" />
          <div className="relative w-full max-w-125 bg-white/5 backdrop-blur-xl border border-white/10 p-4 lg:p-8 rounded-3xl shadow-2xl">
            <Image
            src="/Heading.jpg" 
            alt="Resume Pics" 
            width={500}
            height={600}
            className="w-full h-auto rounded-2xl object-cover" />
          </div>
        </motion.div>
        </div>
        </div>
      </FoldingSection>  

     <FoldingSection bg="bg-white text-black" z={20}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[60vh]">
            <div className="md:col-span-8 bg-gray-100 rounded-3xl p-8 md:p-12 flex flex-col justify-end relative group overflow-hidden">

              <div className="absolute top-0 right-0 p-6 md:p-12 text-6xl md:text-8xl font-black text-black/5 group-hover:text-emerald-500/10 transition">
                01
              </div>
              <h2 className="text-2xl md:text-4xl font-bold">
                Real-time Resume Feedback
              </h2>

              <p className="text-gray-600 mt-4 max-w-sm text-sm md:text-base">
                Our AI engine scans your resume against recruiter datasets
                to reveal missing keywords, formatting weaknesses,
                and ATS compatibility issues.
              </p>

            </div>


            {/* Secondary Feature */}

            <div className="md:col-span-4 bg-cyan-600 rounded-3xl p-8 md:p-12 text-white flex flex-col justify-end">

              <h2 className="text-4xl md:text-5xl font-bold">
                24/7
              </h2>

              <p className="text-red-100 mt-3 text-sm md:text-base">
                AI Career Coaching
              </p>

            </div>

          </div>

        </div>

      </FoldingSection>
      <FoldingSection z={10}>

        <div className="text-center relative z-10 px-6">

          <h2 className="text-4xl sm:text-5xl md:text-[5rem] lg:text-[6rem] font-black tracking-tight leading-none">
            READY TO DEPLOY?
          </h2>

          <button className="mt-8 md:mt-12 bg-white text-black px-10 md:px-16 py-4 md:py-6 rounded-full font-bold text-lg md:text-xl hover:scale-105 transition-transform">
            Create Free Account
          </button>

        </div>

      </FoldingSection>
    </main>
  );
}