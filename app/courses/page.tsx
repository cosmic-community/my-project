import { getCourses } from '@/lib/cosmic'
import CourseCard from '@/components/CourseCard'

export const metadata = {
  title: 'Courses | School Portal',
}

export default async function CoursesPage() {
  const courses = await getCourses()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Courses</h1>
        <p className="text-lg text-gray-600 mt-3">Discover our diverse learning opportunities.</p>
      </div>

      {courses.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
          <div className="text-6xl mb-4">📚</div>
          <p className="text-gray-600">No courses found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  )
}