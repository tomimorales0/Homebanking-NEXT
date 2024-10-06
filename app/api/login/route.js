export async function POST(req) {
    const { email, password } = await req.json();
  
    // Lista de usuarios y contraseñas válidos
    const validUsers = [
      { email: 'usuario1@example.com', password: 'password123' },
      { email: 'usuario2@example.com', password: 'mypassword' },
      { email: 'usuario3@example.com', password: 'secretpass' },
    ];
  
    // Verificar si las credenciales coinciden con algún usuario válido
    const user = validUsers.find(
      (user) => user.email === email && user.password === password
    );
  
    if (user) {
      const response = new Response(JSON.stringify({ message: 'Login exitoso' }), {
        status: 200,
      });
      
      // Aquí establecemos la cookie con un token ficticio (puedes generar un JWT o similar)
      response.cookies.set('auth-token', 'mi-token-secreto', {
        httpOnly: true, // Solo accesible por el servidor
        secure: process.env.NODE_ENV === 'production', // Solo en https
        path: '/', // Disponible en todo el sitio
        maxAge: 60 * 60 * 24, // Expira en 1 día
      });
  
      return response;
    } else {
      return new Response(JSON.stringify({ message: 'Credenciales inválidas' }), {
        status: 401,
      });
    }
  }
  