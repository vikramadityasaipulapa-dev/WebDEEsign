import { motion } from "framer-motion";

export default function SeriousMoment() {
  return (
    <section className="mx-auto max-w-xl px-6 py-24 text-center">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--ink-soft)]"
      >
        Okay, jokes aside…
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display mt-3 text-4xl font-semibold sm:text-5xl"
      >
        I really am sorry.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-lg leading-relaxed text-[var(--ink)]/80"
      >
        I know I messed up, and I didn't mean to make things weird. I could
        give you a whole explanation, but honestly —
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="font-hand mt-6 text-4xl sm:text-5xl"
        style={{ color: "var(--stamp)" }}
      >
        I was wrong. My bad. 🫶
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-8 space-y-1 text-[var(--ink)]/75"
      >
        <p>You don't have to forgive me immediately.</p>
        <p>But I hope we're good.</p>
      </motion.div>
    </section>
  );
}
