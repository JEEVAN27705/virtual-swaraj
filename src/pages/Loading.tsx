import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/virtual-tour');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/Loading.png')"
      }}
    >
      <div className="text-center text-white">
        {/* Spinning Loader */}
        <div className="mb-8">
          <div className="w-24 h-24 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto"></div>
        </div>
        
        {/* Loading Text */}
        <h1 className="text-3xl font-light tracking-wide">
          Loading<span className="animate-pulse">.....</span>
        </h1>
      </div>
    </div>
  );
};

export default Loading;