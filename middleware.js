import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('auth-token'); // Suponiendo que almacenas el token de sesión en cookies

  // Rutas protegidas
  const protectedRoutes = ['/cuenta', '/facturas', '/transferencias/cuentas'];

  // Si no está autenticado y accede a rutas protegidas, redirige a login
  if (protectedRoutes.includes(req.nextUrl.pathname) && !token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}
