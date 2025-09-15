"use client";

import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import React from "react";

export type PrivacyBullet = {
  text: string;
  subtext?: string;
};

export type PrivacySection = {
  id: string;
  title: string;
  description?: string;
  bullets?: PrivacyBullet[];
  content?: React.ReactNode;
};

type PrivacyPolicyProps = {
  sections: PrivacySection[];
  footer?: React.ReactNode;
  fullWidth?: boolean;
};

export default function PrivacyPolicy({ sections, footer, fullWidth }: PrivacyPolicyProps) {
  return (
    <div className={`w-full ${fullWidth ? "w-screen" : ""} flex justify-center bg-white px-4 md:px-6 lg:px-8 py-10`}>
      <div className={`w-full ${fullWidth ? "max-w-none" : "max-w-5xl"}`}>
        <Card className="shadow-sm">
          <Divider className="my-1" />

          <div className="space-y-4">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                {section.description && (
                  <p className="text-gray-800">{section.description}</p>
                )}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-800">
                    {section.bullets.map((b, idx) => (
                      <li key={idx}>
                        <span>{b.text}</span>
                        {b.subtext && (
                          <div className="text-gray-600 text-sm mt-1">{b.subtext}</div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
                {section.content && (
                  <div className="prose max-w-none text-gray-800 mt-3">{section.content}</div>
                )}
                {"contactEmail" in (section as any) && (section as any).contactEmail && (
                  <div className="mt-4">
                    <div className="text-gray-800">Email: <a className="underline" href={`mailto:${(section as any).contactEmail}`}>{(section as any).contactEmail}</a></div>
                  </div>
                )}
              </section>
            ))}
          </div>

          {footer && (
            <>
              <Divider className="my-8" />
              <div className="text-sm text-gray-600">{footer}</div>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}


