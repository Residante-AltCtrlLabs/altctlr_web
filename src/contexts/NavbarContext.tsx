"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface NavbarStyle {
  variant: "transparent" | "solid" | "dark";
  textColor: "white" | "black" | "gray";
  backgroundColor?: string;
}

interface NavbarContextType {
  navbarStyle: NavbarStyle;
  setNavbarStyle: (style: NavbarStyle) => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
};

interface NavbarProviderProps {
  children: ReactNode;
}

export const NavbarProvider = ({ children }: NavbarProviderProps) => {
  const [navbarStyle, setNavbarStyle] = useState<NavbarStyle>({
    variant: "transparent",
    textColor: "white",
  });

  return (
    <NavbarContext.Provider value={{ navbarStyle, setNavbarStyle }}>
      {children}
    </NavbarContext.Provider>
  );
};
