import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await loginUser({
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      alert("Login successful ✅");

      navigate("/");

    } catch (err) {
      console.log(err);
      alert("Login failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-[400px]">

        <h1 className="text-4xl font-bold text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Login to your PinVerse account
        </p>

        <div className="flex flex-col gap-5">

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-4 rounded-xl outline-none focus:border-black"
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-4 rounded-xl outline-none focus:border-black"
          />

          <button
            onClick={handleLogin}
            className="bg-black text-white p-4 rounded-xl hover:bg-gray-800 duration-300"
          >
            Login
          </button>

          <p className="text-center text-gray-500">
            Don’t have an account?
            <span
              onClick={() => navigate("/register")}
              className="text-black font-semibold cursor-pointer ml-1"
            >
              Register
            </span>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;