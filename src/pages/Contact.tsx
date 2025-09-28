import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Spacer to ensure no overlap with header (works even if header is sticky/fixed) */}
      <div className="h-20 md:h-24" />

      {/* Section heading */}
      <section className="pt-4 pb-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-[44px] font-bold mb-2" style={{ color: "#f59e0b" }}>
            Get In Touch
          </h1>
          <p className="text-lg" style={{ color: "#0f172a" }}>
            Lets Connect ! How can I help you ?
          </p>
        </div>
      </section>

      {/* Contact Form + Illustration */}
      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)] gap-10 items-start">
            {/* Left: Form */}
            <Card className="p-6 md:p-8 bg-white shadow-md">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-12 text-[15px]"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-12 text-[15px]"
                  required
                />
                <Input
                  name="website"
                  placeholder="Website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full h-12 text-[15px]"
                />
                <Textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[140px] text-[15px]"
                  required
                />

                <Button
                  type="submit"
                  className="w-full h-12 text-base font-semibold rounded-md bg-gradient-to-r from-fuchsia-500 to-orange-400 hover:from-fuchsia-600 hover:to-orange-500 text-white"
                >
                  Submit
                </Button>
              </form>
            </Card>

            {/* Right: Image with reserved space to prevent layout shift */}
            <div className="relative">
  <div className="relative w-full max-w-[560px] mx-auto">
    <div className="w-full overflow-hidden rounded-2xl shadow-sm">
      <div className="relative" style={{ paddingTop: "90%" }}>
        <img
          src="/Contact Us.png"
          alt="Contact illustration"
          className="absolute inset-0 w-full h-full object-contain"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  </div>
</div>

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
              Explore Maharashtra mighty forts with AR/VR walk through History
              from anywhere in the world
            </p>
            <p className="text-white/80 text-sm">#MarathaGlory ▶</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-white/80 hover:text-white text-sm">
                Home
              </Link>
              <Link
                to="/explore-forts"
                className="block text-white/80 hover:text-white text-sm"
              >
                Explore Fort
              </Link>
              <Link
                to="/about"
                className="block text-white/80 hover:text-white text-sm"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block text-white/80 hover:text-white text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Popular Forts</h4>
            <div className="space-y-2">
              <Link
                to="/fort/raigad"
                className="block text-white/80 hover:text-white text-sm"
              >
                Raigad Fort
              </Link>
              <Link
                to="/fort/lohagad"
                className="block text-white/80 hover:text-white text-sm"
              >
                Lohagad Fort
              </Link>
              <Link
                to="/fort/pratapgad"
                className="block text-white/80 hover:text-white text-sm"
              >
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
            © 2025 Fort Explorer. All rights reserved. Preserving Maharashtra's
            heritage.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
