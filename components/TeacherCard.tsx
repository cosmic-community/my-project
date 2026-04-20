import Link from 'next/link'
import { Teacher, getMetafieldValue } from '@/types'

export default function TeacherCard({ teacher }: { teacher: Teacher }) {
  const photo = teacher.metadata?.photo
  const subject = getMetafieldValue(teacher.metadata?.subject)
  const fullName = getMetafieldValue(teacher.metadata?.full_name) || teacher.title

  return (
    <Link
      href={`/teachers/${teacher.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-square overflow-hidden bg-gradient-to-br from-brand-100 to-brand-200">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={fullName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">👨‍🏫</div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-900 group-hover:text-brand-600 transition-colors">
          {fullName}
        </h3>
        {subject && <p className="text-sm text-brand-600 font-medium mt-1">{subject}</p>}
      </div>
    </Link>
  )
}