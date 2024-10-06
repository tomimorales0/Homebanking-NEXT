import { BanknotesIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-400 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <BanknotesIcon className="h-8 w-8 text-green-600 mr-2" />
          <span className="text-xl font-bold">Horizon Bank</span>
        </div>
        <div className="flex items-center">
          <span className="mr-4">Bienvenido,</span>
          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-sm font-medium"></span>
          </div>
          <Link href="/login">
          <button className="p-6 bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
            Iniciar sesión
          </button>
        </Link>
        </div>
      </div>
    </header>
  )
}