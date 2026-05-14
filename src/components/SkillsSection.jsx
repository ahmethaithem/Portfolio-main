import { motion } from 'framer-motion';
import { Code2, Database, Smartphone, Globe, Network, LayoutTemplate } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.02c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const skills = [
  { name: 'C++', icon: Code2 },
  { name: 'SQL', icon: Database },
  { name: 'Flutter', icon: Smartphone },
  { name: 'Dart', icon: LayoutTemplate },
  { name: 'Networking', icon: Network },
  { name: 'GitHub', icon: GithubIcon },
  { name: 'Web Dev', icon: Globe },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase text-white/80">
            Technical Arsenal
          </h2>
          <div className="h-[1px] w-24 bg-white/20 mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="glass-panel p-8 flex flex-col items-center justify-center gap-6 h-full relative z-10 hover:border-white/20 transition-colors duration-500 bg-[#0a0a0a]/50">
                <skill.icon 
                  strokeWidth={1} 
                  className="w-12 h-12 text-white/50 group-hover:text-white group-hover:scale-110 transition-all duration-500" 
                />
                <span className="text-sm tracking-widest uppercase text-white/60 group-hover:text-white transition-colors duration-500">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
