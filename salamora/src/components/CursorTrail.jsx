import { useEffect } from "react";

const colors = [
  "#D4AF37", // Gold
  "#B22222", // Salamora Red
  "#C68642", // Cinnamon Brown
];

const CursorTrail = () => {
  useEffect(() => {
    const createParticle = (x, y) => {
      const particle = document.createElement("div");

      particle.classList.add("particle");

      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      const randomColor =
        colors[Math.floor(Math.random() * colors.length)];

      particle.style.backgroundColor = randomColor;

      const size = Math.random() * 8 + 4;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 1200);
    };

    const handleMove = (e) => {
      createParticle(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return null;
};

export default CursorTrail;