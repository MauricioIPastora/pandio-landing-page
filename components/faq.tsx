"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export function FAQ() {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-5xl text-center">
          <strong>FAQ</strong>
        </h1>
      </motion.div>
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-2xl mt-10 text-white"
      >
        <AccordionItem
          value="item-1"
          className="border-b-2 border-foreground bg-foreground/50 backdrop-blur-sm rounded-2xl my-3"
        >
          <AccordionTrigger className="p-2 px-3 cursor-pointer">
            What platforms is Pandio available on?
          </AccordionTrigger>
          <AccordionContent className="px-3">
            <p>Pandio is currently available on Mac, Windows, and Linux</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="border-b-2 border-foreground bg-foreground/50 backdrop-blur-sm rounded-2xl my-3"
        >
          <AccordionTrigger className="p-2 px-3 cursor-pointer">
            How do I install Pandio?
          </AccordionTrigger>
          <AccordionContent className="px-3">
            <p>
              Pandio is currently unavailable to download. Join our waitlist to
              be one of the few to participate in our first limited release
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="border-b-2 border-foreground bg-foreground/50 backdrop-blur-sm rounded-2xl my-3"
        >
          <AccordionTrigger className="p-2 px-3 cursor-pointer">
            Is Pandio Free?
          </AccordionTrigger>
          <AccordionContent className="px-3">
            <p>Pandio is currently free to use</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="border-b-2 border-foreground bg-foreground/50 backdrop-blur-sm rounded-2xl my-3"
        >
          <AccordionTrigger className="p-2 px-3 cursor-pointer">
            How does Pandio get its answers?
          </AccordionTrigger>
          <AccordionContent className="px-3">
            <p>
              Pandio takes the context of the page you&apos;re browsing in order
              to answer your questions
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
