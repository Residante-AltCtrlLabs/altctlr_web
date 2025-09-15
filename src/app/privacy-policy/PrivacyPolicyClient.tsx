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
    <div className=" bg-white ">
      <div className="max-w-7xl  mx-auto  px-4 md:px-6 lg:px-8 pt-20">
        <div className="w-full">
          <div className="flex items-baseline gap-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl  font-extrabold tracking-tight text-black">
              Privacy <span className="font-light">Policy</span>
            </h1>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Last updated: August 29, 2025
          </p>
        </div>

      <PrivacyPolicy fullWidth sections={sections} />
      </div>
    </div>
  );
}
