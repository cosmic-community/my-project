// app/students/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getStudent } from '@/lib/cosmic'
import { getMetafieldValue } from '@/types'

export default async function StudentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const student = await getStudent(slug)

  if (!student) notFound()

  const photo = student.metadata?.photo
  const fullName = getMetafieldValue(student.metadata?.full_name) || student.title
  const email = getMetafieldValue(student.metadata?.email)
  const grade = getMetafieldValue(student.metadata?.grade_level)
  const bio = getMetafieldValue(student.metadata?.bio)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/students" className="text-purple-600 hover:text-purple-700 font-medium mb-6 inline-block">
        ← Back to Students
      </Link>

      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200">
        <div className="grid md:grid-cols-2">
          <div className="aspect-square md:aspect-auto bg-gradient-to-br from-purple-100 to-pink-200">
            {photo ? (
              <img
                src={`${photo.imgix_url}?w=1200&h=1200&fit=crop&auto=format,compress`}
                alt={fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-9xl">🎓</div>
            )}
          </div>
          <div className="p-8 md:p-12">
            {grade && (
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
                {grade}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{fullName}</h1>
            {email && (
              <a href={`mailto:${email}`} className="text-purple-600 hover:text-purple-700 mt-2 inline-block">
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