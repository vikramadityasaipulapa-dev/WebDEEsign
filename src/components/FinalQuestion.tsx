import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DoodleStar, DoodleHeart } from "./Doodles";

type Result = "yes" | "no-final" | null;

const confettiColors = ["var(--pink)", "var(--lavender)", "var(--peach)", "var(--yellow)", "var(--stamp)"];

function Confetti() {
  const pieces = Array.from({ length: 26 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 0.3;
        const duration = 1.4 + Math.random() * 1;
        const color = confettiColors[i % confettiColors.length];
        const size = 6 + Math.random() * 8;
        const rotate = Math.random() * 360;
        return (
          <motion.span
            key={i}
            initial={{ y: -20, x: 0, opacity: 1, rotate: 0 }}
            animate={{ y: 340, x: (Math.random() - 0.5) * 80, opacity: 0, rotate }}
            transition={{ duration, delay, ease: "easeIn" }}
            className="absolute top-0 rounded-sm"
            style={{
              left: `${left}%`,
              width: size,
              height: size * 0.4,
              background: color,
            }}
          />
        );
      })}
    </div>
  );
}

export default function FinalQuestion() {
  const [result, setResult] = useState<Result>(null);
  const [nopeAttempts, setNopeAttempts] = useState(0);
  const [nopePos, setNopePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const dodge = () => {
    if (nopeAttempts >= 3) {
      setResult("no-final");
      return;
    }
    const range = 90;
    setNopePos({
      x: (Math.random() - 0.5) * range,
      y: (Math.random() - 0.5) * 50,
    });
    setNopeAttempts((n) => n + 1);
  };

  return (
    <section
      ref={containerRef}
      className="relative mx-auto max-w-2xl px-6 py-24 text-center"
    >
      {result === "yes" && <Confetti />}

      <AnimatePresence mode="wait">
        {!result && (
          <motion.div
            key="question"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-4 flex justify-center gap-3">
              <DoodleStar className="h-6 w-6" />
              <DoodleHeart className="h-6 w-6" />
            </div>
            <h2 className="font-display text-4xl font-semibold sm:text-6xl">
              So… are we good?
            </h2>

            <div className="relative mt-10 flex min-h-[90px] flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.button
                whileHover={{ y: -3, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setResult("yes")}
                className="rounded-full px-8 py-4 font-display text-lg font-semibold shadow-[0_6px_0_0_rgba(43,36,32,0.15)]"
                style={{ background: "var(--ink)", color: "var(--cream)" }}
              >
                Yeah, we're good 🫶
              </motion.button>

              <motion.button
                animate={{ x: nopePos.x, y: nopePos.y }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                onMouseEnter={dodge}
                onClick={dodge}
                className="rounded-full border-2 px-8 py-4 font-display text-lg font-semibold"
                style={{ borderColor: "var(--ink)", color: "var(--ink)" }}
              >
                Nope.
              </motion.button>
            </div>
          </motion.div>
        )}

        {result === "yes" && (
          <motion.div
            key="yes"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 16 }}
          >
            <h2 className="font-display text-4xl font-semibold sm:text-6xl">
              LET'S GOOOO 😭
            </h2>
            <p className="font-hand mt-4 text-2xl" style={{ color: "var(--stamp)" }}>
              I promise to use my brain next time.
            </p>
          </motion.div>
        )}

        {result === "no-final" && (
          <motion.div
            key="no"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="font-display text-3xl font-semibold sm:text-5xl">
              Okay okay 😭
            </h2>
            <p className="mt-4 text-lg text-[var(--ink)]/80">
              I'll give you time.
            </p>
            <p className="font-hand mt-2 text-xl text-[var(--ink-soft)]">
              But I reserve the right to send snacks as a peace offering.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
