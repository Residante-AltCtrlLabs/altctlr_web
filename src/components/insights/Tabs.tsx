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
    <div className="bg-[#F2F2F2] text-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center gap-4 py-6">
          <button
            className={`${base} ${
              active === "all" ? " text-black bg-white" : "text-black"
            }`}
            onClick={() => onChange("all")}
          >
            View All <span className="ml-1 text-gray-500">{counts.all}</span>
          </button>
          <button
            className={`${base} ${
              active === "blogs" ? "text-black bg-white" : "text-black"
            }`}
            onClick={() => onChange("blogs")}
          >
            Blogs <span className="ml-1 text-gray-500">{counts.blogs}</span>
          </button>
          <button
            className={`${base} ${
              active === "articles" ? "text-black bg-white" : "text-black"
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
