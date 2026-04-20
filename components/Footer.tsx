export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏫</span>
            <span className="font-bold text-white">School Portal</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} School Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}