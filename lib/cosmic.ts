import { createBucketClient } from '@cosmicjs/sdk'
import { Teacher, Student, Course, hasStatus } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

export async function getTeachers(): Promise<Teacher[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'teachers' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Teacher[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch teachers')
  }
}

export async function getTeacher(slug: string): Promise<Teacher | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'teachers', slug })
      .depth(1)
    return response.object as Teacher
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch teacher')
  }
}

export async function getStudents(): Promise<Student[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'students' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Student[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch students')
  }
}

export async function getStudent(slug: string): Promise<Student | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'students', slug })
      .depth(1)
    return response.object as Student
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch student')
  }
}

export async function getCourses(): Promise<Course[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'courses' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Course[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch courses')
  }
}

export async function getCourse(slug: string): Promise<Course | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'courses', slug })
      .depth(1)
    return response.object as Course
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch course')
  }
}