import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Upload() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const handleUpload = async () => {
    if (!title || !image) {
      alert("Please fill all fields");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("image", image);
      formData.append("userId", "123");

      await axios.post(
        "http://localhost:5000/api/posts/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Uploaded successfully ✅");

      navigate("/"); // 🔥 go to home after upload

    } catch (err) {
      console.log(err);
      alert("Upload failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-md w-[350px]">

        <h1 className="text-xl font-bold mb-4">Upload Post</h1>

        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full mb-3"
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="mb-3"
        />

        <button
          onClick={handleUpload}
          className="bg-black text-white w-full p-2 rounded"
        >
          Upload
        </button>

      </div>

    </div>
  );
}

export default Upload;