import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

type Segment = { text: string; className?: string };

/**
 * Splits text into words, each sliding up (y:20 -> 0) with a staggered delay.
 * `showAsterisk` adds a superscript * on the last word.
 */
export function WordsPullUp({
  text,
  className = "",
  showAsterisk = false,
}: {
  text: string;
  className?: string;
  showAsterisk?: boolean;
}) {
  const words = text.split(" ");
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
          >
            {isLast && showAsterisk ? (
              <span className="relative">
                {word}
                <sup className="absolute -right-[0.3em] top-[0.65em] text-[0.31em]">
                  *
                </sup>
              </span>
            ) : (
              word
            )}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        );
      })}
    </span>
  );
}

/**
 * Same pull-up effect across multiple styled segments, preserving per-word
 * className. Words wrap inside an inline-flex container.
 */
export function WordsPullUpMultiStyle({
  segments,
  className = "",
}: {
  segments: Segment[];
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const words = segments.flatMap((seg) =>
    seg.text.split(" ").map((w) => ({ w, cn: seg.className ?? "" }))
  );

  return (
    <span
      ref={ref}
      className={`inline-flex flex-wrap justify-center ${className}`}
    >
      {words.map(({ w, cn }, i) => (
        <motion.span
          key={i}
          className={`inline-block ${cn}`}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
        >
          {w}&nbsp;
        </motion.span>
      ))}
    </span>
  );
}

function Letter({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

/**
 * Reveals a paragraph character-by-character as the user scrolls through it
 * (opacity 0.2 -> 1), progressive left-to-right.
 */
export function ScrollReveal({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const chars = text.split("");

  return (
    <p ref={ref} className={className}>
      {chars.map((char, i) => {
        const start = i / chars.length;
        const range: [number, number] = [
          Math.max(0, start - 0.1),
          start + 0.05,
        ];
        return (
          <Letter key={i} char={char} progress={scrollYProgress} range={range} />
        );
      })}
    </p>
  );
}
