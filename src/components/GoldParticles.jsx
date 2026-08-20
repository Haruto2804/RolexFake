import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import './GoldParticles.css';

const GoldParticles = ({ count = 30 }) => {
  const particles = useMemo(() => 
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.3 + 0.1,
    })),
    [count]
  );

  return (
    <div className="gold-particles" aria-hidden="true">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="gold-particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -window.innerHeight],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default GoldParticles;
