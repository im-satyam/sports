import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

interface Match {
  title: string;
  date: string;
  competition: {
    name: string;
  };
}

function App() {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/matches')
      .then(res => res.json())
      .then(data => setMatches(data))
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 to-blue-300">
      <Header />

      <main className="flex-grow p-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-extrabold mb-10 text-center text-blue-800 drop-shadow-lg"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ⚽ Upcoming Soccer Matches
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {matches.map((match, index) => (
              <motion.div
                key={index}
                className="p-5 rounded-2xl bg-white/80 backdrop-blur shadow-xl border border-white/60 hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <h2 className="text-xl font-semibold text-blue-700">{match.title}</h2>
                <p className="text-sm text-gray-600 mt-2">
                  🕒 {new Date(match.date).toLocaleString()}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  🏆 {match.competition.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer /> 
    </div>
  );
}

export default App;
