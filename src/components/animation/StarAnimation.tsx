"use client";
import '../../style/Main.css'
import React, { useState, useEffect } from "react";

interface Star {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
}

function getRandomInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function getRandomPositionInRange(minX: number, maxX: number, minY: number, maxY: number) {
  const x = getRandomInRange(minX, maxX);
  const y = getRandomInRange(minY, maxY);
  return { x, y };
}

const Star = ({ x, y }: Star) => {
  return (
    <div
      className="star"
      style={{
        position: "absolute",
        width: "2px",
        height: "2px",
        background: "white",
        left: x + "px",
        top: y + "px",
        zIndex: 1,
      }}
    />
  );
}

export default function StarAnimation() {
  const [stars, setStars] = useState<Star[]>([]);

  const createRandomStars = () => {
    const initialStars = Array.from({ length: 100 }, () => {
      const speedX = getRandomInRange(2, 4);
      const speedY = getRandomInRange(2, 4);
      const { x, y } = getRandomPositionInRange(0, window.innerWidth, 0, window.innerHeight);
      return { x, y, speedX, speedY };
    });
    setStars(initialStars);
  }

  useEffect(() => {
    createRandomStars();

    const updateStars = () => {
      setStars((prevStars) => {
        const updatedStars = prevStars.map((star) => ({
          x: (star.x + star.speedX) % window.innerWidth,
          y: (star.y + star.speedY) % window.innerHeight,
          speedX: star.speedX,
          speedY: star.speedY,
        }));
        return updatedStars;
      });
    };

    const handleWindowResize = () => {
      createRandomStars(); // Atualize as posições das estrelas quando a janela for redimensionada.
    };

    const interval = setInterval(updateStars, 1000 / 30);

    window.addEventListener("resize", handleWindowResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none" }}>
      {stars.map((star, index) => (
        <Star key={index} {...star} />
      ))}
    </div>
  );
}