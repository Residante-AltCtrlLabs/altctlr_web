"use client";
import { useEffect } from "react";
import { useNavbar } from "@/contexts/NavbarContext";
import PrivacyPolicy from "@/components/PrivacyPolicy";

type Props = {
  sections: any[];
};

export default function PrivacyPolicyClient({ sections }: Props) {
  const { setNavbarStyle } = useNavbar();

  useEffect(() => {
    setNavbarStyle({ variant: "solid", textColor: "black" });
  }, [setNavbarStyle]);

  return (
    <div className="w-[100vw] bg-white px-5 md:px-6 lg:px-8">
      <div className="w-full flex justify-center px-4 md:px-6 lg:px-8 pt-10">
        <div className="w-full">
          <div className="flex items-baseline gap-3">
            <h1 className="text-4xl font-extrabold tracking-tight text-black">Privacy</h1>
            <span className="text-4xl font-light text-black">Policy</span>
          </div>
          <p className="text-sm text-gray-500 mt-3">Last updated: August 29, 2025</p>
        </div>
      </div>
      <PrivacyPolicy fullWidth sections={sections} />
    </div>
  );
}


