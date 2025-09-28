import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

type Period = { period: string; events: string[] };

type FortRecord = {
name: string;
subtitle: string;
description: string;
details: string;
bestTimeToVisit: string;
timeline: Period[];
};

export default function FortDetail() {
const { fortName } = useParams();
const navigate = useNavigate();
const startTour = () => navigate("/loading");

const fortData: Record<string, FortRecord> = {
suvarnadurg: {
name: "SUVARNADURG",
subtitle: "Enter the Golden Fort",
description:
"Suvarnadurg Fort is a historic island fortress in the Arabian Sea, near Harnai in Maharashtra's Konkan region. Along with a smaller land fort called Kanakdurg near Harnai port, it served as a key defense post for the Maratha Empire. Built by Chhatrapati Shivaji Maharaj in 1660, the fort was later strengthened by the Peshwas and the Angre family to protect against European colonial powers and local rivals. Its name means “Golden Fort”, symbolizing its importance as a pride of the Marathas. Besides being a strategic naval base, Suvarnadurg also had a shipbuilding facility, playing a crucial role in Maratha naval power. Its rocky island location made it a tough stronghold against enemy attacks. Today, it stands as a reminder of Maharashtra’s rich maritime history.",
timeline: [
{
period: "1660: Shivaji’s Conquest",
events: [
"Captured after a 3-month siege",
"Added double fortification walls",
"Became key Maratha naval base",
],
},
{
period: "1698–1729: Kanhoji Angre’s Command",
events: [
"Home to 200+ Maratha warships",
"Built dry docks and cannon foundry",
"Repelled multiple European attacks",
],
},
{
period: "1755: British Capture",
events: [
"Fell after a sea-bombardment",
"Converted to prison under East India Company",
],
},
{
period: "1947–Present: Modern Era",
events: [
"Came under ASI protection",
"Declared protected monument",
"Ongoing conservation efforts",
],
},
],
details:
"Suvarnadurg Fort, Dapoli, a historic architectural marvel, exudes a mystical charm with its untold secrets. For the best experience, visit between November and May—post-monsoon—when clear paths and minimal vegetation make exploration easier.",
bestTimeToVisit: "Best time to visit",
},
};

const current =
fortData[(fortName as string) || "suvarnadurg"] || fortData.suvarnadurg;

return (
<div className="min-h-screen bg-white">
<Navigation />

text
  {/* Hero with title + subtitle on image */}
  <section
    className="relative w-full bg-cover bg-center"
    style={{
      backgroundImage:
        "linear-gradient(rgba(0,0,0,0.18),rgba(0,0,0,0.38)), url('/images/forts/suvarnadurg_hero.jpg')",
    }}
  >
    <div className="h-[380px] sm:h-[460px] md:h-[540px] lg:h-[600px] flex items-center justify-center">
      <div className="text-center select-none">
        <h1 className="text-white font-serif tracking-[0.28em] drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
          {current.name}
        </h1>
        <p className="mt-3 sm:mt-4 text-[#e8f2ff] font-serif tracking-wide text-lg sm:text-2xl md:text-3xl">
          {current.subtitle}
        </p>
      </div>
    </div>
  </section>

  {/* Main */}
  <main className="max-w-6xl mx-auto px-4 mt-6 sm:mt-8 w-full">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Timeline redesigned */}
      <aside className="rounded-xl bg-[#eef2fb] p-4 sm:p-6 shadow">
        <div className="inline-block rounded bg-[#e2d5ff] px-3 py-1 text-sm font-semibold text-[#3b2c6f] mb-4">
          HISTORY TIMELINE
        </div>

        <div className="relative">
          {/* Left rail */}
          <div className="absolute left-4 top-0 bottom-0 w-[3px] bg-[#cfd7f3]" />
          <div className="space-y-5">
            {current.timeline.map((t, i) => (
              <div key={i} className="relative pl-10">
                {/* Marker */}
                <span className="absolute left-[10px] top-2 w-3 h-3 rounded-full bg-[#6a5acd] ring-4 ring-[#eef2fb]" />
                {/* Period chip */}
                <div className="inline-flex items-center rounded-md bg-white/90 border border-[#e7e9f3] shadow-sm px-3 py-1 text-[13px] font-semibold text-[#2b3e55]">
                  {t.period}
                </div>
                {/* Events card */}
                <div className="mt-2 rounded-md bg-white border border-[#e7e9f3] shadow-sm">
                  <ul className="p-3 sm:p-4 text-sm text-[#4b5b70] space-y-1">
                    {t.events.map((e, j) => (
                      <li key={j} className="flex">
                        <span className="mt-[6px] mr-2 inline-block w-1.5 h-1.5 rounded-full bg-[#6a5acd]" />
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Right column */}
      <section className="lg:col-span-2 space-y-6">
        {/* Description with more spacing and an extra paragraph */}
        <div className="rounded-xl bg-white shadow p-6 border border-[#e7e9f3]">
          <p className="text-[#2f3f50] leading-8 mb-6">
            Suvarnadurg Fort is a historic island bastion off Harnai on Maharashtra’s Konkan coast, paired with the shore‑side Kanakdurg to form a strategic sea–land defense for the Marathas. Conceived under Chhatrapati Shivaji Maharaj and later reinforced by the Peshwas and the Angre naval family, it safeguarded trade routes and repelled European colonial fleets with layered sea walls, rocky approaches, and commanding bastions. The fort also hosted a shipbuilding yard that supported a formidable Maratha navy, making “Suvarnadurg” — the “Golden Fort” — a symbol of coastal pride and maritime strength.
          </p>
          <p className="text-[#2f3f50] leading-8">
            Spread over a rugged laterite outcrop, the fort features cut‑rock ramparts, inner granaries, water storage, and sea‑facing gates engineered to conceal key approaches. Access today is by boat from Harnai during fair‑weather months, and the precinct remains a protected monument preserving Konkan’s maritime legacy.
          </p>
        </div>

        {/* Details with more spacing and added guidance */}
        <div className="rounded-xl bg-[#fdeeff] p-6 shadow border border-[#f5d8ee]">
          <div className="text-center mb-4">
            <p className="italic text-[#6b5a7a]">Details</p>
            <p className="font-semibold text-[#2b3e55]">{current.bestTimeToVisit}</p>
          </div>
          <p className="text-[#2f3f50] leading-8">
            For comfort and safety, plan between November and May when seas are calmer and paths are clearer after the monsoon. Morning boats from Harnai are steadier; wear good‑grip footwear, carry water, and confirm local boat and tide timings. Post‑monsoon air offers the sharpest views along the walls, while winter light favors photography.
          </p>
        </div>
      </section>
    </div>
  </main>

  {/* Seawall image */}
  <section className="mt-6 sm:mt-8">
    <img
      src="/images/forts/suvarnadurg_seawall.jpg"
      alt="Seawall"
      className="w-full h-[260px] sm:h-[320px] md:h-[380px] object-cover"
    />
  </section>

  {/* AR/VR + CTA (wide orange pill) */}
  <section className="w-full bg-[#e6f1f6]">
    <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
      <p className="text-[11px] sm:text-xs text-[#4b5b70]">
        AR/VR TOUR — Experience Suvarnadurg Fort like never before with our immersive AR/VR tour. Explore the fort’s architecture, history, and strategic significance from anywhere in the world. Click the button below to start your virtual journey.
      </p>
      <div className="flex justify-center mt-4">
        <Button
          onClick={startTour}
          className="bg-[#e86a1f] hover:bg-[#d85f1b] active:bg-[#c85319] text-white
                     h-12 sm:h-12 md:h-[54px] rounded-full
                     w-[90%] sm:w-[620px] md:w-[760px] lg:w-[860px]
                     text-lg sm:text-xl tracking-wide font-semibold
                     shadow ring-1 ring-black/10"
        >
          Start Virtual tour
        </Button>
      </div>
    </div>
  </section>

  {/* Footer (unchanged structure) */}
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
          <Link
            to="/"
            className="block text-white/80 hover:text-white text-sm"
          >
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
}