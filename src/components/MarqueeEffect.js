import React, { useEffect, useState } from "react";
import gsap from "gsap";

const MarqueeEffect = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const container = document.querySelector(".marquee-container");
    const rows = container.querySelectorAll(".marquee-row");

    gsap.killTweensOf(rows);


    rows.forEach((row, index) => {
      const rowContent = row.innerHTML;
      row.innerHTML += rowContent; // Duplicate content for seamless loop

      const direction = index % 2 === 0 ? -100 : 100; // Alternate direction

      gsap.to(row, {
        xPercent: direction,
        duration: 10,
        repeat: -1,
        ease: "linear",
        force3D: true,
      });
    });

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      gsap.killTweensOf(rows);

      rows.forEach((row, index) => {
        const direction = index % 2 === 0 ? -100 : 100;

        gsap.to(row, {
          xPercent: direction,
          duration: 10,
          repeat: -1,
          ease: "linear",
          force3D: true,
        });
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      gsap.killTweensOf(rows);
    };
  }, [windowWidth]);

  // Independent hover animation for each text element
  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.2,            // Slight zoom-in effect
      rotation: 10,          // Use "rotation" instead of "rotate"
      duration: 0.4,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      rotation: 0,           // Reset rotation
      duration: 0.4,
      ease: "power1.in",
    });
  };

  const rowStyle = {
    display: "flex",
    gap: "80px",
    padding: "20px 0",
    whiteSpace: "nowrap",
  };

  const textStyle = {
    fontSize: "24px",
    color: "#333",
    cursor: "pointer",
    transition: "transform 0.4s ease",
  };

  return (
    <div
      className="marquee-container"
      style={{ width: "100%", maxWidth: "1200px", overflow: "hidden", margin: "0 auto" }}
    >
      {/* Row 1 */}
      <div className="marquee-row" style={rowStyle}>
        {[
          "🚀 React.js Mastery",
          "💻 Advanced JavaScript",
          "🎨 CSS Animations",
          "📱 Responsive Design",
          "⚡ GSAP Power",
        ].map((title, index) => (
          <div
            key={index}
            style={textStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {title}
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="marquee-row" style={rowStyle}>
        {[
          "🌟 UI/UX Best Practices",
          "🔧 Web Performance Optimization",
          "🔥 Modern Frontend Trends",
          "⚙️ Component Reusability",
          "🛠️ Clean Code Principles",
        ].map((title, index) => (
          <div
            key={index}
            style={textStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeEffect;
