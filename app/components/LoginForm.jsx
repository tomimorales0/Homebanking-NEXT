'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // Definimos las credenciales válidas
  const validCredentials = [
    { email: '1@2', password: '12' },
    { email: 'usuario2@example.com', password: 'mypassword' },
    { email: 'usuario3@example.com', password: 'secretpass' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificamos si las credenciales son válidas
    const user = validCredentials.find(
      (cred) => cred.email === email && cred.password === password
    );

    if (user) {
      // Aquí puedes almacenar el token en las cookies (puedes usar cualquier token que desees)
      document.cookie = 'auth-token=valid_token; path=/'; 
      router.push('/'); // Redirige a la página de inicio
    } else {
      // Manejar el error si las credenciales son inválidas
      setError('Credenciales inválidas. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-2xl mb-4">Ingrese sus datos aquí</h2>
      
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

      {error && <p className="text-red-600 mb-2">{error}</p>}

      <button type="submit" className="bg-green-500 text-white py-2 rounded hover:bg-green-600">
        Iniciar Sesión
      </button>
    </form>
  );
};

export default LoginForm;
