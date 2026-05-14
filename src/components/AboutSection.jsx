import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} id="about" className="min-h-screen relative flex items-center justify-center overflow-hidden py-32">
      
      {/* Floating Typography & Content */}
      <div className="max-w-7xl mx-auto w-full px-4 relative z-10 flex flex-col items-center text-center">
        
        <motion.div 
          style={{ y: y1 }}
          className="flex flex-col items-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-fluid-h2 font-light tracking-tighter mb-16 text-white/90 drop-shadow-2xl"
          >
            Designing<br />
            <span className="font-bold">Digital Elegance.</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl relative"
          >
            {/* Minimalist text overlay */}
            <p className="text-xl md:text-3xl leading-relaxed text-white/70 font-light mb-12 drop-shadow-lg">
              I am a software engineer with a deep passion for the intersection of technology, art, and futuristic architecture. 
              My work transcends standard development—I create immersive, cinematic experiences that evoke emotion and luxury.
            </p>
            <p className="text-xl md:text-3xl leading-relaxed text-white/70 font-light drop-shadow-lg">
              With a strong foundation in modern frameworks and an unwavering eye for minimalist aesthetics, 
              I engineer robust solutions wrapped in breathtaking visual identities.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
