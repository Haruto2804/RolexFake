import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Craftsmanship.css';

const Craftsmanship = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7, 0.9], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.1, 0.4], ["40px", "0px"]);

  return (
    <section className="craftsmanship" ref={ref}>
      <motion.div className="craft-bg" style={{ y: bgY }}>
        <div className="craft-bg-img"></div>
      </motion.div>
      <div className="craft-overlay"></div>
      <motion.div 
        className="craft-content"
        style={{ opacity: textOpacity, y: textY }}
      >
        <motion.div
          className="craft-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.span
          className="craft-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          The Art of Watchmaking
        </motion.span>
        <motion.h2
          className="craft-title"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Perpetual Excellence
        </motion.h2>
        <motion.p
          className="craft-desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Every Rolex is the product of exceptional know-how and meticulous attention to detail.
          Each component is designed, developed and produced to the most exacting standards.
        </motion.p>
        <motion.div
          className="craft-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
    </section>
  );
};

export default Craftsmanship;
