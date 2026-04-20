import Link from 'next/link'
import { Course, getMetafieldValue } from '@/types'

export default function CourseCard({ course }: { course: Course }) {
  const cover = course.metadata?.cover_image
  const title = getMetafieldValue(course.metadata?.title) || course.title
  const description = getMetafieldValue(course.metadata?.description)
  const teacher = course.metadata?.teacher
  const teacherName = teacher ? (getMetafieldValue(teacher.metadata?.full_name) || teacher.title) : ''

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-video overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-200">
        {cover ? (
          <img
            src={`${cover.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">📚</div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-xl text-gray-900 group-hover:text-emerald-600 transition-colors">
          {title}
        </h3>
        {teacherName && <p className="text-sm text-gray-600 mt-1">by {teacherName}</p>}
        {description && <p className="text-sm text-gray-500 mt-2 line-clamp-2">{description}</p>}
      </div>
    </Link>
  )
}