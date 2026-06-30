"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/constants";

function CountUp({
  target,
  suffix,
  start,
}: {
  target: number;
  suffix: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame: number;
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="bg-eduo-blue section-padding" ref={ref}>
      <div className="container-max">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="text-5xl sm:text-6xl font-bold text-white mb-2 tabular-nums">
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  start={started}
                />
              </div>
              <div className="text-white/75 text-sm sm:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Sub note */}
        <p className="text-center text-white/80 text-sm mt-12 max-w-xl mx-auto">
          SIA EDUO ir licencēta organizācija, kuras mērķis ir piedāvāt modernu,
          interaktīvu un mūsdienīgu angļu valodas apmācību programmu bērniem
          no pirmsskolas līdz sākumskolai.
        </p>
      </div>
    </section>
  );
}
