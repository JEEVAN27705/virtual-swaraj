import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const VirtualTour = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div 
        className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/Loading1.png')"
        }}
      >
        <div className="text-center text-white space-y-8">
          <h1 className="text-6xl font-light tracking-wide mb-12">
            Welcome to Virtual Tour !
          </h1>
          
          <Button 
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-2xl px-16 py-6 rounded-full border border-white/30 transition-all duration-300"
          >
            Start the Tour !
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;