import { motion } from "framer-motion";

interface StampProps {
  text: string;
  className?: string;
  delay?: number;
}

/**
 * The signature visual motif of the site: a wobbly red ink stamp,
 * as if every section has been "processed" by an extremely
 * unserious internal review board.
 */
export default function Stamp({ text, className = "", delay = 0 }: StampProps) {
  return (
    <motion.div
      initial={{ scale: 2.2, opacity: 0, rotate: -18 }}
      whileInView={{ scale: 1, opacity: 1, rotate: -10 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ type: "spring", stiffness: 260, damping: 14, delay }}
      className={`inline-flex select-none items-center justify-center rounded-full border-[3px] px-4 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.18em] ${className}`}
      style={{
        borderColor: "var(--stamp)",
        color: "var(--stamp)",
        transform: "rotate(-10deg)",
      }}
    >
      {text}
    </motion.div>
  );
}
