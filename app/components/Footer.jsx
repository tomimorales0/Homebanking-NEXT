import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white shadow-md mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-1">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">&copy; 2024 Horizon Bank. Todos los derechos reservados.</p>
          </div>
          <nav className="flex space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-green-600">
              Info
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-green-600">
              Contacto
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-green-600">
              Politica de Privacidad
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-green-600">
              Terminos de Servicio
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}