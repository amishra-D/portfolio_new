import { useEffect, useState } from "react";

function FadeIn({ children }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={`fade-blur ${show ? "show" : ""}`}>
      {children}
    </div>
  );
}

export default FadeIn;
