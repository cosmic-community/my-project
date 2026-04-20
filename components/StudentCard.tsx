import Link from 'next/link'
import { Student, getMetafieldValue } from '@/types'

export default function StudentCard({ student }: { student: Student }) {
  const photo = student.metadata?.photo
  const grade = getMetafieldValue(student.metadata?.grade_level)
  const fullName = getMetafieldValue(student.metadata?.full_name) || student.title

  return (
    <Link
      href={`/students/${student.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-purple-100 to-pink-200">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={fullName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">🎓</div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-900 group-hover:text-purple-600 transition-colors">
          {fullName}
        </h3>
        {grade && (
          <span className="inline-block mt-2 px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
            {grade}
          </span>
        )}
      </div>
    </Link>
  )
}