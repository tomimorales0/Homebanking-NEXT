import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MyBank - Home Banking',
  description: 'Manage your finances with ease',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <Header />
          <div className="flex-1 flex">
            <Sidebar />
            <main className="flex-1 p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}