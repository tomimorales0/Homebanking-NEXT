export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
  
      // Aquí puedes procesar los datos, por ejemplo, enviarlos a un servicio externo como un email
      // o guardarlos en una base de datos.
  
      // Por ejemplo:
      // await sendEmail(name, email, message);
  
      // Respuesta de éxito
      res.status(200).json({ message: 'Mensaje recibido' });
    } else {
      res.status(405).json({ message: 'Método no permitido' });
    }
  }
  