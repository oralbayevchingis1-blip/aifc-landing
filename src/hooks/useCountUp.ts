import { useEffect, useState } from "react";

export function useCountUp(target: number, enabled: boolean, durationMs = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let start: number | null = null;
    let frame = 0;

    const tick = (t: number) => {
      if (start === null) start = t;
      const elapsed = t - start;
      const p = Math.min(elapsed / durationMs, 1);
      const eased = 1 - (1 - p) ** 2;
      setValue(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [enabled, target, durationMs]);

  return value;
}
