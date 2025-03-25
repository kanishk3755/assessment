import React, { useEffect } from "react";
import gsap from "gsap";

const MarqueeEffect = () => {
  useEffect(() => {
    const container = document.querySelector(".marquee-container");
    const rows = container.querySelectorAll(".marquee-row");

    gsap.killTweensOf(rows);  

    rows.forEach((row, index) => {
      const rowContent = row.innerHTML;
      row.innerHTML += rowContent; 

      const direction = index % 2 === 0 ? -100 : 100; 

      gsap.to(row, {
        xPercent: direction,
        duration: 10,
        repeat: -1,
        ease: "linear",
        force3D: true,
      });
    });

    return () => {
      gsap.killTweensOf(rows);  
    };
  }, []);

  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.2,
      textShadow: "0 0 12px #f39c12, 0 0 20px #f39c12", 
      duration: 0.4,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      textShadow: "none",
      duration: 0.4,
      ease: "power1.in",
    });
  };

  const containerStyle = {
    width: "100vw",              
    minHeight: "45vh",           
    background: "linear-gradient(135deg, #000000, #1a1a1a)",  
    color: "#fff",
    overflow: "hidden",
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    padding: "40px 30px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const rowStyle = {
    display: "flex",
    gap: "80px",
    padding: "15px 0",
    whiteSpace: "nowrap",
  };

  const textStyle = {
    fontSize: "22px",
    color: "#f0f0f0",  
    cursor: "pointer",
    transition: "transform 0.4s ease, text-shadow 0.4s ease",
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontSize: "20px", fontWeight: "bold", color: "#fff" }}>
            Trusted by 200+ companies around the world
          </p>
          <p style={{ fontSize: "16px", color: "#ccc", lineHeight: "1.6" }}>
            Vulputate molestie molestie amet leo blandit accumsan. Sapien sed
            amet tellus purus sit odio eget. Diam morbi faucibus vitae neque id
            in. Nullam sed et dapibus nunc, porta enim orci urna, sit. Lectus
            ac.
          </p>
        </div>

        <div
          className="marquee-container"
          style={{
            width: "100%",
            overflow: "hidden",
          }}
        >
         
          <div className="marquee-row" style={rowStyle}>
            {[
              "🚀 Logoipsum",
              "💻 offmax",
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

          <div className="marquee-row" style={rowStyle}>
            {[
              "🚀 Logoipsum",
              "💻 offmax",
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
        </div>
      </div>
    </div>
  );
};

export default MarqueeEffect;
