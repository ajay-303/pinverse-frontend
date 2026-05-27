import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const res = await registerUser({
        username,
        email,
        password,
      });

      alert("Registered successfully ✅");

      navigate("/login");

    } catch (err) {
      console.log(err);
      alert("Register failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-[400px]">

        <h1 className="text-4xl font-bold text-center mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Join the PinVerse community
        </p>

        <div className="flex flex-col gap-5">

          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 p-4 rounded-xl outline-none focus:border-black"
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-4 rounded-xl outline-none focus:border-black"
          />

          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-4 rounded-xl outline-none focus:border-black"
          />

          <button
            onClick={handleRegister}
            className="bg-black text-white p-4 rounded-xl hover:bg-gray-800 duration-300"
          >
            Register
          </button>

          <p className="text-center text-gray-500">
            Already have an account?
            <span
              onClick={() => navigate("/login")}
              className="text-black font-semibold cursor-pointer ml-1"
            >
              Login
            </span>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;