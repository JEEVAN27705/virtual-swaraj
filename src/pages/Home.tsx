import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const Home = () => {
  const mustExperienceForts = [
    {
      name: "Vishalagad Fort",
      image: "/Img.png",
      rating: 4.5,
      reviews: 345,
    },
    {
      name: "Sinhagad Fort", 
      image: "/sinhagad.png",
      rating: 4.8,
      reviews: 521,
    },
    {
      name: "Torna Fort",
      image: "/Torna.png", 
      rating: 4.6,
      reviews: 289,
    },
    {
      name: "Visapur Fort",
      image: "/img (2).png",
      rating: 4.3,
      reviews: 156,
    }
  ];

  

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
  <section
  className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
  style={{
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.08), rgba(255,255,255,0.08)), url('/landing page1.png')",
  }}
>
  {/* Keyframes once per page is fine; can be moved to a global CSS if preferred */}
  <style>{`
    @keyframes fadeUpSoft {
      0% { opacity: 0; transform: translateY(18px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeUpSofter {
      0% { opacity: 0; transform: translateY(12px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `}</style>

  <div className="text-center px-6 -translate-y-10 sm:-translate-y-14 md:-translate-y-20">
    <div className="space-y-6">
      <h1
        className="font-display tracking-wide leading-tight"
        style={{
          fontWeight: 600,
          fontSize: "clamp(32px, 5vw, 62px)",
          color: "#1d2a6b",
          textShadow: "0 1px 0 rgba(255,255,255,.10), 0 1px 6px rgba(0,0,0,.10)",
          letterSpacing: ".01em",
          animation: "fadeUpSoft .9s ease-out forwards",
          opacity: 0,
        }}
      >
        Walk the Forts. Feel the Valor.
      </h1>

      <h2
        className="font-display tracking-wide leading-tight"
        style={{
          fontWeight: 600,
          fontSize: "clamp(32px, 5vw, 62px)",
          color: "#1d2a6b",
          textShadow: "0 1px 0 rgba(255,255,255,.10), 0 1px 6px rgba(0,0,0,.10)",
          letterSpacing: ".01em",
          animation: "fadeUpSofter 1s ease-out .15s forwards",
          opacity: 0,
        }}
      >
        Live the Legend.
      </h2>
    </div>

    {/* Transparent CTA pill with delay after headings */}
    <div className="mt-8 sm:mt-8 md:mt-10 flex justify-center">
      <Link
        to="/explore-forts"
        className="inline-flex items-center gap-2 rounded-xl px-6 py-3 transition"
        style={{
          background: "rgba(255,255,255,0.18)",
          color: "#2a2f3a",
          border: "1px solid rgba(255,255,255,0.55)",
          boxShadow: "0 10px 24px rgba(0,0,0,.12)",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
          fontFamily: '"Georgia", serif',
          fontStyle: "italic",
          animation: "fadeUpSofter .9s ease-out .35s forwards",
          opacity: 0,
        }}
      >
        Let’s Explore <span className="translate-y-[1px]">➤</span>
      </Link>
    </div>
  </div>
</section>


      {/* Explore UNESCO World Heritage Site */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Explore UNESCO World Heritage Site.
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              "Explore ancient forts, delve into untold stories, and immerse yourself in the rich tapestry of the 
              past. Discover fascinating culture, and history - all from your armchair."
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <Button variant="outline" className="rounded-full">Raigad Fort</Button>
            <Button variant="outline" className="rounded-full">Sinhagad Fort</Button>
            <Button className="rounded-full bg-primary">Shivneri Fort</Button>
            <Button variant="outline" className="rounded-full">Pratapgad Fort</Button>
            <Button variant="outline" className="rounded-full">Lohagad Fort</Button>
            <Button variant="outline" className="rounded-full">Torna Fort</Button>
            <Button variant="outline" className="rounded-full">Rajgad Fort</Button>
            <Button variant="outline" className="rounded-full">Vasai Fort</Button>
          </div>

          {/* Featured Fort Card */}
          <div className="max-w-6xl mx-auto">
            <div 
              className="relative rounded-3xl overflow-hidden bg-cover bg-center min-h-[400px] flex items-end"
              style={{
                backgroundImage: `url('${"/placeholder.svg"}')`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm mx-6 rounded-2xl p-8 shadow-2xl" style={{ transform: 'translateY(50%)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <h3 className="text-5xl font-bold text-gray-900 mb-4">Raigad</h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        Raigad Fort was the capital of the Maratha Empire under 
                        Chhatrapati Shivaji Maharaj, symbolizing Maratha independence 
                        and resilience. It was here that Shivaji was crowned as Chhatrapati 
                        in 1674
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
                            <span className="text-orange-600 text-xs">📋</span>
                          </div>
                          <span className="text-orange-600 font-medium text-sm">Guide Assistance</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                            <span className="text-blue-600 text-xs">🗣</span>
                          </div>
                          <span className="text-blue-600 font-medium text-sm">Language : मराठी / English</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-yellow-100 rounded flex items-center justify-center">
                            <span className="text-orange-500 text-xs">⏱</span>
                          </div>
                          <span className="text-orange-500 font-medium text-sm">50 min tour</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
                            <span className="text-purple-600 text-xs">🔄</span>
                          </div>
                          <span className="text-purple-600 font-medium text-sm">360° Virtual Experience</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Link to="/explore-forts">
                      <Button className="px-8 py-3 bg-teal-400 hover:bg-teal-500 text-white font-medium rounded-full text-base">
                        Explore Now →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    {/* Must Experience Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Must Experience</h2>
      <p className="text-gray-600">A royal journey through Maharashtra's pride</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {mustExperienceForts.map((fort, index) => (
        <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
          {/* Image */}
          <div className="aspect-video bg-gray-200">
            <img
              src={fort.image}
              alt={fort.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/placeholder.svg"; // fallback
              }}
            />
          </div>

          {/* Card Body */}
          <div className="px-5 pt-4 pb-5">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{fort.name}</h3>

            {/* Meta stacked vertically */}
            <div className="space-y-2.5 text-slate-700">
              <div className="flex items-center gap-2 text-sm">
                <span className="w-5 h-5 grid place-items-center">⏱</span>
                <span>
                  {fort.name.includes("Vishal") ? "50 min Tour" :
                   fort.name.includes("Sinhagad") ? "57 min Tour" :
                   fort.name.includes("Torna") ? "46 min Tour" :
                   fort.name.includes("Vaspur") || fort.name.includes("Visapur") ? "38 min Tour" :
                   "50 min Tour"}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <span className="w-5 h-5 grid place-items-center">🔄</span>
                <span>360° Experience</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <span className="w-5 h-5 grid place-items-center">📋</span>
                <span>Guide Assistance</span>
              </div>
            </div>

            {/* Rating row */}
            <div className="mt-3 flex items-center gap-2">
              <div className="text-amber-400 leading-none">
                {"★".repeat(Math.floor(fort.rating))}
              </div>
              <span className="text-xs text-slate-500">{fort.reviews} reviews</span>
            </div>

            {/* Explore link right-aligned */}
            <div className="mt-4 flex justify-end">
              <Link to={`/fort/${fort.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <span className="text-teal-700 hover:text-teal-800 font-semibold inline-flex items-center gap-1">
                  Explore Now → 
                </span>
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
</section>



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

export default Home;