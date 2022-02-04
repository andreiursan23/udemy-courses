import { useState, useEffect } from "react";
import "./BlurryLoading.css";

function BlurryLoading() {
  let [loadingCount, setLoadingCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingCount(loadingCount++);
    }, 13);

    if (loadingCount === 100) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [loadingCount]);

  return (
    <div className="blurry-loading-container">
      <section className="bg"></section>
      <p className="loading-text">{loadingCount}%</p>
    </div>
  );
}

export default BlurryLoading;
