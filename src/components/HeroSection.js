"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ArrowRight } from "lucide-react";

const IMAGES = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072",
  "https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?auto=format&fit=crop&q=80&w=2023",
];

function HeroSection() {
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const buttonTextRef = useRef(null);
  const buttonIconRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRefs = useRef([]);

  useEffect(() => {
    if (!textRef.current || !buttonRef.current) return;

    // Split text into characters
    const splitText = new SplitType(textRef.current, { types: "chars" });

    if (!splitText.chars) return;

    const tl = gsap.timeline({ delay: 0.5 });

    gsap.set(buttonRef.current, { opacity: 0, y: 20 });

    // Text animation
    tl.fromTo(
      splitText.chars,
      { opacity: 0, y: 20, rotateX: -90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.02,
        duration: 0.5,
        ease: "back.out(1.7)",
      }
    );

    // Button animation
    tl.to(
      buttonRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
      },
      "-=0.2"
    );

    // Button hover animations
    const handleMouseEnter = () => {
      gsap.to(buttonTextRef.current, {
        x: -4,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(buttonIconRef.current, {
        x: 4,
        scale: 1.2,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to([buttonTextRef.current, buttonIconRef.current], {
        x: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    buttonRef.current.addEventListener("mouseenter", handleMouseEnter);
    buttonRef.current.addEventListener("mouseleave", handleMouseLeave);

    // Image slider animation
    const slideInterval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % IMAGES.length;
      const currentImage = imageRefs.current[currentImageIndex];
      const nextImage = imageRefs.current[nextIndex];

      if (currentImage && nextImage) {
        gsap.to(currentImage, {
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut",
        });
        gsap.fromTo(
          nextImage,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.5,
            ease: "power2.inOut",
          }
        );
      }

      setCurrentImageIndex(nextIndex);
    }, 5000);

    // Cleanup
    return () => {
      tl.kill();
      splitText.revert();
      clearInterval(slideInterval);
      buttonRef.current?.removeEventListener("mouseenter", handleMouseEnter);
      buttonRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [currentImageIndex]);

  // Inline styles
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "#1a1a1a",
    color: "white",
  };

  const imageStyle = (index) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: index === 0 ? 1 : 0,
    transition: "opacity 1.5s ease-in-out",
    filter: "brightness(0.6)",
  });

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 10,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "0 20px",
  };

  const textStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    lineHeight: "1.2",
    maxWidth: "1000px",
    margin: "0 auto 30px",
    visibility: "visible",
  };

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 30px",
    fontSize: "1.2rem",
    color: "black",
    background: "white",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const buttonHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
  };

  return (
    <div style={containerStyle}>
      {/* Background Images */}
      {IMAGES.map((src, index) => (
        <img
          key={src}
          ref={(el) => (imageRefs.current[index] = el)}
          src={src}
          alt={`Background ${index + 1}`}
          style={imageStyle(index)}
        />
      ))}

      <div style={overlayStyle} />

      <div style={contentStyle}>
        <h1 ref={textRef} style={textStyle}>
          Create Something Extraordinary
        </h1>

        <button
          ref={buttonRef}
          style={buttonStyle}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = buttonHoverStyle.transform;
            e.currentTarget.style.boxShadow = buttonHoverStyle.boxShadow;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <span ref={buttonTextRef}>Get Started</span>
          <span ref={buttonIconRef} style={{ display: "inline-block" }}>
            <ArrowRight style={{ width: "20px", height: "20px" }} />
          </span>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
