import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-4 relative bg-transparent overflow-hidden">
      {/* Abstract background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-fluid-h2 font-light tracking-tighter mb-6 text-white/90">
            Let's Create<br />
            <span className="font-bold drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">The Future.</span>
          </h2>
          <p className="text-white/50 text-lg md:text-xl font-light tracking-wide mb-16 max-w-2xl mx-auto">
            Available for freelance opportunities and full-time roles. Let's build something cinematic together.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="glass-panel p-8 md:p-12 text-left mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-2">Email</p>
              <a href="mailto:ahmethaithem@gmail.com" className="text-xl md:text-2xl font-light hover:text-white/70 transition-colors">
                ahmethaithem@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-2">Phone</p>
              <a href="tel:+905342653048" className="text-xl md:text-2xl font-light hover:text-white/70 transition-colors">
                +90 534 265 30 48
              </a>
            </div>
          </div>
        </motion.div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase text-white/40">
          <p>© {new Date().getFullYear()} AHMED MAHMOOD.</p>
          <div className="flex gap-6">
            <a href="https://github.com/ahmethaithem" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
