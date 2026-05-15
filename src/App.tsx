import { useEffect, useState } from "react";
import { PortfolioPage } from "@/pages/PortfolioPage";

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let timer = 0;
    const markReady = () => {
      timer = window.setTimeout(() => setReady(true), 250);
    };

    if (document.readyState === "complete") {
      markReady();
    } else {
      window.addEventListener("load", markReady, { once: true });
    }

    return () => {
      window.removeEventListener("load", markReady);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className={`app-loader${ready ? " is-hidden" : ""}`} aria-hidden={ready}>
        <div className="app-loader-mark">vs</div>
        <p>Loading portfolio...</p>
      </div>
      <div className={`app-shell${ready ? " is-ready" : ""}`}>
        <PortfolioPage />
      </div>
    </>
  );
}

export default App;
