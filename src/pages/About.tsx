import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Dribbble, Github } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: "🌐",
      title: "Virtual Fort Exploration",
      description:
        "Walk through iconic forts like Kolaba from your screen—no actual trekking needed.",
    },
    {
      icon: "🗣️",
      title: "Multilingual Narration",
      description:
        "Created by experts, library of trusted practices and lessons covers math, science, and more. Always free for learners and teachers.",
    },
    {
      icon: "🤖",
      title: "Smart Guide Assistance",
      description:
        "Get helpful prompts, info, and directions just like a real fort guide.",
    },
  ];

  const teamMembers = [
    {
      name: "Tanvi Patil",
      role: "UI/UX designer",
      description:
        "Focuses on crafting intuitive user journeys and wireframes that enhance user engagement.",
      image: "/placeholder.svg",
    },
    {
      name: "Bhagyashri Patil",
      role: "UI/UX designer",
      description:
        "Specializes in user research and visual consistency, ensuring every design element serves a purpose.",
      image: "/placeholder.svg",
    },
    {
      name: "Jeevan Patil",
      role: "UI/UX designer",
      description:
        "Bridges design with development, turning creative ideas into user-friendly interfaces.",
      image: "/placeholder.svg",
    },
    {
      name: "Chintan Patel",
      role: "UI/UX designer",
      description:
        "Combines modern UI trends with historical themes to create a immersive user experience.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-20">
        {/* What We Offer */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-slate-800 mb-3">What We Offer</h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-yellow-300 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <Card
                  key={idx}
                  className="p-8 text-center hover:shadow-lg transition-shadow rounded-2xl"
                >
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10">
              <h2 className="text-4xl font-bold text-slate-800 mb-3">Our Team</h2>
              <p className="text-slate-600 max-w-3xl">
                Meet our enthusiastic team blending history and technology to bring forts to
                life—virtually!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((m, idx) => (
                <Card
                  key={idx}
                  className="p-6 hover:shadow-lg transition-shadow rounded-2xl bg-white"
                >
                  {/* Avatar centered */}
<div className="w-20 h-20 bg-gray-200 rounded-full mb-3 overflow-hidden mx-auto flex items-center justify-center">
  <img
    src={m.image || "/placeholder.svg"}
    alt={m.name}
    className="w-full h-full object-cover"
    onError={(e) => {
      e.currentTarget.onerror = null;
      e.currentTarget.src = "/placeholder.svg";
    }}
  />
</div>


                  {/* Name + role */}
                  <h3 className="text-[18px] font-bold text-slate-800 mb-1">{m.name}</h3>
                  <p className="text-slate-500 text-sm mb-3">{m.role}</p>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">{m.description}</p>

                  {/* Social row (actual icons) */}
                  <div className="flex items-center gap-4 mt-4 text-slate-400">
                    <a
                      href="#"
                      aria-label="Facebook"
                      title="Facebook"
                      className="hover:text-slate-700 transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      aria-label="Twitter"
                      title="Twitter"
                      className="hover:text-slate-700 transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      aria-label="Dribbble"
                      title="Dribbble"
                      className="hover:text-slate-700 transition-colors"
                    >
                      <Dribbble className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      aria-label="GitHub"
                      title="GitHub"
                      className="hover:text-slate-700 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
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
              Explore Maharashtra mighty forts with AR/VR walk through History from anywhere in
              the world
            </p>
            <p className="text-white/80 text-sm">#MarathaGlory ▶</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-white/80 hover:text-white text-sm">
                Home
              </Link>
              <Link to="/explore-forts" className="block text-white/80 hover:text-white text-sm">
                Explore Fort
              </Link>
              <Link to="/about" className="block text-white/80 hover:text-white text-sm">
                About Us
              </Link>
              <Link to="/contact" className="block text-white/80 hover:text-white text-sm">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Popular Forts</h4>
            <div className="space-y-2">
              <Link to="/fort/raigad" className="block text-white/80 hover:text-white text-sm">
                Raigad Fort
              </Link>
              <Link to="/fort/lohagad" className="block text-white/80 hover:text-white text-sm">
                Lohagad Fort
              </Link>
              <Link to="/fort/pratapgad" className="block text-white/80 hover:text-white text-sm">
                Pratapgad Fort
              </Link>
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

export default About;
