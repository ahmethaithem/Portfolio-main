import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.02c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const projects = [
  {
    title: 'NutriFit',
    category: 'Health & Fitness App',
    description: 'A comprehensive health tracking application built with Flutter and Firebase. Features real-time data sync, dynamic statistical charts, and a highly polished UI.',
    link: 'https://github.com/ahmethaithem/NutriFit',
    github: 'https://github.com/ahmethaithem/NutriFit',
    tags: ['Flutter', 'Firebase', 'Dart', 'State Management'],
  },
  {
    title: 'ExpenseEase',
    category: 'Financial Tracker',
    description: 'Minimalist financial tracking mobile app. Integrates secure Firebase authentication, custom data filtering, interactive pie charts, and seamless user onboarding.',
    link: 'https://github.com/ahmethaithem/ExpenseEase',
    github: 'https://github.com/ahmethaithem/ExpenseEase',
    tags: ['Flutter', 'Firebase', 'Provider', 'Charts'],
  },
  {
    title: 'OMDb Cinema',
    category: 'Web Application',
    description: 'Professional Single Page Application for movie search. Features seamless state persistence, filter functionality, and a modern cinematic user interface.',
    link: 'https://ahmethaithem.github.io/omdb-project/',
    github: 'https://github.com/ahmethaithem/omdb-project',
    tags: ['HTML/CSS', 'JavaScript', 'REST API', 'Vite'],
  },
  {
    title: 'Savy Store',
    category: 'E-commerce Platform',
    description: 'Premium e-commerce front-end with refined visual identity. Incorporates high-end aesthetics, transparent visual assets, and a clean professional layout.',
    link: 'https://github.com/ahmethaithem/Savy-Store-website',
    github: 'https://github.com/ahmethaithem/Savy-Store-website',
    tags: ['React', 'Tailwind', 'E-commerce', 'UI/UX'],
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-4 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white/90">
            Selected Works
          </h2>
          <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent mt-8" />
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Project Info */}
              <div className={`lg:col-span-5 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-2 lg:pl-12' : 'lg:pr-12'}`}>
                <span className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4 block">
                  {project.category}
                </span>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-white/90 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 font-light leading-relaxed mb-8 text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 text-xs uppercase tracking-widest border border-white/10 rounded-full text-white/50 bg-white/[0.02]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm tracking-widest uppercase text-white/70 hover:text-white transition-colors"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm tracking-widest uppercase text-white/50 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Visual / Abstract representation */}
              <div className={`lg:col-span-7 h-[400px] md:h-[600px] w-full relative overflow-hidden glass-panel ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent mix-blend-overlay opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Abstract visualization instead of screenshots for a more artistic vibe */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 border border-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000 ease-out" />
                  <div className="absolute w-32 h-32 border border-white/20 rounded-full blur-md animate-pulse" />
                  <div className="absolute text-white/10 text-9xl font-black tracking-tighter opacity-20 group-hover:scale-110 group-hover:text-white/20 transition-all duration-1000">
                    {project.title.substring(0, 2).toUpperCase()}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
