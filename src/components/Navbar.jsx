import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between p-4 bg-white shadow">

      <h1 className="font-bold">PinVerse</h1>

      <div className="flex gap-3">

        <button onClick={() => navigate("/register")}>
          Register
        </button>

        <button
          onClick={() => navigate("/upload")}
          className="bg-black text-white px-3 py-1 rounded"
        >
          Upload
        </button>
        
         <button
          onClick={() => navigate("/login")}
          className="bg-black text-white px-3 py-1 rounded"
        >
          login
        </button>

      </div>

    </div>
  );
}

export default Navbar;