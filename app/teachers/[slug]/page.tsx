// app/teachers/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getTeacher } from '@/lib/cosmic'
import { getMetafieldValue } from '@/types'

export default async function TeacherDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const teacher = await getTeacher(slug)

  if (!teacher) notFound()

  const photo = teacher.metadata?.photo
  const fullName = getMetafieldValue(teacher.metadata?.full_name) || teacher.title
  const email = getMetafieldValue(teacher.metadata?.email)
  const subject = getMetafieldValue(teacher.metadata?.subject)
  const bio = getMetafieldValue(teacher.metadata?.bio)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/teachers" className="text-brand-600 hover:text-brand-700 font-medium mb-6 inline-block">
        ← Back to Teachers
      </Link>

      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200">
        <div className="grid md:grid-cols-2">
          <div className="aspect-square md:aspect-auto bg-gradient-to-br from-brand-100 to-brand-200">
            {photo ? (
              <img
                src={`${photo.imgix_url}?w=1200&h=1200&fit=crop&auto=format,compress`}
                alt={fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-9xl">👨‍🏫</div>
            )}
          </div>
          <div className="p-8 md:p-12">
            {subject && (
              <span className="inline-block px-3 py-1 bg-brand-100 text-brand-700 text-sm font-semibold rounded-full mb-4">
                {subject}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{fullName}</h1>
            {email && (
              <a href={`mailto:${email}`} className="text-brand-600 hover:text-brand-700 mt-2 inline-block">
                {email}
              </a>
            )}
            {bio && (
              <div className="mt-6 prose prose-gray">
                <p className="text-gray-700 leading-relaxed">{bio}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}