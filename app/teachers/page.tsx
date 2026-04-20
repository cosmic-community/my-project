import { getTeachers } from '@/lib/cosmic'
import TeacherCard from '@/components/TeacherCard'

export const metadata = {
  title: 'Teachers | School Portal',
}

export default async function TeachersPage() {
  const teachers = await getTeachers()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Teachers</h1>
        <p className="text-lg text-gray-600 mt-3">Meet our dedicated team of educators.</p>
      </div>

      {teachers.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
          <div className="text-6xl mb-4">👨‍🏫</div>
          <p className="text-gray-600">No teachers found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      )}
    </div>
  )
}