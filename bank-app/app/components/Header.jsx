import { CurrencyDollarIcon } from '@heroicons/react/24/outline'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <CurrencyDollarIcon className="h-8 w-8 text-blue-600 mr-2" />
          <span className="text-xl font-bold">MyBank</span>
        </div>
        <div className="flex items-center">
          <span className="mr-4">Welcome, John Doe</span>
          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-sm font-medium">JD</span>
          </div>
        </div>
      </div>
    </header>
  )
}