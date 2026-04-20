import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900">
            <span className="text-2xl">🏫</span>
            <span className="bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">
              School Portal
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/teachers" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
              Teachers
            </Link>
            <Link href="/students" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
              Students
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
              Courses
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}