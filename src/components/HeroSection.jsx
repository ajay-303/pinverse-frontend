import { useNavigate } from "react-router-dom";
import heroCollage from "../assets/hero-collage.jpg";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-red-50/40 via-white to-transparent pt-6 pb-12 sm:pt-10 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* 👈 Left Side: Content & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/70 border border-red-200/60 text-red-700 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              Explore, Collect & Inspire
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.15] mb-5">
              Create the life you love on{" "}
              <span className="bg-gradient-to-r from-red-600 via-rose-600 to-red-500 bg-clip-text text-transparent">
                Pinverse
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-600 max-w-xl mb-8 leading-relaxed font-normal">
              Find fresh aesthetics, breathtaking nature photography, daily inspiration, 
              and creative ideas curated for what inspires you most.
            </p>

            {/* 🎯 Two CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={() => navigate("/register")}
                className="w-full sm:w-auto px-8 py-3.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-base rounded-full shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join Pinverse</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button
                onClick={() => navigate("/login")}
                className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-gray-100 active:scale-95 text-gray-800 font-bold text-base rounded-full border border-gray-300 hover:border-gray-400 shadow-sm transition-all duration-200 cursor-pointer"
              >
                I have an account
              </button>
            </div>

            {/* Quick Community Proof */}
            <div className="mt-8 pt-6 border-t border-gray-200/80 flex items-center gap-4 text-xs sm:text-sm text-gray-500">
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Community member"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Community member"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                  alt="Community member"
                />
              </div>
              <span>Joined by <strong className="text-gray-900 font-semibold">10,000+</strong> creative pinners worldwide</span>
            </div>

          </div>

          {/* 👉 Right Side: Aesthetic Nature & Moodboard Collage */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* Ambient background glow behind image */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-red-200/40 via-rose-100/30 to-amber-100/30 rounded-3xl blur-2xl -z-10 transform rotate-1"></div>

            {/* Main Collage Frame */}
            <div className="relative group overflow-hidden rounded-3xl border-4 border-white shadow-2xl bg-white transition-all duration-500 hover:shadow-red-500/10">
              <img
                src={heroCollage}
                alt="Aesthetic Nature & Wanderlust Moodboard Collage"
                className="w-full h-auto max-h-[480px] object-cover rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />

              {/* Overlay Tag / Floating badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-white/60 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                  📌
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Nature & Wanderlust Moodboard</p>
                  <p className="text-[11px] text-gray-500">Trending collection on Pinverse</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
