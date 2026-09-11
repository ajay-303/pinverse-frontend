import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-white border-t border-gray-200 mt-16 text-gray-600">
      
      {/* 📬 Top Inspiration Newsletter Banner */}
      <div className="border-b border-gray-100 bg-gradient-to-r from-red-50/50 via-rose-50/30 to-amber-50/40 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
              Get creative ideas delivered to your inbox
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Weekly handpicked pins, trending moodboards, and aesthetic inspiration.
            </p>
          </div>

          {/* Subscribe Form */}
          <div className="w-full md:w-auto">
            {subscribed ? (
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-sm border border-emerald-200">
                <span>🎉 You're subscribed to weekly inspiration!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center w-full md:w-96 gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-white px-4 py-2.5 rounded-full border border-gray-300 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 shadow-sm"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold text-sm rounded-full shadow-md shadow-red-600/20 transition shrink-0 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* 🧭 Main Footer Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Col 1: Brand & Bio (Spans 2 cols on md screens) */}
          <div className="col-span-2">
            <div
              onClick={() => navigate("/")}
              className="flex items-center gap-2.5 cursor-pointer group mb-4 inline-flex"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-rose-600 via-red-600 to-red-500 flex items-center justify-center shadow-md shadow-red-500/25 group-hover:scale-105 transition-transform duration-200">
                <svg
                  className="w-4 h-4 text-white transform -rotate-12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C7.58 2 4 5.58 4 10c0 3.4 2.12 6.3 5.14 7.42-.07-.63-.13-1.6.03-2.29.14-.62.92-3.9.92-3.9s-.23-.47-.23-1.16c0-1.09.63-1.9 1.42-1.9.67 0 .99.5 0.99 1.11 0 .67-.43 1.68-.65 2.61-.18.79.4 1.43 1.18 1.43 1.42 0 2.51-1.5 2.51-3.66 0-1.92-1.38-3.25-3.34-3.25-2.44 0-3.87 1.83-3.87 3.72 0 .74.28 1.53.64 1.96.07.08.08.16.06.24-.07.28-.22.88-.25 1-.04.16-.13.2-.3.12-1.13-.53-1.84-2.18-1.84-3.51 0-2.86 2.08-5.48 6-5.48 3.15 0 5.6 2.25 5.6 5.25 0 3.13-1.97 5.65-4.71 5.65-.92 0-1.78-.48-2.08-1.05l-.57 2.16c-.2.79-.76 1.77-1.13 2.38.86.27 1.77.41 2.71.41 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
              </div>
              <span className="text-xl font-black tracking-tight text-gray-900">
                Pin<span className="text-red-600">Verse</span>
              </span>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed max-w-sm mb-6">
              PinVerse is your sanctuary for visual discovery. Explore aesthetic moodboards,
              curated nature photography, and share creative sparks that shape your life.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 text-gray-400">
              <a
                href="#instagram"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-600 flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#pinterest"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-600 flex items-center justify-center transition-colors"
                title="Pinterest"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.211-.174.256-.401.155-1.495-.696-2.43-2.879-2.43-4.634 0-3.774 2.743-7.241 7.904-7.241 4.15 0 7.378 2.957 7.378 6.911 0 4.124-2.599 7.442-6.208 7.442-1.212 0-2.352-.63-2.744-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#twitter"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-600 flex items-center justify-center transition-colors"
                title="X (Twitter)"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Discover */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">
              Discover
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><button onClick={() => navigate("/")} className="hover:text-red-600 transition">Explore Pins</button></li>
              <li><a href="#nature" className="hover:text-red-600 transition">Nature & Scenery</a></li>
              <li><a href="#travel" className="hover:text-red-600 transition">Travel & Wanderlust</a></li>
              <li><a href="#minimal" className="hover:text-red-600 transition">Minimal Aesthetic</a></li>
              <li><a href="#art" className="hover:text-red-600 transition">Art & Photography</a></li>
            </ul>
          </div>

          {/* Col 3: Community */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">
              Community
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><button onClick={() => navigate("/register")} className="hover:text-red-600 transition">Join Pinverse</button></li>
              <li><button onClick={() => navigate("/upload")} className="hover:text-red-600 transition">Create & Upload</button></li>
              <li><a href="#creators" className="hover:text-red-600 transition">Creator Stories</a></li>
              <li><a href="#guidelines" className="hover:text-red-600 transition">Community Guidelines</a></li>
              <li><a href="#badges" className="hover:text-red-600 transition">Verified Pinners</a></li>
            </ul>
          </div>

          {/* Col 4: Company & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#about" className="hover:text-red-600 transition">About Us</a></li>
              <li><a href="#privacy" className="hover:text-red-600 transition">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-red-600 transition">Terms of Service</a></li>
              <li><a href="#help" className="hover:text-red-600 transition">Help Center</a></li>
              <li><a href="#contact" className="hover:text-red-600 transition">Contact Support</a></li>
            </ul>
          </div>

        </div>

        {/* 🔻 Bottom Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} PinVerse, Inc. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span>Made with <span className="text-red-500">❤️</span> for creative minds</span>
            <div className="flex items-center gap-1 text-gray-500 hover:text-gray-700 cursor-pointer">
              <span>🌐</span>
              <span>English (US)</span>
            </div>
          </div>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
