import { useEffect } from "react";

export function useExternalScript(src: string): void {
  useEffect(() => {
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) return;
    
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.setAttribute("data-script-id", src);
    document.body.appendChild(script);

    return () => {
      if (document.querySelectorAll(`script[data-script-id="${src}"]`).length <= 1) {
        document.body.removeChild(script);
      }
    };
  }, [src]);
}