
"use client";

import { useNavbar } from "@/contexts/NavbarContext";
import { useEffect } from "react";

const content: Record<string, {title:string, meta:string, about:string, duties:string[], requirements:string[]}> = {
  "frontend-engineer-react-nextjs": {
    title: "Frontend Engineer — React / Next.js",
    meta: "Engineering  •  Hybrid  •  Dubai, UAE  •  Full-time",
    about: "We’re looking for a frontend engineer who loves clean code and sharp design.",
    duties: [
      "Build and polish interfaces using React/Next.js and modern UI frameworks.",
      "Collaborate with designers to turn minimal, premium designs into pixel‑perfect experiences.",
      "Ensure performance and responsiveness across devices and browsers.",
      "Contribute to design systems and reusable components.",
      "Ship fast, iterate fast, and care about polish."
    ],
    requirements: [
      "Strong experience with React, Next.js, and TypeScript.",
      "Familiarity with Tailwind or modern CSS approaches.",
      "A sharp eye for UI/UX and detail.",
      "Comfortable moving quickly in an early‑stage product team.",
      "Bonus: experience with animations, motion design, or SaaS product interfaces."
    ]
  },
  "backend-engineer-node-python": {
    title: "Backend Engineer — Node.js / Python",
    meta: "Engineering  •  Remote  •  Riyadh, KSA  •  Full-time",
    about: "Help power the invisible engine that runs our ecosystem.",
    duties: ["Design APIs, scale services, and keep latency low.", "Own data models, queues, and observability."],
    requirements: ["Node.js or Python in production", "Postgres/Redis", "Cloud (Vercel/AWS/GCP)"]
  },
  "product-designer-saas-ai": {
    title: "Product Designer — SaaS & AI Platforms",
    meta: "Design  •  Hybrid  •  Dubai, UAE  •  Full-time",
    about: "Design systems behind systems. Create interfaces that make automation feel human.",
    duties: ["Own end‑to‑end flows", "Define tokens and components", "Prototype and validate"],
    requirements: ["Figma mastery", "SaaS/Platform experience", "Taste + systems thinking"]
  },
  "design-intern-ui-visual": {
    title: "Design Intern — UI/UX & Visual",
    meta: "Design  •  On-site  •  Riyadh, KSA  •  Internship",
    about: "Iterate fast, learn faster. Craft UI, visuals, and micro‑interactions that move metrics.",
    duties: ["Support product and brand", "Turn briefs into polished assets"],
    requirements: ["Figma basics", "Eye for detail", "Curious and proactive"]
  }
};

export default function JobDetail({ params }: { params: { slug: string } }) {
  const { setNavbarStyle } = useNavbar();
  useEffect(() => { setNavbarStyle({ variant: "solid", textColor: "black" }); }, [setNavbarStyle]);
  const job = content[params.slug] || content["frontend-engineer-react-nextjs"];

  return (
    <main className="bg-white text-black">
      <section className="max-w-5xl mx-auto px-6 md:px-8 pt-20 md:pt-24 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium">Build the <span className="italic font-normal">Future</span></h1>
        <p className="italic text-black/80 mt-1">of Real Estate Systems.</p>
        <p className="mt-4 text-sm md:text-base text-black/70">We’re creating the invisible engine behind every deal. If you’re driven to build, experiment, and redefine how real estate works, you’ll feel at home here.</p>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-8 pb-24">
        <div className="rounded-xl border border-black/30">
          <div className="p-5 md:p-7 border-b border-black/20 text-left">
            <h2 className="text-lg md:text-xl font-semibold">{job.title}</h2>
            <div className="text-[11px] md:text-xs text-black/60 mt-1">{job.meta}</div>
          </div>
          <div className="p-5 md:p-7 space-y-6 text-left">
            <div>
              <h3 className="font-semibold mb-2">About the Role</h3>
              <p className="text-sm text-black/80">{job.about}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What You’ll Do</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-black/80">
                {job.duties.map((d, i) => (<li key={i}>{d}</li>))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What We’re Looking For</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-black/80">
                {job.requirements.map((d, i) => (<li key={i}>{d}</li>))}
              </ul>
            </div>
            <div className="flex gap-3 pt-2">
              <button className="px-4 py-2 rounded-full border border-black bg-black text-white text-sm">Apply Now</button>
              <button className="px-4 py-2 rounded-full border border-black text-sm">Cancel</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
