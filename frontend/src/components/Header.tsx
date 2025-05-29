import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      className="sticky top-0 z-20 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow-lg"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-white drop-shadow-md select-none">
          Soccer Match Center
        </h1>

        <nav>
          <a
            href="#"
            className="text-white font-semibold px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
          >
            Home
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
