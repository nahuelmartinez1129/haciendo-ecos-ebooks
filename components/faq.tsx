 "use client";

import { useState } from "react";

type Item = { q: string; a: string };

export function FAQ({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto mt-10 max-w-3xl space-y-3">
      {items.map((item, index) => {
        const active = open === index;
        return (
          <div key={item.q} className="overflow-hidden rounded-2xl border border-white bg-white shadow-card">
            <button
              type="button"
              aria-expanded={active}
              onClick={() => setOpen(active ? null : index)}
              className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left font-black"
            >
              <span>{item.q}</span>
              <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-mint text-brand-teal transition ${active ? "rotate-45" : ""}`}>+</span>
            </button>
            {active && (
              <div className="border-t border-slate-100 px-6 pb-6 pt-4 text-sm leading-7 text-slate-600">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
