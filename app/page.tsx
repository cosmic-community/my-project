import Link from 'next/link'
import { getTeachers, getStudents, getCourses } from '@/lib/cosmic'
import TeacherCard from '@/components/TeacherCard'
import StudentCard from '@/components/StudentCard'
import CourseCard from '@/components/CourseCard'

export default async function HomePage() {
  const [teachers, students, courses] = await Promise.all([
    getTeachers(),
    getStudents(),
    getCourses(),
  ])

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.15),_transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Welcome to Our School Portal
            </h1>
            <p className="mt-6 text-lg md:text-xl text-brand-100">
              Meet our dedicated teachers, talented students, and explore our diverse course offerings.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/courses"
                className="px-6 py-3 bg-white text-brand-700 font-semibold rounded-lg hover:bg-brand-50 transition-colors"
              >
                Explore Courses
              </Link>
              <Link
                href="/teachers"
                className="px-6 py-3 bg-brand-800/50 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-brand-800/70 transition-colors"
              >
                Meet Our Teachers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="text-4xl mb-2">👨‍🏫</div>
            <div className="text-4xl font-bold text-gray-900">{teachers.length}</div>
            <div className="text-gray-600 font-medium">Teachers</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="text-4xl mb-2">🎓</div>
            <div className="text-4xl font-bold text-gray-900">{students.length}</div>
            <div className="text-gray-600 font-medium">Students</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="text-4xl mb-2">📚</div>
            <div className="text-4xl font-bold text-gray-900">{courses.length}</div>
            <div className="text-gray-600 font-medium">Courses</div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      {courses.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Courses</h2>
              <p className="text-gray-600 mt-2">Explore our curriculum offerings</p>
            </div>
            <Link href="/courses" className="text-brand-600 font-semibold hover:text-brand-700 hidden md:block">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      )}

      {/* Featured Teachers */}
      {teachers.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Teachers</h2>
                <p className="text-gray-600 mt-2">Meet our dedicated educators</p>
              </div>
              <Link href="/teachers" className="text-brand-600 font-semibold hover:text-brand-700 hidden md:block">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {teachers.slice(0, 4).map((teacher) => (
                <TeacherCard key={teacher.id} teacher={teacher} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Students */}
      {students.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Students</h2>
              <p className="text-gray-600 mt-2">Celebrating our learners</p>
            </div>
            <Link href="/students" className="text-brand-600 font-semibold hover:text-brand-700 hidden md:block">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {students.slice(0, 4).map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}