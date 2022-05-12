import { useEffect, useState } from "react";

export const useOnScreen = (ref) => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  const observer = new IntersectionObserver((([entry]) => {
    setIsOnScreen(entry.isIntersecting)
  }), {
    threshold: 0.7
  });

  useEffect(() => {
    observer.observe(ref.current);

    return () => observer.disconnect()
  })
  
  return isOnScreen;
}
