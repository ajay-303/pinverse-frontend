import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getPosts } from "../api/post";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);

  // ❤️ LIKE
  const handleLike = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/posts/like/${id}`);

      setPosts((prev) =>
        prev.map((p) =>
          p._id === id ? { ...p, likes: (p.likes || 0) + 1 } : p
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  // 🗑 DELETE (ONLY REAL POSTS)
  const handleDelete = async (id, type) => {
    try {
      if (type !== "real") return;

      await axios.delete(`http://localhost:5000/api/posts/${id}`);

      setPosts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  // fake pinterest images
  const fakeImages = Array.from({ length: 20 }, (_, i) => ({
    _id: "fake-" + i,
    title: "Creative Inspiration",
    image: `https://picsum.photos/300/${300 + (i % 10) * 40}?random=${i}`,
    type: "fake",
    likes: Math.floor(Math.random() * 100),
  }));

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getPosts();

        const realPosts = res.data.map((post) => ({
          ...post,
          image: `http://localhost:5000/uploads/${post.image}`,
          type: "real",
        }));

        setPosts([...realPosts, ...fakeImages]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-[#f1f1f1] min-h-screen">
      <Navbar />

      <div className="p-4 columns-2 md:columns-3 lg:columns-5 gap-4">

        {posts.map((post) => (
          <div
            key={post._id}
            className="relative mb-4 break-inside-avoid rounded-2xl overflow-hidden bg-white shadow-md group hover:shadow-xl transition"
          >

            {/* IMAGE */}
            <img
              src={post.image}
              alt="post"
              className="w-full"
            />

            {/* BUTTONS */}
            <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">

              {/* ❤️ LIKE */}
              <button
                onClick={() => handleLike(post._id)}
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

              {/* 🗑 DELETE (ONLY REAL) */}
              {post.type === "real" && (
                <button
                  onClick={() => handleDelete(post._id, post.type)}
                  className="bg-white p-2 rounded-full shadow text-sm"
                >
                  🗑
                </button>
              )}

            </div>

            {/* TITLE */}
            <div className="p-3">
              <h1 className="font-semibold text-lg">{post.title}</h1>

              <p className="text-xs text-gray-400">
                {post.type === "real"
                  ? "Uploaded Post"
                  : "Pinterest Style"}
              </p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Home;