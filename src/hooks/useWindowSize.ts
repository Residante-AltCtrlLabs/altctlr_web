import { useState, useEffect } from "react";

const useWindowSize = (threshold: number): boolean => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= threshold);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on component mount

    return () => window.removeEventListener("resize", handleResize);
  }, [threshold]);

  return isSmallScreen;
};

export default useWindowSize;
