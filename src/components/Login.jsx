import React, { useState } from "react";
import { useUserContext } from "../userContext/UserContext";
export default function Login() {
  const { loginUser } = useUserContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin  = () => {
    loginUser(name, email);
    setName("");
    setEmail("");
  };
  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded-md bg-white">
      <h2 className="text-lg font-semibold mb-4">Login</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-2 py-1 rounded-sm border-gray-300 mb-4"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-2 py-1 rounded-sm border-gray-300 mb-4"
      />
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
      >
        Login
      </button>
    </div>
  );
}
