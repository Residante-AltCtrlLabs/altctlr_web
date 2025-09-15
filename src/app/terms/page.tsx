"use client";

import { useNavbar } from "@/contexts/NavbarContext";
import React, { useEffect } from "react";

const TermsOfServicePage = () => {
  const { setNavbarStyle } = useNavbar();

  useEffect(() => {
    setNavbarStyle({ variant: "solid", textColor: "black" });
  }, [setNavbarStyle]);

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl  text-black mb-4">
         <span className="font-bold">Terms</span> <span className="font-light italic">Of Service</span>
        </h1>

        {/* Last Updated */}
        <p className="text-sm text-black/60 mb-8">
          Last updated: August 29, 2025
        </p>

        {/* Introduction */}
        <div className="mb-12">
          <p className="text-base md:text-lg text-black/80 leading-relaxed">
            By accessing or using AltCtrl services — including our CRM,
            automation tools, integrations, and marketplace solutions — you
            agree to be bound by these Terms of Service.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {/* 1. Acceptance of Terms */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-sm md:text-base text-black/80 leading-relaxed">
              By using AltCtrl services (including CRM, WhatsApp Business API
              integration, and real estate marketplace), you agree to these
              Terms of Service. If you do not agree, you must not use our
              services.
            </p>
          </section>

          {/* 2. Scope of Services */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
              2. Scope of Services
            </h2>
            <p className="text-sm md:text-base text-black/80 leading-relaxed mb-4">
              All content, trademarks, and intellectual property related to
              AltCtrl, Résidanté, and Melkeyat belong to Alternative Control
              Labs or its licensors.
            </p>
            <p className="text-sm md:text-base text-black/80 leading-relaxed mb-4">
              Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-black/80 ml-4">
              <li>AI-powered CRM and automation tools</li>
              <li>WhatsApp, SMS, and email automation</li>
              <li>Real estate listing solutions</li>
              <li>Analytics and reporting</li>
            </ul>
            <p className="text-sm md:text-base text-black/80 leading-relaxed mt-4">
              Services may be updated or discontinued at our discretion.
            </p>
          </section>

          {/* 3. User Responsibility */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
              3. User Responsibility
            </h2>
            <p className="text-sm md:text-base text-black/80 leading-relaxed mb-4">
              You must:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-black/80 ml-4">
              <li>Use services lawfully and provide accurate information</li>
              <li>
                Obtain customer consent for data sharing (UAE PDPL, Saudi PDPL,
                Morocco Law 09-08, and international privacy laws)
              </li>
              <li>Use AltCtrl for legitimate transactions only</li>
              <li>Comply with all applicable local laws</li>
            </ul>
          </section>

          {/* 4. Intellectual Property */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-sm md:text-base text-black/80 leading-relaxed">
              All content, trademarks, and intellectual property related to
              AltCtrl, Résidanté, and Melkeyat are the exclusive property of
              Alternative Control Labs or its licensors.
            </p>
          </section>

          {/* 5. Prohibited Uses */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
              5. Prohibited Uses
            </h2>
            <p className="text-sm md:text-base text-black/80 leading-relaxed mb-4">
              You may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-black/80 ml-4">
              <li>Spam, commit fraud, or send misleading communications</li>
              <li>Sell, resell, or export customer data</li>
              <li>
                Violate privacy or consumer protection laws (UAE, Saudi,
                Moroccan, international)
              </li>
            </ul>
          </section>

          {/* 6. Data Protection & Privacy */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
              6. Data Protection & Privacy
            </h2>
            <p className="text-sm md:text-base text-black/80 leading-relaxed">
              Data collection is governed by our Privacy Policy. Agencies and
              developers are responsible for uploaded data. AltCtrl is not
              liable for data misuse by third parties.
            </p>
          </section>

          {/* 7. Subscriptions & Payments */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
              7. Subscriptions & Payments
            </h2>
            <p className="text-sm md:text-base text-black/80 leading-relaxed">
              Access is subscription-based. Fees must be paid in full.
              Non-payment can lead to suspension. Fees are generally
              non-refundable.
            </p>
          </section>

          {/* 8. Limitation of Liability */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-sm md:text-base text-black/80 leading-relaxed">
              AltCtrl is not responsible for disputes, failed transactions, or
              losses between parties. We do not guarantee sales, commissions, or
              investment outcomes. Services are provided "as is" and we disclaim
              liability for indirect, incidental, or consequential damages.
            </p>
          </section>

          {/* 9. Governing Law & Jurisdiction */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
              9. Governing Law & Jurisdiction
            </h2>
            <p className="text-sm md:text-base text-black/80 leading-relaxed">
              Disputes will be resolved through arbitration under UAE law for
              UAE, Saudi, and international users.
            </p>
          </section>

          {/* 10. Termination */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
              10. Termination
            </h2>
            <p className="text-sm md:text-base text-black/80 leading-relaxed">
              Accounts may be suspended or terminated for violating terms,
              failing payment, or engaging in unlawful activities. Users can
              terminate subscriptions, but fees are non-refundable.
            </p>
          </section>

          {/* 11. International Compliance */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
              11. International Compliance
            </h2>
            <p className="text-sm md:text-base text-black/80 leading-relaxed mb-4">
              We comply with data protection laws including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-black/80 ml-4">
              <li>UAE PDPL</li>
              <li>Saudi PDPL (2023)</li>
              <li>Morocco Law 09-08</li>
              <li>GDPR (EU)</li>
            </ul>
            <p className="text-sm md:text-base text-black/80 leading-relaxed mt-4">
              The stricter law applies in case of conflict.
            </p>
          </section>

          {/* 12. Changes to Terms */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
              12. Changes to Terms
            </h2>
            <p className="text-sm md:text-base text-black/80 leading-relaxed">
              AltCtrl can modify terms. Updates will be posted with an
              "Effective Date." Continued use implies acceptance.
            </p>
          </section>
        </div>

        {/* Contact Us */}
        <div className="mt-16 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
            Contact Us
          </h2>
          <p className="text-sm md:text-base text-black/80 leading-relaxed">
            For questions or legal matters, contact:
          </p>
          <p className="text-sm md:text-base text-black/80 mt-2">
            Alternative Control Labs
            <br />
            Email:{" "}
            <a
              href="mailto:support@altctrl.ai"
              className="text-blue-600 underline"
            >
              support@altctrl.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
