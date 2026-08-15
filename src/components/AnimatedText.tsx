import { useRef, type CSSProperties } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

type AnimatedTextProps = {
  text: string;
  className?: string;
  style?: CSSProperties;
};

type CharProps = {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
};

function Char({ char, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {char}
    </motion.span>
  );
}

/**
 * Character-by-character scroll reveal. Each glyph fades from 0.2 → 1 opacity
 * as the paragraph travels through the viewport, so the sentence "writes
 * itself" on scroll. Characters are grouped per word so wrapping stays natural.
 */
export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const total = text.length;
  let cursor = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wordIndex) => {
        const chars = word.split('');
        const node = (
          <span key={`w-${wordIndex}`} className="inline-block whitespace-nowrap">
            {chars.map((char, i) => {
              const index = cursor + i;
              return (
                <Char
                  key={`${wordIndex}-${i}`}
                  char={char}
                  progress={scrollYProgress}
                  range={[index / total, (index + 1) / total]}
                />
              );
            })}
          </span>
        );
        cursor += chars.length + 1; // +1 accounts for the separating space
        return wordIndex < words.length - 1 ? [node, ' '] : node;
      })}
    </p>
  );
}
