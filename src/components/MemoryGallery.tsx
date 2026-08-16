import { motion } from "framer-motion";

const memories = [
  { img: "/images/3.jpeg", caption: "No context required.", tilt: -6 },
  { img: "/images/2.jpeg", caption: "We were definitely behaving normally.", tilt: 4 },
  { img: "/images/6.jpeg", caption: "A surprisingly good day.", tilt: -3 },
  { img: "/images/4.jpeg", caption: "Evidence that we're actually friends.", tilt: 5 },
  { img: "/images/5.jpeg", caption: "Please ignore everything else.", tilt: -5 },
];

export default function MemoryGallery() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="font-display text-4xl font-semibold sm:text-5xl">
          Anyway, look at these idiots.
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
        {memories.map((m, i) => (
          <motion.div
            key={m.caption}
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: m.tilt }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
            whileHover={{ rotate: 0, scale: 1.06, y: -6, zIndex: 10 }}
            className="relative rounded-md bg-white p-2.5 pb-8 shadow-[0_10px_18px_-8px_rgba(43,36,32,0.35)]"
          >
            <img
              src={m.img}
              alt={m.caption}
              className="aspect-square w-full rounded-sm object-cover"
              style={m.img === "/images/4.jpeg" ? { objectPosition: "top" } : undefined}
            />
            <p className="font-hand absolute bottom-1 left-0 right-0 text-center text-sm leading-tight">
              {m.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
