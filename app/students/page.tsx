import { getStudents } from '@/lib/cosmic'
import StudentCard from '@/components/StudentCard'

export const metadata = {
  title: 'Students | School Portal',
}

export default async function StudentsPage() {
  const students = await getStudents()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Students</h1>
        <p className="text-lg text-gray-600 mt-3">Celebrating our amazing learners.</p>
      </div>

      {students.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
          <div className="text-6xl mb-4">🎓</div>
          <p className="text-gray-600">No students found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      )}
    </div>
  )
}