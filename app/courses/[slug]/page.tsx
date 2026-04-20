// app/courses/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCourse } from '@/lib/cosmic'
import { getMetafieldValue } from '@/types'

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const course = await getCourse(slug)

  if (!course) notFound()

  const cover = course.metadata?.cover_image
  const title = getMetafieldValue(course.metadata?.title) || course.title
  const description = getMetafieldValue(course.metadata?.description)
  const teacher = course.metadata?.teacher
  const teacherName = teacher ? (getMetafieldValue(teacher.metadata?.full_name) || teacher.title) : ''
  const teacherPhoto = teacher?.metadata?.photo
  const teacherSubject = teacher ? getMetafieldValue(teacher.metadata?.subject) : ''

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/courses" className="text-emerald-600 hover:text-emerald-700 font-medium mb-6 inline-block">
        ← Back to Courses
      </Link>

      <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200">
        <div className="aspect-video overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-200">
          {cover ? (
            <img
              src={`${cover.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-9xl">📚</div>
          )}
        </div>
        <div className="p-8 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">{title}</h1>

          {description && (
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">{description}</p>
          )}

          {teacher && (
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                Taught by
              </h2>
              <Link
                href={`/teachers/${teacher.slug}`}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-brand-100 to-brand-200 flex-shrink-0">
                  {teacherPhoto ? (
                    <img
                      src={`${teacherPhoto.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                      alt={teacherName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl">👨‍🏫</div>
                  )}
                </div>
                <div>
                  <div className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                    {teacherName}
                  </div>
                  {teacherSubject && <div className="text-sm text-gray-600">{teacherSubject}</div>}
                </div>
              </Link>
            </div>
          )}
        </div>
      </article>
    </div>
  )
}