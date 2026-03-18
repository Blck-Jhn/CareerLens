"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const features = [
    {
      img: "/resume6.jpg",
      title: "Resume Builder",
      desc: "Build professional resumes easily with AI suggestions.",
      href:"/resume-builder",
    },
    {
      img: "/salary.jpg",
      title: "AI Salary Match",
      desc: "Get matched with the best-paying jobs using AI insights.",
      href:"/salary-match",
    },
    {
      img: "/interview.jpg",
      title: "Interview Prep",
      desc: "Practice AI-powered interview questions and answers.",
      href:"/interview-prep",
    },
    {
      img: "/careerpath.jpg",
      title: "Career Path Guidance",
      desc: "Discover the best career path tailored to your skills.",
      href:"/career-path",
    },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        {/* Logo */}
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


        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {/* Features Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setIsFeaturesOpen(true)}
            onMouseLeave={() => setIsFeaturesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue-700 transition">
              Features
            <span
              className={`inline-block transform transition-transform duration-300 ${
                isFeaturesOpen ? "rotate-180" : "rotate-0"
                }`}
                >
                  ▾
               </span>
            </button>

            {/* Mega Menu Dropdown */}
            <div
              className={`absolute top-full left-0 mt-2 w-lg bg-white border border-gray-100 rounded-xl shadow-xl p-6 transition-all duration-300 ease-out transform ${
                isFeaturesOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <a
                    key={feature.title}
                    href={feature.href}
                    className={`flex items-start gap-4 p-3 rounded-xl transition transform hover:scale-105 hover:shadow-lg ${
                      isFeaturesOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                    style={{
                      transitionDelay: `${idx * 100}ms`,
                      transitionProperty: "opacity, transform",
                      transitionDuration: "300ms",
                      transitionTimingFunction: "ease-out",
                    }}
                  >
                    <Image
                      src={feature.img}
                      alt={feature.title}
                      width={60}
                      height={60}
                      className="rounded-lg"
                    />
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-xs text-gray-600">{feature.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <a href="/about" className="hover:text-blue-700 transition">
            How it works
          </a>
          <a href="/pricing" className="hover:text-blue-700 transition">
            Pricing
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-3xl font-bold text-gray-900 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-semibold text-gray-700 hover:text-green-500 transition">
            Log in
          </button>
          <button className="bg-blue-600 hover:bg-black hover:text-green-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition shadow-md hover:shadow-lg">
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-3xl font-bold text-gray-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-6 p-6">
          <button
            onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
            className="flex justify-between items-center w-full font-medium text-gray-700"
          >
            Features {isFeaturesOpen ? "▲" : "▼"}
          </button>

          {isFeaturesOpen && (
            <div className="flex flex-col gap-4 pl-2">
              {features.map((feature, idx) => (
                <a
                  key={feature.title}
                  href={feature.href}
                  className="flex items-center gap-3 transition transform hover:translate-x-1 duration-200  hover:text-blue-900"
                >
                  <Image src={feature.img} alt={feature.title} width={30} height={30} />
                  {feature.title}
                </a>
              ))}
            </div>
          )}

          <Link
            href="/about"
            className="font-medium text-gray-700 transition transform hover:translate-x-1 duration-200  hover:text-blue-900"
          >
            How it works
          </Link>
          <Link
            href="/pricing"
            className="font-medium text-gray-700 transition transform hover:translate-x-1 duration-200  hover:text-blue-900"
          >
            Pricing
          </Link>
          <button className="bg-blue-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold mt-4 w-full hover:scale-105 transition-transform duration-200">
            Get Started
          </button>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/25 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}