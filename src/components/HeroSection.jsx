import { motion } from 'framer-motion';
import meImage from '../assets/me - Edited.png';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const floatingVariants = (delay = 0) => ({
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        delay: delay
      }
    }
  });

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 lg:px-24 pt-24 pb-12">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        
        {/* Left Column: Typography & CTAs */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start text-left"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-7xl font-light text-white/90 leading-[1.1] tracking-tight mb-6">
            Hi! I'm Ahmed Mahmood, building<br />
            <span className="font-bold text-white italic">Digital Experiences.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/60 font-light max-w-lg mb-10 leading-relaxed">
            From prototypes to production-ready systems, I turn ideas into scalable, user-focused products.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">Let's Connect</a>
            <a href="#projects" className="btn-secondary">See My Work</a>
          </motion.div>
        </motion.div>

        {/* Right Column: Monochrome Portrait & Floating Metrics */}
        <div className="relative w-full max-w-lg mx-auto lg:ml-auto h-[500px] md:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
          
          {/* Subtle Soft White Glow */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 m-auto w-[80%] h-[80%] bg-gradient-to-tr from-[#1a1a1a] to-[#333333] rounded-full shadow-[0_0_80px_rgba(255,255,255,0.05)]"
          />

          {/* Masked Portrait - Scaled up and raised slightly */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="relative z-10 w-full h-full flex items-end justify-center overflow-hidden [mask-image:radial-gradient(circle_at_center,black_40%,transparent_75%)]"
          >
            <img 
              src={meImage} 
              alt="Ahmed Mahmood" 
              className="w-[105%] h-auto object-contain object-bottom drop-shadow-2xl grayscale-[20%] -translate-y-8"
            />
          </motion.div>

          {/* Floating Metric 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute top-[5%] left-[-15%] z-20"
          >
            <motion.div variants={floatingVariants(0)} animate="animate" className="glass-card p-5 pr-8">
              <h3 className="text-3xl font-bold text-white mb-1 tracking-tight">CS Grad</h3>
              <p className="text-sm text-white/50 font-light">Honors Student</p>
            </motion.div>
          </motion.div>

          {/* Floating Metric 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute top-[0%] right-[-10%] z-20"
          >
            <motion.div variants={floatingVariants(1)} animate="animate" className="glass-card p-5 pr-8 bg-gradient-to-br from-white/10 to-transparent">
              <h3 className="text-3xl font-bold text-white mb-1 tracking-tight">15+ Projects</h3>
              <p className="text-sm text-white/50 font-light">Built & Deployed</p>
            </motion.div>
          </motion.div>

          {/* Floating Metric 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-[25%] left-[-20%] z-20"
          >
            <motion.div variants={floatingVariants(2)} animate="animate" className="glass-card p-5 pr-10">
              <h3 className="text-3xl font-bold text-white mb-1 tracking-tight">2.5+ GPA</h3>
              <p className="text-sm text-white/50 font-light">Academic Excellence</p>
            </motion.div>
          </motion.div>

          {/* Floating Metric 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="absolute bottom-[10%] right-[0%] z-20"
          >
            <motion.div variants={floatingVariants(3)} animate="animate" className="glass-card p-5 pr-8">
              <h3 className="text-3xl font-bold text-white mb-1 tracking-tight">2026</h3>
              <p className="text-sm text-white/50 font-light">Latest Grad</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
