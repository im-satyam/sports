
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} Soccer Match Center. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">
          Made with ⚽ by <a href="#" className="text-blue-600 hover:underline">Satyam Kumar</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
