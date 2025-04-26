import { useEffect } from "react";

export function useExternalScript(src: string): void {
  useEffect(() => {
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) return;
    
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.querySelectorAll(`[data-uses-script="${src}"]`).length <= 1) {
        document.body.removeChild(script);
      }
    };
  }, [src]);
}