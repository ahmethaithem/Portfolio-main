import { motion } from 'framer-motion';

export default function Navigation() {
  const links = ['About', 'Skills', 'Projects', 'Contact'];

  const scrollTo = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center backdrop-blur-md bg-black/20 border-b border-white/5"
    >
      <div className="text-xl font-bold tracking-widest uppercase">
        AHMED MAHMOOD
      </div>
      
      <ul className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-white/70">
        {links.map((link) => (
          <li key={link}>
            <button 
              onClick={() => scrollTo(link)}
              className="hover:text-white transition-colors duration-300"
            >
              {link}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
