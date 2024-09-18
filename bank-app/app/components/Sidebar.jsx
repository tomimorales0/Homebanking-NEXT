'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon, CreditCardIcon, BanknotesIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'

const navItems = [
  { icon: HomeIcon, label: 'Inicio', href: '/' },
  { icon: CreditCardIcon, label: 'Cuenta', href: '/cuenta' },
  { icon: BanknotesIcon, label: 'Fondos', href: '/fondos' },
  { icon: Cog6ToothIcon, label: 'Ajustes', href: '/ajustes' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <nav className="bg-white w-64 p-6 space-y-4">
      {navItems.map((item) => {
        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center px-4 py-2 rounded-md ${
              pathname === item.href
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Icon className="mr-2 h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        )
      })}
      <Link
        href="/logout"
        className="flex items-center text-red-500 hover:bg-red-100 px-4 py-2 rounded-md"
      >
        <span>Logout</span>
      </Link>
    </nav>
  )
}