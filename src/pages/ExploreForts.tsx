import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const ExploreForts = () => {
  const forts = [
    { name: "Raigad Fort", type: "Trek", image: "/Raigad.png", tours: "55 min Tour", experience: "360° Experience", rating: 4.8, reviews: 502, guide: "Guide Assistance" },
    { name: "Suvarnadurg Fort", type: "Sea", image: "/Survanadurg Fort.png", tours: "47 min Tour", experience: "360° Experience", rating: 4.6, reviews: 480, guide: "Guide Assistance" },
    { name: "Pratapgad Fort", type: "Ground", image: "/Pratapgad Fort.png", tours: "45 min Tour", experience: "360° Experience", rating: 4.7, reviews: 200, guide: "Guide Assistance" },
    { name: "Panhala Fort", type: "Ground", image: "/Panhala Fort.png", tours: "43 min Tour", experience: "360° Experience", rating: 4.5, reviews: 526, guide: "Guide Assistance" },
    { name: "Shivneri Fort", type: "Trek", image: "/shivneri.png", tours: "35 min Tour", experience: "360° Experience", rating: 4.9, reviews: 610, guide: "Guide Assistance" },
    { name: "Vijaydurg Fort", type: "Sea", image: "/Vijaydurg Fort.png", tours: "40 min Tour", experience: "360° Experience", rating: 4.4, reviews: 374, guide: "Guide Assistance" },
    { name: "Torna Fort", type: "Trek", image: "/Torna.png", tours: "46 min Tour", experience: "360° Experience", rating: 4.6, reviews: 312, guide: "Guide Assistance" },
    { name: "Sinhagad Fort", type: "Trek", image: "/sinhagad.png", tours: "57 min Tour", experience: "360° Experience", rating: 4.8, reviews: 735, guide: "Guide Assistance" },
    { name: "Lohagad Fort", type: "Trek", image: "/Lohagad.png", tours: "44 min Tour", experience: "360° Experience", rating: 4.7, reviews: 689, guide: "Guide Assistance" },
    { name: "Sindhudurg Fort", type: "Sea", image: "/Sindhudurg Fort.png", tours: "50 min Tour", experience: "360° Experience", rating: 4.5, reviews: 452, guide: "Guide Assistance" },
    { name: "Salher Fort", type: "Ground", image: "/Salher Fort.png", tours: "45 min Tour", experience: "360° Experience", rating: 4.6, reviews: 268, guide: "Guide Assistance" },
    { name: "Rajgad Fort", type: "Ground", image: "/Rajgad.png", tours: "50 min Tour", experience: "360° Experience", rating: 4.7, reviews: 312, guide: "Guide Assistance" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const filteredForts = forts.filter((fort) => {
    const matchesSearch = fort.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedType === "all" || fort.type === selectedType;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/Lets Explore Banner.png')",
        }}
      >
        <div className="text-center text-white space-y-6">
          <h1 className="text-5xl font-bold" style={{ fontFamily: "Times New Roman, serif" }}>
            #LET'S <span className="decoration-4 decoration-primary">EXPLORE</span>
          </h1>
        </div>
      </section>

      {/* Search + Dropdown Section */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search forts by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3"
              />
            </div>

            {/* Category Dropdown */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2"
            >
              <option value="all">All Forts</option>
              <option value="Ground">Ground Forts</option>
              <option value="Trek">Trek Forts</option>
              <option value="Sea">Sea Forts</option>
            </select>
          </div>
        </div>
      </section>

      {/* Forts Grid – styled like the reference */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredForts.length > 0 ? (
              filteredForts.map((fort, index) => (
                <Card
                  key={index}
                  className="overflow-hidden bg-white border border-teal-200 rounded-xl"
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
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{fort.name}</h3>

                    {/* Meta stacked vertically */}
                    <div className="space-y-2.5 text-slate-700">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="w-5 h-5 grid place-items-center">⏱</span>
                        <span>{fort.tours}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="w-5 h-5 grid place-items-center">🎯</span>
                        <span>{fort.experience}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="w-5 h-5 grid place-items-center">📋</span>
                        <span>{fort.guide}</span>
                      </div>
                    </div>

                    {/* Rating row */}
                    <div className="mt-3 flex items-center gap-2">
                      <div className="text-amber-400 leading-none">
                        {"★".repeat(Math.floor(fort.rating))}
                      </div>
                      <span className="text-xs text-slate-500">{fort.reviews} reviews</span>
                    </div>

                    {/* Explore link right-aligned like the mock */}
                    <div className="mt-4 flex justify-end">
                      <Link
                        to={`/fort/${fort.name.toLowerCase().replace(/\s+fort/i, "").replace(/\s+/g, "-")}`}
                      >
                        <span className="text-teal-700 hover:text-teal-800 font-semibold inline-flex items-center gap-1">
                          Explore Now→
                        </span>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">No forts found</p>
            )}
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

export default ExploreForts;
