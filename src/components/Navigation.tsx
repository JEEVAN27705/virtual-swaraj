import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const [language, setLanguage] = useState<"en" | "mr">("en"); // English by default

  const isActive = (path: string) => location.pathname === path;

  // Texts for each language
  const texts = {
    en: {
      home: "Home",
      explore: "Explore Forts",
      about: "About us",
      contact: "Contact Us",
      title: "Virtual Swaraj"
    },
    mr: {
      home: "मुख्यपृष्ठ",
      explore: "किल्ले एक्सप्लोर करा",
      about: "आमच्याबद्दल",
      contact: "संपर्क करा",
      title: "व्हर्च्युअल स्वराज"
    }
  };

  // Toggle language on globe click
  const toggleLanguage = () => {
    setLanguage(prev => (prev === "en" ? "mr" : "en"));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/90 backdrop-blur-sm px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-base">VS</span>
          </div>
          <span className="text-white font-bold text-xl">{texts[language].title}</span>
        </Link>
        
        <div className="flex items-center gap-8 text-lg font-semibold">
          <Link 
            to="/" 
            className={`text-white hover:text-primary transition-colors ${
              isActive('/') ? 'border-b-2 border-primary' : ''
            }`}
          >
            {texts[language].home}
          </Link>
          <Link 
            to="/explore-forts" 
            className={`text-white hover:text-primary transition-colors ${
              isActive('/explore-forts') ? 'border-b-2 border-primary' : ''
            }`}
          >
            {texts[language].explore}
          </Link>
          <Link 
            to="/about" 
            className={`text-white hover:text-primary transition-colors ${
              isActive('/about') ? 'border-b-2 border-primary' : ''
            }`}
          >
            {texts[language].about}
          </Link>
          <Link 
            to="/contact" 
            className={`text-white hover:text-primary transition-colors ${
              isActive('/contact') ? 'border-b-2 border-primary' : ''
            }`}
          >
            {texts[language].contact}
          </Link>

          {/* Globe icon */}
          <div 
            className="text-black text-2xl cursor-pointer"
            onClick={toggleLanguage}
          >
            🌐
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
