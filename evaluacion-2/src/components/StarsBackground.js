import React, { useEffect } from 'react';

const StarsBackground = () => {
  useEffect(() => {
    const COLORS = ["#fff2", "#fff4", "#fff7", "#fffc"];
    
    const generateSpaceLayer = (size, selector, totalStars, duration) => {
      const layer = [];
      for (let i = 0; i < totalStars; i++) {
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`);
      }
      const container = document.querySelector(selector);
      if (container) {
        container.style.setProperty("--size", size);
        container.style.setProperty("--duration", duration);
        container.style.setProperty("--space-layer", layer.join(","));
      }
    }

    generateSpaceLayer("2px", ".space-1", 250, "25s");
    generateSpaceLayer("3px", ".space-2", 100, "20s");
    generateSpaceLayer("6px", ".space-3", 25, "15s");
  }, []);

  return (
    <div className="stars-container">
      <div className="space space-1"></div>
      <div className="space space-2"></div>
      <div className="space space-3"></div>
    </div>
  );
};

export default StarsBackground;