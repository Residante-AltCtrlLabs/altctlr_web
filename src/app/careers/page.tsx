"use client";

import JobCard from "@/components/JobCard";
import { useNavbar } from "@/contexts/NavbarContext";
import { useEffect } from "react";

const bullets = [
  {
    title: "Impact from Day One",
    desc: "We’re not patching tools — we’re reshaping how an entire industry works.",
  },
  {
    title: "Work Across Boundaries",
    desc: "Tech, real estate, AI, design — our teams sit at the intersection.",
  },
  {
    title: "Global Vision",
    desc: "From Dubai to global markets, your work scales beyond borders.",
  },
  {
    title: "Growth Together",
    desc: "Learn fast, push boundaries, and build alongside ambitious people.",
  },
];

const jobs = [
  {
    slug: "frontend-engineer-react-nextjs",
    title: "Frontend Engineer — React / Next.js",
    meta: "Engineering  •  Hybrid  •  Dubai, UAE  •  Full-time",
    about:
      "We’re looking for a frontend engineer who loves clean code and sharp design. Your work won’t just build screens — it will shape how the product works across the world.",
  },
  {
    slug: "backend-engineer-node-python",
    title: "Backend Engineer — Node.js / Python",
    meta: "Engineering  •  Remote  •  Riyadh, KSA  •  Full-time",
    about:
      "Help power the invisible engine that runs our ecosystem. Build scalable services that make real-time responses possible — without a single lead slipping through the cracks.",
  },
  {
    slug: "product-designer-saas-ai",
    title: "Product Designer — SaaS & AI Platforms",
    meta: "Design  •  Hybrid  •  Dubai, UAE  •  Full-time",
    about:
      "Design the systems behind the systems. Create interfaces that make automation feel human and effortless.",
  },
  {
    slug: "design-intern-ui-visual",
    title: "Design Intern — UI/UX & Visual",
    meta: "Design  •  On-site  •  Riyadh, KSA  •  Internship",
    about:
      "Iterate fast, learn faster. Craft UI, visuals, and micro-interactions that move metrics.",
  },
];

export default function CareersPage() {
  const { setNavbarStyle } = useNavbar();

  useEffect(() => {
    setNavbarStyle({
      variant: "solid",
      textColor: "black",
    });
  }, [setNavbarStyle]);

  return (
    <div className="bg-white text-black">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 pt-20 md:pt-24 pb-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-center">
          Build the <span className="italic font-normal">Future</span>
        </h1>
        <p className="text-center italic text-black/80 mt-2">
          of Real Estate Systems.
        </p>
        <p className="text-center text-xs md:text-base text-black/70 mt-6 !max-w-5xl mx-auto">
          We’re creating the invisible engine behind every deal. If you’re
          driven to build, experiment, and redefine how real estate works,
          you’ll feel at home here.
        </p>
      </section>

      {/* Why Work With Us */}
      <section className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="rounded-xl border border-black/50">
          <div className="p-5 md:p-7">
            <h2 className="text-2xl md:text-3xl font-medium">
              Why Work <span className="italic font-normal">With Us</span>
            </h2>
          </div>
          <div className="p-5 md:p-7">
            <ul className="space-y-6">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-4">
                  <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-black" />
                  <div>
                    <p className="font-medium">{b.title}</p>
                    <p className="text-sm text-black/70 mt-1">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 mt-6">
        <div className="rounded-xl border border-black/50">
          <div className="p-5 md:p-7">
            <h2 className="text-2xl md:text-3xl font-medium">
              How <span className="italic font-normal">We Work</span>
            </h2>
          </div>
          <div className="p-5 md:p-7 text-sm md:text-base text-black/80 leading-relaxed">
            We value speed, clarity, and ownership. We keep hierarchies flat and
            feedback sharp. Every idea is tested against one principle: does
            this make the system smarter and simpler for our clients?
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="max-w-5xl mx-auto md:px-8 my-10 mb-24">
        <div className="rounded-xl">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium">
              Current <span className="italic font-normal">Openings</span>
            </h2>
          </div>

          {/* Banner: No open roles right now + email */}
          <div className="py-6">
            <div className="rounded-lg border border-black/50 p-8 text-sm text-black/80">
              <span className="font-bold">No open roles right now.</span>{" "}
              <br></br> But we’re always open to meeting people who think
              differently. Write to us at
              <a href="mailto:careers@altctrl.ai" className="ml-1 underline">
                careers@altctrl.ai
              </a>
            </div>
          </div>

          {/* Job cards */}
          <div className="space-y-4 md:space-y-5 mt-6 pb-20">
            {jobs.map((job, idx) => (
              <JobCard
                key={idx}
                slug={(job as any).slug}
                title={job.title}
                meta={job.meta}
                about={job.about}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
