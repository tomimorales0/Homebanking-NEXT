"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importar useRouter

const RegisterForm = () => {
  const router = useRouter(); // Inicializar useRouter
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Lógica para manejar el registro (aquí solo hay un console.log)
    console.log("Registrarse con:", { email, password });

    // Redirigir a /login después de completar el formulario
    router.push("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-2xl mb-4">Registro</h2>

      <label htmlFor="email" className="mb-2">Correo Electrónico:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="p-2 mb-4 border border-gray-300 rounded"
      />

      <label htmlFor="password" className="mb-2">Contraseña:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="p-2 mb-4 border border-gray-300 rounded"
      />

      <label htmlFor="confirmPassword" className="mb-2">Confirmar Contraseña:</label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        className="p-2 mb-4 border border-gray-300 rounded"
      />

      <button type="submit" className="bg-green-500 text-white py-2 rounded hover:bg-green-600">
        Registrarse
      </button>
    </form>
  );
};

export default RegisterForm;
