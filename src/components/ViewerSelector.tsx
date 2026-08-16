import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Eye } from "lucide-react";
import Stamp from "./Stamp";

// Local viewers array to ensure updated names/images are used immediately.
const viewers = [
  { name: "Deeksha Medishetti", image: "/images/1.jpeg", message: "Oh. You found this too. Please keep your opinions to yourself.", caption: "Official apology witness" },
  { name: "Holika", image: "/images/4.jpeg", message: "Okay, before you judge me, at least read the whole thing.", caption: "Jury of one" },
  { name: "Sweety", image: "/images/2.jpeg", message: "Congratulations. You are now an official witness to my apology.", caption: "Reluctant witness" },
  { name: "Dee Dee", image: "/images/7.jpeg", message: "Yes, I know how this looks. No, I will not be taking questions.", caption: "Character reference, allegedly" },
  { name: "Hehe", image: "/images/friend5.svg", message: "I built you a whole website. Please clap.", caption: "Exhibit A" },
];

const defaultViewerIndex = 0;

export default function ViewerSelector() {
  const [index, setIndex] = useState(defaultViewerIndex);
  const [open, setOpen] = useState(false);
  const viewer = viewers[index];

  return (
    <section id="viewer" className="mx-auto max-w-2xl px-6 py-20">
      <div className="mb-6 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ink-soft)]">
        <Eye size={16} />
        Who's viewing?
      </div>

      <div
        className="relative mx-auto rounded-[28px] border-2 border-[var(--ink)]/10 bg-white/60 p-6 shadow-[0_10px_0_0_rgba(43,36,32,0.06)] backdrop-blur-sm sm:p-8"
        style={{ background: "linear-gradient(150deg, rgba(255,255,255,0.75), rgba(255,255,255,0.4))" }}
      >
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
          <div className="relative shrink-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={viewer.image}
                src={viewer.image}
                alt={viewer.name}
                initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: -4 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 4 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="h-20 w-20 rounded-2xl border-2 border-white object-cover shadow-md sm:h-24 sm:w-24"
                style={{ objectPosition: "top" }}
              />
            </AnimatePresence>
          </div>

          <div className="flex-1 text-center sm:text-left">
            {/* dropdown trigger */}
            <button
              onClick={() => setOpen((o) => !o)}
              className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--ink)] px-4 py-2 font-semibold transition-transform hover:-translate-y-0.5"
            >
              {viewer.name}
              <ChevronDown
                size={16}
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence mode="wait">
              <motion.p
                key={viewer.message}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="font-hand mt-4 text-2xl leading-snug sm:text-[26px]"
              >
                "{viewer.message}"
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={viewer.caption}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-2"
              >
                <Stamp text={viewer.caption} className="text-[10px]" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-5 overflow-hidden border-t-2 border-dashed border-[var(--ink)]/15 pt-4"
            >
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {viewers.map((v, i) => (
                  <button
                    key={v.name}
                    onClick={() => {
                      setIndex(i);
                      setOpen(false);
                    }}
                    className={`flex items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors ${
                      i === index
                        ? "bg-[var(--ink)] text-[var(--cream)]"
                        : "bg-[var(--cream-2)] hover:bg-[var(--peach)]/40"
                    }`}
                  >
                    <img
                      src={v.image}
                      alt=""
                      className="h-6 w-6 rounded-full object-cover"
                    />
                    {v.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
