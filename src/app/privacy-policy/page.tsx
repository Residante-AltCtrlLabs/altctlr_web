import policy from "@/data/privacy-policy.json";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata = { title: "Privacy Policy | AltCtrl" };

export default function PrivacyPolicyPage() {
  const sections = (policy as any).sections.map((s: any) => ({
    ...s,
    content: s.note ? (
      <p className="mt-4 text-gray-800">{s.note}</p>
    ) : undefined,
  }));
  return <PrivacyPolicyClient sections={sections} />;
}


