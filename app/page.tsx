'use client'

import AIAnalysisPanel from "@/components/AIAnalysisPanel";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import Heading from "@/sections/Heading";
import Hero from "@/sections/Hero";
import Testimonials from "@/sections/Testimonials";

import { useState } from "react";



export default function Home() {
  const [atsScore,setAtsScore]= useState<number | null>(null)
  const [keyWordMatch,setKeywordMatch]= useState<number |null>(null)
  const [skillGap,setSkillGap]= useState<string[]>([])


  const [isSubscribed, setIsSubscribed] = useState(false);

  // Handle for the "Upgrade to Pro" click
  const handleUpgrade = () => {
    // TODO: integrate payment / subscription logic here
    alert("Subscription flow coming soon!");
    setIsSubscribed(true); // for demo purposes, toggle subscription
  }

  return (
    <main>
      <Navbar/>
      <Heading/>

      <Hero 
        atsScore={atsScore}
        keywordMatch={keyWordMatch}
        skillGap={skillGap}
        setAtsScore={setAtsScore}
        setKeywordMatch={setKeywordMatch}
        setSkillGap={setSkillGap}
        isSubscribed={isSubscribed}
      />

      <AIAnalysisPanel 
      atsScore={atsScore} 
      keywordMatch={keyWordMatch} 
      skillGap={skillGap}   
      isSubscribed={isSubscribed}     
      />

      {!isSubscribed && (
        <div className="text-center my-8">
          <button
          onClick={handleUpgrade}
          className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-900 transition"
          >Upgrade to Pro</button>
        </div>
      )}
      <Testimonials/>
      <Footer/>      
    </main>
  );
}