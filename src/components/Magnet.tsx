import { useEffect, useRef, useState, type ReactNode } from 'react';

type MagnetProps = {
  children: ReactNode;
  /** How far outside the element's edge the magnetic field reaches, in px. */
  padding?: number;
  /** Divisor on the cursor offset — higher means a subtler pull. */
  strength?: number;
  disabled?: boolean;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperClassName?: string;
  innerClassName?: string;
};

/**
 * Mouse-following magnetic hover. Tracks the cursor relative to the element's
 * centre and translates the inner node toward it while the cursor is inside
 * the padded bounds — snapping back on a slower easing when it leaves.
 */
export default function Magnet({
  children,
  padding = 100,
  strength = 2,
  disabled = false,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.5s ease-in-out',
  wrapperClassName = '',
  innerClassName = '',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (disabled) {
      setActive(false);
      setOffset({ x: 0, y: 0 });
      return;
    }

    const handleMove = (event: MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const { left, top, width, height } = el.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;

      const inField =
        Math.abs(dx) < width / 2 + padding && Math.abs(dy) < height / 2 + padding;

      if (inField) {
        setActive(true);
        setOffset({ x: dx / strength, y: dy / strength });
      } else {
        setActive(false);
        setOffset({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, [padding, strength, disabled]);

  return (
    <div ref={ref} className={wrapperClassName}>
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          transition: active ? activeTransition : inactiveTransition,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}
