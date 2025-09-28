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
        Explore ancient forts, delve into untold stories, and immerse yourself in the rich tapestry of the past. Discover fascinating culture, and history - all from your armchair.
      </p>
    </div>

    {/* Larger filter pills */}
    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
      <Button variant="outline" className="rounded-full px-5 py-2.5 text-sm md:px-6 md:py-3 md:text-base">Raigad Fort</Button>
      <Button variant="outline" className="rounded-full px-5 py-2.5 text-sm md:px-6 md:py-3 md:text-base">Sinhagad Fort</Button>
      <Button className="rounded-full px-5 py-2.5 text-sm md:px-6 md:py-3 md:text-base bg-primary">Shivneri Fort</Button>
      <Button variant="outline" className="rounded-full px-5 py-2.5 text-sm md:px-6 md:py-3 md:text-base">Pratapgad Fort</Button>
      <Button variant="outline" className="rounded-full px-5 py-2.5 text-sm md:px-6 md:py-3 md:text-base">Lohagad Fort</Button>
      <Button variant="outline" className="rounded-full px-5 py-2.5 text-sm md:px-6 md:py-3 md:text-base">Torna Fort</Button>
      <Button variant="outline" className="rounded-full px-5 py-2.5 text-sm md:px-6 md:py-3 md:text-base">Rajgad Fort</Button>
      <Button variant="outline" className="rounded-full px-5 py-2.5 text-sm md:px-6 md:py-3 md:text-base">Vasai Fort</Button>
    </div>

    {/* Featured Fort Card – all content at the bottom */}
    <div className="max-w-6xl mx-auto">
      <div
        className="relative rounded-[28px] overflow-hidden bg-cover bg-center ring-1 ring-black/5"
        style={{
          backgroundImage: "url('/Lohagad.png')", // update to your image path
          minHeight: "560px",
        }}
      >
        {/* Bottom-heavy gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Bottom-anchored row */}
        <div className="relative z-10 w-full h-full flex items-end">
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 items-end px-6 md:px-10 lg:px-14 pb-8 md:pb-10">
            {/* Left: Title + description */}
            <div className="lg:col-span-2">
              <h3 className="text-white text-[40px] md:text-[56px] font-extrabold leading-tight mb-3 drop-shadow-sm">
                Raigad
              </h3>
              <p className="text-white/95 text-base md:text-lg leading-relaxed max-w-3xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
                Raigad Fort was the capital of the Maratha Empire under Chhatrapati Shivaji Maharaj,
                symbolizing Maratha independence and resilience. It was here that Shivaji was crowned
                as Chhatrapati in 1674.
              </p>
            </div>

            {/* Right: Chips + CTA */}
            <div className="flex flex-col justify-end">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 rounded-xl bg-white/92 backdrop-blur px-3 py-2 shadow-md">
                  <span className="w-7 h-7 grid place-items-center rounded bg-orange-100 text-orange-600 text-sm">📋</span>
                  <span className="text-[15px] font-medium text-orange-700">Guide Assistance</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/92 backdrop-blur px-3 py-2 shadow-md">
                  <span className="w-7 h-7 grid place-items-center rounded bg-amber-100 text-amber-600 text-sm">⏱</span>
                  <span className="text-[15px] font-medium text-amber-700">50 min tour</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/92 backdrop-blur px-3 py-2 shadow-md">
                  <span className="w-7 h-7 grid place-items-center rounded bg-blue-100 text-blue-600 text-sm">🗣</span>
                  <span className="text-[15px] font-medium text-blue-700">Language : मराठी / English</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/92 backdrop-blur px-3 py-2 shadow-md">
                  <span className="w-7 h-7 grid place-items-center rounded bg-purple-100 text-purple-600 text-sm">🔄</span>
                  <span className="text-[15px] font-medium text-purple-700">360° Virtual Experience</span>
                </div>
              </div>

              <div className="mt-5">
                <Link to="/explore-forts">
                  <Button className="px-6 md:px-8 py-3 rounded-full bg-teal-400 hover:bg-teal-500 text-white font-medium">
                    Explore Now →
                  </Button>
                </Link>
              </div>
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
      <p className="text-gray-600">A digital journey through Maharashtra’s pride</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {mustExperienceForts.map((fort, index) => (
        <Card
          key={index}
          className="overflow-hidden bg-white border border-teal-200 rounded-xl hover:shadow-md transition-shadow"
        >
          {/* Image */}
          <div className="aspect-[16/10] bg-gray-100">
            <img
              src={fort.image}
              alt={fort.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </div>

          {/* Body */}
          <div className="px-5 pt-4 pb-5">
            {/* Title */}
            <h3 className="text-xl font-semibold text-slate-900 mb-1">{fort.name}</h3>

            {/* Meta stacked like the mock */}
            <div className="space-y-2 text-sm text-slate-700 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 grid place-items-center">⏱</span>
                <span>{fort.tour || "50 min Tour"}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 grid place-items-center">🎯</span>
                <span>360° Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 grid place-items-center">📋</span>
                <span>Guide Assistance</span>
              </div>
            </div>

            {/* Rating row (stars + count) */}
            <div className="mt-2 mb-3 flex items-center gap-2">
              <div className="text-amber-400 leading-none">
                {"★".repeat(Math.floor(fort.rating || 4.6))}
              </div>
              <span className="text-xs text-slate-500">
                {fort.reviews || 500} reviews
              </span>
            </div>

            {/* Explore link right-aligned */}
            <div className="mt-3 flex justify-end">
              <Link
                to={`/fort/${fort.name.toLowerCase().replace(/\s+fort/i, "").replace(/\s+/g, "-")}`}
                className="text-teal-700 hover:text-teal-800 font-semibold inline-flex items-center gap-1"
              >
                Explore Now →
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