"use client"
import React, { useState, useEffect } from 'react';
import deathStar from '../../img/death_starEdite.png';
import '../../style/MouseAnimation.css'

export default function MouseAnimation() {
  const [isMobile, setIsMobile] = useState(false);
  const mousePosition = useMousePosition();

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(/(iphone|ipad|ipod|android)/.test(userAgent));
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {isMobile ? (
        <img
          src={(deathStar).src}
          alt="Imagem"
          className="mobile-animation"
        />
      ) : (
        <img
          src={(deathStar).src}
          alt="Imagem"
          style={{
            position: 'absolute',
            transition: 'transform 0.1s ease-in-out',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            width: "8em",
            margin: `50px`
          }}
        />
      )}
    </div>
  );
}

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const easingFactor = 0.2;
  const scaleFactor = 2;

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      const x = ev.clientX;
      const y = ev.clientY;

      const deltaX = (x - mousePosition.x) * easingFactor;
      const deltaY = (y - mousePosition.y) * easingFactor;

      setMousePosition({ x: x - deltaX * scaleFactor, y: y - deltaY * scaleFactor });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [mousePosition]);

  return mousePosition;
};