'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon, CreditCardIcon, BanknotesIcon, ArrowsRightLeftIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navItems = [
  { icon: HomeIcon, label: 'Inicio', href: '/' },
  { icon: CreditCardIcon, label: 'Cuenta', href: '/cuenta' },
  { icon: BanknotesIcon, label: 'Facturacion', href: '/facturas' },
  { icon: ArrowsRightLeftIcon, label: 'Transferencias', href: '/transferencias/cuentas' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-20 p-2 rounded-md bg-white shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      <nav className={`
        bg-gray-600 w-64 p-6 space-y-4 fixed top-10 left-0 h-min-full z-10 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static
      `}>
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              href={item.href}
              className={`flex items-center px-4 py-2 rounded-md ${
                pathname === item.href
                  ? 'bg-emerald-200-100 text-emerald-600'
                  : 'text-gray-100 hover:bg-gray-500'
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
          <div className="mr-2 h-5 w-5" />
          <span>Cerrar sesión</span>
        </Link>
      </nav>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-0 lg:hidden" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  )
}