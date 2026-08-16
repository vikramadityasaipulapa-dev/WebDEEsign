import { motion } from "framer-motion";
import Stamp from "./Stamp";
import { DoodleStar } from "./Doodles";

const caseFiles = [
  { label: "The Incident", value: "Yeah… that one." },
  { label: "My Defense", value: "I have none." },
  { label: "My Current Position", value: "I'm sorry." },
];

const stats = [
  { label: "Regret level", value: "98%", accent: "var(--pink)" },
  { label: "Brain cells involved", value: "0", accent: "var(--lavender)" },
  { label: "Time spent thinking about what I did", value: "Unfortunately, yes.", accent: "var(--peach)" },
  { label: "Probability I should've apologized sooner", value: "100%", accent: "var(--yellow)" },
  { label: "Websites normally required to say sorry", value: "0", accent: "var(--pink)" },
  { label: "Number I built anyway", value: "1", accent: "var(--lavender)" },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  };
}

export default function ApologyDashboard() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-10 text-center">
        <Stamp text="Case Reference #001" />
        <h2 className="font-display mt-4 text-4xl font-semibold sm:text-5xl">
          THE OFFICIAL APOLOGY<span className="align-super text-lg">™️</span>
        </h2>
        <p className="mt-3 text-[var(--ink-soft)]">
          After extensive internal investigation…
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {caseFiles.map((item, i) => (
          <motion.div
            key={item.label}
            {...fadeUp(i * 0.08)}
            whileHover={{ y: -4, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
            className="rounded-3xl border-2 border-[var(--ink)]/10 bg-white/70 p-6 text-center shadow-[0_8px_0_0_rgba(43,36,32,0.06)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink-soft)]">
              {item.label}
            </p>
            <p className="font-hand mt-3 text-3xl">{item.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Chances gauge */}
      <motion.div
        {...fadeUp(0.2)}
        className="mt-6 rounded-3xl border-2 border-[var(--ink)]/10 bg-white/70 p-7 text-center shadow-[0_8px_0_0_rgba(43,36,32,0.06)]"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink-soft)]">
          Chances of me doing it again
        </p>
        <div className="mx-auto mt-4 flex max-w-sm items-center gap-3">
          <div className="h-4 flex-1 overflow-hidden rounded-full bg-[var(--cream-2)]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "15%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="h-full rounded-full"
              style={{ background: "var(--stamp)" }}
            />
          </div>
          <span className="font-display text-xl font-semibold" style={{ color: "var(--stamp)" }}>
            15%
          </span>
        </div>
        <p className="font-hand mt-3 text-lg text-[var(--ink-soft)]">
          We are working hard to get this down to 0%.
        </p>
      </motion.div>

      {/* Analytics dashboard */}
      <div className="mt-16">
        <div className="mb-8 flex items-center justify-center gap-2">
          <DoodleStar className="h-5 w-5" color="var(--lavender)" />
          <h3 className="font-display text-2xl font-semibold sm:text-3xl">
            My apology analytics
          </h3>
          <DoodleStar className="h-5 w-5" color="var(--lavender)" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...fadeUp(i * 0.06)}
              whileHover={{ y: -4 }}
              className="rounded-2xl border-2 border-[var(--ink)]/10 bg-white/70 p-5 shadow-[0_6px_0_0_rgba(43,36,32,0.05)]"
            >
              <div
                className="mb-3 h-1.5 w-10 rounded-full"
                style={{ background: stat.accent }}
              />
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink-soft)]">
                {stat.label}
              </p>
              <p className="font-display mt-2 text-2xl font-semibold">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
