"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Compass, Zap } from "lucide-react";

export function BrowserShowcase() {
  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            See Pandio in Action
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A powerful browser designed for productivity with AI assistance at
            your fingertips
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Feature Badges - positioned on the left with slight overlap */}
          <div className="absolute top-60 -left-12 z-20 hidden lg:flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-foreground/10 backdrop-blur-xl border border-white/10 text-white text-sm font-medium shadow-lg"
            >
              <Sparkles className="w-5 h-5 text-white" />
              <span>AI-Powered Chat</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-foreground/10 backdrop-blur-xl border border-white/10 text-white text-sm font-medium shadow-lg"
            >
              <Compass className="w-5 h-5 text-white" />
              <span>Smart Navigation</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-foreground/10 backdrop-blur-xl border border-white/10 text-white text-sm font-medium shadow-lg"
            >
              <Zap className="w-5 h-5 text-white" />
              <span>Lightning Fast</span>
            </motion.div>
          </div>

          {/* Screenshot Container - no browser frame */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
            <Image
              src="/Pandio app capture.PNG"
              alt="Pandio Browser Interface"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
