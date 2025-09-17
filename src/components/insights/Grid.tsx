"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type InsightCard = {
  id: string;
  kind: "blog" | "article";
  title: string;
  category: string;
  date: string;
  imageSrc: string;
};

const Card = ({ title, category, date, imageSrc }: InsightCard) => {
  return (
    <article className="group bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="relative w-full h-44">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <div className="text-xs text-gray-500">
          {category} • {date}
        </div>
        <h3 className="mt-2 text-lg font-semibold leading-snug group-hover:underline">
          {title}
        </h3>
      </div>
    </article>
  );
};

type GridProps = {
  source: InsightCard[];
  active: "all" | "blogs" | "articles";
};

const Grid = ({ source, active }: GridProps) => {
  const [items, setItems] = useState<InsightCard[]>(source.slice(0, 12));
  const [cursor, setCursor] = useState(12);
  const [hasMore, setHasMore] = useState(true);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const filtered = source.filter((i) => {
    if (active === "all") return true;
    return active === "blogs" ? i.kind === "blog" : i.kind === "article";
  });

  useEffect(() => {
    setItems(filtered.slice(0, 12));
    setCursor(12);
    setHasMore(filtered.length > 12);
  }, [active]);

  useEffect(() => {
    if (!sentinelRef.current) return;
    const el = sentinelRef.current;
    const io = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && hasMore) {
        const next = filtered.slice(cursor, cursor + 9);
        setItems((prev) => [...prev, ...next]);
        setCursor((c) => c + next.length);
        if (cursor + 9 >= filtered.length) setHasMore(false);
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [cursor, hasMore, filtered.length]);

  return (
    <section className="bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
        <div ref={sentinelRef} className="h-8" />
      </div>
    </section>
  );
};

export default Grid;
