import { useState, useEffect } from "react";

function useIsLargeScreen(breakpoint = 768) {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isLargeScreen;
}

export default useIsLargeScreen;
