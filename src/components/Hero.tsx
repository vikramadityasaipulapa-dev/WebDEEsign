import { motion } from "framer-motion";
import { DoodleStar, DoodleHeart, DoodleScribble } from "./Doodles";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 pt-16 text-center">
      {/* floating doodles */}
      <DoodleStar className="absolute left-[8%] top-[18%] h-8 w-8 rotate-[-12deg] opacity-90 md:h-10 md:w-10" />
      <DoodleHeart className="absolute right-[10%] top-[26%] h-7 w-7 rotate-[10deg] opacity-90 md:h-9 md:w-9" />
      <DoodleStar
        className="absolute bottom-[22%] left-[14%] h-5 w-5 rotate-[16deg] opacity-80"
        color="var(--lavender)"
      />
      <DoodleHeart
        className="absolute bottom-[16%] right-[16%] h-6 w-6 rotate-[-8deg] opacity-80"
        color="var(--peach)"
      />

      <motion.div
        initial={{ opacity: 0, y: 14, rotate: -4 }}
        animate={{ opacity: 1, y: 0, rotate: -4 }}
        transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
        className="mb-6 inline-flex items-center gap-1.5 rounded-full border-2 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.2em]"
        style={{ borderColor: "var(--stamp)", color: "var(--stamp)" }}
      >
        <DoodleStar className="h-3 w-3" color="var(--stamp)" /> Extremely unnecessary
        <DoodleStar className="h-3 w-3" color="var(--stamp)" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28, duration: 0.6, ease: "easeOut" }}
        className="font-display text-[13vw] font-semibold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
      >
        Okay fine...
        <br />
        I'm sorry <span className="inline-block">😭</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.48, duration: 0.5 }}
        className="mt-6 max-w-md text-lg text-[var(--ink-soft)] md:text-xl"
      >
        Yes, I made a website instead of just saying it normally.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="font-hand mt-3 text-2xl md:text-3xl"
        style={{ color: "var(--stamp)" }}
      >
        But hear me out.
      </motion.p>

      <motion.a
        href="#viewer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        whileHover={{ y: -3, rotate: -1 }}
        whileTap={{ scale: 0.96 }}
        className="mt-10 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold shadow-[0_6px_0_0_rgba(43,36,32,0.15)] transition-shadow"
        style={{ background: "var(--ink)", color: "var(--cream)" }}
      >
        Let me explain myself
        <DoodleScribble className="hidden h-4 w-8 sm:block" color="var(--cream)" />
        <span aria-hidden>→</span>
      </motion.a>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute bottom-8 text-[var(--ink-soft)]"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
