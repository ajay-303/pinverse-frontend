import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { getPosts } from "../api/post";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

const fakeImages = Array.from({ length: 100 }, (_, i) => ({
  _id: `fake-${i}`,
  title: `Creative Inspiration ${i + 1}`,
  image: `https://picsum.photos/id/${(i % 100) + 10}/400/600`,
  type: "fake",
  likes: Math.floor(Math.random() * 100),
}));
  // ❤️ Like
  const handleLike = async (id, type) => {
    try {
      if (type === "real") {
        await axios.put(`http://localhost:5000/api/posts/like/${id}`);
      }

      setPosts((prev) =>
        prev.map((p) =>
          p._id === id
            ? { ...p, likes: (p.likes || 0) + 1 }
            : p
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  // 🗑 Delete
  const handleDelete = async (id, type) => {
    try {
      if (type !== "real") return;

      await axios.delete(`http://localhost:5000/api/posts/${id}`);

      setPosts((prev) =>
        prev.filter((p) => p._id !== id)
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getPosts();

        const realPosts = res.data.map((post) => ({
          ...post,
          image: `http://localhost:5000/uploads/${post.image}`,
          type: "real",
        }));

        // Real + Fake
        setPosts([...realPosts, ...fakeImages]);
      } catch (err) {
        console.log("API Error:", err);

        // Show fake images even if API fails
        setPosts(fakeImages);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title?.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* 🌟 Hero Section (shown when not filtering or searching) */}
      {!searchQuery && <HeroSection />}

      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6">
        {!searchQuery && (
          <div className="flex items-center justify-between mb-5 px-1">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                Explore Daily Ideas
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">Curated inspiration from creators worldwide</p>
            </div>
            <span className="hidden sm:inline-flex text-xs font-semibold px-3 py-1 bg-red-50 text-red-600 rounded-full border border-red-100">
              🔥 Trending Today
            </span>
          </div>
        )}

        {filteredPosts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
            <div className="w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.85-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">No matching pins found</h2>
            <p className="text-gray-500 max-w-sm mb-5 text-sm">
              We couldn't find any ideas for "{searchQuery}". Try searching for something else!
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-full shadow transition"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4">
            {filteredPosts.map((post) => (
            <div
              key={post._id}
              className="relative mb-4 break-inside-avoid rounded-2xl overflow-hidden bg-white shadow-md group hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full"
              />

              {/* BUTTONS */}
              <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                {/* ❤️ LIKE */}
                <button
                  onClick={() =>
                    handleLike(post._id, post.type)
                  }
                  className="bg-white p-2 rounded-full shadow text-sm"
                >
                  ❤️ {post.likes || 0}
                </button>

                {/* ⬇ DOWNLOAD */}
                <a
                  href={post.image}
                  download
                  className="bg-white p-2 rounded-full shadow text-sm"
                >
                  ⬇
                </a>

                {/* 🗑 DELETE */}
                {post.type === "real" && (
                  <button
                    onClick={() =>
                      handleDelete(post._id, post.type)
                    }
                    className="bg-white p-2 rounded-full shadow text-sm"
                  >
                    🗑
                  </button>
                )}
              </div>

              {/* TITLE */}
              <div className="p-3">
                <h1 className="font-semibold text-lg">
                  {post.title}
                </h1>

                <p className="text-xs text-gray-400">
                  {post.type === "real"
                    ? "Uploaded Post"
                    : "Pinterest Style"}
                </p>
              </div>
            </div>
          ))}
          </div>
        )}
      </div>

      {/* 🦶 Footer */}
      <Footer />
    </div>
  );
}

export default Home;