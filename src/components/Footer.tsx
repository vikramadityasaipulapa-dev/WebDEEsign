import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DoodleStar } from "./Doodles";

export default function Footer() {
  const [found, setFound] = useState(false);

  return (
    <footer className="relative mx-auto max-w-2xl px-6 pb-20 pt-10 text-center">
      <p className="font-hand text-2xl">
        P.S. Thanks for putting up with me.
      </p>
      <p className="mt-3 text-xs text-[var(--ink-soft)]">
        This entire website could've been replaced by one text saying
        "sorry".
      </p>
      <p className="mt-1 text-[11px] text-[var(--ink-soft)]/70">
        But where's the fun in that?
      </p>

      {/* easter egg */}
      <button
        aria-label="A tiny star"
        onClick={() => setFound(true)}
        className="absolute bottom-3 right-6 opacity-40 transition-opacity hover:opacity-100 sm:right-10"
      >
        <motion.div
          animate={found ? {} : { rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <DoodleStar className="h-4 w-4" color="var(--lavender)" />
        </motion.div>
      </button>

      <AnimatePresence>
        {found && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mx-auto mt-6 max-w-xs rounded-2xl border-2 border-[var(--ink)]/10 bg-white/70 p-4 text-sm"
          >
            <p className="font-semibold">You found the secret apology.</p>
            <p className="font-hand mt-1 text-lg text-[var(--ink-soft)]">
              Okay seriously though… you're pretty cool.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
