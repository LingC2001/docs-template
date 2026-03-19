"use client";
import { useEffect, useRef } from "react";
import mermaid from "mermaid";

let initialized = false;

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!initialized) {
      mermaid.initialize({
        startOnLoad: false,
        theme: "default",
        securityLevel: "loose",
      });
      initialized = true;
    }

    const el = ref.current;
    if (!el) return;

    const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`;
    mermaid.render(id, chart).then(({ svg }) => {
      el.innerHTML = svg;
    });
  }, [chart]);

  return <div ref={ref} className="my-4 flex justify-center [&_svg]:max-w-full" />;
}
