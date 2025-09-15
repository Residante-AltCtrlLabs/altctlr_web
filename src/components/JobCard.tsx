"use client";

import React from "react";

export type Job = {
  title: string;
  meta: string;
  about: string;
  onClick?: () => void;
};

const JobCard = ({ title, meta, about, onClick }: Job) => {
  return (
    <div className="rounded-xl border border-black/50 p-4 overflow-hidden bg-white">
      {/* Header row with title and subtle divider */}
      <div className="px-5 md:px-6 pt-5 md:pt-6">
        <h3 className="text-[15px] md:text-base font-semibold tracking-tight text-black">
          {title}
        </h3>
        <p className="mt-1 text-[11px] md:text-xs text-black/55">{meta}</p>
      </div>

      {/* Body */}
      <div className="px-5 md:px-6 py-4">
        <p className="text-[12px] md:text-sm leading-relaxed text-black/80">
          {about}
        </p>
      </div>

      {/* Footer CTA */}
      <div className="px-5 md:px-6 pb-5 md:pb-6">
        <button
          type="button"
          onClick={onClick}
          className="group inline-flex items-center gap-2 text-[12px] md:text-sm text-black hover:text-black/80"
        >
          <span className="underline-offset-2 group-hover:underline">
            View Details
          </span>
          <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  );
};

export default JobCard;
