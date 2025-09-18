"use client";

import Hero from "@/components/insights/Hero";
import Tabs from "@/components/insights/Tabs";
import Grid, { InsightCard } from "@/components/insights/Grid";
import ContactForm from "@/components/insights/ContactForm";
import { useNavbar } from "@/contexts/NavbarContext";
import { useEffect, useState } from "react";

const mock: InsightCard[] = Array.from({ length: 10 }).map((_, i) => ({
  id: String(i + 1),
  kind: i % 3 === 0 ? "article" : "blog",
  title:
    i % 3 === 0
      ? "The Global Rise of Luxury Marketplaces: What Developers Should Know"
      : "Why Faster Lead Response is the New Battleground for Agencies",
  category: i % 3 === 0 ? "Article • Property Market" : "Blog • Market Trends",
  date: "September 5, 2025",
  imageSrc: "/images/city-bg.png",
}));

export default function InsightsPage() {
  const { setNavbarStyle } = useNavbar();
  const [active, setActive] = useState<"all" | "blogs" | "articles">("all");

  useEffect(() => {
    setNavbarStyle({ variant: "solid", textColor: "black" });
  }, [setNavbarStyle]);

  return (
    <main className="bg-white">
      <Hero
        category="Blog"
        tag="Market Trends"
        date="September 5, 2025"
        title="Why Faster Lead Response is Becoming the New Currency in Real Estate"
        excerpt="In today’s real estate market, speed isn’t just an advantage — it’s the difference between closing a deal and losing one. Research shows that inquiries left unanswered for even a few minutes see conversion rates drop sharply. For developers and agencies investing heavily in marketing, every second counts. This article explores why real-time engagement is reshaping buyer expectations, how AI is driving instant responses across channels, and what it means for growth teams competing in crowded property markets."
        imageSrc="/images/blog-image.png"
      />

      <Tabs
        counts={{ all: 144, blogs: 116, articles: 28 }}
        active={active}
        onChange={setActive}
      />

      <Grid source={mock} active={active} />
      <ContactForm />
    </main>
  );
}
