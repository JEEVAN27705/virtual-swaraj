import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Link, useParams, useNavigate } from "react-router-dom";

const FortDetail = () => {
  const { fortName } = useParams();
  const navigate = useNavigate();

  const handleStartTour = () => {
    navigate('/loading');
  };

  const fortData = {
    suvarnadurg: {
      name: "SUVARNADURG",
      subtitle: "Enter the Golden Fort",
      description: "Suvarnadurg Fort is a historic island fortress in the Arabian Sea, near Harnai in Maharashtra's Ratnagiri region. Known as the 'Golden Fort', it served as a key naval stronghold. The fort, now accessible by boat, was later strengthened by the Peshwas and the Angre family to protect against piracy and foreign colonial powers and local kingdoms. Suvarnadurg also had a shipbuilding facility, playing a crucial role in the Maratha naval warfare. Its rocky location made it a formidable fortress for the ancient Marathas and served as a reminder of Maharashtra's rich maritime history",
      timeline: [
        { period: "1600-1700 AD", events: ["Fort built by Shivaji Construction", "Original structure established", "Designed to counter Portuguese naval threats", "Built with local stone and sea-cement", "Constructed with moat surrounding walls"] },
        { period: "1700-1760 AD", events: ["Angre Dynasty Control", "Served as main naval base", "Added Hindu fortification with temple complex", "Became seat for Maratha naval forces"] },
        { period: "1760-1818 AD", events: ["British Colonial Era", "Came under British protection", "Declared protected monument", "Ongoing conservation efforts"] },
        { period: "Present Day", events: ["Full state a work embarkment", "Promoted to protect under state India Company", "Major tourist attraction", "Cultural heritage site", "Ongoing conservation efforts"] }
      ],
      details: "Suvarnadurg Fort, located at historic architectural marvel, boasts a mystical charm with seawall running for the best experience, what between November and May. Our best guided experiences include fort exploration makes exploration easier.",
      bestTimeToVisit: "Best time to visit"
    }
  };

  const currentFort = fortData[fortName as keyof typeof fortData] || fortData.suvarnadurg;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/placeholder.svg')"
        }}
      >
        <div className="text-center text-white space-y-6">
          <h1 className="text-7xl font-bold tracking-wider">
            {currentFort.name}
          </h1>
          <div className="border-b-4 border-primary w-32 mx-auto"></div>
          <h2 className="text-3xl font-light tracking-wide">
            {currentFort.subtitle}
          </h2>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">HISTORY TIMELINE</h3>
            <div className="space-y-6">
              {currentFort.timeline.map((period, index) => (
                <div key={index} className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-lg text-gray-800 mb-2">{period.period}</h4>
                  <ul className="space-y-1">
                    {period.events.map((event, eventIndex) => (
                      <li key={eventIndex} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-primary text-xs mt-1">●</span>
                        <span>{event}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {currentFort.description}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Details</h3>
              <p className="text-gray-700 leading-relaxed">
                {currentFort.details}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{currentFort.bestTimeToVisit}</h3>
              <p className="text-gray-700">
                Suvarnadurg Fort, biggest a historic architectural marvel, 
                boasts a mystical charm with beautiful scenery the 
                best experience, visit between November and May.
                make exploration easier.
              </p>
            </div>

            <Card className="p-8 bg-gray-50">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">ABOUT TOUR</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-lg mb-4 text-gray-800">Experience Suvarnadurg Fort like never before with our immersive AR/VR Virtual tour experience architecture.</h4>
                  <p className="text-gray-600 mb-4">
                    Visiting and experiences that enhance user engagement.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="text-primary">🏰</span>
                      <span>Virtual Fort Exploration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">🎯</span>
                      <span>360° Experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">🎧</span>
                      <span>Audio narration with sound effects</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <img 
                    src="/placeholder.svg" 
                    alt="Fort tour preview"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={handleStartTour}
                  className="bg-primary hover:bg-primary/90 text-white text-xl px-12 py-4 rounded-full"
                >
                  START VIRTUAL TOUR
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">VS</span>
              </div>
              <span className="text-white font-semibold">Virtual Swaraj</span>
            </div>
            <p className="text-white/80 text-sm mb-4">
              Explore Maharashtra mighty forts with AR/VR walk through History from anywhere in the world
            </p>
            <p className="text-white/80 text-sm">#MarathaGlory ▶</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-white/80 hover:text-white text-sm">Home</Link>
              <Link to="/explore-forts" className="block text-white/80 hover:text-white text-sm">Explore Fort</Link>
              <Link to="/about" className="block text-white/80 hover:text-white text-sm">About Us</Link>
              <Link to="/contact" className="block text-white/80 hover:text-white text-sm">Contact</Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Popular Forts</h4>
            <div className="space-y-2">
              <Link to="/fort/raigad" className="block text-white/80 hover:text-white text-sm">Raigad Fort</Link>
              <Link to="/fort/lohagad" className="block text-white/80 hover:text-white text-sm">Lohagad Fort</Link>
              <Link to="/fort/pratapgad" className="block text-white/80 hover:text-white text-sm">Pratapgad Fort</Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-white/80 text-sm">
              <p>📍 Pune, Maharashtra, India</p>
              <p>📞 +91 72766 05175</p>
              <p>✉️ jeevanpatil27705@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80 text-sm">
            © 2025 Fort Explorer. All rights reserved. Preserving Maharashtra's heritage.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FortDetail;

