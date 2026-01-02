"use client";

import { motion } from "framer-motion";
import {
  Search,
  Sparkles,
  Brain,
  FileText,
  Layers,
  MousePointer2,
  Command,
} from "lucide-react";

// Illustration: AI Research Assistant
const AIResearchIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    {/* Glowing orb background */}
    <div className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-[#FF8FC4]/30 to-[#FF6FAE]/10 blur-3xl" />

    {/* Central brain icon */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative z-10"
    >
      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#FF8FC4] to-[#E55A9A] flex items-center justify-center shadow-[0_8px_32px_rgba(255,111,174,0.4)]">
        <Brain className="w-12 h-12 text-white" />
      </div>
    </motion.div>

    {/* Floating search queries */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="absolute top-8 left-4 flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
    >
      <Search className="w-3.5 h-3.5 text-white/70" />
      <span className="text-xs text-white/80">market trends 2026</span>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="absolute top-16 right-4 flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
    >
      <Sparkles className="w-3.5 h-3.5 text-[#FF8FC4]" />
      <span className="text-xs text-white/80">summarize findings</span>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="absolute bottom-12 left-8 flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
    >
      <FileText className="w-3.5 h-3.5 text-white/70" />
      <span className="text-xs text-white/80">extract key insights</span>
    </motion.div>

    {/* Animated connection lines */}
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 5 }}
    >
      <motion.line
        x1="30%"
        y1="20%"
        x2="45%"
        y2="45%"
        stroke="url(#gradient1)"
        strokeWidth="1"
        strokeDasharray="4 4"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7 }}
      />
      <motion.line
        x1="70%"
        y1="25%"
        x2="55%"
        y2="45%"
        stroke="url(#gradient1)"
        strokeWidth="1"
        strokeDasharray="4 4"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
      />
      <motion.line
        x1="25%"
        y1="75%"
        x2="45%"
        y2="55%"
        stroke="url(#gradient1)"
        strokeWidth="1"
        strokeDasharray="4 4"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.9 }}
      />
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8FC4" />
          <stop offset="100%" stopColor="#E55A9A" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// Illustration: Page Context
const PageContextIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden px-4">
    {/* Background glow */}
    <div className="absolute w-64 h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />

    {/* Mock browser window */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-full max-w-[280px] rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm overflow-hidden"
    >
      {/* Browser header */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <div className="flex-1 mx-2 px-2 py-1 rounded bg-white/10 text-[10px] text-white/50 truncate">
          docs.example.com/api/guide
        </div>
      </div>

      {/* Page content with highlights */}
      <div className="p-3 space-y-2">
        <div className="h-2 w-3/4 rounded bg-white/20" />
        <div className="h-2 w-full rounded bg-white/10" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="h-2 w-5/6 rounded bg-gradient-to-r from-[#FF8FC4]/40 to-[#FF6FAE]/40 border border-[#FF8FC4]/30"
        />
        <div className="h-2 w-2/3 rounded bg-white/10" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="h-2 w-4/5 rounded bg-gradient-to-r from-[#FF8FC4]/40 to-[#FF6FAE]/40 border border-[#FF8FC4]/30"
        />
        <div className="h-2 w-1/2 rounded bg-white/10" />
        <div className="h-2 w-3/4 rounded bg-white/10" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="h-2 w-2/3 rounded bg-gradient-to-r from-[#FF8FC4]/40 to-[#FF6FAE]/40 border border-[#FF8FC4]/30"
        />
      </div>
    </motion.div>

    {/* Context extraction arrow */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.8 }}
      className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
    >
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF8FC4] to-[#E55A9A] flex items-center justify-center shadow-lg">
        <Layers className="w-5 h-5 text-white" />
      </div>
      <span className="text-[10px] text-white/60 text-center">
        Context
        <br />
        Aware
      </span>
    </motion.div>
  </div>
);

// Illustration: Intuitive Interface
const IntuitiveUIIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    {/* Background glow */}
    <div className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-emerald-500/15 to-cyan-500/15 blur-3xl" />

    <div className="relative w-full max-w-[300px] px-4">
      {/* Command palette mockup */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-xl overflow-hidden shadow-2xl"
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
          <Command className="w-4 h-4 text-white/50" />
          <span className="text-sm text-white/40">Search anything...</span>
          <div className="ml-auto flex items-center gap-1 px-2 py-0.5 rounded bg-white/10 text-[10px] text-white/50">
            ⌘K
          </div>
        </div>

        {/* Quick actions */}
        <div className="p-2 space-y-1">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gradient-to-r from-[#FF8FC4]/20 to-transparent border border-[#FF8FC4]/20"
          >
            <Sparkles className="w-4 h-4 text-[#FF8FC4]" />
            <span className="text-sm text-white/90">Summarize this page</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5"
          >
            <Search className="w-4 h-4 text-white/50" />
            <span className="text-sm text-white/70">Find in document</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5"
          >
            <FileText className="w-4 h-4 text-white/50" />
            <span className="text-sm text-white/70">Export as notes</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating cursor */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="absolute -right-2 bottom-8"
      >
        <MousePointer2
          className="w-5 h-5 text-white drop-shadow-lg"
          fill="white"
        />
      </motion.div>
    </div>
  </div>
);

interface BentoCardProps {
  title: string;
  description: string;
  Component: React.ComponentType;
  className?: string;
}

const BentoCard = ({
  title,
  description,
  Component,
  className = "",
}: BentoCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`overflow-hidden rounded-2xl bg-foreground/50 backdrop-blur-sm border-b-2 border-foreground flex flex-col justify-start items-start relative group ${className}`}
  >
    {/* Hover glow effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#FF8FC4]/10 to-transparent rounded-2xl pointer-events-none" />

    <div className="self-stretch p-6 flex flex-col justify-start items-start gap-2 relative z-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
        <p className="self-stretch text-white text-lg font-medium leading-7">
          {title}
        </p>
        <p className="text-white/70 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
    <div className="self-stretch h-56 relative z-10">
      <Component />
    </div>
  </motion.div>
);

export function Features() {
  const cards = [
    {
      title: "AI-Powered Research Assistant",
      description:
        "Ask questions, get instant summaries, and uncover insights across any webpage. Your AI co-pilot for smarter browsing.",
      Component: AIResearchIllustration,
    },
    {
      title: "Page-Aware Context",
      description:
        "Pandio understands the content you're viewing. Get relevant suggestions and answers based on what's on your screen.",
      Component: PageContextIllustration,
    },
    {
      title: "Effortless, Intuitive Interface",
      description:
        "A clean, distraction-free experience with powerful tools always one keystroke away. Built for flow, not friction.",
      Component: IntuitiveUIIllustration,
    },
  ];

  return (
    <section className="w-full px-4 md:px-8 py-16 md:py-24 relative z-10">
      {/* Background blur decoration */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#FF8FC4]/8 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Built for How You Work
          </h2>
          <p className="text-lg text-foreground max-w-xl mx-auto">
            Pandio combines intelligent AI with seamless design to transform
            every browsing session into a productive experience.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BentoCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
