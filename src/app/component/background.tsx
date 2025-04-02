"use client";
import { Press_Start_2P } from "next/font/google";
import { useEffect, useRef } from "react";

// Import font dari Next.js Font Loader
const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const PixelatedBackgroundWithSymbols = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const elementsRef = useRef<Array<{ 
    x: number; 
    y: number; 
    size: number; 
    opacity: number; 
    speed: number; 
    type: string; 
    originalY: number; 
    movement: number; 
    symbol: string; 
  }>>([]);
  
  const scrollOffsetRef = useRef(0);
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);
  
  const numElements = 150;
  const symbolFontSize = 1.2; // ukuran font responsif

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createElements();
    };

    const createElements = () => {
      elementsRef.current = Array.from({ length: numElements }, () => {
        const x = Math.floor(Math.random() * (canvas.width / 16)) * 16;
        const y = Math.floor(Math.random() * (canvas.height / 16)) * 16;
        const type = Math.random() > 0.5 ? "star" : "symbol";
        const symbol = type === "symbol" ? (Math.random() > 0.5 ? "<<" : ">>") : "";

        return {
          x,
          y,
          size: Math.floor(Math.random() * 3) + 1,
          opacity: Math.random() * 0.3 + 0.4,
          speed: Math.random() * 0.05 + 0.03,
          type,
          originalY: y,
          movement: Math.random() * 0.05 + 0.01,
          symbol,
        };
      });
    };

    const drawElements = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";

      elementsRef.current.forEach((element) => {
        const offsetX = (mouseXRef.current - window.innerWidth / 2) * 0.002;
        const offsetY = (mouseYRef.current - window.innerHeight / 2) * 0.002;

        element.y += Math.sin(element.movement) * 0.5;
        element.movement += 0.05;

        ctx.globalAlpha = element.opacity;

        if (element.type === "star") {
          ctx.fillRect(element.x + offsetX, element.y + scrollOffsetRef.current + offsetY, element.size, element.size);
        } else if (element.type === "symbol") {
          ctx.font = `bold ${symbolFontSize}vh ${pressStart2P.style.fontFamily}`;
          ctx.fillText(element.symbol, element.x + offsetX, element.y + scrollOffsetRef.current + offsetY);
        }
      });

      ctx.globalAlpha = 1;
    };

    const animateElements = () => {
      elementsRef.current.forEach((element) => {
        element.opacity = Math.sin(element.movement * 0.1) * 0.5 + 0.5;
        element.movement += 0.01;
      });

      drawElements();
      requestAnimationFrame(animateElements);
    };

    const handleScroll = () => {
      scrollOffsetRef.current = window.scrollY * 0.1;
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseXRef.current = event.clientX;
      mouseYRef.current = event.clientY;
    };

    resizeCanvas();
    animateElements();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-[-1] bg-black" />;
};

export default PixelatedBackgroundWithSymbols;
