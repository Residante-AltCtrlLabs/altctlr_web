"use client";

type TabsProps = {
  counts: { all: number; blogs: number; articles: number };
  active: "all" | "blogs" | "articles";
  onChange: (tab: "all" | "blogs" | "articles") => void;
};

const Tabs = ({ counts, active, onChange }: TabsProps) => {
  const base =
    "px-4 md:px-6 py-2 text-sm md:text-base rounded-full border transition-colors";

  return (
    <div className="bg-white text-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 py-6">
          <button
            className={`${base} ${
              active === "all"
                ? "bg-black text-white border-black"
                : "bg-white text-gray-700 border-gray-300 hover:border-black"
            }`}
            onClick={() => onChange("all")}
          >
            View All <span className="ml-1 text-gray-500">{counts.all}</span>
          </button>
          <button
            className={`${base} ${
              active === "blogs"
                ? "bg-black text-white border-black"
                : "bg-white text-gray-700 border-gray-300 hover:border-black"
            }`}
            onClick={() => onChange("blogs")}
          >
            Blogs <span className="ml-1 text-gray-500">{counts.blogs}</span>
          </button>
          <button
            className={`${base} ${
              active === "articles"
                ? "bg-black text-white border-black"
                : "bg-white text-gray-700 border-gray-300 hover:border-black"
            }`}
            onClick={() => onChange("articles")}
          >
            Articles{" "}
            <span className="ml-1 text-gray-500">{counts.articles}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
