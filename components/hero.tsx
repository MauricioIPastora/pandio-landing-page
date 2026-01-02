"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <h1
          id="main-title"
          className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-center"
        >
          A browser that helps you <strong>work</strong>, <br />
          <span>not</span> just <em className="italic">surf</em>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mb-12 max-w-2xl text-lg text-foreground/80 text-center"
      >
        Meet Pandio — an AI-powered browser built to speed up how you search,
        read, research, and get things done online. Personalized assistance,
        instant summaries, natural-language search, and productivity tools
        integrated right into your browsing experience. Join the waitlist & be
        one of the first to try it.
      </motion.p>

      <div className="rounded-2xl bg-foreground/50 backdrop-blur-sm transition-all duration-300 p-2.5 group hover:pl-8 hover:py-2 inline-flex">
        <div
          id="gooey-btn"
          className="relative flex items-center group"
          style={{ filter: "url(#gooey-filter)" }}
        >
          <button className="absolute right-0 px-2.5 py-2 rounded-full bg-gradient-to-b from-[#FF8FC4] via-[#FF6FAE] to-[#E55A9A] text-foreground text-xs transition-all duration-300 hover:bg-[#FF6FAE]/90 cursor-pointer h-8 flex items-center justify-center -translate-x-21 group-hover:-translate-x-29 z-0 shadow-[0_1px_4px_0_rgba(255,111,174,0.15)]">
            <svg
              className="w-3 h-3"
              fill="#FF6FAE"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7V17"
              />
            </svg>
          </button>
          <button className="px-6 py-2 rounded-full bg-gradient-to-b from-[#FF8FC4] via-[#FF6FAE] to-[#E55A9A] text-foreground text-sm transition-all duration-300 hover:bg-FF6FAE/90 cursor-pointer h-8 flex items-center z-10 shadow-[0_4px_14px_0_rgba(255,111,174,0.4),0_2px_4px_0_rgba(255,111,174,0.2)]">
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}
