"use client"

import { motion } from "framer-motion"

export function HeroSection() {
    return(
        <div className="flex flex-col items-center justify-center h-screen relative z-10">
<motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <h1 id="main-title" className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-center">
                A browser that helps you <strong>work,</strong> <br />
                <span>not</span> just <em className="italic">surf</em>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-12 max-w-2xl text-lg text-foreground/80 text-center"
            >
              Meet Pandio — an AI-powered browser built to speed up how you search, read, research, and get things done online.
              Personalized assistance, instant summaries, natural-language search, and productivity tools integrated right into your browsing experience.
              Join early access & be one of the first to try it.
            </motion.p>

            <div id="gooey-btn" className="relative flex items-center group" style={{ filter: "url(#gooey-filter)" }}>
        <button className="absolute right-0 px-2.5 py-2 rounded-full bg-foreground text-background font-normal text-xs transition-all duration-300 hover:bg-foreground/90 cursor-pointer h-8 flex items-center justify-center -translate-x-24 group-hover:-translate-x-32 z-0">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </button>
        <button className="px-6 py-2 rounded-full bg-foreground text-background font-normal text-xs transition-all duration-300 hover:bg-foreground/90 cursor-pointer h-8 flex items-center z-10">
          Join Early Access
        </button>
      </div>
            </div>
        )
        }