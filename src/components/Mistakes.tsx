import { motion } from "framer-motion";

const items = [
  {
    n: "01",
    title: "Think first",
    body: "Revolutionary concept. I clearly need to explore it further.",
    tilt: -3,
    bg: "var(--pink)",
  },
  {
    n: "02",
    title: "Listen",
    body: "Apparently listening before responding is useful.",
    tilt: 2,
    bg: "var(--lavender)",
  },
  {
    n: "03",
    title: "Not be stupid",
    body: "Still in beta testing.",
    tilt: -2,
    bg: "var(--peach)",
  },
  {
    n: "04",
    title: "Apologize sooner",
    body: "Instead of building a website at 1AM.",
    tilt: 3,
    bg: "var(--yellow)",
  },
];

export default function Mistakes() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="font-display text-4xl font-semibold sm:text-5xl">
          Things I should've done
        </h2>
        <p className="font-hand mt-2 text-xl text-[var(--ink-soft)]">
          A short, humbling list.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <motion.div
            key={item.n}
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: item.tilt }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            whileHover={{ rotate: 0, y: -8, scale: 1.03 }}
            className="rounded-3xl border-2 border-[var(--ink)]/10 p-6 shadow-[0_8px_0_0_rgba(43,36,32,0.08)]"
            style={{ background: `${item.bg}` }}
          >
            <span className="font-display text-3xl font-semibold opacity-40">
              {item.n}
            </span>
            <h3 className="font-display mt-3 text-xl font-semibold">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-[var(--ink)]/75">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
