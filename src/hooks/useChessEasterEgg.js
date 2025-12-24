import { useEffect, useState } from "react";
import {CHESS_EASTER_EGGS} from "../chesseaster.js"

export function useChessEasterEgg(onTrigger) {
  const [buffer, setBuffer] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      const tag = e.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      const key = e.key.toLowerCase();

if (!/^[a-z1-8]$/.test(key)) return;

      setBuffer((prev) => {
        const next = (prev + key).slice(-5);

       if (CHESS_EASTER_EGGS[next]) {
  onTrigger(next, CHESS_EASTER_EGGS[next]);
  return "";
}


        return next;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onTrigger]);
}
