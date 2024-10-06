
export default function handler(req, res) {
    if (req.method === 'POST') {
      // INSERTAR lógica adicional para invalidar tokens del lado del servidor
      // Por ejemplo, si uso JWT, podria invalidar el token aquí
  
      // Enviar una respuesta indicando éxito y eliminar la cookie
      res.setHeader('Set-Cookie', 'auth-token=; Max-Age=0; path=/');
      return res.status(200).json({ message: 'Cierre de sesión exitoso' });
    } else {
      return res.status(405).json({ message: 'Método no permitido' });
    }
  }
  